---
order: 210
chapter: 2
number: "2.1"
slug: section-2-1
title: 选择、配置和使用 Agent 工具
nav_title: Agent 工具
---

Agent 不只是生成文字。它可以读取文件、运行命令、调用工具，并根据中间结果继续完成任务。选择工具时，先区分它是日常应用、项目型 Agent、Agent Harness，还是已经组装完整的 Agent 系统。

#### 工具选择

| 工具类型 | 可选工具 | 适合的任务 |
| --- | --- | --- |
| 对话型桌面应用 | ChatGPT Desktop、Claude Desktop | 日常对话、文件分析与低配置使用 |
| 编程与项目型 Agent | Codex、Claude Code | 处理命令行、代码库、LaTeX 项目和本地文件 |
| Agent Harness 与可扩展 Runtime | Pi、DeepSeek Harness | 组合模型、工具、Agent Loop、Skill 和扩展 |
| 完整开放 Agent 系统 | Hermes、OpenClaw | 需要长期记忆、多入口、任务调度或持续运行的场景 |

#### Harness 与完整 Agent 系统

- **Agent Harness** 提供运行 Agent 的基础结构，例如模型调用、工具执行、状态管理、Agent Loop 和扩展接口。
- **完整 Agent 系统** 在 Harness 之上继续增加长期记忆、定时任务、多消息渠道、子 Agent 或网页与桌面入口。

Pi 和 DeepSeek Harness 因此属于同一基础类别：Pi 更轻量，适合从小型工作流开始组合；DeepSeek Harness 更强调插件化架构。Hermes 和 OpenClaw 则更接近已经组装好的长期 Agent 应用。

#### 推荐的选择顺序

1. 第一次使用：从 ChatGPT Desktop 或 Claude Desktop 开始。
2. 需要处理代码、LaTeX 和项目文件：选择 Codex 或 Claude Code。
3. 想自己组合模型、工具和工作流：尝试 Pi 或 DeepSeek Harness。
4. 需要可长期运行的个人 Agent：再了解 Hermes 或 OpenClaw。
5. 不要同时配置全部工具；先用一个工具完成真实任务。

#### 官方入口

- [ChatGPT](https://chatgpt.com/download/) · [Claude](https://claude.com/download)
- [Codex](https://developers.openai.com/codex/) · [Claude Code](https://code.claude.com/docs/en/overview)
- [Pi](https://github.com/badlogic/pi-mono) · [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness)
- [Hermes](https://github.com/NousResearch/hermes-agent) · [OpenClaw](https://github.com/openclaw/openclaw)

> **权限提示**
>
> Agent 可能拥有读取文件、执行命令甚至访问账户的能力。先限制工作目录和权限；删除、发送、付费与公开发布等操作应由人确认。
