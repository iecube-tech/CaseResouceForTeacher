<template>
  <div class="mt-6 space-y-6 fade-in">
    <!-- 整体教学效果报告 -->
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
      <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-4">{{ reportData.overallReport.title }}</h3>

      <div class="space-y-6">
        <!-- 课程概况 -->
        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
          <h4 class="text-md font-medium text-blue-800 dark:text-blue-300 mb-2">{{
            reportData.overallReport.overview.title }}</h4>
          <p class="text-sm text-gray-700 dark:text-gray-300">
            {{ reportData.overallReport.overview.content }}
          </p>
        </div>

        <!-- 教学优势与不足 -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
            <h4 class="text-md font-medium text-green-800 dark:text-green-300 mb-2">{{
              reportData.overallReport.strengths.title }}</h4>
            <ul class="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li v-for="(strength, index) in reportData.overallReport.strengths.items" :key="index"
                class="flex items-start space-x-2">
                <font-awesome-icon icon="fas fa-check-circle" class="text-green-500 mt-1"></font-awesome-icon>
                <span>
                  <strong>{{ strength.highlight }}</strong> - {{ strength.description }}
                </span>
              </li>
            </ul>
          </div>

          <div class="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
            <h4 class="text-md font-medium text-yellow-800 dark:text-yellow-300 mb-2">{{
              reportData.overallReport.weaknesses.title }}</h4>
            <ul class="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li v-for="(weakness, index) in reportData.overallReport.weaknesses.items" :key="index"
                class="flex items-start space-x-2">
                <font-awesome-icon icon="fas fa-exclamation-circle" class=" text-yellow-500 mt-1"></font-awesome-icon>
                <span>
                  <strong>{{ weakness.highlight }}</strong> - {{ weakness.description }}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <!-- AI辅助教学分析 -->
        <div class="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
          <h4 class="text-md font-medium text-purple-800 dark:text-purple-300 mb-2">{{
            reportData.overallReport.aiAnalysis.title }}</h4>
          <p class="text-sm text-gray-700 dark:text-gray-300 mb-4">
            {{ reportData.overallReport.aiAnalysis.content }}
          </p>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="bg-white dark:bg-gray-800 p-3 rounded-lg">
              <h5 class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{{
                reportData.overallReport.aiAnalysis.advantages.title }}</h5>
              <ul class="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                <li v-for="(advantage, index) in reportData.overallReport.aiAnalysis.advantages.items" :key="index">
                  • {{ advantage }}
                </li>
              </ul>
            </div>

            <div class="bg-white dark:bg-gray-800 p-3 rounded-lg">
              <h5 class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{{
                reportData.overallReport.aiAnalysis.improvements.title }}</h5>
              <ul class="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                <li v-for="(improvement, index) in reportData.overallReport.aiAnalysis.improvements.items" :key="index">
                  • {{ improvement }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 教学改进建议 -->
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
      <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-4">{{ reportData.improvementSuggestions.title }}
      </h3>

      <div class="space-y-5">
        <div class="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
          <h4 class="text-md font-medium text-gray-800 dark:text-gray-200 mb-3">{{
            reportData.improvementSuggestions.contentOptimization.title }}</h4>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div v-for="(suggestion, index) in reportData.improvementSuggestions.contentOptimization.items" :key="index"
              class="bg-white dark:bg-gray-800 p-3 rounded-lg">
              <div class="flex items-start space-x-2">
                <font-awesome-icon :icon="suggestion.icon" class="mt-1 text-blue-500"></font-awesome-icon>
                <div>
                  <h5 class="text-sm font-medium text-gray-700 dark:text-gray-300">{{ suggestion.title }}</h5>
                  <p class="text-xs text-gray-600 dark:text-gray-400">
                    {{ suggestion.description }}
                  </p>
                  <p v-if="suggestion.priority" class="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    <span class="font-medium">优先级:</span> {{ suggestion.priority }} |
                    <span class="font-medium">预期效果:</span> {{ suggestion.expectedEffect }}
                  </p>
                  <p v-else class="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    <span class="font-medium">实施时间:</span> {{ suggestion.implementationTime }} |
                    <span class="font-medium">负责团队:</span> {{ suggestion.responsibleTeam }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
          <h4 class="text-md font-medium text-gray-800 dark:text-gray-200 mb-3">{{
            reportData.improvementSuggestions.methodImprovement.title }}</h4>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div v-for="(improvement, index) in reportData.improvementSuggestions.methodImprovement.items" :key="index"
              class="bg-white dark:bg-gray-800 p-3 rounded-lg">
              <div class="flex items-start space-x-2">
                <font-awesome-icon :icon="improvement.icon" class="mt-1 text-green-500"></font-awesome-icon>
                <div>
                  <h5 class="text-sm font-medium text-gray-700 dark:text-gray-300">{{ improvement.title }}</h5>
                  <p class="text-xs text-gray-600 dark:text-gray-400">
                    {{ improvement.description }}
                  </p>
                  <p v-if="improvement.priority" class="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    <span class="font-medium">优先级:</span> {{ improvement.priority }} |
                    <span class="font-medium">预期效果:</span> {{ improvement.expectedEffect }}
                  </p>
                  <p v-else class="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    <span class="font-medium">实施时间:</span> {{ improvement.implementationTime }} |
                    <span class="font-medium">负责团队:</span> {{ improvement.responsibleTeam }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <!-- <div class="whitespace-pre-line break-all">{{ text1.aiAnalysis }}</div>
  <div class="whitespace-pre-line break-all">{{ text1.report }}</div>
  <div class="whitespace-pre-line break-all">{{ text2 }}</div> -->
</template>

<script setup>
import { getAnaylsis, analysisTypeEnum } from "@/apis/embV4/analysis"
const route = useRoute()
const projectId = route.params.projectId

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
  "improvementSuggestions": {
    "title": "教学改进建议",
    "contentOptimization": {
      "title": "课程内容与结构优化",
      "items": [
        {
          "icon": "fas fa-book-open",
          "title": "强化理论应用训练",
          "description": "针对理论应用能力不足的问题，建议在实验前增加15分钟的理论回顾与应用预览环节，帮助学生建立知识链接。",
          "priority": "高",
          "expectedEffect": "理论应用能力提升15%"
        },
        {
          "icon": "fas fa-chart-line",
          "title": "优化实验难度梯度",
          "description": "调整实验顺序和难度分布，在BJT特征频率测量和有源滤波器设计之间增加过渡性内容，降低难度跨度。",
          "priority": "中",
          "expectedEffect": "减少20%的学习困难情况"
        },
        {
          "icon": "fas fa-chalkboard-teacher ",
          "title": "增强高频模型教学",
          "description": "增加高频等效模型专题讲解，重点解释结电容的影响。开发交互式动画展示频率变化对电容阻抗和电流分配的影响。",
          "priority": "高",
          "expectedEffect": "高频模型理解度提升25%"
        },
        {
          "icon": "fas fa-user-graduate ",
          "title": "实施分层教学",
          "description": "实施多层次教学策略，为不同水平的学生提供差异化指导。对学习困难学生加强基础训练，对高水平学生提供拓展内容。",
          "priority": "中",
          "expectedEffect": "整体成绩分布更均衡"
        }
      ]
    },
    "methodImprovement": {
      "title": "教学方法与资源改进",
      "items": [
        {
          "icon": "fas fa-drafting-compass",
          "title": "改进实验指导材料",
          "description": "重新设计实验指导书，增加图解步骤、常见问题与解决方案，以及各环节的理论背景简明解释，特别是电路连接部分。",
          "implementationTime": "2025年暑期",
          "responsibleTeam": "教学组"
        },
        {
          "icon": "fas fa-robot text-blue-500",
          "title": "升级AI辅助功能",
          "description": "基于本学期数据训练更专业的领域AI助手，增加图像识别、电路诊断等专业能力，并增强对理论应用问题的解释深度。",
          "implementationTime": "2025年秋季学期",
          "responsibleTeam": "技术支持团队"
        },
        {
          "icon": "fas fa-video",
          "title": "开发多媒体教学资源",
          "description": "开发高质量的BJT高频特性可视化教学视频与交互式动画，特别是渡越时间和电容效应的直观展示。",
          "implementationTime": "2025年7-8月",
          "responsibleTeam": "多媒体开发组"
        },
        {
          "icon": "fas fa-tasks",
          "title": "改进评价机制",
          "description": "调整评价体系，将理论应用能力在总评中的权重提高，增加理论与实践结合的评价项目，引入多维能力评价指标。",
          "implementationTime": "2025年秋季学期",
          "responsibleTeam": "教学评价组"
        }
      ]
    }
  }
})

onMounted(()=>{
  setTimeout(() =>{
    updateChart()
  }, 200)
})

const text1 = ref({
  aiAnalysis: '',
  report: '',
})
const text2 = ref('')


function updateChart() { 
  getAnaylsis(projectId, analysisTypeEnum.T_TR_OVERVIEW).then(res=> {
    if(res.state == 200) {
      // console.log(res.data)
      text1.value = res.data
    }
  })
  
  getAnaylsis(projectId, analysisTypeEnum.T_TR_IS).then(res=> {
    if(res.state == 200) {
      // console.log(res.data)
      text2.value = res.data.suggestion
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