<template>
  <div>
    <div class="flex space-x-8">
        <button @click="teacherTab = 'courseOverview'" class="py-4 text-sm font-medium border-b-2 transition-colors focus:outline-none border-primary-500 text-primary-600 dark:text-primary-400" :class="teacherTab === 'courseOverview' ? 'border-primary-500 text-primary-600 dark:text-primary-400' : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'">
            课程概览
        </button>
        <button @click="teacherTab = 'experiments'" class="py-4 text-sm font-medium border-b-2 transition-colors focus:outline-none border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300" :class="teacherTab === 'experiments' ? 'border-primary-500 text-primary-600 dark:text-primary-400' : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'">
            实验分析
        </button>
        <button @click="teacherTab = 'students'" class="py-4 text-sm font-medium border-b-2 transition-colors focus:outline-none border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300" :class="teacherTab === 'students' ? 'border-primary-500 text-primary-600 dark:text-primary-400' : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'">
            学生分析
        </button>
        <button @click="teacherTab = 'abilities'" class="py-4 text-sm font-medium border-b-2 transition-colors focus:outline-none border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300" :class="teacherTab === 'abilities' ? 'border-primary-500 text-primary-600 dark:text-primary-400' : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'">
            课程目标
        </button>
        <button @click="teacherTab = 'reports'" class="py-4 text-sm font-medium border-b-2 transition-colors focus:outline-none border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300" :class="teacherTab === 'reports' ? 'border-primary-500 text-primary-600 dark:text-primary-400' : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'">
            教学报告
        </button>
        <button @click="teacherTab = 'gradeSettings'" class="py-4 text-sm font-medium border-b-2 transition-colors focus:outline-none border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300" :class="teacherTab === 'gradeSettings' ? 'border-primary-500 text-primary-600 dark:text-primary-400' : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'">
            成绩设置
        </button>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>

</style>