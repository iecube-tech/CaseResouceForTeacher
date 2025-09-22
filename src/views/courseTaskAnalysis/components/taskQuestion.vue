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
            <el-option label="所有题目" value="all"></el-option>
            <el-option label="课前准备题目" value="preparation"></el-option>
            <el-option label="实验操作题目" value="operation"></el-option>
            <el-option label="课后分析题目" value="analysis"></el-option>
          </el-select>
        </div>
      </div>

      <el-table :data="questionTableData" style="width: 100%">
        <el-table-column prop="id" label="题号" width="60"></el-table-column>
        <el-table-column prop="content" label="题目内容"></el-table-column>
        <el-table-column prop="stage" label="阶段" width="120"></el-table-column>
        <el-table-column prop="tag" label="能力标签" width="150">
          <template #default="scope">
            <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full"
              :class="getTagClass(scope.row.tag)">
              {{ scope.row.tag }}
            </span>
          </template>
        </el-table-column>
        <el-table-column prop="accuracy" label="正确率" width="120">
          <template #default="scope">
            <div class="flex items-center">
              <div class="w-16 bg-gray-200 rounded-full h-2.5 mr-2">
                <div class="h-2.5 rounded-full" :class="getAccuracyBarClass(scope.row.accuracy)"
                  :style="{ width: scope.row.accuracy + '%' }"></div>
              </div>
              <span class="text-sm text-gray-600">{{ scope.row.accuracy }}%</span>
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
                    :class="getTagClass(item.tag)">
                    {{ item.tag }}
                  </span>
                  <h4 class="font-medium text-gray-800">{{ item.title }}</h4>
                </div>
              </div>
              <p class="text-sm text-gray-600 mb-3 ml-11">
                <strong>题目：</strong>{{ item.question }}
              </p>
              <div class="ml-11 flex items-center space-x-4">
                <div class="flex items-center">
                  <font-awesome-icon :icon="['fas', 'exclamation-triangle']" class="mr-2"
                    :class="getTop3IconClass(index)" />
                  <span class="text-sm font-medium" :class="getTop3TextClass(index)">正确率: {{ item.accuracy }}%</span>
                </div>
                <div class="flex items-center">
                  <font-awesome-icon :icon="['fas', 'users']" class="text-gray-500 mr-2" />
                  <span class="text-sm text-gray-600">影响学生: {{ item.affectedStudents }}人</span>
                </div>
              </div>
            </div>
            <div class="text-right">
              <div class="text-2xl font-bold" :class="getTop3AccuracyClass(index)">{{ item.accuracy }}%</div>
              <div class="text-xs text-gray-500">正确率</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  name: String
})

const chart1Ref = ref(null)
const chart2Ref = ref(null)

// Data for question type chart
const option1 = ref({
  tooltip: {
    trigger: 'item'
  },
  legend: {
    top: '5%',
    left: 'center'
  },
  grid: {
    top: 0,
    bottom: 0,
  },
  series: [
    {
      name: '能力标签',
      type: 'pie',
      label: {
        show: false,
      },
      labelLine: {
        show: false
      },
      radius: ['40%', '60%'],
      data: [
        { value: 32, name: '频率特性' },
        { value: 25, name: '特征频率计算' },
        { value: 18, name: '电路连接及仪器使用' },
        { value: 15, name: '静态工作点' },
        { value: 10, name: '测量原理' }
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
    }
  },
  grid: {
    top: '10%',
    bottom: '0',
    left: 0,
    right: 0
  },
  legend: {
    show: true,
    top: '0'
  },
  xAxis: [
    {
      type: 'category',
      data: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5'],
      axisTick: {
        alignWithLabel: true
      },
      boundaryGap: false,
    }
  ],
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
      areaStyle: {
        opacity: 0.2,
      },
      barWidth: '60%',
      data: [5, 12, 18, 10, 5],
      itemStyle: {
        color: '#54BFEF'
      }
    }
  ]
})

// Selected question type filter
const selectedQuestionType = ref('all')

// Question table data
const questionTableData = ref([
  {
    id: 1,
    content: '以下哪项是影响BJT特征频率$f_T$的关键因素？',
    stage: '课前准备',
    tag: '频率特性',
    accuracy: 92
  },
  {
    id: 6,
    content: '若BJT的集电结电容Cμ增大，$f_{T}$将如何变化( )？',
    stage: '课后分析',
    tag: '特征频率计算',
    accuracy: 65
  },
  {
    id: 10,
    content: '测量特征频率时的硬件电路连线状态',
    stage: '实验操作',
    tag: '电路连接及仪器使用',
    accuracy: 70
  },
  {
    id: 15,
    content: '实验过程中，将集电极电流设置为5mA左右的原因是什么？',
    stage: '实验操作',
    tag: '静态工作点',
    accuracy: 85
  },
  {
    id: 18,
    content: '从载流子运动的角度，分析基区渡越时间$\\tau_{b}$和集电结耗尽区渡越时间$\\tau_{c}$如何共同限制$f_{T}$。',
    stage: '课后分析',
    tag: '测量原理',
    accuracy: 75
  }
])

// Top 3 error data
const top3Errors = ref([
  {
    tag: '特征频率计算',
    title: '集电结电容Cμ对fT的影响理解不足',
    question: '若BJT的集电结电容Cμ增大，$f_{T}$将如何变化( )？',
    accuracy: 65,
    affectedStudents: 10
  },
  {
    tag: '电路连接及仪器使用',
    title: '特征频率测量电路连接',
    question: '测量特征频率时的硬件电路连线状态',
    accuracy: 70,
    affectedStudents: 9
  },
  {
    tag: '测量原理',
    title: '载流子渡越时间与特征频率关系',
    question: '从载流子运动的角度，分析基区渡越时间τb和集电结耗尽区渡越时间τc如何共同限制fT',
    accuracy: 75,
    affectedStudents: 7
  }
])

// Get tag class based on tag name
const getTagClass = (tag) => {
  const tagClasses = {
    '频率特性': 'bg-blue-100 text-blue-800',
    '特征频率计算': 'bg-purple-100 text-purple-800',
    '电路连接及仪器使用': 'bg-green-100 text-green-800',
    '静态工作点': 'bg-indigo-100 text-indigo-800',
    '测量原理': 'bg-orange-100 text-orange-800'
  }
  return tagClasses[tag] || 'bg-gray-100 text-gray-800'
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
</script>

<style scoped>
.chart {
  width: 100%;
}
</style>