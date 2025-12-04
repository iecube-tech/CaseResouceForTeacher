<template>
  <div class="mt-6 space-y-6 fade-in">

    <!-- 实验进度总览 -->
    <div class="bg-white rounded-lg shadow p-4">
      <div class="flex justify-between items-center mb-4">
        <h3 class="text-lg font-medium text-gray-900">课程概览</h3>
        <div class="flex space-x-2">
          <button
            class="px-3 py-1.5 bg-gray-100 text-gray-700 text-sm rounded-md font-medium hover:bg-gray-200 transition-colors">
            <font-awesome-icon icon="fas fa-file-export" class="mr-1" /> 导出数据
          </button>
        </div>
      </div>

      <el-table :data="experiments" style="width: 100%">
        <el-table-column prop="ptName" label="实验名称" min-width="170">
          <template #default="scope">
            <div class="flex items-center">
              <div :class="[
                'flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full',
                getIconBgClass(scope.row.ptIcon)
              ]">
                <font-awesome-icon :icon="scope.row.ptIcon" :class="getIconClass(scope.row.ptIcon)" />
              </div>
              <div class="ml-4">
                <div class="text-sm font-medium text-gray-900">{{ scope.row.ptName }}</div>
                <div class="text-sm text-gray-500">{{ scope.row.avgScore }}</div>
              </div>
            </div>
          </template>
        </el-table-column>

        <el-table-column prop="status" label="状态" width="80">
          <template #default="scope">
            <my-tag class="font-semibold rounded-full" :color="getStatusType(scope.row.status)"
              :text="scope.row.status ? '已完成' : '未完成'"></my-tag>
          </template>
        </el-table-column>

        <el-table-column prop="doneTime" label="完成时间" width="135">
          <template #default="scope">
            <span class="text-sm text-gray-500">{{ formatTime(scope.row.doneTime) }}</span>
          </template>
        </el-table-column>

        <el-table-column prop="rageOfDone" label="完成率" width="150">
          <template #default="scope">
            <div class="flex items-center">
              <span class="text-sm text-gray-900 mr-2 w-[80px]">{{ scope.row.rageOfDone }}%</span>
              <div class="w-24 bg-gray-200 rounded-full h-1.5">
                <div class="h-1.5 rounded-full" :class="getProgressClass(scope.row.rageOfDone)"
                  :style="{ width: scope.row.rageOfDone + '%' }">
                </div>
              </div>
            </div>
          </template>
        </el-table-column>

        <el-table-column prop="avgScore" label="平均分数" width="80">
          <template #default="scope">
            <span class="text-sm text-gray-500">{{ scope.row.avgScore }}</span>
          </template>
        </el-table-column>

        <el-table-column prop="keyTag" label="关键能力" min-width="180">
          <template #default="scope">
            <div class="flex flex-wrap gap-1">
              <my-tag class="mr-1 mb-1 px-2.5 py-0.5 font-medium rounded-md" v-for="(ability, k) in scope.row.keyTag"
                :key="k" :color="getAbilityType()" :text="ability">
              </my-tag>
            </div>
          </template>
        </el-table-column>

        <el-table-column label="操作">
          <template #default="scope">
            <el-link type="primary" @click="viewDetail(scope.row)">查看详情</el-link>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <!-- 实验详情分析 - BJT特征频率测量 -->
    <div class="bg-white rounded-lg shadow p-4">
      <div class="flex justify-between items-center mb-4">
        <h3 class="text-lg font-medium text-gray-900">实验详情</h3>
        <div class="relative">
          <el-select v-model="currentLab" @change="handleChangeTask">
            <el-option v-for="(labItem, k) in labList" :key="k" :label="labItem" :value="labItem"></el-option>
          </el-select>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- 实验概览 -->
        <div class="bg-gray-50 p-4 rounded-lg">
          <h4 class="font-medium text-gray-800 mb-4">实验概览</h4>
          <div class="space-y-4">
            <div class="bg-white p-3 rounded-lg flex items-center justify-between">
              <div class="flex items-center">
                <div class="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                  <font-awesome-icon icon="fas fa-users" class="text-green-600" />
                </div>
                <div class="ml-3">
                  <div class="text-xs text-gray-500">完成人数</div>
                  <div class="text-sm font-medium text-gray-700">
                    {{currentlabDetail.overview.stuNumOfDone}}/
                    {{currentlabDetail.overview.stuNumOfTotal}}
                  </div>
                </div>
              </div>
              <div>
                <div class="text-sm font-medium text-green-600">
                  <span v-if="currentlabDetail.overview.stuNumOfTotal == 0"></span>
                  <span v-else>{{ ((currentlabDetail.overview.stuNumOfDone / currentlabDetail.overview.stuNumOfTotal) * 100).toFixed(2) }} %</span>
                </div>
              </div>
            </div>

            <div class="bg-white p-3 rounded-lg flex items-center justify-between">
              <div class="flex items-center">
                <div class="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <font-awesome-icon icon="fas fa-chart-line" class="text-blue-600" />
                </div>
                <div class="ml-3">
                  <div class="text-xs text-gray-500">平均得分</div>
                  <div class="text-sm font-medium text-gray-700">
                    {{currentlabDetail.overview.avgScore}}/
                    {{currentlabDetail.overview.totalScore}}
                  </div>
                </div>
              </div>
              <div>
                <span class="text-xs text-green-500">
                  <span v-if="currentlabDetail.overview.totalScore == 0"></span>
                  <span v-else>
                    <font-awesome-icon icon="fas fa-arrow-up" class="text-green-500" />
                    {{ ((currentlabDetail.overview.avgScore / currentlabDetail.overview.totalScore) * 100).toFixed(2) }} %
                  </span>
                </span>
              </div>
            </div>

            <div class="bg-white p-3 rounded-lg flex items-center justify-between">
              <div class="flex items-center">
                <div class="h-10 w-10 rounded-full bg-yellow-100 flex items-center justify-center">
                  <font-awesome-icon icon="fas fa-clock" class="text-yellow-600" />
                </div>
                <div class="ml-3">
                  <div class="text-xs text-gray-500">平均用时</div>
                  <div class="text-sm font-medium text-gray-700">
                    {{ Math.round(currentlabDetail.overview.avgMillis / 1000 / 60) }}分钟</div>
                </div>
              </div>
              <div>
                <font-awesome-icon icon="fas fa-arrow-down" class="text-green-500" />
                <span class="text-xs text-green-500">5分钟</span>
              </div>
            </div>

            <div class="bg-white p-3 rounded-lg flex items-center justify-between">
              <div class="flex items-center">
                <div class="h-10 w-10 rounded-full bg-red-100 flex items-center justify-center">
                  <font-awesome-icon icon="fas fa-exclamation-circle" class="text-red-600" />
                </div>
                <div class="ml-3">
                  <div class="text-xs text-gray-500">平均错误率</div>
                  <div class="text-sm font-medium text-gray-700">
                    {{currentlabDetail.overview.rageOfError}}%</div>
                </div>
              </div>
              <div>
                <font-awesome-icon icon="fas fa-arrow-down" class="text-green-500" />
                <span class="text-xs text-green-500">3.1%</span>
              </div>
            </div>
          </div>
        </div>

        <!-- 成绩分布 -->
        <div class="bg-gray-50 p-4 rounded-lg">
          <h4 class="font-medium text-gray-800 mb-4">成绩分布</h4>
          <v-chart ref="chart1Ref" :option="option1"
            style="display: block; box-sizing: border-box; height: 320px; width: 330px;"></v-chart>
        </div>

        <!-- 能力评价 -->
        <div class="bg-gray-50 p-4 rounded-lg">
          <h4 class="font-medium text-gray-800 mb-4">能力评价</h4>
          <div class="space-y-4">
            <div v-for="(item, index) in currentlabDetail.ability" :key="index">
              <div class="flex justify-between mb-1">
                <span class="text-sm font-medium text-gray-700">{{ item.tagName }}</span>
                <span class="text-sm" :class="getAbilityColorClass(item.value)">{{ item.value }}%</span>
              </div>
              <div class="w-full bg-white rounded-full h-2.5">
                <div class="h-2.5 rounded-full" :class="getAbilityBarClass(item.value)"
                  :style="{ width: item.value + '%' }">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 实验比较分析 -->
    <div class="bg-white rounded-lg shadow p-4">
      <h3 class="text-lg font-medium text-gray-900 mb-4">实验比较分析</h3>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- 实验难度对比 -->
        <div class="bg-gray-50 p-4 rounded-lg">
          <h4 class="font-medium text-gray-800 mb-3">实验难度对比</h4>
          <v-chart ref="chart2Ref" :option="option2"
            style="display: block; box-sizing: border-box; height: 256px; width: 524px;"></v-chart>
          <p class="mt-2 text-xs text-gray-500 text-center">
            难度评估基于平均用时、错误率和AI求助频率等指标，通过AI分析，仅供参考
          </p>
        </div>

        <!-- 实验成绩对比 -->
        <div class="bg-gray-50 p-4 rounded-lg">
          <h4 class="font-medium text-gray-800 mb-3">实验成绩对比</h4>
          <v-chart ref="chart3Ref" :option="option3"
            style="display: block; box-sizing: border-box; height: 256px; width: 524px;"></v-chart>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>

