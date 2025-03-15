<template>
    <div v-if="isReady" class="lab-proc-view">
        <div ref="labRef" class="section-list">
            <div v-for="i in showSection" class="section-item" :id="'lab-step-' + i">
                <div v-for="(block, j) in sectionVoList[i - 1].blockList" class="block-list">
                    <div class="block-item">
                        <contentSet v-if="block.type == BlockType.TEXT" :blockId="block.id"></contentSet>
                        <qaSet v-if="block.type == BlockType.QA" :blockId="block.id"></qaSet>
                        <choiceSet v-if="block.type == BlockType.CHOICE" :blockId="block.id"></choiceSet>
                        <tableSet v-if="block.type == BlockType.TABLE" :blockId="block.id"></tableSet>
                        <traceLineSet v-if="block.type == BlockType.TRACELINE" :blockId="block.id"></traceLineSet>
                    </div>
                </div>
                <div>
                    <el-button v-if="i > 1" @click="lastSetp(i)">上一步</el-button>
                    <el-button v-if="i < sectionVoList.length" @click="nextStep(i)">下一步</el-button>
                </div>
            </div>
        </div>

        <div style="width: 400px;" class="cell-set">
            <setPresetValue></setPresetValue>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { GetSectionVoListByLab } from '@/apis/e-md/section/getSectionVoListByLab.js'
import { ElMessage } from 'element-plus';
import { BlockType, CELL } from '../../block';
import contentSet from './block/contentSet.vue';
import qaSet from './block/qaSet.vue';
import choiceSet from './block/choiceSet.vue'
import tableSet from './block/tableSet.vue';
import traceLineSet from './block/tracelineSet.vue';
import setPresetValue from './setPresetValue.vue';

const route = useRoute();
const labId = ref();
const isReady = ref(false)
const showSection = ref(0)
const labRef = ref()
const sectionVoList = ref<any[]>();

const getSectionVoList = () => {
    return new Promise<void>((resolve, reject) => {
        GetSectionVoListByLab(labId.value).then(res => {
            if (res.state == 200) {
                sectionVoList.value = res.data
                isReady.value = true
                showSection.value = 1
                resolve()
            } else {
                ElMessage.error(res.message)
                reject()
            }
        })
    })
}

const nextStep = (currentStep: number) => {
    if (currentStep != showSection.value) {
        window.location.hash = 'lab-step-' + (currentStep + 1)
        return
    }
    if (showSection.value < sectionVoList.value.length) {
        showSection.value++
        setTimeout(() => {
            // labRef.value.scrollTop = labRef.value.scrollHeight;
            window.location.hash = 'lab-step-' + (currentStep + 1)
        }, 1200)
    }

}

const lastSetp = (currenStep: number) => {
    window.location.hash = 'lab-step-' + (currenStep - 1)
}

onMounted(() => {
    setTimeout(async () => {
        labId.value = route.query.labId
        await getSectionVoList()
    }, 10)
})

</script>
<style scoped>
.lab-proc-view {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
}

.section-list {
    flex: 1;
    height: 100%;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 30px 30px;
    scroll-behavior: smooth;
}

.section-item {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.block-list {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 30px 30px;
}

.block-item {
    width: 100%;
}

.cell-set {
    overflow-y: auto;
    padding: 20px;
}
</style>