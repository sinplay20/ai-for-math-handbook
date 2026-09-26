# v0.3.9 验证记录

## 结论

在 v0.3.8 的独立副本上完成两个新增要求。真实 Jekyll 3.10.0 构建成功；**43 项结构 / 内容检查、73 项本地 HTTP 浏览器检查、73 项实际 file:// 离线检查全部通过**。

## 内容与保留性

- 保留三章体系；只恢复 3.4，现有编号不重排，正文和目录共有 13 个可见小节。
- 3.4 的原正文作为新文件正文前缀逐字节保留，新增内容仅附在原文之后。
- 原研究知识流图的 HTML 和 CSS 保留，八个节点均存在，没有重复添加该图。
- 除 3.4 外，其他章节文件与 v0.3.8 逐字节一致。
- 首页、布局模板、JavaScript 及 AGENTS.md 示例均保持 v0.3.8 原样。
- 原 v0.3.7 和 v0.3.8 目录逐文件核对哈希，均未修改。
- 原有 MCP 服务推荐、Agent 选型、配置提示词、AGENTS.md 下载及 Agent 参考书仍通过回归检查。
- 新增内容覆盖 Obsidian / Logseq、双向链接、块引用、Embedding / RAG、图引擎 / 知识图谱。
- 明确 Obsidian 也支持块引用、RAG 不只依赖向量检索、图查询不等于数学证明检查。
- 没有重复 ID、未解析的模板或失效的页内链接。

## 浏览器检查

Chrome 分别打开本地 HTTP 构建和真正的 file:// 预览，在 1920、1440、1280、1024、820、768、760、390、320px 九种宽度下检查：

- 页面无横向溢出；三张表格局部横向滚动可到达最右列。
- 仓库长 URL 正常换行，表格中的工具名不在词中间拆行。
- 三个原有图示均可滚动到达右侧；研究知识流有八个未溢出的节点，右侧 Lean 可访问。
- 3.4 已出现在目录，手机端跳转及菜单关闭正常。
- 配置提示词跳转及复制、AGENTS.md 代码复制保持正常。
- 两种模式均实际触发 AGENTS.md 下载，下载文件与源文件逐字节一致。
- 阅读无外部网络请求，未出现未捕获的 JavaScript 错误。

## 边界与未验证项

- 复制按钮用模拟 Clipboard 接口验证处理逻辑，未覆盖全部操作系统的剪贴板授权策略。
- 未覆盖 Safari、Firefox、真实手机、投影或打印 / PDF。
- 未提交、推送、部署 GitHub Pages，也未执行完整 github-pages Bundle 的线上部署流程。
- 没有安装或实际联调 Obsidian、Logseq、MCP、向量服务、RAG 或图数据库。
- “生态、门槛与适用方式”是编辑建议，不是软件、MCP 稳定性或检索准确率的实测结论。
- 新内容概念依据已检索的官方文档；Logseq 引用官方文档仓库中的块引用说明，未承诺所有图谱类型和版本具有相同接口。
- 与用户确认过的范围一致，本版不新增向量库、图引擎或自动化部署。

## 证据

- `validation/structure.json`：43 项结构 / 内容检查。
- `validation/http/browser.json`、`validation/offline/browser.json`：各 73 项浏览器检查。
- `validation/http/*.png`、`validation/offline/*.png`：新增内容和既有内容回归截图，特别是 `research-*`、`knowledge-tools-*`、`knowledge-progression-*`。
- `validation/baseline.json`、`validation/baseline-0.3.7.json`、`validation/preservation.json`：旧版哈希、原正文保留及差异范围。
- `validation/sources.json`：本版新增内容的来源与限制；`validation/sources-v0.3.8.json` 保留继承内容的既有来源记录。
- `validation/jekyll-build.log`：构建输出，机器本地缓存路径已匿名化。

## 复查

需要 Ruby / Bundler、Python（beautifulsoup4、PyYAML）、Node 22+ 和 Chrome / Edge。本次没有替读者安装这些环境。

```text
bundle exec jekyll build --safe
python scripts/make_preview.py _site validation/preview.html
python scripts/check_site.py . _site ../AI-for-Math-Handbook-v0.3.8 validation/baseline.json
node scripts/check_browser.mjs _site validation/http
```

设置环境变量 `PREVIEW_FILE=validation/preview.html`，再运行浏览器脚本并指定 `validation/offline` 输出目录，可复查离线文件。浏览器不在默认位置时设置 `CHROME_BIN`。
