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

    <el-drawer v-model="EditTheadDrawer" :show-close="false" :before-close="handleClose">
        <template #header="{ close, titleId, titleClass }">
            <div class="text-3xl">编辑列</div>
            <button @click="close"> X</button>
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
                <el-button @click="setColQuestion">
                    设置
                </el-button>
                <el-button @click="cleanColQuestion">
                    清除
                </el-button>
            </el-form-item>
            <div class="ml-4" v-if="payload.table.tableHeader[currentColIndex].question">
                <el-form-item label="问题">
                    <textpreview :content="payload.table.tableHeader[currentColIndex].question.question"></textpreview>
                </el-form-item>
                <el-form-item label="答案">
                    <textpreview :content="payload.table.tableHeader[currentColIndex].question.answer"></textpreview>
                </el-form-item>
            </div>
        </el-form>
    </el-drawer>

    <el-drawer v-model="EditCellDrawer" :show-close="false" :before-close="handleClose">
        <template #header="{ close, titleId, titleClass }">
            <div class="text-3xl">编辑单元格</div>
            <button @click="close"> X</button>
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

    <el-dialog v-model="qaListDialog">
        <el-table :data="props.payloadList" style="width: 100%">
            <el-table-column label="问答题">
                <template #default="scope">
                    <div v-if="scope.row.payload.type == BlockType.QA">
                        <div class="nomr flex flex-row items-center justify-between">
                            <textpreview :content="scope.row.payload.question.question"></textpreview>
                            <el-button type="primary" @click="setQuestion(scope.row.payload.question)">设置</el-button>
                        </div>
                    </div>

                </template>
            </el-table-column>
        </el-table>
    </el-dialog>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { BlockType, CELL, PAYLOADQo, QUESTION, THCELL, type PAYLOAD } from '../../../../ts/block';
import textpreview from '../../../emdV3/textPreview/textPreview.vue'
import { UPEMDLabQuestionTemplates } from '@/apis/emdQuestionTemplate/updateQuestionTemplate.js'
import { ElMessage } from 'element-plus';
const props = defineProps({
    id: Number,
    payload: Object,
    payloadList: Array
})
const EditTheadDrawer = ref(false)
const EditCellDrawer = ref(false)
const qaListDialog = ref(false)

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

const payloadList = ref<Array<PAYLOADQo>>()
const questionList = ref<Array<PAYLOADQo>>()

const handleClose = (done: () => void) => {
    const payloadQo = {
        id: props.id,
        parentId: null,
        payload: JSON.stringify(props.payload),
    }
    console.log(payloadQo)
    UPEMDLabQuestionTemplates(payloadQo).then(res => {
        if (res.state == 200) {
            done()
        }
        else {
            ElMessage.error(res.message)
        }
    })
}

const setColQuestion = () => {
    qaListDialog.value = true

}

const setQuestion = (question: QUESTION) => {
    if (currentColIndex.value) {
        payload.value.table.tableHeader[currentColIndex.value].question = question
        qaListDialog.value = false
    }

}

const cleanColQuestion = () => {
    if (currentColIndex.value) {
        payload.value.table.tableHeader[currentColIndex.value].question = null
    }
}
onMounted(() => {
    console.log('table')
    console.log(props.payloadList)
    payloadList.value = <any>props.payloadList
    questionList.value = payloadList.value.filter(question => question.payload.type == BlockType.QA)
    console.log(questionList.value)
})
</script>
<style scoped></style>