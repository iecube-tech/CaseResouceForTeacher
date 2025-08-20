<template>
  <div v-html="htmlStr"></div>
</template>

<script setup lang="ts">
import { parseHtml } from "@/utils/htmlTools";

const props = defineProps({
  payload: Object,
});

const htmlStr = ref();

watchEffect(() => {
  htmlStr.value = parseHtml(props.payload.content);
});
</script>

<style scoped></style>
