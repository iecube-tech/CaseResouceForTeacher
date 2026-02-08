<template>
    <!-- 页面4：学生考试详情 -->
    <div class="mb-8">
        <div class="flex justify-between items-start">
            <div v-if="examStudent && examInfo">
                <h2 class="text-2xl font-bold text-gray-900 mb-2" id="student-exam-title">{{ examStudent.stuName }} -
                    {{ examInfo.examName }}</h2>
                <div class="flex items-center space-x-4 text-gray-600">
                    <span class="text-sm">学号: <span id="student-id">{{ examStudent.stuId }}</span></span>
                    <span class="text-sm">课程: <span id="student-course">{{ examInfo.projectName }}</span></span>
                    <span class="text-sm">提交时间: <span id="student-submit-time">{{
                        examStudent.endTime == null ? '-' : formatDate(examStudent.endTime) }}</span></span>
                    <span class="text-sm">用时: <span id="student-duration">
                            {{ examStudent.duration == null ? '-' : examStudent.duration }}分钟
                        </span></span>
                </div>
            </div>
            <div class="flex items-center space-x-3">
                <button id="back-to-students" @click="goBack()"
                    class="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg text-gray-700 bg-white hover:bg-gray-50">
                    <font-awesome-icon icon="fas fa-arrow-left" class=" mr-2"></font-awesome-icon>
                    返回学生列表
                </button>

                <!-- 修改导航按钮部分 -->
                <div class="nav-buttons flex items-center space-x-2 mr-4" v-if="esIdList">
                    <button id="prev-student-btn" @click="lastStudent()"
                        class="inline-flex items-center px-3 py-2 border border-gray-300 rounded-lg text-gray-700 bg-white hover:bg-gray-50">
                        <font-awesome-icon icon="fas fa-chevron-left " class="mr-2"></font-awesome-icon>
                        上一个
                    </button>
                    <button id="next-student-btn" @click="nextStudnet()"
                        class="inline-flex items-center px-3 py-2 border border-gray-300 rounded-lg text-gray-700 bg-white hover:bg-gray-50">
                        下一个
                        <font-awesome-icon icon="fas fa-chevron-right " class="ml-2"></font-awesome-icon>
                    </button>
                </div>


                <button id="save-scores" @click="saveScore()"
                    class="btn-gradient inline-flex items-center px-5 py-2 rounded-lg text-white font-medium">
                    <font-awesome-icon icon="fas fa-save" class="mr-2"></font-awesome-icon>
                    保存评分
                </button>
            </div>
        </div>
    </div>

    <!-- 分数摘要 -->
    <div v-if="examStudent" class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
            <div class="text-sm text-gray-500 mb-2">AI评分</div>
            <div class="text-3xl font-bold text-blue-600">{{ examStudent.aiScore }}</div>
        </div>
        <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
            <div class="text-sm text-gray-500 mb-2">教师评分</div>
            <div class="text-3xl font-bold text-green-600">{{ examStudent.score }}</div>
        </div>
        <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
            <div class="text-sm text-gray-500 mb-2">最终得分</div>
            <div class="text-3xl font-bold text-purple-600">{{ examStudent.score }}</div>
            <div class="text-sm text-gray-500 mt-2">满分: {{ examInfo.totalScore }}</div>
        </div>
    </div>

    <!-- 题目列表 -->
    <div v-if="questionList" class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mb-8"
        id="questions-container">
        <div v-for="(ques, index) in questionList" class="question-card p-6 border-b border-gray-200"
            :class="ques.quesType == 'CHOICE' ? 'single-choice' : ques.quesType == 'MultipleCHOICE' ? 'multiple-choice' : 'short-answer'">
            <choice v-if="ques.quesType == 'CHOICE'" :question="ques" :index="<number>index"></choice>
            <mchoice v-if="ques.quesType == 'MultipleCHOICE'" :question="ques" :index="<number>index"></mchoice>
            <qa v-if="ques.quesType == 'QA'" :question="ques" :index="<number>index" />
            <!-- 评分行 -->
            <div class="flex items-center justify-between mt-4 pt-4 border-t border-gray-200">
                <!-- AI评分 -->
                <div class="flex items-center space-x-2">
                    <span class="text-sm text-gray-600">AI评分:</span>
                    <span class="text-lg font-bold text-purple-600">{{ ques.aiScore == null ? 0 : ques.aiScore }}</span>
                    <span class="text-sm text-gray-500">/{{ ques.totalScore }}</span>
                </div>

                <!-- 教师评分 -->
                <div class="flex items-center space-x-2">
                    <span class="text-sm text-gray-600">教师评分:</span>
                    <div class="flex items-center space-x-1">
                        <input type="number" :min="0" :max="ques.totalScore" v-model="ques.score"
                            class="w-16 h-8 text-center border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            :data-question-id="ques.id" @change="scoreChange(esId, ques.id, ques.score)">
                        <span class="text-sm text-gray-500">/{{ ques.totalScore }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- 评分备注 -->
    <div v-if="examStudent" class="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
        <h3 class="text-lg font-bold text-gray-900 mb-4">评分备注</h3>
        <textarea
            class="w-full h-32 border border-gray-300 rounded-lg p-4 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="可在此处添加评分备注，如扣分理由、学生答题亮点等..." v-model="examStudent.remark">
        </textarea>
    </div>

    <!-- 操作按钮 -->
    <div class="flex justify-end">
        <button id="final-save" @click="saveScore()"
            class="btn-gradient inline-flex items-center px-8 py-3 rounded-lg text-white font-medium">
            <font-awesome-icon icon="fas fa-save" class=" mr-2"></font-awesome-icon>
            保存评分
        </button>
    </div>

    <!-- 成功提示 -->
    <div ref="successModal" class="fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-50 hidden">
        <div class="bg-white rounded-xl p-6 max-w-md w-full mx-4">
            <div class="text-center">
                <div class="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                    <font-awesome-icon icon="fas fa-check " class="text-green-500 text-2xl"></font-awesome-icon>
                </div>
                <h3 class="text-xl font-bold text-gray-900 mb-2" id="successTitle">评分已保存</h3>
                <p class="text-gray-600 mb-6">学生分数已成功更新</p>
                <button @click="closeSuccessModal()" class="w-full btn-gradient py-2.5 rounded-lg text-white">
                    确定
                </button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onBeforeMount, ref } from 'vue';
