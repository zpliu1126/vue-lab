/*
 * @Descripttion:
 * @version:
 * @Author: zpliu
 * @Date: 2024-11-02 11:32:21
 * @LastEditors: zpliu
 * @LastEditTime: 2024-11-06 22:52:25
 * @@param:
 */
import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getCarouslInfo, getFiverYear, getOtherFirst, getOther } from '../api/carousl'

export const useCarouslStore = defineStore('carouslList', () => {
  const CarouslInfo = ref([])
  function setData() {
    getCarouslInfo().then((res) => {
      // console.log(res)
      CarouslInfo.value = res.data
    })
  }
  return { CarouslInfo, setData }
})
//代表作
export const usePubliFiverYearStore = defineStore('fiverYearList', () => {
  const FiverYears = ref([])
  function setData() {
    getFiverYear().then((res) => {
      FiverYears.value = res.data
    })
  }
  return { FiverYears, setData }
})
// 其他第一或通讯
export const usePubliFirstStore = defineStore('publicaFirstList', () => {
  const PublicaFirst = ref([])
  function setData() {
    getOtherFirst().then((res) => {
      PublicaFirst.value = res.data
    })
  }
  return { PublicaFirst, setData }
})
// 其他作者
export const usePubliOtherStore = defineStore('publicaOtherList', () => {
  const PublicaOther = ref([])
  function setData() {
    getOther().then((res) => {
      PublicaOther.value = res.data
    })
  }
  return { PublicaOther, setData }
})

//关于移动端适配
const WIDTH = 992
export const useWindowStore = defineStore('windowConfig', () => {
  const isMobile = ref(window.innerWidth > WIDTH ? 1 : 0)
  const getWindowInfo = () => {
    const windowInfo = {
      width: window.innerWidth,
      hight: window.innerHeight
    }
    isMobile.value = windowInfo.width - WIDTH > 1 ? 1 : 0
  }
  const debounce = (fn, delay) => {
    //防抖在事件发生100毫秒后改变
    let timer
    return function () {
      if (timer) {
        clearTimeout(timer)
      }
      timer = setTimeout(() => {
        fn()
      }, delay)
    }
  }
  function ChangeWidth() {
    debounce(getWindowInfo, 100)()
  }
  return { isMobile, ChangeWidth }
})
