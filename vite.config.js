import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    host: '0.0.0.0',
    port: 5173,
    proxy: {
      '/dev-api': {
        // 后台地址
        target: 'http://192.168.1.25:8088/',
        // target: 'http://47.94.161.154:8088/',
        // target: 'http://192.168.10.3:8088/',
        // target: 'http://192.168.124.7:8088/',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/dev-api/, '')
      },
      '/local-resource': {
        target: 'http://192.168.1.25:8088/files/',
        // target: 'http://47.94.161.154:8088/files/',
        // target: 'http://192.168.10.3:8088/files/',
        // target: 'http://192.168.124.7:8088/files/',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/local-resource/, '')
      }
    }
  }
})
