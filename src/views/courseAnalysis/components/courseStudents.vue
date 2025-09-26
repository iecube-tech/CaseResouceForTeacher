<template>
  <div class="mt-6 space-y-6 fade-in">
    <!-- 学生总览 -->
    <div class="bg-white rounded-lg shadow p-4">
      <div class="flex justify-between items-center mb-4">
        <h3 class="text-lg font-medium text-gray-900">学生总览</h3>
        <div class="flex items-center space-x-2">
          <el-input v-model="searchQuery" type="text" placeholder="搜索学生...">
            <template #append>
              <font-awesome-icon icon="fas fa-search" />
            </template>
          </el-input>
          <el-select v-model="gradeFilter">
            <el-option v-for="(option, index) in gradeOptions" :key="index" :value="option.value">
              {{ option.label }}
            </el-option>
          </el-select>
          <el-button type="primary">
            <font-awesome-icon icon="fas fa-download" class="mr-1" /> 导出
          </el-button>
        </div>
      </div>

      <el-table :data="filteredStudents" style="width: 100%">
        <el-table-column prop="name" label="学生信息" min-width="150">
          <template #default="scope">
            <div class="flex items-center">
              <div class="flex-shrink-0 h-10 w-10 rounded-full flex items-center justify-center"
                :class="getAvatarBgClass(scope.row.name)">
                <span class="font-medium" :class="getAvatarTextColorClass(scope.row.name)">{{ scope.row.name }}</span>
              </div>
              <div class="ml-4">
                <div class="text-sm font-medium text-gray-900">{{ scope.row.name }}</div>
                <div class="text-sm text-gray-500">{{ scope.row.id }}</div>
              </div>
            </div>
          </template>
        </el-table-column>

        <el-table-column label="课程进度" width="150">
          <template #default="scope">
            <div class="text-sm text-gray-900">{{ scope.row.progress }}%</div>
            <div class="w-24 bg-gray-200 rounded-full h-1.5">
              <div class="h-1.5 rounded-full" :class="getProgressClass(scope.row.progress)"
                :style="{ width: scope.row.progress + '%' }"></div>
            </div>
          </template>
        </el-table-column>

        <el-table-column label="实验完成情况" width="150">
          <template #default="scope">
            <div class="text-sm text-gray-900">{{ scope.row.completedLabs }} / {{ scope.row.totalLabs }}</div>
            <div class="text-xs text-gray-500">已完成{{ scope.row.completedLabs }}个实验</div>
          </template>
        </el-table-column>

        <el-table-column prop="averageScore" label="平均分" width="100">
          <template #default="scope">
            <span class="px-2 py-1 text-xs font-medium rounded-full" :class="getGradeClass(scope.row.averageScore)">
              {{ scope.row.averageScore }}
            </span>
          </template>
        </el-table-column>

        <el-table-column prop="strengthLab" label="优势实验" width="150">
          <template #default="scope">
            <span class="text-sm text-gray-500">{{ scope.row.strengthLab }}</span>
          </template>
        </el-table-column>

        <el-table-column prop="weakLab" label="待提升实验" width="150">
          <template #default="scope">
            <span class="text-sm text-gray-500">{{ scope.row.weakLab }}</span>
          </template>
        </el-table-column>

        <el-table-column label="操作" width="100">
          <template #default="scope">
            <el-link type="primary" @click="jumpToDetail(scope.row)">查看详情</el-link>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <!-- 学生学习行为分析 -->
    <div class="bg-white rounded-lg shadow p-4">
      <div class="flex justify-between items-center mb-6">
        <h3 class="text-lg font-medium text-gray-900">学习行为分析</h3>
        <div class="flex space-x-2">
          <el-select v-model="selectedExperiment">
            <el-option v-for="experiment in experiments" :key="experiment" :value="experiment">
              {{ experiment }}
            </el-option>
          </el-select>

        </div>
      </div>

      <!-- 基础行为分布图表 -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <!-- 课前预习时间分布 -->
        <div class="bg-gray-50 p-4 rounded-lg">
          <h4 class="text-md font-medium text-gray-800 mb-4">
            课前预习时间分布
            <span class="text-xs text-gray-500">({{ selectedExperiment }})</span>
          </h4>
          <v-chart ref="chart1Ref" :option="option1" class="chart-container"></v-chart>
        </div>

        <!-- AI辅助使用次数分布 -->
        <div class="bg-gray-50 p-4 rounded-lg">
          <h4 class="text-md font-medium text-gray-800 mb-4">
            AI辅助使用次数分布
            <span class="text-xs text-gray-500">({{ selectedExperiment }})</span>
          </h4>
          <v-chart ref="chart2Ref" :option="option2" class="chart-container"></v-chart>
        </div>
      </div>

      <!-- 行为与成绩关联分析 -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- 课前预习时间与成绩关系 -->
        <div class="bg-gray-50 p-4 rounded-lg">
          <h5 class="text-sm font-medium text-gray-700 mb-3">
            课前预习时间与成绩关系
            <span class="text-xs text-gray-500">({{ selectedExperiment }})</span>
          </h5>
          <v-chart ref="chart3Ref" :option="option3" class="chart-container"></v-chart>
        </div>

        <!-- AI辅助使用次数与成绩关系 -->
        <div class="bg-gray-50 p-4 rounded-lg">
          <h5 class="text-sm font-medium text-gray-700 mb-3">
            AI辅助使用与成绩关系
            <span class="text-xs text-gray-500">({{ selectedExperiment }})</span>
          </h5>
          <v-chart ref="chart4Ref" :option="option4" class="chart-container"></v-chart>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
