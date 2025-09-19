<template>
  <div class="mt-6 space-y-6 fade-in">
    <!-- 1. 课程目标班级平均达成度 -->
    <div class="bg-white rounded-lg shadow p-4 hover-card">
      <h3 class="text-lg font-medium text-gray-900 mb-4">课程目标班级平均达成度</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <v-chart ref="chart1Ref" :option="option1" class="h-full w-full" />
        
        <div class="bg-gray-50 p-4 rounded-lg">
          <h4 class="text-md font-medium text-gray-800 mb-3">达成度分析</h4>
          <div class="space-y-4">
            <div v-for="(target, index) in courseTargets" :key="index"
              class="flex justify-between items-center p-3 bg-white rounded-lg">
              <div class="flex items-center">
                <div class="w-3 h-3 rounded-full mr-3" :class="getPrecentLegendStyle(target.achievement)"></div>
                <span class="text-sm font-medium text-gray-700">课程目标{{ index + 1 }}</span>
              </div>
              <div class="text-right">
                <div class="text-lg font-bold" :class="getPrecentTextStyle(target.achievement)">
                  {{ target.achievement }}%
                </div>
                <div class="text-xs" :class="getPrecentTextStyle(target.achievement)">
                  {{ getPrecentText(target.achievement) }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 2. 课程目标与能力标签支撑关系 -->
    <div class="bg-white rounded-lg shadow p-4 hover-card">
      <h3 class="text-lg font-medium text-gray-900 mb-4">课程目标与能力标签支撑关系</h3>
      <div class="bg-gray-50 p-6 rounded-lg">
        <!-- 控制面板 -->
        <div class="flex justify-between items-center mb-6">
          <div class="flex space-x-2">
            <button @click="handleTargetClick(null)" class="px-3 py-1.5 text-sm rounded-md transition-colors"
              :class="currentTarget === null ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'">
              显示全部
            </button>
            <div v-for="(target, index) in courseTargets" :key="index">
              <button :class="getTargetBtnStyle(index)" class="px-3 py-1.5 text-sm rounded-md transition-colors"
                @click="handleTargetClick(index)">
                课程目标{{ index + 1 }}
              </button>
            </div>

          </div>
          <div class="text-xs text-gray-500">
            点击课程目标按钮查看单独支撑关系，颜色表示能力标签支撑的课程目标
          </div>
        </div>

        <!-- 支撑关系展示区域 -->
        <div class="grid grid-cols-7 gap-3">
          <!-- 课程目标列 -->
          <div class="space-y-3">
            <h4 class="text-sm font-medium text-gray-800 text-center mb-3">课程目标</h4>
            <div v-for="(target, index) in courseTargets" :key="`${index}-${currentTarget}`"
              @click="handleTargetClick(index)">
              <div :class="getTargetStyle(index)"
                class="target-card p-3 rounded-lg cursor-pointer transition-all duration-200 ease-in-out ">
                <div class="flex items-center justify-between mb-1 ">
                  <h5 class="font-medium text-sm">
                    目标{{ index + 1 }}
                  </h5>
                  <div class="text-sm font-bold">
                    {{ target.achievement }}%
                  </div>
                </div>
                <p class="text-xs mt-2">
                  {{ target.description }}
                </p>
              </div>
            </div>
          </div>

          <!-- 实验和能力标签区域 -->
          <div class="col-span-6">
            <div class="grid grid-cols-6 gap-1">
              <div v-for="(experiment, expIndex) in experiments" :key="expIndex" class="space-y-1">
                <div class="experiment-title bg-gray-200 border border-gray-300 text-gray-800">
                  {{ experiment.title }}
                </div>
                <div class="space-y-1">
                  <div v-for="(ability, abIndex) in experiment.abilities" :key="abIndex" class="ability-tag"
                    :class="getAbilityStyle(ability.target)" :title="`支撑课程目标${ability.target}`">
                    <div class="font-medium">{{ ability.name }}</div>
                    <div class="font-bold">{{ ability.score }}%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 图例 -->
        <div class="mt-6 flex flex-wrap gap-4 text-xs text-gray-600">
          <div v-for="(target, index) in courseTargets" :key="index" class="flex items-center">
            <div class="w-4 h-2 rounded mr-2" :class="getLegendStyle(index)"></div>
            <span>课程目标{{ index + 1 }}（{{ target.category }}）</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 4. 课程目标详情分析 -->
    <div class="bg-white rounded-lg shadow p-4">
      <!-- <h3 class="text-lg font-medium text-gray-900 mb-4">
        课程目标详情分析-90%（含90%）以上为绿色；80%-90%（含80%）为蓝色；
        70%-80%（含70%）为黄色；60%-70%（含60%）为橙色，60%（不含60%）以下为红色
      </h3> -->
      <h3 class="text-lg font-medium text-gray-900 mb-4">课程目标分析</h3>
      <div class="flex flex-start space-x-4 mb-2">
        <div class="space-x-1 flex items-center" v-for="(item, index) in legends" :key="index">
          <span :class="getPrecentLegendStyle(item.percentage)" class="w-4 h-4 inline-block"></span>
          <span class="text-gray-500">{{ item.name }}</span>
        </div>
      </div>

      <div class="space-y-8">
        <div v-for="(target, index) in courseTargets" :key="index" class="border border-gray-200 rounded-lg p-6">
          <div class="flex justify-between items-start mb-4">
            <div>
              <h4 class="text-lg font-medium" :class="getPrecentTextStyle(target.achievement)">
                课程目标{{ index + 1 }}
              </h4>
              <p class="text-sm text-gray-600 mt-1">{{ target.description }}</p>
            </div>
            <div class="text-right" :class="getPrecentTextStyle(target.achievement)">
              <div class="text-2xl font-bold">
                {{ target.achievement }}%
              </div>
              <div class="text-sm">
                {{ target.status }}
              </div>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h5 class="font-medium text-gray-700 mb-3">学生达成度分布</h5>
              <v-chart ref="chartGraphsRef" :option="target.chartGraphOption" class="chart-container" />
            </div>

            <div class="space-y-4">
              <div>
                <h5 class="font-medium text-gray-700 mb-3">支撑能力达成情况</h5>
                <div class="space-y-2">
                  <div v-for="(ability, abIndex) in target.abilities" :key="abIndex"
                    class="flex justify-between items-center">
                    <span class="text-sm text-gray-600">{{ ability.name }}</span>
                    <span class="text-sm font-medium" :class="getPrecentTextStyle(ability.score)">
                      {{ ability.score }}%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 课程目标达成度趋势 -->
    <div class="bg-white rounded-lg shadow p-4 hover-card">
      <h3 class="text-lg font-medium text-gray-900 mb-4">课程目标达成度趋势</h3>
      <div class="chart-container">
        <v-chart ref="chart2Ref" :option="trendOption" class="chart" />
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  name: String
})

