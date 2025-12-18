<template>
  <transition name="fade" mode="out-in">
    <div v-show="currentModule == 2" class="h-full flex flex-col justify-around" key="expriment-page">
      <div class="grid grid-cols-2 gap-[10px] h-[272px]">
        <screen-card title="课程目标班级平均达成度"></screen-card>
        <screen-card title="课程目标达成度趋势"></screen-card>
      </div>
      <div class="grid grid-cols-1 h-[392px]">
        <screen-card title="课程目标与能力标签支撑关系"></screen-card>
      </div>
      <div class="grid grid-cols-1 h-[302px]">
        <screen-card title="课程目标详情分析"></screen-card>
      </div>
    </div>
  </transition>
</template>

<script setup>
const props = defineProps({
  currentModule: Number,
})
</script>

<style scoped></style>