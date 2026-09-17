---
order: 140
chapter: 1
number: "1.4"
slug: section-1-4
title: 个人最简知识沉淀流
nav_title: 最简知识沉淀流
---

这条最简流程只做一件事：让 ChatGPT 能从 Zotero 读取论文，把经过人工核查的结果写入 Obsidian，并在以后继续检索和复用。

<figure class="personal-knowledge-flow" aria-labelledby="personal-flow-caption">
  <figcaption id="personal-flow-caption">Personal Knowledge Flow</figcaption>
  <div class="personal-flow-scroll" tabindex="0" role="region" aria-label="个人知识沉淀流横向结构图，可左右滚动查看">
    <div class="personal-flow-grid" role="img" aria-label="Zotero 通过 MCP 与 ChatGPT Desktop 双向连接，ChatGPT Desktop 再通过 MCP 与 Obsidian 双向连接。">
      <div class="personal-flow-node">
        <strong>Zotero</strong>
        <span>Literature Source</span>
      </div>
      <div class="personal-flow-link" aria-hidden="true"><span>MCP</span><i>↔</i></div>
      <div class="personal-flow-node personal-flow-agent">
        <strong>ChatGPT Desktop</strong>
        <span>Research Assistant</span>
      </div>
      <div class="personal-flow-link" aria-hidden="true"><span>MCP</span><i>↔</i></div>
      <div class="personal-flow-node personal-flow-memory">
        <strong>Obsidian</strong>
        <span>Portable External Memory</span>
      </div>
    </div>
  </div>
  <p class="personal-flow-hint">← 手机端可左右滑动 →</p>
</figure>

#### 三部分各自负责什么

| 组件 | 最简单的理解 | 不应该承担的职责 |
| --- | --- | --- |
| Zotero | 保存论文、书目信息、PDF、批注和原始来源 | 不把自动生成的总结当作原文事实 |
| ChatGPT | 找材料、整理问题、生成笔记草稿并调用工具 | 不充当最终的数学或引用审定者 |
| Obsidian | 保存人工核查后的长期笔记和概念联系 | 不替代 Zotero 保存原始文献记录 |

#### 为什么把 Obsidian 放在终点

Obsidian 笔记以本地 Markdown 文件为基础。它可以被直接查看、复制、备份和迁移，不依赖某一次对话、某一个模型或某一家平台。因此它更适合作为个人的**外置记忆**和**知识沉淀池**：ChatGPT 的回答是临时工作区，经过核查后写入 Obsidian 的内容才是可长期维护的研究资产。

#### 最小配置路线

<ol class="steps">
  <li><span>01</span><div><b>准备软件。</b><p>安装 Zotero、ChatGPT 和 Obsidian；在 Obsidian 中新建一个专用库，例如 <code>Research-Knowledge</code>。</p></div></li>
  <li><span>02</span><div><b>连接 Zotero。</b><p>在 Zotero 设置中允许本机应用访问，然后按 <a href="https://github.com/54yyyu/zotero-mcp" target="_blank" rel="noreferrer">zotero-mcp</a> 的说明安装服务。初次配置只开放读取权限。</p></div></li>
  <li><span>03</span><div><b>连接 Obsidian。</b><p>安装 Obsidian 的 Local REST API 插件，再按 <a href="https://github.com/MarkusPfundstein/mcp-obsidian" target="_blank" rel="noreferrer">mcp-obsidian</a> 的说明连接。先把可写范围限制在测试文件夹。</p></div></li>
  <li><span>04</span><div><b>在 ChatGPT 中登记两项连接。</b><p>当前 ChatGPT 不能直接连接本机 MCP；需要在支持的套餐中启用开发者模式，并通过受信任的远程端点或 Secure MCP Tunnel 接入。没有编程基础的成员应由课题组统一提供配置，不自行公开本机端口。</p></div></li>
  <li><span>05</span><div><b>分别测试。</b><p>先让 ChatGPT 只读取一篇 Zotero 论文，再让它在 Obsidian 测试目录新建一条笔记；两步都成功后再组合使用。</p></div></li>
</ol>

<div class="warning">
  <b>当前连接限制</b>
  <p>图中把 ChatGPT Desktop 作为日常操作入口；但自定义 MCP 的创建与管理目前主要在 ChatGPT 网页端完成，而且 ChatGPT 连接的是远程 MCP 服务，不是本地 stdio 服务。具体可用性还取决于套餐和工作区权限。请以 <a href="https://help.openai.com/en/articles/12584461-developer-mode-and-mcp-apps-in-chatgpt" target="_blank" rel="noreferrer">OpenAI 官方说明</a>为准。</p>
</div>

#### 一次完整使用

1. 在 Zotero 中收好论文和 PDF。
2. 请 ChatGPT 读取指定论文，提取研究问题、定义、定理、证明思路和原文位置。
3. 回到 PDF 核查数学表述、页码与引用。
4. 确认无误后，再让 ChatGPT 把结构化笔记写入 Obsidian。
5. 下次研究相关问题时，让 ChatGPT 先检索 Obsidian 中的旧笔记，再继续工作。

可以从这个提示开始：

<div class="prompt-example">
  <span>SETUP PROMPT</span>
  <p>我是电脑小白，请一步一步协助我配置这个 MCP 服务：［粘贴仓库地址］。每当需要我安装软件、授权、输入密钥或修改配置时，请停下来告诉我，不要替我继续。</p>
</div>

#### 权限与核查

- Zotero 优先只读；不要把 API Key、密码或未公开材料写入笔记仓库。
- Obsidian 先在测试文件夹开放写权限，确认文件路径和内容正确后再扩大范围。
- 数学结论、引用和页码必须由人回到论文原文检查。
- Obsidian 库需要独立备份；熟悉后再考虑用 Git 记录版本。

<div class="project-entry" aria-label="个人知识沉淀流项目仓库入口">
  <div>
    <span class="project-entry-label">PROJECT REPOSITORY</span>
    <strong>个人知识沉淀流</strong>
    <p>后续集中提供安装清单、配置模板、测试提示词和示例 Obsidian 笔记。</p>
  </div>
  <!-- 仓库创建后，将下面的 span 替换为带真实地址的 a 标签。 -->
  <span class="project-entry-status">仓库筹备中</span>
</div>
