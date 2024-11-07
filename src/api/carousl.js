/*
 * @Descripttion:
 * @version:
 * @Author: zpliu
 * @Date: 2024-11-02 10:02:55
 * @LastEditors: zpliu
 * @LastEditTime: 2024-11-07 18:53:30
 * @@param:
 */
import { get } from '../utils/axios'

const api = {
  carousl: '/api/carousl/info',
  first: '/api/publication/first',
  other: '/api/publication/other'
  // other: '/api/publication/other'
}

export const getCarouslInfo = () => {
  return get(api.carousl)
}

export const getFirst = () => {
  return get(api.first)
}
// export const getOtherFirst = () => {
//   return get(api.otherFirst)
// }
export const getOther = () => {
  return get(api.other)
}
