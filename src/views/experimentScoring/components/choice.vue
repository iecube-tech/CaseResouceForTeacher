<template>
  <div class="flex items-start justify-between mb-3">
    <h4 class="font-medium text-gray-900">第{{ i + 1 }}题 ({{ question.score }}分)</h4>
    <span class="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-800">
      {{ getTypeLabel(question.type) }}
    </span>
  </div>
  <p class="text-gray-800 mb-3">{{ question.question }}</p>
  <div class="space-y-2 mb-3">
    <div class="p-2 border rounded bg-white border-gray-200"
      v-for="(opt, k) in question.options">
      <div class="flex items-center space-x-2">
        <font-awesome-icon icon="fas fa-user-check" class="text-blue-500 mr-1"></font-awesome-icon>
        <font-awesome-icon icon="fas fa-check" class="text-green-500"></font-awesome-icon>
        <span class="text-sm">{{ indexToLetter(k) }}. {{ opt }}</span>
      </div>
    </div>
    <!-- <div class="p-2 border rounded bg-white border-gray-200">
      <div class="flex items-center space-x-2">

        <span class="text-sm">A. 源极、漏极、栅极</span>
      </div>
    </div>

    <div class="p-2 border rounded bg-green-50 border-green-200">
      <div class="flex items-center space-x-2">
        <i class="fas fa-user-check text-blue-500 mr-1"></i><i class="fas fa-check text-green-500"></i>
        <span class="text-sm">B. 发射极、集电极、基极</span>
      </div>
    </div>

    <div class="p-2 border rounded bg-white border-gray-200">
      <div class="flex items-center space-x-2">

        <span class="text-sm">C. 阳极、阴极、控制极</span>
      </div>
    </div>

    <div class="p-2 border rounded bg-white border-gray-200">
      <div class="flex items-center space-x-2">

        <span class="text-sm">D. 输入极、输出极、公共极</span>
      </div>
    </div> -->
  </div>
  <div class="flex items-center justify-between">
    <div class="flex items-center space-x-4">
      <span class="text-sm text-gray-600">AI评分:</span>
      <span class="text-sm font-medium text-green-600">5分</span>
    </div>
    <div class="flex items-center space-x-2">
      <span class="text-sm text-gray-600">修改评分:</span>
      <input type="number" value="5" min="0" max="5"
        class="w-16 px-2 py-1 border border-gray-300 rounded text-sm score-input smooth-transition"
        data-section="preStudy" data-index="0">
      <span class="text-sm text-gray-500">/ 5分</span>
    </div>
  </div>
</template>

<script setup>

import {indexToLetter} from '@/apis/embV4/interfaces.ts'
import {getTypeLabel} from './tools'

const props = defineProps({
  i: Number,
  question: Object,
})
</script>

<style scoped></style>