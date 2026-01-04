<template>
  <transition name="fade" mode="out-in">
    <div v-show="currentModule == 4" class="h-full flex flex-col justify-around text-white/90 text-justify"
      key="expriment-page">
      <div class="grid grid-cols-1 h-[678px]">
        <screen-card title="整体教学效果报告">
          <template #icon>
            <font-awesome-icon icon="fa-solid fa-chart-simple" class="ml-4 mr-2 text-yellow-400"></font-awesome-icon>
          </template>
          <div class="rounded-lg p-2">

            <div class="space-y-4">
              <!-- 课程概况 -->
              <div class="bg-blue-500/10  p-4 rounded-lg">
                <h4 class="text-md font-semibold text-blue-300 mb-2">
                  <font-awesome-icon icon="fas fa-chart-line" class="mr-2"></font-awesome-icon>
                  课程概况
                </h4>
                <p class="text-sm line-clamp-2">
                  {{ teach.report.course_overview }}
                </p>
              </div>

              <!-- 教学优势与不足 -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="bg-green-500/10  p-4 rounded-lg">
                  <h4 class="text-md font-medium text-green-300 mb-2">
                    <font-awesome-icon icon="fas fa-trophy" class="mr-2"></font-awesome-icon>
                    教学优势
                  </h4>
                  <ul class="space-y-2 text-sm  ">
                    <li v-for="(item, index) in teach.report.teaching_advantages" :key="index"
                      class="flex items-center space-x-2">
                      <font-awesome-icon icon="fas fa-check-circle" class="text-green-300"></font-awesome-icon>
                      <div class="words-ellipsis">
                        <span :title="item">{{ item }}</span>
                      </div>
                    </li>
                  </ul>
                </div>

                <div class="bg-yellow-500/10  p-4 rounded-lg">
                  <h4 class="text-md font-medium text-yellow-300  mb-2">
                    <font-awesome-icon icon="fas fa-exclamation-triangle" class="mr-2"></font-awesome-icon>
                    教学不足</h4>
                  <ul class="space-y-2 text-sm  ">
                    <li v-for="(item, index) in teach.report.teaching_deficiencies" :key="index"
                      class="flex items-center space-x-2">
                      <font-awesome-icon icon="fas fa-exclamation-circle" class="text-yellow-300"></font-awesome-icon>
                      <div class="words-ellipsis">
                        <span :title="item">{{ item }}</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <!-- AI辅助教学分析 -->
              <div class="bg-purple-500/10 p-4 rounded-lg">
                <h4 class="text-md font-medium text-purple-300  mb-2">
                  <font-awesome-icon icon="fas fa-robot" class="mr-2"></font-awesome-icon>
                  AI辅助教学分析
                </h4>
                <p class="text-sm line-clamp-2 mb-4" :title="teach.aiAnalysis.analysis_summary">
                  {{ teach.aiAnalysis.analysis_summary }}
                </p>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div class="bg-white/5  p-3 rounded-lg">
                    <h5 class="text-sm font-medium text-purple-200 mb-2">
                      <font-awesome-icon icon="fas fa-thumbs-up" class="mr-2"></font-awesome-icon>
                      AI辅助优势
                    </h5>
                    <ul class="space-y-1 text-sm  ">
                      <li v-for="(item, index) in teach.aiAnalysis.ai_advantages"
                        :key="index" class="flex items-center space-x-2">
                        <font-awesome-icon icon="fas fa-check" class="text-green-400 mr-2"></font-awesome-icon>
                        <div class="words-ellipsis">
                          <span :title="item">{{ item }}</span>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div class="bg-white/5  p-3 rounded-lg">
                    <h5 class="text-sm font-medium text-purple-200 mb-2">
                      <font-awesome-icon icon="fas fa-arrow-up" class="mr-2"></font-awesome-icon>
                      AI辅助改进方向
                    </h5>
                    <ul class="space-y-1 text-sm  ">
                      <li v-for="(item, index) in teach.aiAnalysis.ai_improvements"
                        :key="index" class="flex items-center space-x-2">
                        <font-awesome-icon icon="fas fa-arrow-right" class="text-blue-400 mr-2"></font-awesome-icon>
                        <div class="words-ellipsis">
                          <span :title="item">{{ item }}</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </screen-card>
      </div>
      <div class="grid grid-cols-1 h-[300px]">
        <screen-card title="教学改进建议">
          <template #icon>
            <font-awesome-icon icon="fa-solid fa-lightbulb" class="ml-4 mr-2 text-yellow-400"></font-awesome-icon>
          </template>
          <div class="px-4 pb-4">
            <div class="grid grid-cols-2 gap-4">
              <div class="bg-gray-700/30  p-4 rounded-lg">
                <h4 class="text-md font-medium mb-3"> 课程内容与结构优化 </h4>
                <div class="grid grid-cols-2 gap-4">
                  <div v-for="(item, index) in suggestion.content_optimization.slice(0, 4)" :key="index"
                    class="bg-white/5  p-3 rounded-lg">
                    <div class="flex items-center space-x-2" :title="item.description">
                      <div
                        class="w-10 h-10 min-w-10 min-h-10 bg-blue-500/20 rounded-xl flex items-center justify-center">
                        <font-awesome-icon :icon="getOptimizationIcon(index)" class="text-blue-500"></font-awesome-icon>
                      </div>
                      <div class="min-w-0">
                        <h5 class="text-sm font-medium words-ellipsis text-blue-300">{{ item.title }}</h5>
                        <p class="text-xs line-clamp-2 leading-relaxed">
                          {{ item.description }}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="bg-gray-700/30  p-4 rounded-lg">
                <h4 class="text-md font-medium   mb-3">教学方法与资源改进</h4>
                <div class="grid grid-cols-2 gap-4">
                  <div v-for="(item, index) in suggestion.method_improvement.slice(0, 4)" :key="index"
                    class="bg-white/5  p-3 rounded-lg">
                    <div class="flex items-center space-x-2 " :title="item.description">
                      <div
                        class="w-10 h-10 min-w-10 min-h-10 bg-green-500/20 rounded-xl flex items-center justify-center mt-1">
                        <font-awesome-icon :icon="getImprovementIcon(index)"
                          class="mt-1 text-green-500"></font-awesome-icon>
                      </div>
                      <div class="min-w-0">
                        <h5 class="text-sm font-medium words-ellipsis text-indigo-300">{{ item.title }}</h5>
                        <p class="text-xs line-clamp-2 leading-relaxed">
                          {{ item.description }}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </screen-card>
      </div>
    </div>
  </transition>
