---
order: 210
chapter: 2
number: "2.1"
slug: section-2-1
title: 选择、配置和使用 Agent 工具
nav_title: Agent 工具
---

Agent 不只是“能够多回答几轮的大模型”。当一个软件能够反复调用模型、让模型选择工具、把工具结果送回模型，并依据停止条件结束任务时，我们才看到了一个基础 Agent 的运行过程。

<div class="concept-line" role="img" aria-label="Agent 由大模型、上下文、工具、Harness 或 Runtime、Loop 和安全边界共同构成">
  <span>LLM</span><i>+</i><span>上下文</span><i>+</i><span>工具</span><i>+</i><span>Harness / Runtime</span><i>+</i><span>Loop</span><i>+</i><span>安全边界</span>
</div>

#### 先区分几个基础概念

<dl class="definitions">
  <div><dt>LLM</dt><dd>大语言模型。它接收当前上下文并生成下一步输出，例如自然语言回答、结构化工具请求或停止信号。模型本身通常不直接读取你的磁盘，也不亲自执行命令。</dd></div>
  <div><dt>工具</dt><dd>Agent 可以请求使用的外部能力，例如文件读写、代码执行、网页检索、数据库查询和 MCP 服务。真正的工具操作由模型之外的软件执行。</dd></div>
  <div><dt>Harness</dt><dd>把模型、上下文和工具连接起来的宿主框架。它负责组装模型输入、暴露工具、解析模型输出、执行或转发工具请求、回填结果，并实施权限与停止规则。</dd></div>
  <div><dt>Runtime</dt><dd>Agent 实际运行时的执行环境和生命周期服务，包括会话状态、模型与工具调用、事件处理、权限、沙箱、超时、日志和任务调度等。</dd></div>
  <div><dt>Agent Loop</dt><dd>反复执行“读取状态 → 调用模型 → 采取动作 → 获得观察 → 更新状态”的控制循环。它使 Agent 能依据中间结果继续工作，而不是只生成一次回答。</dd></div>
  <div><dt>Run / Session</dt><dd>从接收任务到停止的一次完整运行。一个 run 通常包含多次 loop iteration，也可能包含人工确认、失败重试或子任务。</dd></div>
</dl>

这些术语在不同项目中并没有完全统一的边界。本手册用 **Harness** 强调“把模型与工具组织起来的软件框架”，用 **Runtime** 强调“任务运行时真正提供状态、执行和生命周期管理的环境”。在轻量工具中，两者常由同一套程序实现，也经常被混用。

#### LLM 与 Harness 如何完成一次 Loop

下面主线展示一次“需要调用工具”的 loop iteration。为了便于理解，本手册把一次 iteration 定义为：**Harness 组装一次模型输入开始，直到工具结果被写回状态，或模型给出最终回答而停止。**

<figure class="agent-loop-diagram" aria-labelledby="agent-loop-caption">
  <figcaption id="agent-loop-caption">一次工具调用型 Agent Loop：谁负责思考，谁负责执行</figcaption>
  <div class="agent-loop-scroll" tabindex="0" aria-label="横向滚动查看完整 Agent Loop">
    <div class="agent-loop-track">
      <div class="agent-loop-step agent-loop-harness">
        <span>HARNESS</span>
        <strong>1 · 组装输入</strong>
        <p>汇集指令、任务、历史、工具说明与当前状态</p>
      </div>
      <div class="agent-loop-arrow"><i>→</i><span>模型输入</span></div>
      <div class="agent-loop-step agent-loop-llm">
        <span>LLM</span>
        <strong>2 · 生成下一步</strong>
        <p>返回工具请求，或者直接返回最终回答</p>
      </div>
      <div class="agent-loop-arrow"><i>→</i><span>模型输出</span></div>
      <div class="agent-loop-step agent-loop-harness">
        <span>HARNESS</span>
        <strong>3 · 解析与检查</strong>
        <p>校验输出结构、工具权限与停止条件</p>
      </div>
      <div class="agent-loop-arrow"><i>→</i><span>允许执行</span></div>
      <div class="agent-loop-step agent-loop-tool">
        <span>TOOL / ENV</span>
        <strong>4 · 执行动作</strong>
        <p>读文件、检索、运行命令或调用外部服务</p>
      </div>
      <div class="agent-loop-arrow"><i>→</i><span>观察结果</span></div>
      <div class="agent-loop-step agent-loop-harness">
        <span>HARNESS</span>
        <strong>5 · 更新状态</strong>
        <p>记录工具结果，准备下一次模型调用</p>
      </div>
    </div>
    <div class="agent-loop-return"><b>↺</b><span>任务未完成：更新后的状态进入下一次 iteration</span></div>
  </div>
  <p class="agent-loop-hint">可左右滑动查看完整流程</p>
