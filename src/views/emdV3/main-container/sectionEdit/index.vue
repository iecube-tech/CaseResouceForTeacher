<template>
    <div class="section">
        <div class="section-edit-parent">
            <div class="section-edit">
                <div class="section-block-list">
                    <div v-for="item in blockLisk" :key="item.blockId" class="section-block-item ist-theam">
                        <div class="flex justify-end items-center">
                            <Delete class="text-red-500 w-[20px] h-[20px]" @click="delBlock(item)"></Delete>
                        </div>
                        <div v-if="item.type === BlockType.TEXT">
                            <contentEdit :block-id="item.blockId" />
                        </div>
                        <div v-else-if="item.type === BlockType.QA">
                            <qaEdit :block-id="item.blockId" />
                        </div>
                        <div v-else-if="item.type === BlockType.TABLE">
                            <TableEdit :block-id="item.blockId" />
                        </div>
                        <div v-else-if="item.type === BlockType.TRACELINE">
                            <traceLineEdit :block-id="item.blockId" />
                        </div>
                        <div v-else-if="item.type === BlockType.CHOICE">
                            <choiceEdit :block-id="item.blockId" />
                        </div>
                        <div v-else-if="item.type === BlockType.MULTIPLECHOICE">
                            <multipleChoiceEdit :block-id="item.blockId"></multipleChoiceEdit>
                        </div>
                        <div v-else-if="item.type === BlockType.CIRCUIT">
                            <circuit :block-id="item.blockId" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="section-block-add-list">
                <button @click="createBlock(BlockType.TEXT, null)">内容</button>
                <button @click="selectBlock(BlockType.QA)">问答 </button>
                <button @click="selectBlock(BlockType.CHOICE)">单选题</button>
                <button @click="selectBlock(BlockType.MULTIPLECHOICE)">多选题</button>
                <button @click="selectBlock(BlockType.CIRCUIT)">电路检查</button>
                <button @click="selectBlock(BlockType.TABLE)">表格</button>
                <button @click="selectBlock(BlockType.TRACELINE)">表格绘图</button>
            </div>
        </div>

        <el-dialog v-model="selectBlockDialog">
            <el-table :data="showTemplateList" style="width: 100%">
                <el-table-column label="问题组件">
                    <template #default="scope">
                        <div
                            v-if="[BlockType.CHOICE, BlockType.QA, BlockType.MULTIPLECHOICE, BlockType.CIRCUIT].includes(scope.row.payload.type)">
                            <div class="nomr flex flex-row items-center justify-between">
                                <textPreview :content="scope.row.payload.question.question"></textPreview>
                                <el-button type="primary"
                                    @click="createBlock(scope.row.payload.type, scope.row.payload)">添加</el-button>
                            </div>
                        </div>
                        <div v-if="[BlockType.TABLE, BlockType.TRACELINE].includes(scope.row.payload.type)">
                            <div class="nomr flex flex-row items-center justify-between">
                                <textPreview :content="scope.row.payload.table.tableName"></textPreview>
                                <el-button type="primary"
                                    @click="createBlock(scope.row.payload.type, scope.row.payload)">添加</el-button>
                            </div>
                        </div>

                    </template>
                </el-table-column>
            </el-table>
        </el-dialog>
    </div>
</template>

<script setup lang="ts">
import contentEdit from './block/contentEdit.vue';
import qaEdit from './block/qa.vue';
import choiceEdit from './block/choice.vue';
import multipleChoiceEdit from './block/multipleChoice.vue';
import circuit from './block/circuit.vue';
import TableEdit from './block/table.vue';
import traceLineEdit from './block/tracneline.vue';
import { onMounted, ref, watch } from 'vue';
import { BlockVo, BlockQo, BlockType, PAYLOAD, PAYLOADQo } from '@/ts/block';
import router from '@/router';
import { CreateBlock } from '@/apis/e-md/block/createBlock.js';
import { getBlockVoList } from '@/apis/e-md/block/getBlockVoList.js';
import { GetBlockBySection } from '@/apis/e-md/block/getBlockBySection';
import { GetSectionByLabModel } from '@/apis/e-md/section/getSectionByLabModel';
import { useRoute } from 'vue-router';
import { emdV2Store } from '@/stores/emdV2Store';
import { ElMessage } from 'element-plus';
import '@/styles/stuTask/stuLab.css'
import { GETEMDLabQuestionTemplates } from '@/apis/emdQuestionTemplate/getQuestionTemplates.js';
import textPreview from '../../textPreview/textPreview.vue';

