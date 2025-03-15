<template>
    <div v-if="isReady" ref="qaRef" :id="'block' + blockDetail.id" class="qa-privew">
        <TextPreview :id="'block-' + generateShortUUID(blockId)"
            :content="payload.question == '' ? '问题' : payload.question">
        </TextPreview>
        <div v-if="payload.cell.isInput" :id="payload.cell.id" style="padding: 5px;">
            <el-input style="width: 100%;" type="textarea" autosize placeholder="作答区域"
                v-model="payload.cell.presetValue[payload.cell.type]" @focus="handleFocus(payload.cell)">
            </el-input>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onBeforeMount, onMounted, watch } from 'vue';
import { generateShortUUID } from '@/utils/GenrateUUID.js';
import { BlockDetail, PAYLOAD } from '../../../block';
import { GetBlockDetail } from '@/apis/e-md/block/getBlockDetail.js'
import TextPreview from '../../../textPreview/textPreview.vue';
import { ElMessage } from 'element-plus';
import { emdV2Store } from '@/stores/emdV2Store';
const props = defineProps({
    blockId: Number,
})

const isReady = ref(false)
const qaRef = ref()
const emdStore = emdV2Store()

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

const handleFocus = (cell: any) => {
    console.log(qaRef.value)
    qaRef.value.style.backgroundColor = '#adf2d8'
    emdStore.setCurrentSetBlockBlockDetail(blockDetail.value)
    emdStore.setCurrentSetBlockPayload(payload.value)
    emdStore.setCurrentSetBlockCell(cell)
}


watch(() => emdStore.currentSetBlockCell, (newVal) => {
    if (newVal != null) {
        if (emdStore.getCurrentSetBlockBlockDetail.id != blockDetail.value.id) {
            qaRef.value.style.backgroundColor = '#fff'
        }
    } else {
        qaRef.value.style.backgroundColor = '#fff'
    }
})

onMounted(() => {
    setTimeout(async () => {
        await getBlockDetail()
    }, 500) // 设置延时是 markdown渲染需要时间， 先让content 渲染
})
</script>
<style scoped>
.a {
    background-color: #adf2d872;
}
</style>