</figure>

图中的职责边界很重要：

- **LLM 生成决策表示**：例如“调用 `read_file` 读取某个文件”，但它不直接完成磁盘操作。
- **Harness 控制循环**：它决定向模型提供什么、是否允许工具请求、怎样执行请求，以及是否继续下一轮。
- **工具产生观察结果**：文件内容、命令输出或检索结果会由 Harness 写回上下文，供下一次模型调用使用。
- 如果模型在第 2 步给出最终回答，Harness 会在第 3 步检查后停止，不再经过工具执行。

现实系统可能允许一次模型调用并行请求多个工具，也可能在工具前后增加人工确认、重试、审查或子 Agent。上图刻意保留最小结构，重点是说明：**LLM 是 Loop 中被反复调用的决策组件；Harness 才是驱动 Loop 和执行边界的主体。**

#### 一次 iteration 不等于一次完整任务

假设 Agent 要修改一份 LaTeX 论文，它可能经历：

1. 第一次 iteration：模型请求列出项目文件，Harness 执行并返回目录。
2. 第二次 iteration：模型请求读取目标章节，Harness 返回文件内容。
3. 第三次 iteration：模型生成修改并请求写入文件。
4. 第四次 iteration：模型请求运行编译，Harness 返回报错或成功信息。
5. 后续 iteration：模型修复错误、重新验证，最后给出总结并停止。

因此，模型能力决定“每一步能判断得多好”，而 Harness、Runtime 和 Loop 决定“这些判断能否安全、连续、可追踪地变成行动”。

#### Harness 与完整 Agent 系统

- **Agent Harness** 提供运行 Agent 的基础结构，例如模型调用、工具执行、状态管理、Agent Loop 和扩展接口。
- **完整 Agent 系统** 在 Harness 之上继续增加长期记忆、定时任务、多消息渠道、子 Agent、任务队列，或者网页与桌面入口。

Pi 和 DeepSeek Harness 因此属于同一基础类别：Pi 更轻量，适合从小型工作流开始组合；DeepSeek Harness 更强调插件化架构。Hermes 和 OpenClaw 则更接近已经组装好的长期 Agent 应用。

#### 工具选择

| 工具类型 | 可选工具 | 适合的任务 |
| --- | --- | --- |
| 对话型桌面应用 | ChatGPT Desktop、Claude Desktop | 日常对话、文件分析与低配置使用 |
| 编程与项目型 Agent | OpenCode、Codex、Claude Code | 处理命令行、代码库、LaTeX 项目和本地文件 |
| Agent Harness 与可扩展 Runtime | Pi、DeepSeek Harness | 组合模型、工具、Agent Loop、Skill 和扩展 |
| 完整开放 Agent 系统 | Hermes、OpenClaw | 需要长期记忆、多入口、任务调度或持续运行的场景 |

#### 四款 Agent 的选型推荐

这里重点比较 **ChatGPT Desktop、OpenCode、Pi 与 Hermes Agent**。Hermes 指 [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)。门槛与场景是本手册的使用建议，不是模型性能排名；同一个工具接入不同模型、权限和运行环境，实际表现也会不同。

<div class="table-scroll agent-comparison" id="agent-selection" role="region" aria-label="四款 Agent 选型比较，窄屏可横向滚动" tabindex="0" markdown="1">

| 工具 | 入口与上手门槛 | 模型与费用方式 | MCP 与工作流扩展 | 优先考虑的研究场景 |
| --- | --- | --- | --- | --- |
| **ChatGPT Desktop** | 较低：图形桌面入口；涉及文件和工具时仍需理解授权 | 以 ChatGPT 账户提供的模型和额度为主；具体功能与计费取决于账户及使用方式 | 支持本机 STDIO 与 Streamable HTTP MCP；入口和可用能力以客户端版本及工作区策略为准 | 日常论文讨论、文件分析；按第 1.4 节连接文献库与笔记库 |
| **OpenCode** | 中等：终端、桌面或 IDE 入口；需要理解项目路径和基本命令 | 可配置多家模型供应商；使用 API 或其支持的登录方案，费用按供应商和方案计算 | 原生支持本地与远程 MCP；有 Agent、权限、Skill 与插件配置 | 修改 LaTeX、编译排错、研究脚本和项目文件；希望灵活选择模型 |
| **Pi** | 较高：轻量终端 Harness；定制越多，维护责任越大 | 多供应商 API；部分供应商支持登录或订阅接入，仍需核对使用条款与计费 | 核心不内建 MCP；通过扩展接入。Skill、提示模板与 TypeScript 扩展适合组合自定义工作流 | 想精细组织研究工具、核查步骤和可复用流程，并愿意维护自己的配置 |
| **Hermes Agent** | 中至高：终端、桌面与消息入口；持续运行时还需维护服务 | 可选择 Nous Portal、OpenRouter 等供应商或自定义端点；模型、工具和部署成本分别核算 | 原生 MCP、Skill、跨会话记忆、定时任务与消息渠道；不等于自动获得不受限权限 | 定期资料整理、长期研究助理、多入口任务；需要审核记忆写入与自动化结果 |

