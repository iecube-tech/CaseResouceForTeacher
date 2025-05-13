<template>
    <div class="ist-theam scroll-mt-[80px] my-4 rounded-lg border-l-4 border-blue-500">
        <table>
            <thead>
                <tr v-if="payload.table.tableName">
                    <th :colspan="payload.table.tableHeader.length">
                        <textpreview :content="payload.table.tableName"></textpreview>
                    </th>
                </tr>
                <tr>
                    <th v-for="(item, i) in payload.table.tableHeader">
                        <div class="flex flex-row ">
                            <textpreview :content="item.value"></textpreview>
                        </div>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(row, i) in payload.table.tableRow">
                    <td v-for="(cell, j) in payload.table.tableRow[i]">
                        <div v-if="cell.isNeedInput">
                            <div v-if="cell.isAutoGet">
                                <el-input disabled>
                                    <template #append>
                                        <button class="text-blue-600">获取</button>
                                    </template>
                                </el-input>
                            </div>
                            <el-input v-else></el-input>
                        </div>
                        <div v-else>
                            <textpreview :content="cell.value"></textpreview>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { type PAYLOAD, type BlockDetail } from '@/ts/block';
import textpreview from '@/views/emdV3/textPreview/textPreview.vue'
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