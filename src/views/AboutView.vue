<template>
  <div class="about">
    <header class="app-header">
      <div class="header-content">
        <h1 class="app-title">
          <RouterLink to="/" class="back-link">
            <span class="back-icon">←</span>
            Vue 任务管理器
          </RouterLink>
        </h1>
      </div>
    </header>

    <main class="main-content">
      <div class="about-container">
        <div class="hero-section">
          <div class="hero-icon">✅</div>
          <h1>关于 Vue 任务管理器</h1>
          <p class="hero-description">
            一个使用 Vue.js 3、TypeScript 和 Pinia 构建的现代化响应式任务管理应用程序。
            旨在通过简洁直观的界面帮助您高效地组织任务。
          </p>
        </div>

        <div class="features-section">
          <h2>功能特性</h2>
          <div class="features-grid">
            <div class="feature-card">
              <div class="feature-icon">📝</div>
              <h3>任务管理</h3>
              <p>创建、编辑和删除任务，支持详细描述和截止日期。</p>
            </div>
            
            <div class="feature-card">
              <div class="feature-icon">🏷️</div>
              <h3>分类和标签</h3>
              <p>使用自定义分类和标签来更好地组织任务。</p>
            </div>
            
            <div class="feature-card">
              <div class="feature-icon">⚡</div>
              <h3>优先级设置</h3>
              <p>设置任务优先级（高、中、低）专注于最重要的事情。</p>
            </div>
            
            <div class="feature-card">
              <div class="feature-icon">🔍</div>
              <h3>高级筛选</h3>
              <p>按状态、分类、优先级、标签筛选任务，或通过关键词搜索。</p>
            </div>
            
            <div class="feature-card">
              <div class="feature-icon">📊</div>
              <h3>进度跟踪</h3>
              <p>可视化进度指示器和统计数据来跟踪您的工作效率。</p>
            </div>
            
            <div class="feature-card">
              <div class="feature-icon">💾</div>
              <h3>本地存储</h3>
              <p>所有数据都存储在您的浏览器本地 - 无需注册账户。</p>
            </div>
            
            <div class="feature-card">
              <div class="feature-icon">📱</div>
              <h3>响应式设计</h3>
              <p>在桌面、平板和移动设备上都能完美运行。</p>
            </div>
            
            <div class="feature-card">
              <div class="feature-icon">🎨</div>
              <h3>现代化界面</h3>
              <p>简洁直观的界面，流畅的动画和过渡效果。</p>
            </div>
          </div>
        </div>

        <div class="tech-section">
          <h2>技术栈</h2>
          <div class="tech-grid">
            <div class="tech-item">
              <strong>Vue.js 3</strong>
              <span>渐进式 JavaScript 框架，使用 Composition API</span>
            </div>
            <div class="tech-item">
              <strong>TypeScript</strong>
              <span>类型安全的 JavaScript，提供更好的开发体验</span>
            </div>
            <div class="tech-item">
              <strong>Pinia</strong>
              <span>Vue 应用程序的现代状态管理库</span>
            </div>
            <div class="tech-item">
              <strong>Vue Router</strong>
              <span>Vue.js 应用程序的官方路由器</span>
            </div>
            <div class="tech-item">
              <strong>Vite</strong>
              <span>快速的构建工具和开发服务器</span>
            </div>
            <div class="tech-item">
              <strong>Vitest</strong>
              <span>由 Vite 驱动的单元测试框架</span>
            </div>
          </div>
        </div>

        <div class="opensource-section">
          <h2>开源项目</h2>
          <p>
            这个项目是开源的，采用 MIT 许可证。
            欢迎贡献代码、报告问题或 fork 项目供您自己使用。
          </p>
          <div class="opensource-features">
            <div class="opensource-item">
              <strong>MIT 许可证</strong>
              <span>免费使用、修改和分发</span>
            </div>
            <div class="opensource-item">
              <strong>完善的文档</strong>
              <span>全面的 README 和代码注释</span>
            </div>
            <div class="opensource-item">
              <strong>现代化架构</strong>
              <span>遵循 Vue.js 最佳实践的清晰代码结构</span>
            </div>
            <div class="opensource-item">
              <strong>易于扩展</strong>
              <span>容易自定义和添加新功能</span>
            </div>
          </div>
        </div>

        <div class="cta-section">
          <h2>开始使用</h2>
          <p>准备好整理您的任务了吗？从创建第一个任务开始吧！</p>
          <RouterLink to="/" class="cta-button">
            前往任务列表
          </RouterLink>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.about {
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
}

