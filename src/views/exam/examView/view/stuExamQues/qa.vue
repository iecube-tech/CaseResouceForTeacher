<template>
    <div>
        <div class="mb-4">
            <div class="flex items-center mb-2">
                <span
                    class="w-8 h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center font-bold mr-3">
                    {{ index + 1 }}
                </span>
                <span class="font-bold text-gray-900 mr-3">简答题</span>
                <span class="text-sm font-bold ${typeColor}">{{ question.totalScore }}分</span>
            </div>
            <div class="text-gray-900 font-medium">{{ question.title }}</div>
        </div>

        <!-- 学生答案 -->
        <div class="student-answer p-4 rounded-lg mb-4">
            <div class="text-sm text-gray-600 mb-2">学生答案:</div>
            <div class="text-gray-800">{{ question.response }}</div>
        </div>

        <!-- 参考答案 -->
        <div class="correct-answer p-4 rounded-lg mb-4">
            <div class="text-sm text-gray-600 mb-2">参考答案:</div>
            <div class="text-gray-800">{{ question.answer }}</div>
        </div>

        <!-- AI评分理由 -->
        <div class="ai-score p-4 rounded-lg mb-4">
            <div class="text-sm text-gray-600 mb-2">AI评分理由:</div>
            <div v-if="question.payload" class="text-gray-800">{{ }}</div>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    question: {
        type: Object,
        required: true
    },
    index: Number
})
</script>
<style scoped>
.student-answer {
    background-color: #f0f9ff;
    border-left: 3px solid #3b82f6;
}

.correct-answer {
    background-color: #d1fae5;
    border-left: 3px solid #10b981;
}

.incorrect-answer {
    background-color: #fef2f2;
    border-left: 3px solid #ef4444;
}

.ai-score {
    background-color: #f3f4f6;
    border-left: 3px solid #8b5cf6;
}
</style>