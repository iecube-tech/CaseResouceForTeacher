<template>
  <!-- 关键指标卡片 -->
  <div class="mt-6 space-y-6 fade-in">

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div class="bg-white rounded-lg shadow p-4 hover-card">
        <div class="flex justify-between">
          <div>
            <p class="text-sm font-medium text-gray-500">课程平均分</p>
            <p class="text-2xl font-bold text-gray-900 mt-1">{{ overviewData.avgGrade }}</p>
          </div>
          <div class="h-12 w-12 rounded-md bg-blue-100 flex items-center justify-center">
            <font-awesome-icon icon="fas fa-chart-line" class="text-blue-600 text-xl"></font-awesome-icon>
          </div>
        </div>
        <div class="mt-4">
          <div class="flex items-center">
            <font-awesome-icon icon="fas fa-arrow-up" class="text-green-500 mr-1" />
            <span class="text-xs text-green-500">3.2%</span>
            <span class="text-xs text-gray-500 ml-1">vs 上学期（前端实现时考虑有对比则显示，无对比数据则不显示）</span>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-lg shadow p-4 hover-card">
        <div class="flex justify-between">
          <div>
            <p class="text-sm font-medium text-gray-500">实验完成情况</p>
            <p class="text-2xl font-bold text-gray-900 mt-1">
              {{ overviewData.rateOfCourse.done }}/{{ overviewData.rateOfCourse.total }}</p>
          </div>
          <div class="h-12 w-12 rounded-md bg-green-100 flex items-center justify-center">
            <font-awesome-icon icon="fas fa-tasks" class="text-green-600 text-xl" />
          </div>
        </div>
        <div class="mt-4">
          <div v-if="overviewData.rateOfCourse.done < overviewData.rateOfCourse.total" class="flex items-center">
            <font-awesome-icon icon="fas fa-exclamation-circle" class="text-red-500 mr-1" />
            <span class="text-xs text-red-500">未完成</span>
          </div>
          <div v-else class="flex items-center">
            <font-awesome-icon icon="fas fa-check-circle" class="text-green-500 mr-1" />
            <span class="text-xs text-green-500">进度正常</span>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-lg shadow p-4 hover-card">
        <div class="flex justify-between">
          <div>
            <p class="text-sm font-medium text-gray-500">学生总数</p>
            <p class="text-2xl font-bold text-gray-900 mt-1">{{ overviewData.stuNum }} 人</p>
          </div>
          <div class="h-12 w-12 rounded-md bg-purple-100 flex items-center justify-center">
            <font-awesome-icon icon="fas fa-users" class="text-purple-600 text-xl" />
          </div>
        </div>
        <div class="mt-4">
          <div class="flex items-center">
            <font-awesome-icon icon="fas fa-arrow-up" class="text-green-500 mr-1" />
            <span class="text-xs text-green-500">8.1%</span>
            <span class="text-xs text-gray-500 ml-1">vs 上学期</span>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-lg shadow p-4 hover-card">
        <div class="flex justify-between">
          <div>
            <p class="text-sm font-medium text-gray-500">AI互动总量</p>
            <p class="text-2xl font-bold text-gray-900 mt-1">{{ overviewData.aiUsedNum }} 次</p>
          </div>
          <div class="h-12 w-12 rounded-md bg-indigo-100 flex items-center justify-center">
            <font-awesome-icon icon="fas fa-robot" class="text-indigo-600 text-xl" />
          </div>
        </div>
        <div class="mt-4">
          <div class="flex items-center">
            <font-awesome-icon icon="fas fa-arrow-up" class="text-green-500 mr-1" />
            <span class="text-xs text-green-500">5.2%</span>
            <span class="text-xs text-gray-500 ml-1">vs 上学期</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 课程进度 -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- 课程完成进度 -->
      <div class="bg-white rounded-lg shadow p-4 hover-card">
        <h3 class="text-lg font-medium text-gray-900 mb-4">课程进度概览</h3>
        <v-chart ref="chart1Ref" class="chart-container" :option="option1"></v-chart>
      </div>

      <!-- 能力达成情况 -->
      <div class="bg-white rounded-lg shadow p-4 hover-card">
        <h3 class="text-lg font-medium text-gray-900 mb-4">课程目标达成分析</h3>
        <v-chart v-if="option2Show" ref="chart2Ref" class="chart-container" :option="option2"></v-chart>
        <div v-else class="chart-container"></div>
      </div>
    </div>

    <!-- 班级成绩分析 -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <!-- 成绩分布 -->
      <div class="bg-white  rounded-lg shadow p-4 hover-card">
        <h3 class="text-lg font-medium text-gray-900 mb-4">班级成绩分布</h3>
        <v-chart ref="chart3Ref" class="chart-container" :option="option3"></v-chart>
      </div>

      <!-- 各实验得分情况 -->
      <div class="bg-white rounded-lg shadow p-4 hover-card md:col-span-2">
        <h3 class="text-lg font-medium text-gray-900 mb-4">实验得分情况</h3>
        <v-chart ref="chart4Ref" class="chart-container" :option="option4"></v-chart>
      </div>
    </div>

    <!-- 上一学期对比 -->
    <div class="bg-white rounded-lg shadow p-4">
      <h3 class="text-lg font-medium text-gray-900 mb-4">与上学期对比分析</h3>
      <v-chart ref="chart5Ref" class="chart-container" :option="option5"></v-chart>
    </div>

    <!-- AI辅助教学分析 -->
    <div class="bg-white  rounded-lg shadow p-4">
      <h3 class="text-lg font-medium text-gray-900  mb-4">AI辅助教学分析</h3>

      <div class="grid grid-cols-3 gap-4 mb-4">
        <div class="col-span-1">
          <div class="bg-gray-50  p-4 rounded-lg h-full">
            <h4 class="text-md font-medium text-gray-800  mb-3">AI互动数据</h4>
            <div class="space-y-4">
              <div>
                <div class="flex justify-between mb-1">
                  <span class="text-sm font-medium text-gray-700 ">学生使用率</span>
                  <span class="text-sm font-medium text-green-600 ">{{ aiAsistAnalysis.data.rageOfUsed }}%</span>
                </div>
                <div class="w-full bg-white  rounded-full h-2.5">
                  <div class="bg-green-500 h-2.5 rounded-full" :style="`width: ${aiAsistAnalysis.data.rageOfUsed}%`">
                  </div>
                </div>
              </div>

              <div class="flex justify-between">
                <div class="mt-4">
                  <h5 class="text-sm font-medium text-gray-700  mb-2">平均互动频次</h5>
                  <span class="text-3xl font-bold text-primary-600 mr-1">
                    {{ new Intl.NumberFormat().format(aiAsistAnalysis.data.frequency) }}</span>
                  <span class="text-xs text-gray-500 mt-1">次/学生</span>
                </div>

                <div class="mt-4">
                  <h5 class="text-sm font-medium text-gray-700  mb-2">总互动次数</h5>
                  <p class="text-3xl font-bold text-primary-600 ">
                    {{ new Intl.NumberFormat().format(aiAsistAnalysis.data.totalUsed) }}</p>
                  <p class="text-xs text-gray-500  mt-1">
                    较上学期增长42.3%
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div class="col-span-2 bg-gray-50 p-4 rounded-lg">
          <h4 class="text-md font-medium text-gray-800  mb-3">
            AI互动主题分析</h4>
          <div class="grid grid-cols-1">
            <v-chart ref="chart6Ref" class="chart-container" :option="option6"></v-chart>
          </div>
        </div>
      </div>
      
      <div>
        <div class="bg-gray-50 rounded-lg p-4">
          <h5 class="text-md font-medium text-gray-800  mb-3">
            <font-awesome-icon icon="fas fa-fire" class="text-red-500 mr-1" />
            热门问题分析</h5>
          <ul class="space-y-2 text-sm text-gray-700">
            <li v-for="(item, i) in aiAsistAnalysis.thematic.difficulty_analysis" :key="i">
              <p :title="item">
                <span class="inline-block w-[10px] h-[10px] bg-blue-500 mr-2 rounded-full"></span><span>{{ item }}</span>
              </p>
            </li>
          </ul>
        </div>

        <!-- <div class="bg-green-50 rounded-lg p-4">
          <h5 class="text-md font-medium text-gray-800  mb-3">教学改进方向</h5>
          <ul class="space-y-2 text-sm text-gray-700">
            <li v-for="(item, i) in aiAsistAnalysis.thematic.improvement_suggestions" :key="i">
              <p :title="item">
                {{ item }}
              </p>
            </li>
          </ul>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script setup>
