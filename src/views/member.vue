<!--
 * @Descripttion: 
 * @version: 
 * @Author: zpliu
 * @Date: 2024-11-02 21:40:48
 * @LastEditors: zpliu
 * @LastEditTime: 2025-01-15 19:48:34
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
      <el-col :sm="22" :xs="22" :md="22" :lg="24" :xl="24" :push="4" class="ClassTitle">
        <h1>课题组长简介</h1>
      </el-col>
      <el-col :sm="22" :xs="22" :md="22" :xl="3" :lg="3" class="teacher-info">
        <el-image src="https://s21.ax1x.com/2025/01/15/pEFuMVJ.jpg" :fit="'contain'"
          class="teacher-info-img"></el-image>
        <div class="teacher-info-item">
          <p>姓名: 李健英</p>
          <p>职称：教 授</p>
          <p>邮箱: jyli@mail.hzau.edu.cn</p>
          <p>电话: 15926351167</p>
        </div>
      </el-col>
      <el-col :sm="22" :xs="22" :md="22" :xl="8" :lg="10" class="teacher-info">
        <div class="teacher-introduction">
          <h2>个人简介</h2>
          <p>
            李健英 教授 硕/博导师 博士后合作导师
            植物基因组学，特用作物学，合成生物学
            李健英，1990年生，华中农业大学教授，博士生导师，中国科协青年人才托举工程，湖北省青年科技人才。围绕植物基因组结构演化、纤维与药用作物品质形成的遗传基础、合成生物学等科学问题展开研究。研究成果以第一或通讯作者在Nature
            Genetics (2篇), Molecular Biology and Evolution, Genome Biology, Plant Biotechnology Journal
            (3篇)等期刊发表9篇（影响因子151），被引3千多次，研究成果得到中国科学报、科学网、农业部等报道。2025年起，入职华中农业大学药用植物团队，组建了药用植物分子遗传学研究组，利用进化基因组学、群体遗传学、代谢组学、合成生物学等手段，致力于菊科药用植物类群基因组演化和代谢多样性调控等核心科学问题，破解环境因子对药用成分调控的分子基础，为药用植物的种质创新和代谢工程改良提供理论支撑。主持国家重点研发子课题、国家自然科学基金、湖北省青年科技人才专项等10项。李健英博士曾获中国作物学会优秀博士论文、华中农业大学优秀博士后、Research
            Associate（A 类）等奖励。入选Advanced Genetics, aBIOTECH, Genomics Communications,科技导报等杂志编委。

          </p>
        </div>
      </el-col>
    </el-row>
    <!-- <el-row class="post-doctor" justify="center">
      <el-col :sm="22" :xs="22" :md="22" :xl="24" :lg="24" :push="4" class="ClassTitle">
        <h1>博士后</h1>
      </el-col>
      <el-col :span="12">
        <div style="position: relative" class="people-info">
          <el-image src="https://dummyimage.com/400x400" fit="cover" class="avatar-img"> </el-image>

          <div class="people-name">
            <span>虚位以待</span>
          </div>
        </div>
      </el-col>
    </el-row> -->
    <el-row class="doctor" justify="center">
      <el-col :sm="22" :xs="22" :md="22" :xl="24" :lg="23" :push="4" class="ClassTitle">
        <h1>博士生</h1>
      </el-col>

      <el-col class="Information" :sm="22" :xs="22" :md="22" :xl="5" :lg="10">
        <div style="position: relative" class="people-info">
          <el-image src="https://s21.ax1x.com/2025/11/23/pZkr78J.png" fit="cover" class="avatar-img"> </el-image>

          <div class="people-name">
            <div>
              <p>Zhu, Juan(朱娟) (Co-supervision)</p>
              <p>Sep 2022 - now, PhD Candidate</p>
              <p>Research Interests: Genomic evolution and metabolic genetics of Atractylodes genus</p>
              <p>Email: zhujuan@webmail.hzau.edu.cn</p>
            </div>
          </div>
        </div>
      </el-col>
      <el-col class="Information" :sm="22" :xs="22" :md="22" :xl="5" :lg="10">
        <div style="position: relative" class="people-info">
          <el-image src="https://s21.ax1x.com/2025/11/23/pZkr5UU.png" fit="cover" class="avatar-img"> </el-image>

          <div class="people-name">
            <div>
              <p>Liu, Luying (刘露莹)</p>
              <p>Sep 2022 - now, PhD Candidate</p>
              <p>Research Interests: Pan-genome and Metabolism Diversification of Carthamus genus</p>
              <p>Email: luyingliu0908@163.com</p>
            </div>
          </div>
        </div>
      </el-col>
      <el-col class="Information" :sm="22" :xs="22" :md="22" :xl="5" :lg="10">
        <div style="position: relative" class="people-info">
          <el-image src="https://s21.ax1x.com/2025/11/23/pZkrWD0.png" fit="cover" class="avatar-img"> </el-image>

          <div class="people-name">
            <div>
              <p>Wang, Xuqing (王旭清)</p>
              <p>Sep 2025 - now, PhD Candidate</p>
              <p>Research Interests: Origin, Domestication of Carthamus tinctorius (Safflower)</p>
              <p>Email: 2772249587@qq.com</p>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row class="master" justify="center">
      <el-col :sm="22" :xs="22" :md="22" :xl="24" :lg="24" :push="4" class="ClassTitle">
        <h1>硕士生</h1>
      </el-col>
      <el-col class="Information" :sm="22" :xs="22" :md="22" :xl="5" :lg="10">
        <div style="position: relative" class="people-info">
          <el-image src="https://s21.ax1x.com/2025/11/23/pZkrRuq.png" fit="cover" class="avatar-img"> </el-image>

          <div class="people-name">
            <div>
              <p>Chen, Ziyao (陈梓尧) (Co-supervision)</p>
              <p>Sep 2024 - now, Master's Student</p>
              <p>Research Interests: Biotechnology</p>
              <p>Email: 1429596092@qq.com</p>
            </div>
          </div>
        </div>
      </el-col>
      <el-col class="Information" :sm="22" :xs="22" :md="22" :xl="5" :lg="10">
        <div style="position: relative" class="people-info">
          <el-image src="https://s21.ax1x.com/2025/11/23/pZkrfbV.png" fit="cover" class="avatar-img"> </el-image>

          <div class="people-name">
            <div>
              <p>Shi Ming (石铭)</p>
              <p>Sep 2025 - now, Master's Student</p>
              <p>Research Interests: Genetic Innovation of Safflower Germplasm</p>
              <p>Email: uushiming@163.com</p>
            </div>
          </div>
        </div>
      </el-col>
      <el-col class="Information" :sm="22" :xs="22" :md="22" :xl="5" :lg="10">
        <div style="position: relative" class="people-info">
          <el-image src="https://s21.ax1x.com/2025/11/23/pZkrH29.png" fit="cover" class="avatar-img"> </el-image>

          <div class="people-name">
            <div>
              <p>Yu, Zhou (余舟)</p>
              <p>Sep 2025 - now, Master's Student</p>
              <p>Research Interests: Biotechnology of Safflower</p>
              <p>Email: yuzhou411@163.com</p>
            </div>
          </div>
        </div>
      </el-col>
      <el-col class="Information" :sm="22" :xs="22" :md="22" :xl="5" :lg="10">
        <div style="position: relative" class="people-info">
          <el-image src="https://s21.ax1x.com/2025/11/23/pZkr4ET.png" fit="cover" class="avatar-img"> </el-image>

          <div class="people-name">
            <div>
              <p>Qin, Chenglei (秦成磊) (Co-supervision)</p>
              <p>Sep 2025 - now, Master's Student</p>
              <p>Research Interests: Population Genomics of Atractylodes genus</p>
              <p>Email: qinchenglei2004@163.com</p>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row class="undergraduate" justify="center">
      <el-col :sm="22" :xs="22" :md="22" :xl="24" :lg="24" :push="4" class="ClassTitle">
        <h1>本科生</h1>
      </el-col>
      <el-col class="Information" :sm="22" :xs="22" :md="22" :xl="5" :lg="10">
        <div style="position: relative" class="people-info">
          <el-image src="https://s21.ax1x.com/2025/11/23/pZkrbvR.png" fit="cover" class="avatar-img"> </el-image>

          <div class="people-name">
            <div>
              <p>Zhu, Xianqi (朱贤齐)</p>
              <p>Sep 2023 - now, Undergraduate</p>
              <p>Research Interests: Population Genomics and Deep Learning</p>
              <p>Email: zhu11288554@webmail.hzau.edu.cn</p>
            </div>
          </div>
        </div>
      </el-col>
      <el-col class="Information" :sm="22" :xs="22" :md="22" :xl="5" :lg="10">
        <div style="position: relative" class="people-info">
          <el-image src="https://dummyimage.com/300x400" fit="cover" class="avatar-img"> </el-image>

          <div class="people-name">
            <div>
              <p>Yin,Xingzhu (尹祥铸)</p>
              <p>Sep 2023 - now, Undergraduate</p>
              <p>Research Interests: Biosynthesis and Functional Genomics</p>
              <p>Email: 2963412849@qq.com</p>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { ElRow, ElCol, ElImage } from 'element-plus'
</script>

<style scoped>
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
    font-size: 22px;
    color: #5b5657;
    letter-spacing: 0em;
    line-height: 1.5em;
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

.Information {
  text-align: center;
}
</style>
