<!-- 教师端 课程分析 页面 -->
<template>
  <div class="bg-gray-50 text-gray-900 transition-colors duration-200">
    <c-header></c-header>
    <c-content></c-content>
  </div>
</template>

<script setup>
import CHeader from './components/c-header.vue'
import CContent from './components/c-content.vue'

// import { initGenAnalysis } from '@/apis/embV4/analysis';

defineOptions({ name: 'courseAnalysis' });

const route = useRoute()
// console.log(route.params.projectId)

// initGenAnalysis(route.params.projectId).then(res => {
//   // console.log(res)
// })

import { useRouteCacheStore } from '@/stores/useRouteCacheStore'
const routeCacheStore = useRouteCacheStore()

onBeforeRouteLeave((to, from, next)=>{
  const toName = to.name
  // to --> 课程实验 学生课程
  if(['courseTaskAnalysis', 'courseAnalysisStudent'].includes(toName)){
    routeCacheStore.addRouteToCache('courseAnalysis')
  } else {
    routeCacheStore.removeRouteFromCache('courseAnalysis')
  }
  next()
})


</script>

<style lang="scss">
:root,
body {
  font-size: 16px;
}
</style>