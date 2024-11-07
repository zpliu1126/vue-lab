<!--
 * @Descripttion: 
 * @version: 
 * @Author: zpliu
 * @Date: 2022-05-13 10:07:54
 * @LastEditors: zpliu
 * @LastEditTime: 2024-11-07 18:55:44
 * @@param: 
-->
<template>
  <div>
    <el-row justify="center" :gutter="10" align="top" class="publication">
      <el-col :xs="24" :sm="24" :md="4" :lg="4" :xl="4" class="item-title">
        <h2>{{ FirstAuthorstore.PublicaFirst.title }}</h2>
      </el-col>
      <el-col :xs="24" :sm="24" :md="16" :lg="16" :xl="16" class="item-content">
        <ol class="publicationInfo">
          <li
            v-for="(item, index) in FirstAuthorstore.PublicaFirst.Paper"
            :key="index"
            class="publicationItem"
          >
            <div v-html="publicationHTML(item)"></div>
          </li>
        </ol>
      </el-col>
    </el-row>
    <el-row justify="center" :gutter="10" align="top" class="publication">
      <el-col :xs="24" :sm="24" :md="4" :lg="4" :xl="4" class="item-title">
        <h2>{{ OtherAuthorstore.PublicaOther.title }}</h2>
      </el-col>
      <el-col :xs="24" :sm="24" :md="16" :lg="16" :xl="16" class="item-content">
        <ol class="publicationInfo">
          <li
            v-for="(item, index) in OtherAuthorstore.PublicaOther.Paper"
            :key="index"
            class="publicationItem"
          >
            <div v-html="publicationHTML(item)"></div>
          </li>
        </ol>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { ElRow, ElCol } from 'element-plus'
import { ref, onBeforeMount } from 'vue'
import publicationJson from './publication.json'
import { publicationHTML } from '@/utils/hightPublication'
import { usePubliFirstStore, usePubliOtherStore } from '../stores/homeStore'
const FirstAuthorstore = usePubliFirstStore()
const OtherAuthorstore = usePubliOtherStore()
onBeforeMount(() => {
  FirstAuthorstore.setData()
  OtherAuthorstore.setData()
})
</script>


<style scoped>
.publication {
  padding-top: 20px;
}

.item-title {
  display: inherit;
  justify-content: center;
}
.item-content {
  margin-bottom: 20px;
}
h2 {
  border-bottom: solid;
  padding-bottom: 0.25rem;
  border-bottom-width: 10px;
  border-bottom-color: #008f94;
  font-size: 25px;
  text-align: center;
  max-width: 200px;
}
.publicationInfo {
  font-size: 20px;
  text-align: justify;
}
.publicationItem {
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
}
</style>
