<template>
  <div class="mt-6 space-y-6 fade-in">
    <div class="grid grid-cols-1 gap-6">
      <!-- 能力标签掌握分布 -->
      <div class="bg-white rounded-lg shadow p-4 hover-card">
        <h3 class="text-lg font-medium text-gray-900 mb-4">能力标签掌握分布</h3>
        <v-chart ref="chart1Ref" :option="option1" class="chart-container" style="height: 400px;" />
      </div>
    </div>

    <!-- 能力标签详情 -->
    <div class="bg-white rounded-lg shadow p-4">
      <h3 class="text-lg font-medium text-gray-900 mb-4">能力标签详细分析</h3>

      <div class="space-y-6">
        <div v-for="skill in skillList" :key="skill.id + '_abilty'" class="bg-gray-50 p-4 rounded-lg">
          <div class="flex justify-between items-center">
            <h4 class="text-md font-medium text-gray-800">
              {{ skill.tagName }}
            </h4>
            <span class="px-2 py-1 text-sm rounded-full" :class="getAverageScoreClass(skill.avgRage)">
              班级平均: {{ skill.avgRage }}%
            </span>
          </div>
          <div class="mt-3 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <div class="flex justify-between text-sm mb-1">
                <span class="text-gray-600">掌握程度分布</span>
              </div>
              <div class="h-40">
                <v-chart :key="skill.id" ref="skillsOptionRef" :option="skill.chartOption" class="chart"
                  style="height: 160px;" />
              </div>
            </div>
            <div>
              <div class="space-y-3">
                <div>
                  <h5 class="text-sm font-medium text-gray-700 mb-2">学生掌握情况</h5>
                  <ul class="text-sm text-gray-600 space-y-1">
                    <li v-for="(item, index) in skill.quesAchievedRage" :key="index">
                      <font-awesome-icon :icon="getItemIcon(item.scoringRage)" class="mr-1"
                        :class="getItemIconClass(item.scoringRage)" />
                      {{ item.name }}
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
import { taskAnalysisEnum, getTaskAnalysis } from '@/apis/embV4/analysis'
const route = useRoute()
const projectId = route.params.projectId
const taskId = route.params.taskId

const props = defineProps({
  name: String
})

const skillsOptionRef = ref(null)
// Skill data
const skillList = ref([])

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
  // xAxis: {
  //   type: 'category',
  //   data: [], //['频率特性', '特征频率测量', '电路连接及仪器使用'],
  //   axisLabel: {
  //     rotate: 5
  //   }
  // },
  // yAxis: { type: 'value' },

  xAxis: {
    type: 'value',
  },
  yAxis: {
    type: 'category',
    data: [],
  },
  series: [{
    type: 'bar',
    name: '平均掌握程度',
    barWidth: '30%',
    data: [], // [85, 78, 72],
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

// 暂时显示题目 根据分数设置样式
const getItemIcon = (scoringRage) => {
  if (scoringRage >= 80) {
    return ['fas', 'check-circle']
  } else if (scoringRage >= 70) {
    return ['fas', 'exclamation-circle']
  } else {
    return ['fas', 'exclamation-triangle']
  }
}

// Get icon class based on item type (for color only)
const getItemIconClass = (scoringRage) => {
  if (scoringRage >= 80) {
    return 'text-green-500'
  } else if (scoringRage >= 70) {
    return 'text-yellow-500'
  } else {
    return 'text-red-500'
  }
}

watchEffect(() => {
  if (props.name === 'taskAbility') {
    setTimeout(_ => {
      chart1Ref.value && chart1Ref.value.resize()
      if (skillsOptionRef.value && skillsOptionRef.value.length) {
        for (let i = 0; i < skillsOptionRef.value.length; i++) {
          skillsOptionRef.value[i].resize()
        }
      }
    }, 200)
  }
})

onMounted(() => {
  setTimeout(_ => {
    updateChart()
  }, 200)
})

function updateChart() {
  getTaskAnalysis(projectId, taskId, taskAnalysisEnum.TASK_D_ABILITY).then(res => {
    if (res.state == 200) {
      // console.log(res.data)
      setSkillList(res.data || [])
    }
  })
}

function setSkillList(list) {
  let xAxisData = list.map(_ => _.tagName)
  let data = list.map(_ => _.avgRage)
  option1.value.yAxis.data = xAxisData
  option1.value.series[0].data = data
  // chart1Ref.value && chart1Ref.value.setOption(option1.value)

  setSkillOption(list)
}

function setSkillOption(list) {
  for (let i = 0; i < list.length; i++) {
    let ability = list[i].abilityDistribution
    list[i].chartOption = {
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
          { name: '待提高', value: ability[2]['<60'], itemStyle: { color: '#F16868' } },
          { name: '基础', value: ability[1]['60-70'], itemStyle: { color: '#B876F8' } },
          { name: '良好', value: ability[0]['70-80'], itemStyle: { color: '#F98E44' } },
          { name: '熟练', value: ability[4]['80-90'], itemStyle: { color: '#619AF7' } },
          { name: '精通', value: ability[3]['90-100'], itemStyle: { color: '#4DD07D' } },
        ],
      }]
    }
  }

  skillList.value = list
  nextTick()

}
</script>

<style scoped>
.chart {
  width: 100%;
}
</style>