<template>
  <div class="task-form-overlay" @click="closeForm">
    <div class="task-form" @click.stop>
      <div class="form-header">
        <h2>{{ isEditing ? '编辑任务' : '添加新任务' }}</h2>
        <button @click="closeForm" class="btn-close">×</button>
      </div>
      
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="title">标题 *</label>
          <input
            id="title"
            v-model="form.title"
            type="text"
            required
            placeholder="请输入任务标题"
            class="form-input"
          />
        </div>
        
        <div class="form-group">
          <label for="description">描述</label>
          <textarea
            id="description"
            v-model="form.description"
            placeholder="请输入任务描述"
            class="form-textarea"
            rows="3"
          ></textarea>
        </div>
        
        <div class="form-row">
          <div class="form-group">
            <label for="priority">优先级</label>
            <select id="priority" v-model="form.priority" class="form-select">
              <option value="low">低</option>
              <option value="medium">中</option>
              <option value="high">高</option>
            </select>
          </div>
          
          <div class="form-group">
            <label for="category">分类</label>
            <div class="category-input">
              <select v-model="selectedCategory" class="form-select" @change="updateCategory">
                <option value="">选择分类</option>
                <option v-for="cat in categories" :key="cat" :value="cat">{{ cat }}</option>
                <option value="__new__">+ 添加新分类</option>
              </select>
              <input
                v-if="showNewCategory"
                v-model="newCategory"
                type="text"
                placeholder="新分类名称"
                class="form-input"
                @blur="addNewCategory"
                @keyup.enter="addNewCategory"
              />
            </div>
          </div>
        </div>
        
        <div class="form-group">
          <label for="dueDate">截止日期</label>
          <input
            id="dueDate"
            v-model="form.dueDate"
            type="date"
            class="form-input"
          />
        </div>
        
        <div class="form-group">
          <label for="tags">标签</label>
          <div class="tags-input">
            <div class="tags-display">
              <span v-for="tag in form.tags" :key="tag" class="tag">
                #{{ tag }}
                <button type="button" @click="removeTag(tag)" class="tag-remove">×</button>
              </span>
            </div>
            <input
              v-model="newTag"
              type="text"
              placeholder="添加标签（按回车键）"
              class="form-input"
              @keyup.enter="addTag"
            />
          </div>
        </div>
        
        <div class="form-actions">
          <button type="button" @click="closeForm" class="btn btn-secondary">
            取消
          </button>
          <button type="submit" class="btn btn-primary">
            {{ isEditing ? '更新任务' : '添加任务' }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed, watch } from 'vue'
import { useTaskStore } from '@/stores/taskStore'
import type { Task } from '@/types/task'

interface Props {
  task?: Task
}

const props = defineProps<Props>()

const taskStore = useTaskStore()

const isEditing = computed(() => !!props.task)

const form = reactive({
  title: '',
  description: '',
  priority: 'medium' as 'low' | 'medium' | 'high',
  category: '',
  tags: [] as string[],
  dueDate: '',
  completed: false
})

const selectedCategory = ref('')
const newCategory = ref('')
const showNewCategory = ref(false)
const newTag = ref('')

const categories = computed(() => taskStore.categories)

// Initialize form with task data if editing
if (props.task) {
  form.title = props.task.title
  form.description = props.task.description
  form.priority = props.task.priority
  form.category = props.task.category
  form.tags = [...props.task.tags]
  form.completed = props.task.completed
  if (props.task.dueDate) {
    form.dueDate = new Date(props.task.dueDate).toISOString().split('T')[0]
  }
  selectedCategory.value = props.task.category
}

const updateCategory = () => {
  if (selectedCategory.value === '__new__') {
    showNewCategory.value = true
    selectedCategory.value = ''
  } else {
    form.category = selectedCategory.value
    showNewCategory.value = false
  }
}

const addNewCategory = () => {
  if (newCategory.value.trim()) {
    taskStore.addCategory(newCategory.value.trim())
    form.category = newCategory.value.trim()
    selectedCategory.value = newCategory.value.trim()
    newCategory.value = ''
    showNewCategory.value = false
  }
}

const addTag = () => {
  const tag = newTag.value.trim().toLowerCase()
  if (tag && !form.tags.includes(tag)) {
    form.tags.push(tag)
    newTag.value = ''
  }
}

const removeTag = (tag: string) => {
  const index = form.tags.indexOf(tag)
  if (index > -1) {
    form.tags.splice(index, 1)
  }
}

const handleSubmit = () => {
  const taskData = {
    title: form.title.trim(),
    description: form.description.trim(),
    priority: form.priority,
    category: form.category,
    tags: form.tags,
    completed: form.completed,
    dueDate: form.dueDate ? new Date(form.dueDate) : undefined
  }

  if (isEditing.value && props.task) {
    taskStore.updateTask(props.task.id, taskData)
  } else {
    taskStore.addTask(taskData)
  }

  closeForm()
}

const emit = defineEmits<{
  close: []
}>()

const closeForm = () => {
  emit('close')
}
</script>

<style scoped>
.task-form-overlay {
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

.task-form {
  background: white;
  border-radius: 12px;
  width: 100%;
  max-width: 500px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.form-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 24px;
  border-bottom: 1px solid #e1e5e9;
}

.form-header h2 {
  margin: 0;
  color: #2c3e50;
  font-size: 20px;
}

.btn-close {
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #6c757d;
  padding: 0;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: background-color 0.2s;
}

.btn-close:hover {
  background: #f8f9fa;
}

form {
  padding: 24px;
}

.form-group {
  margin-bottom: 20px;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

label {
  display: block;
  margin-bottom: 6px;
  font-weight: 500;
  color: #2c3e50;
  font-size: 14px;
}

.form-input,
.form-textarea,
.form-select {
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #dee2e6;
  border-radius: 6px;
  font-size: 14px;
  transition: border-color 0.2s, box-shadow 0.2s;
  box-sizing: border-box;
}

.form-input:focus,
.form-textarea:focus,
.form-select:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);
}

.form-textarea {
  resize: vertical;
  min-height: 80px;
}

.category-input {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.tags-input {
  border: 1px solid #dee2e6;
  border-radius: 6px;
  padding: 8px;
  min-height: 40px;
}

.tags-display {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 8px;
}

.tag {
  background: #e9ecef;
  color: #495057;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 12px;
  display: flex;
  align-items: center;
  gap: 4px;
}

.tag-remove {
  background: none;
  border: none;
  color: #6c757d;
  cursor: pointer;
  font-size: 14px;
  padding: 0;
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
}

.tag-remove:hover {
  background: #dee2e6;
}

.tags-input .form-input {
  border: none;
  padding: 4px 0;
  margin: 0;
}

.tags-input .form-input:focus {
  box-shadow: none;
}

.form-actions {
  display: flex;
  gap: 12px;
  justify-content: flex-end;
  margin-top: 24px;
  padding-top: 20px;
  border-top: 1px solid #e1e5e9;
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

.btn-primary {
  background: #007bff;
  color: white;
}

.btn-primary:hover {
  background: #0056b3;
}

@media (max-width: 768px) {
  .task-form-overlay {
    padding: 10px;
  }
  
  .form-row {
    grid-template-columns: 1fr;
  }
  
  .form-header {
    padding: 16px 20px;
  }
  
  form {
    padding: 20px;
  }
}
</style>