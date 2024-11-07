/*
 * @Descripttion:
 * @version:
 * @Author: zpliu
 * @Date: 2024-11-02 10:02:55
 * @LastEditors: zpliu
 * @LastEditTime: 2024-11-05 21:59:51
 * @@param:
 */
import { get } from '../utils/axios'

const api = {
  carousl: '/api/carousl/info',
  fiverYear: '/api/publication/fiver-year',
  otherFirst: '/api/publication/other-first',
  other: '/api/publication/other'
}

export const getCarouslInfo = () => {
  return get(api.carousl)
}

export const getFiverYear = () => {
  return get(api.fiverYear)
}
export const getOtherFirst = () => {
  return get(api.otherFirst)
}
export const getOther = () => {
  return get(api.other)
}
