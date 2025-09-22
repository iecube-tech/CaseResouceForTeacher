<template>
    <div class="p-4 bg-gray-50 rounded-lg border-l-4 border-blue-500">
        <textpreview :content="question"></textpreview>
        <!-- <el-radio-group v-model="comp.payload.stuAnswer.answer" class="flex flex-col !items-start mt-2">
            <el-radio class="rounded mt-2" v-for="item in comp.payload.question.options" :label="item.label"
                :value="item.label">
                <div class="flex items-center justify-start">
                    <span class="mr-2">{{ item.label }}.</span>
                    <textpreview :content="item.value"></textpreview>
                </div>
            </el-radio>
        </el-radio-group> -->
        <div class="space-y-2 mb-3">
            <div v-for="item in comp.payload.question.options">
                <div v-if="item.label == comp.payload.question.answer && item.label == comp.payload.stuAnswer.answer"
                    class="p-2 border rounded bg-green-50 border-green-200">
                    <div class="flex items-center space-x-2">
                        <font-awesome-icon icon="fas fa-user-check" class="text-blue-500 mr-1"></font-awesome-icon>
                        <font-awesome-icon icon="fas fa-check" class="text-green-500"></font-awesome-icon>
                        <div class="flex flex-row items-center">
                            <span class="mr-2">{{ item.label }}.</span>
                            <textpreview :content="item.value"></textpreview>
                        </div>
                        <!-- <span>正确答案-选了</span> -->
                    </div>
                </div>
                <div v-else-if="item.label == comp.payload.question.answer && item.label != comp.payload.stuAnswer.answer"
                    class="p-2 border rounded bg-yellow-50 border-yellow-200">
                    <div class="flex items-center space-x-2">
                        <font-awesome-icon icon="fas fa-check" class="text-green-500"></font-awesome-icon>
                        <div class="flex flex-row items-center">
                            <span class="mr-2">{{ item.label }}.</span>
                            <textpreview :content="item.value"></textpreview>
                        </div>
                        <!-- <span>正确答案-没选</span> -->
                    </div>
                </div>
                <div v-else-if="item.label != comp.payload.question.answer && item.label == comp.payload.stuAnswer.answer"
                    class="p-2 border rounded bg-red-50 border-red-200">
                    <div class="flex items-center space-x-2">
                        <font-awesome-icon icon="fas fa-user-check" class="text-blue-500 mr-1"></font-awesome-icon>
                        <font-awesome-icon icon="fas fa-times" class="text-red-500"></font-awesome-icon>
                        <div class="flex flex-row items-center">
                            <span class="mr-2">{{ item.label }}.</span>
                            <textpreview :content="item.value"></textpreview>
                        </div>
                        <!-- <span>错误答案-选了</span> -->
                    </div>
                </div>
                <div v-else class="p-2 border rounded bg-white border-gray-200">
                    <div class="flex items-center space-x-2">
                        <span class="mr-2">{{ item.label }}.</span>
                        <textpreview :content="item.value"></textpreview>
                        <!-- <span>错误答案-没选</span> -->
                    </div>
                </div>
            </div>
        </div>
        <analysis :comp="comp"></analysis>
        <score-read-over :component="comp" />
    </div>


</template>

<script setup lang="ts">
import textpreview from '@/components/textPreview.vue'
import analysis from './analysis.vue'
import scoreReadOver from './scoreReadOver.vue'

const props = defineProps({
    index: Number,
    comp: Object,
    sectionDisabled: Boolean,
})

// console.log('props.comp', props.comp.payload)

const question = computed(() => {
    let prefix = ''
    if (props.index > 0) {
        prefix = props.index + '.'
    }
    let text = prefix + props.comp.payload.question.question
    return text;
})

</script>
<style scoped></style>