import VChart from "vue-echarts";
import { color } from '@/apis/color'

import { getAnaylsis, analysisTypeEnum, handleScoreOption } from "@/apis/embV4/analysis"
import { formatter } from "element-plus";

const route = useRoute()
const projectId = route.params.projectId

const overviewData = ref({
  aiUsedNum: 0,
  avgGrade: 0,
  rateOfCourse: { done: 0, total: 0 },
  stuNum: 0,
})

const aiAsistAnalysis = ref({
  data: {
    frequency: 0,
    rageOfUsed: 0,
    totalUsed: 0
  },
  thematic: {
    chart_data: [],
    difficulty_analysis: '',
    improvement_suggestions: '',
  }
})

const props = defineProps({
  name: String
})

const chart1Ref = ref(null)
const chart2Ref = ref(null)
const chart3Ref = ref(null)
const chart4Ref = ref(null)
const chart5Ref = ref(null)
const chart6Ref = ref(null)

watchEffect(() => {
  if (props.name === 'courseOverview') {
    setTimeout(_ => {
      chart1Ref.value && chart1Ref.value.resize()
      chart2Ref.value && chart2Ref.value.resize()
      chart3Ref.value && chart3Ref.value.resize()
      chart4Ref.value && chart4Ref.value.resize()
      chart5Ref.value && chart5Ref.value.resize()
      chart6Ref.value && chart6Ref.value.resize()
    }, 200)
  }
})


