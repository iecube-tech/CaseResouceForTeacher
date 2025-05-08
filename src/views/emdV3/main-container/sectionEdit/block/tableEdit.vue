<template>
    <div v-if="isReady" class="table-edit" @blur="saveCompose">
        <div ref="tableConf" class="table-conf">
            <div class="table-conf-item" style="display: flex; flex-direction: row; justify-content: center;">
                <h3>表格配置</h3>
            </div>
            <div class="table-conf-item">
                <el-input class="content-input" type="textarea" autosize v-model="payload.question"
                    @change="blockContentChange" placeholder="输入表格的问题,支持mnarkdown语法,非必须"></el-input>
            </div>

            <div class="table-conf-item">
                <el-input class="table-tilte-input" v-model="payload.table.tableName"
                    placeholder="表名,支持mnarkdown语法,可不填">

                </el-input>
            </div>
        </div>
        <div class="table-conf-fold">
            <el-button v-if="confData.openConfDiv" link :icon="ArrowUpBold" @click="configDivClose"></el-button>
            <el-button v-else link :icon="ArrowDownBold" @click="configDivOpen"></el-button>
        </div>

        <div class="table-show">
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
                                <el-input v-if="confData.openConfDiv" v-model="item.colName"></el-input>
                                <TextPreview v-else :id="item.id" :content="item.colName" />
                            </div>
                            <div v-if="confData.openConfDiv">
                                <el-popover placement="top" :width="400" trigger="click">
                                    <template #reference>
                                        <el-button link :icon="Edit" type="primary"></el-button>
                                    </template>
                                    <el-form label-width="200">
                                        <el-form-item label="列设置" />
                                        <el-form-item label="本列需要学生完善：">
                                            <el-switch v-model="item.colConf.isInput" active-text="打开"
                                                inactive-text="关闭" @change="colUpdate(i)" />
                                        </el-form-item>
                                        <el-form-item label="单元格数据类型：">
                                            <el-select v-model="item.colConf.type" placeholder="选择本列数据类型"
                                                style="width: 100px" :disabled="!item.colConf.isInput"
                                                @change="colUpdate(i)">
                                                <el-option v-for="(o, j) in item.colConf.typeEnum"
                                                    :key="item.id + '-' + i + '-type' + j" :label="o" :value="o" />
                                            </el-select>
                                        </el-form-item>
                                        <el-form-item label="本列自动获取设备数据：">
                                            <el-switch v-model="item.colConf.autoGet" active-text="打开"
                                                inactive-text="关闭" :disabled="!item.colConf.isInput"
                                                @change="colUpdate(i)" />
                                        </el-form-item>
                                        <el-form-item label="本列学生数据检查：">
                                            <el-switch v-model="item.colConf.needCheck" active-text="检查"
                                                :disabled="!item.colConf.isInput" inactive-text="不检查"
                                                @change="colUpdate(i)" />
                                        </el-form-item>
                                    </el-form>
                                </el-popover>
                                <el-button link :icon="ArrowDownBold" type="primary" @click="addCell(i)"></el-button>
                                <el-button link :icon="ArrowUpBold" type="primary" @click="popCell(i)"></el-button>
                                <el-popconfirm confirm-button-text="确定" cancel-button-text="取消" :icon="InfoFilled"
                                    icon-color="#626AEF" title="该操作将删除该列，确定吗？" @confirm="removeCol(i)" @cancel="">
                                    <template #reference>
                                        <el-button link :icon="RemoveFilled" type="danger"></el-button>
                                    </template>
                                </el-popconfirm>

                            </div>

                        </div>
                    </td>
                    <td v-if="confData.openConfDiv">
                        <el-button link type="danger" @click="addCol()">新增列</el-button>
                    </td>
                </thead>
                <tbody v-if="confData.openConfDiv">
                    <td v-for="(col, i) in payload.table.tableColnum">
                        <tr v-for="item in col" class="border-black">
                            <div class="w-full h-20 p-2 flex flex-col justify-center">
                                <el-input v-if="!item.isInput" v-model="item.presetValue[item.type]"></el-input>
                                <span v-else> <br></span>
                            </div>
                        </tr>
                    </td>
                </tbody>
                <tbody v-else>
                    <td v-for="(col, i) in payload.table.tableColnum">
                        <tr v-for="item in col" class="border-black">
                            <div class="w-full h-20 p-2 flex flex-col justify-center">
                                <el-input v-if="item.isInput && !item.autoGet"></el-input>
                                <el-button v-else-if="item.isInput && item.autoGet" size="small">获取数据 </el-button>
                                <TextPreview v-else :id="item.id"
                                    :content="item.presetValue[item.type] == '' || item.presetValue[item.type] == null ? '<br />' : item.presetValue[item.type]" />
                            </div>
                        </tr>
                    </td>
                </tbody>
            </table>
        </div>

    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { BlockDetail, PAYLOAD, InitTablePayload, getCell, getOutline, getThCell } from '../../../block';
import { ElMessage } from 'element-plus';
import { GetBlockDetail } from '@/apis/e-md/block/getBlockDetail.js';
import { UpdateBlockDetail } from '@/apis/e-md/block/updateBlockDetail.js';
import { Minus, Plus, More, Setting, ArrowUpBold, ArrowDownBold, Edit, CirclePlus, RemoveFilled, InfoFilled, Top, Bottom } from '@element-plus/icons-vue';
import TextPreview from '../../../textPreview/textPreview.vue'

