# Healthy Breath

一个简洁的静态网页，用于放松和指导深呼吸练习，采用**箱式呼吸法（Box Breathing）**节奏。

## 在线体验

访问: `https://<你的用户名>.github.io/healthy-breath/`

## 功能

- **箱式呼吸法**: 吸气 4 秒 → 屏息 4 秒 → 呼气 4 秒 → 屏息 4 秒，一个周期 16 秒
- **可视化动画**: 圆形随呼吸节奏放大缩小，配合文字提示
- **循环次数**: 可选择 3 / 5 / 10 / 15 / 20 / 30 次，或无限循环
- **开始/暂停**: 支持中途暂停和继续
- **进度显示**: 实时显示当前进度和剩余时间
- **护眼配色**: 自然绿色渐变背景，柔和不刺眼
- **快捷键**: 空格键暂停/继续，Esc 键结束练习

## 部署

本项目通过 GitHub Actions 自动部署到 GitHub Pages。

每次推送代码到 `main` 分支时，会自动触发部署。

## 本地使用

直接在浏览器中打开 `index.html` 即可使用，无需构建步骤。

```bash
git clone https://github.com/<你的用户名>/healthy-breath.git
cd healthy-breath
# 用浏览器打开 index.html
```

## 技术栈

- 纯 HTML + CSS + JavaScript
- 无外部依赖
- 响应式设计，支持移动端
