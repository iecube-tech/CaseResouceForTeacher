<template>
    <div v-if="isReady" ref="choiceRef" :id="'block' + blockDetail.id" class="choice-privew" tabindex="0"
        @focus="handleFocus(payload.cell)">
        <TextPreview :id="'block-' + generateShortUUID(blockId)"
            :content="payload.question == '' ? '问题' : payload.question">
        </TextPreview>
        <div v-if="payload.isMultiple">
            <el-checkbox-group :id="payload.cell.id" v-model="payload.cell.presetValue.array">
                <el-checkbox v-for="(item, i) in payload.options" :key="'check-' + blockId + '-' + i" :label="item">
                    <TextPreview :id="'option-' + blockId + '-check-' + i" :content="item" />
                </el-checkbox>
            </el-checkbox-group>
        </div>
        <div v-else>
            <el-radio-group :id="payload.cell.id" v-model="payload.cell.presetValue.array[0]">
                <el-radio v-for="(item, i) in payload.options" :label="item">
                    <TextPreview :id="'option-' + blockId + '-radio-' + i" :content="item" />
                </el-radio>
            </el-radio-group>
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
const choiceRef = ref()
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
    choiceRef.value.style.backgroundColor = '#adf2d8'
    emdStore.setCurrentSetBlockBlockDetail(blockDetail.value)
    emdStore.setCurrentSetBlockPayload(payload.value)
    emdStore.setCurrentSetBlockCell(cell)
}


watch(() => emdStore.currentSetBlockCell, (newVal) => {
    if (newVal != null) {
        if (emdStore.getCurrentSetBlockBlockDetail.id != blockDetail.value.id) {
            choiceRef.value.style.backgroundColor = '#fff'
        }
    } else {
        choiceRef.value.style.backgroundColor = '#fff'
    }
})

onMounted(() => {
    setTimeout(async () => {
        await getBlockDetail()
    }, 500)
})
</script>
<style scoped></style>