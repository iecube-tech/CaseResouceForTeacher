<template>
  <div class="mt-6 space-y-6 fade-in text-justify">
    <!-- 整体教学效果报告 -->
    <div class="bg-white rounded-lg shadow p-4">
      <h3 class="text-lg font-medium text-gray-900 mb-4">整体教学效果报告</h3>

      <div class="space-y-6">
        <!-- 课程概况 -->
        <div class="bg-blue-50  p-4 rounded-lg">
          <h4 class="text-md font-medium text-blue-800 mb-2">课程概况</h4>
          <p class="text-sm text-gray-700 whitespace-pre-wrap">
            {{ teach.report.course_overview }}
          </p>
        </div>

        <!-- 教学优势与不足 -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="bg-green-50  p-4 rounded-lg">
            <h4 class="text-md font-medium text-green-800  mb-2">教学优势</h4>
            <ul class="space-y-2 text-sm text-gray-700 ">
              <li v-for="(item, index) in teach.report.teaching_advantages" :key="index"
                class="flex items-start space-x-2">
                <font-awesome-icon icon="fas fa-check-circle" class="text-green-500 mt-1"></font-awesome-icon>
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>

          <div class="bg-yellow-50  p-4 rounded-lg">
            <h4 class="text-md font-medium text-yellow-800  mb-2">教学不足</h4>
            <ul class="space-y-2 text-sm text-gray-700 ">
              <li v-for="(item, index) in teach.report.teaching_deficiencies" :key="index"
                class="flex items-start space-x-2">
                <font-awesome-icon icon="fas fa-exclamation-circle" class=" text-yellow-500 mt-1"></font-awesome-icon>
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- AI辅助教学分析 -->
        <div class="bg-purple-50 p-4 rounded-lg">
          <h4 class="text-md font-medium text-purple-800 mb-2">AI辅助教学分析</h4>
          <p class="text-sm text-gray-700 mb-4 ">
            {{ teach.aiAnalysis.analysis_summary }}
          </p>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="bg-white  p-3 rounded-lg">
              <h5 class="text-sm font-medium text-gray-700 mb-2">AI辅助优势</h5>
              <ul class="space-y-1 text-sm text-gray-600 ">
                <li v-for="(advantage, index) in teach.aiAnalysis.ai_advantages" :key="index" class="flex">
                  <span class="mr-2 text-blue-500 text-xl">•</span> <span>{{ advantage }}</span>
                </li>
              </ul>
            </div>

            <div class="bg-white  p-3 rounded-lg">
              <h5 class="text-sm font-medium text-gray-700  mb-2">AI辅助改进方向</h5>
              <ul class="space-y-1 text-sm text-gray-600 ">
                <li v-for="(improvement, index) in teach.aiAnalysis.ai_improvements" :key="index" class="flex">
                  <span class="mr-2 text-blue-500 text-xl">•</span> <span>{{ improvement }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 教学改进建议 -->
    <div class="bg-white  rounded-lg shadow p-4">
      <h3 class="text-lg font-medium text-gray-900  mb-4">教学改进建议 </h3>

      <div class="space-y-5">
        <div class="bg-gray-50  p-4 rounded-lg">
          <h4 class="text-md font-medium text-gray-800  mb-3"> 课程内容与结构优化</h4>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div v-for="(item, index) in suggestion.content_optimization" :key="index" class="bg-white p-3 rounded-lg">
              <div class="flex items-start space-x-2">
                <font-awesome-icon :icon="getOptimizationIcon(index)" class="mt-1 text-blue-500"></font-awesome-icon>
                <div>
                  <h5 class="text-sm font-medium text-gray-700 ">{{ item.title }}</h5>
                  <p class="text-xs text-gray-600 text-justify leading-relaxed">
                    {{ item.description }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-gray-50  p-4 rounded-lg">
          <h4 class="text-md font-medium text-gray-800  mb-3">教学方法与资源改进</h4>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div v-for="(item, index) in suggestion.method_improvement" :key="index"
              class="bg-white  p-3 rounded-lg">
              <div class="flex items-start space-x-2">
                <font-awesome-icon :icon="getImprovementIcon(index)" class="mt-1 text-green-500"></font-awesome-icon>
                <div>
                  <h5 class="text-sm font-medium text-gray-700 ">{{ item.title }}</h5>
                  <p class="text-xs text-gray-600  text-justify leading-relaxed">
                    {{ item.description }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup>
import { getAnaylsis, analysisTypeEnum } from "@/apis/embV4/analysis"
const route = useRoute()
const projectId = route.params.projectId

onMounted(() => {
  setTimeout(() => {
    updateChart()
  }, 200)
})

const teach = ref({
  aiAnalysis: {
    analysis_summary: '',
    ai_advantages: '',
    ai_improvements: '',
  },
  report: {
    course_overview: '',
    teaching_advantages: [],
    teaching_deficiencies: [],
  },
})

const suggestion = ref({
  content_optimization: [],
  method_improvement: [],
})

const optimizationIcon = [
  "fas fa-book-open", 
  "fas fa-chart-line", 
  "fas fa-chalkboard-teacher", 
  "fas fa-user-graduate", 
  "fas fa-pencil-alt",
  "fas fa-lightbulb",
  "fas fa-chart-pie",
  "fas fa-graduation-cap"
]
const improvementIcon = [
  "fas fa-drafting-compass", 
  "fas fa-robot", 
  "fas fa-video", 
  "fas fa-tasks",
  "fas fa-users",
  "fas fa-comments",
  "fas fa-microscope",
  "fas fa-brain"
];
function getOptimizationIcon(index) {
  if(index >= optimizationIcon.length){
    return 'fas fa-pencil-alt'
  } else {
    return optimizationIcon[index]
  }
}

function getImprovementIcon(index) {
  if(index >= improvementIcon.length){
    return 'fas fa-cog'
  } else {
    return improvementIcon[index]
  }
}


function updateChart() {
  getAnaylsis(projectId, analysisTypeEnum.T_TR_OVERVIEW).then(res => {
    if (res.state == 200) {
      console.log(res.data)
      
      teach.value.report.course_overview = res.data.report.course_overview
      let teaching_advantages = []
      teaching_advantages = res.data.report.teaching_advantages.split('\n')
      teach.value.report.teaching_advantages = teaching_advantages
      let teaching_deficiencies = []
      teaching_deficiencies = res.data.report.teaching_deficiencies.split('\n')
      teach.value.report.teaching_deficiencies = teaching_deficiencies
      
      teach.value.aiAnalysis.analysis_summary = res.data.aiAnalysis.analysis_summary
      let ai_advantages = []
      ai_advantages = res.data.aiAnalysis.ai_advantages.split('\n')
      teach.value.aiAnalysis.ai_advantages = ai_advantages
      let ai_improvements = []
      ai_improvements = res.data.aiAnalysis.ai_improvements.split('\n')
      teach.value.aiAnalysis.ai_improvements = ai_improvements
      
      
      
    }
  })

  getAnaylsis(projectId, analysisTypeEnum.T_TR_IS).then(res => {
    if (res.state == 200) {
      suggestion.value.content_optimization = res.data.suggestion.content_optimization || []
      suggestion.value.method_improvement = res.data.suggestion.method_improvement || []

    }
  })
}
</script>

<style scoped>
.fade-in {
  animation: fadeIn 0.3s ease-in;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
</style>