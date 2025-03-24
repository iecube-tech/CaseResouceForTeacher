<template>
    <div v-if="isReady" ref="tableRef" :id="'block' + blockDetail.id" class="table-show">
        <div class="table-show-content" v-if="payload.question !== '' && payload.question !== null">
            <TextPreview :id="'table-view-question' + blockId" :content="payload.question"></TextPreview>
        </div>
        <div class="table-show-title" v-if="payload.table.tableName !== '' && payload.table.tableName !== null">
            <TextPreview :id="'table-view-tablename' + blockId" :content="payload.table.tableName"></TextPreview>
        </div>
        <table class="table-show-full">
            <thead>
                <td v-for="(item, i) in payload.table.tableHeader">
                    <div style="display: flex; flex-direction: row">
                        <div class="cell-preview">
                            <TextPreview :id="item.id" :content="item.colName" />
                        </div>
                    </div>
                </td>
            </thead>
            <tbody>
                <td v-for="(cols, i) in payload.table.tableColnum">
                    <div class="cell" v-for="(cell, j) in cols">
                        <div v-if="cell.isInput && !cell.autoGet" :id="cell.id" style="padding: 2px;">
                            <el-input v-model="cell.presetValue[cell.type]" @focus="handleFocus(cell)"></el-input>
                        </div>
                        <el-button v-else-if="cell.isInput && cell.autoGet" :id="cell.id" size="small"
                            @click="handleFocus(cell)">获取数据 </el-button>

                        <TextPreview v-else :id="cell.id"
                            :content="cell.presetValue[cell.type] == '' || cell.presetValue[cell.type] == null ? '<br />' : cell.presetValue[cell.type]" />
                    </div>
                </td>
            </tbody>
        </table>
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
const tableRef = ref()
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
    console.log(cell)
    tableRef.value.style.backgroundColor = '#adf2d8'
    emdStore.setCurrentSetBlockBlockDetail(blockDetail.value)
    emdStore.setCurrentSetBlockPayload(payload.value)
    emdStore.setCurrentSetBlockCell(cell)
}


watch(() => emdStore.currentSetBlockCell, (newVal) => {
    if (newVal != null) {
        if (emdStore.getCurrentSetBlockBlockDetail.id != blockDetail.value.id) {
            tableRef.value.style.backgroundColor = '#fff'
        }
    } else {
        tableRef.value.style.backgroundColor = '#fff'
    }
})

onMounted(() => {
    setTimeout(async () => {
        await getBlockDetail()
    }, 500)
})
</script>
<style scoped>
.table-show {
    display: flex;
    flex-direction: column;
    padding: 20px 20px;
}

.table-show table {
    width: 100%;
    /* 使表格宽度铺满屏幕 */
    border-collapse: collapse;
    /* 合并相邻单元格的边框 */
}

.table-show thead {
    width: 100%;
    /* 使表格宽度铺满屏幕 */
    border-collapse: collapse;
    /* 合并相邻单元格的边框 */

}

.table-show thead td {
    border: 1px solid #000;
    /* 为表头和单元格添加边框 */
    padding: 8px;
    /* 为表头和单元格添加内边距，使内容有一定的间距 */
    text-align: left;
    /* 文本左对齐 */
    background-color: #cccccc4c;
}

.table-show table tbody td {
    border: 1px solid #000;
    /* 为表头和单元格添加边框 */
    /* padding: 8px; */
    /* 为表头和单元格添加内边距，使内容有一定的间距 */
    text-align: top;
    /* 文本左对齐 */
    vertical-align: unset;
    unicode-bidi: unset;

}

.table-show table tbody tr {
    display: flex;
    border-bottom: 1px solid #ccc;
    border-left: none;
    border-right: none;
    /* 为表头和单元格添加边框 */
    /* padding: 8px; */
    /* 为表头和单元格添加内边距，使内容有一定的间距 */
    text-align: left;
    /* 文本左对齐 */
    vertical-align: unset;
    unicode-bidi: unset;
}

.table-show-title {
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.table-show-title {
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.table-show-full {
    /* opacity: 0; */
    transition: opacity 0.5s;
}

.cell-preview {
    flex: 1;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.cell-preview .vditor-reset {
    overflow: unset;
}

.cell {
    height: 60px;
    padding: 3px;
    border-bottom: 1px solid #ccc;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}

.cell .vditor-reset {
    overflow: unset;
}
</style>