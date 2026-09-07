# AI for Math 课题组手册

面向数学课题组的简版 AI 使用手册，涵盖大模型与 API、Agent、Prompt、Skill、Workflow、MCP 和 Lean。

## 本地查看

这是一个无构建依赖的静态站点。可以直接打开 `index.html`，或在项目目录运行：

```bash
python -m http.server 8000
```

然后访问 `http://localhost:8000`。

## 发布到 GitHub Pages

1. 将本目录提交到 GitHub 仓库的 `main` 分支。
2. 打开仓库的 **Settings → Pages**。
3. 在 **Build and deployment** 中选择 **Deploy from a branch**。
4. 选择 `main` 分支和 `/ (root)` 目录并保存。
5. 等待 GitHub 完成部署。

站点不依赖固定仓库名，既可以发布为项目主页，也可以发布到 `username.github.io` 仓库。

## 内容维护

- 正文位于 `index.html`。
- 视觉样式位于 `assets/styles.css`。
- 目录、阅读进度和代码复制功能位于 `assets/app.js`。
- 不要把 API Key、密码、访问令牌或未公开研究资料提交到仓库。
