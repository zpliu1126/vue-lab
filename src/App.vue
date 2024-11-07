<!--
 * @Descripttion: 
 * @version: 
 * @Author: zpliu
 * @Date: 2024-11-01 21:45:16
 * @LastEditors: zpliu
 * @LastEditTime: 2024-11-07 11:51:33
 * @@param: 
-->
<script setup>
import Footer from '@/components/footer.vue'
import Backup from '@/components/backup.vue'
import NavigationBar from '@/layout/header.vue'
import { useWindowStore } from '@/stores/homeStore'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'
//根据客户端的宽度进行判断
// 修改Store值
const store = useWindowStore()
const { isMobile } = storeToRefs(store)
window.addEventListener('resize', store.ChangeWidth)
const isMobileClass = computed(() => {
  return isMobile.value == 0 ? 'app-main-mobile' : 'app-main-desktop'
})
</script>
<template>
  <div :class="isMobileClass">
    <div class="navigation-bar">
      <NavigationBar></NavigationBar>
    </div>
    <div id="main-wrapper">
      <RouterView />
    </div>
    <div id="footer-wrapper">
      <Footer />
    </div>
  </div>
  <Backup />
</template>

<style lang='scss' scoped>
.app-main-mobile {
  margin-top: 0px;
  height: 100%;
  #main-wrapper {
    min-height: 90vh;
  }
}
.app-main-desktop {
  margin-top: 60px;
  height: 100%;
  #main-wrapper {
    min-height: 90vh;
  }
}
</style>