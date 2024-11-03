/*
 * @Descripttion:
 * @version:
 * @Author: zpliu
 * @Date: 2024-11-01 21:45:16
 * @LastEditors: zpliu
 * @LastEditTime: 2024-11-03 12:41:11
 * @@param:
 */
import { fileURLToPath, URL } from 'node:url'
import { viteMockServe } from 'vite-plugin-mock'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/dist',
  plugins: [
    vue(),
    vueDevTools(),
    viteMockServe({
      // default
      mockPath: 'mock',
      ignore: /^\_/,
      enable: true,
      logger: true,
      watchFiles: true
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
