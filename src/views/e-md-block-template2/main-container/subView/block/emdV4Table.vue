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
                        <div class="flex flex-row">
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
                                <el-input v-model="payload.table.tableRow[i][j].stuVlaue
                                    " disabled>
                                    <template #append>
                                        <button class="text-blue-600">
                                            获取
                                        </button>
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
        <template #header>
            <div class="text-3xl">编辑列</div>
            <button @click="handleClose">X</button>
        </template>
        <el-form>
            <el-form-item label="列名">
                <el-input v-model="payload.table.tableHeader[currentColIndex].value"></el-input>
            </el-form-item>
            <el-form-item label="列数据需要学生输入">
                <el-switch v-model="payload.table.tableHeader[currentColIndex].colIsNeedInput
                    " @change="colNeedInputChange(currentColIndex)"></el-switch>
            </el-form-item>
            <el-form-item v-if="payload.table.tableHeader[currentColIndex].colIsNeedInput" label="列数据自动获取">
                <el-switch v-model="payload.table.tableHeader[currentColIndex].colIsAutoGet"
                 @change="colNeedAutoGet(currentColIndex)"></el-switch>
            </el-form-item>
            <el-form-item label="列校验">
                <el-button @click="setColQuestion"> 设置 </el-button>
                <el-button @click="cleanColQuestion"> 清除 </el-button>
            </el-form-item>
            <div class="ml-4" v-if="payload.table.tableHeader[currentColIndex].question">
                <el-form-item label="问题">
                    <textpreview :content="payload.table.tableHeader[currentColIndex].question
                        .question
                        "></textpreview>
                </el-form-item>
                <el-form-item label="答案">
                    <div>
                        [{{
                            payload.table.tableHeader[currentColIndex].question
                                .min
                        }},
                        {{
                            payload.table.tableHeader[currentColIndex].question
                                .max
                        }}]
                    </div>
                </el-form-item>
            </div>
        </el-form>
    </el-drawer>

    <el-drawer v-model="EditCellDrawer" :show-close="false" :before-close="handleClose">
        <template #header>
            <div class="text-3xl">编辑单元格</div>
            <button @click="handleClose">X</button>
        </template>
        <el-form>
            <el-form-item label="单元格数据需要学生输入">
                <el-switch v-model="payload.table.tableRow[currentColIndex][currentRowIndex]
                    .isNeedInput
                    "></el-switch>
            </el-form-item>
            <el-form-item v-if="
                payload.table.tableRow[currentColIndex][currentRowIndex]
                    .isNeedInput
            " label="单元格数据需要自动获取数据">
                <el-switch v-model="payload.table.tableRow[currentColIndex][currentRowIndex]
                    .isAutoGet
                    "></el-switch>
            </el-form-item>
            <el-form-item v-else label="单元格显示内容">
                <el-input v-model="payload.table.tableRow[currentColIndex][currentRowIndex]
                    .value
                    ">
                </el-input>
            </el-form-item>
        </el-form>
    </el-drawer>

    <el-dialog v-model="qaListDialog">
        <el-table :data="payloadList" style="width: 100%">
            <el-table-column label="值在区间内">
                <template #default="scope">
                    
                        <div class="nomr flex flex-row items-center justify-between">
                            <textpreview :content="scope.row.payload.question.question"></textpreview>
                            <el-button type="primary" @click="setQuestion(scope.row.payload.question)">设置</el-button>
                        </div>
                </template>
            </el-table-column>
        </el-table>
    </el-dialog>
</template>

<script setup lang="ts">
import {
    BlockType,
    PAYLOADQo,
    QUESTION,
    THCELL,
    type PAYLOAD,
} from "@/ts/block.ts";
import textpreview from "@/components/textPreview.vue";
import { updateLabComponentTemplate } from "@/apis/embV4/index";

import { cloneDeep } from "lodash";

const props = defineProps({
    labId: String,
    compData: Object,
    payload: Object,
    payloadList: Array,
});
const payload = ref(props.payload);

const payloadList = ref([])
payloadList.value = cloneDeep(props.payloadList);

payloadList.value.forEach(_=>{
    try{
        _.payload = JSON.parse(_.payload)
    }catch(e){
        console.log(e)
    }
})

// console.log("table------------->");
// console.log(payload.value)

const EditTheadDrawer = ref(false);
const EditCellDrawer = ref(false);
const qaListDialog = ref(false);

const closeAll = () => {
    EditTheadDrawer.value = false;
    EditCellDrawer.value = false;
    qaListDialog.value = false;

};

const currentColIndex = ref(0);
const currentRowIndex = ref(0);

const editThead = (index: number) => {
    currentColIndex.value = index;
    EditTheadDrawer.value = true;
};

const editCell = (colIndex: number, rowIndex: number) => {
    currentColIndex.value = colIndex;
    currentRowIndex.value = rowIndex;
    EditCellDrawer.value = true;
};

const colNeedInputChange = (colIndex) => {
    for (let i = 0; i < payload.value.table.tableRow.length; i++) {
        for (let j = 0; j < payload.value.table.tableRow[i].length; j++) {
            if (j == colIndex) {
                payload.value.table.tableRow[i][j].isNeedInput =
                    payload.value.table.tableHeader[j].colIsNeedInput;
            }
        }
    }
};

const colNeedAutoGet = (colIndex) => {
    for (let i = 0; i < payload.value.table.tableRow.length; i++) {
        for (let j = 0; j < payload.value.table.tableRow[i].length; j++) {
            if (j == colIndex) {
                payload.value.table.tableRow[i][j].isAutoGet =
                    payload.value.table.tableHeader[j].colIsAutoGet;
            }
        }
    }
};

const emits = defineEmits(["updateCompData"]);

const handleClose = () => {
    let req = cloneDeep(props.compData);
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

const setColQuestion = () => {
    qaListDialog.value = true;
};

const setQuestion = (question: QUESTION) => {
    console.log(question)
    if (currentColIndex.value != null) {
        payload.value.table.tableHeader[currentColIndex.value].question =
            question;
        qaListDialog.value = false;
    }
};

const cleanColQuestion = () => {
    if (currentColIndex.value != null) {
        payload.value.table.tableHeader[currentColIndex.value].question = null;
    }
};
</script>
<style scoped></style>
