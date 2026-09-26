# AI for Math 课题组手册 · v0.3.9

## 先查看这一版

- 双击 **`validation/preview.html`**，用 Chrome 或 Edge 离线查看；无需安装 Jekyll。
- 本版重点看恢复显示的 **3.4「课题组研究知识流」**，以及节末新增的 **「知识库的起步与进阶」**。
- v0.3.8 的 1.4 MCP 路线、2.1 Agent 选型和参考书、2.2 AGENTS.md 示例保持不变。
- `assets/examples/AGENTS.md` 是新增的项目约定示例；2.2 中有相同内容及下载入口。它不是本手册工程的生效规则，不要未经审核覆盖已有项目文件。
- 本版独立复制自 **v0.3.8**，延续 **v0.3.7** 的三章体系；不是 v1.0.1 的回退或重排。
- 两项新增：展示原 3.4，并介绍 Obsidian / Logseq、双向链接、Embedding / RAG、图引擎与知识图谱。详见 `CHANGELOG.md`。
- 原 3.4 的图示和全部说明原样保留，新增内容附在原正文之后；其他章节及旧版本目录不修改。
- 本次只生成文件，未提交、推送或发布，也未替读者安装或配置任何 MCP 服务。
- `validation/` 和 `scripts/` 不参与 GitHub Pages 页面输出。正式上传请看 `UPLOAD.md`；检查范围见 `VALIDATION.md`。

面向数学课题组的简版 AI 使用手册，涵盖大模型与 API、Obsidian/Zotero 研究软件、Agent、Prompt、Skill、Workflow、MCP 和 Lean。

## 作者与贡献者

- **Author & Maintainer:** Shi
- **AI Contributor:** ChatGPT 5.6 · OpenAI

手册的内容选择、数学判断和发布责任由作者承担；ChatGPT 参与内容整理、文字编辑、结构设计与网站实现。

## 本地查看

这是一个由 GitHub Pages 原生 Jekyll 构建的静态站点。每一节正文都保存在独立的 Markdown 文件中。

## 修改章节

章节文件位于 `_sections/`：

```text
_sections/
├── 01-01-web-and-desktop.md
├── 01-02-api.md
├── 01-03-ai-in-research-apps.md
├── 01-04-personal-knowledge-flow.md
├── 02-01-agent-tools.md
├── 02-02-prompt.md
├── 02-03-skill-workflow.md
├── 03-01-mcp.md
├── 03-02-agent-system.md
├── 03-03-danus.md
├── 03-04-research-knowledge-flow.md
├── 03-05-lean.md
└── 03-06-sharing.md
```

`03-04-lean.md` 和 `03-05-sharing.md` 是兼容网页覆盖上传的退役占位文件，用于停用 v0.2 遗留章节，避免目录重复；不要在其中编写正文。

`03-04-research-knowledge-flow.md` 已在 v0.3.9 中设为 `hidden: false`，作为 3.4 出现在正文和侧边目录。原图及全部说明保留，后面新增知识库起步与进阶内容。不要再将该节隐藏，也不要解除退役占位文件的隐藏状态。

修改某一节时，只编辑对应 `.md` 文件并提交。首页和侧边目录会根据文件顶部的 `chapter`、`order`、`number`、`title` 和 `slug` 自动生成。

例如：

```yaml
---
order: 220
chapter: 2
number: "2.2"
slug: section-2-2
title: 建立 Prompt 认知
nav_title: Prompt
---
```

本地预览需要 Ruby 与 Bundler：

```bash
bundle install
bundle exec jekyll serve
```

然后访问 `http://localhost:4000/ai-for-math-handbook/`。

## 发布到 GitHub Pages

1. 将本目录提交到 GitHub 仓库的 `main` 分支。
2. 打开仓库的 **Settings → Pages**。
3. 在 **Build and deployment** 中选择 **Deploy from a branch**。
4. 选择 `main` 分支和 `/ (root)` 目录并保存。
5. 等待 GitHub 完成部署。

当前 `_config.yml` 已配置为 `sinplay20/ai-for-math-handbook`。如果以后修改仓库名称，需要同步更新其中的 `baseurl`、`url` 和 `repository_url`。

## 内容维护

- 正文位于 `_sections/*.md`。
- 首页装配逻辑位于 `index.html`。
- 页面框架位于 `_layouts/default.html`。
- 研究知识流图的 HTML 位于 `_sections/03-04-research-knowledge-flow.md`，样式位于 `assets/styles.css`。
- 个人最简知识沉淀流位于 `_sections/01-04-personal-knowledge-flow.md`。
- “个人知识沉淀流”暂时显示“仓库筹备中”。创建仓库后，在对应 Markdown 文件中把 `project-entry-status` 的 `<span>` 换成带真实地址的 `<a>` 即可启用入口。
- “课题组 Skill 建设”入口位于 `_sections/02-03-skill-workflow.md`，指向 [`sinplay20/10.skill`](https://github.com/sinplay20/10.skill)。
- VS Code、Git 与 LaTeX 版本管理模块位于 `_sections/03-06-sharing.md`，包含从安装 Git、在 VS Code 中 Clone 到启动本地项目 Agent 的简明路径；实践仓库为 [`sinplay20/ai-latex-git-workflow`](https://github.com/sinplay20/ai-latex-git-workflow)。
- 站点配置位于 `_config.yml`。
- 视觉样式位于 `assets/styles.css`。
- 目录、阅读进度和代码复制功能位于 `assets/app.js`（本版保持原逻辑）；1.4 的提示词按钮复用已有复制功能。
- 服务推荐表、Agent 对照表和仓库长链接样式保留；v0.3.9 只追加知识库进阶区的小标题与表格样式，原图示 CSS 不改。
- 不要把 API Key、密码、访问令牌或未公开研究资料提交到仓库。
