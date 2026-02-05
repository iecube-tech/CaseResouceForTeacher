<template>
    <div class="flex items-center justify-between mb-4">
        <h3 class="text-lg font-bold text-gray-900">题目预览</h3>
        <div class="text-sm text-gray-600">
            <span id="previewQuestionRange">
                预览 {{ (currentPage - 1) * pageSize + 1 }}-{{ currentPage == totalPage ? wholeQuesList.length
                    : (currentPage - 1) * pageSize + pageSize }} 题
            </span>
        </div>
    </div>
    <div class="preview-container">
        <div v-for="(question, index) in quesList">
            <div class="question-card single-choice bg-white rounded-lg border border-gray-200 p-5 mb-4">
                <div class="flex justify-between items-start mb-3">
                    <div class="flex items-center">
                        <span
                            class="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold mr-3">
                            {{ index + 1 + (currentPage - 1) * pageSize }}
                        </span>
                        <div>
                            <div class="flex items-center space-x-2">
                                <span class="font-medium text-gray-900">
                                    {{ question.quesType === 'CHOICE' ? '单选题' : question.quesType === 'MultipleCHOICE' ?
                                        '多选题' : '简答题' }}
                                </span>
                                <span class="difficulty-badge"
                                    :class="question.difficulty == 1 ? 'difficulty-easy' : question.difficulty == 2 ? 'difficulty-medium' : 'difficulty-hard'">
                                    {{ question.difficulty == 1 ? '易' : question.difficulty == 2 ? '中' : '难' }}
                                </span>
                                <span class="text-sm font-bold text-blue-600">{{ question.score }}分</span>
                                <span v-if="question.isRandom" class="random-rule-badge">
                                    {{ question.quesContent.length }}选{{ question.randomNum }}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-if="question.isRandom">
                    <div v-for="(quesContent, randomNum) in question.quesContent">
                        <choice v-if="question.quesType == 'CHOICE'" :quesContent="quesContent" :index="index + 1">
                        </choice>
                        <multipleChoice v-else-if="question.quesType == 'MultipleCHOICE'" :quesContent="quesContent"
                            :index="index + 1">
                        </multipleChoice>
                        <qa v-else-if="question.quesType == 'QA'" :quesContent="quesContent" :index="index + 1"></qa>
                    </div>
                </div>
                <div v-else>
                    <choice v-if="question.quesType == 'CHOICE'" :quesContent="question.quesContent" :index="index + 1">
                    </choice>
                    <multipleChoice v-else-if="question.quesType == 'MultipleCHOICE'"
                        :quesContent="question.quesContent" :index="index + 1">
                    </multipleChoice>
                    <qa v-else-if="question.quesType == 'QA'" :quesContent="question.quesContent" :index="index + 1">
                    </qa>
                </div>
            </div>
        </div>
    </div>
    <!-- 分页控制 -->
    <div class="mt-4 flex justify-center">
        <nav class="flex items-center space-x-2">
            <button id="prevPageBtn" class="p-2 text-gray-500 hover:text-gray-700 disabled:opacity-50"
                @click="lastPage()">
                <font-awesome-icon icon="fas fa-chevron-left"></font-awesome-icon>
            </button>
            <div class="flex space-x-1" id="pageNumbers">
                <button v-for="i in numList" class="px-3 py-1 rounded" @click="changeCurrentPage(i)"
                    :class="i == currentPage ? 'bg-blue-600 text-white' : 'text-gray-600 hover:text-gray-900'">
                    {{ i }}
                </button>
            </div>
            <button id="nextPageBtn" class="p-2 text-gray-500 hover:text-gray-700 disabled:opacity-50"
                @click="nextPage()">
                <font-awesome-icon icon="fas fa-chevron-right"></font-awesome-icon>
            </button>
        </nav>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import choice from './choice.vue'
import multipleChoice from './multipleChoice.vue'
import qa from './qa.vue'

const props = defineProps({
    questions: {
        type: Object,
        requeired: true
    },
    pageSize: {
        type: Number,
        requeired: false,
        default: 5
    }
})
const currentPage = ref(1)
const totalPage = ref(1)
const quesList = ref<any[]>([])
const wholeQuesList = ref<any[]>([])

// 计算属性：生成1到maxNum的连续数组
const numList = computed(() => {
    // 方案A：Array.from（简洁）
    return Array.from({ length: totalPage.value }, (_, i) => i + 1);
    // 方案B：Array.fill + map（兼容低版本ES）
    // return Array(maxNum.value).fill(0).map((_, i) => i + 1);
});

const changeCurrentPage = (i: number) => {
    if (i == currentPage.value) return
    currentPage.value = i
    quesList.value = wholeQuesList.value.slice((i - 1) * props.pageSize, (i - 1) * props.pageSize + props.pageSize)
}

const lastPage = () => {
    if (currentPage.value <= 1) return
    currentPage.value--
    quesList.value = wholeQuesList.value.slice((currentPage.value - 1) * props.pageSize, (currentPage.value - 1) * props.pageSize + props.pageSize)
}
const nextPage = () => {
    if (currentPage.value >= totalPage.value) return
    currentPage.value++
    quesList.value = wholeQuesList.value.slice((currentPage.value - 1) * props.pageSize, (currentPage.value - 1) * props.pageSize + props.pageSize)
}


onMounted(() => {
    console.log(props.pageSize)
    console.log(props.questions)
    for (const key in props.questions) {
        if (props.questions.hasOwnProperty(key)) {
            for (const q in props.questions[key]) {
                console.log(props.questions[key][q])
                wholeQuesList.value.push(props.questions[key][q])
            }
        }
    }
    quesList.value = wholeQuesList.value.slice(currentPage.value - 1, currentPage.value * props.pageSize)
    totalPage.value = Math.ceil(wholeQuesList.value.length / props.pageSize)
    console.log(quesList.value)
})


</script>
<style scoped>
.preview-container {
    max-height: 70vh;
    overflow-y: auto;
    padding-right: 8px;
}

.preview-container::-webkit-scrollbar {
    width: 6px;
}

.preview-container::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 3px;
}

.preview-container::-webkit-scrollbar-thumb {
    background: #c1c1c1;
    border-radius: 3px;
}

.preview-container::-webkit-scrollbar-thumb:hover {
    background: #a1a1a1;
}

.random-rule-badge {
    display: inline-flex;
    align-items: center;
    padding: 2px 8px;
    border-radius: 12px;
    font-size: 12px;
    background-color: #fce7f3;
    color: #9d174d;
    margin-left: 4px;
}

.difficulty-badge {
    display: inline-flex;
    align-items: center;
    padding: 2px 8px;
    border-radius: 12px;
    font-size: 12px;
    font-weight: 500;
}

.difficulty-easy {
    background-color: #d1fae5;
    color: #065f46;
}

.difficulty-medium {
    background-color: #fef3c7;
    color: #92400e;
}

.difficulty-hard {
    background-color: #fee2e2;
    color: #991b1b;
}
</style>