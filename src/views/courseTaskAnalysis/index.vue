<template>
  <div class="bg-gray-50 text-gray-900 transition-colors duration-200">
    <c-header></c-header>
    <c-content></c-content>
  </div>
</template>

<script setup>
import CHeader from './components/c-header.vue'
import CContent from './components/c-content.vue'

import { useRoute } from 'vue-router'

const route = useRoute()
console.log(route.params.taskId)

defineOptions({ name: 'courseTaskAnalysis' });

import { useRouteCacheStore } from '@/stores/useRouteCacheStore'
const routeCacheStore = useRouteCacheStore()

onBeforeRouteLeave((to, from, next)=>{
  const toName = to.name
  // to --> 课程实验 学生课程
  if(['courseTaskAnalysisStudent'].includes(toName)){
    routeCacheStore.addRouteToCache('courseTaskAnalysis')
  } else {
    routeCacheStore.removeRouteFromCache('courseTaskAnalysis')
  }
  next()
})

</script>

<style lang="scss">
:root, body {
  font-size: 16px;
}
</style>