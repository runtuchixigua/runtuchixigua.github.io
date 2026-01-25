# GitHub 个人主页

一个基于 React 的个人主页，用于展示个人信息、技术栈、项目和技术博客。

## 功能特性

- 头像展示
- 个人简介
- 技术栈标签展示
- 项目展示
- 技术博客展示
- 响应式设计，支持移动端和桌面端
- 自定义背景图

## 技术栈

- React 18
- Vite
- CSS3

## 快速开始

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

访问 http://localhost:5173 查看效果

### 构建生产版本

```bash
npm run build
```

### 预览生产版本

```bash
npm run preview
```

## 项目结构

```
├── src/
│   ├── App.jsx          # 主组件
│   ├── App.css          # 样式文件
│   ├── main.jsx         # 入口文件
│   └── index.css        # 全局样式
├── images/
│   ├── 马头.png         # 头像
│   └── cow.png          # 背景图
├── index.html           # HTML 模板
├── package.json         # 项目配置
└── vite.config.js       # Vite 配置
```

## 自定义配置

### 修改头像

替换 `images/马头.png` 文件为你自己的头像图片

### 修改背景图

替换 `images/cow.png` 文件为你想要的背景图片

### 修改个人信息

编辑 `src/App.jsx` 文件，修改以下内容：

- 姓名：修改 `name` 类的文本
- 个人简介：修改 `bio` 类的文本
- 技术栈：修改 `tags` 中的标签内容

### 添加项目

在 `src/App.jsx` 的项目部分添加你的项目信息

### 添加博客

在 `src/App.jsx` 的博客部分添加你的博客链接

## 样式自定义

编辑 `src/App.css` 文件可以自定义：

- 背景图透明度：修改 `.background` 的 `opacity` 属性
- 颜色主题：修改各个元素的 `color` 和 `background` 属性
- 字体大小：修改 `font-size` 属性
- 间距：修改 `padding` 和 `margin` 属性

## 部署

### 部署到 GitHub Pages

1. 构建项目：`npm run build`
2. 将 `dist` 目录推送到 GitHub 仓库
3. 在仓库设置中启用 GitHub Pages，选择 `dist` 目录作为源

### 部署到其他平台

构建完成后，将 `dist` 目录部署到任何静态网站托管服务（如 Netlify、Vercel 等）

## License

MIT
