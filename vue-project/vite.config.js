import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  
  // 路径别名配置
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@components': resolve(__dirname, 'src/components'),
      '@assets': resolve(__dirname, 'src/assets'),
    }
  },
  
  // 开发服务器配置
  server: {
    port: 5173,
    open: false, // 启动时不自动打开浏览器
    cors: true,
    // 代理配置示例（如果需要的话）
    // proxy: {
    //   '/api': {
    //     target: 'http://localhost:3000',
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/api/, '')
    //   }
    // }
  },
  
  // 构建配置
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false, // 生产环境不生成 sourcemap
    minify: 'esbuild', // 使用 esbuild 压缩（默认，更快）
    chunkSizeWarningLimit: 1000, // chunk 大小警告限制
    rollupOptions: {
      output: {
        // 分块策略
        manualChunks: {
          'vue-vendor': ['vue']
        }
      }
    }
  },
  
  // CSS 配置
  css: {
    devSourcemap: true, // 开发环境生成 CSS sourcemap
  }
})
