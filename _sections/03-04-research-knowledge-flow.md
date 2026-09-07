---
order: 340
chapter: 3
number: "3.4"
slug: section-3-4
title: 课题组研究知识流
nav_title: 研究知识流
---

课题组当前设计的知识流可以概括为：

> Zotero → Zotero MCP → Agent → 知识库 MCP → Logseq / Obsidian

它与 Danus 的目标不同。Danus 主要组织多个 Agent 完成长程数学推理；这条知识流主要解决论文怎样进入课题组知识库，以及研究过程中产生的笔记怎样被保存、复查和再次使用。

#### 1. Zotero：文献来源层

Zotero 保存论文文件、书目信息、分类、标签和批注。它应当作为原始文献和引用信息的主要来源，而不是把模型生成的摘要当作原文替代品。

#### 2. Zotero MCP：文献读取接口

[54yyyu/zotero-mcp](https://github.com/54yyyu/zotero-mcp) 把 Zotero 中的检索、元数据、全文和批注能力暴露给 Agent。MCP 只负责提供标准化能力，并不决定应该阅读哪篇论文或怎样生成笔记。

#### 3. Agent：任务中枢

Agent 是整个知识流的决策与执行中心。它接收研究者的问题，判断任务属于查询、泛读、精读还是知识固化，然后选择 Prompt、Skill、Workflow 和 MCP 工具。

当前可以使用 Pi 等开放 Agent 作为运行环境。真正需要长期积累的是课题组自己的任务标准，例如论文忠实拆解、定理核查、引用定位和研究笔记模板，而不是绑定某一个基础模型。

#### 4. 知识库 MCP：写入与检索接口

[ergut/mcp-logseq](https://github.com/ergut/mcp-logseq) 可以让 Agent 读取、创建和管理 Logseq 页面。对于 Obsidian，也可以使用相应 MCP 工具或直接管理 Markdown 文件。

这一侧 MCP 的作用，是把 Agent 产生的结构化结果写入知识库，并在后续任务中重新检索，而不是让笔记停留在一次对话里。

#### 5. Logseq / Obsidian：人工维护的知识层

Logseq 或 Obsidian 保存最终可读、可修改的研究知识。研究者在这里核对内容、添加双向链接、建立专题关系，并决定哪些结论可以进入长期知识库。

Obsidian 和文件型 Logseq graph 可以直接以 Markdown 文件为基础；Logseq DB 模式则以内部的结构化 block 数据为主。因此，跨软件共享时不应假设两者底层完全相同，可以另外保留稳定的 Markdown 导出和必要的 JSON 结构。

#### 一个完整的知识循环

1. 研究者在 Zotero 中收集并整理论文。
2. Agent 通过 Zotero MCP 检索和读取必要材料。
3. Agent 按指定 Skill 或 Workflow 提取问题、定义、定理、证明结构和引用。
4. 结果首先形成可审查的 Markdown；需要程序交换时，可附加 JSON 等结构化数据。
5. Agent 通过知识库 MCP 写入 Logseq，或写入 Obsidian 的 Markdown 文件。
6. 研究者检查、修改并建立知识关联。
7. 后续任务再次从知识库读取已有结果，继续研究或写作。

这条链路中的责任边界应当保持清楚：Zotero 保存原始文献，Agent 负责处理过程，Logseq/Obsidian 保存人工审定后的研究知识，Git 负责版本记录和课题组共享。
