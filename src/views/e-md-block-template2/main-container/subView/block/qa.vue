<template>
    <div class="ist-theam p-4 bg-gray-50 rounded-lg border-l-4 border-blue-500 scroll-mt-[80px]" tabindex="0">
        <textpreview :content="payload.question.question"></textpreview>
        <div class="scroll-mt-[80px]">
            <el-input class="w-full" type="textarea" :autosize="{ minRows: 4 }" placeholder="作答区域" readonly
                v-model="payload.question.answer">
            </el-input>
        </div>
    </div>
</template>

<script setup lang="ts">
import textpreview from '@/components/textPreview.vue'
const props = defineProps({
    payload: Object
})

</script>
<style scoped></style>