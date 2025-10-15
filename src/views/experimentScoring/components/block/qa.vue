<template>
    <div class="ist-theam p-4 bg-gray-50 rounded-lg border-l-4 border-blue-500 scroll-mt-[80px]" tabindex="0">
        <textpreview :content="comp.payload.question.question"></textpreview>
        <div class="scroll-mt-[80px]">
            <el-input class="w-full" type="textarea" :autosize="{ minRows: 4 }" placeholder="作答区域" readonly
                v-model="comp.payload.stuAnswer.answer">
            </el-input>
        </div>
        <anallysisQa :comp="comp" v-if="!hiddenExtend"></anallysisQa>
        <score-read-over :component="comp" v-if="!hiddenExtend"/>
    </div>


</template>

<script setup lang="ts">
import textpreview from '@/components/textPreview.vue'
import anallysisQa from './analysisQa.vue'
import scoreReadOver from './scoreReadOver.vue'
const props = defineProps({
    index: Number,
    comp: Object,
})


const getStageText = (stage) => {
    let map = {
        0: 'before-class',
        1: 'experiment',
        2: 'after-class'
    }
    let text = map[stage] || '';
    return text;
}


onMounted(() => {
})

// 教师端问答题总分为0时隐藏分析
const hiddenExtend = computed(() => {
    let needPassScore = props.comp.needPassScore;
    let totalScore = props.comp.totalScore;
    
    let hiddenExtend = false;
    
    if(needPassScore == true && totalScore == 0){
        hiddenExtend = true;
    }
    
    return hiddenExtend;
})


</script>
<style scoped></style>