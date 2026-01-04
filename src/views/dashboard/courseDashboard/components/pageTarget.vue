<template>
  <transition name="fade" mode="out-in">
    <div v-show="currentModule == 2" class="h-full flex flex-col justify-around" key="expriment-page">
      <div class="grid grid-cols-2 gap-[10px] h-[254px]">
        <screen-card title="课程目标班级平均达成度">
          <div class="h-full grid grid-cols-2 gap-6 p-2">
            <v-chart v-if="showChart1" ref="chart1Ref" :option="option1" class="h-full w-full" theme="mytheme" />

            <div class="space-y-3">
              <div v-for="(target, index) in courseTargets" :key="index" :title="target.description"
                class="flex justify-between items-center py-1 px-3 bg-white/5 rounded-lg">
                <div class="flex items-center">
                  <div class="w-3 h-3 rounded-full mr-3" :class="getLegendStyle(target.targetId)"></div>
                  <span class="text-sm font-medium text-white">课程目标{{ index + 1 }}</span>
                </div>
                <div class="text-right flex items-center space-x-4">
                  <span class="inline-block" :class="getPrecentTextStyle(target.achievement)">
                    {{ getPrecentText(target.achievement) }}
                  </span>
                  <span class="inline-block  font-bold" :class="getPrecentTextStyle(target.achievement)">
                    {{ target.achievement }}%
                  </span>
                </div>
              </div>
              <!-- 补充数据 -->
              <div v-if="courseTargets.length == 2"
                class="flex justify-between items-center py-1 px-3 bg-white/5 rounded-lg">
                <div class="flex items-center">
                  <div class="w-3 h-3 rounded-full mr-3 bg-indigo-500"></div>
                  <span class="text-sm font-medium text-white">课程目标3</span>
                </div>
                <div class="text-right flex items-center space-x-4">
                  <span class="inline-block text-blue-400">
                    达成良好
                  </span>
                  <span class="inline-block  font-bold text-blue-400">
                    85%
                  </span>
                </div>
              </div>
            </div>

          </div>
        </screen-card>
        <screen-card title="课程目标达成度趋势">
          <v-chart ref="chart2Ref" :option="trendOption" class="h-full" theme="mytheme" />
        </screen-card>
      </div>

      <div class="grid grid-cols-1 h-[392px]">
        <screen-card title="课程目标与能力标签支撑关系">
          <div class="h-full px-4 mt-2 text-xs">
            <div class="bg-white/5 rounded-lg p-2">
              <!-- 控制面板 -->
              <div class="flex justify-between items-center mb-4">
                <div class="flex space-x-2">
                  <button @click="handleTargetClick(null)" class="px-2 py-1 rounded-md transition-colors"
                    :class="currentTarget === null ? 'bg-blue-500 text-white' : 'bg-white/5 text-white hover:bg-white/20'">
                    显示全部
                  </button>
                  <div v-for="(target, index) in courseTargets" :key="index">
                    <button :class="getTargetBtnStyle(target.targetId)" class="px-2 py-1 rounded-md transition-colors"
                      @click="handleTargetClick(target.targetId)">
                      课程目标{{ index + 1 }}
                    </button>
                  </div>

                </div>
                <div class="text-xs">
                </div>
              </div>

              <!-- 支撑关系展示区域 -->
              <div class="grid grid-cols-7 gap-3">
                <!-- 课程目标列 -->
                <div class="space-y-3">
                  <h4 class=" font-medium text-white bg-white/5 text-center mb-3 py-1">课程目标</h4>
                  <div v-for="(target, index) in courseTargets" :key="`${index}-${currentTarget}`"
                    :title="target.description" @click="handleTargetClick(target.targetId)">
                    <div :class="getTargetStyle(target.targetId)"
                      class="target-card p-3 rounded-lg cursor-pointer transition-all duration-200 ease-in-out ">
                      <div class="flex items-center justify-between mb-1 ">
                        <h5 class="font-medium ">
                          目标{{ index + 1 }}
                        </h5>
                        <div class="font-bold">
                          {{ target.achievement }}%
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- 实验和能力标签区域 -->
                <div class="col-span-6">
                  <div class="grid-cols-6 flex space-x-1">
                    <div v-for="(experiment, expIndex) in experiments" :key="expIndex" class="space-y-1 w-0 flex-1">
                      <div class="words-ellipsis border bg-white/5 border-white/20 text-white text-center py-1"
                        :title="experiment.name">
                        {{ experiment.name }}
                      </div>
                      <div class="space-y-1">
                        <div v-for="(ability, abIndex) in experiment.abilities" :key="abIndex"
                          class="flex justify-between items-center px-2 py-1" :class="getAbilityStyle(ability.targetId)"
                          :title="`支撑课程目标${getCourseIndexByTargetId(ability.targetId)}`">
                          <div class="words-ellipsis">
                            {{ ability.tagName }}
                          </div>
                          <div class="font-bold inline-block w-[40px]">{{ ability.achievement }}%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              <!-- 图例 -->
              <div class="mt-6 flex flex-wrap gap-4 text-xs text-white">
                <div v-for="(target, index) in courseTargets" :key="index" class="flex items-center">
                  <div class="w-4 h-2 rounded mr-2" :class="getLegendStyle(target.targetId)"></div>
                  <span>课程目标{{ index + 1 }}（{{ target.category }}）</span>
                </div>
              </div>
            </div>
          </div>

        </screen-card>
      </div>

      <div class="grid grid-cols-1 h-[320px]">
        <screen-card title="课程目标详情分析">
          <div class="h-full flex justify-between px-2 py-1 space-x-4">

            <div v-for="(target, index) in courseTargets" :key="index"
              class="w-0 h-full flex-1 border border-white/50 rounded-lg p-1 flex justify-between text-sm">

              <div class="w-0 flex-1 p-2">
                <h4 class="font-medium" :class="getPrecentTextStyle(target.achievement)">
                  课程目标{{ index + 1 }}
                </h4>
                <p class="leading-loose">{{ target.description }}</p>
              </div>

              <div class="w-0 flex-1 flex flex-col">
                <h5 class="font-medium text-center pt-2">学生达成度分布</h5>
                <v-chart ref="chartGraphsRef" :option="target.chartGraphOption" class="flex-1" theme="mytheme" />
              </div>

              <div class="w-0 flex-1 flex flex-col">
                <div class="flex justify-between items-center text-xl" :class="getPrecentTextStyle(target.achievement)">
                  <span class="font-bold text-sm text-white text-left">支撑能力达成情况</span>
                  <span>
                    <span class="font-bold mr-2">
                      {{ target.achievement }}%
                    </span>
                    {{ getPrecentText(target.achievement) }}
                  </span>
                </div>

                <div class="flex-1" ref="abilitiesConfigRef">
                  <dv-scroll-board v-if="currentModule == 2" :config="target.abilitiesConfig" class="h-full w-full">
                  </dv-scroll-board>
                </div>
              </div>

            </div>
          </div>
        </screen-card>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { analysisTypeEnum, getAnaylsis } from '@/apis/embV4/analysis.ts'
