---
order: 330
chapter: 3
number: "3.3"
slug: section-3-3
title: 数学人工智能体 Danus
nav_title: Danus
---

Danus 是一个面向研究级数学推理的开源多智能体编排系统。它以共享的**事实图谱（fact graph）**作为全局记忆：主 Agent 负责规划与协调，多个 Worker Agent 并行探索局部证明，独立的无状态验证器检查候选结论，只有通过检查的结果才进入事实图谱。

项目入口：[frenzymath/Danus](https://github.com/frenzymath/Danus) · [论文 arXiv:2607.06447](https://arxiv.org/abs/2607.06447)

#### 可能的研究过程

> 提出问题 → 检索资料 → 选择方法 → 调用工具 → 人工核查 → 保存成果

Danus 展示了长程数学任务的一种组织方式：它不是单独的模型，而是模型、记忆、任务分解、并行探索和验证机制组成的系统。本节当前只建立这一基本认知，不展开安装和运行配置。
