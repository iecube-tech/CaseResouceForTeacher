<!-- Page 1 -->
<template>
  <!-- 页面1: 课程概览总览 -->
  <transition name="fade" mode="out-in">
    <div v-show="currentModule == 0" class="h-full flex flex-col justify-around">

      <!-- 第一行 -->
      <screen-card class="p-4 h-[162px]">
        <div class="h-full grid grid-cols-5">
          <div class="col-span-2 flex flex-col justify-around">
            <h1 class="text-white text-xl font-bold">半导体器件物理实验</h1>
            <div class="grid grid-cols-2">
              <div class="text-blue-200">授课教师: <span class="text-white ">张教授</span></div>
              <div class="text-blue-200">学期时间: <span class="text-white ">2025春季</span></div>
            </div>
            <div class="grid grid-cols-2">
              <div class="text-blue-200">班级信息: <span class="text-white ">电子2301</span></div>
              <div class="text-blue-200">学生人数: <span class="text-white ">62人</span></div>
            </div>
          </div>
          <!-- 右侧课程状态 -->
          <div class="col-span-3">
            <div class="h-full flex flex-col justify-around items-center p-2 rounded-3xl border border-blue-400/30
               bg-gradient-to-r from-blue-500/20 to-purple-500/20">
              <div class="text-white/80 text-xl">当前状态</div>
              <div class="text-green-400 text-4xl ">进行中</div>
              <div class="grid grid-cols-3 gap-6 text-xl">
                <div class="text-center">
                  <span class="text-white/60">开课时间: </span>
                  <span class="text-white ">2025.11.30-2025.12.31</span>
                </div>
                <div class="text-center">
                  <span class="text-white/60">总课时数: </span>
                  <span class="text-white ">48学时</span>
                </div>
                <div class="text-center">
                  <span class="text-white/60">实验项目: </span>
                  <span class="text-white ">4个</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </screen-card>

      <!-- 第二行 -->
      <div class="grid grid-cols-6 h-[80px] gap-[10px]">
        <!-- 课程平均分 -->
        <screen-card class="flex flex-col justify-around items-center p-2">
          <span class="text-green-400  font-bold text-[30px] leading-[30px]">{{ overviewData.avgGrade }}</span>
          <span class="text-lg">课程平均分</span>
        </screen-card>

        <!-- 学生总数 -->
        <screen-card class="flex flex-col justify-around items-center p-2">
          <span class="text-blue-400  font-bold text-[30px] leading-[30px]">{{ overviewData.stuNum }}</span>
          <span class="text-lg">学生总数</span>
        </screen-card>

        <!-- 实验完成度 -->
        <screen-card class="flex flex-col justify-around items-center p-2">
          <span class="text-purple-400  font-bold text-[30px] leading-[30px]">
            {{ overviewData.rateOfCourse.done }}/{{ overviewData.rateOfCourse.total }}
          </span>
          <span class="text-lg">实验完成</span>
        </screen-card>

        <!-- AI交互总量 -->
        <screen-card class="flex flex-col justify-around items-center p-2">
          <span class="text-yellow-400  font-bold text-[30px] leading-[30px]">{{ overviewData.aiUsedNum }}</span>
          <span class="text-lg">AI交互量</span>
        </screen-card>

        <!-- AI使用率 -->
        <screen-card class="flex flex-col justify-around items-center p-2">
          <span class="text-cyan-400  font-bold text-[30px] leading-[30px]">85%</span>
          <span class="text-lg">AI使用率</span>
        </screen-card>

        <!-- 课程目标达成 -->
        <screen-card class="flex flex-col justify-around items-center p-2">
          <span class="text-orange-400  font-bold text-[30px] leading-[30px]">
            {{ (overviewData.rateOfCourse.done / overviewData.rateOfCourse.total * 100).toFixed(1) }}%
          </span>
          <span class="text-lg">总体达成度</span>
        </screen-card>
      </div>

      <!-- 第三行 -->
      <div class="grid grid-cols-3 h-[358px] gap-[10px]">
        <screen-card title="课程进度概览">
          <chartItem>
            <v-chart ref="chart1Ref" class="h-full" :option="option1" theme="mytheme"></v-chart>
          </chartItem>
        </screen-card>

        <screen-card title="课程目标达成度分析">
          <chartItem>
            <v-chart v-if="option2Show" ref="chart2Ref" class="h-full" :option="option2" theme="mytheme"></v-chart>
          </chartItem>
        </screen-card>

        <screen-card title="班级成绩分布情况">
          <chartItem>
            <v-chart ref="chart3Ref" class="h-full" :option="option3" theme="mytheme"></v-chart>
          </chartItem>
        </screen-card>
      </div>

      <!-- 第四行 -->
      <div class="grid grid-cols-2 h-[358px] gap-[10px]">
        <screen-card title="各实验得分情况">
          <chartItem>
            <v-chart ref="chart4Ref" class="h-full" :option="option4" theme="mytheme"></v-chart>
          </chartItem>
        </screen-card>

        <screen-card title="与上学期对比分析">
          <chartItem>
            <v-chart ref="chart5Ref" class="h-full" :option="option5" theme="mytheme"></v-chart>
          </chartItem>
        </screen-card>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { getAnaylsis, analysisTypeEnum, handleScoreOption } from "@/apis/embV4/analysis"

