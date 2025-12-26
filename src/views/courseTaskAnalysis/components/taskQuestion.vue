<template>
  <div class="mt-6 space-y-6 fade-in">
    <!-- 题目隶属能力标签分布 -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="bg-white rounded-lg shadow p-4 hover-card">
        <h3 class="text-lg font-medium text-gray-900 mb-4">题目隶属能力标签分布</h3>
        <v-chart ref="chart1Ref" :option="option1" class="chart" style="height: 300px;" />
      </div>

      <div class="bg-white rounded-lg shadow p-4 hover-card">
        <h3 class="text-lg font-medium text-gray-900 mb-4">题目正确率分析</h3>
        <v-chart ref="chart2Ref" :option="option2" class="chart" style="height: 300px;" />
      </div>
    </div>

    <!-- 题目详情分析 -->
    <div class="bg-white rounded-lg shadow p-4">
      <div class="flex justify-between items-center mb-4">
        <h3 class="text-lg font-medium text-gray-900">题目详情分析</h3>
        <div class="relative">
          <el-select v-model="selectedQuestionType" size="small" class="w-40">
            <el-option label="所有题目" value=""></el-option>
            <el-option label="课前准备题目" value="0"></el-option>
            <el-option label="实验操作题目" value="1"></el-option>
            <el-option label="课后分析题目" value="2"></el-option>
          </el-select>
        </div>
      </div>

      <el-table :data="questionTableFilterData" style="width: 100%" stripe>
        <el-table-column prop="id" label="序号" width="60">
          <template #default="{$index}">
            <span class="text-sm">{{ $index + 1 }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="question" label="题目内容">
          <template #default="{ row }">
            <!-- {{ row.question }}  -->
              <textpreview :content="row.question"  class="flex items-center"></textpreview>
          </template>
        </el-table-column>
        <el-table-column prop="stage" label="阶段" width="120">
          <template #default="{ row }">
            {{ stageLabel(row.stage) }}
          </template>
        </el-table-column>
        <el-table-column prop="tagName" label="能力标签" width="200">
          <template #default="scope">
            <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full"
              :class="getTagClass(scope.row.tagName)">
              {{ scope.row.tagName }}
            </span>
          </template>
        </el-table-column>
        <el-table-column prop="accuracy" label="正确率" width="150">
          <template #default="scope">
            <div class="flex items-center">
              <div class="w-16 bg-gray-200 rounded-full h-2.5 mr-2">
                <div class="h-2.5 rounded-full" :class="getAccuracyBarClass(scope.row.accuracyRate)"
                  :style="{ width: scope.row.accuracyRate + '%' }"></div>
              </div>
              <span class="text-sm text-gray-600">{{ scope.row.accuracyRate }}%</span>
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <!-- Top3错误问题分析 -->
    <div class="bg-white rounded-lg shadow p-6">
      <div class="flex items-center justify-between mb-6">
        <h3 class="text-lg font-medium text-gray-900">学生错误问题Top3分析</h3>
        <div class="flex items-center space-x-2 text-sm text-gray-500">
          <font-awesome-icon :icon="['fas', 'chart-line']" />
          <span>基于正确率排序</span>
        </div>
      </div>

      <div class="space-y-4">
        <div v-for="(item, index) in top3Errors" :key="index" class="p-5 rounded-lg border-l-4 bg-gradient-to-r" :class="index === 0 ? 'from-red-50 to-red-100 border-red-500' :
          index === 1 ? 'from-orange-50 to-orange-100 border-orange-500' :
            index === 2 ? 'from-yellow-50 to-yellow-100 border-yellow-500' : ''">
          <div class="flex items-start justify-between">
            <div class="flex-1">
              <div class="flex items-center mb-2">
                <span
                  class="inline-flex items-center justify-center w-8 h-8 text-white text-sm font-bold rounded-full mr-3"
                  :class="getTop3RankClass(index)">
                  {{ index + 1 }}
                </span>
                <div>
                  <span class="inline-block px-3 py-1 text-xs font-medium rounded-full mb-1"
                    :class="getTop3RankTxtClass(index)">
                    {{ item.tagName }}
                  </span>
                  <!-- <h4 class="font-medium text-gray-800">{{ item.tagName }}</h4> -->
                </div>
              </div>
              <p class="text-sm text-gray-600 mb-3 ml-11">
                <strong>题目：</strong>
                <textpreview :content="item.question"></textpreview>
              </p>
              <div class="ml-11 flex items-center space-x-4">
                <div class="flex items-center">
                  <font-awesome-icon :icon="['fas', 'exclamation-triangle']" class="mr-2"
                    :class="getTop3IconClass(index)" />
                  <span class="text-sm font-medium" :class="getTop3TextClass(index)">正确率: {{ item.accuracyRate }}%</span>
                </div>
                <div class="flex items-center">
                  <font-awesome-icon :icon="['fas', 'users']" class="text-gray-500 mr-2" />
                  <span class="text-sm text-gray-600">影响学生: {{ item.errorNum }}人</span>
                </div>
              </div>
            </div>
            <div class="text-right">
              <div class="text-2xl font-bold" :class="getTop3AccuracyClass(index)">{{ item.accuracyRate }}%</div>
              <div class="text-xs text-gray-500">正确率</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { taskAnalysisEnum, getTaskAnalysis } from '@/apis/embV4/analysis'
import textpreview from '@/components/textPreview.vue'
const route = useRoute()
const projectId = route.params.projectId
const taskId = route.params.taskId

import { color } from '@/apis/color'
const props = defineProps({
  name: String
})

const chart1Ref = ref(null)
const chart2Ref = ref(null)

// Data for question type chart
const option1 = ref({
  /* legend: {
    top: '0%',
    left: 'center'
  }, */
  grid: {
    top: 0,
    bottom: 0,
  },
  color,
  tooltip: {
    trigger: 'item',
    // formatter: '{b} : {c} ({d}%)'
    formatter: '{b} :  {c} - {d}%'
  },
  series: [
    {
      name: '能力标签',
      type: 'pie',
      /* label: {
        show: false,
      },
      labelLine: {
        show: false
      }, */
      label: {
        rich: {
          title: {
            padding: [0, 0, 4, 0] // Bottom padding for extra spacing
          },
          value: {
            fontSize: 12,
            color: '#666'
          }
        },
        //  formatter: `{b} :\n  {c} - {d}%`,
        formatter: '{title|{b}:}\n{value|  {c} - {d}%}'
      },
      radius: ['40%', '60%'],
      data: [
       
      ]
    }
  ]
})

// Data for question difficulty chart
const option2 = ref({
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    },
    formatter: '{b} :  {c}%'
  },
  grid: {
    top: '10%',
    bottom: '15%',
    left: 0,
    right: 0
  },
  legend: {
    show: true,
    top: '0'
  },
  xAxis: {
    type: 'category',
    data: [], 
    axisTick: {
      alignWithLabel: true
    },
    boundaryGap: false,
  },
  yAxis: [
    {
      type: 'value',
      axisLabel: {
        formatter: '{value} %'
      }
    }
  ],
  series: [
    {
      name: '正确率',
      type: 'line',
      smooth: true, // Enables smooth curve
      areaStyle: {
        opacity: 0.2,
      },
      barWidth: '60%',
      data: [], 
      itemStyle: {
        color: '#54BFEF'
      }
    }
  ]
})

