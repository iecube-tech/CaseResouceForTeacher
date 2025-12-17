<template>
  <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <div class="space-y-8 fade-in">
      <div class="bg-white rounded-xl shadow-md p-6">
        <!-- 课程信息栏 -->
        <div class="flex items-center justify-between">
          <div>
            <h1 class="text-2xl font-bold text-gray-900 dark:text-white">{{ ptName }}</h1>
            <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
              <span x-text="selectedSemester">{{ info.semester }}</span> | 班级: {{ info.classNames }} | 学生人数: {{info.studentCount}}人
            </p>
          </div>
          <div class="text-sm text-gray-500 dark:text-gray-400">
            更新时间: {{ info.updateTime }}
          </div>
        </div>

        <!-- 页面标签栏 -->
        <div class="mt-6 border-b border-gray-200">
          <div class="flex space-x-8">
            <button v-for="tab in tabList" :key="tab.value" @click="tabName = tab.value"
              class="py-4 text-sm font-medium border-b-2 transition-colors focus:outline-none" :class="tabName === tab.value
                ? 'border-primary-500 text-primary-600'
                : 'border-transparent text-gray-500 hover:text-gray-700'">
              {{ tab.label }}
            </button>
          </div>
        </div>

        <task-overview v-show="tabName === 'taskOverview'" :name="tabName" />
        <task-ability v-show="tabName === 'taskAbility'" :name="tabName" />
        <task-question v-show="tabName === 'taskQuestion'" :name="tabName" />
        <task-process v-show="tabName === 'taskProcess'" :name="tabName" />
        <task-suggestions v-show="tabName === 'taskSuggestions'" :name="tabName" />


      </div>
    </div>
  </main>
</template>

<script setup>
import { courseBaseInfo } from '@/apis/embV4/analysis'  
  
const route = useRoute()
const ptName = route.params.ptName
const projectId = route.params.projectId

const info = ref({
  classNames: '',
  projectName: '',
  semester: '',
  studentCount: '',
  updateTime: ''
})

courseBaseInfo(projectId).then(res => {
  if (res.state == 200) {
    info.value.classNames = res.data.classNames
    info.value.projectName = res.data.projectName
    info.value.semester = res.data.semester
    info.value.studentCount = res.data.studentCount
    info.value.updateTime = res.data.updateTime
  }
})
  
import taskOverview from './taskOverview.vue';
import taskAbility from './taskAbility.vue';
import taskQuestion from './taskQuestion.vue';
import taskProcess from './taskProcess.vue';
import taskSuggestions from './taskSuggestions.vue';

const tabName = ref('taskOverview')
tabName.value = 'taskOverview'

const tabList = ref([
  { value: 'taskOverview', label: '实验概览' },
  { value: 'taskAbility', label: '能力分析' },
  { value: 'taskQuestion', label: '题目分析' },
  { value: 'taskProcess', label: '过程分析' },
  { value: 'taskSuggestions', label: '教学建议' }
])

</script>

<style lang="scss" scoped></style>
