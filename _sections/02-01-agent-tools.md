---
order: 210
chapter: 2
number: "2.1"
slug: section-2-1
title: 选择、配置和使用 Agent 工具
nav_title: Agent 工具
---

Agent 不只是生成文字。它可以读取文件、运行命令、调用工具，并根据中间结果继续完成任务。选择工具时，先看任务类型和自己愿意承担的配置成本。

#### 工具选择

| 使用场景 | 可选工具 | 适合谁 |
| --- | --- | --- |
| 对话与文件处理 | ChatGPT Desktop、Claude Desktop | 普通成员和日常研究辅助 |
| 代码与项目操作 | Codex、Claude Code | 需要处理终端、代码库或 LaTeX 项目的人 |
| 轻量可扩展环境 | Pi | 希望组合模型、Prompt、Skill 与扩展的技术用户 |
| 开放 Agent 系统 | Hermes、OpenClaw、DeepSeek Harness | 希望自行部署、深度定制或研究 Agent 架构的开发者 |

#### 推荐的选择顺序

1. 第一次使用：从 ChatGPT Desktop 或 Claude Desktop 开始。
2. 需要处理代码和文件：选择 Codex 或 Claude Code。
3. 需要开放配置：再尝试 Pi、Hermes、OpenClaw 或 DeepSeek Harness。
4. 不要同时配置全部工具；先用一个工具完成真实任务。

#### 官方入口

- [ChatGPT](https://chatgpt.com/download/) · [Claude](https://claude.com/download)
- [Codex](https://developers.openai.com/codex/) · [Claude Code](https://code.claude.com/docs/en/overview)
- [Pi](https://github.com/badlogic/pi-mono) · [Hermes](https://github.com/NousResearch/hermes-agent)
- [OpenClaw](https://github.com/openclaw/openclaw) · [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness)

> **权限提示**
>
> Agent 可能拥有读取文件、执行命令甚至访问账户的能力。先限制工作目录和权限；删除、发送、付费与公开发布等操作应由人确认。