</div>

<p class="caption">窄屏可左右滑动查看完整表格。</p>

**先看任务，再看工具。** 图形界面不意味着没有执行风险；支持 MCP 也不意味着已经安装了 Zotero、Obsidian 等服务。开源 Agent 软件不等于模型调用免费，已有聊天订阅也不保证能在任何第三方客户端通用。

<div class="warning">
  <b>不要把扩展功能和默认权限混为一谈</b>
  <p>Pi 的 MCP 接入与额外审批流程需要相应扩展或外部隔离；核心不是默认每次都弹窗确认。OpenCode 虽有权限规则，但默认也不是所有操作都询问。无论选哪一个工具，都先核对文件写入、命令执行和外部服务权限，不能只靠一句“请先询问我”。Hermes 的长期记忆与自动生成的 Skill 也需要人工审查，不能当作已核查的数学结论。</p>
</div>

本节功能说明依据 [ChatGPT 桌面端 MCP 文档](https://developers.openai.com/codex/extend/mcp)、[OpenCode 文档](https://opencode.ai/docs/)与[权限说明](https://opencode.ai/docs/permissions/)、[Pi 文档](https://github.com/earendil-works/pi-mono/tree/main/packages/coding-agent)、[Hermes 官方文档](https://hermes-agent.nousresearch.com/docs/)。功能和套餐会更新，安装前请核对当前说明；这里不提供速度、费用或安全性的实测排名。

#### 配置 Agent 时实际在配置什么

1. **模型**：选择模型与 API，并设置成本、速度和上下文长度等约束。
2. **指令与方法**：说明任务目标、项目规则，并通过 Prompt、Skill 或 Workflow 保存可复用方法。
3. **工具与权限**：只开放任务需要的文件、命令和外部服务，区分只读操作与有副作用的操作。
4. **运行边界**：设置工作目录、沙箱、最大轮数、超时、预算、停止条件和人工确认点。
5. **状态与记录**：决定保留哪些对话、工具结果、日志和长期记忆，并检查其中是否含有敏感信息。

#### 按需求选择，而不是按功能多少排名

1. **不熟悉命令行，先完成日常论文与笔记任务**：优先从 ChatGPT Desktop 开始，复杂配置由 Agent 引导、课题组协助核对。
2. **主要处理 LaTeX、研究脚本与项目文件，想自由选择模型**：优先考虑 OpenCode，先在测试项目中设置需要确认的操作。
3. **希望自己组合工具和研究工作流**：考虑 Pi；同时准备维护扩展、权限边界与配置，而不是把“轻量”理解为已经替你配置好全部功能。
4. **确实需要长期记忆、定时任务或消息渠道**：考虑 Hermes Agent；先建立人工核查与停止机制，再启用持续运行。
5. **只选一个完成真实任务**：不必同时安装四款；工具是否适合你，比功能清单是否最长更重要。

#### Agent 参考资料

<div class="note" id="agent-reference">
  <b>推荐延伸阅读</b>
  <p><a href="https://github.com/bojieli/ai-agent-book" target="_blank" rel="noreferrer">《深入理解 AI Agent：设计原理与工程实践》 · bojieli/ai-agent-book</a></p>
  <p>可补充学习 Agent、上下文工程、记忆、工具与 MCP、Coding Agent 及多 Agent 协作。这是原理与工程实践参考资料，不是需要安装的 Agent 工具；具体软件配置仍以各项目官方文档为准。</p>
</div>

#### 官方入口

- [ChatGPT](https://chatgpt.com/download/) · [Claude](https://claude.com/download)
- [OpenCode](https://opencode.ai/docs/) · [Codex](https://developers.openai.com/codex/) · [Claude Code](https://code.claude.com/docs/en/overview)
- [Pi](https://pi.dev/) · [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness)
- [Hermes](https://github.com/NousResearch/hermes-agent) · [OpenClaw](https://github.com/openclaw/openclaw)

> **权限提示**
>
> Agent 可能拥有读取文件、执行命令甚至访问账户的能力。先限制工作目录和权限；删除、发送、付费与公开发布等操作应由人确认。模型提出工具请求，不代表该请求应该被自动批准。
