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
        <screen-card title="实验对比分析">
          <chart-item>
            <v-chart ref="chart3Ref" class="h-full w-full" :option="option3" theme="mytheme"></v-chart>
          </chart-item>
        </screen-card>
      </div>
      <div class="grid grid-cols-1 h-[489px]">
        <screen-card title="实验详情">
          <template #right>
            <el-select v-model="currentLab" @change="handleChangeTask" class="w-[150px] mr-4">
              <el-option v-for="(labItem, k) in labList" :key="k" :label="labItem" :value="labItem"></el-option>
            </el-select>
          </template>
          <div class="h-full grid grid-cols-3 gap-6 p-4 relative">
            <!-- 实验概览 -->
            <div class="bg-white/5 p-4 rounded-lg h-full flex flex-col">
              <h4 class="font-medium mb-4">实验概览</h4>
              <div class="flex-1 flex flex-col justify-around">
                <div class="bg-white/5 p-3 rounded-lg flex items-center justify-between">
                  <div class="flex items-center">
                    <div class="h-10 w-10 rounded-full bg-green-500/20 flex items-center justify-center">
                      <font-awesome-icon icon="fas fa-users" class="text-green-400" />
                    </div>
                    <div class="ml-3">
                      <div class="text-xs text-gray-200">完成人数</div>
                      <div class="text-sm font-medium text-gray-100">
                        {{ currentlabDetail.overview.stuNumOfDone }}/
                        {{ currentlabDetail.overview.stuNumOfTotal }}
                      </div>
                    </div>
                  </div>
                  <div>
                    <div class="text-sm font-medium text-green-400">
                      <span v-if="currentlabDetail.overview.stuNumOfTotal == 0"></span>
                      <span v-else>{{ ((currentlabDetail.overview.stuNumOfDone /
                        currentlabDetail.overview.stuNumOfTotal) *
                        100).toFixed(2) }} %</span>
                    </div>
                  </div>
                </div>

                <div class="bg-white/5 p-3 rounded-lg flex items-center justify-between">
                  <div class="flex items-center">
                    <div class="h-10 w-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                      <font-awesome-icon icon="fas fa-chart-line" class="text-blue-400" />
                    </div>
                    <div class="ml-3">
                      <div class="text-xs text-gray-200">平均得分</div>
                      <div class="text-sm font-medium text-gray-100">
                        {{ currentlabDetail.overview.avgScore }}/
                        {{ currentlabDetail.overview.totalScore }}
                      </div>
                    </div>
                  </div>
                  <div>
                    <span class="text-xs text-green-500">
                      <span v-if="currentlabDetail.overview.totalScore == 0"></span>
                      <span v-else>
                        <font-awesome-icon icon="fas fa-arrow-up" class="text-green-500" />
                        {{ ((currentlabDetail.overview.avgScore / currentlabDetail.overview.totalScore) *
                          100).toFixed(2) }} %
                      </span>
                    </span>
                  </div>
                </div>

                <div class="bg-white/5 p-3 rounded-lg flex items-center justify-between">
                  <div class="flex items-center">
                    <div class="h-10 w-10 rounded-full bg-yellow-500/20 flex items-center justify-center">
                      <font-awesome-icon icon="fas fa-clock" class="text-yellow-400" />
                    </div>
                    <div class="ml-3">
                      <div class="text-xs text-gray-200">平均用时</div>
                      <div class="text-sm font-medium text-gray-100">
                        {{ Math.round(currentlabDetail.overview.avgMillis / 1000 / 60) }}分钟</div>
                    </div>
                  </div>
                  <div>
                    <font-awesome-icon icon="fas fa-arrow-down" class="text-green-500" />
                    <span class="text-xs text-green-500">5分钟</span>
                  </div>
                </div>

                <div class="bg-white/5 p-3 rounded-lg flex items-center justify-between">
                  <div class="flex items-center">
                    <div class="h-10 w-10 rounded-full bg-red-500/20 flex items-center justify-center">
                      <font-awesome-icon icon="fas fa-exclamation-circle" class="text-red-400" />
                    </div>
                    <div class="ml-3">
                      <div class="text-xs text-gray-200">平均错误率</div>
                      <div class="text-sm font-medium text-gray-100">
                        {{ currentlabDetail.overview.rageOfError }}%</div>
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
            <div class="bg-white/5 p-4 rounded-lg h-full flex flex-col">
              <h4 class="font-medium  mb-4">成绩分布</h4>
              <div class="flex-1">
                <v-chart ref="chart1Ref" :option="option1" class="h-full w-full" theme="mytheme"></v-chart>
              </div>
            </div>

            <!-- 能力评价 -->
            <div class="bg-white/5 p-4 rounded-lg h-full flex flex-col">
              <h4 class="font-medium  mb-4">能力评价</h4>
              <div class="flex-1">
                <v-chart v-if="showChart4" ref="chart4Ref" :option="option4" class="h-full w-full" theme="mytheme"></v-chart>
              </div>
            </div>
          </div>
        </screen-card>
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
const chart3Ref = ref(null)