// Reactive data
const currentTarget = ref(null)

const chart1Ref = ref(null)
const chart2Ref = ref(null)
const chartGraphsRef = ref(null)

watchEffect(() => {
  if (props.name === 'courseTargets') {
    setTimeout(_ => {
      chart1Ref.value && chart1Ref.value.resize()
      chart2Ref.value && chart2Ref.value.resize()
      
      let len = chartGraphsRef.value.length
      for (let i = 0; i < len; i++) {
        chartGraphsRef.value[i].resize()
      }
    }, 100)
  }
})



// 课程目标数据
const courseTargets = ref([
  {
    id: 1,
    achievement: 85.2,
    status: '达成良好',
    description: '掌握模拟电子电路的基本理论和分析方法',
    category: '基本理论',
    abilities: [
      { name: '频率特性', score: 90 },
      { name: '测量原理', score: 88 },
      { name: '静态工作点', score: 85 },
      { name: '特征频率测量', score: 85 },
      { name: '参数提取', score: 82 }
    ],
    chartGraphOption: null
  },
  {
    id: 2,
    achievement: 80.6,
    status: '达成良好',
    description: '具备电路设计和仿真的实践能力',
    category: '设计仿真',
    abilities: [
      { name: '测量电路', score: 86 },
      { name: '电路连接及仪器使用', score: 84 },
      { name: '放大器设计', score: 83 },
      { name: '频率响应', score: 81 },
      { name: '电路仿真', score: 78 }
    ],
    chartGraphOption: null
  },
  {
    id: 3,
    achievement: 75.3,
    status: '基本达成',
    description: '培养实验操作和测量分析技能',
    category: '操作测量',
    abilities: [
      { name: '测量仪器使用', score: 91 },
      { name: '数据记录', score: 89 },
      { name: '数据分析', score: 87 },
      { name: '误差分析', score: 79 },
      { name: '图表处理', score: 77 },
      { name: '实验报告规范', score: 77 }
    ],
    chartGraphOption: null
  },
  {
    id: 4,
    achievement: 68.2,
    status: '待提升',
    description: '具备理论联系实际的综合应用能力',
    category: '综合应用',
    abilities: [
      { name: '实际动手操作', score: 75 },
      { name: '工程问题分析', score: 72 },
      { name: '创新设计', score: 70 },
      { name: '复杂问题解决能力', score: 68 },
      { name: '综合应用能力', score: 65 },
      { name: '团队协作', score: 65 }
    ],
    chartGraphOption: null
  }
])