const props = defineProps({
  currentModule: Number,
})

const route = useRoute()
const projectId = route.params.id

const overviewData = ref({
  aiUsedNum: 0,
  avgGrade: 0,
  rateOfCourse: { done: 0, total: 0 },
  stuNum: 0,
})

// 课程进度概览
const chart1Ref = ref(null)
const chart2Ref = ref(null)
const chart3Ref = ref(null)
const chart4Ref = ref(null)
const chart5Ref = ref(null)

const option1 = ref()
option1.value = {
  title: {
    show: false,
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

  color: ['#158FC9'],
  series: [
    {
      type: 'bar',
      barWidth: '30%',
      data: [0, 0, 0, 0]
    },
  ]
}

const option2Show = ref(false)
const option2 = ref(null)
option2.value = {
  title: {
    show: false,
  },
  tooltip: {},
  legend: {
    data: ['平均达成度', '最优达成度', '最差达成度'],
    orient: 'vertical', // Vertical orientation
    right: 10,          // Position from right
    top: 'center'       // Center vertically
  },
  color: ['#3B82F6', '#32C96A', '#EF4444'],
  radar: {
    // shape: 'circle',
    radius: '80%',
    indicator: [
      // { name: '课程目标1', max: 100 },
      // { name: '课程目标2', max: 100 },
      // { name: '课程目标3', max: 100 },
    ],
    axisName: {
      fontSize: 12
    },
    splitNumber: 5
  },
  series: [
    {
      type: 'radar',
      data: [
        {
          value: [
            // 28, 19, 28, 50, 28, 10
          ],
          name: '平均达成度',
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
          name: '最优达成度',
          itemStyle: {
            color: '#32C96A'
          },
          areaStyle: {
            opacity: 0.1
          }
        },
        {
          value: [
            // 55, 66, 77, 22, 33, 44
          ],
          name: '最差达成度',
          itemStyle: {
            color: '#EF4444'
          },
          areaStyle: {
            opacity: 0.1
          }
        }
      ]
    },
  ]
};

const option3 = ref(null)
option3.value = {
  title: {
    show: false,
  },
  grid: {
    top: 0,
    bottom: 0,
  },
  tooltip: {
    formatter: '{b} 学生人数: {c}人'
  },
  series: [
    {
      type: 'pie',
      radius: ['40%', '70%'],
      label: {
        formatter: function (params) {
          return `${params.name} 人数: ${params.value}`
        }
      },
      data: [
        {
          name: '90-100',
          value: 0,
          itemStyle: { color: '#32C96A' } // Green for 90-100
        },
        {
          name: '80-90',
          value: 0,
          itemStyle: { color: '#609DFE' } // Light green for 80-90
        },
        {
          name: '70-80',
          value: 0,
          itemStyle: { color: '#F8954E' } // Yellow for 70-80
        },
        {
          name: '60-70',
          value: 0,
          itemStyle: { color: '#F0CA52' } // Orange for 60-70
        },
        {
          name: '<60',
          value: 0,
          itemStyle: { color: '#F47C7C' } // Red for <60
        }
      ]
    },
  ]
}
const option4 = ref(null)
option4.value = {
  grid: {
    top: '20%',
    bottom: 0,
    left: 0,
    right: 0,
  },
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data: ['平均分', '最高分', '最低分'],
    top: 0,
    left: 'center',
    orient: 'horizontal',
    icon: 'roundRect'
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: [], // ['实验一', '实验二', '实验三',]
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      name: '平均分',
      data: [], //[82, 93, 86],
      type: 'line',
      itemStyle: {
        color: '#38B1E8',
      },
      areaStyle: {
        opacity: 0.1
      }
    },
    {
      name: '最高分',
      data: [], //[95, 96, 97],
      type: 'line',
      itemStyle: {
        color: '#32C96A',
      },
      lineStyle: {
        type: 'dashed'
      }

    },
    {
      name: '最低分',
      data: [], //[60, 75, 80],
      type: 'line',
      itemStyle: {
        color: '#EF4444',
      },
      lineStyle: {
        type: 'dashed'
      }

    }
  ]
};