const chart4Ref = ref(null)

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
  series: [
    {
      type: 'bar',
      barWidth: '20%',
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

const option3 = ref()
option3.value = {
  title: {
    show: false,
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    },
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: [], //['BJT特征频率测量', '晶体管特性测量', '共射放大器设计', '运算放大器应用']
  },
  yAxis: {
    type: 'value',
    axisLabel: {
      formatter: '{value}'
    }
  },
  series: [
    {
      type: 'line',
      name: '平均成绩',
      data: [],
    },
    {
      type: 'line',
      name: '难度系数',
      data: [1, 1, 1, 1],
      itemStyle: {
        color: '#EF5454',
      },
      lineStyle: {
        color: '#EF5454',
        type: 'dashed',
      }
    }
  ]
}

const showChart4 = ref(false)
const option4 = ref(null)
option4.value = {
  title: {
    show: false,
  },
  tooltip: {},
  legend: {
    show: true,
    top: '0',
    right: '0',
  },
  radar: {
    radius: '80%',
    shape: 'circle',
    indicator: [
      // { name: '课程目标1', max: 100 },
    ],
    axisName: {
      fontSize: 12,
      color: 'rgba(255, 255, 255, 0.7)'
    },
    axisLine: {
      lineStyle: {
        color: 'rgba(255, 255, 255, 0.2)'
      }
    },
    splitNumber: 5,
    splitArea: {
      show: false
    },
    splitLine: {
      lineStyle: {
        color: 'rgba(255, 255, 255, 0.2)'
      }
    },
  },
  series: [
    {
      type: 'radar',
      data: [
        {
          value: [
            // 28, 19, 28, 50, 28, 10
          ],
          name: '平均表现',
          // symbol: 'none',
          itemStyle: {
            color: '#3B82F6'
          },
          areaStyle: {
            opacity: 0.1
          }
        },
        {
          value: [
            // 11, 22, 33, 55, 66, 100
          ],
          name: '优秀学生表现',
          itemStyle: {
            color: '#32C96A',
          },
          lineStyle: {
            type: 'dashed',
          },
          areaStyle: {
            opacity: 0.1
          }
        }

      ]
    },
  ]
};

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

  // TODO:缺少最优学生表现相关数据
  // console.log(labDetail.ability)

  option1.value = handleScoreOption(currentlabDetail.value.distributionOfGrade, option1)
  chart1Ref.value && chart1Ref.value.setOption(option1.value)

  let indicator = []
  let avgStuScore = []
  let bestStuScore = []
  labDetail.ability.forEach(ability => {
    indicator.push({
      name: ability.tagName,
      max: 100
    })
    avgStuScore.push(ability.value)
    bestStuScore.push(95)
  })

  option4.value.radar.indicator = indicator
  option4.value.series[0].data[0].value = avgStuScore
  option4.value.series[0].data[1].value = bestStuScore
  showChart4.value = true
}

window.addEventListener('resize', () => {
  chart1Ref.value && chart1Ref.value.resize()
  chart3Ref.value && chart3Ref.value.resize()
  chart4Ref.value && chart4Ref.value.resize()
})

watchEffect(() => {
  if (props.currentModule == 1) {
    setTimeout(_ => {
      chart1Ref.value && chart1Ref.value.resize()
      chart3Ref.value && chart3Ref.value.resize()
      chart4Ref.value && chart4Ref.value.resize()
    }, 100)
  }
})

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
    if (res.state == 200) {
      let difficulty = res.data.difficulty || []
      let grade = res.data.grade || []
      handleDifficultyOption(difficulty)
      handleGradeOption(grade)
    }
  })
}

// TODO 数据缺失 实验难度对比
function handleDifficultyOption(difficulty) {
  // console.log(difficulty  )
}

function handleGradeOption(grades) {
  let xAxisData = grades.map(_ => _.ptName)
  let datas = grades.map(_ => _.avgScore)
  option3.value.xAxis.data = xAxisData
  option3.value.series[0].data = datas
  chart3Ref.value && chart3Ref.value.setOption(option3.value)
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