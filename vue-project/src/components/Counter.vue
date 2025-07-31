<template>
  <div class="counter">
    <h3>计数器示例</h3>
    <div class="counter-display">
      <span class="count">{{ count }}</span>
    </div>
    <div class="counter-buttons">
      <button @click="decrement" :disabled="count <= 0">-</button>
      <button @click="reset">重置</button>
      <button @click="increment">+</button>
    </div>
    <p class="counter-info">
      当前计数: {{ count }} | 
      状态: {{ status }} | 
      总点击次数: {{ totalClicks }}
    </p>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'

// 响应式数据
const count = ref(0)
const totalClicks = ref(0)

// 计算属性
const status = computed(() => {
  if (count.value === 0) return '归零'
  if (count.value > 0) return '正数'
  return '负数'
})

// 方法
const increment = () => {
  count.value++
  totalClicks.value++
}

const decrement = () => {
  if (count.value > 0) {
    count.value--
    totalClicks.value++
  }
}

const reset = () => {
  count.value = 0
  totalClicks.value++
}

// 监听器
watch(count, (newValue, oldValue) => {
  console.log(`计数从 ${oldValue} 变为 ${newValue}`)
})
</script>

<style scoped>
.counter {
  max-width: 300px;
  margin: 2rem auto;
  padding: 2rem;
  border: 2px solid #42b883;
  border-radius: 8px;
  text-align: center;
  background: #f9f9f9;
}

.counter h3 {
  color: #42b883;
  margin-bottom: 1rem;
}

.counter-display {
  margin: 1.5rem 0;
}

.count {
  font-size: 3rem;
  font-weight: bold;
  color: #2c3e50;
  padding: 0.5rem 1rem;
  background: white;
  border-radius: 8px;
  border: 1px solid #ddd;
  min-width: 80px;
  display: inline-block;
}

.counter-buttons {
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  margin: 1rem 0;
}

.counter-buttons button {
  padding: 0.5rem 1rem;
  font-size: 1.2rem;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s;
}

.counter-buttons button:not(:disabled):hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.counter-buttons button:nth-child(1),
.counter-buttons button:nth-child(3) {
  background: #42b883;
  color: white;
  min-width: 40px;
}

.counter-buttons button:nth-child(2) {
  background: #e74c3c;
  color: white;
}

.counter-buttons button:disabled {
  background: #bdc3c7;
  cursor: not-allowed;
  transform: none;
}

.counter-info {
  font-size: 0.9rem;
  color: #666;
  margin-top: 1rem;
  padding: 0.5rem;
  background: #ecf0f1;
  border-radius: 4px;
  line-height: 1.4;
}
</style>