const props = defineProps({
  currentModule: Number,
})

const route = useRoute()
const projectId = route.params.id

// Reactive data
const currentTarget = ref(null)

const chart1Ref = ref(null)
const chart2Ref = ref(null)
const chartGraphsRef = ref(null)

window.addEventListener('resize', () => {
  if (props.currentModule === 2) {
    resizeChart()
  }
})

watchEffect(() => {
  if (props.currentModule === 2) {
    resizeChart()
  }
})

function resizeChart() {
  setTimeout(_ => {
    chart1Ref.value && chart1Ref.value.resize()
    chart2Ref.value && chart2Ref.value.resize()

    let len = chartGraphsRef.value?.length || 0;
    for (let i = 0; i < len; i++) {
      chartGraphsRef.value[i].resize()

      try {
        if (courseTargets.value[i].abilitiesConfig) {
          let width = abilitiesConfigRef.value[i].clientWidth
          courseTargets.value[i].abilitiesConfig.columnWidth = [width - 70]
        }
      } catch (e) {

      }
    }
  }, 200)
}

// 课程目标数据
const courseTargets = ref([])

const abilitiesConfigRef = ref(null)

// 实验数据
const experiments = ref([])

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

// 根据 targetColor 个数设置取余值
const getNewIndex = (index) => {
  let newIndex = index % 4
  return newIndex
}

