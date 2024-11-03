/*
 * @Descripttion:
 * @version:
 * @Author: zpliu
 * @Date: 2024-11-02 21:49:13
 * @LastEditors: zpliu
 * @LastEditTime: 2024-11-03 13:02:25
 * @@param:
 */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { createProdMockServer } from 'vite-plugin-mock/client'

const modules: {
  [key: string]: { default: object[] }
} = import.meta.glob('../mock/*.mock.ts', {
  eager: true
})

const mockModules: object[] = []
Object.keys(modules).forEach((key) => {
  if (key.includes('/_')) {
    return
  }
  mockModules.push(...modules[key].default)
})

/**
 * Used in a production environment. Need to manually import all modules
 */
export function setupProdMockServer() {
  createProdMockServer(mockModules)
  console.log(mockModules)
}
