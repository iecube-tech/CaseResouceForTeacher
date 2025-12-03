<template>
  <div class="mt-6 space-y-6 fade-in">
    <!-- Main Findings -->
    <div class="bg-white rounded-lg shadow p-4">
      <h3 class="text-lg font-medium text-gray-900 mb-4">主要发现</h3>
      
      <div class="space-y-4">
        <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
          <h4 class="text-md font-medium text-blue-800">{{ data.findings.overall.title }}</h4>
          <p class="mt-2 text-sm text-gray-600">
            {{ data.findings.overall.content }}
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
            <h4 class="text-md font-medium text-green-800">{{ data.findings.strengths.title }}</h4>
            <ul class="mt-2 space-y-2 text-sm text-gray-600">
              <li v-for="(item, index) in data.findings.strengths.items" :key="index" class="flex items-start space-x-2">
                <font-awesome-icon icon="check-circle" class="text-green-500 mt-1" />
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>
          
          <div class="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
            <h4 class="text-md font-medium text-red-800">{{ data.findings.weaknesses.title }}</h4>
            <ul class="mt-2 space-y-2 text-sm text-gray-600">
              <li v-for="(item, index) in data.findings.weaknesses.items" :key="index" class="flex items-start space-x-2">
                <font-awesome-icon icon="exclamation-circle" class="text-red-500 mt-1" />
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div class="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
          <h4 class="text-md font-medium text-purple-800">{{ data.findings.aiImpact.title }}</h4>
          <p class="mt-2 text-sm text-gray-600">
            {{ data.findings.aiImpact.content }}
          </p>
        </div>
      </div>
    </div>
    
    <!-- Improvement Suggestions -->
    <div class="bg-white rounded-lg shadow p-4">
      <h3 class="text-lg font-medium text-gray-900 mb-4">教学改进建议</h3>
      
      <div class="space-y-5">
        <div 
          v-for="(category, index) in data.suggestions.categories" 
          :key="index" 
          class="bg-gray-50 p-4 rounded-lg"
        >
          <h4 class="font-medium text-gray-800 mb-3">
            <font-awesome-icon :icon="category.icon" class="mr-2 text-primary-500" />
            {{ category.title }}
          </h4>
          <div class="space-y-3">
            <div v-for="(item, itemIndex) in category.items" :key="itemIndex">
              <h5 class="text-sm font-medium text-gray-700">{{ item.title }}</h5>
              <p class="mt-1 text-sm text-gray-600">
                {{ item.description }}
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

const data = ref({
  findings: {
    overall: {
      title: "总体表现",
      content: "班级在BJT特征频率测量实验中整体表现良好，平均分为83.5分。学生对晶体管基本频率特性、静态工作点原理掌握较好，在电路连接和特征频率测量上存在一定问题。约85%的学生能够获得合理的fT测量值，但对高频模型的理解深度不足。"
    },
    strengths: {
      title: "优势领域",
      items: [
        "静态工作点设置与原理理解深入，正确率达90%以上",
        "BJT基础频率特性知识掌握良好，学生能解释β值随频率变化规律",
        "对测量原理的理解比往年有明显提高，特别是截止频率的定义理解"
      ]
    },
    weaknesses: {
      title: "薄弱环节",
      items: [
        "特征频率测量电路连接错误率高，30%学生连线不完整",
        "对BJT高频等效模型中电容影响的理解不足，尤其是Cμ的作用",
        "示波器使用熟练度不够，20%的学生在调整量程和触发设置上有困难"
      ]
    },
    aiImpact: {
      title: "AI辅助影响",
      content: "分析显示，使用AI辅助的学生在特征频率计算正确率上高出18%，在电路连接诊断上提高了25%的效率。85%的学生对AI辅助表示满意，认为实时反馈对理解概念和解决操作问题有显著帮助。同时观察到，频繁使用AI辅助的学生在下一阶段的独立操作能力有所提升。"
    }
  },
  suggestions: {
    categories: [
      {
        icon: "book-open",
        title: "实验前准备加强",
        items: [
          {
            title: "增强高频模型理解",
            description: "建议增加一节BJT高频等效模型的专题讲解，重点解释结电容的影响。可以开发交互式动画展示频率变化对电容阻抗和电流分配的影响。"
          },
          {
            title: "示波器使用培训",
            description: "建议在实验前增加20分钟的示波器操作专项培训，包括量程调整、触发设置、波形存储等功能，并提供简明操作指南供实验过程参考。"
          }
        ]
      },
      {
        icon: "flask",
        title: "实验过程优化",
        items: [
          {
            title: "电路连接检查点",
            description: "在实验指导书中增加电路连接检查点章节，提供详细的连接步骤图和检查清单，标注容易出错的环节并提供判断方法。"
          },
          {
            title: "分阶段验收",
            description: "将实验过程分为3个验收阶段：静态工作点设置、交流信号测量和特征频率计算。每个阶段完成后由系统自动检查或教师验收，确保学生不会因早期错误影响后续实验。"
          },
          {
            title: "AI辅助深化",
            description: "增强AI辅助功能，加入图像识别分析学生连线状态的能力，提供更精准的连接错误诊断。同时优化对电路问题的解释深度，不仅指出问题，还解释原因和理论基础。"
          }
        ]
      },
      {
        icon: "clipboard-check",
        title: "考核方式调整",
        items: [
          {
            title: "过程评价权重增加",
            description: "建议将实验过程评价在总成绩中的权重从30%提高到50%，更注重学生的操作规范性和问题解决能力，而不仅是最终结果。"
          },
          {
            title: "改进后续评估试题",
            description: "针对发现的薄弱环节，建议调整后续评估题目，增加关于BJT高频等效模型的应用题和电容影响分析题，强化这部分知识的巩固。"
          },
          {
            title: "引入同行互评",
            description: "在实验报告阶段引入同行互评环节，每位学生需要评审1-2份其他学生的报告，并提出改进建议。这有助于学生从评价者角度深化对实验的理解。"
          }
        ]
      }
    ]
  }
})


onMounted(() => {
    setTimeout(_ => {
        updateChart()
    }, 200)
})

function updateChart() {
    getTaskAnalysis(projectId, taskId, taskAnalysisEnum.TASK_D_SUG).then(res => {
        if (res.state == 200) {
            console.log(res.data)
    
        }
    })
}

</script>

<style scoped>
/* Add any additional styles if needed */
</style>