// 实验数据
const experiments = ref([
  {
    title: '实验1：晶体管特性测试',
    abilities: [
      { name: '晶体管理论分析', score: 90, target: 1 },
      { name: '静态工作点计算', score: 88, target: 1 },
      { name: '特性曲线绘制', score: 85, target: 1 },
      { name: '参数提取分析', score: 82, target: 1 },
      { name: '测试电路搭建', score: 79, target: 3 }
    ]
  },
  {
    title: '实验2：放大器设计',
    abilities: [
      { name: '放大器设计理论', score: 86, target: 2 },
      { name: '偏置电路设计', score: 83, target: 2 },
      { name: '增益计算验证', score: 81, target: 2 },
      { name: '负载线分析', score: 78, target: 1 },
      { name: '失真度测量', score: 76, target: 3 }
    ]
  },
  {
    title: '实验3：运算放大器应用',
    abilities: [
      { name: '运放电路应用', score: 84, target: 2 },
      { name: '反馈网络设计', score: 80, target: 2 },
      { name: '同相反相配置', score: 77, target: 3 },
      { name: '虚短虚断理解', score: 73, target: 1 }
    ]
  },
  {
    title: '实验4：频率响应测试',
    abilities: [
      { name: '频率响应测试', score: 85, target: 1 },
      { name: '截止频率测量', score: 82, target: 1 },
      { name: '米勒效应分析', score: 75, target: 4 },
      { name: '扫频测量技术', score: 71, target: 3 }
    ]
  },
  {
    title: '实验5：滤波器设计',
    abilities: [
      { name: '滤波器设计', score: 78, target: 2 },
      { name: '传递函数推导', score: 76, target: 2 },
      { name: 'Bode图绘制', score: 72, target: 4 },
      { name: '幅频特性测量', score: 74, target: 3 }
    ]
  },
  {
    title: '实验6：电源设计',
    abilities: [
      { name: '整流电路设计', score: 70, target: 4 },
      { name: '滤波电路优化', score: 68, target: 4 },
      { name: '稳压电路调试', score: 65, target: 4 },
      { name: '纹波系数计算', score: 62, target: 4 },
      { name: '保护电路设计', score: 59, target: 4 },
      { name: '负载调整率测试', score: 56, target: 4 }
    ]
  }
])



// Color palette for course objectives
const targetColors = [
  {
    base: 'blue',
  },
  {
    base: 'green',
  },
  {
    base: 'yellow',
  },
  {
    base: 'red',
  }
]


const handleTargetClick = (index) => {
  currentTarget.value = index;
}
// 控制颜色显示逻辑
const getTargetStyle = (index) => {
  let color = targetColors[index].base
  let cardStyle = `bg-${color}-100 text-${color}-700 `
  if (currentTarget.value === index) {
    cardStyle = `border-2 border-${color}-500 ` + cardStyle;
  }
  return cardStyle;
}

