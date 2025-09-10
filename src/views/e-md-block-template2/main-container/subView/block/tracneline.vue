<template>
    <div class="ist-theam p-4 scroll-mt-[80px] rounded-lg border-l-4 border-blue-500">
        <table>
            <thead>
                <tr v-if="payload.table.tableName">
                    <th :colspan="payload.table.tableHeader.length">
                        <textpreview :content="payload.table.tableName"></textpreview>
                    </th>
                </tr>
                <tr>
                    <th v-for="(item, i) in payload.table.tableHeader" @click="editThead(i)">
                        <div class="flex flex-row ">
                            <textpreview :content="item.value"></textpreview>
                        </div>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(row, i) in payload.table.tableRow">
                    <td v-for="(cell, j) in payload.table.tableRow[i]" @click="editCell(i, j)">
                        <div v-if="cell.isNeedInput">
                            <div v-if="cell.isAutoGet">
                                <el-input v-model="payload.table.tableRow[i][j].stuVlaue" disabled>
                                    <template #append>
                                        <button class="text-blue-600">获取</button>
                                    </template>
                                </el-input>
                            </div>
                            <el-input v-else v-model="payload.table.tableRow[i][j].stuVlaue"></el-input>
                        </div>
                        <div v-else>
                            <textpreview :content="cell.value"></textpreview>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

    <el-drawer v-model="EditTheadDrawer" :show-close="false">
        <template #header>
            <div class="text-3xl">编辑列</div>
            <button @click="handleClose"> X</button>
        </template>
        <el-form>
            <el-form-item label="列名">
                <el-input v-model="payload.table.tableHeader[currentColIndex].value"></el-input>
            </el-form-item>
            <el-form-item label="列数据需要学生输入">
                <el-switch v-model="payload.table.tableHeader[currentColIndex].colIsNeedInput"
                    @change="colNeedInputChange(currentColIndex)"></el-switch>
            </el-form-item>
            <el-form-item v-if="payload.table.tableHeader[currentColIndex].colIsNeedInput" label="列数据自动获取">
                <el-switch v-model="payload.table.tableHeader[currentColIndex].colIsAutoGet"
                    @change="colNeedAutoGet(currentColIndex)"></el-switch>
            </el-form-item>
            <el-form-item label="列校验">
                <el-select v-model="payload.table.tableHeader[currentColIndex].question" clearable
                    value-key="id"
                    :value-on-clear="null" placeholder="选择相关题目">
                    <el-option v-for="item in questionList" :value="item" :label="item.name">
                    </el-option>
                </el-select>
            </el-form-item>
        </el-form>
    </el-drawer>

    <el-drawer v-model="EditCellDrawer" :show-close="false" :before-close="handleClose">
        <template #header>
            <div class="text-3xl">编辑单元格</div>
            <button @click="handleClose"> X</button>
        </template>
        <el-form>
            <el-form-item label="单元格数据需要学生输入">
                <el-switch v-model="payload.table.tableRow[currentColIndex][currentRowIndex].isNeedInput"></el-switch>
            </el-form-item>
            <el-form-item v-if="payload.table.tableRow[currentColIndex][currentRowIndex].isNeedInput"
                label="单元格数据需要自动获取数据">
                <el-switch v-model="payload.table.tableRow[currentColIndex][currentRowIndex].isAutoGet"></el-switch>
            </el-form-item>
            <el-form-item v-else label="单元格显示内容">
                <el-input v-model="payload.table.tableRow[currentColIndex][currentRowIndex].value"> </el-input>
            </el-form-item>
        </el-form>
    </el-drawer>
</template>

<script setup lang="ts">
import { BlockType, CELL, QUESTION, THCELL, type PAYLOAD } from '@/ts/block';
import textpreview from '@/components/textPreview.vue'
import {updateLabComponentTemplate} from '@/apis/embV4/index.ts'
import { cloneDeep } from "lodash";

const props = defineProps({
    labId: String,
    compData: Object,
    payload: Object,
    payloadList: Array
})

console.log('tracneline ---------------->')
console.log(props.payload)

const EditTheadDrawer = ref(false)
const EditCellDrawer = ref(false)

const currentColIndex = ref<number>()
const currentRowIndex = ref<number>()

const editThead = (index: number) => {
    currentColIndex.value = index
    EditTheadDrawer.value = true
}

const editCell = (colIndex: number, rowIndex: number) => {
    currentColIndex.value = colIndex
    currentRowIndex.value = rowIndex
    EditCellDrawer.value = true
}

const colNeedInputChange = (colIndex) => {
    for (let i = 0; i < payload.value.table.tableRow.length; i++) {
        for (let j = 0; j < payload.value.table.tableRow[i].length; j++) {
            if (j == colIndex) {
                payload.value.table.tableRow[i][j].isNeedInput = payload.value.table.tableHeader[j].colIsNeedInput
            }
        }
    }
}

const colNeedAutoGet = (colIndex) => {
    for (let i = 0; i < payload.value.table.tableRow.length; i++) {
        for (let j = 0; j < payload.value.table.tableRow[i].length; j++) {
            if (j == colIndex) {
                payload.value.table.tableRow[i][j].isAutoGet = payload.value.table.tableHeader[j].colIsAutoGet
            }
        }
    }
}

const payload = ref<PAYLOAD>(<any>props.payload)

const payloadList = ref()
const questionList = ref(props.payloadList)

/* onMounted(() => {
    payloadList.value = <any>props.payloadList
    questionList.value = payloadList.value.filter(question => question.type == BlockType.QA)
    console.log(questionList.value)
}) */

const emits = defineEmits(["updateCompData"]);

const closeAll = ()=>{
    EditTheadDrawer.value = false
    EditCellDrawer.value = false
}

const handleClose = () => {
    let req = cloneDeep(props.compData);
    req.id = req.componentId
    req.payload = JSON.stringify(payload.value);

    updateLabComponentTemplate(props.labId, req).then((res) => {
        if (res.state == 200) {
            emits("updateCompData");
            closeAll();
        } else {
            ElMessage.error(res.message);
        }
    });
};


</script>
<style scoped></style>