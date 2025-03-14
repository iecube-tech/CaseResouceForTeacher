<template>
    <textPrivew v-if="isReady" :id="'block-' + generateShortUUID(blockId)" :content="blockDetail.content"></textPrivew>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { generateShortUUID } from '@/utils/GenrateUUID.js';
import { BlockDetail } from '../../../block';
import { GetBlockDetail } from '@/apis/e-md/block/getBlockDetail.js'
import textPrivew from '../../../textPreview/textPreview.vue';
import { ElMessage } from 'element-plus';

const props = defineProps({
    blockId: Number,
})

const isReady = ref(false)

const blockDetail = ref<BlockDetail>({
    id: null,
    parentId: props.blockId,
    type: '',
    title: '',
    content: '',
    catalogue: '',
    confData: '',
    referenceData: '',
    dataTemplate: '',
    payload: ''
})

const getBlockDetail = () => {
    return new Promise<void>((resolve, reject) => {
        GetBlockDetail(props.blockId).then(res => {
            if (res.state == 200) {
                blockDetail.value = res.data
                isReady.value = true
                resolve();
            } else {
                ElMessage.error(res.message)
                reject()
            }
        })
    })
}

onMounted(async () => {
    await getBlockDetail()
})
</script>
<style scoped></style>