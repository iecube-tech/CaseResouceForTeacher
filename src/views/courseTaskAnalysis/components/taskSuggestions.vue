<template>
  <div class="mt-6 space-y-6 fade-in text-justify">
    <!-- Main Findings -->
    <div class="bg-white rounded-lg shadow p-4">
      <h3 class="text-lg font-medium text-gray-900 mb-4">主要发现</h3>
      
      <div class="space-y-4">
        <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
          <h4 class="text-md font-medium text-blue-800">总体表现</h4>
          <p class="mt-2 text-sm text-gray-600" v-for="(item, i) in report.overall_performance" :key="i" :title="item">
            {{ item }}
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
            <h4 class="text-md font-medium text-green-800">优势领域</h4>
            <ul class="mt-2 space-y-2 text-sm text-gray-600">
              <li v-for="(item, index) in report.strengths" :key="index" class="flex items-start space-x-2" :title="item">
                <font-awesome-icon icon="fas fa-check-circle" class="text-green-500 mt-1" />
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>
          
          <div class="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
            <h4 class="text-md font-medium text-red-800">薄弱环节</h4>
            <ul class="mt-2 space-y-2 text-sm text-gray-600">
              <li v-for="(item, index) in report.weaknesses" :key="index" class="flex items-start space-x-2" :title="item">
                <font-awesome-icon icon="fas fa-exclamation-circle" class="text-red-500 mt-1" />
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div class="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
          <h4 class="text-md font-medium text-purple-800">AI辅助影响</h4>
          <p class="mt-2 text-sm text-gray-600" v-for="(item, index) in report.ai_assistance_impact" :key="index" :title="item">
            {{ item }}
          </p>
        </div>
      </div>
    </div>
    
    <!-- Improvement Suggestions -->
    <div class="bg-white rounded-lg shadow p-4">
      <h3 class="text-lg font-medium text-gray-900 mb-4">教学改进建议</h3>
      
      <div class="space-y-5">
        <div class="bg-gray-50 p-4 rounded-lg">
          <h4 class="font-medium text-gray-800 mb-3">
            <font-awesome-icon icon="fas fa-book-open" class="mr-2 text-primary-500" />
            实验前准备加强
          </h4>
          <div class="space-y-3">
            <div v-for="(item, index) in suggestion.pre_experiment" :key="index">
              <h5 class="text-sm font-medium text-gray-700">{{ item.title }}</h5>
              <p class="mt-1 text-sm text-gray-600" :title="item">
                {{ item }}
              </p>
            </div>
          </div>
        </div>
        
        <div class="bg-gray-50 p-4 rounded-lg">
          <h4 class="font-medium text-gray-800 mb-3">
            <font-awesome-icon icon="fas fa-flask" class="mr-2 text-primary-500" />
            实验过程优化
          </h4>
          <div class="space-y-3">
            <div v-for="(item, index) in suggestion.during_experiment" :key="index">
              <h5 class="text-sm font-medium text-gray-700">{{ item.title }}</h5>
              <p class="mt-1 text-sm text-gray-600" :title="item">
                {{ item }}
              </p>
            </div>
          </div>
        </div>
        
        <div class="bg-gray-50 p-4 rounded-lg">
          <h4 class="font-medium text-gray-800 mb-3">
            <font-awesome-icon icon="fas fa-clipboard-check" class="mr-2 text-primary-500" />
            考核方式调整
          </h4>
          <div class="space-y-3">
            <div v-for="(item, index) in suggestion.post_experiment" :key="index">
              <h5 class="text-sm font-medium text-gray-700">{{ item.title }}</h5>
              <p class="mt-1 text-sm text-gray-600" :title="item">
                {{ item }}
              </p>
            </div>
          </div>
        </div>
      
      </div>
    </div>
  </div>
</template>

<script setup>
import { taskAnalysisEnum, getTaskAnalysis } from '@/apis/embV4/analysis'
const route = useRoute()
const projectId = route.params.projectId
const taskId = route.params.taskId

const report = ref({
  ai_assistance_impact: [],
  overall_performance: [],
  strengths: [],
  weaknesses: []
})

const suggestion = ref({
  during_experiment: [],
  post_experiment: [],
  pre_experiment: [],
})


onMounted(() => {
    setTimeout(_ => {
        updateChart()
    }, 200)
})

function updateChart() {
    getTaskAnalysis(projectId, taskId, taskAnalysisEnum.TASK_D_SUG).then(res => {
        if (res.state == 200) {
            // console.log(res.data)
            report.value.overall_performance = res.data.report.overall_performance || []
            report.value.strengths = res.data.report.strengths || []
            report.value.weaknesses = res.data.report.weaknesses || []
            report.value.ai_assistance_impact = res.data.report.ai_assistance_impact || []
            
            suggestion.value.during_experiment = res.data.suggestion.during_experiment || []
            suggestion.value.post_experiment = res.data.suggestion.post_experiment || []
            suggestion.value.pre_experiment = res.data.suggestion.pre_experiment || []
        }
    })
}



</script>

<style scoped>
/* Add any additional styles if needed */
</style>