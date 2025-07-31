# Vue + Vite 基础项目模板

这是一个使用 Vite 构建的 Vue 3 基础项目模板，包含了现代 Vue 开发的基本配置。

## 🚀 技术栈

- **Vue 3** - 渐进式 JavaScript 框架
- **Vite** - 下一代前端构建工具
- **Composition API** - Vue 3 推荐的组合式 API
- **SFC (Single File Components)** - 单文件组件

## 📁 项目结构

```
vue-project/
├── public/                 # 静态资源
│   └── vite.svg
├── src/                    # 源代码
│   ├── assets/            # 资源文件
│   ├── components/        # Vue 组件
│   │   └── HelloWorld.vue
│   ├── App.vue           # 根组件
│   ├── main.js           # 入口文件
│   └── style.css         # 全局样式
├── index.html            # HTML 模板
├── package.json          # 项目配置
└── vite.config.js        # Vite 配置
```

## 🛠️ 开发命令

### 安装依赖
```bash
npm install
```

### 启动开发服务器
```bash
npm run dev
```
开发服务器将在 `http://localhost:5173` 启动，支持热模块替换 (HMR)。

### 构建生产版本
```bash
npm run build
```
构建结果将输出到 `dist/` 目录。

### 预览生产构建
```bash
npm run preview
```

## ✨ 功能特性

- ⚡️ **超快的开发体验** - Vite 提供极速的冷启动和热更新
- 🔥 **热模块替换 (HMR)** - 修改代码立即反映在浏览器中
- 📦 **优化的构建** - 生产环境下的代码分割和压缩
- 🎯 **Vue 3 Composition API** - 更好的逻辑复用和代码组织
- 💪 **TypeScript 支持** - 可以轻松升级到 TypeScript
- 🔧 **ESM 支持** - 原生 ES 模块支持

## 🎨 自定义配置

### 添加路由 (Vue Router)
```bash
npm install vue-router@4
```

### 添加状态管理 (Pinia)
```bash
npm install pinia
```

### 添加 TypeScript 支持
```bash
npm install --save-dev typescript @vue/tsconfig
```

### 添加 ESLint 和 Prettier
```bash
npm install --save-dev eslint prettier @vue/eslint-config-prettier
```

## 📖 推荐学习资源

- [Vue 3 官方文档](https://vuejs.org/)
- [Vite 官方文档](https://vitejs.dev/)
- [Vue 3 组合式 API](https://vuejs.org/guide/composition-api-introduction.html)

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📄 许可证

MIT License
