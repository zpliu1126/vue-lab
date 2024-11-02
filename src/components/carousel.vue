<!--
 * @Descripttion: 
 * @version: 
 * @Author: zpliu
 * @Date: 2024-11-01 22:09:15
 * @LastEditors: zpliu
 * @LastEditTime: 2024-11-02 17:53:11
 * @@param: 
-->
<template>
  <div class="block">
    <el-carousel trigger="click" height="700px">
      <el-carousel-item v-for="item in store.CarouslInfo.list" :key="item">
        <div
          :style="{
            'background-image': 'url(' + item.url + ')',
            'background-repeat': 'no-repeat',
            'background-size': 'cover'
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
import { ElCarousel, ElCarouselItem, ElImage } from 'element-plus'
import { useCarouslStore } from '../stores/homeStore'
import tmpimg from '../assets/carousel/carousel-1.png'
import 'element-plus/es/components/carousel/style/css'
import { onBeforeMount } from 'vue'
// import { storeToRefs } from 'pinia'

const store = useCarouslStore()
onBeforeMount(() => {
  store.setData()
})
// const carouselInfo = [
//   {
//     title: '1111',
//     url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
//   },
//   {
//     title: '222',
//     url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
//   },
//   {
//     title: '333',
//     url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
//   }
// ]
</script>
<style lang='sass' scoped>
.block
  width: 100%

.demonstration
  color: var(--el-text-color-secondary)

.carousel-item-bg
  width: 100%
  height: 100%

.carousel-wraper
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
      padding: 20px
      max-width: 60%
      min-width: 200px
      color: red
      text-align: center
      background-color: rgba(45, 45, 45, 0.5)
</style>