const props = defineProps({
    blockId: Number,
})

const isReady = ref(false)
const blockDetail = ref<BlockDetail>()

const confData = ref({
    openConfDiv: false,
})

const payload = ref<PAYLOAD>(InitTablePayload())

const saveCompose = () => {
    // 处理payload
    blockDetail.value.confData = JSON.stringify(confData.value)
    blockDetail.value.payload = JSON.stringify(payload.value)
    UpdateBlockDetail(blockDetail.value).then(res => {
        if (res.state != 200) {
            ElMessage.error("保存数据失败 " + res.message)
        }
    })
}

const getBlockDetail = () => {
    return new Promise<void>((resolve, reject) => {
        GetBlockDetail(props.blockId).then(res => {
            if (res.state == 200) {
                blockDetail.value = res.data
                if (blockDetail.value.confData !== null && blockDetail.value.confData.length !== 0) {
                    confData.value = JSON.parse(blockDetail.value.confData)
                }
                if (blockDetail.value.payload != null && blockDetail.value.payload.length !== 0) {
                    payload.value = JSON.parse(blockDetail.value.payload)
                    console.log(payload.value)
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

const blockContentChange = () => {
    blockDetail.value.catalogue = JSON.stringify(getOutline(payload.value.question))
}

const addCell = (colNumber: number) => {
    let newCell = getCell()
    newCell.isInput = payload.value.table.tableHeader[colNumber].colConf.isInput
    newCell.autoGet = payload.value.table.tableHeader[colNumber].colConf.autoGet
    newCell.needCheck = payload.value.table.tableHeader[colNumber].colConf.needCheck
    newCell.type = payload.value.table.tableHeader[colNumber].colConf.type
    payload.value.table.tableColnum[colNumber].push(getCell())
    console.log(payload.value)
}

const popCell = (colNumber: number) => {
    payload.value.table.tableColnum[colNumber].pop()
    console.log(payload.value)
}

const addCol = () => {
    payload.value.table.tableHeader.push(getThCell())
    payload.value.table.tableColnum.push([])
}

const removeCol = (colNumber: number) => {
    payload.value.table.tableHeader.splice(colNumber, 1)
    payload.value.table.tableColnum.splice(colNumber, 1)
}

const colUpdate = (colNumber: number) => {
    if (payload.value.table.tableHeader[colNumber].colConf.isInput) {
        for (let i = 0; i < payload.value.table.tableColnum[colNumber].length; i++) {
            payload.value.table.tableColnum[colNumber][i].isInput = payload.value.table.tableHeader[colNumber].colConf.isInput
            payload.value.table.tableColnum[colNumber][i].autoGet = payload.value.table.tableHeader[colNumber].colConf.autoGet
            payload.value.table.tableColnum[colNumber][i].needCheck = payload.value.table.tableHeader[colNumber].colConf.needCheck
            payload.value.table.tableColnum[colNumber][i].type = payload.value.table.tableHeader[colNumber].colConf.type
        }
    } else {
        for (let i = 0; i < payload.value.table.tableColnum[colNumber].length; i++) {
            payload.value.table.tableColnum[colNumber][i].isInput = false
            payload.value.table.tableColnum[colNumber][i].autoGet = false
            payload.value.table.tableColnum[colNumber][i].needCheck = false
            payload.value.table.tableColnum[colNumber][i].type = 'string'
        }
    }

}

const tableConf = ref()

const initConfigDiv = () => {
    if (confData.value.openConfDiv) {
        const height = tableConf.value.scrollHeight;
        // console.log(height)
        tableConf.value.style.maxHeight = `${height}px`;
        tableConf.value.style.opacity = '1';
    } else {
        tableConf.value.style.maxHeight = '0'
        tableConf.value.style.opacity = '0'
    }

}
const configDivClose = () => {
    tableConf.value.style.maxHeight = '0';
    tableConf.value.style.opacity = '0';
    confData.value.openConfDiv = false
    // 保存 confData
    saveCompose()
}
const configDivOpen = () => {
    const height = tableConf.value.scrollHeight;
    tableConf.value.style.maxHeight = '0';
    tableConf.value.style.opacity = '0';
    setTimeout(() => {
        tableConf.value.style.maxHeight = `${height}px`;
        tableConf.value.style.opacity = '1';
        confData.value.openConfDiv = true
    }, 10);
}

onMounted(() => {
    setTimeout(async () => {
        await getBlockDetail()
        initConfigDiv()
    }, 500)
})
</script>

<style scoped>
.table-edit {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
}

.table-conf {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    /* 设置过渡效果 */
    transition: max-height 0.5s ease-in-out, opacity 0.5s ease-in-out;
}

.table-conf-item {
    padding: 20px 20px;
}

.table-conf-fold {
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: var(--el-color-primary-light-9);
}

.table-conf-fold button {
    width: 100%;
}

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
    border-left: 1px solid #000;
    border-right: 1px solid #000;
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
    border-bottom: 1px solid #000;
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

.cell-data {
    flex: 1;
}
</style>