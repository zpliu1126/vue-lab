<!--
 * @Descripttion: 
 * @version: 
 * @Author: zpliu
 * @Date: 2024-11-02 15:54:14
 * @LastEditors: zpliu
 * @LastEditTime: 2024-11-02 15:55:37
 * @@param: 
-->
<template>
  <section class="page_404">
    <el-row type="flex" justify="center">
      <el-col :xs="24" :sm="12">
        <div class="four_zero_four_bg">
          <h1 class="text-center">404</h1>
        </div>
        <div class="contant_box_404">
          <h2 class="h2">Look like you're lost</h2>

          <p>the page you are looking for not avalible!</p>
          <el-button type="success" @click="handlegoHome">Go to Home</el-button>
        </div>
      </el-col>
    </el-row>
  </section>
</template>

<script setup>
const handlegoHome = () => {
  this.$router.push({ path: '/' })
}
</script>
<style lang='scss' scoped>
/*======================
 404 page
 =======================*/
.page_404 {
  background: #fff;
  font-family: 'Arvo', serif;
  text-align: center;
  height: 100%;
  width: 100%;
  display: flex;
}
.el-row {
  align-items: center;
  width: 100%;
}
p {
  margin-top: 10px;
  margin-bottom: 10px;
}
.four_zero_four_bg {
  background-image: url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif);
  height: 400px;
  background-position: center;
}

.four_zero_four_bg h1 {
  font-size: 80px;
}

.four_zero_four_bg h3 {
  font-size: 80px;
}

.link_404 {
  color: #fff !important;
  padding: 10px 20px;
  background: #39ac31;
  margin: 20px 0;
  display: inline-block;
}
.contant_box_404 {
  margin-top: -50px;
}
</style>