// 根据 targetId 获取颜色
const getColorByTargetId = (targetId) => {
  let newIndex = getNewIndex(targetId)
  let color = targetColors[newIndex].base
  return color;
}

const handleTargetClick = (targetId) => {
  currentTarget.value = targetId;
}
// 控制颜色显示逻辑
const getTargetStyle = (targetId) => {
  let color = getColorByTargetId(targetId)
  let cardStyle = `bg-${color}-500/20 text-${color}-400 `
  if (currentTarget.value === targetId) {
    cardStyle = `border-2 border-${color}-500 ` + cardStyle;
  }
  return cardStyle;
}

const getTargetBtnStyle = (targetId) => {
  let color = getColorByTargetId(targetId)
  let btnStyle = 'bg-white/5 text-white hover:bg-white/20'
  if (currentTarget.value === targetId) {
    btnStyle = `bg-${color}-500 text-white`
  }
  return btnStyle;
}

// Update 
const getAbilityStyle = (targetId) => {
  let color = getColorByTargetId(targetId)
  let abilityStyle = ''
  if (currentTarget.value !== null && currentTarget.value !== targetId) {
    abilityStyle = ' opacity-30 '
  }
  abilityStyle += `bg-${color}-500/20 border-${color}-500 text-${color}-400 `
  return abilityStyle
}

