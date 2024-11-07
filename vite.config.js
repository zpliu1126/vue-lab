/*
 * @Descripttion:
 * @version:
 * @Author: zpliu
 * @Date: 2024-11-01 21:45:16
 * @LastEditors: zpliu
 * @LastEditTime: 2024-11-07 14:35:40
 * @@param:
 */
import { fileURLToPath, URL } from 'node:url'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import { vitePluginFakeServer } from 'vite-plugin-fake-server'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from 'path'
// https://vitejs.dev/config/
export default ({ mode }) => {
  const VITE_API_DOMAIN = loadEnv(mode, process.cwd()).VITE_API_DOMAIN
  return defineConfig({
    base: VITE_API_DOMAIN,
    plugins: [
      vue(),
      vueDevTools(),
      vitePluginFakeServer({
        include: 'fake',
        basename: VITE_API_DOMAIN,
        watch: true,
        timeout: 1000,
        build: false,
        logger: true,
        enableProd: true
      }),
      createSvgIconsPlugin({
        // Specify the icon folder to be cached
        iconDirs: [path.resolve(process.cwd(), 'src/icons')],
        // Specify symbolId format
        symbolId: 'icon-[dir]-[name]'
      })
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    }
  })
}
