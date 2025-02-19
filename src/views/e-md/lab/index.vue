<template>
    <div class="lab-proc-view">
        <div class="section-list">
            <div v-for="(sectionVo, i) in sectionVoList" class="section-item">
                <div v-for="(block, i) in sectionVo.blockList" class="block-list">
                    <div class="block-item">
                        <contentRead v-if="block.type == BlockType.TEXT" :blockId="block.id"></contentRead>
                        <tableRead v-if="block.type == BlockType.TABLE" :blockId="block.id"></tableRead>
                    </div>
                </div>
            </div>
        </div>

        <div style="width: 400px;">
            <RouterView />
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { RouterView, useRoute } from 'vue-router';
import router from '@/router';
import { GetSectionVoListByLab } from '@/apis/e-md/section/getSectionVoListByLab.js'
import { ElMessage } from 'element-plus';
import { BlockType } from '../block/block';
import contentRead from '../block/contentRead.vue';
import tableRead from '../block/tableRead.vue';

const route = useRoute();
const labId = ref();

const sectionVoList = ref();
const getSectionVoList = () => {
    GetSectionVoListByLab(labId.value).then(res => {
        if (res.state == 200) {
            sectionVoList.value = res.data
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
        labId.value = route.query.id
        getSectionVoList()
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
}

.block-item {
    width: 100%;
}
</style>