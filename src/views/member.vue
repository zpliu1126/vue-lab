<!--
 * @Descripttion: 
 * @version: 
 * @Author: zpliu
 * @Date: 2024-11-02 21:40:48
 * @LastEditors: zpliu
 * @LastEditTime: 2024-11-08 12:29:46
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
    <el-row class="teacher" justify="center" :gutter="30">
      <!-- //文章导航   -->
      <el-col :sm="22" :xs="22" :md="22" :xl="20" :lg="23" :push="4" class="ClassTitle">
        <h1>指导老师</h1>
      </el-col>
      <el-col :sm="22" :xs="22" :md="22" :xl="3" :lg="3" class="teacher-info">
        <el-image
          src="https://43423.oss-cn-beijing.aliyuncs.com/img/202411072208342.jpg"
          :fit="'contain'"
          class="teacher-info-img"
        ></el-image>
        <div class="teacher-info-item">
          <p>姓名: 李健英</p>
          <p>职务: 教授</p>
          <p>联系方式: XXX@hzau.mail</p>
        </div>
      </el-col>
      <el-col :sm="22" :xs="22" :md="22" :xl="6" :lg="6" class="teacher-info">
        <div class="teacher-introduction">
          <h2>个人简介</h2>
          <p>
            主要从事植物分子遗传学与基因组学研究。研究组利用演化生物学、系统基因组学、分子生物学、化学生态学、合成生物学等多学科交叉，聚焦在经济作物和药用植物种质资源创新和合成生物学的科学研究框架，揭示驯化作物和引种植物响应环境变化的适应性机制。通过创新种质优化药用植物有效物质含量，有效成分合成通路解析和生产高附加值有效物质。研究成果以第一或通讯作者发表在Nature
            Genetics (2022, 2024), Genome Biology (2021), Molecular Biology & Evolution (2021),
            Plant Biotechnology Journal (2016, 2019a, 2019b), BMC Biology (2024)等国际知名期刊。
          </p>
        </div>
      </el-col>
    </el-row>
    <el-row class="post-doctor" justify="center">
      <el-col :sm="22" :xs="22" :md="22" :xl="20" :lg="23" :push="4" class="ClassTitle">
        <h1>博士后</h1>
      </el-col>
      <el-col :span="12">
        <div style="position: relative" class="people-info">
          <el-image src="https://dummyimage.com/400x400" fit="cover" class="avatar-img"> </el-image>
          <!-- //hover时显示图标 -->
          <div class="people-name">
            <span>虚位以待</span>
          </div>
          <!-- <div class="people-position">
            <span>XXX</span>
          </div>
          <div class="people-contact">
            <a :href="'#'" target="_blank"><span>XXX</span></a>
          </div> -->
        </div>
      </el-col>
    </el-row>
    <el-row class="doctor" justify="center">
      <el-col :sm="22" :xs="22" :md="22" :xl="20" :lg="23" :push="4" class="ClassTitle">
        <h1>博士生</h1>
      </el-col>
    </el-row>
    <el-row class="master" justify="center">
      <el-col :sm="22" :xs="22" :md="22" :xl="20" :lg="23" :push="4" class="ClassTitle">
        <h1>硕士生</h1>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { ElRow, ElCol, ElImage } from 'element-plus'
</script>

<style  scoped>
.ClassTitle {
  padding: 15px 0;
  margin: 15px auto 20px;
  width: 75%;
  display: flex;
  justify-content: start;
}
.ClassTitle h1 {
  min-width: 200px;
  width: 20%;
  background-color: #4388b7;
  text-align: center;
  color: white;
}
.teacher-info {
  background-color: #e9eff6;
}
.teacher-info-img {
  margin-left: -2.5rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  width: 200px;
  height: 200px;
  /* max-height: 300px; */
}
.teacher-info-item {
  margin-left: 1rem;
  font-size: 20px;
  margin-bottom: 1rem;
}
.teacher-introduction {
  margin-top: 1rem;
  padding-bottom: 1rem;
  h2 {
    font-size: 30px;
    margin-bottom: 1rem;
  }
  p {
    font-size: 20px;
    line-height: 1.7;
  }
}
.avatar-img {
  border: 2px;
  border-radius: 10px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
  margin: 0, 0;
  max-width: 200px;
  max-height: 200px;
}
.people-info {
  font-family: 'Lato-Black';
  .people-name {
    font-size: 26px;
    color: #5b5657;
    letter-spacing: 0em;
    line-height: 1em;
    font-weight: 600;
    margin-top: 30px;
    margin-bottom: 20px;
  }
  .people-position {
    font-family: 'Lato-Regular';
    font-size: 16px;
    line-height: 1.4;
    color: #5b5657;
    font-weight: bold;
    letter-spacing: 0em;
    font-style: italic;
  }
  .people-contact {
    font-family: 'Lato-Regular';
    font-size: 16px;
    line-height: 1.4;
    color: #5b5657;
    font-weight: bold;
    letter-spacing: 0em;
    font-style: italic;
    color: #00498f;
    a {
      text-decoration: none;
      color: #00498f;
    }
  }
}
</style>