import myTag from '@/components/myTag.vue'
import dayjs from 'dayjs';
const formatTime = (time) => {
  if (time) {
    return dayjs(time).format('YYYY-MM-DD HH:mm')
  } else {
    return '--'
  }
}

const route = useRoute()

const projectId = route.params.projectId
import router from '@/router';

const props = defineProps({
  name: String
})

// 实验列表
const experiments = ref([])


// 获取图标背景色
const getIconBgClass = (category) => {
  const bgClasses = {
    'fas fa-file': 'bg-blue-100',
    // 'fas fa-folder': 'bg-purple-100',
    // 'fas fa-file-lines': 'bg-indigo-100',
    'fas fa-file-lines': 'bg-green-100',
    'fas fa-folder': 'bg-yellow-100',
    // 'plug': 'bg-red-100'
  }
  return bgClasses[category] || 'bg-blue-100'
}

// 获取图标颜色
const getIconClass = (category) => {
  const iconClasses = {
    'fas fa-file': 'text-blue-600',
    // 'fas fa-folder': 'text-purple-600',
    // 'fas fa-file-lines': 'text-indigo-600',
    'fas fa-file-lines': 'text-green-600',
    'fas fa-folder': 'text-yellow-600',
    // 'plug': 'text-red-600'
  }
  return iconClasses[category] || 'text-blue-600'
}

