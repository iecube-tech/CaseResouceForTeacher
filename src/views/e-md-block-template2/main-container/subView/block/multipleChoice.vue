<template>
    <div
        class="ist-theam p-4 bg-gray-50 rounded-lg border-l-4 border-blue-500 scroll-mt-[80px]"
        tabindex="0"
    >
        <textpreview :content="question"></textpreview>
        <div class="flex flex-col">
            <el-checkbox-group
                class="flex flex-col items-start scroll-mt-[80px]"
                v-model="payload.question.answerOption"
            >
                <el-checkbox
                    class="rounded hover:bg-gray-100"
                    v-for="item in payload.question.options"
                    :label="item.label"
                >
                    <div class="flex items-center nomr">
                        <span class="mr-2">{{ item.label }}.</span>
                        <textpreview
                            class="scroll-mt-[80px]"
                            :content="item.value"
                        ></textpreview>
                    </div>
                </el-checkbox>
            </el-checkbox-group>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import textpreview from "@/components/textPreview.vue";
const props = defineProps({
    index: Number,
    payload: Object,
});

const question = computed(()=> {
    let prefix = ''
    if(props.index > 0){
        prefix = props.index + '.'
    }
    let text = prefix + props.payload.question.question
    return text;
})

</script>
<style scoped></style>
