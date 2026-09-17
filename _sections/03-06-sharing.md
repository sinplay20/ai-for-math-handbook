---
order: 360
chapter: 3
number: "3.6"
slug: section-3-6
title: 课题组共享
nav_title: 课题组共享
---

AI 工具的长期价值，不只是生成一次结果，而是把有效方法保存为可复用、可检查、可维护的研究流程。

#### 适合共享

Prompt、Skill、Workflow、配置说明、使用指南和可公开的研究案例。

#### 禁止公开

API Key、密码、访问令牌、隐私数据和未获授权的研究材料。

建议使用 GitHub 记录版本，并在每项共享内容中说明用途、输入、输出、适用范围和已知限制。

#### 用 VS Code 与 Git 管理 LaTeX 版本

对于数学论文，Git 最重要的作用不是“把文件上传到网上”，而是保存每一次有意义的修改，使作者能够检查 AI 改了什么、比较不同版本，并在修改出错时回到可靠节点。

| 工具 | 在工作流中的作用 |
| --- | --- |
| LaTeX | 保存论文正文、公式、参考文献和排版结构 |
| VS Code | 编辑 `.tex` 文件、编译 PDF，并查看逐行修改 |
| Git | 记录版本、比较差异、建立可恢复的检查点 |
| GitHub | 远程备份，并在需要时支持合作者审阅和同步 |

<div class="workflow-example">
  <p>SAFE LATEX LOOP</p>
  <div><span>保存修改前版本</span><i>→</i><span>人工或 AI 修改</span><i>→</i><span>查看差异</span><i>→</i><span>编译 PDF</span><i>→</i><span>确认后提交</span></div>
</div>

一个最小而可靠的使用方式是：

1. 每次开始重要修改前先提交当前可编译版本。
2. 让 AI 一次只处理范围明确的任务，不同时重写整篇论文。
3. 在 VS Code 的 Source Control 面板逐项查看增加、删除和改写的内容。
4. 重新编译 PDF，检查公式、编号、引用和版面。
5. 只有通过人工检查的改动才提交到 Git，并写清楚本次修改内容。

<div class="note">
  <b>对非编程成员最重要的三个操作</b>
  <p><code>Commit</code> 是建立版本检查点，<code>Diff</code> 是查看前后差异，<code>History</code> 是回看修改记录。初期先掌握这三项，不必一次学习分支、合并等高级功能。</p>
</div>

<div class="project-entry" aria-label="AI 辅助 LaTeX 与 Git 工作流仓库入口">
  <div>
    <span class="project-entry-label">PRACTICAL GUIDE</span>
    <strong>AI LaTeX Git Workflow</strong>
    <p>使用 Git 与 VS Code 安全、可审查地管理 AI 辅助 LaTeX 写作。</p>
  </div>
  <a href="https://github.com/sinplay20/ai-latex-git-workflow" target="_blank" rel="noreferrer">进入仓库 ↗</a>
</div>

#### 从安装 Git 到接入 Agent

下面是一条面向 Windows 和无编程基础成员的最短路线。这里先 Clone 公开的课程仓库进行练习，不要直接拿尚未发表的论文试验。

<ol class="steps">
  <li><span>01</span><div><b>安装 Git 与 VS Code。</b><p>从 <a href="https://git-scm.com/download/win" target="_blank" rel="noreferrer">Git 官方网站</a>安装 Git，从 <a href="https://code.visualstudio.com/" target="_blank" rel="noreferrer">VS Code 官网</a>安装编辑器。安装后重新打开 VS Code。</p></div></li>
  <li><span>02</span><div><b>确认 Git 可用并登记身份。</b><p>在 VS Code 中选择 <code>Terminal → New Terminal</code>，依次运行下面三条命令。姓名和邮箱只用于标记 Commit 作者。</p></div></li>
</ol>

```bash
git --version
git config --global user.name "Your Name"
git config --global user.email "your-email@example.com"
```

<ol class="steps" start="3">
  <li><span>03</span><div><b>把课程仓库 Clone 到本地。</b><p>先让 Terminal 位于准备存放项目的目录，再运行下面的命令。Clone 会在当前位置创建 <code>ai-latex-git-workflow</code> 文件夹。</p></div></li>
</ol>

```bash
git clone https://github.com/sinplay20/ai-latex-git-workflow.git
cd ai-latex-git-workflow
code .
```

<p class="caption">如果 <code>code .</code> 无法运行，使用 VS Code 的 <code>File → Open Folder</code>，选择完整的 <code>ai-latex-git-workflow</code> 文件夹。不要只打开单个文件或内部子目录。</p>

<ol class="steps" start="4">
  <li><span>04</span><div><b>检查打开位置和仓库状态。</b><p>运行 <code>git status --short --branch</code> 和 <code>git rev-parse --show-toplevel</code>。应位于 <code>main</code>，工作区没有未提交改动，并能在 Explorer 中看到 <code>AGENTS.md</code>、<code>README.md</code>、<code>course/</code> 和 <code>examples/</code>。</p></div></li>
  <li><span>05</span><div><b>从这个文件夹启动 Agent。</b><p>安装并登录一个能够读取本地项目文件的 Agent，例如 Codex、OpenCode 或 Pi；然后在当前 VS Code 工作区打开其面板或终端。普通网页聊天不会自动获得该文件夹的访问权。</p></div></li>
  <li><span>06</span><div><b>让 Agent 先读规则，不要立即改论文。</b><p>发送下面的启动提示。只有当 Agent 能复述仓库规则、确认根目录和 Git 状态时，才算完成衔接。</p></div></li>
</ol>

<div class="prompt-example">
  <span>AGENT START PROMPT</span>
  <p>请先完整读取根目录 AGENTS.md、README.md 和 course/COURSE.md，从 Lesson 0 的仓库状态检查开始，一次只给我一个可验证步骤。所有 Git 写操作只在 Hamlet 示例中练习，不要修改真实论文，也不要未经我明确授权执行 Commit、Merge、Revert、Reset、Push 或删除操作。</p>
</div>

完成课程练习后，再为真实论文建立独立的本地仓库和 **Private** GitHub 仓库，并复制模板中的 `AGENTS.md`。Agent 只修改明确指定的文件；作者负责审查全部 Diff、编译 PDF，并决定是否 Commit、Merge 或 Push。
