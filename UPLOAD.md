# v0.3.9 查看与手动上传

## 先查看

解压整个目录，用 Chrome 或 Edge 打开 `validation/preview.html`。重点查看 **3.4「课题组研究知识流」**及其末尾的 **「知识库的起步与进阶」**。

离线文件内嵌 CSS、JavaScript 和 AGENTS.md 下载内容。阅读无需网络，外部文档链接需要联网。

## 从 v0.3.8 更新

网页源文件只需更新：

- `_sections/03-04-research-knowledge-flow.md`：恢复显示，保留原图和原文，追加知识库内容。
- `_config.yml`：版本改为 0.3.9。
- `assets/styles.css`：只追加新内容区的小标题与表格样式。

同时更新 README、CHANGELOG、VALIDATION、UPLOAD 和复查脚本。验证报告和脚本已从 Jekyll 页面输出中排除。

## 从其他版本更新

- 如果线上仍是 v0.3.7，请使用完整 v0.3.9 源目录，也带上此前 1.4、2.1、2.2 的修改和 AGENTS.md 示例。
- 如果线上已经是 v1.0.1，不能只覆盖几个文件就切回三章体系。应在你自己的仓库中选择正确基线并检查旧章节残留，本次没有替你回退或删除文件。
- 不要把 `validation/preview.html` 当作 Jekyll 源首页上传覆盖 `index.html`。
- 不要解除退役占位文件的隐藏状态；本次只恢复真正的 `03-04-research-knowledge-flow.md`。

所有旧版目录保持不变。本次未执行 Git 提交、推送或 GitHub Pages 发布。
