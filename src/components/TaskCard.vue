<template>
  <div class="task-card" :class="{ completed: task.completed, overdue: isOverdue }">
    <div class="task-header">
      <div class="task-checkbox">
        <input
          type="checkbox"
          :checked="task.completed"
          @change="$emit('toggle', task.id)"
          class="checkbox"
        />
      </div>
      <div class="task-content">
        <h3 class="task-title" :class="{ completed: task.completed }">
          {{ task.title }}
        </h3>
        <p class="task-description" v-if="task.description">
          {{ task.description }}
        </p>
      </div>
      <div class="task-actions">
        <button @click="$emit('edit', task)" class="btn-icon" title="Edit">
          ✏️
        </button>
        <button @click="$emit('delete', task.id)" class="btn-icon btn-danger" title="Delete">
          🗑️
        </button>
      </div>
    </div>
    
    <div class="task-meta">
      <div class="task-info">
        <span class="priority" :class="`priority-${task.priority}`">
          {{ getPriorityText(task.priority) }}
        </span>
        <span class="category">{{ task.category }}</span>
        <span class="due-date" v-if="task.dueDate">
          截止：{{ formatDate(task.dueDate) }}
        </span>
      </div>
      
      <div class="task-tags" v-if="task.tags.length">
        <span v-for="tag in task.tags" :key="tag" class="tag">
          #{{ tag }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { Task } from '@/types/task'

interface Props {
  task: Task
}

const props = defineProps<Props>()

defineEmits<{
  toggle: [id: string]
  edit: [task: Task]
  delete: [id: string]
}>()

const isOverdue = computed(() => {
  return !props.task.completed && 
         props.task.dueDate && 
         new Date(props.task.dueDate) < new Date()
})

const getPriorityText = (priority: string) => {
  const priorityMap: Record<string, string> = {
    'high': '高',
    'medium': '中',
    'low': '低'
  }
  return priorityMap[priority] || priority
}

const formatDate = (date: Date) => {
  return new Date(date).toLocaleDateString('zh-CN', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  })
}
</script>

<style scoped>
.task-card {
  background: white;
  border: 1px solid #e1e5e9;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 12px;
  transition: all 0.2s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.task-card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transform: translateY(-1px);
}

.task-card.completed {
  opacity: 0.7;
  background: #f8f9fa;
}

.task-card.overdue {
  border-left: 4px solid #dc3545;
  background: #fff5f5;
}

.task-header {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 12px;
}

.task-checkbox {
  margin-top: 2px;
}

.checkbox {
  width: 18px;
  height: 18px;
  cursor: pointer;
}

.task-content {
  flex: 1;
}

.task-title {
  margin: 0 0 4px 0;
  font-size: 16px;
  font-weight: 600;
  color: #2c3e50;
  line-height: 1.4;
}

.task-title.completed {
  text-decoration: line-through;
  color: #6c757d;
}

.task-description {
  margin: 0;
  color: #6c757d;
  font-size: 14px;
  line-height: 1.4;
}

.task-actions {
  display: flex;
  gap: 4px;
}

.btn-icon {
  background: none;
  border: none;
  padding: 4px 8px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.2s;
}

.btn-icon:hover {
  background: #f8f9fa;
}

.btn-danger:hover {
  background: #fff5f5;
}

.task-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
}

.task-info {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}

.priority {
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
}

.priority-high {
  background: #fee;
  color: #dc3545;
}

.priority-medium {
  background: #fff3cd;
  color: #856404;
}

.priority-low {
  background: #d1ecf1;
  color: #0c5460;
}

.category {
  background: #e9ecef;
  color: #495057;
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 500;
}

.due-date {
  font-size: 12px;
  color: #6c757d;
}

.task-tags {
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
}

.tag {
  background: #f8f9fa;
  color: #495057;
  padding: 2px 6px;
  border-radius: 8px;
  font-size: 11px;
  border: 1px solid #dee2e6;
}

@media (max-width: 768px) {
  .task-card {
    padding: 12px;
  }
  
  .task-header {
    gap: 8px;
  }
  
  .task-meta {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .task-info {
    gap: 8px;
  }
}
</style>