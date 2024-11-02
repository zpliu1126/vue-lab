/*
 * @Descripttion:
 * @version:
 * @Author: zpliu
 * @Date: 2024-11-02 10:02:55
 * @LastEditors: zpliu
 * @LastEditTime: 2024-11-02 16:33:32
 * @@param:
 */
import { get } from '../utils/axios'

const api = {
  carousl: '/api/carousl/info'
}

export const getCarouslInfo = () => {
  return get(api.carousl)
}
