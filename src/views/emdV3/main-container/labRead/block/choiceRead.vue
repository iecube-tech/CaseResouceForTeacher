<template>
    <div v-if="isReady" class="ist-theam mt-6 p-5 bg-gray-50 rounded-lg border-l-4 border-blue-500 scroll-mt-[80px]">
        <TextPreview :id="'block-' + generateShortUUID(blockId)"
            :content="payload.question == '' ? '问题' : payload.question">
        </TextPreview>
        <div v-if="payload.isMultiple">
            <el-checkbox-group class="select-item scroll-mt-[80px]">
                <el-checkbox class=" rounded hover:bg-gray-100" v-for="(item, i) in payload.options"
                    :key="'check-' + blockId + '-' + i" :label="item">
                    <TextPreview class="scroll-mt-[80px]" :id="'option-' + blockId + '-check-' + i" :content="item" />
                </el-checkbox>
            </el-checkbox-group>
        </div>
        <div v-else>
            <el-radio-group class="select-item scroll-mt-[80px]">
                <el-radio class="rounded hover:bg-gray-100" v-for="(item, i) in payload.options" :label="item">
                    <TextPreview class="scroll-mt-[80px]" :id="'option-' + blockId + '-radio-' + i" :content="item" />
                </el-radio>
            </el-radio-group>
        </div>
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
<style scoped>
.select-item {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    word-wrap: break-word;
    padding-left: 20px;
}
</style>