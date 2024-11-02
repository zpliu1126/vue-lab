<!--
 * @Descripttion: 
 * @version: 
 * @Author: zpliu
 * @Date: 2024-11-01 21:45:16
 * @LastEditors: zpliu
 * @LastEditTime: 2024-11-02 21:43:13
 * @@param: 
-->
<script setup>
import Footer from '@/components/footer.vue'
import Backup from '@/components/backup.vue'
import NavigationBar from '@/layout/header.vue'
</script>
<template>
  <div class="app-wrapper">
    <div class="navigation-bar">
      <NavigationBar></NavigationBar>
    </div>
    <div class="app-main">
      <RouterView />
    </div>
  </div>
  <div class="footer-wrapper">
    <Footer />
  </div>
  <Backup />
</template>

<style lang='scss' scoped>
.footer-wrapper {
  padding: 0px;
}
.app-main {
  margin-top: 60px;
  min-height: 600px;
}
</style>