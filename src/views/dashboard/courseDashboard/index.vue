<template>
  <div class="screen-container text-white">
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

<style lang="css" scoped>
:deep(.el-table) {
  --el-table-border-color: rgba(255, 255, 255, 0.1);
  --el-table-border: 1px solid rgba(255, 255, 255, 0.1);
  --el-table-text-color: white;
  --el-table-header-text-color: white;
  --el-table-row-hover-bg-color: rgba(255, 255, 255, 0.10);
  --el-table-current-row-bg-color: var(--el-color-primary-light-9);
  --el-table-header-bg-color: rgba(255, 255, 255, 0.08);
  --el-table-fixed-box-shadow: var(--el-box-shadow-light);
  --el-table-bg-color: rgba(255, 255, 255, 0.05);
  --el-table-tr-bg-color: transparent;
  --el-table-expanded-cell-bg-color: var(--el-fill-color-blank);
  --el-table-fixed-left-column: inset 10px 0 10px -10px rgba(0, 0, 0, 0.15);
  --el-table-fixed-right-column: inset -10px 0 10px -10px rgba(0, 0, 0, 0.15);
  --el-table-index: var(--el-index-normal);
}

:deep(.el-select__wrapper) {
    align-items: center;
    background-color: rgba(255, 255, 255, 0.05);
    border-radius: var(--el-border-radius-base);
    box-shadow: 0 0 0 1px var(--el-border-color) inset;
    box-sizing: border-box;
    cursor: pointer;
    display: flex;
    font-size: 14px;
    gap: 6px;
    line-height: 24px;
    min-height: 32px;
    padding: 4px 12px;
    position: relative;
    text-align: left;
    transform: translateZ(0);
    transition: var(--el-transition-duration);
}

:deep(.el-select__placeholder){
  color: white;
}


:deep(.el-input) {
    --el-input-text-color: rgba(255, 255, 255, 0.8);
    --el-input-bg-color: transparent;
}

:deep(.row-item) {
  border-bottom: .5px solid rgba(255, 255, 255, 0.08);
}

:deep(.words-ellipsis) {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>