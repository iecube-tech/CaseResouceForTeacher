<template>
  <transition name="fade" mode="out-in">
    <div v-show="currentModule == 3" class="h-full flex flex-col justify-around" key="expriment-page">
      <div class="grid grid-cols-1 h-[379px]">
        <screen-card title="学生总览"></screen-card>
      </div>
      <div class="grid grid-cols-1 h-[599px]">
        <screen-card title="学习行为与AI使用分析"></screen-card>
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