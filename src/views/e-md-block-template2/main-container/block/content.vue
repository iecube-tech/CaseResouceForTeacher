<template>
    <div v-html="afterRenderContent"> </div>
</template>

<script setup lang="ts">
import { simpleMarked } from '@/ts/MyMarked';
import DOMPurify from 'isomorphic-dompurify';

const props = defineProps({
    payload: Object
})


const afterRenderContent = ref()

function postprocess(html: string) {
    return DOMPurify.sanitize(html);
}


watchEffect(()=>{
  let str = props.payload.question.content
  str = simpleMarked.parse(str).replace(/<p[^>]*>\s*<\/p>/g, '')
  afterRenderContent.value =  postprocess(str)
})



</script>
<style scoped></style>