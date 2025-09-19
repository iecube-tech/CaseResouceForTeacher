<template>
  <text-preview :id="id" :content="payload.content" class="ist-theam" />
</template>

<script setup lang="ts">
import textPreview from '@/components/textPreview.vue';
const props = defineProps({
  id: String,
  payload: Object,
});
</script>

<style scoped></style>
