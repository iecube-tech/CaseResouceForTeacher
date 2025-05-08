<template>
    <div class="ist-theam my-4 p-5 bg-gray-50 rounded-lg border-l-4 border-blue-500 scroll-mt-[80px]" tabindex="0">
        <textpreview :content="payload.question.question"></textpreview>
        <div class="scroll-mt-[80px]">
            <el-input class="w-full" type="textarea" :autosize="{ minRows: 4 }" placeholder="作答区域"
                v-model="payload.question.answer">
            </el-input>
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