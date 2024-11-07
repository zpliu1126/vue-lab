/*
 * @Descripttion:
 * @version:
 * @Author: zpliu
 * @Date: 2024-11-05 21:11:53
 * @LastEditors: zpliu
 * @LastEditTime: 2024-11-05 22:21:52
 * @@param:
 */
import Mock from 'mockjs'
import { defineFakeRoute } from 'vite-plugin-fake-server/client'

export default defineFakeRoute([
  {
    url: '/api/publication/fiver-year',
    method: 'get',
    statusCode: 200,
    response: () => {
      return Mock.mock({
        code: 0,
        data: {
          title: '近五年5篇代表作',
          'Paper|5-20': [
            {
              title: '@title(10)',
              journal: 'Science',
              volume: '33-44',
              year: '@Date(yy-mm)',
              doi: '@url()',
              'firstAuthor|2': ['Jianying Li', '@title(1)'],
              'correspondingAuthor|2': ['@title(1)'],
              'otherAuthor|5': ['@title(1)']
            }
          ]
        }
      })
    }
  },
  {
    url: '/api/publication/other-first',
    method: 'get',
    statusCode: 200,
    response: () => {
      return Mock.mock({
        code: 0,
        data: {
          title: '其他第一或通讯作者论文',
          'Paper|5-20': [
            {
              title: '@title(10)',
              journal: 'Nature',
              volume: '33-44',
              year: '@Date(yy-mm)',
              doi: '@url()',
              'firstAuthor|2': ['@title(1)'],
              'correspondingAuthor|2': ['@title(1)'],
              'otherAuthor|5': ['@title(1)']
            }
          ]
        }
      })
    }
  },
  {
    url: '/api/publication/other',
    method: 'get',
    statusCode: 200,
    response: () => {
      return Mock.mock({
        code: 0,
        data: {
          title: '其他作者论文',
          'Paper|5-20': [
            {
              title: '@title(10)',
              journal: 'Cell',
              volume: '33-44',
              year: '@Date(yy-mm)',
              doi: '@url()',
              'firstAuthor|2': ['@title(1)'],
              'correspondingAuthor|2': ['@title(1)'],
              'otherAuthor|5': ['@title(1)']
            }
          ]
        }
      })
    }
  }
])
