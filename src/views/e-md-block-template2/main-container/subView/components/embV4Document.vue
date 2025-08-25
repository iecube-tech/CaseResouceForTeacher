<!-- emb V4 Document show-->
<template>


  <div class="white-card">
    <div class="flex border-b border-gray-200">
      <button v-for="(root, k) in roots" :key="k"
        class="flex-1 py-8 px-12 text-center font-medium tab-transition border-b-2 border-blue-600 text-blue-600">
        <font-awesome-icon v-if="root.icon" :icon="root.icon" class="mr-2" />
        <span>{{ root.name }}</span>
      </button>
    </div>
  </div>

  <div class="white-card p-[32px]">
    <div class="flex justify-between items-center mb-2">
      <span class="font-medium text-gray-700">实验进度</span>
      <span id="progressText" class="text-gray-500">预习完成</span>
    </div>
    <el-progress :color="blue" :percentage="50" :show-text="false" />
  </div>

  <div class="white-card p-[32px]">
    <div v-for="(root, level_1_k) in roots" :key="`root_${level_1_k}`">
      
      <div v-for="(item_level3, level_3_k) in (root.children || [])" :key="`level_3_${level_3_k}`" class="section-card">
        <div
          class="font-semibold text-gray-900 p-[24px] mb-2 border-b border-gray-100 bg-gradient-to-r from-blue-50 to-indigo-50">
          <div>
            <i class="fas fa-clipboard-list text-green-600 mr-2"></i>
            <font-awesome-icon v-if="item_level3.icon" :icon="item_level3.icon" size="lg" class="text-blue-600 mr-2"></font-awesome-icon>
            <span class="text-[18px] font-semibold text-gray-900 mb-2">{{ item_level3.name }}</span>
          </div>
          <p class="text-[14px] text-gray-600">
            {{ item_level3.description }}
          </p>
        </div>
        <div class="p-[24px]">
          <video-group :children="item_level3.children" v-if="item_level3.type === 'videoGroup'"></video-group>
          <select-group :children="item_level3.children" v-if="item_level3.type === 'selectGroup'"></select-group>
          <common-group :children="item_level3.children" v-if="item_level3.type === ''"></common-group>
        </div>
      </div>

      <div v-if="root.stage == 0" class="my-8 flex justify-between items-center">
        <div>
          <span class="text-[14px] text-gray-500">得分: </span>
          <span id="previewScore" class="text-[18px] font-semibold text-blue-600">0/100</span>
        </div>
        <button id="submitPreview"
          class="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors disabled:bg-gray-300">
          提交答案
        </button>
      </div>
      
      
      <div v-if="root.stage == 1" class="mt-8 mb-4 text-center">
          <button class="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors">
              <font-awesome-icon icon="fas fa-check" class="mr-2"></font-awesome-icon>完成实验操作
          </button>
      </div>
      
      <div v-if="root.stage == 2" class="mt-8 mb-4 text-center">
          <button class="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors">
              <font-awesome-icon icon="fas fa-check" class="mr-2"></font-awesome-icon>提交
          </button>
      </div>
      
    </div>
  </div>

</template>

<script setup>

import videoGroup from './block/videoGroup.vue'
import selectGroup from './block/selectGroup.vue'
import commonGroup from './block/commonGroup.vue'

const props = defineProps({
  roots: {
    type: Array,
    default: () => [],
  },
})

const blue = ref('#2563eb')
onMounted(() => {
  console.log('---------------------> roots')
  // console.log(props.roots)
  props.roots.forEach(_=>{
    console.log(_)
  })
  console.log('---------------------> roots end' )
})

</script>

<style scoped>
.white-card {
  @apply bg-white rounded-lg shadow-sm border border-gray-200 mb-6;
}

.section-card {
  background: white;
  border-radius: 12px;
  border: 1px solid #e5e7eb;
  overflow: hidden;
  margin-bottom: 24px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}
</style>