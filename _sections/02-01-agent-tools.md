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
| 编程与项目型 Agent | Codex、Claude Code | 处理命令行、代码库、LaTeX 项目和本地文件 |
| Agent Harness 与可扩展 Runtime | Pi、DeepSeek Harness | 组合模型、工具、Agent Loop、Skill 和扩展 |
| 完整开放 Agent 系统 | Hermes、OpenClaw | 需要长期记忆、多入口、任务调度或持续运行的场景 |

#### 配置 Agent 时实际在配置什么

1. **模型**：选择模型与 API，并设置成本、速度和上下文长度等约束。
2. **指令与方法**：说明任务目标、项目规则，并通过 Prompt、Skill 或 Workflow 保存可复用方法。
3. **工具与权限**：只开放任务需要的文件、命令和外部服务，区分只读操作与有副作用的操作。
4. **运行边界**：设置工作目录、沙箱、最大轮数、超时、预算、停止条件和人工确认点。
5. **状态与记录**：决定保留哪些对话、工具结果、日志和长期记忆，并检查其中是否含有敏感信息。

#### 推荐的选择顺序

1. 第一次使用：从 ChatGPT Desktop 或 Claude Desktop 开始。
2. 需要处理代码、LaTeX 和项目文件：选择 Codex 或 Claude Code。
3. 想自己组合模型、工具和工作流：尝试 Pi 或 DeepSeek Harness。
4. 需要可长期运行的个人 Agent：再了解 Hermes 或 OpenClaw。
5. 不要同时配置全部工具；先用一个工具完成真实任务。

#### 官方入口

- [ChatGPT](https://chatgpt.com/download/) · [Claude](https://claude.com/download)
- [Codex](https://developers.openai.com/codex/) · [Claude Code](https://code.claude.com/docs/en/overview)
- [Pi](https://github.com/badlogic/pi-mono) · [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness)
- [Hermes](https://github.com/NousResearch/hermes-agent) · [OpenClaw](https://github.com/openclaw/openclaw)

> **权限提示**
>
> Agent 可能拥有读取文件、执行命令甚至访问账户的能力。先限制工作目录和权限；删除、发送、付费与公开发布等操作应由人确认。模型提出工具请求，不代表该请求应该被自动批准。
