<template>
  <transition name="fade" mode="out-in">
    <div v-show="currentModule == 1" class="h-full flex flex-col justify-around" key="expriment-page">
      <div class="grid grid-cols-2 gap-[10px] h-[489px]">
        <screen-card title="实验进度总览"></screen-card>
        <screen-card title="实验对比分析"></screen-card>
      </div>
      <div class="grid grid-cols-1 h-[489px]">
        <screen-card title="实验详情"></screen-card>
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