import { getExamStuPaper, updateQuesScore } from '@/apis/exam/examView';
import { useRoute } from 'vue-router';
import { formatDate, findElementIndex, findElementIndexStrict } from '@/utils/util';
import router from '@/router';
import qa from './stuExamQues/qa.vue';
import choice from './stuExamQues/choice.vue';
import mchoice from './stuExamQues/mchoice.vue';
import { debounce } from 'lodash'

const route = useRoute()
const esId = ref()
esId.value = <number><any>route.params.esId
const examId = <number><any>route.params.examId
const projectId = <number><any>route.params.projectId

const examInfo = ref()
const examStudent = ref()
const questionList = ref()
const esIdList = ref()

const successModal = ref()
const goBack = () => {
    router.push({
        name: <string>route.meta.parentName,
        params: {
            projectId: projectId,
            examId: examId
        }

    })
}

const nextStudnet = () => {
    let index = findElementIndexStrict(<number>esId.value, esIdList.value, null)
    console.log(index)
    if (index == -1) {
        return
    }
    if (index >= esIdList.value.length - 1) {
        ElMessage.warning("已经是最后一个了")
        return
    }
    esId.value = esIdList.value[index + 1]
    // initPage()
    router.push({
        name: 'stuExamDetail',
        params: {
            esId: esId.value
        }
    })
}

const lastStudent = () => {
    let index = findElementIndexStrict(<number>esId.value, esIdList.value, null)
    console.log(esId.value)
    console.log(esIdList.value)
    if (index == -1) {
        return
    }
    if (index <= 0) {
        ElMessage.warning("已经是第一个了")
        return
    }
    esId.value = esIdList.value[index - 1]
    // initPage()
    router.push({
        name: 'stuExamDetail',
        params: {
            esId: esId.value
        }
    })

}

const scoreChange = debounce((esId: number, quesId: string, quesScore: number) => {
    let tScore = 0
    for (let i = 0; i < questionList.value.length; i++) {
        tScore += questionList.value[i].score
    }
    examStudent.value.score = tScore
    updateQuesScore(esId, quesId, false, null, quesScore).then(res => {
        if (res.state !== 200) {
            ElMessage.error("更新分数错误")
        }
    })
}, 800)

const saveScore = debounce(() => {
    updateQuesScore(esId.value, null, true, examStudent.value.remark, null).then(res => {
        if (res.state == 200) {
            successModal.value.classList.remove('hidden')
        }
    })
}, 800)

const closeSuccessModal = () => {
    successModal.value.classList.add('hidden')
}

const initPage = () => {
    getExamStuPaper(esId.value).then(res => {
        if (res.state == 200) {
            examInfo.value = res.data.examInfo
            examStudent.value = res.data.examStudent
            questionList.value = res.data.examPapers
            esIdList.value = res.data.esIdList
        }
    })
}

onBeforeMount(() => {
    initPage()
})

// const 
</script>
<style scoped>
.btn-gradient {
    background: linear-gradient(to right, #3b82f6, #2563eb);
    transition: all 0.3s ease;
}

.btn-gradient:hover {
    background: linear-gradient(to right, #2563eb, #1d4ed8);
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(37, 99, 235, 0.2);
}

.question-card {
    border-left: 4px solid transparent;
    transition: all 0.2s ease;
}

.question-card.single-choice {
    border-left-color: #3b82f6;
}

.question-card.multiple-choice {
    border-left-color: #10b981;
}

.question-card.short-answer {
    border-left-color: #8b5cf6;
}
</style>