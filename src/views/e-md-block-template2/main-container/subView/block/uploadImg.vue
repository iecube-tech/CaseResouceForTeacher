<template>
  <div>
    <text-preview :id="id" :content="payload.upload.description" class="ist-theam" />
    <div>
      <el-button type="primary">请上传指定图片</el-button>
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