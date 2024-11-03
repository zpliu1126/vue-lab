/*
 * @Descripttion:
 * @version:
 * @Author: zpliu
 * @Date: 2024-11-01 21:45:16
 * @LastEditors: zpliu
 * @LastEditTime: 2024-11-03 13:14:23
 * @@param:
 */
import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
// import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/display.css'

import App from './App.vue'
import router from './router'
if (process.env.NODE_ENV === 'production') {
  import('@/mockProdServer').then(({ setupProdMockServer }) => {
    setupProdMockServer()
  })
}

const app = createApp(App)
// app.use(ElementPlus)
app.use(createPinia())
app.use(router)

app.mount('#app')
