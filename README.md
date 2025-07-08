# Lezao Studio Global Vue Task Manager

A modern, responsive task management application built with Vue.js 3, TypeScript, and Pinia. Designed to help you organize your tasks efficiently with a clean and intuitive interface.

![Vue Task Manager](https://img.shields.io/badge/Vue.js-3.x-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Pinia](https://img.shields.io/badge/Pinia-FFD859?style=for-the-badge&logo=pinia&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

## ✨ Features

- **📝 Task Management**: Create, edit, and delete tasks with detailed descriptions and due dates
- **🏷️ Categories & Tags**: Organize tasks with custom categories and tags for better organization
- **⚡ Priority Levels**: Set task priorities (High, Medium, Low) to focus on what matters most
- **🔍 Advanced Filtering**: Filter tasks by status, category, priority, tags, or search by keywords
- **📊 Progress Tracking**: Visual progress indicators and statistics to track your productivity
- **💾 Local Storage**: All data is stored locally in your browser - no account required
- **📱 Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **🎨 Modern UI**: Clean, intuitive interface with smooth animations and transitions

## 🚀 Demo

You can see a live demo of the application by running it locally (see installation instructions below).

## 🛠️ Technology Stack

- **Vue.js 3** - Progressive JavaScript framework with Composition API
- **TypeScript** - Type-safe JavaScript for better development experience
- **Pinia** - Modern state management for Vue applications
- **Vue Router** - Official router for Vue.js applications
- **Vite** - Fast build tool and development server
- **Vitest** - Unit testing framework powered by Vite
- **ESLint & Prettier** - Code linting and formatting

## 📦 Installation

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/vue-task-manager.git
   cd vue-task-manager
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to see the application.

## 🏗️ Build for Production

```bash
# Build the application
npm run build

# Preview the production build
npm run preview
```

## 🧪 Testing

```bash
# Run unit tests
npm run test:unit

# Run tests in watch mode
npm run test:unit:watch
```

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run test:unit` - Run unit tests
- `npm run lint` - Lint code with ESLint
- `npm run format` - Format code with Prettier

## 🏗️ Project Structure

```
vue-task-manager/
├── public/                 # Static assets
├── src/
│   ├── components/        # Vue components
│   │   ├── TaskCard.vue
│   │   ├── TaskForm.vue
│   │   ├── TaskFilter.vue
│   │   └── TaskStats.vue
│   ├── stores/           # Pinia stores
│   │   └── taskStore.ts
│   ├── types/            # TypeScript type definitions
│   │   └── task.ts
│   ├── views/            # Page components
│   │   ├── HomeView.vue
│   │   └── AboutView.vue
│   ├── router/           # Vue Router configuration
│   │   └── index.ts
│   ├── App.vue           # Root component
│   └── main.ts           # Application entry point
├── tests/                # Test files
├── package.json
└── README.md
```

## 🎯 Usage

### Creating Tasks

1. Click the "Add Task" button in the header
2. Fill in the task details:
   - **Title** (required): Brief description of the task
   - **Description** (optional): Detailed information about the task
   - **Priority**: Choose from High, Medium, or Low
   - **Category**: Select from existing categories or create a new one
   - **Due Date** (optional): Set a deadline for the task
   - **Tags** (optional): Add tags for better organization

### Managing Tasks

- **Complete Task**: Click the checkbox next to a task to mark it as complete
- **Edit Task**: Click the edit button (✏️) on any task card
- **Delete Task**: Click the delete button (🗑️) and confirm the deletion

### Filtering Tasks

Use the filter panel to narrow down your tasks:
- **Search**: Type keywords to search in task titles and descriptions
- **Category**: Filter by specific categories
- **Priority**: Show only tasks with specific priority levels
- **Status**: Filter by completed or pending tasks
- **Tags**: Click on tag buttons to filter by specific tags

### Viewing Statistics

The stats panel shows:
- Total number of tasks
- Completed tasks count
- Pending tasks count
- Overdue tasks count
- Overall progress percentage

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

### Development Guidelines

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Make your changes** and ensure they follow the existing code style
4. **Run tests**: `npm run test:unit`
5. **Run linting**: `npm run lint`
6. **Commit your changes**: `git commit -m 'Add some amazing feature'`
7. **Push to the branch**: `git push origin feature/amazing-feature`
8. **Open a Pull Request**

### Code Style

- Use TypeScript for type safety
- Follow Vue.js 3 Composition API patterns
- Use Pinia for state management
- Write unit tests for new features
- Follow ESLint and Prettier configurations

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Vue.js team for the amazing framework
- Pinia team for the excellent state management solution
- The open-source community for inspiration and tools

## 📞 Support

If you have any questions or need help, please:
- Open an issue on GitHub
- Check the existing issues for similar problems
- Review the documentation

## 🔮 Future Enhancements

- [ ] Dark mode support
- [ ] Task import/export functionality
- [ ] Drag and drop task reordering
- [ ] Task templates
- [ ] Collaboration features
- [ ] Mobile app version
- [ ] Cloud synchronization
- [ ] Advanced reporting and analytics

---

Made with ❤️ using Vue.js 3 and TypeScript

## Language Versions

- [English](README.md)
- [中文](README_CN.md)