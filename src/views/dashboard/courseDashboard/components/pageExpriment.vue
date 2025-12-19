<template>
  <transition name="fade" mode="out-in">
    <div v-show="currentModule == 1" class="h-full flex flex-col justify-around" key="expriment-page">
      <div class="grid grid-cols-2 gap-[10px] h-[489px]">
        <screen-card title="实验进度总览">
          <chart-item>
            <el-table :data="experiments" class="h-[426px] w-full rounded-lg">
              <el-table-column prop=" ptName" label="实验名称" min-width="170">
                <template #default="scope">
                  <div class="flex items-center">
                    <div class="ml-4">
                      <div class="text-sm font-medium text-gray-200">{{ scope.row.ptName }}</div>
                      <div class="text-sm text-gray-400">{{ scope.row.avgScore }}</div>
                    </div>
                  </div>
                </template>
              </el-table-column>

              <el-table-column prop="status" label="状态" width="80">
                <template #default="scope">
                  <my-tag class="font-semibold rounded-full" :color="getStatusType(scope.row.status)"
                    :text="scope.row.status ? '已完成' : '未完成'" dark></my-tag>
                </template>
              </el-table-column>

              <el-table-column prop="doneTime" label="完成时间" width="135">
                <template #default="scope">
                  <span class="text-sm text-gray-200">{{ formatDate(scope.row.doneTime) }}</span>
                </template>
              </el-table-column>

              <el-table-column prop="rageOfDone" label="完成率" width="150">
                <template #default="scope">
                  <div class="flex items-center">
                    <span class="text-sm text-gray-200 mr-2 w-[80px]">{{ scope.row.rageOfDone }}%</span>
                    <div class="w-24 bg-gray-400/50 rounded-full h-1.5">
                      <div class="h-1.5 rounded-full" :class="getProgressClass(scope.row.rageOfDone)"
                        :style="{ width: scope.row.rageOfDone + '%' }">
                      </div>
                    </div>
                  </div>
                </template>
              </el-table-column>

              <el-table-column prop="avgScore" label="平均分数" width="80">
                <template #default="scope">
                  <span class="text-sm text-gray-200">{{ scope.row.avgScore }}</span>
                </template>
              </el-table-column>

              <el-table-column prop="keyTag" label="关键能力" min-width="180">
                <template #default="scope">
                  <div class="flex flex-wrap gap-1">
                    <my-tag class="mr-1 mb-1 px-2.5 py-0.5 font-medium rounded-md"
                      v-for="(ability, k) in scope.row.keyTag.slice(0, 2)" :key="k" :color="getAbilityType()"
                      :text="ability" dark>
                    </my-tag>
                  </div>
                </template>
              </el-table-column>
            </el-table>
          </chart-item>
        </screen-card>
        <screen-card title="实验对比分析"></screen-card>
      </div>
      <div class="grid grid-cols-1 h-[489px]">
        <screen-card title="实验详情"></screen-card>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { analysisTypeEnum, getAnaylsis, handleScoreOption } from "@/apis/embV4/analysis"
import ChartItem from "@/components/chart-item.vue"
import myTag from '@/components/myTag.vue'
import { formatDate } from '@/utils/dateUtil'

const props = defineProps({
  currentModule: Number,
})

const route = useRoute()
const projectId = route.params.id



// 实验列表
const experiments = ref([])
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

const currentLab = ref('')
const labList = ref([])

const currentlabDetail = ref({
  overview: {
    avgMillis: 0,
    avgScore: 0,
    rageOfError: 0,
    stuNumOfDone: 0,
    stuNumOfTotal: 0,
    totalScore: 0,
  },
  distributionOfGrade: [],
  ability: []
})

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
    formatter: '{b} 学生人数：{c}'
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

function handleChangeTask(labName) {
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

  /* getAnaylsis(projectId, analysisTypeEnum.T_EA_ED).then(res => {
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
  }) */
}

</script>

<style lang="scss" scoped>
:deep(.el-table) {
  --el-table-border-color: rgba(255, 255, 255, 0.1);
  --el-table-border: 1px solid rgba(255, 255, 255, 0.1);
  --el-table-text-color: white;
  --el-table-header-text-color: white;
  --el-table-row-hover-bg-color: rgba(255, 255, 255, 0.10);
  --el-table-current-row-bg-color: var(--el-color-primary-light-9);
  --el-table-header-bg-color: rgba(255, 255, 255, 0.08);
  --el-table-fixed-box-shadow: var(--el-box-shadow-light);
  --el-table-bg-color: rgba(255, 255, 255, 0.05);
  --el-table-tr-bg-color: transparent;
  --el-table-expanded-cell-bg-color: var(--el-fill-color-blank);
  --el-table-fixed-left-column: inset 10px 0 10px -10px rgba(0, 0, 0, 0.15);
  --el-table-fixed-right-column: inset -10px 0 10px -10px rgba(0, 0, 0, 0.15);
  --el-table-index: var(--el-index-normal);
}
</style>