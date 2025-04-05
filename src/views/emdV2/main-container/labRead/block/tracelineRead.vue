<template>
    <div v-if="isReady" class="ist-theam scroll-mt-[80px]">
        <div class="table-show-content" v-if="payload.question !== '' && payload.question !== null">
            <TextPreview :id="'table-view-question' + blockId" :content="payload.question"></TextPreview>
        </div>
        <table>
            <thead>
                <tr v-if="payload.table!!.tableName !== '' && payload.table!.tableName !== null">
                    <th :colspan="payload.table?.tableHeader.length">
                        <TextPreview :id="'table-view-tablename' + blockDetail.id" :content="payload.table!.tableName">
                        </TextPreview>
                    </th>
                </tr>
                <tr>
                    <th v-for="(item, i) in payload.table!.tableHeader">
                        <div style="display: flex; flex-direction: row">
                            <TextPreview :id="item.id" :content="item.colName" />
                        </div>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="i in payload.table?.tableColnum[0].length">
                    <td v-for="(col, j) in payload.table?.tableColnum">
                        <div v-if="col[i - 1].isInput && !col[i - 1].autoGet" :id="col[i - 1].id" style="padding: 2px;"
                            class="scroll-mt-[80px]">
                            <el-input v-model="col[i - 1].stuValue[col[i - 1].type]"></el-input>
                        </div>
                        <div v-else-if="col[i - 1].isInput && col[i - 1].autoGet" :id="col[i - 1].id"
                            class="scroll-mt-[80px]">
                            <el-input v-model="col[i - 1].stuValue[col[i - 1].type]" disabled>
                                <template #append>
                                    <button class="text-blue-600">获取</button>
                                </template>
                            </el-input>
                        </div>
                        <TextPreview v-else :id="col[i - 1].id"
                            :content="col[i - 1].presetValue[col[i - 1].type] == '' || col[i - 1].presetValue[col[i - 1].type] == null ? '<br />' : col[i - 1].presetValue[col[i - 1].type]" />
                    </td>
                </tr>
            </tbody>
        </table>
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