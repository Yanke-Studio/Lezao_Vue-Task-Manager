<template>
  <div class="task-filter">
    <div class="filter-section">
      <div class="search-box">
        <input
          v-model="searchQuery"
          type="text"
          placeholder="搜索任务..."
          class="search-input"
          @input="updateFilter"
        />
        <span class="search-icon">🔍</span>
      </div>
    </div>

    <div class="filter-section">
      <div class="filter-group">
        <label>分类：</label>
        <select v-model="selectedCategory" @change="updateFilter" class="filter-select">
          <option value="">所有分类</option>
          <option v-for="category in categories" :key="category" :value="category">
            {{ category }}
          </option>
        </select>
      </div>

      <div class="filter-group">
        <label>优先级：</label>
        <select v-model="selectedPriority" @change="updateFilter" class="filter-select">
          <option value="">所有优先级</option>
          <option value="high">高</option>
          <option value="medium">中</option>
          <option value="low">低</option>
        </select>
      </div>

      <div class="filter-group">
        <label>状态：</label>
        <select v-model="selectedStatus" @change="updateFilter" class="filter-select">
          <option value="">所有任务</option>
          <option value="pending">待办</option>
          <option value="completed">已完成</option>
        </select>
      </div>
    </div>

    <div class="filter-section" v-if="allTags.length > 0">
      <div class="filter-group">
        <label>标签：</label>
        <div class="tags-filter">
          <button
            v-for="tag in allTags"
            :key="tag"
            @click="toggleTag(tag)"
            class="tag-button"
            :class="{ active: selectedTag === tag }"
          >
            #{{ tag }}
          </button>
        </div>
      </div>
    </div>

    <div class="filter-actions" v-if="hasActiveFilters">
      <button @click="clearAllFilters" class="clear-filters-btn">
        清除所有筛选
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useTaskStore } from '@/stores/taskStore'

const taskStore = useTaskStore()

const searchQuery = ref('')
const selectedCategory = ref('')
const selectedPriority = ref('')
const selectedStatus = ref('')
const selectedTag = ref('')

const categories = computed(() => taskStore.categories)
const allTags = computed(() => taskStore.allTags)

const hasActiveFilters = computed(() => {
  return searchQuery.value || 
         selectedCategory.value || 
         selectedPriority.value || 
         selectedStatus.value || 
         selectedTag.value
})

const updateFilter = () => {
  const filter: any = {}
  
  if (searchQuery.value) {
    filter.search = searchQuery.value
  }
  
  if (selectedCategory.value) {
    filter.category = selectedCategory.value
  }
  
  if (selectedPriority.value) {
    filter.priority = selectedPriority.value
  }
  
  if (selectedStatus.value) {
    filter.completed = selectedStatus.value === 'completed'
  }
  
  if (selectedTag.value) {
    filter.tag = selectedTag.value
  }
  
  taskStore.setFilter(filter)
}

const toggleTag = (tag: string) => {
  if (selectedTag.value === tag) {
    selectedTag.value = ''
  } else {
    selectedTag.value = tag
  }
  updateFilter()
}

const clearAllFilters = () => {
  searchQuery.value = ''
  selectedCategory.value = ''
  selectedPriority.value = ''
  selectedStatus.value = ''
  selectedTag.value = ''
  taskStore.clearFilter()
}
</script>

<style scoped>
.task-filter {
  background: white;
  border: 1px solid #e1e5e9;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.filter-section {
  margin-bottom: 16px;
}

.filter-section:last-child {
  margin-bottom: 0;
}

.search-box {
  position: relative;
  max-width: 400px;
}

.search-input {
  width: 100%;
  padding: 10px 40px 10px 12px;
  border: 1px solid #dee2e6;
  border-radius: 6px;
  font-size: 14px;
  box-sizing: border-box;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.search-input:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);
}

.search-icon {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: #6c757d;
  pointer-events: none;
}

.filter-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.filter-section:nth-child(2) {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 16px;
}

label {
  font-weight: 500;
  color: #2c3e50;
  font-size: 14px;
}

.filter-select {
  padding: 8px 12px;
  border: 1px solid #dee2e6;
  border-radius: 6px;
  font-size: 14px;
  background: white;
  cursor: pointer;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.filter-select:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);
}

.tags-filter {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 4px;
}

.tag-button {
  background: #f8f9fa;
  border: 1px solid #dee2e6;
  color: #495057;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 12px;
  cursor: pointer;
  transition: all 0.2s;
}

.tag-button:hover {
  background: #e9ecef;
  border-color: #adb5bd;
}

.tag-button.active {
  background: #007bff;
  border-color: #007bff;
  color: white;
}

.filter-actions {
  padding-top: 12px;
  border-top: 1px solid #e1e5e9;
}

.clear-filters-btn {
  background: #6c757d;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.clear-filters-btn:hover {
  background: #5a6268;
}

@media (max-width: 768px) {
  .task-filter {
    padding: 16px;
  }
  
  .filter-section:nth-child(2) {
    grid-template-columns: 1fr;
    gap: 12px;
  }
  
  .search-box {
    max-width: none;
  }
}
</style>