---
order: 130
chapter: 1
number: "1.3"
slug: section-1-3
title: 在笔记与文献软件中使用大模型
nav_title: 笔记与文献软件
---

除了网页和独立客户端，也可以把大模型直接放进日常使用的笔记与文献软件中。这样做的主要价值不是获得一个新的模型，而是让模型在正确的工作环境里读取材料、编辑笔记和完成连续任务。

#### Obsidian：Claudian

[Claudian](https://github.com/YishenTu/claudian) 是一个 Obsidian 插件，可以把 Claude Code、Codex、OpenCode、Pi 等 Agent 接入 Obsidian。当前知识库可以作为 Agent 的工作目录，因此它能够在获得授权后搜索、读取和修改其中的 Markdown 文件。

适合用来：

- 解释、改写或整理当前笔记；
- 搜索知识库，汇总分散在多个文件中的内容；
- 按模板建立概念笔记、论文笔记或项目索引；
- 使用 Prompt、Skill 和 MCP 执行多步骤工作流。

最小使用路径：安装并启用 Claudian，连接一个受支持的 Agent，然后先让它处理一个测试目录中的少量笔记。确认修改方式和权限范围后，再逐步开放正式知识库。

#### Zotero：llm-for-zotero

[llm-for-zotero](https://github.com/yilewang/llm-for-zotero) 把大模型和研究 Agent 放入 Zotero 阅读环境。打开论文后，可以直接针对当前 PDF、选中文本或图表提问，也可以比较多篇文献，并把结果保存为 Zotero 笔记或本地 Markdown 文件。

适合用来：

- 概括论文的问题、方法和主要结果；
- 解释选中的定义、公式或证明段落；
- 比较多篇论文的假设、结论和技术路线；
- 生成带出处的阅读笔记，并回到原文核查；
- 在 Agent 模式下执行文献搜索、分类和整理任务。

最小使用路径：从项目 Releases 下载 `.xpi` 文件，在 Zotero 的附加组件管理器中安装；然后选择 API、本地兼容模型、WebChat、Codex App Server 或 Claude Code 等后端，并先用一篇熟悉的论文测试问答和引用定位。

#### 如何选择

| 入口 | 模型面对的主要材料 | 更适合的任务 |
|---|---|---|
| Claudian + Obsidian | 已经形成的 Markdown 笔记和项目文件 | 知识整理、笔记维护、跨文件工作流 |
| llm-for-zotero + Zotero | 论文、附件、元数据和文献库 | 阅读论文、比较文献、生成研究笔记 |

两者可以配合使用：先在 Zotero 中阅读和提取文献内容，再把经过核查的结果保存到 Obsidian，形成长期知识库。

> **它们与 MCP 的区别**
>
> 插件是在熟悉的软件内部直接提供 AI 界面；MCP 则是让外部 Agent 以统一方式连接 Zotero、Obsidian 或其他工具。初学者可以先使用插件建立直观认识，再在第 3 章学习如何把多个软件连接成完整工作流。

> **使用边界**
>
> 在允许 Agent 修改整个知识库之前先做好 Git 版本控制或备份。论文总结和引用必须回到原文核对；涉及未公开论文、审稿材料或课题组内部资料时，还要确认所选模型后端的数据政策。
