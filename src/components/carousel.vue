<!--
 * @Descripttion: 
 * @version: 
 * @Author: zpliu
 * @Date: 2024-11-01 22:09:15
 * @LastEditors: zpliu
 * @LastEditTime: 2024-11-11 19:31:28
 * @@param: 
-->
<template>
  <div class="block">
    <el-carousel trigger="click" :height="CarouselHeight.height">
      <el-carousel-item v-for="item in store.CarouslInfo.list" :key="item">
        <div
          :style="{
            'background-image': 'url(' + item.url + ')',
            'background-repeat': 'no-repeat',
            'background-size': CarouselHeight.mode
          }"
          class="carousel-item-bg"
        >
          <div class="carousel-wraper">
            <div class="carousel-title">
              <h3 class="carousel-content">
                {{ item.title }}
              </h3>
            </div>
          </div>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script setup>
import { ElCarousel, ElCarouselItem, ElImage, ElButton } from 'element-plus'
import { useCarouslStore } from '../stores/homeStore'
import 'element-plus/es/components/carousel/style/css'
import { onBeforeMount, computed } from 'vue'
import { useWindowStore } from '@/stores/homeStore'
// import { storeToRefs } from 'pinia'

const store = useCarouslStore()
const windowStore = useWindowStore()
const CarouselHeight = computed(() => {
  return windowStore.isMobile == 1
    ? {
        height: '700px',
        mode: 'cover'
      }
    : {
        height: '170px',
        mode: 'cover'
      }
})
onBeforeMount(() => {
  store.setData()
})
</script>
<style lang='sass' scoped>
.block
  width: 100%

.demonstration
  color: var(--el-text-color-secondary)

.carousel-item-bg
  height: 100%

.carousel-wraper
  z-index: 10000
  background-color: rgba(0, 0, 0, 0.2)
  height: 100%
  position: relative
  .carousel-title
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    height: 100%
    position: relative
    .carousel-content
      border-radius: 8px
      padding: 10px
      max-width: 60%
      color: white
      font-size: 25px
      font-weight: bold
      text-align: center
      background-color: rgba(45, 45, 45, 0.5)
</style>