<!--
 * @Descripttion: 
 * @version: 
 * @Author: zpliu
 * @Date: 2022-05-11 21:04:50
 * @LastEditors: zpliu
 * @LastEditTime: 2024-11-02 21:45:15
 * @@param: 
-->
<template>
  <div class="header-wrap">
    <div class="desktop-show">
      <el-row justify="center" align="middle">
        <el-col :md="8" :lg="8" :xl="8">icon</el-col>
        <el-col :md="12" :lg="12" :xl="12" :offset="4">
          <el-menu class="el-menu-demo" mode="horizontal">
            <el-menu-item
              @click="changeRouter(item.path)"
              :index="item.title"
              :key="index"
              v-for="(item, index) in MenuList"
              class="menu-item"
            >
              {{ item.title }}</el-menu-item
            >
          </el-menu>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script setup>
import { ElRow, ElCol, ElMenu, ElMenuItem } from 'element-plus'
import { useRouter } from 'vue-router'
const router = useRouter()
const MenuList = [
  {
    title: '研究方向',
    path: '/'
  },
  {
    title: '论文与成果',
    path: 'publication'
  },
  {
    title: '团队成员',
    path: 'member'
  },
  {
    title: '加入我们',
    path: 'join'
  }
]
function changeRouter(path) {
  router.push(path)
}
</script>
<style lang='scss' scoped>
.menu-item {
  font-size: 20px;
}
.mobile-header {
  border-right: none;
}
.toggle-menu {
  text-align: right;
  margin-right: 10px;
}
.desktop-show {
  position: fixed;
  width: 100%;
  z-index: 999;
  height: 60px;
  top: 0px;
  background-color: white;
  border-bottom: solid 1px #dcdfe6;
  text-align: center;
  .desktop-log {
    height: 40px;
    width: 40px;
  }
  .desktop-menu {
    position: relative;
  }
}
</style>