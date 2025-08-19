<template>
  <div class="flex flex-col justify-center items-center">
    <font-awesome-icon icon="fa-solid fa-users " class="text-4xl text-teal-600 mb-4" />
    <h4 class="text-xl font-semibold text-gray-900 mb-4">实验分组</h4>
    <p class="text-gray-600 mb-6">请先进行分组后开始实验操作。</p>
    <button class="bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors" @click="openGroupModal">
        <i class="fas fa-plus mr-2"></i>创建/加入小组
    </button>
    
  </div>
</template>

<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const openGroupModal=()=>{ 
}
</script>

<style scoped>

</style>