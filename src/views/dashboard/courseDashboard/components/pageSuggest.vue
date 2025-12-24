<template>
  <transition name="fade" mode="out-in">
    <div v-show="currentModule == 4" class="h-full flex flex-col justify-around text-white/90" key="expriment-page">
      <div class="grid grid-cols-1 h-[678px]">
        <screen-card title="整体教学效果报告">
          <template #icon>
            <font-awesome-icon icon="fa-solid fa-chart-simple" class="ml-4 mr-2 text-yellow-400"></font-awesome-icon>
          </template>
          <div class="rounded-lg p-4">

            <div class="space-y-6">
              <!-- 课程概况 -->
              <div class="bg-blue-500/10  p-4 rounded-lg">
                <h4 class="text-md font-semibold text-blue-300 mb-2">
                  <font-awesome-icon icon="fas fa-chart-line" class="mr-2"></font-awesome-icon>
                  {{ reportData.overallReport.overview.title }}
                </h4>
                <p class="text-sm line-clamp-2">
                  {{ reportData.overallReport.overview.content }}
                </p>
              </div>

              <!-- 教学优势与不足 -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="bg-green-500/10  p-4 rounded-lg">
                  <h4 class="text-md font-medium text-green-300 mb-2">
                    <font-awesome-icon icon="fas fa-trophy" class="mr-2"></font-awesome-icon>
                    {{
                      reportData.overallReport.strengths.title }}
                  </h4>
                  <ul class="space-y-2 text-sm  ">
                    <li v-for="(strength, index) in reportData.overallReport.strengths.items" :key="index"
                      class="flex items-center space-x-2">
                      <font-awesome-icon icon="fas fa-check-circle" class="text-green-300"></font-awesome-icon>
                      <div>
                        <div class="words-ellipsis">
                          <strong class="text-green-300">{{ strength.highlight }}</strong>
                        </div>
                        <div class="words-ellipsis" :title="strength.description">
                          {{ strength.description }}
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>

                <div class="bg-yellow-500/10  p-4 rounded-lg">
                  <h4 class="text-md font-medium text-yellow-300  mb-2">{{
                    reportData.overallReport.weaknesses.title }}</h4>
                  <ul class="space-y-2 text-sm  ">
                    <li v-for="(weakness, index) in reportData.overallReport.weaknesses.items" :key="index"
                      class="flex items-center space-x-2">
                      <font-awesome-icon icon="fas fa-exclamation-circle" class="text-yellow-300"></font-awesome-icon>
                      <div>
                        <div class="words-ellipsis">
                          <strong class="text-yellow-300">{{ weakness.highlight }}</strong>
                        </div>
                        <div class="words-ellipsis" :title="weakness.description">
                          {{ weakness.description }}
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <!-- AI辅助教学分析 -->
              <div class="bg-purple-500/10  p-4 rounded-lg">
                <h4 class="text-md font-medium text-purple-300  mb-2">
                  <font-awesome-icon icon="fas fa-robot" class="mr-2"></font-awesome-icon>
                  {{ reportData.overallReport.aiAnalysis.title }}</h4>
                <p class="text-sm mb-4 words-ellipsis" :title="reportData.overallReport.aiAnalysis.content">
                  {{ reportData.overallReport.aiAnalysis.content }}
                </p>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div class="bg-white/5  p-3 rounded-lg">
                    <h5 class="text-sm font-medium text-purple-200 mb-2">
                      <font-awesome-icon icon="fas fa-thumbs-up" class="mr-2"></font-awesome-icon>
                      {{ reportData.overallReport.aiAnalysis.advantages.title }}</h5>
                    <ul class="space-y-1 text-sm  ">
                      <li v-for="(advantage, index) in reportData.overallReport.aiAnalysis.advantages.items"
                        :key="index">
                        <font-awesome-icon icon="fas fa-check" class="text-green-400 mr-2"></font-awesome-icon>
                        <span :title="advantage">{{ advantage }}</span>
                      </li>
                    </ul>
                  </div>

                  <div class="bg-white/5  p-3 rounded-lg">
                    <h5 class="text-sm font-medium text-purple-200 mb-2">
                      <font-awesome-icon icon="fas fa-arrow-up" class="mr-2"></font-awesome-icon>
                      {{ reportData.overallReport.aiAnalysis.improvements.title }}</h5>
                    <ul class="space-y-1 text-sm  ">
                      <li v-for="(improvement, index) in reportData.overallReport.aiAnalysis.improvements.items"
                        :key="index">
                        <font-awesome-icon icon="fas fa-arrow-right" class="text-blue-400 mr-2"></font-awesome-icon>
                        <span :title="improvement">{{ improvement }}</span>
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
                <h4 class="text-md font-medium   mb-3"> 课程内容与结构优化 </h4>
                <div class="grid grid-cols-2 gap-4">
                  <div v-for="(item, index) in suggestion.content_optimization.slice(0,4)"
                    :key="index" class="bg-white/5  p-3 rounded-lg">
                    <div class="flex items-center space-x-2" :title="item.description">
                      <div
                        class="w-10 h-10 min-w-10 min-h-10 bg-blue-500/20 rounded-xl flex items-center justify-center">
                        <font-awesome-icon :icon="getOptimizationIcon(index)" class="text-blue-500"></font-awesome-icon>
                      </div>
                      <div class="min-w-0">
                        <h5 class="text-sm font-medium words-ellipsis text-blue-300">{{ item.title }}</h5>
                        <p class="text-xs line-clamp-2 leading-relaxed text-justify" >
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
                  <div v-for="(item, index) in suggestion.method_improvement.slice(0,4)"
                   :key="index" class="bg-white/5  p-3 rounded-lg">
                    <div class="flex items-center space-x-2 " :title="item.description">
                      <div
                        class="w-10 h-10 min-w-10 min-h-10 bg-green-500/20 rounded-xl flex items-center justify-center mt-1">
                        <font-awesome-icon :icon="getImprovementIcon(index)" class="mt-1 text-green-500"></font-awesome-icon>
                      </div>
                      <div class="min-w-0">
                        <h5 class="text-sm font-medium words-ellipsis text-indigo-300">{{ item.title }}</h5>
                        <p class="text-xs line-clamp-2 leading-relaxed text-justify" >
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

