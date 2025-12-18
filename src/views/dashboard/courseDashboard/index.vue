<template>
  <div class="screen-container">
    <div class="screen-content" ref="screenRef">

      <div class="h-full flex flex-col">
        <ScreenHeader v-model="currentModule"></ScreenHeader>
        <div class="relative overflow-hidden" style="height: calc(100% - 66px);">
          <page-overview :currentModule="currentModule"></page-overview>
          <page-expriment :currentModule="currentModule"></page-expriment>
          <page-target :currentModule="currentModule"></page-target>
          <page-student :currentModule="currentModule"></page-student>
          <page-suggest :currentModule="currentModule"></page-suggest>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import windowResize from '@/utils/resize';
const { screenRef, calcRate, windowDraw, unWindowDraw } = windowResize()

import ScreenHeader from './components/ScreenHeader.vue';

import PageOverview from './components/PageOverview.vue';
import pageExpriment from './components/pageExpriment.vue';
import pageTarget from './components/pageTarget.vue';
import pageStudent from './components/pageStudent.vue';
import pageSuggest from './components/pageSuggest.vue';

const currentModule = ref(0)

onMounted(() => {
  // 监听浏览器窗口尺寸变化
  windowDraw()
  calcRate()
})

onUnmounted(() => {
  unWindowDraw();
})

</script>

<style lang="scss">
@import '../scss/index.scss';

:root,
body {
  font-size: 16px;
}
</style>