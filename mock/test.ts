/*
 * @Descripttion:
 * @version:
 * @Author: zpliu
 * @Date: 2024-11-02 09:53:34
 * @LastEditors: zpliu
 * @LastEditTime: 2024-11-02 17:56:34
 * @@param:
 */
import { MockMethod } from 'vite-plugin-mock'
export default [
  {
    url: '/api/carousl/info',
    method: 'get',
    response: ({ query }) => {
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
