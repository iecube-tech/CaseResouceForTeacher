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
        <el-table-column prop="name" label="实验名称" min-width="150">
          <template #default="scope">
            <div class="flex items-center">
              <div :class="[
                'flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full',
                getIconBgClass(scope.row.category)
              ]">
                <font-awesome-icon :icon="getIcon(scope.row.category)" :class="getIconClass(scope.row.category)" />
              </div>
              <div class="ml-4">
                <div class="text-sm font-medium text-gray-900">{{ scope.row.name }}</div>
                <div class="text-sm text-gray-500">{{ scope.row.code }}</div>
              </div>
            </div>
          </template>
        </el-table-column>

        <el-table-column prop="status" label="状态" width="100">
          <template #default="scope">
            <el-tag :type="getStatusType(scope.row.status)">
              <span class="text-sm">{{ scope.row.status }}</span>
            </el-tag>
          </template>
        </el-table-column>

        <el-table-column prop="completionDate" label="完成时间" width="120">
          <template #default="scope">
            <span class="text-sm text-gray-500">{{ scope.row.completionDate }}</span>
          </template>
        </el-table-column>

        <el-table-column prop="completionRate" label="完成率" width="150">
          <template #default="scope">
            <div class="flex items-center">
              <span class="text-sm text-gray-900 mr-2 w-[80px]">{{ scope.row.completionRate }}%</span>
              <div class="w-24 bg-gray-200 rounded-full h-1.5">
                <div class="h-1.5 rounded-full" :class="getProgressClass(scope.row.completionRate)"
                  :style="{ width: scope.row.completionRate + '%' }">
                </div>
              </div>
            </div>
          </template>
        </el-table-column>

        <el-table-column prop="averageScore" label="平均分数" width="100">
          <template #default="scope">
            <span class="text-sm text-gray-500">{{ scope.row.averageScore }}</span>
          </template>
        </el-table-column>

        <el-table-column prop="abilities" label="关键能力" min-width="180">
          <template #default="scope">
            <div class="flex flex-wrap gap-1">
              <el-tag v-for="(ability, k) in scope.row.abilities" :key="k" :type="getAbilityType()" size="small"
                class="mr-1 mb-1">
                <span class="text-sm">{{ ability }}</span>
              </el-tag>
            </div>
          </template>
        </el-table-column>

        <el-table-column label="操作" width="100">
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
          <el-select v-model="currentLab">
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
                  <div class="text-sm font-medium text-gray-700">58/62</div>
                </div>
              </div>
              <div>
                <div class="text-sm font-medium text-green-600">93.5%</div>
              </div>
            </div>

            <div class="bg-white p-3 rounded-lg flex items-center justify-between">
              <div class="flex items-center">
                <div class="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <font-awesome-icon icon="fas fa-chart-line" class="text-blue-600" />
                </div>
                <div class="ml-3">
                  <div class="text-xs text-gray-500">平均得分</div>
                  <div class="text-sm font-medium text-gray-700">83.6/100</div>
                </div>
              </div>
              <div>
                <font-awesome-icon icon="fas fa-arrow-up" class="text-green-500" />
                <span class="text-xs text-green-500">2.4%</span>
              </div>
            </div>

            <div class="bg-white p-3 rounded-lg flex items-center justify-between">
              <div class="flex items-center">
                <div class="h-10 w-10 rounded-full bg-yellow-100 flex items-center justify-center">
                  <font-awesome-icon icon="fas fa-clock" class="text-yellow-600" />
                </div>
                <div class="ml-3">
                  <div class="text-xs text-gray-500">平均用时</div>
                  <div class="text-sm font-medium text-gray-700">58分钟</div>
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
                  <div class="text-sm font-medium text-gray-700">24.5%</div>
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
            <div v-for="(item, index) in abilityData" :key="index">
              <div class="flex justify-between mb-1">
                <span class="text-sm font-medium text-gray-700">{{ item.name }}</span>
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

const props = defineProps({
  name: String
})

// 实验列表
const experiments = ref([])