import { Delete } from '@element-plus/icons-vue'

const route = useRoute();

const labId = ref('')
const modelId = ref('')
const sectionId = ref('')

labId.value = route.params.labId
modelId.value = route.params.modelId; // 暂时没有用到
sectionId.value = route.params.sectionId;

const blockLisk = ref<BlockVo[]>()

const blockTemplateList = ref<Array<PAYLOADQo>>([])
const showTemplateList = ref<Array<PAYLOADQo>>([])
const selectBlockDialog = ref(false)
const selectedPayload = ref<PAYLOAD>()

const selectBlock = (type: string) => {
    // console.log(blockTemplateList.value)
    showTemplateList.value = blockTemplateList.value.filter(item => item.payload.type == type)
    selectBlockDialog.value = true
}

const createBlock = (type: string, payload: PAYLOAD | null) => {
    let newBlock = ref<BlockQo>({
        sectionId: sectionId.value,
        sort: null,
        type: '',
        payload: '',
    })
    newBlock.value.type = type;
    if (payload != null) {
        newBlock.value.payload = JSON.stringify(payload)
    }
    if (blockLisk.value.length == 0) {
        newBlock.value.sort = 1;
    } else {
        newBlock.value.sort = blockLisk.value[blockLisk.value.length - 1].sort + 1;
    }
    CreateBlock(newBlock.value).then(res => {
        if (res.state == 200) {
            blockLisk.value.push(res.data);
        } else {
            ElMessage.error(res.message);
        }
    })
}

const initBlockList = () => {
    getBlockVoList(sectionId.value).then(res => {
        if (res.state == 200) {
            blockLisk.value = res.data;
        }
    })
}

const initTemplates = () => {
    GETEMDLabQuestionTemplates(labId.value).then(res => {
        if (res.state == 200) {
            blockTemplateList.value = []
            res.data.forEach((item) => {
                const payloadQo = {
                    id: item.id,
                    parentId: item.parentId,
                    payload: JSON.parse(item.payload)
                }
                blockTemplateList.value.push(payloadQo)
            })
        } else {
            ElMessage.error(res.message)
        }
    })
}

onBeforeRouteUpdate((to, from) => {
    labId.value = to.params.labId
    modelId.value = to.params.modelId; // 暂时没有用到
    sectionId.value = to.params.sectionId;
    init()
})

const init = () => {
    initBlockList();
    initTemplates();
}

onMounted(() => {
    init()
})


import { DelBlock } from '@/apis/e-md/block/delBlock.js'
const delBlock = (block) => {
    block.id = block.blockId
    block.parentId = block.sectionId
    DelBlock(block).then(res => {
        if (res.state == 200) {
            ElMessage.success("删除成功");
            init()
        } else {
            ElMessage.error(res.message)
        }
    })
}

</script>
<style scoped>
.section {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    overflow: hidden;
}

.section-edit-parent {
    /* height: 100vh; */
    flex: 1;
    position: relative;
    padding: 10px 10px;
}

.section-edit {
    height: calc(100vh - 100px);
    margin-bottom: 50px;
    overflow-y: auto;
}

.section-block-priview {
    width: 400px;
}

.section-block-list {
    display: flex;
    flex-direction: column;
    background-color: #fff;
    padding-left: 20px;
    padding-right: 40px;
}

.section-block-item {
    margin-top: 20px;
}

.section-block-add-list {
    position: absolute;
    bottom: 0;
    left: 30px;
    width: calc(100% - 90px);
    background-color: #F0F2F5;
    padding: 10px;
    box-shadow: 0 -4px 10px rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: center;
    align-items: center;
}

.section-block-add-list button {
    margin: 0 10px;
    padding: 10px 20px;
    background-color: #409EFF;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.section-block-add-list button:hover {
    background-color: #66b1ff;
}
</style>