/*
 * @Descripttion:
 * @version:
 * @Author: zpliu
 * @Date: 2024-11-02 11:32:21
 * @LastEditors: zpliu
 * @LastEditTime: 2024-11-02 17:48:05
 * @@param:
 */
import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getCarouslInfo } from '../api/carousl'

export const useCarouslStore = defineStore('carouslList', () => {
  const CarouslInfo = ref([])
  function setData() {
    getCarouslInfo().then((res) => {
      CarouslInfo.value = res.data
    })
  }
  return { CarouslInfo, setData }
})
