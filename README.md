# AI for Math 课题组手册

面向数学课题组的简版 AI 使用手册，涵盖大模型与 API、Agent、Prompt、Skill、Workflow、MCP 和 Lean。

## 本地查看

这是一个由 GitHub Pages 原生 Jekyll 构建的静态站点。每一节正文都保存在独立的 Markdown 文件中。

## 修改章节

章节文件位于 `_sections/`：

```text
_sections/
├── 01-01-web-and-desktop.md
├── 01-02-api.md
├── 02-01-agent-tools.md
├── 02-02-prompt.md
├── 02-03-skill-workflow.md
├── 03-01-mcp.md
├── 03-02-agent-system.md
├── 03-03-danus.md
├── 03-04-lean.md
└── 03-05-sharing.md
```

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
- 站点配置位于 `_config.yml`。
- 视觉样式位于 `assets/styles.css`。
- 目录、阅读进度和代码复制功能位于 `assets/app.js`。
- 不要把 API Key、密码、访问令牌或未公开研究资料提交到仓库。
