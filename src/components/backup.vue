<!--
 * @Descripttion: 
 * @version: 
 * @Author: zpliu
 * @Date: 2022-04-01 09:39:12
 * @LastEditors: zpliu
 * @LastEditTime: 2024-11-07 11:18:52
 * @@param: 
  回到顶部按钮，增加了进度条选项
-->
<template>
  <el-backtop :bottom="100">
    <el-progress
      type="circle"
      :percentage="precentage > 100 ? 100 : precentage"
      :width="50"
      :visibility-height="200"
      style="background-color: transparent"
      :duration="0.5"
    >
      <el-button circle style="font-size: 30">
        <!-- <i class="el-icon-caret-top"></i> -->
        <!-- <svg-icon :name="'up'" /> -->
      </el-button>
    </el-progress>
  </el-backtop>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { ElProgress, ElButton, ElBacktop } from 'element-plus'
// import {arrow-up-bold} from
const precentage = ref(0)
function handleScrollx() {
  //body 全文高度
  let BodyHeigh = document.body.scrollHeight
  //已经完成浏览的高度：不可见高度加当前视窗高度
  let readedHeigh = document.documentElement.scrollTop + document.body.clientHeight
  const tmpVal = Number(100 * (readedHeigh / BodyHeigh - 0.5))
  if (tmpVal > 100) {
    precentage.value = 100
  } else if (tmpVal < 0) {
    precentage.value = 0
  } else {
    precentage.value = tmpVal
  }
}
onMounted(() => {
  // that.handleScrollx()
  window.addEventListener('scroll', handleScrollx, true)
})
</script>
<style lang='scss' scoped>
</style>