const getTargetBtnStyle = (index) => {
  let color = targetColors[index].base
  let btnStyle = 'bg-gray-200 text-gray-700 hover:bg-gray-300'
  if (currentTarget.value === index) {
    btnStyle = `bg-${color}-500 text-white`
  }
  return btnStyle;
}

// Update 
const getAbilityStyle = (objectiveId) => {
  let color = targetColors[objectiveId - 1].base
  let abilityStyle = ''
  if (currentTarget.value !== null && currentTarget.value !== (objectiveId - 1)) {
    abilityStyle = ' opacity-30 '
  }
  abilityStyle += `bg-${color}-100 border-${color}-500 text-${color}-700 `
  return abilityStyle
}

const getLegendStyle = (index) => {
  let color = targetColors[index].base
  return `bg-${color}-500`
}

// 根据课程目标达成度获取背景颜色
const legends = ref([
  { name: '>= 90分', percentage: 90 },
  { name: '80-90分', percentage: 80 },
  { name: '70-80分', percentage: 70 },
  { name: '60-70分', percentage: 60 },
  { name: '50-60分', percentage: 50 }
])


const getPrecentLegendStyle = (percentage) => {
  if (percentage >= 90) {
    return 'bg-green-500';
  } else if (percentage >= 80) {
    return 'bg-blue-500';
  } else if (percentage >= 70) {
    return 'bg-yellow-500';
  } else if (percentage >= 60) {
    return 'bg-orange-500';
  } else {
    return 'bg-red-500';
  }
}

const getPrecentTextStyle = (percentage) => {
  if (percentage >= 90) {
    return 'text-green-500';
  } else if (percentage >= 80) {
    return 'text-blue-500';
  } else if (percentage >= 70) {
    return 'text-yellow-500';
  } else if (percentage >= 60) {
    return 'text-orange-500';
  } else {
    return 'text-red-500';
  }
}


// 根据分数生成状态
const getPrecentText = (score) => {
  if (score >= 90) return '优秀';
  if (score >= 80) return '达成良好';
  if (score >= 70) return '基本达成';
  if (score >= 60) return '待提升';
  return '未达成';
}
// green #22c55e blue #3b82f6 yellow #EAB308 orenge #F97316 red #EF4444

const getPrecentColor16 = (score) => {
  let color = '';
  if (score >= 90) {
    return '#22c55e'
  } else if (score >= 80) {
    return '#3b82f6'
  } else if (score >= 70) {
    return '#EAB308'
  } else if (score >= 60) {
    return '#F97316'
  } else {
    return '#EF4444'
  }
}

// 图表配置
const option1 = ref({
  title: {
    show: false
  },
  tooltip: {
    trigger: 'item'
  },
  grid: {
    top: 0,
    bottom: '10%',
  },
  legend: {
    data: ['平均值达成度', '最优达成度', '最差达成度'],
    bottom: 0
  },
  radar: {
    indicator: [
      { name: '课程目标1', max: 100 },
      { name: '课程目标2', max: 100 },
      { name: '课程目标3', max: 100 },
      { name: '课程目标4', max: 100 }
    ],
    radius: '70%',
    center: ['50%', '50%']
  },
  series: [
    {
      type: 'radar',
      data: [
        {
          value: [85.2, 80.6, 75.3, 68.2],
          name: '平均值达成度',
          itemStyle: { color: '#3b82f6' },
          lineStyle: { width: 2 },
          areaStyle: { opacity: 0.3 }
        },
        {
          value: [92, 88, 82, 75],
          name: '最优达成度',
          itemStyle: { color: '#10b981' },
          lineStyle: { width: 2 },
          areaStyle: { opacity: 0.3 }
        },
        {
          value: [78, 72, 68, 60],
          name: '最差达成度',
          itemStyle: { color: '#ef4444' },
          lineStyle: { width: 2 },
          areaStyle: { opacity: 0.3 }
        }
      ]
    }
  ],
})

