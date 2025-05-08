<template>
    <div class="ist-theam my-4 p-5 bg-gray-50 rounded-lg border-l-4 border-blue-500 scroll-mt-[80px]" tabindex="0">
        <textpreview :content="payload.question.question"></textpreview>
        <div class="flex flex-col">
            <el-checkbox-group class="flex flex-col items-start scroll-mt-[80px]"
                v-model="payload.question.answerOption">
                <el-checkbox class=" rounded hover:bg-gray-100" v-for="item in payload.question.options"
                    :label="item.label">
                    <div class="flex items-center nomr ">
                        <span class="mr-2">{{ item.label }}.</span>
                        <textpreview class="scroll-mt-[80px]" :content="item.value"></textpreview>
                    </div>
                </el-checkbox>
            </el-checkbox-group>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { type PAYLOAD } from '../../block';
import textpreview from '../../../emdV3/textPreview/textPreview.vue'
const props = defineProps({
    payload: Object
})

const payload = ref<PAYLOAD>(<any>props.payload)

</script>
<style scoped></style>