let res = [
  {
    id: 1,
    name: '晶体管特性测量',
    code: '实验1',
    category: 'microchip',
    status: '已完成',
    completionDate: '2025-03-17',
    completionRate: 100,
    averageScore: 86.4,
    abilities: ['静态特性', '参数提取']
  },
  {
    id: 2,
    name: '共射放大器设计',
    code: '实验2',
    category: 'project-diagram',
    status: '已完成',
    completionDate: '2025-04-14',
    completionRate: 100,
    averageScore: 85.1,
    abilities: ['放大器设计', '频率响应']
  },
  {
    id: 3,
    name: '运算放大器应用',
    code: '实验3',
    category: 'sliders-h',
    status: '已完成',
    completionDate: '2025-04-28',
    completionRate: 87.1,
    averageScore: 81.8,
    abilities: ['运算放大器', '电路设计']
  },
  {
    id: 4,
    name: 'BJT特征频率测量',
    code: '实验4',
    category: 'wave-square',
    status: '已完成',
    completionDate: '2025-05-12',
    completionRate: 93.5,
    averageScore: 83.6,
    abilities: ['频率特性', '测量方法']
  },
  {
    id: 5,
    name: '有源滤波器设计',
    code: '实验5',
    category: 'filter',
    status: '进行中',
    completionDate: '--',
    completionRate: 51.6,
    averageScore: '--',
    abilities: ['滤波电路', '频率响应']
  },
  {
    id: 6,
    name: '电源电路设计',
    code: '实验6',
    category: 'plug',
    status: '未开始',
    completionDate: '--',
    completionRate: 0,
    averageScore: '--',
    abilities: ['稳压电路', '纹波分析']
  }
]
experiments.value = res



// 获取图标
const getIcon = (category) => {
  const icons = {
    'microchip': 'fas fa-microchip',
    'project-diagram': 'fas fa-project-diagram',
    'sliders-h': 'fas fa-sliders-h',
    'wave-square': 'fas fa-wave-square',
    'filter': 'fas fa-filter',
    'plug': 'fas fa-plug'
  }
  return icons[category] || 'fas fa-microchip'
}

// 获取图标背景色
const getIconBgClass = (category) => {
  const bgClasses = {
    'microchip': 'bg-blue-100',
    'project-diagram': 'bg-purple-100',
    'sliders-h': 'bg-indigo-100',
    'wave-square': 'bg-green-100',
    'filter': 'bg-yellow-100',
    'plug': 'bg-red-100'
  }
  return bgClasses[category] || 'bg-blue-100'
}

// 获取图标颜色
const getIconClass = (category) => {
  const iconClasses = {
    'microchip': 'text-blue-600',
    'project-diagram': 'text-purple-600',
    'sliders-h': 'text-indigo-600',
    'wave-square': 'text-green-600',
    'filter': 'text-yellow-600',
    'plug': 'text-red-600'
  }
  return iconClasses[category] || 'text-blue-600'
}

// 获取状态标签类型
const getStatusType = (status) => {
  const statusTypes = {
    '已完成': 'success',
    '进行中': 'warning',
    '未开始': 'info'
  }
  return statusTypes[status] || 'info'
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
  let type = ["success", "info", "warning", "danger", '']
  let i = Math.random() * 5
  const randomIndex = Math.floor(i)
  return type[randomIndex];
}

// 查看详情
const viewDetail = (row) => {
  console.log('查看实验详情:', row)
}





//
const currentLab = ref('BJT特征频率测量')
const labList = ref([])
labList.value = [
  'BJT特征频率测量',
  '晶体管特性测量',
  '共射放大器设计',
  '运算放大器应用',
  '有源滤波器设计',
  '电源电路设计',
  '差分放大器设计',
  '振荡器电路实验',
  '功率放大器测试',
  '集成运放应用'
]

//

// 能力评价数据
const abilityData = ref([
  { name: '频率特性理解', value: 85 },
  { name: '测量原理掌握', value: 80 },
  { name: '电路连接操作', value: 72 },
  { name: '特征频率计算', value: 75 },
  { name: '静态工作点', value: 60 },
  { name: '测量电路理解', value: 65 },
  { name: '特征频率测量', value: 55 }
])

// 获取能力评价文字颜色
const getAbilityColorClass = (value) => {
  if (value >= 80) return 'text-green-500'
  if (value >= 70 && value < 80) return 'text-blue-500'
  if (value >= 60 && value < 70){
    return 'text-yellow-500'
  } else {
    return 'text-red-500'
  }
  
}

// 获取能力评价进度条颜色
const getAbilityBarClass = (value) => {
  if (value >= 80) return 'bg-green-500'
  if (value >= 70 && value < 80) return 'bg-blue-500'
  if (value >= 60 && value < 70){
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
    data: ['课程整体进度', '实验完成率', '知识点掌握率', '课程目标达成度']
  },
  color: ['#62D58D'],
  series: [
    {
      type: 'bar',
      barWidth: '50%',
      data: [
        {
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
        },
      ]
    },
  ]
}

</script>

<style scoped>

</style>