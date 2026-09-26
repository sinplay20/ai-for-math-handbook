---
order: 340
chapter: 3
number: "3.4"
slug: section-3-4
title: 课题组研究知识流
nav_title: 研究知识流
hidden: false
---

这条知识流的目标，是让论文材料可以被 Agent 读取、加工和回溯，让人工审定后的研究知识能够长期积累，并在必要时进入 Lean 做形式化验证。

<figure class="research-flow" aria-labelledby="research-flow-caption">
  <figcaption id="research-flow-caption">Research Knowledge Flow</figcaption>
  <div class="research-flow-scroll" tabindex="0" role="region" aria-label="课题组研究知识流横向结构图，可左右滚动查看">
    <div class="research-flow-grid" role="img" aria-label="Zotero 与 Agent、Logseq 或 Obsidian、JSON、Lean 双向连接。LLM 位于 Agent 上方并通过 API 连接，Git 位于 JSON 上方并负责版本控制。研究者位于 Agent 与知识库下方，负责提出任务、作出决策、核查和编辑知识。">
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
      <div class="research-flow-vlink research-flow-human-agent" aria-hidden="true"><span>Task · Decision</span><i></i></div>
      <div class="research-flow-vlink research-flow-human-knowledge" aria-hidden="true"><span>Review · Edit</span><i></i></div>
      <div class="research-flow-node research-flow-human">
        <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="7" r="3"/><path d="M5 21c.5-5 3-8 7-8s6.5 3 7 8"/></svg>
        <strong>Human Researcher</strong>
        <span>Goals · Review · Final Decisions</span>
      </div>
    </div>
  </div>
  <p class="research-flow-hint">在窄屏设备上左右滑动查看完整横向结构。</p>
</figure>

图中的主线始终保持横向：**Zotero ↔ Agent ↔ Logseq / Obsidian ↔ JSON ↔ Lean**。LLM 和 Git 是两条辅助能力：Agent 通过 API 调用 LLM，Git 则对 JSON 等可交换、可审查的文件进行版本控制。研究者位于 Agent 与知识库下方：向 Agent 提出任务并作出关键决策，同时核查、修改和批准进入长期知识库的内容。

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

#### 人始终拥有最终决定权

Agent 可以自动检索、抽取、比较和写入，但不能替代研究者判断数学含义、引用忠实性和结论重要性。研究者可以在每个关键节点暂停流程、修改任务或拒绝写入；只有经过人工核查的内容，才应被视为课题组知识库中的可靠记录。Lean 的通过状态也只说明形式化代码被内核接受，原命题是否正确表达研究问题仍需人来确认。

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

<div class="knowledge-progression" id="knowledge-progression" markdown="1">

#### 知识库的起步与进阶

**先把知识保存好、关联好，再按需要增强检索和关系查询。** 初期不必搭建复杂平台：用 Obsidian 或 Logseq 保存人工核查的笔记，让 Zotero 继续管理原始文献。Embedding／RAG 与知识图谱是两种可组合的增强方向，不是必须依次完成的升级清单。

##### 起步：Obsidian 或 Logseq，加上双向链接

<div class="table-scroll knowledge-comparison" id="knowledge-tools" role="region" aria-label="Obsidian 与 Logseq 的起步选择，窄屏可横向滚动" tabindex="0" markdown="1">

| 工具 | 组织方式与起步优势 | 更适合的使用方式 |
| --- | --- | --- |
| **Obsidian** | 以 Markdown 文档为主，插件与教程生态丰富，文件读写和备份较直观；选择经过验证的软件、插件与 MCP 组合，可降低配置和日常维护负担 | 初学者，以及以文档为中心整理文献笔记、专题综述和长篇研究记录的成员 |
| **Logseq** | 以大纲和块组织内容，可把一条定义、引理或证明步骤作为独立单元引用、复用和追踪 | 经常拆解论证片段、需要细粒度引用，并希望在多处复用同一条笔记的成员 |

</div>

<p class="caption">窄屏可左右滑动查看完整表格。这里比较的是组织方式与使用建议，不是软件或 MCP 稳定性的实测排名。</p>

**两者都可以通过双向链接建立关联。** 在笔记 A 中链接到笔记 B，再从 B 的反向链接查看哪些笔记引用了它。例如，让“论文笔记”链接到其中使用的“定义”和“关键引理”，而不只是把文件分进不同文件夹。

