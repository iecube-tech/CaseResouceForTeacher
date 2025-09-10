<template>
  <div :id="id" v-html="afterRenderContent">
  </div>
</template>

<script setup lang="ts">
import { watch, ref, onMounted } from 'vue';
import { simpleMarked } from '@/ts/MyMarked';
import DOMPurify from 'isomorphic-dompurify';

const props = defineProps({
  id: String,
  payload: Object,
});

const afterRenderContent = ref()

function postprocess(html: string) {
  return DOMPurify.sanitize(html);
}

watchEffect(() => {
  afterRenderContent.value = postprocess(<string>simpleMarked.parse(props.payload.content)).replace(/<p[^>]*>\s*<\/p>/g, '')
});
</script>

<style scoped></style>
