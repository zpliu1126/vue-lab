<!--
 * @Descripttion: 
 * @version: 
 * @Author: zpliu
 * @Date: 2022-05-11 21:04:50
 * @LastEditors: zpliu
 * @LastEditTime: 2024-11-08 12:34:34
 * @@param: 
-->
<template>
  <div class="header-wrap">
    <div v-if="store.isMobile" class="desktop-show">
      <el-row justify="center" align="middle">
        <el-col :md="8" :lg="8" :xl="8"
          ><SvgIcon name="rock" width="30" height="30"></SvgIcon
        ></el-col>
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
    <div v-else class="toggle-menu">
      <el-icon :size="30" @click="handleDrawer"><Expand /></el-icon>
    </div>
    <el-drawer v-model="drawer" :direction="'rtl'" :show-close="false" :size="'45%'">
      <el-menu class="el-menu-demo" :mode="'vertical'">
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
    </el-drawer>
  </div>
</template>

<script setup>
import { ElRow, ElCol, ElMenu, ElMenuItem, ElDrawer, ElIcon } from 'element-plus'
import SvgIcon from '../components/SvgIcon.vue'
import { Expand } from '@element-plus/icons-vue'
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useWindowStore } from '@/stores/homeStore'
const router = useRouter()
const store = useWindowStore()
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
// const { isMobile } = storeToRefs(store)
// window.addEventListener('resize', store.ChangeWidth)

const drawer = ref(false)
const handleDrawer = () => {
  //点击按钮，将抽屉打开
  drawer.value = true
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
.toggle-menu {
  text-align: right;
  margin-right: 10px;
}
</style>