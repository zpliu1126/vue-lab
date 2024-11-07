/*
 * @Descripttion:
 * @version:
 * @Author: zpliu
 * @Date: 2024-11-05 14:39:16
 * @LastEditors: zpliu
 * @LastEditTime: 2024-11-05 15:08:18
 * @@param:
 */
import Mock from 'mockjs'
import { defineFakeRoute } from 'vite-plugin-fake-server/client'
// import { faker } from '@faker-js/faker'

export default defineFakeRoute([
  {
    url: '/api/carousl/info',
    method: 'get',
    statusCode: 200,
    response: () => {
      return Mock.mock({
        code: 0,
        data: {
          'list|1-10': [
            {
              title: '@title()',
              url: "@image('750x270', '#4A7BF7', 'Hello')"
            }
          ]
        }
      })
    }
  }
])
