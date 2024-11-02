/*
 * @Descripttion:
 * @version:
 * @Author: zpliu
 * @Date: 2024-11-01 21:45:16
 * @LastEditors: zpliu
 * @LastEditTime: 2024-11-02 09:47:16
 * @@param:
 */
import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})
