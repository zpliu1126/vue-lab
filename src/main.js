/*
 * @Descripttion:
 * @version:
 * @Author: zpliu
 * @Date: 2024-11-01 21:45:16
 * @LastEditors: zpliu
 * @LastEditTime: 2024-11-07 14:41:03
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
// if (process.env.NODE_ENV === 'production') {
//   import('@/mockProdServer').then(({ setupProdMockServer }) => {
//     setupProdMockServer()
//   })
// }
// 封装SVG组件
import 'virtual:svg-icons-register'
const app = createApp(App)
// 加载全局svg

// app.use(ElementPlus)
app.use(createPinia())
app.use(router)
app.mount('#app')
