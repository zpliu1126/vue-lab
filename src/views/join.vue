<!--
 * @Descripttion: 
 * @version: 
 * @Author: zpliu
 * @Date: 2024-11-02 21:40:54
 * @LastEditors: zpliu
 * @LastEditTime: 2024-11-07 16:23:57
 * @@param: 
-->
<!--
 * @Descripttion: 
 * @version: 
 * @Author: zpliu
 * @Date: 2022-05-13 10:07:54
 * @LastEditors: zpliu
 * @LastEditTime: 2024-11-02 21:35:40
 * @@param: 
-->
<template>
  <div>
    <el-row class="join-info" justify="center">
      <!-- //文章导航   -->
      <el-col :sm="24" :xs="24" :md="20" :xl="20" :lg="20" class="join-info-item">
        <el-button type="info" round>
          <h1>JOIN US</h1>
        </el-button>
      </el-col>
      <el-col :sm="24" :xs="24" :md="20" :xl="10" :lg="10" class="join-info-item">
        <SvgIcon name="doctor" width="100" height="100"></SvgIcon>
        <h1>Postdoctoral Fellow</h1>
        <el-button type="info" plain round disabled>
          <h3>Read More</h3>
        </el-button>
      </el-col>
      <el-col :sm="24" :xs="24" :md="20" :xl="10" :lg="10" class="join-info-item">
        <SvgIcon name="dna" width="100" height="100"></SvgIcon>
        <h1>Research Assistant</h1>
        <el-button type="info" plain round disabled>
          <h3>Read More</h3>
        </el-button>
      </el-col>
    </el-row>
    <el-row class="contact-info" justify="center" align="middle">
      <el-col :sm="24" :xs="24" :md="20" :xl="20" :lg="20">
        <el-button type="info" round>
          <h1>CONTACT US</h1>
        </el-button>
      </el-col>
      <el-col :sm="22" :xs="22" :md="20" :xl="20" :lg="8" class="cantact-item">
        <div class="email">
          <SvgIcon name="email" width="30" height="30"></SvgIcon>
          <span>: zpliu@qq.com</span>
        </div>
        <div class="position">
          <SvgIcon name="position" width="30" height="30"></SvgIcon>
          <span>: No.1 Shizishan Street, Hongshan District, Wuhan, Hubei Province, China</span>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { ElRow, ElCol, ElButton } from 'element-plus'
import SvgIcon from '../components/SvgIcon.vue'
</script>

<style lang="scss">
.join-info {
  text-align: center;
  min-height: 50vh;
  margin-top: 100px;
}
.join-info-item {
  margin-bottom: 30px;
}
.contact-info {
  text-align: center;
}
.cantact-item {
  text-align: start;
  display: table-cell;
  svg {
    vertical-align: middle;
  }
  span {
    vertical-align: middle;
  }
  .email {
    margin-top: 20px;
    margin-bottom: 10px;
  }
  .position {
    margin-top: 20px;
    margin-bottom: 20px;
  }
}
</style>
