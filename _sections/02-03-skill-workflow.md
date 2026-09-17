---
order: 230
chapter: 2
number: "2.3"
slug: section-2-3
title: Skill 与 Workflow
nav_title: Skill 与 Workflow
---

当一个 Prompt 被反复使用时，可以把其中稳定的方法整理成 Skill；当任务需要多个步骤时，可以把它们组织成 Workflow。

| 概念 | 作用 |
| --- | --- |
| Prompt | 描述这一次任务 |
| Skill | 保存可以重复使用的方法和标准 |
| Workflow | 规定多个步骤、输入和输出如何衔接 |
| Agent | 在执行过程中选择并调用它们 |

#### 数学论文阅读 Workflow

> 识别论文 → 提取结构 → 核对定理 → 形成笔记

这一阶段只需要理解四者的关系。等某项任务已经稳定重复多次，再把它正式整理为 Skill 或 Workflow。

#### 课题组 Skill 建设

课题组可以把已经验证过的共同方法整理为 Skill，例如论文忠实拆解、定义与定理抽取、证明思路核查、参考文献定位和 Lean 形式化前的预处理。仓库用于保存 Skill 正文、示例输入输出、适用边界和版本记录；成员先从使用与反馈开始，不需要会编程。

<div class="project-entry" aria-label="课题组 Skill 建设仓库入口">
  <div>
    <span class="project-entry-label">GROUP PROJECT</span>
    <strong>课题组 Skill 建设</strong>
    <p>集中维护经过组内审定的 Prompt、Skill、测试样例与使用说明。</p>
  </div>
  <a href="https://github.com/sinplay20/10.skill" target="_blank" rel="noreferrer">进入仓库 ↗</a>
</div>
