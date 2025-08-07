<template>
    <div
        class="ist-theam my-4 p-4 bg-gray-50 rounded-lg border-l-4 border-blue-500 scroll-mt-[80px] min-h-[200px] flex flex-row justify-center items-center">
        <button
            class="btn bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-xl shadow-md flex items-center mx-auto">
            电路检查
        </button>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { type PAYLOAD, type BlockDetail } from '@/ts/block';
import textpreview from '@/views/emdV4/textPreview/textPreview.vue'
import { GetBlockDetail } from '@/apis/e-md/block/getBlockDetail.js';
import { ElMessage } from 'element-plus';
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