const route =  useRoute()
const router = useRouter()

const props = defineProps({
  name: String
})


const jumpToDetail = (row) => {
  router.push({
    'name': 'courseAnalysisStudent',
    params: {
      projectId: route.params.projectId,
      studentId: row.id
    }
  })
}

// Reactive data
const searchQuery = ref('')
const gradeFilter = ref('')
// Grade filter options
const gradeOptions = ref([
  { value: '', label: '所有成绩级别' },
  { value: 'excellent', label: '优秀 (90-100)' },
  { value: 'good', label: '良好 (80-89)' },
  { value: 'average', label: '中等 (70-79)' },
  { value: 'pass', label: '及格 (60-69)' },
  { value: 'fail', label: '不及格 (<60)' }
])



const currentPage = ref(0)
const pageSize = ref(5)
const selectedExperiment = ref('BJT特征频率测量')

// Student data
const students = ref([])
students.value = [
  {
    id: '2023001',
    name: '张三',
    progress: 67,
    completedLabs: 4,
    totalLabs: 6,
    averageScore: 91.5,
    strengthLab: 'BJT特征频率测量',
    weakLab: '运算放大器应用'
  },
  {
    id: '2023002',
    name: '李四',
    progress: 72,
    completedLabs: 4,
    totalLabs: 6,
    averageScore: 93.2,
    strengthLab: '晶体管特性测量',
    weakLab: '有源滤波器设计'
  },
  {
    id: '2023003',
    name: '王五',
    progress: 58,
    completedLabs: 3,
    totalLabs: 6,
    averageScore: 87.5,
    strengthLab: 'BJT特征频率测量',
    weakLab: '运算放大器应用'
  },
  {
    id: '2023004',
    name: '赵六',
    progress: 48,
    completedLabs: 3,
    totalLabs: 6,
    averageScore: 75.6,
    strengthLab: '晶体管特性测量',
    weakLab: '电源电路设计'
  },
  {
    id: '2023005',
    name: '孙七',
    progress: 35,
    completedLabs: 2,
    totalLabs: 6,
    averageScore: 65.3,
    strengthLab: '--',
    weakLab: '有源滤波器设计'
  },
  {
    id: '2023006',
    name: '周八',
    progress: 82,
    completedLabs: 5,
    totalLabs: 6,
    averageScore: 95.1,
    strengthLab: '共射放大器设计',
    weakLab: '电源电路设计'
  },
  {
    id: '2023007',
    name: '吴九',
    progress: 63,
    completedLabs: 4,
    totalLabs: 6,
    averageScore: 82.7,
    strengthLab: '运算放大器应用',
    weakLab: 'BJT特征频率测量'
  }
]

// Experiment options
const experiments = ref([
  'BJT特征频率测量',
  '晶体管特性测量',
  '共射放大器设计',
  '运算放大器应用',
  '有源滤波器设计',
  '电源电路设计'
])

