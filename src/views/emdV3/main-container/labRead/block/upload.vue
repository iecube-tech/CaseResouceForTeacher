<template>
    <div v-if="isReady" class="ist-theam my-4 p-5 bg-gray-50 rounded-lg border-l-4 border-blue-500 scroll-mt-[80px]"
        tabindex="0">
        <textpreview :content="payload.question.question"></textpreview>
        <div class="scroll-mt-[80px]">
             <el-upload>
                <el-button type="primary" :icon="UploadFilled" >上传文件</el-button>
            </el-upload>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { type PAYLOAD, type BlockDetail } from '@/ts/block';
import textpreview from '@/views/emdV3/textPreview/textPreview.vue'
import { GetBlockDetail } from '@/apis/e-md/block/getBlockDetail.js';
import { ElMessage } from 'element-plus';
import {UploadFilled} from '@element-plus/icons-vue'
const props = defineProps({
    blockId: Number,
})

const isReady = ref(false)

const payload = ref<PAYLOAD>()

const blockDetail = ref<BlockDetail>({
    id: props.blockId,
    parentId: null,
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
                if (blockDetail.value.payload != null && blockDetail.value.payload.length !== 0) {
                    payload.value = JSON.parse(blockDetail.value.payload)
                }
                isReady.value = true
                resolve()
            }
            else {
                ElMessage.error("数据加载失败")
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