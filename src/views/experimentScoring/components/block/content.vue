<template>
  <text-preview class="ist-theam" :id="id" :content="content"></text-preview>
</template>

<script setup lang="ts">
import textPreview from '../textPreview/textPreview.vue';


const props = defineProps({
  index: Number,
  comp: Object,
})
const id = ref()
const content = ref("")

onMounted(() => {
  id.value = props.comp!.id
  content.value = props.comp!.payload.content
})
</script>

<style scoped></style>