// Computed properties
const filteredStudents = computed(() => {
  let result = students.value

  // Apply search filter
  if (searchQuery.value) {
    result = result.filter(student =>
      student.name.includes(searchQuery.value) ||
      student.id.includes(searchQuery.value)
    )
  }

  // Apply grade filter
  if (gradeFilter.value) {
    result = result.filter(student => {
      switch (gradeFilter.value) {
        case 'excellent':
          return student.averageScore >= 90
        case 'good':
          return student.averageScore >= 80 && student.averageScore < 90
        case 'average':
          return student.averageScore >= 70 && student.averageScore < 80
        case 'pass':
          return student.averageScore >= 60 && student.averageScore < 70
        case 'fail':
          return student.averageScore < 60
        default:
          return true
      }
    })
  }

  return result
})

const totalPages = computed(() => {
  let count = students.value.length

  // Apply search filter to count
  if (searchQuery.value) {
    count = students.value.filter(student =>
      student.name.includes(searchQuery.value) ||
      student.id.includes(searchQuery.value)
    ).length
  }

  // Apply grade filter to count
  if (gradeFilter.value) {
    count = students.value.filter(student => {
      switch (gradeFilter.value) {
        case 'excellent':
          return student.averageScore >= 90
        case 'good':
          return student.averageScore >= 80 && student.averageScore < 90
        case 'average':
          return student.averageScore >= 70 && student.averageScore < 80
        case 'pass':
          return student.averageScore >= 60 && student.averageScore < 70
        case 'fail':
          return student.averageScore < 60
        default:
          return true
      }
    }).length
  }

  return Math.ceil(count / pageSize.value)
})

// Chart references
const preStudyTimeDistributionChart = ref(null)
const aiUsageDistributionChart = ref(null)
const preStudyTimeVsScoreChart = ref(null)
const aiUsageVsScoreChart = ref(null)

// Helper functions
const getAvatarBgClass = (name) => {
  const colors = [
    'bg-blue-100',
    'bg-green-100',
    'bg-purple-100',
    'bg-yellow-100',
    'bg-red-100',
    'bg-indigo-100',
    'bg-pink-100'
  ]
  const index = name.charCodeAt(0) % colors.length
  return colors[index]
}

const getAvatarTextColorClass = (name) => {
  const colors = [
    'text-blue-600',
    'text-green-600',
    'text-purple-600',
    'text-yellow-600',
    'text-red-600',
    'text-indigo-600',
    'text-pink-600'
  ]
  const index = name.charCodeAt(0) % colors.length
  return colors[index]
}

const getProgressClass = (progress) => {
  if (progress >= 70) return 'bg-green-500'
  if (progress >= 50) return 'bg-yellow-500'
  return 'bg-red-500'
}

const getGradeClass = (score) => {
  if (score >= 90) return 'bg-green-100 text-green-800'
  if (score >= 80) return 'bg-blue-100 text-blue-800'
  if (score >= 70) return 'bg-yellow-100 text-yellow-800'
  if (score >= 60) return 'bg-orange-100 text-orange-800'
  return 'bg-red-100 text-red-800'
}

// init charts
const chart1Ref = ref(null)
const chart2Ref = ref(null)
const chart3Ref = ref(null)
const chart4Ref = ref(null)