const option5 = ref(null)
option5.value = {
  grid: {
    top: '20%',
    bottom: 0,
  },
  legend: {
    data: [],  //['本学期', '上学期'],
    top: 0,
    left: 'center',
    orient: 'horizontal',
    icon: 'roundRect'
  },
  tooltip: {
    trigger: 'axis',
  },
  xAxis: {
    type: 'category',
    data: ['平均分', '通过率', 'AI使用率', '课程目标达成度']
  },
  yAxis: {
    type: 'value',
    axisLabel: {
      formatter: '{value} %'
    }
  },
  color: ['#38B1E8', '#B8BEC6'],
  series: [
    /* {
      name: '本学期',
      type: 'bar',
      barWidth: '30%',
      data: [60, 80, 75, 55, 34]
    },
    {
      name: '上学期',
      type: 'bar',
      barWidth: '30%',
      data: [24, 24, 24, 24, 24]
    }, */
  ]
}

window.addEventListener('resize', () => {
  if (props.currentModule == 0){
    resizeChart()
  }
})

watchEffect(() => {
  if (props.currentModule == 0){
    resizeChart()
  }
})

function resizeChart() {
  setTimeout(_ => {
    chart1Ref.value && chart1Ref.value.resize()
    chart2Ref.value && chart2Ref.value.resize()
    chart3Ref.value && chart3Ref.value.resize()
    chart4Ref.value && chart4Ref.value.resize()
    chart5Ref.value && chart5Ref.value.resize()
  }, 200)
}

onMounted(() => {
  setTimeout(() => {
    updateChart()
  }, 200)
})

