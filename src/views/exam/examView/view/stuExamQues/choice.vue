<template>
    <div>
        <div class="mb-4">
            <div class="flex items-center mb-2">
                <span
                    class="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold mr-3">
                    {{ index + 1 }}
                </span>
                <span class="font-bold text-gray-900 mr-3">单选题</span>
                <span class="text-sm font-bold ${typeColor}">{{ question.totalScore }}分</span>
            </div>
            <div class="text-gray-900 font-medium">{{ question.title }}</div>
        </div>

        <!-- 选项 -->
        <div v-if="question.options" class="space-y-2 mb-4">
            <div v-for="item in question.options">
                <div v-if="isArrayEqualLoose(splitByComma(item.label), splitByComma(question.answer)) && isArrayEqualLoose(splitByComma(item.label), splitByComma(question.response))"
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
                <div v-else-if="isArrayEqualLoose(splitByComma(item.label), splitByComma(question.answer)) && !isArrayEqualLoose(splitByComma(item.label), splitByComma(question.response))"
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
                <div v-else-if="!isArrayEqualLoose(splitByComma(item.label), splitByComma(question.answer)) && isArrayEqualLoose(splitByComma(item.label), splitByComma(question.response))"
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

        <!-- 正确答案和解析 -->
        <div class="bg-gray-50 rounded-lg p-4 mb-4">
            <div class="flex items-center mb-2">
                <span class="text-sm text-gray-600 mr-3">学生答案:</span>
                <span class="font-bold">{{ question.response == null ? '-' : question.response }}</span>
            </div>
            <div class="flex items-center mb-2">
                <span class="text-sm text-gray-600 mr-3">正确答案:</span>
                <span class="font-bold text-green-600">{{ question.answer }}</span>
            </div>
            <div v-if="question.payload" class="text-sm text-gray-600">
                <span class="font-medium">解析:</span>

            </div>
            <div v-if="question.payload">

            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import textpreview from '@/components/textPreview.vue'
import { splitByComma, isArrayEqualLoose } from '@/utils/util'

const props = defineProps({
    question: {
        type: Object,
        required: true
    },
    index: Number
})

const isMultiple = false

</script>
<style scoped></style>