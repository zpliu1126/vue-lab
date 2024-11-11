<!--
 * @Descripttion: 
 * @version: 
 * @Author: zpliu
 * @Date: 2022-05-11 21:04:50
 * @LastEditors: zpliu
 * @LastEditTime: 2024-11-11 19:34:07
 * @@param: 
-->
<template>
  <div class="header-wrap">
    <div v-if="store.isMobile" class="desktop-show">
      <el-row justify="center" align="middle">
        <el-col :md="10" :lg="10" :xl="10">
          <!-- <SvgIcon name="rock" width="30" height="30"></SvgIcon> -->
          <span id="group-name">Plant phylogenomics and evolution team</span>
        </el-col>
        <el-col :md="12" :lg="12" :xl="12" :offset="1">
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
import { ref } from 'vue'
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
#group-name {
  font-size: 30px;
  color: #1c9f96;
  text-shadow: 1px 1px #bae6ef, 2px 2px #bae6ef, 3px 3px #bae6ef, 4px 4px #bae6ef, 5px 5px #bae6ef;
}
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