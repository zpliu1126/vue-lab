<!--
 * @Descripttion: 
 * @version: 
 * @Author: zpliu
 * @Date: 2024-11-01 21:45:16
 * @LastEditors: zpliu
 * @LastEditTime: 2024-11-08 12:06:59
 * @@param: 
-->
<script setup>
import 'element-plus/es/components/button/style/css'
import Carousel from '../components/carousel.vue'
import { ElRow, ElCol, ElImage } from 'element-plus'
</script>

<template>
  <div>
    <Carousel />
    <div class="research-region">
      <el-row justify="center">
        <el-col :sm="24" :xs="24" :md="20" :xl="20" :lg="20" class="researchItem">
          <h2 class="researchTitle">药用植物演化生物学</h2>
          <el-row justify="space-around">
            <el-col :sm="24" :xs="24" :md="10" :xl="10" :lg="10">
              <el-image
                src="https://43423.oss-cn-beijing.aliyuncs.com/img/202411071917584.png"
                :fit="'contain'"
              ></el-image>
            </el-col>
            <el-col :sm="22" :xs="22" :md="10" :xl="10" :lg="10"
              ><p class="researchText">
                菊科是被子植物的第一大科，包含了许多名贵中药材基原植物，如菊花、蒲公英、青蒿、黄花蒿、白术、苍术、蕲艾、夏枯草等。从系统演化生物学、植物分类学、合成生物学的视角，构建药用植物基因组进化和合成的科学研究框架，关注植物进化的多样性与药用成分特性的关系。其一，以菊科药用植物为材料，以“科/属大进化+人工智能”为视角，深入探讨关键物质合成通路的演化和调控机制，特别是新基因起源和调控元件。其二，以“多维组学+合成生物学”为视角，目前聚焦菊科苍术和白术两种药用植物及近缘种质资源，开展群体基因组多样性演化与有效物质通路起源关系。结合多组学与合成生物学技术，阐明菊科药用物种天然产物化学多样性的形成机制，特别是限速酶和催化酶基因功能缺失对天然产物结构多样化的影响。
              </p>
            </el-col>
          </el-row>
        </el-col>
        <el-col :sm="24" :xs="24" :md="20" :xl="20" :lg="20" class="researchItem">
          <h2 class="researchTitle">经济作物分子遗传与演化研究</h2>
          <el-row justify="space-around">
            <el-col :sm="22" :xs="22" :md="10" :xl="10" :lg="10"
              ><p class="researchText">
                以棉花等经济作物为研究对象，从系统基因组学和微进化的角度，利用泛基因组、代谢组、调控组、空间组等组学手段，研究二倍体和四倍体棉花在进化、自然选择、平行驯化、扩散引种、改良过程中适应性进化分子机制。以多倍体油料作物（油菜、棉花、花生、油茶等）与二倍体油料作物（向日葵、芝麻、白菜等），利用进化透镜技术+群体基因组学，探究油料作物平行选择的分子机制以及多倍体优势分子机制（如剂量效应）。特别关注近期进化过程中才出现的调控元件对脂肪酸合成通路的影响等。
              </p>
            </el-col>
            <el-col :sm="24" :xs="24" :md="10" :xl="10" :lg="10">
              <el-image
                src="https://43423.oss-cn-beijing.aliyuncs.com/img/202411071917555.png"
                :fit="'contain'"
              ></el-image>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<style lang='sass' scoped>
.researchItem
  margin: 20px
  min-height: 200px
  .researchTitle
    text-align: center,
    background-color: #526842,
    color: white,
    font-size: 25px,
    padding: 15px 0,
    margin: 15px auto 20px
  .researchText
    font-size: 20px
    line-height: 1.8
    margin-bottom: 20px
</style>