watchEffect(() => {
  if (props.name === 'courseStudents') {
    setTimeout(_ => {
      chart1Ref.value && chart1Ref.value.resize()
      chart2Ref.value && chart2Ref.value.resize()
      chart3Ref.value && chart3Ref.value.resize()
      chart4Ref.value && chart4Ref.value.resize()
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
    formatter: '{b}: {c} 人'
  },
  xAxis: {
    type: 'category',
    data: ['<0.5小时', '0.5-1小时', '1-1.5小时', '1.5-2小时', '2-2.5小时', '2.5-3小时', '>3小时'],
    axisLabel: {
      interval: 0,  // Display all labels
      rotate: 0,    // Keep labels horizontal
      fontSize: 10
    }
  },
  yAxis: {
    type: 'value',
    axisLabel: {
      fontSize: 12
    },
    name: '学生人数',
    nameLocation: 'middle',
    nameGap: 30
  },
  // color: ['#38B1E8'],
  series: [
    {
      type: 'bar',
      barWidth: '50%',
      data: [
        {
          value: 60,
          itemStyle: { color: '#32C96A' },
          name: '<0.5小时'
        },
        {
          value: 80,
          itemStyle: { color: '#609DFE' },
          name: '0.5-1小时' // Light green for 80-90
        },
        {
          value: 75,
          itemStyle: { color: '#F8954E' },
          name: '1-1.5小时' // Yellow for 70-80
        },
        {
          value: 55,
          itemStyle: { color: '#F0CA52' },
          name: '1.5-2小时' // Orange for 60-70
        },
        {
          value: 20,
          itemStyle: { color: '#F47C7C' },
          name: '2-2.5小时' // Red for <60
        },
        {
          value: 4,
          itemStyle: { color: '#D06BEE' },
          name: '2.5-3小时'
        },
        {
          value: 10,
          itemStyle: { color: '#4EC7F0' },
          name: '>3小时'
        }
      ]
    },
  ]
}

const option2 = ref(null)
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
    formatter: '{b}: {c} 人'
  },
  xAxis: {
    type: 'category',
    data: ['0次', '1-2次', '3-4次', '5-6次', '7-8次', '9-10次', '>10次'],
    axisLabel: {
      interval: 0,  // Display all labels
      rotate: 0,    // Keep labels horizontal
      fontSize: 10
    }
  },
  yAxis: {
    type: 'value',
    axisLabel: {
      fontSize: 12
    },
    name: '学生人数',
    nameLocation: 'middle',
    nameGap: 30
  },
  // color: ['#38B1E8'],
  series: [
    {
      type: 'bar',
      barWidth: '50%',
      data: [
        {
          value: 60,
          itemStyle: { color: '#32C96A' },
          name: '0次'
        },
        {
          value: 80,
          itemStyle: { color: '#609DFE' },
          name: '1-2次' // Light green for 80-90
        },
        {
          value: 75,
          itemStyle: { color: '#F8954E' },
          name: '3-4次'
        },
        {
          value: 55,
          itemStyle: { color: '#F0CA52' },
          name: '5-6次'
        },
        {
          value: 20,
          itemStyle: { color: '#F47C7C' },
          name: '7-8次'
        },
        {
          value: 4,
          itemStyle: { color: '#D06BEE' },
          name: '9-10次'
        },
        {
          value: 10,
          itemStyle: { color: '#4EC7F0' },
          name: '>10次'
        }
      ]
    },
  ]
}


const generateScatterData = () => {
  const data = [];
  for (let i = 0; i < 30; i++) {
    // First number: study time between 0.5 and 6 hours
    const studyTime = parseFloat((Math.random() * 5.5 + 0.5).toFixed(2));

    // Second number: score between 60 and 99
    const score = Math.floor(Math.random() * 40) + 60;

    data.push([studyTime, score]);
  }
  return data;
};

const option3 = ref(null)
option3.value = {
  xAxis: {},
  yAxis: {
    axisLabel: {
      fontSize: 12
    },
    name: '实验成绩',
    nameLocation: 'middle',
    nameGap: 30
  },
  grid: {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  tooltip: {
    position: 'top',
    formatter: function (params) {
      let [time, score] = params.data;

      return `${time}小时: ${score}`;
    }
  },
  series: [
    {
      symbolSize: 10,
      data: generateScatterData(),
      type: 'scatter'
    }
  ]
};

const generateScatterTimesData = () => {
  const data = [];
  for (let i = 0; i < 30; i++) {
    // First number: study time between 0.5 and 6 hours
    const times = Math.floor(Math.random() * 30);

    // Second number: score between 60 and 99
    const score = Math.floor(Math.random() * 40) + 50;

    data.push([times, score]);
  }
  return data;
};

const option4 = ref(null)
option4.value = {
  xAxis: {},
  yAxis: {
    axisLabel: {
      fontSize: 12
    },
    name: '实验成绩',
    nameLocation: 'middle',
    nameGap: 30
  },
  grid: {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  color: ['#4caf50'],
  tooltip: {
    position: 'top',
    formatter: function (params) {
      let [time, score] = params.data;

      return `${time}次数: ${score}`;
    }
  },
  series: [
    {
      symbolSize: 10,
      data: generateScatterTimesData(),
      type: 'scatter'
    }
  ]
};



// Lifecycle
onMounted(() => {

})
</script>

<style scoped>
.chart-container {
  position: relative;
  height: 300px;
  width: 100%;
  box-sizing: border-box;
}
</style>