<template>
    <div>
        <MdPreview :editorId="id" :modelValue="content" />
    </div>
</template>

<script setup lang="ts">
import { onBeforeMount, ref } from 'vue';
import { MdPreview } from 'md-editor-v3';
import 'md-editor-v3/lib/preview.css';
import { readOver } from '@/components/markdownInteraction/script/relpace'
import '@/components/markdownInteraction/style/replaced.css'

const props = defineProps({
    compose: Object,
    isAnswer: Boolean
})

interface compose {
    id: number | null,
    pstId: number | null,
    pstArticleId: number | null,
    index: number | null,
    name: string,
    val: string,
    answer: string,
    score: number | null,
    result: number | null,
    status: number | null,
    subjective: boolean | null,
}
const compose = ref<compose>()
const id = ref('')
const content = ref('')
const isAnswer = ref(false)
const init = () => {
    isAnswer.value = props.isAnswer
    compose.value = <compose>props.compose
    id.value = 'stuent_compose_readover' + compose.value.pstId + '_' + compose.value.index
    if (isAnswer.value) {
        id.value = 'stuent_compose_readover_answer' + compose.value.pstId + '_' + compose.value.index
    }
    content.value = '<iecube>' + compose.value.name + '</iecube>'
}
onBeforeMount(async () => {
    await init()
    setTimeout(() => {
        readOver(id.value, isAnswer.value, compose.value)
    }, 200)
})
</script>
<style scoped></style>