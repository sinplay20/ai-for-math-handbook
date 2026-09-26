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

#### 推荐的 MCP 服务

以下是可供选择的社区项目。最简流程只需连接 **Zotero 与 Obsidian**；Logseq 是已有 Logseq 知识库时的另一种选择，不必同时安装三项服务。

<div class="table-scroll mcp-recommendations" id="mcp-recommendations" role="region" aria-label="MCP 服务推荐表，窄屏可横向滚动" tabindex="0" markdown="1">

| 软件 | 推荐项目与仓库 | 主要用途 | 连接前确认 |
| --- | --- | --- | --- |
| Zotero | [54yyyu/zotero-mcp](https://github.com/54yyyu/zotero-mcp) | 检索文献，读取书目信息、PDF 全文和批注 | 由 Agent 核对 Zotero 版本、运行环境与本机访问设置；初次只开放检索、读取工具 |
| Obsidian | [MarkusPfundstein/mcp-obsidian](https://github.com/MarkusPfundstein/mcp-obsidian) | 检索、读取和写入 Markdown 笔记 | 此项目依赖 Obsidian Local REST API 插件；先使用独立测试库，妥善保管访问密钥 |
| Logseq | [ergut/mcp-logseq](https://github.com/ergut/mcp-logseq) | 检索知识库，读取和维护页面、块 | 需要 Logseq HTTP API 与访问令牌；核对所用图谱类型及当前版本的兼容性 |

</div>

<p class="caption">窄屏可左右滑动查看完整表格。</p>

#### 最小配置路线

**由 Agent 主导配置，人保留授权与确认权。** 你提供目标和仓库地址，Agent 阅读说明、检查环境、规划并逐步推进；不是让你独自照着安装教程操作。初学者优先采用课题组审核过的配置模板。

<ol class="steps" id="mcp-setup-steps">
  <li><span>01</span><div><b>准备软件与测试资料。</b><p>准备 Zotero、ChatGPT Desktop 和 Obsidian；新建一个独立的 Obsidian 测试库，例如 <code>Research-Knowledge-Test</code>，选一篇可用于测试的 Zotero 文献。</p></div></li>
  <li><span>02</span><div><b>让 Agent 主导配置 Zotero MCP。</b><p class="setup-repository">仓库：<a href="https://github.com/54yyyu/zotero-mcp" target="_blank" rel="noreferrer">https://github.com/54yyyu/zotero-mcp</a></p><p>把仓库地址与下方的<a href="#mcp-setup-prompt">配置提示词</a>一起发给 Agent，让它核对系统、Zotero 版本、依赖和本机访问设置，说明方案并逐步带你完成。初次只开放检索与读取工具；需要安装或修改配置时先停下，等你确认。</p></div></li>
  <li><span>03</span><div><b>让 Agent 主导配置 Obsidian MCP。</b><p class="setup-repository">仓库：<a href="https://github.com/MarkusPfundstein/mcp-obsidian" target="_blank" rel="noreferrer">https://github.com/MarkusPfundstein/mcp-obsidian</a></p><p>同样把仓库地址与<a href="#mcp-setup-prompt">配置提示词</a>交给 Agent，由它检查 Local REST API 插件及服务依赖，带你完成连接。插件安装、授权、输入密钥和配置修改都先说明、再确认；首次写入只在独立测试库中进行。</p></div></li>
  <li><span>04</span><div><b>在 ChatGPT Desktop 中添加两项 MCP 连接。</b><p>由 Agent 按当前客户端生成或核对配置，带你打开 <code>Settings → MCP servers → Add server</code>。根据服务实际支持的方式，选择 <code>STDIO</code> 并填写启动命令、参数等配置，或选择 <code>Streamable HTTP</code> 并填写服务地址。保存后选择 <code>Restart</code>；需要登录的服务另行授权，再用 <code>/mcp</code> 查看连接。本机 STDIO 接入无需公开网络端口，也不以远程端点或安全隧道为前提。</p></div></li>
  <li><span>05</span><div><b>让 Agent 协助分别测试。</b><p>先只读取一篇 Zotero 文献，核对标题和原文；再在你确认后，在 Obsidian 测试库新建一条笔记并读回检查。两步都成功后再组合使用，不把“显示已连接”当作配置全部完成。</p></div></li>
</ol>

#### 交给 Agent 的配置提示词

02–03 步分别使用下面这段话，将占位内容替换为对应的仓库地址：

<div class="prompt-example" id="mcp-setup-prompt">
  <span>SETUP PROMPT · AGENT 主导配置</span>
  <p id="mcp-setup-prompt-text">我是电脑小白，请一步一步协助我配置这个 MCP 服务：［粘贴仓库地址］。每当需要我安装软件、授权、输入密钥或修改配置时，请停下来告诉我，不要替我继续。</p>
  <button class="prompt-copy" type="button" data-copy="mcp-setup-prompt-text">复制配置提示词</button>
</div>

Agent 主导的是查阅、判断、规划和推进，不是绕过授权。如果当前会话不能执行终端命令，它应解释需要做的操作，由你或课题组协助执行。密钥在本地配置或授权界面中输入，不粘贴到聊天、公开截图或仓库里。

<div class="warning">
  <b>桌面端入口与权限边界</b>
  <p>这里依据支持 <code>MCP servers</code> 设置的 ChatGPT 桌面端，区分本机 STDIO 与 Streamable HTTP 接入，不把网页端云端连接的限制套用于桌面端。若你的客户端没有该入口，请先核对版本与工作区策略，不自行公开本机端口。仓库中的其他客户端配置示例也不能直接照搬。参见 <a href="https://developers.openai.com/codex/extend/mcp" target="_blank" rel="noreferrer">OpenAI 桌面端 MCP 官方文档</a>。</p>
  <p>提示词不是权限隔离机制。还应落实工具审批、实际访问范围和独立测试库；人工确认后才允许安装、授权或写入。</p>
</div>

#### 一次完整使用

1. 在 Zotero 中收好论文和 PDF。
2. 请 ChatGPT 读取指定论文，提取研究问题、定义、定理、证明思路和原文位置。
3. 回到 PDF 核查数学表述、页码与引用。
4. 确认无误后，再让 ChatGPT 把结构化笔记写入 Obsidian。
5. 下次研究相关问题时，让 ChatGPT 先检索 Obsidian 中的旧笔记，再继续工作。

#### 权限与核查

- Zotero 优先只读；不要把 API Key、密码或未公开材料写入笔记仓库。
- Obsidian 先使用独立测试库，确认文件路径和内容正确后再扩大范围；仅约定“只写测试文件夹”并不等于工具已实现路径隔离。
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
