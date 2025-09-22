<template>
  <div class="mt-6 space-y-6 fade-in">
    <div class="grid grid-cols-1 gap-6">
      <!-- 能力标签掌握分布 -->
      <div class="bg-white rounded-lg shadow p-4 hover-card">
        <h3 class="text-lg font-medium text-gray-900 mb-4">能力标签掌握分布</h3>
        <v-chart ref="chart1Ref" :option="option1" class="chart-container" style="height: 300px;" />
      </div>
    </div>

    <!-- 能力标签详情 -->
    <div class="bg-white rounded-lg shadow p-4">
      <h3 class="text-lg font-medium text-gray-900 mb-4">能力标签详细分析</h3>

      <div class="space-y-6">
        <div v-for="skill in skillList" :key="skill.id" class="bg-gray-50 p-4 rounded-lg">
          <div class="flex justify-between items-center">
            <h4 class="text-md font-medium text-gray-800">
              {{ skill.title }}
            </h4>
            <span class="px-2 py-1 text-sm rounded-full" :class="getAverageScoreClass(skill.average)">
              班级平均: {{ skill.average }}%
            </span>
          </div>
          <div class="mt-3 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <div class="flex justify-between text-sm mb-1">
                <span class="text-gray-600">掌握程度分布</span>
              </div>
              <div class="h-40">
                <v-chart ref="skillsOptionRef" :option="skill.chartOption" class="chart" style="height: 160px;" />
              </div>
            </div>
            <div>
              <div class="space-y-3">
                <div>
                  <h5 class="text-sm font-medium text-gray-700 mb-2">学生掌握情况</h5>
                  <ul class="text-sm text-gray-600 space-y-1">
                    <li v-for="(item, index) in skill.points" :key="index">
                      <font-awesome-icon :icon="getItemIcon(item.type)" class="mr-1" :class="getItemIconClass(item.type)" />
                      {{ item.description }}
                    </li>
                  </ul>
                </div>
              </div>
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


const skillsOptionRef = ref(null)
// Skill data
const skillList = ref([
  {
    id: 1,
    title: '频率特性',
    average: 85,
    chartOption: null,
    points: [
      { type: 'success', description: '对BJT高频下的β变化规律理解良好' },
      { type: 'success', description: '基区宽度与载流子渡越时间的关系掌握清晰' },
      { type: 'warning', description: '对Cμ影响fT的机制理解不足' }
    ]
  },
  {
    id: 2,
    title: '特征频率测量',
    average: 78,
    chartOption: null,
    points: [
      { type: 'success', description: '大部分学生能正确设置信号幅值' },
      { type: 'warning', description: '30%的学生电路连接不完整' },
      { type: 'warning', description: '25%的学生在测量过程中出现过大信号导致失真' }
    ]
  },
  {
    id: 3,
    title: '电路连接及仪器使用',
    average: 72,
    chartOption: null,
    points: [
      { type: 'success', description: '静态工作点测量连接正确率高' },
      { type: 'warning', description: '动态测量连接错误率较高' },
      { type: 'error', description: '示波器参数设置是主要问题点' }
    ]
  }
])

let len = skillList.value.length
for (let i = 0; i < len; i++) {
  skillList.value[i].chartOption = {
    grid: {
      top: 0,
      bottom: 0,
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: { type: 'shadow' }
    },
    yAxis: {
      type: 'category',
       data: ['待提高', '基础', '良好', '熟练', '精通'],
    },
    xAxis: { type: 'value' },
    colors: ['#4DD07D', '#619AF7', '#F98E44', '#B876F8', '#F16868'],
    series: [{
      type: 'bar',
      barWidth: '60%',
      data: [
        { name: '待提高', value: 10, itemStyle: { color: '#F16868' } },
        { name: '基础', value: 20, itemStyle: { color: '#B876F8' } },
        { name: '良好', value: 30, itemStyle: { color: '#F98E44' } },
        { name: '熟练', value: 40, itemStyle: { color: '#619AF7' } },
        { name: '精通', value: 50, itemStyle: { color: '#4DD07D' } },
      ],
    }]
  }
}




// Skill distribution chart option
const chart1Ref = ref(null)
const option1 = ref({
  legend: {
    show: true,
    top: '0',
    left: 'center'
  },
  grid: {
    top: '10%',
    bottom: 0,
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: { type: 'shadow' }
  },
  xAxis: {
    type: 'category',
    data: ['频率特性', '特征频率测量', '电路连接及仪器使用']
  },
  yAxis: { type: 'value' },
  series: [{
    type: 'bar',
    name: '平均掌握程度',
    barWidth: '60%',
    data: [85, 78, 72],
    itemStyle: {
      color: '#54BFEF'
    }
  }]
})

// Get class based on average score
const getAverageScoreClass = (score) => {
  if (score >= 80) return 'bg-green-100 text-green-800'
  if (score >= 70) return 'bg-yellow-100 text-yellow-800'
  return 'bg-red-100 text-red-800'
}

// Get icon class based on item type
const getItemIcon = (type) => {
  switch (type) {
    case 'success':
      return ['fas', 'check-circle']
    case 'warning':
      return ['fas', 'exclamation-circle']
    case 'error':
      return ['fas', 'exclamation-triangle']
    default:
      return ['fas', 'circle']
  }
}

// Get icon class based on item type (for color only)
const getItemIconClass = (type) => {
  switch (type) {
    case 'success':
      return 'text-green-500'
    case 'warning':
      return 'text-yellow-500'
    case 'error':
      return 'text-red-500'
    default:
      return 'text-gray-500'
  }
}


watchEffect(() => {
  if (props.name === 'taskAbility') {
    setTimeout(_ => {
      chart1Ref.value && chart1Ref.value.resize()
      if(skillsOptionRef.value.length) {
        for (let i = 0; i < skillsOptionRef.value.length; i++) {
          skillsOptionRef.value[i].resize()
        }
      }
    }, 200)
  }
})
</script>

<style scoped>
.chart {
  width: 100%;
}
</style>