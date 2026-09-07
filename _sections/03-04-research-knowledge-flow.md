---
order: 340
chapter: 3
number: "3.4"
slug: section-3-4
title: 课题组研究知识流
nav_title: 研究知识流
---

这条知识流的目标，是让论文材料可以被 Agent 读取、加工和回溯，让人工审定后的研究知识能够长期积累，并在必要时进入 Lean 做形式化验证。

<figure class="research-flow" aria-labelledby="research-flow-caption">
  <figcaption id="research-flow-caption">Research Knowledge Flow</figcaption>
  <div class="research-flow-scroll" tabindex="0" role="region" aria-label="课题组研究知识流横向结构图，可左右滚动查看">
    <div class="research-flow-grid" role="img" aria-label="Zotero 与 Agent、Logseq 或 Obsidian、JSON、Lean 双向连接。LLM 位于 Agent 上方并通过 API 连接，Git 位于 JSON 上方并负责版本控制。">
      <div class="research-flow-node research-flow-top research-flow-llm">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3l1.2 4.1L17 9l-3.8 1.9L12 15l-1.2-4.1L7 9l3.8-1.9L12 3Zm6 10 .7 2.3L21 16.5l-2.3 1.2L18 20l-.7-2.3-2.3-1.2 2.3-1.2L18 13Z"/></svg>
        <strong>LLM</strong>
        <span>Model Service</span>
      </div>
      <div class="research-flow-node research-flow-top research-flow-git">
        <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="6" cy="5" r="2"/><circle cx="18" cy="7" r="2"/><circle cx="6" cy="19" r="2"/><path d="M6 7v10M8 9c5 0 4-2 8-2"/></svg>
        <strong>Git</strong>
        <span>Version Control</span>
      </div>
      <div class="research-flow-vlink research-flow-api" aria-hidden="true"><span>API</span><i></i></div>
      <div class="research-flow-vlink research-flow-version" aria-hidden="true"><span>Versioning</span><i></i></div>
      <div class="research-flow-node research-flow-zotero">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 4h11a3 3 0 0 1 3 3v13H8a3 3 0 0 1-3-3V4Zm3 16a3 3 0 0 1 3-3h8"/></svg>
        <strong>Zotero</strong>
        <span>Reference Manager</span>
      </div>
      <div class="research-flow-hlink research-flow-link-1" aria-hidden="true"><span>MCP</span><i>↔</i></div>
      <div class="research-flow-node research-flow-agent">
        <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="7" width="16" height="12" rx="3"/><path d="M12 3v4M8 12h.01M16 12h.01M8 16h8"/></svg>
        <strong>Agent</strong>
        <span>Research Orchestrator</span>
      </div>
      <div class="research-flow-hlink research-flow-link-2" aria-hidden="true"><span>MCP</span><i>↔</i></div>
      <div class="research-flow-node research-flow-knowledge">
        <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="6" cy="7" r="2"/><circle cx="18" cy="7" r="2"/><circle cx="12" cy="17" r="2"/><path d="m8 8 3 7m5-7-3 7M8 7h8"/></svg>
        <strong>Logseq / Obsidian</strong>
        <span>Knowledge Manager · LLM Wiki</span>
      </div>
      <div class="research-flow-hlink research-flow-link-3" aria-hidden="true"><i>↔</i></div>
      <div class="research-flow-node research-flow-json">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 4c-2 0-3 1-3 3v2c0 2-1 3-3 3 2 0 3 1 3 3v2c0 2 1 3 3 3M15 4c2 0 3 1 3 3v2c0 2 1 3 3 3-2 0-3 1-3 3v2c0 2-1 3-3 3"/></svg>
        <strong>JSON</strong>
        <span>Exchange Format</span>
      </div>
      <div class="research-flow-hlink research-flow-link-4" aria-hidden="true"><i>↔</i></div>
      <div class="research-flow-node research-flow-lean">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3 5 6v5c0 4.8 2.8 8.1 7 10 4.2-1.9 7-5.2 7-10V6l-7-3Z"/><path d="m9 12 2 2 4-5"/></svg>
        <strong>Lean</strong>
        <span>Formal Verification</span>
      </div>
    </div>
  </div>
  <p class="research-flow-hint">在窄屏设备上左右滑动查看完整横向结构。</p>
