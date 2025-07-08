export interface Task {
  id: string
  title: string
  description: string
  completed: boolean
  priority: 'low' | 'medium' | 'high'
  category: string
  tags: string[]
  createdAt: Date
  updatedAt: Date
  dueDate?: Date
}

export interface TaskFilter {
  category?: string
  priority?: 'low' | 'medium' | 'high'
  completed?: boolean
  search?: string
  tag?: string
}

export interface TaskStats {
  total: number
  completed: number
  pending: number
  overdue: number
}