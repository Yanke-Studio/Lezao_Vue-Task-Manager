# 为 Vue 任务管理器贡献代码

感谢您对为 Vue 任务管理器贡献代码的兴趣！我们欢迎来自每个人的贡献，并对每一个贡献都心怀感激，无论多么微小。

## 🚀 开始

### 前置要求

- Node.js（版本 16 或更高）
- npm 或 yarn
- Git
- GitHub 账户

### 设置开发环境

1. **Fork 仓库**在 GitHub 上
2. **在本地克隆您的 fork**：
   ```bash
   git clone https://github.com/yourusername/vue-task-manager.git
   cd vue-task-manager
   ```
3. **添加原始仓库作为上游**：
   ```bash
   git remote add upstream https://github.com/originalowner/vue-task-manager.git
   ```
4. **安装依赖**：
   ```bash
   npm install
   ```
5. **启动开发服务器**：
   ```bash
   npm run dev
   ```

## 🛠️ 开发工作流程

### 开始之前

1. **检查现有 issues** 看看您的想法是否已经在进行中
2. **为新功能或错误报告创建 issue**
3. **在开始工作之前在 issue 中讨论您的方法**

### 进行更改

1. **从 `main` 创建新分支**：
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **进行更改**并遵循我们的编码标准

3. **测试您的更改**：
   ```bash
   npm run test:unit
   npm run lint
   ```

4. **使用描述性消息提交您的更改**：
   ```bash
   git commit -m "feat: add task drag and drop functionality"
   ```

5. **推送到您的 fork**：
   ```bash
   git push origin feature/your-feature-name
   ```

6. **在 GitHub 上创建 Pull Request**

## 📝 编码标准

### 代码风格

- **TypeScript**：为所有新代码使用 TypeScript
- **Vue 3**：使用 Composition API 和 `<script setup>`
- **ESLint**：遵循现有的 ESLint 配置
- **Prettier**：代码会自动使用 Prettier 格式化

### 组件指南

- **单文件组件**：使用带有 `<script setup lang="ts">` 的 `.vue` 文件
- **Props**：使用 TypeScript 接口定义 props
- **Emits**：明确定义发出的事件
- **Composables**：将可重用逻辑提取到 composables 中
- **命名**：组件使用 PascalCase，变量使用 camelCase

### 示例组件结构

```vue
<template>
  <div class="component-name">
    <!-- 模板内容 -->
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import type { ComponentProps } from '@/types'

interface Props {
  // 使用类型定义 props
}

const props = defineProps<Props>()

const emit = defineEmits<{
  // 定义发出的事件
}>()

// 组件逻辑
</script>

<style scoped>
/* 组件样式 */
</style>
```

### 状态管理

- **Pinia**：使用 Pinia stores 管理全局状态
- **Composition API**：使用 `ref` 和 `reactive` 管理本地状态
- **Computed**：使用计算属性处理派生状态
- **Actions**：保持 actions 纯净和可测试

### 测试

- **单元测试**：为所有新组件和函数编写测试
- **Vitest**：使用 Vitest 进行测试
- **覆盖率**：争取良好的测试覆盖率
- **测试结构**：遵循 Arrange-Act-Assert 模式

## 🐛 错误报告

报告错误时，请包含：

- **描述**：问题的清晰描述
- **重现步骤**：重现错误的详细步骤
- **预期行为**：您期望发生的事情
- **实际行为**：实际发生的事情
- **环境**：浏览器、操作系统、Node.js 版本
- **截图**：如果适用

### 错误报告模板

```markdown
## 错误描述
对错误的清晰简洁描述。

## 重现步骤
1. 转到 '...'
2. 点击 '...'
3. 向下滚动到 '...'
4. 看到错误

## 预期行为
对您期望发生的事情的清晰描述。

## 实际行为
对实际发生的事情的清晰描述。

## 环境
- 浏览器：[例如，Chrome 91]
- 操作系统：[例如，macOS 11.4]
- Node.js：[例如，16.14.0]

## 截图
如果适用，添加截图来帮助解释您的问题。
```

## 💡 功能请求

建议功能时，请包含：

- **用例**：为什么需要这个功能？
- **描述**：功能的详细描述
- **模型图**：如果适用，提供视觉模型图
- **实现想法**：关于实现的任何想法

## 🔄 Pull Request 流程

### 提交之前

- [ ] 代码遵循样式指南
- [ ] 测试通过（`npm run test:unit`）
- [ ] 代码检查通过（`npm run lint`）
- [ ] 代码有适当的文档
- [ ] 提交消息具有描述性

### Pull Request 模板

```markdown
## 描述
对所做更改的简要描述。

## 更改类型
- [ ] 错误修复
- [ ] 新功能
- [ ] 破坏性更改
- [ ] 文档更新

## 测试
- [ ] 添加/更新了单元测试
- [ ] 完成了手动测试
- [ ] 所有测试通过

## 截图
如果适用，添加更改的截图。

## 检查清单
- [ ] 代码遵循样式指南
- [ ] 完成了自我审查
- [ ] 添加/更新了测试
- [ ] 更新了文档
```

### 审查流程

1. **自动检查**：CI 将运行测试和代码检查
2. **代码审查**：维护者将审查您的代码
3. **反馈**：处理任何反馈或请求的更改
4. **批准**：一旦批准，您的 PR 将被合并

## 🏷️ 提交消息指南

我们遵循 [约定式提交](https://www.conventionalcommits.org/) 规范：

- `feat:` 新功能
- `fix:` 错误修复
- `docs:` 文档更改
- `style:` 代码样式更改（格式化等）
- `refactor:` 代码重构
- `test:` 添加或更新测试
- `chore:` 维护任务

### 示例

```bash
feat: add task drag and drop functionality
fix: resolve task deletion confirmation dialog issue
docs: update installation instructions
style: format code with prettier
refactor: extract task validation logic
test: add unit tests for task store
chore: update dependencies
```

## 🎯 贡献领域

我们欢迎在这些领域的贡献：

### 高优先级
- 错误修复
- 性能改进
- 可访问性改进
- 移动响应性
- 测试覆盖率

### 中优先级
- 新功能（参见路线图）
- UI/UX 改进
- 文档改进
- 代码重构

### 低优先级
- 额外主题
- 高级功能
- 集成

## 📚 资源

- [Vue.js 3 文档](https://cn.vuejs.org/)
- [TypeScript 文档](https://www.typescriptlang.org/)
- [Pinia 文档](https://pinia.vuejs.org/zh/)
- [Vitest 文档](https://cn.vitest.dev/)
- [约定式提交](https://www.conventionalcommits.org/)

## 🤝 社区

- **尊重他人**：以尊重和善意对待每个人
- **建设性**：提供有用的反馈和建议
- **耐心**：记住每个人都在学习
- **包容**：欢迎所有背景和技能水平的贡献者

## ❓ 问题？

如果您对贡献有疑问：

1. 查看现有 issues 和讨论
2. 创建带有"question"标签的新 issue
3. 加入我们的社区讨论

感谢您为 Vue 任务管理器做出贡献！🎉

## 语言版本

- [English](CONTRIBUTING.md)
- [中文](CONTRIBUTING_CN.md)