// 获取状态标签类型
const getStatusType = (status) => {
  const statusTypes = {
    '1': 'green',
    // '进行中': 'yellow',
    '0': 'gray'
  }
  return statusTypes[status] || 'gray'
}

// 获取进度条颜色
const getProgressClass = (rate) => {
  if (rate >= 90) return 'bg-green-500'
  if (rate >= 70) return 'bg-yellow-500'
  if (rate >= 50) return 'bg-orange-500'
  return 'bg-red-500'
}

// 获取能力标签类型
const getAbilityType = () => {
  let type = ['green', 'yellow', 'red', 'blue', 'purple', 'indigo', 'pink', 'orange']
  let i = Math.random() * 8
  const randomIndex = Math.floor(i)
  return type[randomIndex];
}

// 查看详情
const viewDetail = (row) => {
  console.log('查看实验详情:', row)
  router.push({
    name: 'courseTaskAnalysis',
    params: {
      projectId: route.params.projectId,
      taskId: row.ptId
    }
  })
}





//
const currentLab = ref('BJT特征频率测量')
const labList = ref([])

const currentlabDetail = ref({
  overview: {
    avgMillis: 0,
    avgScore : 0,
    rageOfError : 0,
    stuNumOfDone : 0,
    stuNumOfTotal : 0,
    totalScore : 0,
  },
  distributionOfGrade: [],
  ability: []
})

// 能力评价数据
// const abilityData = ref([
//   { name: '频率特性理解', value: 85 },
//   { name: '测量原理掌握', value: 80 },
//   { name: '电路连接操作', value: 72 },
//   { name: '特征频率计算', value: 75 },
//   { name: '静态工作点', value: 60 },
//   { name: '测量电路理解', value: 65 },
//   { name: '特征频率测量', value: 55 }
// ])

// 获取能力评价文字颜色
const getAbilityColorClass = (value) => {
  if (value >= 80) return 'text-green-500'
  if (value >= 70 && value < 80) return 'text-blue-500'
  if (value >= 60 && value < 70) {
    return 'text-yellow-500'
  } else {
    return 'text-red-500'
  }

}

// 获取能力评价进度条颜色
const getAbilityBarClass = (value) => {
  if (value >= 80) return 'bg-green-500'
  if (value >= 70 && value < 80) return 'bg-blue-500'
  if (value >= 60 && value < 70) {
    return 'bg-yellow-500'
  } else {
    return 'bg-red-500'
  }
}




const chart1Ref = ref(null)
const chart2Ref = ref(null)
const chart3Ref = ref(null)

watchEffect(() => {
  if (props.name === 'courseExperiments') {
    setTimeout(_ => {
      chart1Ref.value && chart1Ref.value.resize()
      chart2Ref.value && chart2Ref.value.resize()
      chart3Ref.value && chart3Ref.value.resize()
    }, 100)
  }
})


