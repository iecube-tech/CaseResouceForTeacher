<template>
    <div v-if="isReady" class="lab-proc-view">
        <div class="model-list">
            <div v-for="(model, i) in labModelVoList" class="section-list">
                <div v-for="(sectionVo, j) in model.sectionVoList" class="section-item">
                    <div v-for="(block, k) in sectionVo.blockList" class="block-list">
                        <div class="block-item">
                            <contentSet v-if="block.type == BlockType.TEXT" :blockId="block.id"></contentSet>
                            <qaSet v-if="block.type == BlockType.QA" :blockId="block.id"></qaSet>
                            <choiceSet v-if="block.type == BlockType.CHOICE" :blockId="block.id"></choiceSet>
                            <tableSet v-if="block.type == BlockType.TABLE" :blockId="block.id"></tableSet>
                            <traceLineSet v-if="block.type == BlockType.TRACELINE" :blockId="block.id"></traceLineSet>
                        </div>
                    </div>
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
import { GetLabModelVoList } from '@/apis/e-md/labModel/getLabModelVoList';
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
const sectionVoList = ref<any[]>();
const labModelVoList = ref()

const getlabModelVoList = () => {
    return new Promise<void>((resolve, reject) => {
        GetLabModelVoList(labId.value).then(res => {
            if (res.state == 200) {
                labModelVoList.value = res.data
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
        await getlabModelVoList()
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

.model-list {
    flex: 1;
    height: 100%;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.section-list {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
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