.app-title {
  margin: 0;
  font-size: 28px;
  font-weight: 700;
}

.back-link {
  color: #2c3e50;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 12px;
  transition: color 0.2s;
}

.back-link:hover {
  color: #007bff;
}

.back-icon {
  font-size: 24px;
}

.main-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
}

.about-container {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.hero-section {
  text-align: center;
  padding: 60px 40px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.hero-icon {
  font-size: 64px;
  margin-bottom: 20px;
}

.hero-section h1 {
  margin: 0 0 20px 0;
  font-size: 36px;
  font-weight: 700;
}

.hero-description {
  font-size: 18px;
  line-height: 1.6;
  max-width: 600px;
  margin: 0 auto;
  opacity: 0.95;
}

.features-section,
.tech-section,
.opensource-section {
  padding: 50px 40px;
  border-bottom: 1px solid #e1e5e9;
}

.features-section h2,
.tech-section h2,
.opensource-section h2,
.cta-section h2 {
  margin: 0 0 30px 0;
  font-size: 28px;
  font-weight: 600;
  color: #2c3e50;
  text-align: center;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
}

.feature-card {
  padding: 24px;
  border: 1px solid #e1e5e9;
  border-radius: 8px;
  text-align: center;
  transition: transform 0.2s, box-shadow 0.2s;
}

.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

.feature-icon {
  font-size: 32px;
  margin-bottom: 16px;
}

.feature-card h3 {
  margin: 0 0 12px 0;
  font-size: 18px;
  font-weight: 600;
  color: #2c3e50;
}

.feature-card p {
  margin: 0;
  color: #6c757d;
  line-height: 1.5;
}

.tech-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.tech-item {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 20px;
  background: #f8f9fa;
  border-radius: 8px;
  border: 1px solid #e9ecef;
}

.tech-item strong {
  color: #2c3e50;
  font-size: 16px;
}

.tech-item span {
  color: #6c757d;
  font-size: 14px;
}

.opensource-section p {
  text-align: center;
  font-size: 16px;
  line-height: 1.6;
  color: #6c757d;
  margin-bottom: 30px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.opensource-features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.opensource-item {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 20px;
  background: #f8f9fa;
  border-radius: 8px;
  border: 1px solid #e9ecef;
  text-align: center;
}

.opensource-item strong {
  color: #2c3e50;
  font-size: 16px;
}

.opensource-item span {
  color: #6c757d;
  font-size: 14px;
}

.cta-section {
  padding: 50px 40px;
  text-align: center;
}

.cta-section p {
  font-size: 16px;
  color: #6c757d;
  margin-bottom: 30px;
}

.cta-button {
  display: inline-block;
  background: #007bff;
  color: white;
  text-decoration: none;
  padding: 16px 32px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  transition: all 0.2s;
  box-shadow: 0 4px 12px rgba(0, 123, 255, 0.3);
}

.cta-button:hover {
  background: #0056b3;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(0, 123, 255, 0.4);
}

@media (max-width: 768px) {
  .main-content {
    padding: 20px 16px;
  }
  
  .hero-section {
    padding: 40px 20px;
  }
  
  .hero-section h1 {
    font-size: 28px;
  }
  
  .hero-description {
    font-size: 16px;
  }
  
  .features-section,
  .tech-section,
  .opensource-section,
  .cta-section {
    padding: 30px 20px;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }
  
  .tech-grid,
  .opensource-features {
    grid-template-columns: 1fr;
    gap: 16px;
  }
}
</style>