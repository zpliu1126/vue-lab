/*
 * @Descripttion:
 * @version:
 * @Author: zpliu
 * @Date: 2024-11-05 21:11:53
 * @LastEditors: zpliu
 * @LastEditTime: 2024-11-07 19:00:10
 * @@param:
 */
import Mock from 'mockjs'
import { defineFakeRoute } from 'vite-plugin-fake-server/client'
import { publictionDat1 } from '../src/utils/publicationList1'
import { publictionDat2 } from '../src/utils/publicationList2'
export default defineFakeRoute([
  {
    url: '/api/publication/first',
    method: 'get',
    statusCode: 200,
    response: () => {
      return Mock.mock({
        code: 0,
        data: {
          title: '第一或通讯作者发表文章',
          Paper: publictionDat1.data
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
          title: '合作发表文章',
          Paper: publictionDat2.data
        }
      })
    }
  }
  // {
  //   url: '/api/publication/other',
  //   method: 'get',
  //   statusCode: 200,
  //   response: () => {
  //     return Mock.mock({
  //       code: 0,
  //       data: {
  //         title: '其他作者论文',
  //         'Paper|5-20': [
  //           {
  //             title:
  //               'Genetic interrogation of phenotypic plasticity informs genome-enabled breeding in cotton',
  //             journal: 'J Genet Genomics',
  //             volume: '50:971-982',
  //             year: '2023',
  //             doi: 'https://doi.org/',
  //             firstAuthor: ['Yuefan Huang'],
  //             correspondingAuthor: [],
  //             otherAuthor: ['et al.']
  //           }
  //         ]
  //       }
  //     })
  //   }
  // }
])
