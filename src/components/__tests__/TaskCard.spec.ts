import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import TaskCard from '../TaskCard.vue'
import type { Task } from '@/types/task'

const mockTask: Task = {
  id: '1',
  title: 'Test Task',
  description: 'Test Description',
  completed: false,
  priority: 'medium',
  category: 'Work',
  tags: ['test', 'vue'],
  createdAt: new Date('2025-01-01'),
  updatedAt: new Date('2025-01-01'),
  dueDate: new Date('2025-01-15')
}

describe('TaskCard', () => {
  it('renders task information correctly', () => {
    const wrapper = mount(TaskCard, {
      props: { task: mockTask }
    })

    expect(wrapper.text()).toContain('Test Task')
    expect(wrapper.text()).toContain('Test Description')
    expect(wrapper.text()).toContain('MEDIUM')
    expect(wrapper.text()).toContain('Work')
    expect(wrapper.text()).toContain('#test')
    expect(wrapper.text()).toContain('#vue')
  })

  it('shows completed state correctly', () => {
    const completedTask = { ...mockTask, completed: true }
    const wrapper = mount(TaskCard, {
      props: { task: completedTask }
    })

    const checkbox = wrapper.find('input[type="checkbox"]')
    expect((checkbox.element as HTMLInputElement).checked).toBe(true)
    expect(wrapper.find('.task-title').classes()).toContain('completed')
  })

  it('emits toggle event when checkbox is clicked', async () => {
    const wrapper = mount(TaskCard, {
      props: { task: mockTask }
    })

    const checkbox = wrapper.find('input[type="checkbox"]')
    await checkbox.trigger('change')

    expect(wrapper.emitted('toggle')).toBeTruthy()
    expect(wrapper.emitted('toggle')?.[0]).toEqual(['1'])
  })

  it('emits edit event when edit button is clicked', async () => {
    const wrapper = mount(TaskCard, {
      props: { task: mockTask }
    })

    const editButton = wrapper.find('button[title="Edit"]')
    await editButton.trigger('click')

    expect(wrapper.emitted('edit')).toBeTruthy()
    expect(wrapper.emitted('edit')?.[0]).toEqual([mockTask])
  })

  it('emits delete event when delete button is clicked', async () => {
    const wrapper = mount(TaskCard, {
      props: { task: mockTask }
    })

    const deleteButton = wrapper.find('button[title="Delete"]')
    await deleteButton.trigger('click')

    expect(wrapper.emitted('delete')).toBeTruthy()
    expect(wrapper.emitted('delete')?.[0]).toEqual(['1'])
  })

  it('shows overdue styling for overdue tasks', () => {
    const overdueTask = {
      ...mockTask,
      completed: false,
      dueDate: new Date('2024-12-01') // Past date
    }
    
    const wrapper = mount(TaskCard, {
      props: { task: overdueTask }
    })

    expect(wrapper.find('.task-card').classes()).toContain('overdue')
  })

  it('displays priority with correct styling', () => {
    const highPriorityTask = { ...mockTask, priority: 'high' as const }
    const wrapper = mount(TaskCard, {
      props: { task: highPriorityTask }
    })

    const priorityElement = wrapper.find('.priority')
    expect(priorityElement.classes()).toContain('priority-high')
    expect(priorityElement.text()).toBe('HIGH')
  })
})