// Selected question type filter
const selectedQuestionType = ref('')

// Question table data
const questionTableData = ref([])

const top3Errors = computed(()=>{
  let list_clone = JSON.parse(JSON.stringify(questionTableData.value))
  let list =  list_clone.sort((a,b) => b.errorRate - a.errorRate)
  let top3 = list.slice(0,3)
  return top3
})

function strToNumSimple(str) {
  // 1. 遍历字符，获取每个字符的 Unicode 编码（UTF-16）
  let codeSum = 0;
  for (let i = 0; i < str.length; i++) {
    codeSum += str.charCodeAt(i); // charCodeAt 返回 UTF-16 编码值（0-65535）
  }
  return codeSum;
}

// Get tag class based on tag name
const getTagClass = (tag) => {
  let n = strToNumSimple(tag)
  let index = n % 10;
  let style = [
    'bg-blue-100 text-blue-800',
    'bg-purple-100 text-purple-800',
    'bg-green-100 text-green-800',
    'bg-indigo-100 text-indigo-800',
    'bg-orange-100 text-orange-800',
    'bg-pink-100 text-pink-800',
    'bg-gray-100 text-gray-800',
    'bg-red-100 text-red-800',
    'bg-yellow-100 text-yellow-800',
    'bg-teal-100 text-teal-800'
  ]
  return  style[index]
}