const reportData = ref({
  "overallReport": {
    "title": "整体教学效果报告",
    "overview": {
      "title": "课程概况",
      "content": "模拟电子电路课程在2025春季学期共有62名学生参与，课程整体完成率为68.2%，高于预期进度4.8个百分点。课程平均分为83.6分，较上学期提高了3.2%。学生参与度达到87.3%，显著高于上学期的79.2%，表明本学期的教学改革取得了明显成效。学生的能力达标率为78.5%，较上学期提高了5.2个百分点，但理论应用能力仍是学生的薄弱环节，达标率仅为68.2%。"
    },
    "strengths": {
      "title": "教学优势",
      "items": [
        {
          "icon": "fas fa-check-circle",
          "highlight": "AI辅助教学效果显著",
          "description": "引入AI辅助学习工具极大提高了学生参与度和问题解决能力。学生对AI助手的满意度高达88%，AI辅助的问题解决率达到78%。"
        },
        {
          "icon": "fas fa-check-circle",
          "highlight": "实验过程优化成效明显",
          "description": "改进后的实验指导书和实验前指导环节使得实验操作能力达标率提升至82.3%，学生实验完成率显著提高。"
        },
        {
          "icon": "fas fa-check-circle",
          "highlight": "基础知识传授扎实",
          "description": "电路分析能力、参数测量能力等基础能力培养扎实，达标率分别为85.2%和80.6%。"
        }
      ]
    },
    "weaknesses": {
      "title": "教学不足",
      "items": [
        {
          "icon": "fas fa-exclamation-circle",
          "highlight": "理论与实践结合不足",
          "description": "理论应用能力是学生最薄弱的环节，达标率仅为68.2%，表明理论知识与实际应用的结合不够紧密。"
        },
        {
          "icon": "fas fa-exclamation-circle",
          "highlight": "高频模型理解不深",
          "description": "BJT特征频率测量实验中，学生对高频等效模型的理解普遍不足，尤其是电容影响机制的理解。"
        },
        {
          "icon": "fas fa-exclamation-circle",
          "highlight": "实验难度梯度不均",
          "description": "实验难度梯度存在不均衡性，特别是从BJT特征频率测量到有源滤波器设计的难度跨度过大。"
        }
      ]
    },
    "aiAnalysis": {
      "title": "AI辅助教学分析",
      "content": "本学期引入AI辅助学习工具是教学改革的重要亮点。学生对AI助手的使用率达85%，问题解决率达78%，总互动次数达3,428次，较上学期增长42.3%。学生与AI互动主要集中在电路连接问题(35%)、测量方法咨询(28%)、数据分析与计算(22%)和理论概念解释(15%)。",
      "advantages": {
        "title": "AI辅助优势",
        "items": [
          "提供即时反馈，解决实验中的卡点问题",
          "减轻教师辅导压力，提高教学效率",
          "个性化指导，适应不同学生需求",
          "为教学改进提供详细数据支持"
        ]
      },
      "improvements": {
        "title": "AI辅助改进方向",
        "items": [
          "增强对电路连接问题的识别能力",
          "加强理论解释深度，促进理论应用能力提升",
          "增加图像识别功能，实现电路图自动分析",
          "开发个性化学习路径推荐功能"
        ]
      }
    }
  },
})

onMounted(() => {
  setTimeout(() => {
    updateChart()
  }, 200)
})

const text1 = ref({
  aiAnalysis: '',
  report: '',
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
      // console.log(res.data)
      text1.value = res.data
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