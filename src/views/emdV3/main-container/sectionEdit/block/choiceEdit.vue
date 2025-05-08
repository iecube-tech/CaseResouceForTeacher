<template>
    <div v-if="isReady" class="qaEdit" @blur="saveCompose">
        <div ref="qaConf" class="qa-conf">
            <div class="qa-conf-item" style="display: flex; flex-direction: row; justify-content: center;">
                <h3>选择题配置</h3>
            </div>
            <div class="qa-conf-item">
                <el-input class="content-input" type="textarea" autosize v-model="payload.question"
                    @change="blockContentChange" placeholder="输入选择题的问题,支持mnarkdown语法,必须"></el-input>
            </div>

            <div class="qa-conf-item">
                <span>选项：</span>
                <el-tag v-for="(tag, index) in payload.options" :key="blockId + '-option-' + index" closable
                    type="parmary" @close="removeOption(index)" style="margin-right: 10px; margin-bottom: 10px;">
                    <TextPreview :id="'option-' + blockId + '-option-' + index" :content="tag" />
                </el-tag>
                <el-button type="primary" size="small" @click="addOptionDialog = true">添加</el-button>
            </div>

            <div class="qa-conf-item">
                <el-switch v-model="payload.isMultiple" active-text="多选" inactive-text="单选" />
            </div>

            <el-dialog v-model="addOptionDialog" title="添加选项" @close="addOptionDialogClose" width="30%">
                <el-form-item label="选项：">
                    <el-input v-model="newOption" placeholder="输入选项内容，支持markdown"></el-input>
                </el-form-item>
                <template #footer>
                    <div class="dialog-footer">
                        <el-button @click="addOptionDialog = false">取消</el-button>
                        <el-button type="primary" @click="addOption()">
                            确定
                        </el-button>
                    </div>
                </template>
            </el-dialog>

        </div>
        <div class="qa-conf-fold">
            <el-button v-if="confData.openConfDiv" link :icon="ArrowUpBold" @click="configDivClose"></el-button>
            <el-button v-else link :icon="ArrowDownBold" @click="configDivOpen"></el-button>
        </div>
        <div class="choice-privew">
            <TextPreview :id="generateShortUUID(blockId)"
                :content="payload.question == '' ? '请设置问题' : payload.question">
            </TextPreview>
            <div v-if="payload.isMultiple">
                <el-checkbox-group>
                    <el-checkbox v-for="(item, i) in payload.options" :key="'check-' + blockId + '-' + i" :label="item">
                        <TextPreview :id="'option-' + blockId + '-check-' + i" :content="item" />
                    </el-checkbox>
                </el-checkbox-group>
            </div>
            <div v-else>
                <el-radio-group>
                    <el-radio v-for="(item, i) in payload.options" :label="item">
                        <TextPreview :id="'option-' + blockId + '-radio-' + i" :content="item" />
                    </el-radio>
                </el-radio-group>
            </div>
        </div>
    </div>

</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import { BlockDetail, PAYLOAD, InitPayload, generateShortUUID, getOutline, } from '../../../block';
import { ElMessage } from 'element-plus';
import { GetBlockDetail } from '@/apis/e-md/block/getBlockDetail.js';
import { UpdateBlockDetail } from '@/apis/e-md/block/updateBlockDetail.js';
import { ArrowUpBold, ArrowDownBold } from '@element-plus/icons-vue';
import TextPreview from '../../../textPreview/textPreview.vue'

const props = defineProps({
    blockId: Number,
})
const isReady = ref(false)

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

const confData = ref({
    openConfDiv: false,
})

const payload = ref<PAYLOAD>(InitPayload("array"))

console.log(payload.value)

const addOptionDialog = ref(false)

const newOption = ref('')

const addOption = () => {
    if (newOption.value == null || newOption.value == '') {
        ElMessage.warning("请输入内容")
        return
    }
    payload.value.options.push(newOption.value)
    newOption.value = ''
    addOptionDialog.value = false
}

const removeOption = (index) => {
    payload.value.options.splice(index, 1)
}


const addOptionDialogClose = () => {
    newOption.value = ''
}

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

const qaConf = ref()
const initConfigDiv = () => {
    if (confData.value.openConfDiv) {
        const height = qaConf.value.scrollHeight;
        // console.log(height)
        qaConf.value.style.maxHeight = `${height}px`;
        qaConf.value.style.opacity = '1';
    } else {
        qaConf.value.style.maxHeight = '0'
        qaConf.value.style.opacity = '0'
    }

}

const configDivClose = () => {
    qaConf.value.style.maxHeight = '0';
    qaConf.value.style.opacity = '0';
    confData.value.openConfDiv = false
    // 保存 confData
    saveCompose()
}

const configDivOpen = () => {
    const height = qaConf.value.scrollHeight;
    qaConf.value.style.maxHeight = '0';
    qaConf.value.style.opacity = '0';
    setTimeout(() => {
        qaConf.value.style.maxHeight = `${height}px`;
        qaConf.value.style.opacity = '1';
        confData.value.openConfDiv = true
    }, 10);
}

watch(() => qaConf, (newVal) => {
    if (newVal) {

    }
})

onMounted(() => {
    setTimeout(async () => {
        await getBlockDetail()
        initConfigDiv()
    }, 500)
})
</script>
<style scoped>
.qa-conf {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    /* 设置过渡效果 */
    transition: max-height 0.5s ease-in-out, opacity 0.5s ease-in-out;
}

.qa-conf-item {
    padding: 20px 20px;
}

.qa-conf-fold {
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: var(--el-color-primary-light-9);
    margin-top: 20px;
}

.qa-conf-fold button {
    width: 100%;
}
</style>