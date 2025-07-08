# Contributing to Vue Task Manager

Thank you for your interest in contributing to Vue Task Manager! We welcome contributions from everyone and are grateful for every contribution, no matter how small.

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn
- Git
- A GitHub account

### Setting up the Development Environment

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/yourusername/vue-task-manager.git
   cd vue-task-manager
   ```
3. **Add the original repository as upstream**:
   ```bash
   git remote add upstream https://github.com/originalowner/vue-task-manager.git
   ```
4. **Install dependencies**:
   ```bash
   npm install
   ```
5. **Start the development server**:
   ```bash
   npm run dev
   ```

## 🛠️ Development Workflow

### Before You Start

1. **Check existing issues** to see if your idea is already being worked on
2. **Create an issue** for new features or bug reports
3. **Discuss your approach** in the issue before starting work

### Making Changes

1. **Create a new branch** from `main`:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes** following our coding standards

3. **Test your changes**:
   ```bash
   npm run test:unit
   npm run lint
   ```

4. **Commit your changes** with a descriptive message:
   ```bash
   git commit -m "feat: add task drag and drop functionality"
   ```

5. **Push to your fork**:
   ```bash
   git push origin feature/your-feature-name
   ```

6. **Create a Pull Request** on GitHub

## 📝 Coding Standards

### Code Style

- **TypeScript**: Use TypeScript for all new code
- **Vue 3**: Use Composition API with `<script setup>`
- **ESLint**: Follow the existing ESLint configuration
- **Prettier**: Code is automatically formatted with Prettier

### Component Guidelines

- **Single File Components**: Use `.vue` files with `<script setup lang="ts">`
- **Props**: Define props with TypeScript interfaces
- **Emits**: Explicitly define emitted events
- **Composables**: Extract reusable logic into composables
- **Naming**: Use PascalCase for components, camelCase for variables

### Example Component Structure

```vue
<template>
  <div class="component-name">
    <!-- Template content -->
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import type { ComponentProps } from '@/types'

interface Props {
  // Define props with types
}

const props = defineProps<Props>()

const emit = defineEmits<{
  // Define emitted events
}>()

// Component logic
</script>

<style scoped>
/* Component styles */
</style>
```

### State Management

- **Pinia**: Use Pinia stores for global state
- **Composition API**: Use `ref` and `reactive` for local state
- **Computed**: Use computed properties for derived state
- **Actions**: Keep actions pure and testable

### Testing

- **Unit Tests**: Write tests for all new components and functions
- **Vitest**: Use Vitest for testing
- **Coverage**: Aim for good test coverage
- **Test Structure**: Follow Arrange-Act-Assert pattern

## 🐛 Bug Reports

When reporting bugs, please include:

- **Description**: Clear description of the issue
- **Steps to Reproduce**: Detailed steps to reproduce the bug
- **Expected Behavior**: What you expected to happen
- **Actual Behavior**: What actually happened
- **Environment**: Browser, OS, Node.js version
- **Screenshots**: If applicable

### Bug Report Template

```markdown
## Bug Description
A clear and concise description of the bug.

## Steps to Reproduce
1. Go to '...'
2. Click on '...'
3. Scroll down to '...'
4. See error

## Expected Behavior
A clear description of what you expected to happen.

## Actual Behavior
A clear description of what actually happened.

## Environment
- Browser: [e.g., Chrome 91]
- OS: [e.g., macOS 11.4]
- Node.js: [e.g., 16.14.0]

## Screenshots
If applicable, add screenshots to help explain your problem.
```

## 💡 Feature Requests

When suggesting features, please include:

- **Use Case**: Why is this feature needed?
- **Description**: Detailed description of the feature
- **Mockups**: Visual mockups if applicable
- **Implementation Ideas**: Any thoughts on implementation

## 🔄 Pull Request Process

### Before Submitting

- [ ] Code follows the style guidelines
- [ ] Tests pass (`npm run test:unit`)
- [ ] Linting passes (`npm run lint`)
- [ ] Code is properly documented
- [ ] Commit messages are descriptive

### Pull Request Template

```markdown
## Description
Brief description of changes made.

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Unit tests added/updated
- [ ] Manual testing completed
- [ ] All tests pass

## Screenshots
If applicable, add screenshots of the changes.

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Tests added/updated
- [ ] Documentation updated
```

### Review Process

1. **Automated Checks**: CI will run tests and linting
2. **Code Review**: Maintainers will review your code
3. **Feedback**: Address any feedback or requested changes
4. **Approval**: Once approved, your PR will be merged

## 🏷️ Commit Message Guidelines

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `style:` Code style changes (formatting, etc.)
- `refactor:` Code refactoring
- `test:` Adding or updating tests
- `chore:` Maintenance tasks

### Examples

```bash
feat: add task drag and drop functionality
fix: resolve task deletion confirmation dialog issue
docs: update installation instructions
style: format code with prettier
refactor: extract task validation logic
test: add unit tests for task store
chore: update dependencies
```

## 🎯 Areas for Contribution

We welcome contributions in these areas:

### High Priority
- Bug fixes
- Performance improvements
- Accessibility improvements
- Mobile responsiveness
- Test coverage

### Medium Priority
- New features (see roadmap)
- UI/UX improvements
- Documentation improvements
- Code refactoring

### Low Priority
- Additional themes
- Advanced features
- Integrations

## 📚 Resources

- [Vue.js 3 Documentation](https://vuejs.org/)
- [TypeScript Documentation](https://www.typescriptlang.org/)
- [Pinia Documentation](https://pinia.vuejs.org/)
- [Vitest Documentation](https://vitest.dev/)
- [Conventional Commits](https://www.conventionalcommits.org/)

## 🤝 Community

- **Be Respectful**: Treat everyone with respect and kindness
- **Be Constructive**: Provide helpful feedback and suggestions
- **Be Patient**: Remember that everyone is learning
- **Be Inclusive**: Welcome contributors of all backgrounds and skill levels

## ❓ Questions?

If you have questions about contributing:

1. Check existing issues and discussions
2. Create a new issue with the "question" label
3. Join our community discussions

Thank you for contributing to Vue Task Manager! 🎉

## Language Versions

- [English](CONTRIBUTING.md)
- [中文](CONTRIBUTING_CN.md)