**Obsidian 也支持块引用。** Logseq 的特点不是独占这项能力，而是以块为日常组织与操作的基本单位，细粒度引用更自然地融入工作流。使用 Logseq 时，还需确认文件图谱或 DB 图谱与所选 MCP 服务的兼容性，不能假设不同版本的数据存储和接口完全相同。

关于“稳定、操作简单”，应落到具体组合：优先使用课题组测试过的版本与配置，保留备份，先验证检索、读取和写入。软件生态丰富不等于每一个社区 MCP 实现都同样稳定，也不应仅凭工具名称作保证。

起步阶段先统一三件事：**笔记对象与命名、原文来源与定位、人工核查状态**。一条双向链接只表示“这里引用或关联了那里”，不会自动说明它们是证明依赖、特例关系还是观点冲突。

##### 检索进阶：Embedding 与 RAG

当笔记增多，或者关键词不同但内容相关时，可以考虑增强检索：

- **Embedding（向量表示）**：把文本片段编码为向量，按相似度寻找可能相关的材料。它帮助“找得更广”，但相似度不是数学上的等价性或适用性判据。
- **RAG（检索增强生成）**：先从知识库检索，再把相关材料连同来源提供给模型，让模型据此组织回答。这是在回答时补充上下文，不是把知识库重新训练进模型参数。
- **二者不是同一件事**：Embedding 是一种检索手段；RAG 是使用检索结果辅助生成的流程。RAG 也可以使用关键词、结构化过滤或图检索，不必只依赖向量检索。

一个最小流程是：**笔记与文献 → 按语义切块并保留来源 → 建立索引 → 根据问题检索 → 连同出处交给模型 → 人工回到原文核查**。需要语义相似度检索时，再加入 Embedding 与向量索引。

对数学材料，切块时尤其要保留定理的假设、结论、记号约定和原文位置，避免只召回结论而遗漏条件。检索到两条都涉及“边界估计”的结果，并不意味着它们使用相同的算子、边界条件或常数依赖。

##### 关系进阶：图引擎与知识图谱

当你需要回答“某个定理依赖哪些引理？”“一项假设影响哪些结论？”时，单纯的文字关联和相似度检索可能不够，需要显式建模关系：

- **知识图谱是知识的组织方式**：把论文、定义、引理、定理等作为实体，给关系标明类型，并保留来源、条件与核查状态。例如“定理 T 使用引理 L”“命题 P 在条件 A 下成立”。
- **图引擎是存储与查询工具**：存储节点、关系和属性，支持按关系类型、属性及路径进行查询。它帮助追踪依赖和影响范围，但不替你判断某条数学关系是否成立。
- **双向链接图不自动等于语义知识图谱**：把链接画成网络图，只说明存在连接；要表达“依赖”“特例”“使用某假设”等含义，还需要明确的关系模型和人工核对。

起步时可以先在笔记中记录明确的关系与来源；关系数量和查询需求增长后，再考虑图数据库或其他图引擎。知识图谱可以与 RAG 结合：先沿关系找到候选材料，再读取原文用于回答；这不意味着必须放弃 Obsidian 或 Logseq，也不意味着图查询等同于证明检查。

<div class="workflow-example" aria-label="知识库三种能力的分工">
  <p>按需求增加能力，而不是一次部署全部工具</p>
  <div><span>笔记与链接：保存、组织</span><span>Embedding／RAG：检索、辅助回答</span><span>图引擎与知识图谱：关系建模、查询</span></div>
</div>

<div class="warning">
  <b>进阶不改变核查与权限边界</b>
  <p>更好的召回和关系查询，不等于更可靠的数学结论。引用、依赖关系和生成的回答都要回到原文核对。使用外部 Embedding 或模型 API 前，还应确认资料是否可以发送、访问权限如何落实，以及索引是否及时更新。</p>
</div>

功能与概念可参阅 [Obsidian 内部链接与块引用](https://help.obsidian.md/links)、[反向链接](https://help.obsidian.md/plugins/backlinks)、[Logseq 块引用文档](https://github.com/logseq/docs/blob/master/pages/The%20basics%20of%20block%20references.md)、[RAG 与检索说明](https://learn.microsoft.com/en-us/azure/search/retrieval-augmented-generation-overview)以及[图数据库基本概念](https://neo4j.com/docs/getting-started/appendix/graphdb-concepts/)。这些资料用于说明机制，不代表必须选用某个付费服务。

</div>
