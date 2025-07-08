<template>
  <div class="home">
    <header class="app-header">
      <div class="header-content">
        <h1 class="app-title">
          <span class="title-icon">✅</span>
          Vue 任务管理器
        </h1>
        <button @click="showTaskForm = true" class="btn-primary">
          <span class="btn-icon">+</span>
          添加任务
        </button>
      </div>
    </header>

    <main class="main-content">
      <TaskStats />
      <TaskFilter />
      
      <div class="tasks-section">
        <div class="section-header">
          <h2>任务列表</h2>
          <div class="task-count">
            共 {{ filteredTasks.length }} 个任务
          </div>
        </div>
        
        <div class="tasks-container">
          <div v-if="filteredTasks.length === 0" class="empty-state">
            <div class="empty-icon">📝</div>
            <h3>暂无任务</h3>
            <p v-if="hasActiveFilters">
              请尝试调整筛选条件或 
              <button @click="clearFilters" class="link-button">清除所有筛选</button>
            </p>
            <p v-else>
              <button @click="showTaskForm = true" class="link-button">创建您的第一个任务</button>
              开始使用吧！
            </p>
          </div>
          
          <TaskCard
            v-for="task in filteredTasks"
            :key="task.id"
            :task="task"
            @toggle="toggleTask"
            @edit="editTask"
            @delete="deleteTask"
          />
        </div>
      </div>
    </main>

    <TaskForm
      v-if="showTaskForm"
      :task="editingTask"
      @close="closeTaskForm"
    />

    <div v-if="showDeleteConfirm" class="delete-confirm-overlay" @click="cancelDelete">
      <div class="delete-confirm" @click.stop>
        <h3>删除任务</h3>
        <p>您确定要删除这个任务吗？此操作无法撤销。</p>
        <div class="delete-actions">
          <button @click="cancelDelete" class="btn btn-secondary">取消</button>
          <button @click="confirmDelete" class="btn btn-danger">删除</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useTaskStore } from '@/stores/taskStore'
import TaskCard from '@/components/TaskCard.vue'
import TaskForm from '@/components/TaskForm.vue'
import TaskFilter from '@/components/TaskFilter.vue'
import TaskStats from '@/components/TaskStats.vue'
import type { Task } from '@/types/task'

const taskStore = useTaskStore()

const showTaskForm = ref(false)
const editingTask = ref<Task | undefined>()
const showDeleteConfirm = ref(false)
const taskToDelete = ref<string>('')

const filteredTasks = computed(() => taskStore.filteredTasks)
const hasActiveFilters = computed(() => {
  const filter = taskStore.filter
  return !!(filter.search || filter.category || filter.priority || filter.completed !== undefined || filter.tag)
})

onMounted(() => {
  taskStore.loadTasks()
  taskStore.loadDemoData()
})

const toggleTask = (id: string) => {
  taskStore.toggleTaskComplete(id)
}

const editTask = (task: Task) => {
  editingTask.value = task
  showTaskForm.value = true
}

const deleteTask = (id: string) => {
  taskToDelete.value = id
  showDeleteConfirm.value = true
}

const confirmDelete = () => {
  if (taskToDelete.value) {
    taskStore.deleteTask(taskToDelete.value)
    taskToDelete.value = ''
    showDeleteConfirm.value = false
  }
}

const cancelDelete = () => {
  taskToDelete.value = ''
  showDeleteConfirm.value = false
}

const closeTaskForm = () => {
  showTaskForm.value = false
  editingTask.value = undefined
}

const clearFilters = () => {
  taskStore.clearFilter()
}
</script>

<style scoped>
.home {
  min-height: 100vh;
  background: #f8f9fa;
}

.app-header {
  background: white;
  border-bottom: 1px solid #e1e5e9;
  padding: 20px 0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.header-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.app-title {
  margin: 0;
  color: #2c3e50;
  font-size: 28px;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 12px;
}

.title-icon {
  font-size: 32px;
}

.btn-primary {
  background: #007bff;
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.2s;
  box-shadow: 0 2px 4px rgba(0, 123, 255, 0.2);
}

.btn-primary:hover {
  background: #0056b3;
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(0, 123, 255, 0.3);
}

.btn-icon {
  font-size: 16px;
  font-weight: bold;
}

.main-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 30px 20px;
}

.tasks-section {
  background: white;
  border: 1px solid #e1e5e9;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.section-header {
  padding: 20px 24px;
  border-bottom: 1px solid #e1e5e9;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f8f9fa;
}

.section-header h2 {
  margin: 0;
  color: #2c3e50;
  font-size: 20px;
  font-weight: 600;
}

.task-count {
  color: #6c757d;
  font-size: 14px;
  font-weight: 500;
}

.tasks-container {
  padding: 20px 24px;
}

.empty-state {
  text-align: center;
  padding: 60px 20px;
  color: #6c757d;
}

.empty-icon {
  font-size: 48px;
  margin-bottom: 16px;
}

.empty-state h3 {
  margin: 0 0 12px 0;
  color: #495057;
  font-size: 20px;
}

.empty-state p {
  margin: 0;
  font-size: 14px;
  line-height: 1.5;
}

.link-button {
  background: none;
  border: none;
  color: #007bff;
  cursor: pointer;
  text-decoration: underline;
  font-size: inherit;
  padding: 0;
}

.link-button:hover {
  color: #0056b3;
}

.delete-confirm-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
}

.delete-confirm {
  background: white;
  border-radius: 12px;
  padding: 24px;
  max-width: 400px;
  width: 100%;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.delete-confirm h3 {
  margin: 0 0 12px 0;
  color: #2c3e50;
  font-size: 18px;
}

.delete-confirm p {
  margin: 0 0 20px 0;
  color: #6c757d;
  line-height: 1.5;
}

.delete-actions {
  display: flex;
  gap: 12px;
  justify-content: flex-end;
}

.btn {
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-secondary {
  background: #6c757d;
  color: white;
}

.btn-secondary:hover {
  background: #5a6268;
}

.btn-danger {
  background: #dc3545;
  color: white;
}

.btn-danger:hover {
  background: #c82333;
}

@media (max-width: 768px) {
  .header-content {
    padding: 0 16px;
    flex-direction: column;
    gap: 16px;
    text-align: center;
  }
  
  .app-title {
    font-size: 24px;
  }
  
  .main-content {
    padding: 20px 16px;
  }
  
  .section-header {
    padding: 16px 20px;
    flex-direction: column;
    gap: 8px;
    text-align: center;
  }
  
  .tasks-container {
    padding: 16px 20px;
  }
  
  .empty-state {
    padding: 40px 16px;
  }
}
</style>