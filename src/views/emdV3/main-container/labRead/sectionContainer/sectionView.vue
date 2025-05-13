<template>
    <div class="section-item mb-6" v-if="blockVoList">
        <div v-for="(item, i) in blockVoList" class="block-container ">
            <contentRead v-if="item.type == BlockType.TEXT" :blockId="item.id" />
            <qaRead v-if="item.type == BlockType.QA" :blockId="item.id" />
            <choiceRead v-if="item.type == BlockType.CHOICE" :blockId="item.id" />
            <multipleChoice v-if="item.type == BlockType.CHOICE" :blockId="item.id" />
            <tableRead v-if="item.type == BlockType.TABLE" :blockId="item.id" />
            <traceLineRead v-if="item.type == BlockType.TRACELINE" :blockId="item.id" />
            <!-- {{ item }} -->
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import { ElMessage } from 'element-plus';
import { type sectionVo, type BlockVo, BlockType } from '../../../block';
import contentRead from '../block/contentRead.vue';
import qaRead from '../block/qa.vue';
import choiceRead from '../block/choice.vue'
import multipleChoice from '../block/multipleChoice.vue'
import tableRead from '../block/table.vue';
import traceLineRead from '../block/tracneline.vue'
const props = defineProps({
    section: Object
})
const section = ref<sectionVo>()
const blockVoList = ref<any[]>([])

onMounted(() => {
    section.value = <sectionVo>props.section
    if (section.value && section.value.blockList) {
        blockVoList.value = section.value.blockList
    } else {
        ElMessage.error("数据加载失败")
    }
})
</script>