<template>
  <div class="screen-container">
    <div class="screen-content" ref="screenRef">
      <div class="h-full flex flex-col">
        <ScreenHeader></ScreenHeader>
        <ScreenMain class="flex-1 bg-red-50"></ScreenMain>
      </div>
    </div>
  </div>
</template>

<script setup>
import windowResize from '@/utils/resize';
const { screenRef, calcRate, windowDraw, unWindowDraw } = windowResize()

import ScreenHeader from './components/ScreenHeader.vue';
import ScreenMain from './components/ScreenMain.vue';

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
:root,
body {
  font-size: 16px;
}

@import '../scss/index.scss';
</style>