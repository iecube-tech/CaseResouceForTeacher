<template>
    <div class="mb-8">
        <div class="flex justify-between items-start">
            <div v-if="course">
                <h2 class="text-2xl font-bold text-gray-900 mb-2" id="course-title">{{ course.projectName }}</h2>
                <div class="flex items-center space-x-4 text-gray-600">
                    <span class="text-sm">学期: <span id="course-semester">
                            {{ formatSeason(course.semester) }}
                        </span></span>
                </div>
            </div>
            <button id="back-to-courses" @click="goBack()"
                class="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg text-gray-700 bg-white hover:bg-gray-50">
                <font-awesome-icon icon="fas fa-arrow-left" class="mr-2"></font-awesome-icon>
                返回课程
            </button>
        </div>
    </div>

    <!-- 考试列表 -->
    <div v-if="courseExamMap" class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <!-- 标签页 -->
        <div class="border-b border-gray-200">
            <div class="flex">
                <button ref="btnActive" class="tab-button active" data-tab="active"
                    @click="changeTab(btnActive, tabActive)">进行中</button>
                <button ref="btuUpcoming" class="tab-button" data-tab="upcoming"
                    @click="changeTab(btuUpcoming, tabUpcoming)">即将开始</button>
                <button ref="btnCompleted" class="tab-button" data-tab="completed"
                    @click="changeTab(btnCompleted, tabCompleted)">已结束</button>
            </div>
        </div>

        <!-- 进行中的考试 -->
        <div ref="tabActive" class="tab-content p-6">
            <div v-if="courseExamMap['doing'].length > 0" class="mb-6">
                <!-- 考试1 -->
                <div v-for="(exam, i) in courseExamMap['doing']"
                    class="exam-item bg-white border border-gray-200 rounded-lg p-5 mb-4 hover:border-blue-300 cursor-pointer"
                    :data-exam-id="exam.examId">
                    <div class="flex justify-between items-start">
                        <div class="flex-1">
                            <div class="flex items-center mb-2">
                                <h4 class="text-lg font-bold text-gray-900 mr-3">{{ exam.examName }}</h4>
                                <span class="exam-info-badge">{{ exam.duration }}分钟</span>
                                <span class="exam-info-badge ml-2">总分: {{ exam.totalScore }}</span>
                            </div>

                            <div class="flex items-center text-gray-600 text-sm mb-4">
                                <font-awesome-icon icon="far fa-calendar" class=" mr-1"></font-awesome-icon>
                                <span class="mr-4">开始: {{ formatDate(exam.startTime) }}</span>
                                <font-awesome-icon icon="far fa-clock" class=" mr-1"></font-awesome-icon>
                                <span>结束: {{ formatDate(exam.endTime) }}</span>
                            </div>

                            <div class="flex items-center">
                                <div class="mr-6">
                                    <div class="text-sm text-gray-500">已提交</div>
                                    <div class="text-2xl font-bold text-green-600">
                                        {{ exam.doneNum }}/{{ exam.notStartedNum }}
                                    </div>
                                </div>
                                <div class="mr-6">
                                    <div class="text-sm text-gray-500">进行中</div>
                                    <div class="text-2xl font-bold text-blue-600">
                                        {{ exam.doingNum }}/{{ exam.notStartedNum }}
                                    </div>
                                </div>
                                <div>
                                    <div class="text-sm text-gray-500">未开始</div>
                                    <div class="text-2xl font-bold text-gray-600">
                                        {{ exam.notStartedNum }}/{{ exam.notStartedNum }}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="text-right">
                            <div class="text-sm text-gray-500 mb-2">平均分</div>
                            <div class="text-3xl font-bold text-blue-600">{{ exam.avgScore }}</div>
                            <button class="mt-3 btn-gradient text-white px-5 py-2 rounded-lg font-medium"
                                @click="goExamStuList(exam.examId)">
                                查看学生列表
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div v-else class="text-center py-10 text-gray-500">
                <font-awesome-icon icon="fas fa-calendar-alt" class="text-4xl mb-4"></font-awesome-icon>
                <h3 class="text-lg font-medium mb-2">暂无进行中的考试</h3>
            </div>
        </div>

        <!-- 即将开始的考试 -->
        <div ref="tabUpcoming" class="tab-content p-6 hidden">
            <!-- 即将开始的考试1 -->
            <div v-if="courseExamMap['willStart'].length > 0" class="mb-6">
                <div v-for="(exam, i) in courseExamMap['willStart']"
                    class="exam-item bg-white border border-gray-200 rounded-lg p-5 mb-4 hover:border-blue-300 cursor-pointer"
                    :data-exam-id="exam.examId">
                    <div class="flex justify-between items-start">
                        <div class="flex-1">
                            <div class="flex items-center mb-2">
                                <h4 class="text-lg font-bold text-gray-900 mr-3">{{ exam.examName }}</h4>
                                <span class="exam-info-badge">{{ exam.duration }}分钟</span>
                                <span class="exam-info-badge ml-2">总分: {{ exam.totalScore }}</span>
                                <span class="exam-info-badge ml-2 bg-yellow-100 text-yellow-800">即将开始</span>
                            </div>

                            <div class="flex items-center text-gray-600 text-sm mb-4">
                                <font-awesome-icon icon="far fa-calendar" class=" mr-1"></font-awesome-icon>
                                <span class="mr-4">开始: {{ formatDate(exam.startTime) }}</span>
                                <font-awesome-icon icon="far fa-clock" class=" mr-1"></font-awesome-icon>
                                <span>结束: {{ formatDate(exam.endTime) }}</span>
                            </div>

                            <div class="flex items-center">
                                <div class="mr-6">
                                    <div class="text-sm text-gray-500">距开始</div>
                                    <div class="text-2xl font-bold text-yellow-600">
                                        {{
                                            calculateTimeDuration(new Date(), new Date(exam.startTime))
                                        }}天
                                    </div>
                                </div>
                                <div class="mr-6">
                                    <div class="text-sm text-gray-500">考试时长</div>
                                    <div class="text-2xl font-bold text-blue-600">{{ exam.duration }}分钟</div>
                                </div>
                                <div>
                                    <div class="text-sm text-gray-500">学生人数</div>
                                    <div class="text-2xl font-bold text-gray-700">{{ exam.notStartedNum }}</div>
                                </div>
                            </div>
                        </div>

                        <div class="text-right">
                            <div class="text-sm text-gray-500 mb-2">状态</div>
                            <div class="text-lg font-bold text-yellow-600 mb-2">未开始</div>
                            <button @click="deleteExam(exam.examId)"
                                class="delete-exam-btn mt-3 bg-red-50 hover:bg-red-100 text-red-600 border border-red-200 px-5 py-2 rounded-lg font-medium transition-all duration-200">
                                <font-awesome-icon icon="fas fa-trash-alt" class="mr-2"></font-awesome-icon>
                                删除考试
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div v-else class="text-center py-10 text-gray-500">
                <font-awesome-icon icon="fas fa-calendar-alt" class="text-4xl mb-4"></font-awesome-icon>
                <h3 class="text-lg font-medium mb-2">暂无即将开始的考试</h3>
            </div>
        </div>

        <!-- 已结束的考试 -->
        <div ref="tabCompleted" class="tab-content p-6 hidden">
            <div v-if="courseExamMap['done'].length > 0" class="mb-6">
                <div v-for="(exam, i) in courseExamMap['done']"
                    class="exam-item bg-white border border-gray-200 rounded-lg p-5 mb-4 hover:border-blue-300 cursor-pointer"
                    :data-exam-id="exam.examId">
                    <div class="flex justify-between items-start">
                        <div class="flex-1">
                            <div class="flex items-center mb-2">
                                <h4 class="text-lg font-bold text-gray-900 mr-3">{{ exam.examName }}</h4>
                                <span class="exam-info-badge">{{ exam.duration }}分钟</span>
                                <span class="exam-info-badge ml-2">总分: {{ exam.totalScore }}</span>
                            </div>

                            <div class="flex items-center text-gray-600 text-sm mb-4">
                                <font-awesome-icon icon="far fa-calendar" class=" mr-1"></font-awesome-icon>
                                <span class="mr-4">开始: {{ formatDate(exam.startTime) }}</span>
                                <font-awesome-icon icon="far fa-clock" class="mr-1"></font-awesome-icon>
                                <span>结束: {{ formatDate(exam.endTime) }}</span>
                            </div>

                            <div class="flex items-center">
                                <div class="mr-6">
                                    <div class="text-sm text-gray-500">已提交</div>
                                    <div class="text-2xl font-bold text-green-600">
                                        {{ exam.doneNum }}/{{ exam.notStartedNum }}
                                    </div>
                                </div>
                                <div class="mr-6">
                                    <div class="text-sm text-gray-500">平均分</div>
                                    <div class="text-2xl font-bold text-blue-600">
                                        {{ exam.avgScore }}
                                    </div>
                                </div>
                                <div>
                                    <div class="text-sm text-gray-500">最高分</div>
                                    <div class="text-2xl font-bold text-green-600">{{ exam.maxScore }}</div>
                                </div>
                            </div>
                        </div>

                        <div class="text-right">
                            <div class="text-sm text-gray-500 mb-2">及格率</div>
                            <div class="text-3xl font-bold text-green-600">{{ exam.passRate }}%</div>
                            <button class="mt-3 btn-gradient text-white px-5 py-2 rounded-lg font-medium"
                                @click="goExamStuList(exam.examId)">
                                查看学生列表
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div v-else class="text-center py-10 text-gray-500">
                <font-awesome-icon icon="fas fa-calendar-alt" class="text-4xl mb-4"></font-awesome-icon>
                <h3 class="text-lg font-medium mb-2">暂无已结束的考试</h3>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onBeforeMount, ref } from 'vue';
