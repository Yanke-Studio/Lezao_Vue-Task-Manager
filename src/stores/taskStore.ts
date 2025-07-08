import { defineStore } from 'pinia'
import type { Task, TaskFilter, TaskStats } from '@/types/task'

export const useTaskStore = defineStore('task', {
  state: () => ({
    tasks: [] as Task[],
    filter: {} as TaskFilter,
    categories: ['工作', '个人', '购物', '健康', '学习'] as string[]
  }),

  getters: {
    filteredTasks: (state): Task[] => {
      let filtered = [...state.tasks]

      if (state.filter.category) {
        filtered = filtered.filter(task => task.category === state.filter.category)
      }

      if (state.filter.priority) {
        filtered = filtered.filter(task => task.priority === state.filter.priority)
      }

      if (state.filter.completed !== undefined) {
        filtered = filtered.filter(task => task.completed === state.filter.completed)
      }

      if (state.filter.search) {
        const search = state.filter.search.toLowerCase()
        filtered = filtered.filter(task => 
          task.title.toLowerCase().includes(search) ||
          task.description.toLowerCase().includes(search)
        )
      }

      if (state.filter.tag) {
        filtered = filtered.filter(task => task.tags.includes(state.filter.tag!))
      }

      return filtered.sort((a, b) => {
        // Sort by priority first (high -> medium -> low)
        const priorityOrder = { high: 3, medium: 2, low: 1 }
        if (priorityOrder[a.priority] !== priorityOrder[b.priority]) {
          return priorityOrder[b.priority] - priorityOrder[a.priority]
        }
        // Then by creation date (newest first)
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      })
    },

    taskStats: (state): TaskStats => {
      const total = state.tasks.length
      const completed = state.tasks.filter(task => task.completed).length
      const pending = total - completed
      const overdue = state.tasks.filter(task => 
        !task.completed && 
        task.dueDate && 
        new Date(task.dueDate) < new Date()
      ).length

      return { total, completed, pending, overdue }
    },

    allTags: (state): string[] => {
      const tags = new Set<string>()
      state.tasks.forEach(task => {
        task.tags.forEach(tag => tags.add(tag))
      })
      return Array.from(tags).sort()
    }
  },

  actions: {
    addTask(taskData: Omit<Task, 'id' | 'createdAt' | 'updatedAt'>) {
      const task: Task = {
        ...taskData,
        id: crypto.randomUUID(),
        createdAt: new Date(),
        updatedAt: new Date()
      }
      this.tasks.push(task)
      this.saveTasks()
    },

    updateTask(id: string, updates: Partial<Task>) {
      const index = this.tasks.findIndex(task => task.id === id)
      if (index !== -1) {
        this.tasks[index] = {
          ...this.tasks[index],
          ...updates,
          updatedAt: new Date()
        }
        this.saveTasks()
      }
    },

    deleteTask(id: string) {
      const index = this.tasks.findIndex(task => task.id === id)
      if (index !== -1) {
        this.tasks.splice(index, 1)
        this.saveTasks()
      }
    },

    toggleTaskComplete(id: string) {
      const task = this.tasks.find(task => task.id === id)
      if (task) {
        task.completed = !task.completed
        task.updatedAt = new Date()
        this.saveTasks()
      }
    },

    setFilter(filter: TaskFilter) {
      this.filter = { ...filter }
    },

    clearFilter() {
      this.filter = {}
    },

    addCategory(category: string) {
      if (!this.categories.includes(category)) {
        this.categories.push(category)
        this.saveTasks()
      }
    },

    saveTasks() {
      localStorage.setItem('vue-task-manager-tasks', JSON.stringify(this.tasks))
      localStorage.setItem('vue-task-manager-categories', JSON.stringify(this.categories))
    },

    loadTasks() {
      const savedTasks = localStorage.getItem('vue-task-manager-tasks')
      const savedCategories = localStorage.getItem('vue-task-manager-categories')
      
      if (savedTasks) {
        this.tasks = JSON.parse(savedTasks).map((task: any) => ({
          ...task,
          createdAt: new Date(task.createdAt),
          updatedAt: new Date(task.updatedAt),
          dueDate: task.dueDate ? new Date(task.dueDate) : undefined
        }))
      }

      if (savedCategories) {
        this.categories = JSON.parse(savedCategories)
      }
    },

    // Demo data for initial setup
    loadDemoData() {
      if (this.tasks.length === 0) {
        const demoTasks: Omit<Task, 'id' | 'createdAt' | 'updatedAt'>[] = [
          {
            title: '完成Vue.js项目',
            description: '完成任务管理应用程序的所有功能开发',
            completed: false,
            priority: 'high',
            category: '工作',
            tags: ['vue', 'typescript', '项目'],
            dueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) // 7 days from now
          },
          {
            title: '购买生活用品',
            description: '牛奶、面包、鸡蛋和蔬菜',
            completed: false,
            priority: 'medium',
            category: '购物',
            tags: ['生活用品', '食物']
          },
          {
            title: '健身锻炼',
            description: '30分钟有氧运动和力量训练',
            completed: true,
            priority: 'medium',
            category: '健康',
            tags: ['健身', '运动']
          },
          {
            title: '学习TypeScript文档',
            description: '学习TypeScript的高级特性',
            completed: false,
            priority: 'low',
            category: '学习',
            tags: ['typescript', '文档', '学习']
          }
        ]

        demoTasks.forEach(task => this.addTask(task))
      }
    }
  }
})