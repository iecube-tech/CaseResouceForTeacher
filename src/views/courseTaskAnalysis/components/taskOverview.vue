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
          <!--  <el-button size="small">
            <font-awesome-icon icon="filter" class="mr-1" /> 筛选
          </el-button> -->
          <el-button type="success" size="small">
            <font-awesome-icon icon="file-excel" class="mr-1" /> 导出
          </el-button>
        </div>
      </div>

      <el-table :data="filteredTableData" style="width: 100%" stripe>
        <el-table-column prop="studentId" label="学号" width="140"></el-table-column>
        <el-table-column prop="name" label="姓名"></el-table-column>
        <el-table-column prop="totalScore" label="总分">
          <template #default="scope">
            <span :class="getScoreClass(scope.row.totalScore)">{{ scope.row.totalScore }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="preparation" label="课前准备"></el-table-column>
        <el-table-column prop="operation" label="实验操作"></el-table-column>
        <el-table-column prop="analysis" label="课后分析"></el-table-column>
        <el-table-column label="操作">
          <template #default="scope">
            <el-button type="primary" link @click="jumpToDetail(scope.row)">详情</el-button>
          </template>
        </el-table-column>
      </el-table>

      <!-- <div class="flex justify-between items-center mt-4">
        <div class="text-sm text-gray-500">
          显示 {{ (currentPage - 1) * pageSize + 1 }}-{{ Math.min(currentPage * pageSize, total) }} 条，共 {{ total }} 条
        </div>
        <el-pagination v-model:current-page="currentPage" v-model:page-size="pageSize" :page-sizes="[5, 10, 20, 50]"
          :total="total" layout="prev, pager, next, sizes, jumper" background small @size-change="handleSizeChange"
          @current-change="handleCurrentChange" />
      </div> -->
    </div>
  </div>
</template>

<script setup>
const router = useRouter()
const route = useRoute()

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
      studentId: row.studentId
    },
  })
}

const searchKeyword = ref('')
// const currentPage = ref(1)
// const pageSize = ref(5)
// const total = ref(30)
const loading = ref(false)

// Sample data - in real application this would come from an API
const tableData = ref([
  { studentId: '2023001', name: '张三', totalScore: 92, preparation: '100%', operation: '85%', analysis: '92%' },
  { studentId: '2023002', name: '李四', totalScore: 95, preparation: '100%', operation: '95%', analysis: '90%' },
  { studentId: '2023003', name: '王五', totalScore: 78, preparation: '67%', operation: '70%', analysis: '85%' },
  { studentId: '2023004', name: '赵六', totalScore: 65, preparation: '33%', operation: '75%', analysis: '70%' },
  { studentId: '2023005', name: '孙七', totalScore: 88, preparation: '100%', operation: '80%', analysis: '85%' },
  { studentId: '2023006', name: '周八', totalScore: 90, preparation: '100%', operation: '88%', analysis: '82%' },
  { studentId: '2023007', name: '吴九', totalScore: 72, preparation: '70%', operation: '72%', analysis: '74%' },
  { studentId: '2023008', name: '郑十', totalScore: 85, preparation: '90%', operation: '80%', analysis: '85%' },
  { studentId: '2023009', name: '王十一', totalScore: 79, preparation: '75%', operation: '78%', analysis: '83%' },
  { studentId: '2023010', name: '李十二', totalScore: 93, preparation: '100%', operation: '90%', analysis: '89%' }
])

// Computed property for filtered and paginated data
const filteredTableData = computed(() => {
  // Filter data based on search keyword
  let filtered = tableData.value
  if (searchKeyword.value) {
    filtered = tableData.value.filter(item =>
      item.studentId.includes(searchKeyword.value) ||
      item.name.includes(searchKeyword.value)
    )
  }

  // In a real application, pagination would be handled by the server
  // For this example, we're doing client-side pagination
  // const start = (currentPage.value - 1) * pageSize.value
  // const end = start + pageSize.value
  // return filtered.slice(start, end)

  return filtered;
})

// const handleSizeChange = (val) => {
//   pageSize.value = val
//   currentPage.value = 1
// }

// const handleCurrentChange = (val) => {
//   currentPage.value = val
// }

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
          value: 60,
          itemStyle: {
            color: '#32C96A',
          },
          // Green for 90-100
        },
        {
          value: 80,
          itemStyle: {
            color: '#609DFE',

          } // Light green for 80-90
        },
        {
          value: 75,
          itemStyle: {
            color: '#F8954E',
          } // Yellow for 70-80
        },
        {
          value: 55,
          itemStyle: {
            color: '#F0CA52',
          } // Orange for 60-70
        },
        {
          value: 20,
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
      data: [60, 80, 75],
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
</script>

<style scoped>
/* You can add any additional styles here if needed */
</style>