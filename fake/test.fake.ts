/*
 * @Descripttion:
 * @version:
 * @Author: zpliu
 * @Date: 2024-11-05 14:39:16
 * @LastEditors: zpliu
 * @LastEditTime: 2024-11-08 12:05:49
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
              title: '植物系统基因组学与适应性进化研究组',
              url: 'https://43423.oss-cn-beijing.aliyuncs.com/img/202411071928509.jpg'
            },
            {
              title: '植物再生的表观遗传学研究',
              url: 'https://43423.oss-cn-beijing.aliyuncs.com/img/202411071937263.png'
            },
            {
              title: '作物基因组脱靶效应与精准编辑',
              url: 'https://43423.oss-cn-beijing.aliyuncs.com/img/202411071937674.png'
            },
            {
              title: '作物半野生种-栽培种渐渗图谱',
              url: 'https://43423.oss-cn-beijing.aliyuncs.com/img/202411081204489.jpg'
            },
            {
              title: '转座子驱动的棉属基因组大小变异',
              url: 'https://43423.oss-cn-beijing.aliyuncs.com/img/202411081204960.png'
            },
            {
              title: '二倍体和四倍体棉花基因组演化',
              url: 'https://43423.oss-cn-beijing.aliyuncs.com/img/202411081204887.png'
            }
          ]
        }
      })
    }
  }
])
