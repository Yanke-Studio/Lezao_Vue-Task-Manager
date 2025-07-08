# Lezao Vue 任务管理器

一个使用 Vue.js 3、TypeScript 和 Pinia 构建的现代化响应式任务管理应用程序。旨在通过简洁直观的界面帮助您高效地组织任务。

![Vue Task Manager](https://img.shields.io/badge/Vue.js-3.x-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Pinia](https://img.shields.io/badge/Pinia-FFD859?style=for-the-badge&logo=pinia&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

## ✨ 功能特性

- **📝 任务管理**：创建、编辑和删除任务，支持详细描述和截止日期
- **🏷️ 分类和标签**：使用自定义分类和标签来更好地组织任务
- **⚡ 优先级设置**：设置任务优先级（高、中、低）专注于最重要的事情
- **🔍 高级筛选**：按状态、分类、优先级、标签筛选任务，或通过关键词搜索
- **📊 进度跟踪**：可视化进度指示器和统计数据来跟踪您的工作效率
- **💾 本地存储**：所有数据都存储在您的浏览器本地 - 无需注册账户
- **📱 响应式设计**：在桌面、平板和移动设备上都能完美运行
- **🎨 现代化界面**：简洁直观的界面，流畅的动画和过渡效果

## 🚀 在线演示

您可以通过运行本地环境来查看应用程序的在线演示（请参阅下面的安装说明）。

## 🛠️ 技术栈

- **Vue.js 3** - 渐进式 JavaScript 框架，使用 Composition API
- **TypeScript** - 类型安全的 JavaScript，提供更好的开发体验
- **Pinia** - Vue 应用程序的现代状态管理库
- **Vue Router** - Vue.js 应用程序的官方路由器
- **Vite** - 快速的构建工具和开发服务器
- **Vitest** - 由 Vite 驱动的单元测试框架
- **ESLint & Prettier** - 代码检查和格式化工具

## 📦 安装

### 前置要求

- Node.js（版本 16 或更高）
- npm 或 yarn

### 设置步骤

1. **克隆仓库**
   ```bash
   git clone https://github.com/yourusername/vue-task-manager.git
   cd vue-task-manager
   ```

2. **安装依赖**
   ```bash
   npm install
   ```

3. **启动开发服务器**
   ```bash
   npm run dev
   ```

4. **打开浏览器**
   访问 `http://localhost:5173` 查看应用程序。

## 🏗️ 生产构建

```bash
# 构建应用程序
npm run build

# 预览生产构建
npm run preview
```

## 🧪 测试

```bash
# 运行单元测试
npm run test:unit

# 在监视模式下运行测试
npm run test:unit:watch
```

## 📝 脚本命令

- `npm run dev` - 启动开发服务器
- `npm run build` - 构建生产版本
- `npm run preview` - 预览生产构建
- `npm run test:unit` - 运行单元测试
- `npm run lint` - 使用 ESLint 检查代码
- `npm run format` - 使用 Prettier 格式化代码

## 🏗️ 项目结构

```
vue-task-manager/
├── public/                 # 静态资源
├── src/
│   ├── components/        # Vue 组件
│   │   ├── TaskCard.vue
│   │   ├── TaskForm.vue
│   │   ├── TaskFilter.vue
│   │   └── TaskStats.vue
│   ├── stores/           # Pinia 状态管理
│   │   └── taskStore.ts
│   ├── types/            # TypeScript 类型定义
│   │   └── task.ts
│   ├── views/            # 页面组件
│   │   ├── HomeView.vue
│   │   └── AboutView.vue
│   ├── router/           # Vue Router 配置
│   │   └── index.ts
│   ├── App.vue           # 根组件
│   └── main.ts           # 应用程序入口点
├── tests/                # 测试文件
├── package.json
└── README.md
```

## 🎯 使用方法

### 创建任务

1. 点击页面顶部的"添加任务"按钮
2. 填写任务详情：
   - **标题**（必填）：任务的简要描述
   - **描述**（可选）：任务的详细信息
   - **优先级**：选择高、中或低
   - **分类**：从现有分类中选择或创建新分类
   - **截止日期**（可选）：为任务设置截止日期
   - **标签**（可选）：添加标签以便更好地组织

### 管理任务

- **完成任务**：点击任务旁边的复选框将其标记为已完成
- **编辑任务**：点击任务卡片上的编辑按钮（✏️）
- **删除任务**：点击删除按钮（🗑️）并确认删除

### 筛选任务

使用筛选面板来缩小任务范围：
- **搜索**：输入关键词在任务标题和描述中搜索
- **分类**：按特定分类筛选
- **优先级**：仅显示特定优先级的任务
- **状态**：按已完成或待办状态筛选
- **标签**：点击标签按钮按特定标签筛选

### 查看统计

统计面板显示：
- 任务总数
- 已完成任务数量
- 待办任务数量
- 逾期任务数量
- 整体进度百分比

## 🤝 贡献

欢迎贡献！请随时提交 Pull Request。对于重大更改，请先开启 issue 讨论您想要更改的内容。

### 开发指南

1. **Fork 仓库**
2. **创建功能分支**：`git checkout -b feature/amazing-feature`
3. **进行更改**并确保遵循现有的代码风格
4. **运行测试**：`npm run test:unit`
5. **运行代码检查**：`npm run lint`
6. **提交更改**：`git commit -m 'Add some amazing feature'`
7. **推送到分支**：`git push origin feature/amazing-feature`
8. **开启 Pull Request**

### 代码风格

- 使用 TypeScript 确保类型安全
- 遵循 Vue.js 3 Composition API 模式
- 使用 Pinia 进行状态管理
- 为新功能编写单元测试
- 遵循 ESLint 和 Prettier 配置

## 📄 许可证

本项目采用 MIT 许可证 - 详情请参阅 [LICENSE](LICENSE) 文件。

## 🙏 致谢

- Vue.js 团队提供的出色框架
- Pinia 团队提供的优秀状态管理解决方案
- 开源社区提供的灵感和工具

## 📞 支持

如果您有任何问题或需要帮助，请：
- 在 GitHub 上开启 issue
- 查看现有 issues 寻找类似问题
- 查阅文档

## 🔮 未来增强功能

- [ ] 深色模式支持
- [ ] 任务导入/导出功能
- [ ] 拖拽任务重新排序
- [ ] 任务模板
- [ ] 协作功能
- [ ] 移动应用版本
- [ ] 云同步
- [ ] 高级报告和分析

---

使用 Vue.js 3 和 TypeScript 用 ❤️ 制作

## 语言版本

- [English](README.md)
- [中文](README_CN.md)