<template>
    <div class="lab-proc-view">
        <div class="model-list">
            <div v-for="(model, i) in labModelVoList" class="section-list">
                <div v-for="(sectionVo, j) in model.sectionVoList" class="section-item">
                    <div v-for="(block, k) in sectionVo.blockList" class="block-list"
                        :id="'section-' + generateShortUUID(sectionVo.id)">
                        <div class="block-item">
                            <contentRead v-if="block.type == BlockType.TEXT" :blockId="block.id"></contentRead>
                            <qaRead v-if="block.type == BlockType.QA" :blockId="block.id"></qaRead>
                            <choiceRead v-if="block.type == BlockType.CHOICE" :blockId="block.id"></choiceRead>
                            <tableRead v-if="block.type == BlockType.TABLE" :blockId="block.id"></tableRead>
                            <traceLineRead v-if="block.type == BlockType.TRACELINE" :blockId="block.id"></traceLineRead>
                        </div>
                        <!-- {{ block }} -->
                    </div>
                </div>
            </div>
        </div>

        <div style="width: 400px;">
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { RouterView, useRoute } from 'vue-router';
import router from '@/router';
import { GetLabModelVoList } from '@/apis/e-md/labModel/getLabModelVoList';
import { ElMessage } from 'element-plus';
import { BlockType } from '../../block';
import contentRead from './block/contentRead.vue';
import qaRead from './block/qaRead.vue';
import choiceRead from './block/choiceRead.vue'
import tableRead from './block/tableRead.vue';
import traceLineRead from './block/tracelineRead.vue';
import { generateShortUUID } from '@/utils/GenrateUUID';

const route = useRoute();
const labId = ref();

// const sectionVoList = ref();
const labModelVoList = ref()
const getLabModelVoList = () => {
    GetLabModelVoList(labId.value).then(res => {
        if (res.state == 200) {
            labModelVoList.value = res.data
        } else {
            ElMessage.error(res.message)
        }
    })
}

const buttonClick = () => {
    router.push({ name: 'elaborateMarkdownLabRight', query: { id: 2 } });
}

onMounted(() => {
    setTimeout(() => {
        labId.value = route.query.labId
        getLabModelVoList()
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
</style>