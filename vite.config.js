import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      // 自动导入 Vue 相关函数
      imports: ['vue', 'vue-router'],
      // 生成 TypeScript 声明文件
      dts: 'src/auto-imports.d.ts',
      // 自动导入 Element Plus 组件
      resolvers: [
        ElementPlusResolver()
      ]
    }),
    Components({
      resolvers: [
        ElementPlusResolver()
      ],
      dts: 'src/components.d.ts'
    }),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@/components': fileURLToPath(new URL('./src/components', import.meta.url)),
      '@/utils': fileURLToPath(new URL('./src/utils', import.meta.url)),
    }
  },
  server: {
    host: '0.0.0.0',
    port: 5173,
    open: true,
    proxy: {
      '/dev-api': {
        // 后台地址
<<<<<<< HEAD
        target: 'http://192.168.1.30:8088/',
        // target: 'http://47.94.161.154:8088/',
=======
        // target: 'http://192.168.1.252:9000/',
        target: 'http://192.168.1.80:8088/',
>>>>>>> 0788d955e43f0b9d4ce7e5117e1d963b3b4d60a9
        // target: 'http://192.168.10.3:8088/',
        // target: 'http://192.168.124.7:8088/',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/dev-api/, '')
      },
      '/local-resource': {
<<<<<<< HEAD
        target: 'http://192.168.1.30:8088/files/',
        // target: 'http://47.94.161.154:8088/files/',
=======
        // target: 'http://192.168.1.252:9000/files/',
        target: 'http://192.168.1.80:8088/files/',
>>>>>>> 0788d955e43f0b9d4ce7e5117e1d963b3b4d60a9
        // target: 'http://192.168.10.3:8088/files/',
        // target: 'http://192.168.124.7:8088/files/',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/local-resource/, '')
      },
      '/ai-assistant': {
<<<<<<< HEAD
        // target: "http://47.94.161.154:8088/ai/server/assistant/",
        target: 'http://192.168.1.30:8088/ai/server/assistant/',
=======
        // target: "http://192.168.1.13:8088/ai/server/assistant/",
        target: 'http://192.168.1.80:8088/ai/server/assistant/',
>>>>>>> 0788d955e43f0b9d4ce7e5117e1d963b3b4d60a9
        ws: true,
        changeOrigin: true,
        rewrite: path => path.replace(/^\/ai-assistant/, '')
      }
    }
  }
})
