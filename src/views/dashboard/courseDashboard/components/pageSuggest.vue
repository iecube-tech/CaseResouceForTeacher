<template>
  <transition name="fade" mode="out-in">
    <div v-show="currentModule == 4" class="h-full flex flex-col justify-around" key="expriment-page">
      <div class="grid grid-cols-1 h-[718px]">
        <screen-card title="整体教学效果报告"></screen-card>
      </div>
      <div class="grid grid-cols-1 h-[260px]">
        <screen-card title="教学改进建议">
          <template #icon>
            <font-awesome-icon icon="fa-solid fa-lightbulb" class="mr-2 text-yellow-400"></font-awesome-icon>
          </template>
        </screen-card>
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