// 课程进度概览
const option1 = ref()
option1.value = {
  title: {
    show: false,
  },
  grid: {
    top: 0,
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

  color: ['#38B1E8'],
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
          dimensionName = option2.value.radar.indicator[i].name;
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
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    },
    formatter: '{b} 学生人数: {c}'
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
          value: 0,
          itemStyle: { color: '#32C96A' } // Green for 90-100
        },
        {
          value: 0,
          itemStyle: { color: '#609DFE' } // Light green for 80-90
        },
        {
          value: 0,
          itemStyle: { color: '#F8954E' } // Yellow for 70-80
        },
        {
          value: 0,
          itemStyle: { color: '#F0CA52' } // Orange for 60-70
        },
        {
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


const option6 = ref(null)
option6.value = {
  tooltip: {
    trigger: 'item',
    formatter: '{b}: {c}%',
  },
  grid: {
    top: '25%',
  },
  legend: {
    // type: 'scroll',
    top: 0,
  },
  color: color,
  series: [
    {
      name: 'AI 分析',
      type: 'pie',
      radius: '60%',
      data: [
        // { value: 1048, name: '电路连接问题' },
        // { value: 735, name: '测量方法咨询' },
        // { value: 580, name: '数据分析与计算' },
        // { value: 484, name: '理论概念解释' },
      ],
      label: {
        show: false,
        formatter: '{b}: {d}%', // Display name and percentage
        fontSize: 12
      },
      labelLine: {
        show: false
      },
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        },
        label: {
          show: false,
          fontSize: 14,
          fontWeight: 'bold'
        }
      }
    }
  ]
};

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
      // chart1Ref.value && chart1Ref.value.setOption(option1.value)
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
      // chart2Ref.value && chart2Ref.value.setOption(option2.value)
    }
    // 
  })

  getAnaylsis(projectId, analysisTypeEnum.T_OVERVIEW_DOCG).then(res => {
    if (res.state == 200) {
      option3.value = handleScoreOption(res.data, option3)
      // chart3Ref.value && chart3Ref.value.setOption(option3.value)
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
      // chart4Ref.value && chart4Ref.value.setOption(option4.value)
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
        barWidth: '30%',
        data: semesterData
      })
      if (lastSemesterData.length > 0) {
        seriesData.push({
          name: '上学期',
          type: 'bar',
          barWidth: '30%',
          data: lastSemesterData
        })
      }
      option5.value.legend.data = legendData
      option5.value.xAxis.data = xAxisData
      option5.value.series = seriesData
      // chart5Ref.value && chart5Ref.value.setOption(option5.value)
    }
  })

  // 概览ai 统计
  getAnaylsis(projectId, analysisTypeEnum.T_OVERVIEW_AI_VIEW).then(res => {
    if (res.state == 200) {
      // console.log(res.data)
      aiAsistAnalysis.value = res.data

      let chart_data = res.data.thematic.chart_data

      chart_data.forEach(item => {
        item.name = item.label
        if (item.value.includes('%')) {
          item.value = Number(item.value.slice(0, -1))
        } else {
          item.value = Number(item.value)
        }
      })

      option6.value.series[0].data = chart_data

      let difficulty_analysis = []
      difficulty_analysis = res.data.thematic.difficulty_analysis.split('\n')
      aiAsistAnalysis.value.thematic.difficulty_analysis = difficulty_analysis
      let improvement_suggestions = []
      improvement_suggestions = res.data.thematic.improvement_suggestions.split('\n')
      aiAsistAnalysis.value.thematic.improvement_suggestions = improvement_suggestions
    }
  })

}

</script>

<style scoped>
.chart-container {
  position: relative;
  height: 300px;
  width: 100%;
  box-sizing: border-box;
}
</style>