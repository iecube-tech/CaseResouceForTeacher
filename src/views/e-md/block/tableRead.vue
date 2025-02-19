<template>
    <div>
        <div class="table-show">
            <div class="table-show-content" v-if="blockDetail.content !== '' && blockDetail.content !== null">
                <emdPreview :id="'table-view-' + generateShortUUID(blockId)" :content="blockDetail.content">
                </emdPreview>
            </div>
            <div class="table-show-title" v-if="ConfData.title !== '' && ConfData.title !== null">
                <emdPreview :id="'table-title-preview-' + generateShortUUID(blockId)" :content="ConfData.title">
                </emdPreview>
            </div>
            <table class="table-show-full">
                <tbody>
                    <tr v-for="rowIndex in ConfData.rowNum">
                        <td v-for="colIndex in ConfData.colNum">
                            <div class="cell" v-if="ConfData.tableData[rowIndex - 1][colIndex - 1]">
                                <div class="cell-data">
                                    <div
                                        v-if="ConfData.tableData[rowIndex - 1][colIndex - 1].itemType == TableItemType.Show">
                                        <div>
                                            <emdPreview
                                                :id="'cell-preview-' + ConfData.tableData[rowIndex - 1][colIndex - 1].id"
                                                :content="ConfData.tableData[rowIndex - 1][colIndex - 1].value.toString()">
                                            </emdPreview>
                                        </div>
                                    </div>
                                    <div v-else>
                                        <div v-if="ConfData.tableData[rowIndex - 1][colIndex - 1].autoData">
                                            <el-button>获取数据</el-button>
                                        </div>
                                        <div v-else>
                                            <div
                                                v-if="ConfData.tableData[rowIndex - 1][colIndex - 1].valueType == ValueType.String">
                                                <el-input></el-input>
                                            </div>
                                            <div v-else>
                                                <el-input-number controls-position="right"></el-input-number>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref, onBeforeMount } from 'vue';
import { BlockDetail, confData, referenceData, ValueType, TableItemType, getOutline, generateCellId } from './block';
import { ElMessage } from 'element-plus';
import { generateShortUUID } from '@/utils/GenrateUUID.js';
import { GetBlockDetail } from '@/apis/e-md/block/getBlockDetail.js';
import emdPreview from '../emdPreview/emdPreview.vue';

const props = defineProps({
    blockId: Number
})

const ConfData = ref<confData>({
    openConfDiv: false,
    openRefDiv: false,
    rowNum: 1,
    colNum: 0,
    title: '',
    tableData: [[]]
})

const blockDetail = ref<BlockDetail>({
    id: 0,
    parentId: 0,
    type: '',
    title: '',
    content: '',
    catalogue: '',
    confData: '',
    referenceData: '',
    dataTemplate: ''
})

const ReferenceData = ref<referenceData[][]>([[]])

const getBlockDetail = () => {
    GetBlockDetail(props.blockId).then(res => {
        if (res.state == 200) {
            blockDetail.value = res.data
            if (blockDetail.value.confData !== null && blockDetail.value.confData.length !== 0) {
                ConfData.value = JSON.parse(blockDetail.value.confData)
            }
            if (blockDetail.value.referenceData !== null && blockDetail.value.confData.length !== 0) {
                ReferenceData.value = JSON.parse(blockDetail.value.referenceData)
            }
        }
        else {
            ElMessage.error("数据加载失败")
        }
    })
}


onBeforeMount(() => {
    getBlockDetail()
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

.table-show table td {
    border: 1px solid #ccc;
    /* 为表头和单元格添加边框 */
    padding: 8px;
    /* 为表头和单元格添加内边距，使内容有一定的间距 */
    text-align: left;
    /* 文本左对齐 */
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


.cell {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.cell-data {
    flex: 1;
}

.cell-conf-item {
    display: flex;
    flex-direction: row;
    align-items: center;
}
</style>