import { getExamCourse, getCourseExamList, delExam } from '@/apis/exam/examView';
import { useExamViewStore } from '@/stores/examViewStore'
import { useRoute } from 'vue-router';
import { formatSeason, formatDate } from '@/utils/util'
import router from '@/router';
const route = useRoute()
const courseId = <number><any>route.params.projectId

const examViewStore = useExamViewStore()
const course = ref()
course.value = examViewStore.currentExamCourse

const goBack = () => {
    router.push({
        name: 'examCourseList'
    })
}

const courseExamMap = ref()

const btnActive = ref()
const btuUpcoming = ref()
const btnCompleted = ref()
const tabActive = ref()
const tabUpcoming = ref()
const tabCompleted = ref()

const removeActive = () => {
    btnActive.value.classList.remove('active')
    btuUpcoming.value.classList.remove('active')
    btnCompleted.value.classList.remove('active')
    tabActive.value.classList.add('hidden')
    tabUpcoming.value.classList.add('hidden')
    tabCompleted.value.classList.add('hidden')
}

const changeTab = (btnRef, tabRef) => {
    removeActive()
    btnRef.classList.add('active')
    tabRef.classList.remove('hidden')
}

const goExamStuList = (examId: number) => {
    router.push({
        name: 'examDetail',
        params: {
            examId: examId
        }
    })
}

