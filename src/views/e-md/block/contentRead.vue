<template>
    <emdPreview :id="'preview' + generateShortUUID(blockId)" :content="blockDetail.content"></emdPreview>
</template>

<script setup lang="ts">
import 'vditor/dist/index.css';
import { ref, onBeforeMount } from 'vue';
import { generateShortUUID } from '@/utils/GenrateUUID.js';
import { BlockDetail } from './block';
import { GetBlockDetail } from '@/apis/e-md/block/getBlockDetail.js'
import emdPreview from '../emdPreview/emdPreview.vue';

const props = defineProps({
    blockId: Number,
})

const blockDetail = ref<BlockDetail>({
    id: null,
    parentId: props.blockId,
    type: '',
    title: '',
    content: '',
    catalogue: '',
    confData: '',
    referenceData: '',
    dataTemplate: ''
})

onBeforeMount(() => {
    GetBlockDetail(props.blockId).then(res => {
        if (res.state == 200) {
            blockDetail.value = res.data
        }
    })
})
</script>
<style scoped></style>