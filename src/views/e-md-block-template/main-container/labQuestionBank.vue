<template>
    <div class="mx-4 px-4">
        <div v-for="item in payloadQoList">
            <choice v-if="item.payload.type == BlockType.CHOICE" :payload="item.payload"></choice>
            <multipleChoice v-if="item.payload.type == BlockType.MULTIPLECHOICE" :payload="item.payload">
            </multipleChoice>
            <qa v-if="item.payload.type == BlockType.QA" :payload="item.payload"></qa>
            <emdtable v-if="item.payload.type == BlockType.TABLE" :payload="item.payload" :payloadList="payloadQoList">
            </emdtable>
        </div>
        <div>
            <el-button type="primary" style="margin-left: 16px" @click="openQuestion">
                open
            </el-button>

            <el-button type="primary" style="margin-left: 16px" @click="openTable">
                表格
            </el-button>
        </div>

    </div>

    <el-drawer v-model="NewPayloadDrawer" :show-close="false">
        <template #header="{ close, titleId, titleClass }">
            <div class="text-3xl">题目设计</div>
            <button @click="close"> X</button>
        </template>
        <editPayload v-if="newPayload" :payload="newPayload" @submit="payloadEditDone"></editPayload>
    </el-drawer>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import choice from './block/choice.vue'
import multipleChoice from './block/multipleChoice.vue';
import qa from './block/qa.vue';
import emdtable from './block/table.vue';
import editPayload from './editPayload.vue';
import { GetNewPayload, GetNewTablePayload, getNewThCell, getNewCell, BlockType, type PAYLOAD, type PAYLOADQo } from '../block';
import '@/styles/stuTask/stuLab.css'
import { ADDEMDLabQuestionTemplate } from '@/apis/emdQuestionTemplate/addQuestionTemlate.js';
import { GETEMDLabQuestionTemplates } from '@/apis/emdQuestionTemplate/getQuestionTemplates.js'
import { ElMessage } from 'element-plus';

const route = useRoute()
const labId = ref()
const NewPayloadDrawer = ref(false)

const payloadQoList = ref<Array<PAYLOADQo>>([])

const newPayload = ref()

const openQuestion = () => {
    newPayload.value = GetNewPayload()
    NewPayloadDrawer.value = true

}

const openTable = () => {
    newPayload.value = GetNewTablePayload()
    NewPayloadDrawer.value = true
}

const payloadEditDone = () => {
    if (newPayload.value.table) {
        // 根据行列数生成表格数据
        for (let i = 0; i < newPayload.value.table.col; i++) {
            let newThCell = JSON.parse(JSON.stringify(getNewThCell()))
            newPayload.value.table.tableHeader.push(newThCell)
        }
        for (let i = 0; i < newPayload.value.table.row; i++) {
            newPayload.value.table.tableRow.push([])
            for (let j = 0; j < newPayload.value.table.col; j++) {
                let newCell = JSON.parse(JSON.stringify(getNewCell()))
                newPayload.value.table.tableRow[i].push(newCell)
            }
        }

    }
    const payloadQo = {
        id: null,
        parentId: labId.value,
        payload: JSON.stringify(newPayload.value)
    }

    ADDEMDLabQuestionTemplate(payloadQo).then(res => {
        if (res.state == 200) {
            const payloadQo = {
                id: res.data.id,
                parentId: res.data.parentId,
                payload: JSON.parse(res.data.payload)
            }
            payloadQoList.value.push(payloadQo)
            newPayload.value = null
            NewPayloadDrawer.value = false
        } else {
            ElMessage.error(res.data)
        }
    })
}

const getQuestionTemplist = () => {
    GETEMDLabQuestionTemplates(labId.value).then(res => {
        if (res.state == 200) {
            payloadQoList.value = []
            res.data.forEach((item) => {
                const payloadQo = {
                    id: item.id,
                    parentId: item.parentId,
                    payload: JSON.parse(item.payload)
                }
                payloadQoList.value.push(payloadQo)
            })
        } else {
            ElMessage.error(res.message)
        }
    })
}

onMounted(() => {
    setTimeout(() => {
        labId.value = route.params.labId
        getQuestionTemplist()
    }, 10)
})
</script>
<style scoped></style>