const trendOption = ref({
  title: {
    show: false
  },
  grid: {
    top: '10%',
    bottom: '15%',  // Increased bottom margin to accommodate labels
    left: '10%',    // Add some left margin for better visibility
    right: '10%'    // Add some right margin
  },
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    top: '0',
    icon: 'rect'
  },
  xAxis: {
    type: 'category',
    // Remove startValue and use boundaryGap instead
    boundaryGap: false,  // This makes the line start from the edge
    data: ['学期初', '第一次实验', '第二次实验', '第三次实验', '第四次实验', '当前'], // 根据事件数据渲染
    // Make labels more visible
    axisLabel: {
      rotate: 0,  // No rotation for better readability
      interval: 0 // Show all labels
    }
  },
  yAxis: {
    type: 'value',
    // Make sure y-axis starts from 0
    min: 0,
    // You can also set a reasonable max value
    max: 100,
    // Add some split lines for better readability
    splitLine: {
      show: true
    }
  },
  series: [
    {
      name: '课程目标1',
      type: 'line',
      data: [65, 70, 72, 75, 78, 80],
      smooth: true,
      itemStyle: {
        color: '#22c55e'
      },
      areaStyle: {
        opacity: 0.1
      },
      // Make sure the line connects to the y=0 axis
      connectNulls: true
    },
    {
      name: '课程目标2',
      type: 'line',
      data: [60, 65, 68, 72, 75, 77],
      smooth: true,
      itemStyle: {
        color: '#3b82f6'
      },
      areaStyle: {
        opacity: 0.1
      },
      connectNulls: true
    },
    {
      name: '课程目标3',
      type: 'line',
      data: [55, 60, 63, 65, 68, 70],
      smooth: true,
      itemStyle: {
        color: '#EAB308'
      },
      areaStyle: {
        opacity: 0.1
      },
      connectNulls: true
    },
    {
      name: '课程目标4',
      type: 'line',
      data: [50, 55, 58, 60, 62, 64],
      smooth: true,
      itemStyle: {
        color: '#EF4444'
      },
      areaStyle: {
        opacity: 0.1
      },
      connectNulls: true
    }
  ]
})

courseTargets.value.forEach(obj => {
  obj.chartGraphOption = {
    title: {
      show: false
    },
    grid: {
      top: 0,
      bottom: '10%'
    },
    tooltip: {
      trigger: 'items',
    },
    legend: {
      bottom: '0',
      left: 'center',
      fontSize: '10px',
    },
    series: [
      {
        type: 'pie',
        radius: ['40%', '70%'],
        label: {
          show: false,
        },
        labelLine: {
          show: false
        },
        data: [
          { value: Math.floor(Math.random() * 10) + 10, itemStyle: { color: '#22c55e' }, name: '优秀(90-100)' },
          { value: Math.floor(Math.random() * 20) + 15, itemStyle: { color: '#3b82f6' }, name: '良好(80-90)' },
          { value: Math.floor(Math.random() * 40) + 10, itemStyle: { color: '#EAB308' }, name: '中等(70-80)' },
          { value: Math.floor(Math.random() * 20) + 10, itemStyle: { color: '#F97316' }, name: '及格(60-70)' },
          { value: Math.floor(Math.random() * 10) + 5, itemStyle: { color: '#EF4444' }, name: '不及格(<60)' }
        ]
      }
    ]
  }
})

onMounted(() => {
})
</script>

<style scoped>
.chart-container {
  position: relative;
  height: 400px;
}

.hover-card {
  transition: all 0.3s ease;
}

.hover-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.target-card {

  transition: all 0.2s ease;
}

.target-card:hover {
  transform: scale(1.02);
}

.experiment-title {
  padding: 4px 8px;
  background-color: #e5e7eb;
  border: 1px solid #d1d5db;
  border-radius: 4px;
  font-size: 0.75rem;
  text-align: center;
  margin-bottom: 4px;
}

.ability-tag {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-width: 1px;
  border-style: solid;
  border-radius: 4px;
  padding: 2px 6px;
  font-size: 0.75rem;
  margin-bottom: 2px;
  transition: opacity 0.2s ease;
}

.chart-container {
  position: relative;
  height: 300px;
}

.fade-in {
  animation: fadeIn 0.3s ease-in;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
</style>