</template>

<script setup>
const props = defineProps({
  currentModule: Number,
})

import { getAnaylsis, analysisTypeEnum } from "@/apis/embV4/analysis"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
const route = useRoute()
const projectId = route.params.id

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
  // "fas fa-pencil-alt",
  // "fas fa-lightbulb",
  // "fas fa-chart-pie",
  // "fas fa-graduation-cap"
]
const improvementIcon = [
  "fas fa-drafting-compass",
  "fas fa-robot",
  "fas fa-video",
  "fas fa-tasks",
  // "fas fa-users",
  // "fas fa-comments",
  // "fas fa-microscope",
  // "fas fa-brain"
];
function getOptimizationIcon(index) {
  if (index >= optimizationIcon.length) {
    return 'fas fa-pencil-alt'
  } else {
    return optimizationIcon[index]
  }
}

function getImprovementIcon(index) {
  if (index >= improvementIcon.length) {
    return 'fas fa-cog'
  } else {
    return improvementIcon[index]
  }
}


function updateChart() {
  getAnaylsis(projectId, analysisTypeEnum.T_TR_OVERVIEW).then(res => {
    if (res.state == 200) {
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
      // 建议
      suggestion.value.content_optimization = res.data.suggestion.content_optimization || []
      suggestion.value.method_improvement = res.data.suggestion.method_improvement || []
    }
  })
}
</script>

<style scoped>
.words-ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>