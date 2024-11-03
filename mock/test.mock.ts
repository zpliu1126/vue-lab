/*
 * @Descripttion:
 * @version:
 * @Author: zpliu
 * @Date: 2024-11-02 09:53:34
 * @LastEditors: zpliu
 * @LastEditTime: 2024-11-03 11:40:27
 * @@param:
 */
import { MockMethod } from 'vite-plugin-mock'

export default [
  {
    url: '/dist/api/carousl/info',
    method: 'get',
    response: () => {
      return {
        code: 0,
        data: {
          'list|1-10': [
            {
              title: '@title()',
              url: "@image('750x270', '#4A7BF7', 'Hello')"
            }
          ]
        }
      }
    }
  }
] as MockMethod[]
