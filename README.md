# Healthy Breath

一个简洁的静态网页，用于工作间隙的放松和深呼吸练习。

## 在线体验

访问: https://KillIsLeakedLove.github.io/healthy-breath/

## 功能

### 呼吸法

- **箱式呼吸法** (4-4-4-4): 快速平复心绪，海军海豹部队常用
- **4-7-8 呼吸法** (4-7-8): 缓解焦虑，帮助入睡
- **共振呼吸** (5-5-5-5): 平衡自主神经，提升心率变异性
- **相等呼吸** (4-4): 简单平衡，随时可做

### 身体放松

- **20-20-20 护眼法则**: 定时提醒，缓解用眼疲劳
- **颈部放松**: 引导式颈部运动，缓解久坐僵硬
- **手腕伸展**: 预防鼠标手，放松手腕
- **肩部滚动**: 释放肩部紧张，改善 posture
- **身体扫描**: 3 分钟正念冥想，觉察身体

### 精神放松

- **正念入门**: 什么是正念，如何开始练习
- **应对工作压力**: 识别压力信号，科学应对策略
- **焦虑急救**: 5-4-3-2-1 Grounding 技巧
- **睡前放松指南**: 改善睡眠质量的习惯与环境

### 通用特性

- 可视化呼吸动画（圆形随节奏缩放）
- SVG 环形进度指示
- 阶段指示小圆点
- 开始/暂停/继续控制
- 音效提示（Web Audio API，可开关）
- 护眼自然绿色渐变配色
- 庆祝粒子动画（完成时）
- 快捷键：空格键暂停/继续，Esc 结束练习
- 响应式设计，支持移动端

## 项目结构

```
healthy-breath/
├── index.html              # 主页导航
├── css/style.css           # 全局样式
├── js/breathing.js         # 通用呼吸逻辑
├── breathing/              # 呼吸法页面
│   ├── box.html
│   ├── four-seven-eight.html
│   ├── resonant.html
│   └── equal.html
├── exercises/              # 身体放松页面
│   ├── eye-rest.html
│   ├── neck-stretch.html
│   ├── wrist-stretch.html
│   ├── shoulder-roll.html
│   └── body-scan.html
├── articles/               # 精神放松文章
│   ├── mindfulness.html
│   ├── work-stress.html
│   ├── anxiety-grounding.html
│   └── sleep-relax.html
└── .github/workflows/
    └── deploy.yml          # GitHub Actions 自动部署
```

## 部署

本项目通过 GitHub Actions 自动部署到 GitHub Pages。

每次推送代码到 `main` 分支时，会自动触发部署。

## 本地使用

直接在浏览器中打开 `index.html` 即可使用，无需构建步骤。

```bash
git clone https://github.com/KillIsLeakedLove/healthy-breath.git
cd healthy-breath
# 用浏览器打开 index.html
```

## 技术栈

- 纯 HTML + CSS + JavaScript
- 无外部依赖
- 响应式设计
