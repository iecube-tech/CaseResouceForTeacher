<template>
  <!-- 关键指标卡片 -->
  <div class="mt-6 space-y-6 fade-in">

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div class="bg-white rounded-lg shadow p-4 hover-card">
        <div class="flex justify-between">
          <div>
            <p class="text-sm font-medium text-gray-500">课程平均分</p>
            <p class="text-2xl font-bold text-gray-900 mt-1">83.6</p>
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
            <p class="text-2xl font-bold text-gray-900 mt-1">3/6</p>
          </div>
          <div class="h-12 w-12 rounded-md bg-green-100 flex items-center justify-center">
            <font-awesome-icon icon="fas fa-tasks" class="text-green-600 text-xl" />
          </div>
        </div>
        <div class="mt-4">
          <div class="flex items-center">
            <font-awesome-icon icon="fas fa-check-circle" class="text-green-500 mr-1" />
            <span class="text-xs text-green-500">进度正常</span>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-lg shadow p-4 hover-card">
        <div class="flex justify-between">
          <div>
            <p class="text-sm font-medium text-gray-500">学生总数</p>
            <p class="text-2xl font-bold text-gray-900 mt-1">62 人</p>
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
            <p class="text-2xl font-bold text-gray-900 mt-1">3428 次</p>
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
        <v-chart ref="chart2Ref" class="chart-container" :option="option2"></v-chart>
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
      <h3 class="text-lg font-medium text-gray-900 mb-4">与上学期对比分析（若无对比数据则不显示上学期数据）</h3>
      <v-chart ref="chart5Ref" class="chart-container" :option="option5"></v-chart>
    </div>

    <!-- AI辅助教学分析 -->
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
      <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-4">AI辅助教学分析</h3>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <div class="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg h-full">
            <h4 class="text-md font-medium text-gray-800 dark:text-gray-200 mb-3">AI互动数据</h4>
            <div class="space-y-4">
              <div>
                <div class="flex justify-between mb-1">
                  <span class="text-sm font-medium text-gray-700 dark:text-gray-300">学生使用率</span>
                  <span class="text-sm font-medium text-green-600 dark:text-green-400">85%</span>
                </div>
                <div class="w-full bg-white dark:bg-gray-600 rounded-full h-2.5">
                  <div class="bg-green-500 h-2.5 rounded-full" style="width: 85%"></div>
                </div>
              </div>

              <div>
                <div class="flex justify-between mb-1">
                  <span class="text-sm font-medium text-gray-700 dark:text-gray-300">平均互动频次</span>
                  <span class="text-sm font-medium text-gray-600 dark:text-gray-400">4.2次/学生</span>
                </div>
                <div class="w-full bg-white dark:bg-gray-600 rounded-full h-2.5">
                  <div class="bg-blue-500 h-2.5 rounded-full" style="width: 70%"></div>
                </div>
              </div>

              <div class="mt-4">
                <h5 class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">总互动次数</h5>
                <p class="text-3xl font-bold text-primary-600 dark:text-primary-400">3,428</p>
                <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  较上学期增长42.3%
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="md:col-span-2">
          <div class="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
            <h4 class="text-md font-medium text-gray-800 dark:text-gray-200 mb-3">
              AI互动主题分析（似乎只能通过AI来分析，需要考虑实现难度，但这个数据确实有意义）</h4>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">

              <v-chart ref="chart6Ref" class="chart-container" :option="option6"></v-chart>

              <div class="space-y-4">
                <div class="bg-white dark:bg-gray-800 p-3 rounded-lg">
                  <h5 class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">热门问题分析</h5>
                  <ul class="space-y-1 text-xs text-gray-600 dark:text-gray-400">
                    <li>1. 电路连接问题 (35%) - 主要集中在特征频率测量电路的连接</li>
                    <li>2. 测量方法咨询 (28%) - 关于正确测量BJT特征频率的步骤</li>
                    <li>3. 数据分析与计算 (22%) - 特征频率计算和误差分析方法</li>
                    <li>4. 理论概念解释 (15%) - 高频模型和频率响应原理</li>
                  </ul>
                </div>

                <div class="bg-white dark:bg-gray-800 p-3 rounded-lg">
                  <h5 class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">教学改进方向</h5>
                  <ul class="space-y-1 text-xs text-gray-600 dark:text-gray-400">
                    <li>• 完善实验指导书中的电路连接说明，增加图解步骤</li>
                    <li>• 增强对高频模型的理论讲解，加强与实验的联系</li>
                    <li>• 优化AI助手的回答模板，针对热门问题提供更详细的解答</li>
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
import VChart from "vue-echarts";
import { color } from '@/apis/color'

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
      data: [60, 80, 75, 55]
    },
  ]
}

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
    trigger: 'axis',
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
      { name: '课程目标1', max: 100 },
      { name: '课程目标2', max: 100 },
      { name: '课程目标3', max: 100 },
      { name: '课程目标4', max: 100 },
      { name: '课程目标5', max: 100 },
      { name: '课程目标6', max: 100 }
    ],
    axisName: {
      fontSize: 12 // Increase font size of indicator names
    },
    splitNumber: 5
  },
  series: [
    {
      type: 'radar',
      data: [
        {
          value: [
            28, 19, 28, 50, 28, 10
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
            11, 22, 33, 55, 66, 100
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
            55, 66, 77, 22, 33, 44
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
    data: ['实验一', '实验二', '实验三',]
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      name: '平均分',
      data: [82, 93, 86],
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
      data: [95, 96, 97],
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
      data: [60, 75, 80],
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
    data: ['本学期', '上学期'],
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
    {
      name: '本学期',
      type: 'bar',
      // barWidth: '30%',
      data: [60, 80, 75, 55, 34]
    },
    {
      name: '上学期',
      type: 'bar',
      // barWidth: '30%',
      data: [24, 24, 24, 24, 24]
    },
  ]
}


const option6 = ref(null)
option6.value = {
  tooltip: {
    trigger: 'item'
  },
  legend: {
    orient: 'horizontal',
    top: 0
  },
  color: color,
  series: [
    {
      name: 'AI 分析',
      type: 'pie',
      radius: '60%',
      data: [
        { value: 1048, name: '电路连接问题' },
        { value: 735, name: '测量方法咨询' },
        { value: 580, name: '数据分析与计算' },
        { value: 484, name: '理论概念解释' },
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

</script>

<style scoped>
.chart-container {
  position: relative;
  height: 300px;
  width: 100%;
  box-sizing: border-box;
}
</style>