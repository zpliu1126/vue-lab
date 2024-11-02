/*
 * @Descripttion:
 * @version:
 * @Author: zpliu
 * @Date: 2024-11-02 21:49:13
 * @LastEditors: zpliu
 * @LastEditTime: 2024-11-02 21:51:06
 * @@param:
 */
import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer'

// 逐一导入mock.js文件
// 如果使用vite.mock.config.js，只需直接导入文件
// 可以使用 import.meta.glob功能来进行全部导入
import test from '../mock/test'

export function setupProdMockServer() {
  createProdMockServer([...index])
}
