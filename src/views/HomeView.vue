<!--
 * @Descripttion: 
 * @version: 
 * @Author: zpliu
 * @Date: 2024-11-01 21:45:16
 * @LastEditors: zpliu
 * @LastEditTime: 2025-01-15 19:51:29
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
          <h2 class="researchTitle">菊科药用植物次生代谢演化生物学</h2>
          <el-row justify="space-around">
            <el-col :sm="24" :xs="24" :md="10" :xl="10" :lg="10">
              <el-image src="https://s21.ax1x.com/2025/11/21/pZFLOw8.png" :fit="'contain'"></el-image>
            </el-col>
            <el-col :sm="22" :xs="22" :md="10" :xl="10" :lg="10">
              <p class="researchText">
                植物长期进化中形成特异的次生代谢物。菊科作为被子植物最大的科，涵盖了苍术属、红花属、蒿属等重要药用植物类群。这些植物类群种间和种内的遗传差异，导致了次生代谢物的多样性。从演化生物学、植物分类学、合成生物学的视角，构建药用植物基因组进化和合成的科学研究框架，关注植物进化的多样性与药用成分特性的关系。其一，以菊科药用植物为材料，以“科/属大进化”为视角，深入探讨关键物质合成通路的演化和调控机制，特别是新基因起源和调控元件。其二，以“多维组学+合成生物学”为视角，开展群体基因组多样性演化与次生代谢分化。结合多组学与合成生物学技术，阐明菊科药用作物天然产物化学多样性的形成机制，特别是限速酶和催化酶基因功能缺失对天然产物结构多样化的影响。
              </p>
            </el-col>
          </el-row>
        </el-col>
        <el-col :sm="24" :xs="24" :md="20" :xl="20" :lg="20" class="researchItem">
          <h2 class="researchTitle">药用作物红花品质形成遗传基础与合成生物学</h2>
          <el-row justify="space-around">
            <el-col :sm="22" :xs="22" :md="10" :xl="10" :lg="10">
              <p class="researchText">
                基于大规模红花属种质资源和近缘物种，利用基因组进化、群体遗传学和代谢组等多维数据，构建红花种质资源起源、传播、驯化和改良路线图，解析种质资源传播扩散及羟基黄花色素A（HYSA）的遗传演化机制。结合数量性状表达位点和代谢组全基因组关联分析，系统解析HYSA、山柰酚等含量差异的遗传调控基础，为提高花丝药效含量提供新的途径。构建基因型-多环境-代谢人工智能模型，阐明基因型与环境互作影响次生代谢表型可塑性，为药用作物道地性遗传机制提供研究范式。
              </p>
            </el-col>
            <el-col :sm="24" :xs="24" :md="10" :xl="10" :lg="10">
              <el-image src="https://s21.ax1x.com/2025/11/21/pZFLXTS.png" :fit="'contain'"></el-image>
            </el-col>
          </el-row>
        </el-col>
        <el-col :sm="24" :xs="24" :md="20" :xl="20" :lg="20" class="researchItem">
          <h2 class="researchTitle">药用植物基原种质资源创新</h2>
          <el-row justify="space-around">
            <el-col :sm="24" :xs="24" :md="10" :xl="10" :lg="10">
              <el-image src="https://s21.ax1x.com/2025/01/15/pEFuub4.png" :fit="'contain'"></el-image>
            </el-col>
            <el-col :sm="22" :xs="22" :md="10" :xl="10" :lg="10">
              <p class="researchText">
                通过创新种质优化药用植物有效物质含量，开展红花品种的选育工作，构建一套基于药效物质和农艺性状道地中药材多组学溯源体系。结合系统基因组学、分子标记辅助选择、全基因组选择、人工智能等技术手段协同改良抗病、产量、品质等性状。

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
    font-size: 25px,
    padding: 15px 0,
    margin: 15px auto 20px
  .researchText
    font-size: 20px
    line-height: 1.8
    margin-bottom: 20px
</style>