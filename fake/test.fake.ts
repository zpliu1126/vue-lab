/*
 * @Descripttion:
 * @version:
 * @Author: zpliu
 * @Date: 2024-11-05 14:39:16
 * @LastEditors: zpliu
 * @LastEditTime: 2024-11-07 19:38:43
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
          list: [
            {
              title: '植物系统基因组学与生物合成研究组',
              url: 'https://43423.oss-cn-beijing.aliyuncs.com/img/202411071928509.jpg'
            },
            {
              title: '植物系统基因组学与生物合成研究组',
              url: 'https://43423.oss-cn-beijing.aliyuncs.com/img/202411071937263.png'
            },
            {
              title: '作物基因组脱靶效应与精准编辑',
              url: 'https://43423.oss-cn-beijing.aliyuncs.com/img/202411071937674.png'
            }
          ]
        }
      })
    }
  }
])
