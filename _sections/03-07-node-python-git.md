---
order: 370
chapter: 3
number: "3.7"
slug: section-3-7
title: Node.js、Python 与 Git
nav_title: Node.js、Python 与 Git
---

安装 Agent、MCP Server 或研究工具时，经常会看到 Node.js、Python、Git、npm 和 pip。初学阶段不需要先学习编程，只要知道它们分别解决什么问题，并能看懂安装说明即可。

#### 先记住它们的分工

<div class="three-grid">
  <div><b>Node.js</b><p>让电脑能够在浏览器之外运行 JavaScript 程序。很多 Agent 和 MCP Server 使用它。</p></div>
  <div><b>Python</b><p>一种通用编程语言及运行环境。数学计算、数据处理和许多 MCP Server 都依赖它。</p></div>
  <div><b>Git</b><p>记录文件的修改历史，帮助我们比较、撤回和共享不同版本。GitHub 是托管 Git 仓库的网站。</p></div>
</div>

Node.js 和 Python 负责**运行程序**；Git 负责**管理文件版本**。它们不是大模型，也不会自动获得你的文件权限。

#### 什么是“安装一个包”

一个程序常常需要调用别人已经写好的代码。这些可以重复使用的代码称为**包（package）**；某个包依赖的其他包称为**依赖（dependency）**。

执行安装命令时，包管理器通常会：

1. 找到需要的包和版本；
2. 下载它及其依赖；
3. 放入当前项目或当前运行环境；
4. 记录安装信息，供程序以后调用。

安装代码包不等于完成全部配置。MCP Server 安装后，通常还需要填写本地地址、选择允许访问的目录，或者把服务连接到 ChatGPT Desktop。

#### npm 安装是什么

**npm** 是 Node.js 常用的包管理器，安装 Node.js 时通常会一并安装。项目目录中的 `package.json` 用来记录项目需要哪些包。

| 命令 | 含义 |
|---|---|
| `npm install` | 按当前项目的 `package.json` 安装全部依赖。 |
| `npm install 包名` | 为当前项目安装一个包。 |
| `npm install -g 包名` | 把命令行工具安装为整台电脑都可使用的全局工具。 |
| `npx 包名` | 临时下载并运行某个工具，通常不需要全局安装。 |

多数情况下，应直接使用项目仓库给出的命令，不要自行添加 `-g`。

#### pip 安装是什么

**pip** 是 Python 常用的包安装工具。为了避免 `pip` 指向错误的 Python 版本，推荐把命令写成：

```text
python -m pip install 包名
```

常见命令：

| 命令 | 含义 |
|---|---|
| `python -m pip install 包名` | 在当前 Python 环境中安装一个包。 |
| `python -m pip install -r requirements.txt` | 按清单安装一个项目需要的全部依赖。 |
| `python -m pip install --upgrade 包名` | 更新指定的包。 |

Python 项目最好使用独立的**虚拟环境（virtual environment）**，避免不同项目要求的包版本互相冲突。初次安装时，可以让 ChatGPT 帮你建立环境并逐步确认。

#### Git 最基本的概念

| 概念 | 简单理解 |
|---|---|
| Repository | 由 Git 管理的项目文件夹，简称 repo 或仓库。 |
| Commit | 一次带说明的修改记录，可以理解为一个可回看的版本节点。 |
| Branch | 在不影响主版本的情况下尝试修改的分支。 |
| Pull / Push | 从远程仓库获取修改，或把本地修改上传到远程仓库。 |

对于课题组文件，最重要的不是记住所有 Git 命令，而是养成三个习惯：修改前确认文件版本，提交时写清修改内容，上传前检查是否包含密钥或未公开资料。

#### 检查电脑是否已经安装

打开终端后，可以依次输入：

```text
node --version
npm --version
python --version
python -m pip --version
git --version
```

Windows 上如果 `python --version` 无法使用，可以尝试 `py --version`，相应的 pip 命令写成 `py -m pip --version`。能够显示版本号，通常说明该工具已经可以被终端找到。

官方下载入口：[Node.js](https://nodejs.org/) · [Python](https://www.python.org/downloads/) · [Git](https://git-scm.com/downloads)

<div class="note">
  <b>不需要先成为程序员</b>
  <p>看到陌生命令时，把完整仓库地址和报错交给 ChatGPT，让它一次只给你一个操作步骤。不要在没有解释的情况下复制删除文件、开放网络端口或写入系统目录的命令。</p>
</div>
