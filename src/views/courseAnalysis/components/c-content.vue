<template>
  <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <div class="space-y-8 fade-in">
      <div class="bg-white rounded-xl shadow-md p-6">
        <!-- 课程信息栏 -->
        <div class="flex items-center justify-between">
          <div>
            <h1 class="text-2xl font-bold text-gray-900 dark:text-white">模拟电子电路课程管理</h1>
            <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
              <span x-text="selectedSemester">202504</span> | 班级: 电子2301 | 学生人数: 62人
            </p>
          </div>
          <div class="text-sm text-gray-500 dark:text-gray-400">
            更新时间: 2025-05-18 16:30
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
        
        <course-overview v-show="tabName === 'courseOverview'" :name="tabName"/>
        <course-experiments v-show="tabName === 'courseExperiments'" :name="tabName"/>
        <course-students v-show="tabName === 'courseStudents'" :name="tabName"/>
        <course-targets v-show="tabName === 'courseTargets'" :name="tabName"/>
        <course-reports v-show="tabName === 'courseReports'" :name="tabName"/>
        <course-grades v-show="tabName === 'courseGrades'" :name="tabName"/>"

      </div>
    </div>
  </main>
</template>

<script setup>
import courseOverview from './courseOverview.vue';
import courseExperiments from './courseExperiments.vue';
import courseStudents from './courseStudents.vue';
import courseTargets from './courseTargets.vue';
import courseReports from './courseReports.vue';
import courseGrades from './courseGrades.vue'


const tabName = ref('courseOverview')
tabName.value = 'courseGrades'

const tabList = ref([
  { value: 'courseOverview', label: '课程概览' },
  { value: 'courseExperiments', label: '实验分析' },
  { value: 'courseStudents', label: '学生分析' },
  { value: 'courseTargets', label: '课程目标' },
  { value: 'courseReports', label: '教学报告' },
  { value: 'courseGrades', label: '成绩设置' }
])

</script>

<style lang="scss" scoped></style>
