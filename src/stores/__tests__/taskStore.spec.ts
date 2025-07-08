import { describe, it, expect, beforeEach, vi } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useTaskStore } from '../taskStore'
import type { Task } from '@/types/task'

// Mock localStorage
const localStorageMock = {
  getItem: vi.fn(),
  setItem: vi.fn(),
  removeItem: vi.fn(),
  clear: vi.fn(),
}
vi.stubGlobal('localStorage', localStorageMock)

// Mock crypto.randomUUID
vi.stubGlobal('crypto', {
  randomUUID: vi.fn(() => 'mock-uuid-123')
})

describe('Task Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
    vi.clearAllMocks()
  })

  it('initializes with empty tasks array', () => {
    const store = useTaskStore()
    expect(store.tasks).toEqual([])
    expect(store.filter).toEqual({})
  })

  it('adds a new task', () => {
    const store = useTaskStore()
    const taskData = {
      title: 'New Task',
      description: 'Task description',
      completed: false,
      priority: 'medium' as const,
      category: 'Work',
      tags: ['test']
    }

    store.addTask(taskData)

    expect(store.tasks).toHaveLength(1)
    expect(store.tasks[0]).toMatchObject({
      ...taskData,
      id: 'mock-uuid-123'
    })
    expect(store.tasks[0].createdAt).toBeInstanceOf(Date)
    expect(store.tasks[0].updatedAt).toBeInstanceOf(Date)
  })

  it('updates an existing task', () => {
    const store = useTaskStore()
    
    // Add a task first
    store.addTask({
      title: 'Original Task',
      description: 'Original description',
      completed: false,
      priority: 'low',
      category: 'Personal',
      tags: []
    })

    const taskId = store.tasks[0].id
    const updates = {
      title: 'Updated Task',
      priority: 'high' as const,
      completed: true
    }

    store.updateTask(taskId, updates)

    expect(store.tasks[0].title).toBe('Updated Task')
    expect(store.tasks[0].priority).toBe('high')
    expect(store.tasks[0].completed).toBe(true)
    expect(store.tasks[0].description).toBe('Original description') // Unchanged
  })

  it('deletes a task', () => {
    const store = useTaskStore()
    
    // Add two tasks
    store.addTask({
      title: 'Task 1',
      description: '',
      completed: false,
      priority: 'medium',
      category: 'Work',
      tags: []
    })
    store.addTask({
      title: 'Task 2',
      description: '',
      completed: false,
      priority: 'medium',
      category: 'Work',
      tags: []
    })

    expect(store.tasks).toHaveLength(2)

    const taskIdToDelete = store.tasks[0].id
    store.deleteTask(taskIdToDelete)

    expect(store.tasks).toHaveLength(1)
    expect(store.tasks[0].title).toBe('Task 2')
  })

  it('toggles task completion', () => {
    const store = useTaskStore()
    
    store.addTask({
      title: 'Toggle Task',
      description: '',
      completed: false,
      priority: 'medium',
      category: 'Work',
      tags: []
    })

    const taskId = store.tasks[0].id
    expect(store.tasks[0].completed).toBe(false)

    store.toggleTaskComplete(taskId)
    expect(store.tasks[0].completed).toBe(true)

    store.toggleTaskComplete(taskId)
    expect(store.tasks[0].completed).toBe(false)
  })

  it('filters tasks correctly', () => {
    const store = useTaskStore()
    
    // Add test tasks
    store.addTask({
      title: 'Work Task',
      description: 'Important work',
      completed: false,
      priority: 'high',
      category: 'Work',
      tags: ['urgent']
    })
    store.addTask({
      title: 'Personal Task',
      description: 'Personal stuff',
      completed: true,
      priority: 'low',
      category: 'Personal',
      tags: ['home']
    })

    // Test category filter
    store.setFilter({ category: 'Work' })
    expect(store.filteredTasks).toHaveLength(1)
    expect(store.filteredTasks[0].title).toBe('Work Task')

    // Test completion filter
    store.setFilter({ completed: true })
    expect(store.filteredTasks).toHaveLength(1)
    expect(store.filteredTasks[0].title).toBe('Personal Task')

    // Test priority filter
    store.setFilter({ priority: 'high' })
    expect(store.filteredTasks).toHaveLength(1)
    expect(store.filteredTasks[0].title).toBe('Work Task')

    // Test search filter
    store.setFilter({ search: 'work' })
    expect(store.filteredTasks).toHaveLength(1)
    expect(store.filteredTasks[0].title).toBe('Work Task')
  })

  it('calculates task statistics correctly', () => {
    const store = useTaskStore()
    
    // Add test tasks
    store.addTask({
      title: 'Completed Task',
      description: '',
      completed: true,
      priority: 'medium',
      category: 'Work',
      tags: []
    })
    store.addTask({
      title: 'Pending Task',
      description: '',
      completed: false,
      priority: 'medium',
      category: 'Work',
      tags: []
    })
    store.addTask({
      title: 'Overdue Task',
      description: '',
      completed: false,
      priority: 'medium',
      category: 'Work',
      tags: [],
      dueDate: new Date('2024-01-01') // Past date
    })

    const stats = store.taskStats
    expect(stats.total).toBe(3)
    expect(stats.completed).toBe(1)
    expect(stats.pending).toBe(2)
    expect(stats.overdue).toBe(1)
  })

  it('manages categories correctly', () => {
    const store = useTaskStore()
    
    expect(store.categories).toContain('Work')
    expect(store.categories).toContain('Personal')

    store.addCategory('New Category')
    expect(store.categories).toContain('New Category')

    // Should not add duplicate categories
    store.addCategory('Work')
    const workCount = store.categories.filter(cat => cat === 'Work').length
    expect(workCount).toBe(1)
  })

  it('extracts all tags correctly', () => {
    const store = useTaskStore()
    
    store.addTask({
      title: 'Task 1',
      description: '',
      completed: false,
      priority: 'medium',
      category: 'Work',
      tags: ['vue', 'typescript']
    })
    store.addTask({
      title: 'Task 2',
      description: '',
      completed: false,
      priority: 'medium',
      category: 'Work',
      tags: ['javascript', 'vue']
    })

    const allTags = store.allTags
    expect(allTags).toContain('vue')
    expect(allTags).toContain('typescript')
    expect(allTags).toContain('javascript')
    expect(allTags).toHaveLength(3) // Should not have duplicates
  })

  it('saves and loads tasks from localStorage', () => {
    const store = useTaskStore()
    
    store.addTask({
      title: 'Persistent Task',
      description: '',
      completed: false,
      priority: 'medium',
      category: 'Work',
      tags: []
    })

    // Should call localStorage.setItem when saving
    expect(localStorageMock.setItem).toHaveBeenCalledWith(
      'vue-task-manager-tasks',
      expect.any(String)
    )
  })
})