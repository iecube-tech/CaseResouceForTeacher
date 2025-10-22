<template>
  <div>
    <div v-for="(file,k) in payload.fileList" :key="k">
      <span class="text-blue-600 hover:text-blue-700">{{ file.originFilename }}</span>
    </div>
  </div>
</template>

<script setup>
import textPreview from '@/components/textPreview.vue';
const props = defineProps({
  id: String,
  payload: Object,
});
</script>

<style scoped>

</style>