// Get accuracy bar color class
const getAccuracyBarClass = (accuracy) => {
  if (accuracy >= 80) return 'bg-green-500'
  if (accuracy >= 70) return 'bg-yellow-500'
  return 'bg-red-500'
}

// Get Top 3 error container class
const getTop3ErrorClass = (index) => {
  const classes = [
    'from-red-50 to-red-100 border-red-500',
    'from-orange-50 to-orange-100 border-orange-500',
    'from-yellow-50 to-yellow-100 border-yellow-500'
  ]
  return classes[index]
}

// Get Top 3 rank background class
const getTop3RankClass = (index) => {
  const classes = [
    'bg-red-500',
    'bg-orange-500',
    'bg-yellow-500'
  ]
  return classes[index]
}

const getTop3RankTxtClass = (index) => { 
  const classes =[
    'bg-red-400 text-white',
    'bg-orange-400 text-white',
    'bg-yellow-400 text-white'
  ]
   return classes[index]
}

// Get Top 3 icon class
const getTop3IconClass = (index) => {
  const classes = [
    'text-red-500',
    'text-orange-500',
    'text-yellow-500'
  ]
  return classes[index]
}

// Get Top 3 text class
const getTop3TextClass = (index) => {
  const classes = [
    'text-red-700',
    'text-orange-700',
    'text-yellow-700'
  ]
  return classes[index]
}

// Get Top 3 accuracy class
const getTop3AccuracyClass = (index) => {
  const classes = [
    'text-red-600',
    'text-orange-600',
    'text-yellow-600'
  ]
  return classes[index]
}

watchEffect(() => {
  if (props.name === 'taskQuestion') {
    setTimeout(_ => {
      chart1Ref.value && chart1Ref.value.resize()
      chart2Ref.value && chart2Ref.value.resize()

    }, 200)
  }
})

onMounted(() => {
  setTimeout(_ => {
    updateChart()
  }, 200)
})

function updateChart() {
  getTaskAnalysis(projectId, taskId, taskAnalysisEnum.TASK_D_QUES).then(res => {
    if (res.state == 200) {
      let tagOfQuesDistribution = res.data.tagOfQuesDistribution
      let quesDetail = res.data.quesDetail
      setChart1(tagOfQuesDistribution)
      setChart2(quesDetail)
    }
  })
}

function setChart1(list) {
  // console.log(list)
  let data = list.map(_ => {
    return {
      name: _.name,
      value: _.value,
      // count: _.value,
    }
  })
  option1.value.series[0].data = data
  // chart1Ref.value && chart1Ref.value.setOption(option1.value)

}

function setChart2(list) {
  let xAxisData = list.map( (_, index) => `Q${index+1}`)
  let yData = list.map(_ => _.accuracyRate)
  option2.value.xAxis.data = xAxisData
  option2.value.series[0].data = yData
  // chart2Ref.value && chart2Ref.value.setOption(option2.value)
  
  list.forEach(_=>{
    let obj = JSON.parse(_.payload)
    _.question = obj.question.question
  })
  questionTableData.value = list
}

const questionTableFilterData = computed(()=>{
  let res = []
  if(selectedQuestionType.value == '') {
    res = questionTableData.value
  }else {
    res = questionTableData.value.filter(item => item.stage == selectedQuestionType.value)
  }
  return res;
})

function stageLabel(index){
  return index === 0 ? '课前预习' : index === 1 ? '实验操作' : '课后考核'
}
</script>

<style scoped>
.chart {
  width: 100%;
}
</style>