function updateChart() {
  getAnaylsis(projectId, analysisTypeEnum.T_OVERVIEW_OVERVIEW).then(res => {
    if (res.state == 200) {
      overviewData.value = res.data
    }
  })


  getAnaylsis(projectId, analysisTypeEnum.T_OVERVIEW_RATE).then(res => {
    if (res.state == 200) {
      let { rageOfCourse, rageOfKnowledgePoints, rageOfPSTDone, rageOfTarget } = res.data
      option1.value.series[0].data = [rageOfCourse, rageOfPSTDone, rageOfKnowledgePoints, rageOfTarget]
      chart1Ref.value && chart1Ref.value.setOption(option1.value)
    }
  })

  getAnaylsis(projectId, analysisTypeEnum.T_OVERVIEW_GA).then(res => {
    if (res.state == 200) {
      let indicator = []
      let avgRage = []
      let maxRage = []
      let minRage = []
      for (let i = 0; i < res.data.length; i++) {
        let item = res.data[i]
        indicator.push({
          name: `课程目标${i + 1}`, // item.targetName,
          max: 100
        })
        avgRage.push(item.avgRage)
        maxRage.push(item.maxRage)
        minRage.push(item.minRage)
      }
      // 如果课程目标等于2个时， 手动增加一个团队写作目标
      if (indicator.length == 2) {
        indicator.push({
          name: '课程目标3', // item.targetName,
          max: 100
        })
        const randomValues = [80, 85, 90];
        randomValues.sort();
        minRage.push(randomValues[0])
        avgRage.push(randomValues[1])
        maxRage.push(randomValues[2])
      }

      let radar = {
        radius: '80%',
        indicator: indicator,
        axisName: {
          fontSize: 12 // Increase font size of indicator names
        },
        splitNumber: 5
      }

      let seriesItem = {
        type: 'radar',
        data: [
          {
            value: avgRage,
            name: '平均达成度',
            itemStyle: {
              color: '#3B82F6'
            },
            areaStyle: {
              opacity: 0.1
            }
          },
          {
            value: maxRage,
            name: '最优达成度',
            itemStyle: {
              color: '#32C96A'
            },
            areaStyle: {
              opacity: 0.1
            }
          },
          {
            value: minRage,
            name: '最差达成度',
            itemStyle: {
              color: '#EF4444'
            },
            areaStyle: {
              opacity: 0.1
            }
          }
        ]
      }
      option2.value.radar = radar
      option2.value.series = [seriesItem]
      option2Show.value = true
      chart2Ref.value && chart2Ref.value.setOption(option2.value)
    }
    // 
  })

  getAnaylsis(projectId, analysisTypeEnum.T_OVERVIEW_DOCG).then(res => {
    if (res.state == 200) {
      option3.value = handleScoreOption(res.data, option3)
      chart3Ref.value && chart3Ref.value.setOption(option3.value)
    }
  })

  getAnaylsis(projectId, analysisTypeEnum.T_OVERVIEW_ES).then(res => {
    if (res.state == 200) {
      // console.log(res.data)
      let xAxisData = res.data.map(_ => _.projectTaskName)
      let avgScore = res.data.map(_ => _.avgScore)
      let maxScore = res.data.map(_ => _.maxScore)
      let minScore = res.data.map(_ => _.minScore)

      option4.value.xAxis.data = xAxisData
      option4.value.series[0].data = avgScore
      option4.value.series[1].data = maxScore
      option4.value.series[2].data = minScore
      chart4Ref.value && chart4Ref.value.setOption(option4.value)
    }
  })

  getAnaylsis(projectId, analysisTypeEnum.T_OVERVIEW_CWLS).then(res => {
    if (res.state == 200) {
      let semester = res.data.semester
      let lastSemester = res.data.lastSemester
      let xAxisData = semester.map(_ => _.label)
      let semesterData = semester.map(_ => _.value)
      let lastSemesterData = lastSemester.map(_ => _.value)
      let legendData = lastSemesterData.length > 0 ? ['本学期', '上学期'] : ['本学期']
      let seriesData = []
      seriesData.push({
        name: '本学期',
        type: 'bar',
        barWidth: '30px',
        data: semesterData
      })
      if (lastSemesterData.length > 0) {
        seriesData.push({
          name: '上学期',
          type: 'bar',
          barWidth: '30px',
          data: lastSemesterData
        })
      }
      option5.value.legend.data = legendData
      option5.value.xAxis.data = xAxisData
      option5.value.series = seriesData
      chart5Ref.value && chart5Ref.value.setOption(option5.value)
    }
  })
}

</script>

<style scoped></style>