const option1 = ref(null)
option1.value = {
  title: {
    show: false,
  },
  grid: {
    top: '10%',
    bottom: 0,
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    },
    formatter: '{b}: {c}%'
  },
  xAxis: {
    type: 'category',
    data: ['90-100', '80-90', '70-80', '60-70', '<60'],
    axisLabel: {
      interval: 0,  // Display all labels
      rotate: 0,    // Keep labels horizontal
      fontSize: 12
    }
  },
  yAxis: {
    type: 'value',
  },
  // color: ['#38B1E8'],
  series: [
    {
      type: 'bar',
      barWidth: '60%',
      data: [
        {
          value: 60,
          itemStyle: { color: '#32C96A' } // Green for 90-100
        },
        {
          value: 80,
          itemStyle: { color: '#609DFE' } // Light green for 80-90
        },
        {
          value: 75,
          itemStyle: { color: '#F8954E' } // Yellow for 70-80
        },
        {
          value: 55,
          itemStyle: { color: '#F0CA52' } // Orange for 60-70
        },
        {
          value: 20,
          itemStyle: { color: '#F47C7C' } // Red for <60
        }
      ]
    },
  ]
}

const option2 = ref()
option2.value = {
  title: {
    show: false,
  },
  grid: {
    top: '10%',
    bottom: 0,
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    },
    formatter: '{b}: {c}%'
  },
  xAxis: {
    type: 'value',
    axisLabel: {
      formatter: '{value} %'
    }
  },
  yAxis: {
    type: 'category',
    data: ['课程整体进度', '实验完成率', '知识点掌握率', '课程目标达成度']
  },
  color: ['#54BFEF'],
  series: [
    {
      type: 'bar',
      barWidth: '50%',
      data: [60, 80, 75, 55]
    },
  ]
}

const option3 = ref()
option3.value = {
  title: {
    show: false,
  },
  grid: {
    top: '10%',
    bottom: 0,
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    },
    formatter: '{b}: {c}%'
  },
  xAxis: {
    type: 'value',
    axisLabel: {
      formatter: '{value} %'
    }
  },
  yAxis: {
    type: 'category',
    data: [], //['BJT特征频率测量', '晶体管特性测量', '共射放大器设计', '运算放大器应用']
  },
  color: ['#62D58D'],
  series: [
    {
      type: 'bar',
      barWidth: '50%',
      data: [
        /* {
          value: 50,
          itemStyle: { color: '#F47C7C' } // Red for <60
        },
        {
          value: 75,
        },
        {
          value: 88,
        },
        {
          value: 70,
        }, */
      ]
    },
  ]
}


import { analysisTypeEnum, getAnaylsis, handleScoreOption } from "@/apis/embV4/analysis"

// 实验详情 列表
let taskDetailList = []

function handleTaskDetail(list) {
  taskDetailList = list || []
  let labs = list.map(_ => _.ptName)
  labList.value = labs
  if (labs.length) {
    currentLab.value = labs[0]
    handleChangeTask(currentLab.value)
  } else {
    currentLab.value = ''
  }
}

function handleChangeTask(labName){
  let index = taskDetailList.findIndex(_ => labName == _.ptName)
  let labDetail = taskDetailList[index]
  currentlabDetail.value = labDetail
  option1.value = handleScoreOption(currentlabDetail.value.distributionOfGrade, option1)
  chart1Ref.value && chart1Ref.value.setOption(option1.value)
}

onMounted(() => {
  setTimeout(() => {
    updateChart()
  }, 200)
})

function updateChart() {
  getAnaylsis(projectId, analysisTypeEnum.T_EA_OVERVIEW).then(res => {
    if (res.state == 200) {
      experiments.value = res.data
    }
  })

  getAnaylsis(projectId, analysisTypeEnum.T_EA_ED).then(res => {
    if (res.state == 200) {
      handleTaskDetail(res.data)
    }
  })
  
  getAnaylsis(projectId, analysisTypeEnum.T_EA_ECA).then(res => {
    if(res.state == 200) {
      // console.log(res.data)
      let difficulty = res.data.difficulty || [] 
      let grade =  res.data.grade || []
      handleDifficultyOption(difficulty)
      handleGradeOption(grade)
    }
  })
}

// TODO 数据缺失
function handleDifficultyOption(difficulty) {
  
}

function handleGradeOption(grades) {
  let yAxisData = grades.map(_=> _.ptName)
  let datas = grades.map(_=> {
    let item = {
      value: _.avgScore
    }
    if(_.avgScore < 60) {
      item.itemStyle = { color: '#F47C7C' }
    }
    return item
  })
  option3.value.yAxis.data = yAxisData
  option3.value.series[0].data = datas
  chart3Ref.value && chart3Ref.value.setOption(option3.value)
}



</script>

<style scoped></style>