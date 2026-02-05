<template>
    <div class="mb-4">
        <div class="text-gray-900 font-medium mb-2">{{ quesContent.title }}</div>
        <div class="flex flex-wrap mb-3">
            <span v-for="k in quesContent.knowledge" class="knowledge-tag">{{ k }}</span>
        </div>
        <div class="space-y-2 mt-3">
            <div v-for="option in quesContent.options" class="option-item"
                :class="option.label == quesContent.answer ? 'correct' : ''">
                <div class="flex items-center">
                    <span class="w-6 h-6 rounded-full flex items-center justify-center font-bold mr-3"
                        :class="option.label == quesContent.answer ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-600'">
                        {{ option.label }}
                    </span>
                    <span>{{ option.value }}</span>
                </div>
            </div>
        </div>
        <div class="mt-4 pt-3 pb-3 border-b border-gray-200">
            <div class="text-sm">
                <span class="text-gray-600">正确答案:</span>
                <span class="font-bold text-green-600 ml-2">{{ quesContent.answer }}</span>
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
    },
    index: Number
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

.option-item {
    padding: 12px;
    border: 1px solid #e5e7eb;
    border-radius: 8px;
    margin-bottom: 8px;
    transition: all 0.2s ease;
}

.option-item:hover {
    background-color: #f9fafb;
}

.option-item.correct {
    background-color: #d1fae5;
    border-color: #10b981;
}
</style>