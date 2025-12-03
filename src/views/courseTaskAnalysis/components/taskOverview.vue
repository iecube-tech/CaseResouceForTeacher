<template>
  <div class="mt-6 space-y-6 fade-in" style="">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- 成绩分布卡片 -->
      <div class="bg-white rounded-lg shadow p-4 hover-card">
        <h3 class="text-lg font-medium text-gray-900 mb-4">班级实验成绩分布</h3>
        <v-chart ref="chart1Ref" :option="option1" class="chart-container"
          style="height: 300px; width: 100%;"></v-chart>
      </div>

      <!-- 实验阶段完成情况 -->
      <div class="bg-white rounded-lg shadow p-4 hover-card">
        <h3 class="text-lg font-medium text-gray-900 mb-4">实验阶段平均得分</h3>
        <v-chart ref="chart2Ref" :option="option2" class="chart-container"
          style="height: 300px; width: 100%;"></v-chart>
      </div>
    </div>

    <!-- 实验数据表格 -->
    <div class="bg-white rounded-lg shadow p-4">
      <div class="flex justify-between items-center mb-4">
        <h3 class="text-lg font-medium text-gray-900">学生实验数据总览</h3>
        <div class="flex items-center space-x-2">
          <el-input v-model="searchKeyword" placeholder="搜索学生..." size="small" clearable style="width: 200px">
            <template #prefix>
              <font-awesome-icon icon="search" />
            </template>
          </el-input>
          <el-button type="success" size="small">
            <font-awesome-icon icon="file-excel" class="mr-1" /> 导出
          </el-button>
        </div>
      </div>

      <el-table :data="filteredTableData" style="width: 100%" stripe height="500px">
        <el-table-column prop="studentId" label="学号" width="140"></el-table-column>
        <el-table-column prop="studentName" label="姓名"></el-table-column>
        <el-table-column prop="score" label="总分">
          <template #default="scope">
            <span :class="getScoreClass(scope.row.score)">{{ scope.row.score }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="preparation" label="课前准备">
          <template #default="{row}">
            <span>{{ row.stageRage[0] }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="operation" label="实验操作">
          <template #default="{row}">
            <span>{{ row.stageRage[1] }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="analysis" label="课后分析">
          <template #default="{row}">
            <span>{{ row.stageRage[2] }}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template #default="scope">
            <el-button type="primary" link @click="jumpToDetail(scope.row)">详情</el-button>
          </template>
        </el-table-column>
      </el-table>

    </div>
  </div>
</template>

<script setup>

import {taskAnalysisEnum , getTaskAnalysis, handleScoreOption} from '@/apis/embV4/analysis'
const router = useRouter()
const route = useRoute()

const projectId = route.params.projectId
const taskId = route.params.taskId

const props = defineProps({
  name: String
})

const jumpToDetail = (row) => {
  console.log(row)
  router.push({
    name: 'courseTaskAnalysisStudent',
    params: {
      projectId: route.params.projectId,
      taskId: route.params.taskId,
      // studentId: row.studentId
      psId: row.psId
    },
  })
}

const searchKeyword = ref('')

const loading = ref(false)

const studentList = ref([])

const filteredTableData = computed(() => {
  let filtered = studentList.value
  if (searchKeyword.value) {
    filtered = studentList.value.filter(item =>
      item.studentId.includes(searchKeyword.value) ||
      item.studentName.includes(searchKeyword.value)
    )
  }

  return filtered;
})


const getScoreClass = (score) => {
  if (score >= 90) return 'text-green-500'
  if (score >= 80) return 'text-blue-500'
  if (score >= 70) return 'text-yellow-500'
  return 'text-red-500'
}

const chart1Ref = ref(null)
const chart2Ref = ref(null)

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
    formatter: '学生人数: {c}'
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
          value: 0,
          itemStyle: {
            color: '#32C96A',
          },
          // Green for 90-100
        },
        {
          value: 0,
          itemStyle: {
            color: '#609DFE',

          } // Light green for 80-90
        },
        {
          value: 0,
          itemStyle: {
            color: '#F8954E',
          } // Yellow for 70-80
        },
        {
          value: 0,
          itemStyle: {
            color: '#F0CA52',
          } // Orange for 60-70
        },
        {
          value: 0,
          itemStyle: {
            color: '#F47C7C',
          } // Red for <60
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
    formatter: '平均得分: {c}'
  },
  xAxis: {
    type: 'value',
    axisLabel: {
      formatter: '{value}'
    }
  },
  yAxis: {
    type: 'category',
    data: ['课前准备', '实验操作', '课后考核']
  },
  color: ['#54BFEF'],
  series: [
    {
      type: 'bar',
      barWidth: '50%',
      data: [], //[60, 80, 75],
      // 设置bar opcacity
      itemStyle: {
        opacity: 0.8,
      }
    },
  ]
}


watchEffect(() => {
  if (props.name === 'taskOverview') {
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
  getTaskAnalysis(projectId, taskId, taskAnalysisEnum.TASK_D_OVERVIEW).then(res => {
    if(res.state == 200){
      setChart1(res.data.scoreDistribution)
      setChart2(res.data.stageAvgScore)
      setStudentList(res.data.students)
    }
  })
}

function setChart1(list){
  handleScoreOption(list, option1)
  chart1Ref.value && chart1Ref.value.setOption(option1.value)
}

function setChart2(list){
  let data = list.map(_ => _.value)
  option2.value.series[0].data = data
  chart2Ref.value && chart2Ref.value.setOption(option2.value)
}

function setStudentList(list) {
  studentList.value = list
}
</script>

<style scoped>
/* You can add any additional styles here if needed */
</style>