const calculateTimeDuration = (startDate: Date, endDate: Date) => {
    const timeDiffMs = endDate.getTime() - startDate.getTime();
    const timeDiffMinutes = timeDiffMs / (1000 * 60 * 60 * 24);
    return timeDiffMinutes >= 0
        ? parseFloat(timeDiffMinutes.toFixed(0))
        : 0;
}

const deleteExam = (examId: number) => {
    delExam(courseId, examId).then(res => {
        if (res.state == 200) {
            courseExamMap.value = res.data
        }
    })
}

onBeforeMount(() => {
    getCourseExamList(courseId).then(res => {
        if (res.state == 200) {
            courseExamMap.value = res.data
        }
    })
})

onMounted(() => {
    if (course.value == null) {
        getExamCourse().then(res => {
            if (res.state == 200) {
                for (let i = 0; i < res.data.length; i++) {
                    if (res.data[i].projectId == courseId) {
                        course.value = res.data[i]
                        examViewStore.setCurrentExamCourse(course.value)
                    }
                }
            } else {
                ElMessage.warning("获取课程信息错误，请返回重试")
            }
        })
    }
})

</script>
<style scoped>
.tab-button {
    position: relative;
    padding: 12px 24px;
    font-weight: 500;
    transition: all 0.2s ease;
}

.tab-button.active {
    color: #3b82f6;
}

.tab-button.active::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 3px;
    background-color: #3b82f6;
    border-radius: 3px 3px 0 0;
}

.tab-button:hover:not(.active) {
    background-color: #f9fafb;
    color: #4b5563;
}

.exam-info-badge {
    display: inline-flex;
    align-items: center;
    padding: 4px 12px;
    background-color: #eff6ff;
    color: #1e40af;
    border-radius: 12px;
    font-size: 12px;
    font-weight: 500;
}

.btn-gradient {
    background: linear-gradient(to right, #3b82f6, #2563eb);
    transition: all 0.3s ease;
}

.btn-gradient:hover {
    background: linear-gradient(to right, #2563eb, #1d4ed8);
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(37, 99, 235, 0.2);
}
</style>