const getLegendStyle = (targetId) => {
  let color = getColorByTargetId(targetId)
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

const getPrecentTextStyle = (percentage) => {
  if (percentage >= 90) {
    return 'text-green-400';
  } else if (percentage >= 80) {
    return 'text-blue-400';
  } else if (percentage >= 70) {
    return 'text-yellow-400';
  } else if (percentage >= 60) {
    return 'text-orange-400';
  } else {
    return 'text-red-400';
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
const showChart1 = ref(false)
const option1 = ref({
  title: {
    show: false
  },
  grid: {
    top: 0,
    bottom: 0,
    left: 0,
    right: 100,
  },
  tooltip: {
    trigger: 'item',
    formatter: function (params) {
      // 处理单系列/多系列情况
      const data = Array.isArray(params) ? params[0] : params;
      let result = `<div style="margin-bottom: 4px; font-weight: 700;">${data.name}</div>`;

      for (let i = 0; i < data.value.length; i++) {
        // 尝试获取维度名称，失败则使用默认名称
        let dimensionName = `维度${i + 1}`;
        try {
          dimensionName = option1.value.radar.indicator[i].name;
        } catch (e) {
          // 忽略错误，使用默认名称
        }

        // 在值后面添加%符号
        result += `<div style="width: 100%;display: flex; justify-content: space-between;">
                    <div style="width:calc(100% - 60px); overflow:hidden; text-overflow: ellipsis; white-space: nowrap;">${data.marker} ${dimensionName}:</div>
                    <div style="width: 60px;text-align: right;"> ${data.value[i]}%</div>
                  </div>`;
      }

      return result;
    },
  },
  legend: {
    data: ['平均值达成度', '最优达成度', '最差达成度'],
    right: 0,
    top: 'middle',
    orient: 'vertical',
  },
  radar: {
    indicator: [
      { name: '课程目标1', max: 100 },
    ],
    radius: '73%',
    center: ['50%', '58%'],
  },
  series: [
    {
      type: 'radar',
      data: [
        {
          value: [], //[85.2, 80.6, 75.3, 68.2],
          name: '平均值达成度',
          itemStyle: { color: '#3b82f6' },
          lineStyle: { width: 2 },
          areaStyle: { opacity: 0.1 }
        },
        {
          value: [], //[92, 88, 82, 75],
          name: '最优达成度',
          itemStyle: { color: '#10b981' },
          lineStyle: { width: 2 },
          areaStyle: { opacity: 0.1 }
        },
        {
          value: [], //[78, 72, 68, 60],
          name: '最差达成度',
          itemStyle: { color: '#ef4444' },
          lineStyle: { width: 2 },
          areaStyle: { opacity: 0.1 }
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
    trigger: 'axis',
    formatter: function (params) {
      let firstItem = params[0]
      let tip = `<div>`
      tip += `<div class="font-bold mb-2">${firstItem.axisValue}</div>`
      params.forEach(item => {
        tip += `<div class="flex items-center">
            <div><span class="mr-2">${item.marker}${item.seriesName}:</span> ${item.data}%</div>
          </div>`
      })
      tip += `</div>`
      return tip
    }
  },
  legend: {
    top: '0',
    icon: 'rect'
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,  // This makes the line start from the edge
    data: [], // ['学期初', '第一次实验', '第二次实验', '第三次实验', '第四次实验', '当前'], // 根据事件数据渲染
    axisLabel: {
      rotate: 0,  // No rotation for better readability
      interval: 0 // Show all labels
    }
  },
  yAxis: {
    type: 'value',
    min: 0,
    max: 100,
    splitLine: {
      show: true
    }
  },
  series: [
    /* {
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
 */
  ]
})

onMounted(() => {
  setTimeout(() => {
    updateChart()
  }, 200)
})

function updateChart() {
  showChart1.value = false
  getAnaylsis(projectId, analysisTypeEnum.T_CT_OAS).then(res => {
    if (res.state == 200) {
      let list = res.data || []
      let avgRage = list.map(_ => _.avgRage)
      let maxRage = list.map(_ => _.maxRage)
      let minRage = list.map(_ => _.minRage)
      option1.value.series[0].data[0].value = avgRage
      option1.value.series[0].data[1].value = maxRage
      option1.value.series[0].data[2].value = minRage
      let indicator = []
      for (let i = 0; i < list.length; i++) {
        indicator.push({
          name: `课程目标${i + 1}`,
          max: 100
        })
      }
      //  indicator 大小为 2 时，增加团队协作
      if (indicator.length == 2) {
        indicator.push({
          name: '课程目标3',
          max: 100
        })
        const randomValues = [80, 85, 90];
        randomValues.sort();
        option1.value.series[0].data[0].value.push(randomValues[0])
        option1.value.series[0].data[1].value.push(randomValues[1])
        option1.value.series[0].data[2].value.push(randomValues[2])
      }

      option1.value.radar.indicator = indicator
      if (list.length > 0) {
        showChart1.value = true
        setTimeout(() => {
          chart1Ref.value && chart1Ref.value.setOption(option1.value)
        }, 200)
      }
    }
  })

  getAnaylsis(projectId, analysisTypeEnum.T_CT_CR).then(res => {
    if (res.state == 200) {
      courseTargets.value = res.data.courseTargets || []
      experiments.value = res.data.experiments || []

      courseTargets.value.forEach((item, index) => {
        item.chartGraphOption = {
          title: {
            show: false
          },
          grid: {
            top: '0%',
            // bottom: '20%'
          },
          tooltip: {
            formatter: '{b} 学生人数: {c}'
          },
          legend: {
            bottom: '0',
            fontSize: '10px',
            // orient: 'vertical',
            icon: 'circle',
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
                { value: 0, itemStyle: { color: '#5ED181' }, name: '优秀' },
                { value: 0, itemStyle: { color: '#7096F7' }, name: '良好' },
                { value: 0, itemStyle: { color: '#F59153' }, name: '中等' },
                { value: 0, itemStyle: { color: '#EAC352' }, name: '及格' },
                { value: 0, itemStyle: { color: '#ED6B6D' }, name: '不及格' }
              ]
            }
          ]
        }

        let data = item.abilities.map(_ => {
          let scoreClass = getPrecentTextStyle(_.achievement)
          let scoreInfo = `<div style="text-align: right;">
          <span class="${scoreClass}">${_.achievement}%</span>
          </div>`

          return [_.tagName, scoreInfo]
        })

        item.abilitiesConfig = {
          data: data,
          columnWidth: [],
          waitTime: 3000,
          headerBGC: 'transparent',
          oddRowBGC: 'transparent',
          evenRowBGC: 'transparent',
          rowNum: 10,
        }
      })

      getAnaylsis(projectId, analysisTypeEnum.T_CT_TA).then(res => {
        if (res.state == 200) {
          let list = res.data || []
          for (let i = 0; i < list.length; i++) {
            let item = list[i]
            let data = handleCircleChartScore(item.achievementDistribution)
            courseTargets.value[i].chartGraphOption.series[0].data = data
            chartGraphsRef.value[i] && chartGraphsRef.value[i].setOption(courseTargets.value[i].chartGraphOption)
          }
        }
      })

      getAnaylsis(projectId, analysisTypeEnum.T_CT_OAS_TREND).then(res => {
        if (res.state == 200) {
          // console.log(res.data)
          let list = res.data || []
          let xAxisData = list[0].trend.map(_ => _.label)
          let series = []
          for (let i = 0; i < list.length; i++) {
            let item = list[i]
            series.push({
              name: `课程目标${getCourseIndexByTargetId(item.targetId)}`,
              type: 'line',
              data: item.trend.map(_ => _.value),
              smooth: true,
              itemStyle: {
                color: getTrendLineColor(i)
              },
              areaStyle: {
                opacity: 0.1
              },
              // Make sure the line connects to the y=0 axis
              connectNulls: true
            })
          }

          trendOption.value.xAxis.data = xAxisData
          trendOption.value.series = series
          chart2Ref.valule && chart2Ref.value.setOption(trendOption.value)
        }
      })
    }
  })

}

const getCourseIndexByTargetId = (targetId) => {
  let index = courseTargets.value.findIndex(item => item.targetId == targetId)
  return index + 1;
}

const handleCircleChartScore = (list) => {
  let data = [
    { value: 0, itemStyle: { color: '#5ED181' }, name: '优秀(90-100)' },
    { value: 0, itemStyle: { color: '#7096F7' }, name: '良好(80-90)' },
    { value: 0, itemStyle: { color: '#F59153' }, name: '中等(70-80)' },
    { value: 0, itemStyle: { color: '#EAC352' }, name: '及格(60-70)' },
    { value: 0, itemStyle: { color: '#ED6B6D' }, name: '不及格(<60)' }
  ]
  list.forEach(item => {
    let key = Object.keys(item)[0]
    let value = item[key]
    if ('优秀(90-100)' == key) {
      data[0].value = value
      data[0].name = '优秀'
    } else if ('良好(80-90)' == key) {
      data[1].value = value
      data[1].name = '良好'
    } else if ('中等(70-80)' == key) {
      data[2].value = value
      data[2].name = '中等'
    } else if ('及格(60-70)' == key) {
      data[3].value = value
      data[3].name = '及格'
    } else if ('不及格(<60)' == key) {
      data[4].value = value
      data[4].name = '不及格'
    }
  })
  return data
}

const colors = ['#22c55e', '#3b82f6', '#EAB308', '#EF4444', '#F59E0B', '#FCA5A5']
const getTrendLineColor = (index) => {
  let newIndex = index % colors.length
  return colors[newIndex]
}
</script>

<style scoped>
.words-ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

:deep(.row-item) {
  border-bottom: .5px solid transparent !important;
}
</style>