<template>
    <div class="mb-4">
        <div class="text-gray-900 font-medium mb-2">{{ quesContent.title }}</div>
        <div class="flex flex-wrap mb-3">
            <span v-for="k in quesContent.knowledge" class="knowledge-tag">{{ k }}</span>
        </div>
        <div class="mt-3 pt-3 pb-3 border-b border-gray-200">
            <div class="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <div class="text-sm text-gray-600 mb-2">参考答案:</div>
                <div class="text-gray-800">{{ quesContent.answer }}</div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
const pros = defineProps({
    quesContent: {
        type: Object,
        required: true
    }
})
</script>
<style scoped>
.knowledge-tag {
    display: inline-flex;
    align-items: center;
    padding: 2px 8px;
    border-radius: 12px;
    font-size: 12px;
    background-color: #e0e7ff;
    color: #3730a3;
    margin-right: 4px;
    margin-bottom: 4px;
}
</style>