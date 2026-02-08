<template>
    <div>
        <div class="mb-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-2">选择课程</h2>
            <p class="text-gray-600">请选择要查看考试的课程</p>
        </div>
    </div>

    <div v-if="colorList.length >= 1" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- 课程1 -->
        <div v-for="(course, i) in courseList"
            class="course-card bg-white rounded-xl shadow-md border border-gray-200 p-6"
            :data-course-id="course.projectId" @click="toCourseExamList(course)">
            <div class="flex justify-between items-start mb-4">
                <div>
                    <h3 class="text-xl font-bold text-gray-900 mb-2">{{ course.projectName }}</h3>
                    <p class="text-gray-600 text-sm">学期: {{ formatSeason(course.semester) }}</p>
                </div>
                <div class="text-right">
                    <div class="text-sm text-gray-500">学生人数</div>
                    <div class="text-2xl font-bold" :class="getRandomElement(colorList)">{{ course.stuNum }}</div>
                </div>
            </div>

            <div class="flex items-center justify-between">
                <div class="text-sm text-gray-700">点击查看考试</div>
                <button class="text-blue-600 hover:text-blue-800 font-medium">
                    查看详情 <font-awesome-icon icon="fas fa-arrow-right " class="ml-1"></font-awesome-icon>
                </button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onBeforeMount, onMounted, ref } from 'vue';
import { getExamCourse } from '@/apis/exam/examView';
import { formatSeason, getRandomElement } from '@/utils/util'
import router from '@/router';
import { useExamViewStore } from '@/stores/examViewStore'

const examViewStore = useExamViewStore()
const courseList = ref([])

const colorList = ['text-blue-600', 'text-green-600', 'text-purple-600']

const toCourseExamList = (course: any) => {
    examViewStore.setCurrentExamCourse(course)
    router.push({
        name: 'examList',
        params: {
            projectId: course.projectId
        },
    })
}
onBeforeMount(() => {
    getExamCourse().then(res => {
        if (res.state == 200) {
            courseList.value = res.data
        }
    })
})

</script>
<style scoped>
.course-card {
    transition: all 0.3s ease;
    cursor: pointer;
}

.course-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    border-left-color: #2563eb;
}
</style>