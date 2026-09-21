# BESHORE · 司法分析 H5 前端项目

## 项目概述

本项目为「某某数科 BESHORE · 司法分析 H5」的静态前端实现，包含十屏完整界面，采用深海蓝 × 鎏金金商务科技风配色方案。

## 项目结构

```
beshore-h5/
├── index.html              # 图1：已授权企业 · 六大业务模块入口
├── judicial-report.html    # 图2：司法风险分析报告
├── case-detail.html        # 图3：案件详情 · 裁判文书信息
├── payment.html            # 图4：通用付费页（所有二/三级终点）
├── geo-service.html        # 图5：GEO 获客陪跑 · 二级界面
├── qualification.html      # 图6：资质办理 · 立信/诚信企业
├── geo-detail.html         # 图7：GEO 陪跑方案详情
├── business-analysis.html  # 图8：经营分析报告
├── tax-report.html         # 图9：税务报告 · 金税四期
├── guarantee.html          # 图10：电子保函在线办理
├── css/
│   └── style.css           # 全局样式（Design Tokens + 组件库）
├── js/
│   └── main.js             # 公共 JavaScript（交互逻辑）
└── images/                  # 图片资源目录（待补充）
```

## 技术栈

- **纯静态页面**：HTML5 + CSS3 + Vanilla JavaScript
- **无框架依赖**：无需构建工具，可直接部署
- **移动端优先**：375pt 移动端规范，响应式设计
- **Design Tokens**：CSS 变量驱动配色系统

## 配色方案

| 用途 | 色值 |
|------|------|
| 深海蓝 · 主背景 | #071B3A |
| 藏青蓝 · Hero 渐变 | #0E2A55 |
| 深空蓝 · 卡片表面 | #123057 |
| 亮深蓝 · 表头/高亮 | #14336B |
| 鎏金金 · CTA | #D5A84D |
| 金棕 · 描边 | #B8893A |
| 浅金 · 数据文字 | #EFD9A8 |
| 风险红 · 民事案件 | #C0392B |
| 警示橙 · 执行案件 | #C77D24 |
| 成功绿 · 已履行 | #2E7D32 |
| 科技青 · 票据纠纷 | #2BC4B6 |
| 米金 · 主标题 | #FBF0DC |

## 页面导航链路

```
index.html (图1: 入口)
  ├── judicial-report.html (图2: 司法分析)
  │   └── case-detail.html (图3: 案件详情)
  │       └── payment.html (图4: 付费页)
  ├── geo-service.html (图5: GEO陪跑)
  │   └── geo-detail.html (图7: GEO方案详情)
  │       └── payment.html (图4)
  ├── qualification.html (图6: 资质办理)
  │   └── payment.html (图4)
  ├── business-analysis.html (图8: 经营分析)
  │   └── payment.html (图4)
  ├── tax-report.html (图9: 税务报告)
  │   └── payment.html (图4)
  └── guarantee.html (图10: 电子保函)
      └── payment.html (图4)
```

## GitHub Pages 部署步骤

### 方法一：通过 GitHub 网页上传（推荐新手）

1. 登录 GitHub，进入你的仓库（如 `pangxing1979.github.io/credit-repair-guide`）
2. 点击 **Add file** → **Upload files**
3. 将本项目中所有文件和文件夹（index.html, css/, js/, images/ 等）**全部拖入**上传框
4. 底部 Commit message 填写 "初始版本：十屏H5静态页面"，点击 **Commit changes**
5. 等待 1-2 分钟，访问 `https://pangxing1979.github.io/credit-repair-guide/` 即可看到首页

### 方法二：通过 Git 命令行（推荐开发者）

```bash
# 1. 克隆仓库
git clone https://github.com/pangxing1979/credit-repair-guide.git
cd credit-repair-guide

# 2. 将本项目所有文件复制进来
# （删除原有的 README.md 等文件）

# 3. 添加并提交
git add .
git commit -m "初始版本：十屏H5静态页面"

# 4. 推送到远程
git push origin main
```

### 确认 Pages 已启用

1. 进入仓库 → **Settings** → 左侧 **Pages**
2. 确认 **Build and deployment** → **Source** 选择 **Deploy from a branch**
3. **Branch** 选择 **main**，目录选择 **/(root)**
4. 点击 **Save**

## 后续开发建议

### 第一阶段（当前）：静态页面 ✓
- 十屏页面 HTML/CSS/JS 已完成
- 页面间跳转链路已打通
- 可直接部署到 GitHub Pages

### 第二阶段：数据静态化增强
- 将示例数据抽离为 JSON 配置文件
- 用 JavaScript 动态渲染列表/卡片
- 实现搜索/筛选功能

### 第三阶段：后端 + 数据库
- 搭建后端 API（Node.js/Python）
- 接入数据库（PostgreSQL/MySQL）
- 实现真实数据动态加载

### 第四阶段：数据采集自动化
- 对接公开数据源 API
- 搭建数据采集管道
- 定时任务自动更新

## 浏览器兼容性

- Chrome/Edge 最新版 ✓
- Safari 最新版 ✓
- Firefox 最新版 ✓
- 微信内置浏览器 ✓

## 许可证

本项目为内部开发项目，仅供学习交流使用。
