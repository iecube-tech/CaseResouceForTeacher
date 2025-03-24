<template>
    <div v-if="setCell && Cell" @focus="handleFocus()" @mouseleave="handleBlur()" tabindex="0" style="height: 100%;">
        <div style="width: 100%; display: flex; flex-direction: row; justify-content: end;">
            <el-button type="danger" link :icon="CloseBold" @click="close()"></el-button>
        </div>
        <el-form label-position="top" label-width="200">
            <el-form-item label="数据类型：">
                <div>
                    {{ Cell.type }}
                </div>
            </el-form-item>
            <el-form-item label="答案：">
                <el-input v-if="['string', 'number'].includes(Cell.type)" v-model="Cell.presetValue[Cell.type]"
                    type="textarea" autosize></el-input>
                <div v-else>
                    {{ Cell.presetValue[Cell.type] }}
                </div>
            </el-form-item>
            <el-form-item label="是否需要校验学生数据：">
                <el-switch v-model="Cell.needCheck"></el-switch>
            </el-form-item>
            <div v-if="Cell.needCheck">
                <el-form-item label="AI判断：">
                    <el-switch v-model="Cell.checkRule[Cell.type].useAiCheck.value"
                        :disabled="!Cell.checkRule[Cell.type].useAiCheck.canEdit"></el-switch>
                </el-form-item>
                <div v-if="Cell.type == 'string'">
                    <el-form-item label="相似度：">
                        <el-input-number v-model="Cell.checkRule.string.similarity.value" :min="0" :max="1" :step="0.1"
                            size="small" :disabled="!Cell.checkRule.string.useAiCheck.canEdit"></el-input-number>
                    </el-form-item>
                </div>
                <div v-else-if="Cell.type == 'number'">
                    <el-form-item label="最大值：">
                        <el-input-number v-model="Cell.checkRule.number.max.value" size="small"
                            :disabled="!Cell.checkRule.number.max.canEdit"></el-input-number>
                    </el-form-item>
                    <el-form-item label="最小值：">
                        <el-input-number v-model="Cell.checkRule.number.max.value" size="small"
                            :disabled="!Cell.checkRule.number.max.canEdit"></el-input-number>
                    </el-form-item>
                    <el-form-item label="误差：">
                        <el-input-number v-model="Cell.checkRule.number.relativeError.value" :min="0" :max="1"
                            size="small" :step="0.1"
                            :disabled="!Cell.checkRule.number.relativeError.canEdit"></el-input-number>
                    </el-form-item>
                </div>
            </div>
        </el-form>
        <div style="display: flex; flex-direction: row; justify-content: center;">
            <el-button type="primary" @click="saveCompose">设置</el-button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import { BlockDetail, CELL, PAYLOAD } from '../../block';
import { emdV2Store } from '@/stores/emdV2Store';
import { UpdateBlockDetail } from '@/apis/e-md/block/updateBlockDetail.js';
import { ElMessage } from 'element-plus';
import { CloseBold } from '@element-plus/icons-vue';

const emdStore = emdV2Store()
const blockDetail = ref<BlockDetail | null>()
const payload = ref<PAYLOAD | null>()
const setCell = ref(false)
const Cell = ref<CELL | null>()

const close = () => {
    emdStore.setCurrentSetBlockCell(null)
    emdStore.setCurrentSetBlockPayload(null)
    emdStore.setCurrentSetBlockBlockDetail(null)
}

watch(() => emdStore.currentSetBlockCell, (newVal) => {
    if (newVal != null) {
        console.log(newVal)
        blockDetail.value = emdStore.currentSetBlockBlockDetail
        payload.value = emdStore.currentSetBlockPayload
        Cell.value = emdStore.currentSetBlockCell
        if (blockDetail.value != null && payload.value != null && Cell.value != null) {
            setCell.value = true
        } else {
            setCell.value = false
        }
    } else {
        setCell.value = false
    }
})

const handleFocus = () => {
    window.location.hash = "block" + blockDetail.value.id
    document.getElementById(Cell.value.id).style.border = "2px solid #ff0000"
}
const handleBlur = () => {
    history.replaceState({}, document.title, window.location.href);
    const url = window.location.href.split('#')[0];
    history.replaceState({}, document.title, url);
    document.getElementById(Cell.value.id).style.border = 'none'
}

const saveCompose = () => {
    // 处理payload
    blockDetail.value.payload = JSON.stringify(payload.value)
    UpdateBlockDetail(blockDetail.value).then(res => {
        if (res.state == 200) {
            ElMessage.success("设置成功")
        } else {
            ElMessage.error("保存数据失败 " + res.message)
        }
    })
}
</script>
<style scoped></style>