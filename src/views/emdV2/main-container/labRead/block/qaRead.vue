<template>
    <div v-if="isReady" class="qa-privew">
        <TextPreview :id="'block-' + generateShortUUID(blockId)"
            :content="payload.question == '' ? '问题' : payload.question">
        </TextPreview>
        <el-input v-if="payload.cell.isInput" :id="payload.cell.id" style="width: 100%;" type="textarea" autosize
            placeholder="作答区域">
        </el-input>
    </div>
</template>

<script setup lang="ts">
import { ref, onBeforeMount, onMounted } from 'vue';
import { generateShortUUID } from '@/utils/GenrateUUID.js';
import { BlockDetail, PAYLOAD } from '../../../block';
import { GetBlockDetail } from '@/apis/e-md/block/getBlockDetail.js'
import TextPreview from '../../../textPreview/textPreview.vue';
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

const payload = ref<PAYLOAD | null>()

const getBlockDetail = () => {
    return new Promise<void>((resolve, reject) => {
        GetBlockDetail(props.blockId).then(res => {
            if (res.state == 200) {
                blockDetail.value = res.data
                // 处理payload
                if (blockDetail.value.payload != null || blockDetail.value.payload != '') {
                    payload.value = JSON.parse(blockDetail.value.payload)
                } else {
                    isReady.value = false
                    reject()
                }
                isReady.value = true
                resolve();
            } else {
                ElMessage.error(res.message)
                reject()
            }
        })
    })
}

onMounted(() => {
    setTimeout(async () => {
        await getBlockDetail()
    }, 500)
})
</script>
<style scoped></style>