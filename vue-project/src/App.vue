<script setup>
import HelloWorld from './components/HelloWorld.vue'
import Counter from './components/Counter.vue'
</script>

<template>
  <div class="app">
    <header class="app-header">
      <div class="logos">
        <a href="https://vite.dev" target="_blank">
          <img src="/vite.svg" class="logo" alt="Vite logo" />
        </a>
        <a href="https://vuejs.org/" target="_blank">
          <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
        </a>
      </div>
      <h1>Vue 3 + Vite 项目模板</h1>
      <p class="subtitle">现代化的 Vue 开发环境</p>
    </header>

    <main class="app-main">
      <section class="demo-section">
        <h2>🎯 组件示例</h2>
        <div class="component-grid">
          <div class="component-card">
            <HelloWorld msg="欢迎使用 Vue 3 + Vite" />
          </div>
          <div class="component-card">
            <Counter />
          </div>
        </div>
      </section>

      <section class="info-section">
        <h2>🚀 快速开始</h2>
        <div class="info-grid">
          <div class="info-card">
            <h3>⚡️ 极速开发</h3>
            <p>Vite 提供闪电般的冷启动和即时的模块热替换</p>
          </div>
          <div class="info-card">
            <h3>🎨 Vue 3</h3>
            <p>使用最新的 Composition API 和单文件组件</p>
          </div>
          <div class="info-card">
            <h3>📦 开箱即用</h3>
            <p>预配置的构建工具和开发环境</p>
          </div>
        </div>
      </section>
    </main>

    <footer class="app-footer">
      <p>编辑 <code>src/App.vue</code> 和 <code>src/components/</code> 中的文件来开始开发</p>
    </footer>
  </div>
</template>

<style scoped>
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.app-header {
  text-align: center;
  padding: 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.logos {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 1rem;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

.app-header h1 {
  font-size: 2.5rem;
  margin: 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.subtitle {
  font-size: 1.2rem;
  opacity: 0.9;
  margin: 0.5rem 0 0 0;
}

.app-main {
  flex: 1;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}

.demo-section {
  margin-bottom: 3rem;
}

.demo-section h2,
.info-section h2 {
  text-align: center;
  color: #2c3e50;
  margin-bottom: 2rem;
  font-size: 2rem;
}

.component-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.component-card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.2s;
}

.component-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.15);
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.info-card {
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 8px;
  border-left: 4px solid #42b883;
  transition: transform 0.2s;
}

.info-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.info-card h3 {
  color: #2c3e50;
  margin: 0 0 0.5rem 0;
  font-size: 1.2rem;
}

.info-card p {
  color: #666;
  margin: 0;
  line-height: 1.5;
}

.app-footer {
  background: #2c3e50;
  color: white;
  text-align: center;
  padding: 1.5rem;
  margin-top: auto;
}

.app-footer code {
  background: rgba(255, 255, 255, 0.1);
  padding: 0.2rem 0.4rem;
  border-radius: 4px;
  font-family: 'Consolas', 'Monaco', 'Courier New', monospace;
}

@media (max-width: 768px) {
  .logos {
    gap: 1rem;
  }
  
  .logo {
    height: 4em;
    padding: 1em;
  }
  
  .app-header h1 {
    font-size: 2rem;
  }
  
  .component-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .app-main {
    padding: 1rem;
  }
}
</style>
