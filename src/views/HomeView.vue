<!--
 * @Descripttion: 
 * @version: 
 * @Author: zpliu
 * @Date: 2024-11-01 21:45:16
 * @LastEditors: zpliu
 * @LastEditTime: 2024-11-02 21:32:29
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
        <el-col :span="16" class="researchItem">
          <h2 class="researchTitle">药用植物演化生物学与天然产物多样性研究</h2>
          <el-row justify="space-around">
            <el-col :span="10">
              <el-image
                src="https://raw.githubusercontent.com/zpliu1126/blog-img/main/202411021543142.png"
                :fit="'contain'"
              ></el-image>
            </el-col>
            <el-col :span="10"
              ><p class="researchText">
                菊科是被子植物的第一大科，包含了许多名贵中药材基原植物，如菊花、蒲公英、青蒿、黄花蒿、白术、苍术、蕲艾、夏枯草等。从系统演化生物学、植物分类学、合成生物学的视角，构建药用植物基因组进化和合成的科学研究框架，关注植物进化的多样性与药用成分特性的关系。其一，以菊科药用植物为材料，以“科/属大进化+人工智能”为视角，深入探讨关键物质合成通路的演化和调控机制，特别是新基因起源和调控元件。其二，以“多维组学+合成生物学”为视角，目前聚焦菊科苍术和白术两种药用植物及近缘种质资源，开展群体基因组多样性演化与有效物质通路起源关系。结合多组学与合成生物学技术，阐明菊科药用物种天然产物化学多样性的形成机制，特别是限速酶和催化酶基因功能缺失对天然产物结构多样化的影响。
              </p>
            </el-col>
          </el-row>
        </el-col>

        <el-col :span="16" class="researchItem">
          <h2 class="researchTitle">植物天然产物合成生物学研究</h2>
          <el-row justify="space-around">
            <el-col :span="10"
              ><p class="researchText">
                菊科是被子植物的第一大科，包含了许多名贵中药材基原植物，如菊花、蒲公英、青蒿、黄花蒿、白术、苍术、蕲艾、夏枯草等。从系统演化生物学、植物分类学、合成生物学的视角，构建药用植物基因组进化和合成的科学研究框架，关注植物进化的多样性与药用成分特性的关系。其一，以菊科药用植物为材料，以“科/属大进化+人工智能”为视角，深入探讨关键物质合成通路的演化和调控机制，特别是新基因起源和调控元件。其二，以“多维组学+合成生物学”为视角，目前聚焦菊科苍术和白术两种药用植物及近缘种质资源，开展群体基因组多样性演化与有效物质通路起源关系。结合多组学与合成生物学技术，阐明菊科药用物种天然产物化学多样性的形成机制，特别是限速酶和催化酶基因功能缺失对天然产物结构多样化的影响。
              </p>
            </el-col>
            <el-col :span="10">
              <el-image
                src="https://raw.githubusercontent.com/zpliu1126/blog-img/main/202411021543142.png"
                :fit="'contain'"
              ></el-image>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="16" class="researchItem">
          <h2 class="researchTitle">棉花等经济作物分子遗传学研究</h2>
          <el-row justify="space-around">
            <el-col :span="10">
              <el-image
                src="https://raw.githubusercontent.com/zpliu1126/blog-img/main/202411021543142.png"
                :fit="'contain'"
              ></el-image>
            </el-col>
            <el-col :span="10"
              ><p class="researchText">
                菊科是被子植物的第一大科，包含了许多名贵中药材基原植物，如菊花、蒲公英、青蒿、黄花蒿、白术、苍术、蕲艾、夏枯草等。从系统演化生物学、植物分类学、合成生物学的视角，构建药用植物基因组进化和合成的科学研究框架，关注植物进化的多样性与药用成分特性的关系。其一，以菊科药用植物为材料，以“科/属大进化+人工智能”为视角，深入探讨关键物质合成通路的演化和调控机制，特别是新基因起源和调控元件。其二，以“多维组学+合成生物学”为视角，目前聚焦菊科苍术和白术两种药用植物及近缘种质资源，开展群体基因组多样性演化与有效物质通路起源关系。结合多组学与合成生物学技术，阐明菊科药用物种天然产物化学多样性的形成机制，特别是限速酶和催化酶基因功能缺失对天然产物结构多样化的影响。
              </p>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="16" class="researchItem">
          <h2 class="researchTitle">药用植物基原种质资源创新与新品种选育</h2>
          <el-row justify="space-around">
            <el-col :span="10">
              <el-image
                src="https://raw.githubusercontent.com/zpliu1126/blog-img/main/202411021543142.png"
                :fit="'contain'"
              ></el-image>
            </el-col>
            <el-col :span="10"
              ><p class="researchText">
                菊科是被子植物的第一大科，包含了许多名贵中药材基原植物，如菊花、蒲公英、青蒿、黄花蒿、白术、苍术、蕲艾、夏枯草等。从系统演化生物学、植物分类学、合成生物学的视角，构建药用植物基因组进化和合成的科学研究框架，关注植物进化的多样性与药用成分特性的关系。其一，以菊科药用植物为材料，以“科/属大进化+人工智能”为视角，深入探讨关键物质合成通路的演化和调控机制，特别是新基因起源和调控元件。其二，以“多维组学+合成生物学”为视角，目前聚焦菊科苍术和白术两种药用植物及近缘种质资源，开展群体基因组多样性演化与有效物质通路起源关系。结合多组学与合成生物学技术，阐明菊科药用物种天然产物化学多样性的形成机制，特别是限速酶和催化酶基因功能缺失对天然产物结构多样化的影响。
              </p>
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
    font-size: 18px,
    padding: 15px 0,
    margin: 15px auto 20px
  .researchText
    font-size: 16px
    line-height: 1.5
    margin-bottom: 20px
</style>