</figure>

LLM 和 Git 是两条辅助能力：Agent 通过 API 调用 LLM，Git 则对 JSON 等可交换、可审查的文件进行版本控制。

#### 主线中的三个核心角色

1. **Zotero：文献来源。** 保存论文、书目信息、PDF、标签和批注，是引用与原始材料的主要事实来源。模型生成的摘要不能代替论文原文。
2. **Agent：研究编排中枢。** 接收研究者的任务，选择 Prompt、Skill 和 Workflow，调用连接工具，决定读什么、如何整理以及把结果写到哪里。
3. **Logseq / Obsidian：知识管理与 LLM Wiki。** 保存经过人工核对、可以继续修改和建立链接的研究笔记，承担课题组的长期知识层。

#### MCP 在连接上，而不是单独的一块

MCP 是 Agent 与研究软件之间的连接协议。图中两个 **MCP** 标签分别表示：

- Agent 可通过 [54yyyu/zotero-mcp](https://github.com/54yyyu/zotero-mcp) 检索 Zotero 元数据、全文和批注；
- Agent 可通过 [ergut/mcp-logseq](https://github.com/ergut/mcp-logseq) 读写 Logseq 页面；连接 Obsidian 时，也可以使用相应 MCP 工具或直接管理 Markdown 文件。

MCP Server 只暴露检索、读取和写入等能力，不判断应该读哪篇论文，也不决定怎样组织笔记。任务选择、步骤编排和停止条件都属于 Agent。

#### Agent 通过 API 调用 LLM

LLM 提供理解、生成和推理能力；Agent 则负责上下文、工具调用、任务状态和执行循环。两者通过 API 双向交换请求与结果，因此可以更换模型服务，而不必重写整条知识流。

课题组真正需要长期维护的，是论文忠实拆解、定理核查、引用定位和笔记模板等 Skill 与 Workflow，而不是绑定某一个模型。

#### JSON、Git 与 Lean

- **JSON 是交换格式。** 它把已审定的定义、命题、来源定位、依赖关系和验证状态表示成机器可读数据，连接知识库与 Lean。日常阅读仍以 Markdown 笔记为主。
- **Git 负责版本控制。** 它记录 JSON、模板、schema、脚本和相关配置的修改历史，支持差异审查、回退与课题组协作。图中 Git 位于 JSON 上方，强调它管理的是可交换文件与验证接口，而不是代替知识库。
- **Lean 负责形式化验证。** 只有需要严格核验的命题才进入 Lean。验证结果和错误信息可再写回 JSON 与知识库，形成可追踪的反馈循环。

#### 一个可执行的知识循环

1. 研究者在 Zotero 中收集论文并整理元数据与批注。
2. Agent 通过 MCP 检索相关材料，再通过 API 调用 LLM 完成抽取、比较或解释。
3. Agent 按课题组模板生成带来源定位的 Markdown 草稿，并写入 Logseq 或 Obsidian。
4. 研究者核对原文、修订结论、补充链接，决定哪些内容进入长期知识库。
5. 需要程序交换或形式化检查的内容导出为 JSON，并由 Git 记录版本。
6. 选定命题进入 Lean；验证状态、依赖或错误再回写到 JSON 和知识库。
7. 后续研究重新读取已审定的笔记与验证结果，继续检索、证明或写作。

它与 Danus 的重点不同：Danus 主要编排多个 Agent 完成长程数学推理；这条知识流主要管理文献、笔记、结构化数据与形式化验证之间的可追踪转换。无论自动化程度多高，研究者仍负责判断数学含义是否正确、引用是否忠实，以及哪些结论可以对外共享。
