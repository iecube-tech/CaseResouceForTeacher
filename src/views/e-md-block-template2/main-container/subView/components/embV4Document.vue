<!-- emb V4 Document show-->
<template>


  <div class="white-card">
    <div class="flex border-b border-gray-200">
      <button v-for="(root, k) in roots" :key="k"
        class="flex-1 py-8 px-12 text-center font-medium tab-transition border-b-2 border-blue-600 text-blue-600">
        <font-awesome-icon :icon="root.icon" class="mr-2" />
        <span>{{ root.name }}</span>
      </button>
    </div>
  </div>

  <div class="white-card p-8">
    <div class="flex justify-between items-center mb-2">
      <span class="font-medium text-gray-700">实验进度</span>
      <span id="progressText" class="text-gray-500">预习完成</span>
    </div>
    <el-progress :color="blue" :percentage="50" :show-text="false" />
  </div>

  <div v-for="(root, level_1_k) in roots" class="white-card p-8" :key="`root_${level_1_k}`">
    <div class="white-card p-6" v-for="(item_level3, level_3_k) in (root.children || [])" :key="`level_3_${level_3_k}`">
      <h4 class="font-semibold text-gray-900 mb-2">
        <i class="fas fa-clipboard-list text-green-600 mr-2"></i>
        <font-awesome-icon :icon="item_level3.icon" size="lg" class="text-blue-600 mr-2"></font-awesome-icon>
        <span class="text-[18px] font-semibold text-gray-900 mb-2">{{ item_level3.name }}</span>
      </h4>
      <p class="text-[14px] text-gray-600">
        {{ item_level3.description }}
      </p>

      <div class="p-6">
        <video-group :children="item_level3.children" v-if="item_level3.type === 'videoGroup'"></video-group>
      </div>
      
      
    </div>
  </div>
</template>

<script setup>
import videoGroup from './block/videoGroup.vue'


const props = defineProps({
  roots: {
    type: Array,
    default: () => [],
  },
})



const blue = ref('#2563eb')
onMounted(() => {
  console.log(props.roots)
})

</script>

<style scoped>
.white-card {
  @apply bg-white rounded-lg shadow-sm border border-gray-200 mb-6;
}
</style>