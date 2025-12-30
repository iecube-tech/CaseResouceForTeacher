<template>
    <div v-show="teacherTab === 'processAnalysis'" class="mt-6 space-y-6 fade-in">
        <!-- Student Experiment Stage Average Time -->
        <div class="bg-white rounded-lg shadow p-4 hover-card">
            <h3 class="text-lg font-medium text-gray-900 mb-4">学生实验各阶段平均耗时</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <!-- Stage Duration Chart -->
                <div class="chart-container">
                    <v-chart ref="chart1Ref" :option="option1" style="height: 240px; width: 100%" autoresize />
                </div>

                <!-- Stage Statistics -->

                <div class="bg-gray-50 p-4 rounded-lg flex flex-col">
                    <h4 class="text-sm font-medium text-gray-700 mb-3">各阶段详细统计</h4>
                    <div class="flex-1 flex flex-col justify-around">
                        <div v-for="(stage, k) in stageTimeList" :key="k" class="flex items-center justify-between">
                            <div class="flex items-center">
                                <div class="w-3 h-3  rounded-full mr-3"
                                    :class="k == 0 ? 'bg-blue-500' : k == 1 ? 'bg-green-500' : 'bg-orange-500'"></div>
                                <span class="text-sm text-gray-600">{{ stage.name }}</span>
                            </div>
                            <div class="text-right">
                                <div class="text-sm font-medium text-gray-900">{{ stage.avgTime }}分钟</div>
                                <div class="text-xs text-gray-500">最快{{ stage.minTime }}分钟，最慢{{ stage.maxTime }}分钟</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Process Stage Statistics -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="bg-white rounded-lg shadow p-4 hover-card">
                <h3 class="text-lg font-medium text-gray-900 mb-4">学生实验操作阶段时长分布</h3>
                <div class="chart-container">
                    <v-chart v-if="chart2Show" ref="chart2Ref" :option="option2" style="height: 300px; width: 100%" autoresize />
                </div>
            </div>

            <div class="bg-white rounded-lg shadow p-4 hover-card">
                <h3 class="text-lg font-medium text-gray-900 mb-4">实验操作各环节平均耗时</h3>
                <div class="chart-container">
                    <v-chart ref="chart3Ref" :option="option3" style="height: 300px; width: 100%" autoresize />
                </div>
            </div>
        </div>

        <!-- Operation Behavior Analysis -->
        <div class="bg-white rounded-lg shadow p-4">
            <h3 class="text-lg font-medium text-gray-900 mb-4">学生操作行为分析</h3>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="bg-gray-50 p-4 rounded-lg">
                    <h4 class="font-medium text-gray-800 mb-3">关键操作成功率</h4>
                    <div class="space-y-4">
                        <div>
                            <div class="flex justify-between mb-1">
                                <span class="text-sm font-medium text-gray-700">静态工作点设置电路连接</span>
                                <span class="text-sm font-medium text-green-600">88%</span>
                            </div>
                            <div class="w-full bg-gray-200 rounded-full h-2.5">
                                <div class="bg-green-500 h-2.5 rounded-full" style="width: 88%"></div>
                            </div>
                        </div>

                        <div>
                            <div class="flex justify-between mb-1">
                                <span class="text-sm font-medium text-gray-700">静态工作点设置</span>
                                <span class="text-sm font-medium text-yellow-600">70%</span>
                            </div>
                            <div class="w-full bg-gray-200 rounded-full h-2.5">
                                <div class="bg-yellow-500 h-2.5 rounded-full" style="width: 70%"></div>
                            </div>
                        </div>

                        <div>
                            <div class="flex justify-between mb-1">
                                <span class="text-sm font-medium text-gray-700">特征频率测量电路连接</span>
                                <span class="text-sm font-medium text-green-600">80%</span>
                            </div>
                            <div class="w-full bg-gray-200 rounded-full h-2.5">
                                <div class="bg-green-500 h-2.5 rounded-full" style="width: 80%"></div>
                            </div>
                        </div>

                        <div>
                            <div class="flex justify-between mb-1">
                                <span class="text-sm font-medium text-gray-700">交流特性测量</span>
                                <span class="text-sm font-medium text-yellow-600">65%</span>
                            </div>
                            <div class="w-full bg-gray-200 rounded-full h-2.5">
                                <div class="bg-yellow-500 h-2.5 rounded-full" style="width: 65%"></div>
                            </div>
                        </div>

                        <div>
                            <div class="flex justify-between mb-1">
                                <span class="text-sm font-medium text-gray-700">特征频率计算</span>
                                <span class="text-sm font-medium text-green-600">82%</span>
                            </div>
                            <div class="w-full bg-gray-200 rounded-full h-2.5">
                                <div class="bg-green-500 h-2.5 rounded-full" style="width: 82%"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="bg-gray-50 p-4 rounded-lg">
                    <h4 class="font-medium text-gray-800 mb-3">错误操作分布</h4>
                    <div class="h-64">
                        <v-chart ref="chart4Ref" :option="option4" style="height: 256px; width: 100%" autoresize />
                    </div>
                </div>
            </div>

            <div class="mt-6 bg-gray-50 p-4 rounded-lg">
                <h4 class="font-medium text-gray-800 mb-3">AI辅助交互分析</h4>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <h5 class="text-sm font-medium text-gray-700 mb-2">最常见的问题类型</h5>
                        <div class="h-48">
                            <v-chart ref="chart5Ref" :option="option5" style="height: 192px; width: 100%" autoresize />
                        </div>
                    </div>

                    <div class="space-y-3">
                        <div>
                            <h5 class="text-sm font-medium text-gray-700 mb-2">主题分布  [暂无ai数据]</h5>
                            <ul class="text-sm text-gray-600 space-y-1">
                                <li class="flex justify-between">
                                    <span>电路连接问题</span>
                                    <span class="font-medium">35%</span>
                                </li>
                                <li class="flex justify-between">
                                    <span>测量方法咨询</span>
                                    <span class="font-medium">28%</span>
                                </li>
                                <li class="flex justify-between">
                                    <span>数据分析与计算</span>
                                    <span class="font-medium">22%</span>
                                </li>
                                <li class="flex justify-between">
                                    <span>理论概念解释</span>
                                    <span class="font-medium">15%</span>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h5 class="text-sm font-medium text-gray-700 mb-2">交互统计  [暂无ai数据]</h5>
                            <ul class="text-sm text-gray-600 space-y-1">
                                <li class="flex justify-between">
                                    <span>平均交互次数/学生</span>
                                    <span class="font-medium">4.2次</span>
                                </li>
                                <li class="flex justify-between">
                                    <span>高频交互学生比例</span>
                                    <span class="font-medium">25%</span>
                                </li>
                                <li class="flex justify-between">
                                    <span>未使用AI辅助学生比例</span>
                                    <span class="font-medium">15%</span>
                                </li>
                                <li class="flex justify-between">
                                    <span>AI辅助后问题解决率</span>
                                    <span class="font-medium">78%</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { color } from '@/apis/color'
import { taskAnalysisEnum, getTaskAnalysis } from '@/apis/embV4/analysis'
import textpreview from '@/components/textPreview.vue'
const route = useRoute()
const projectId = route.params.projectId
const taskId = route.params.taskId

const props = defineProps({
    name: String
})

// Props and ref data
const teacherTab = ref('processAnalysis')

// Chart refs
const chart1Ref = ref()
const chart2Show = ref(false)
const chart2Ref = ref()
const chart3Ref = ref()
const chart4Ref = ref()
const chart5Ref = ref()

// Chart options
const option1 = ref({
    // title: {
    //     text: '实验阶段时间分布',
    //     left: 'center'
    // },
    tooltip: {
        formatter: '{b}: 平均 {c} 分钟'
    },
    legend: {
        orient: 'vertical',
        left: 'left'
    },
    color,
    series: [{
        type: 'pie',
        label: {
            show: false,
        },
        labelLine: {
            show: false
        },
        radius: ['40%', '70%'],
        data: [
            // { name: '课前预习', value: 25 },
            // { name: '实验操作', value: 52 },
            // { name: '课后考核', value: 18 }
        ],
    }]
})

const option2 = ref({
    tooltip: {
        trigger: 'axis'
    },
    xAxis: {
        type: 'category',
        data: ['<45分钟', '45-80分钟', '>80分钟']
    },
    yAxis: {
        type: 'value',
        name: '学生人数'
    },
    legend: {
        show: true,
    },
    series: [{
        type: 'bar',
        data: [], //[25, 52, 18],
        name: '学生人数',
        itemStyle: {
            color: '#66C1EB'
        },
        barWidth: '40%'
    }]
})

const option3 = ref({
    tooltip: {
        trigger: 'item'
    },
    legend: {
        orient: 'horizontal',
        bottom: 'bottom'
    },
    color,
    series: [{
        type: 'pie',
        radius: '50%',
        label: {
            show: false,
        },
        labelLine: {
            show: false
        },
        data: [
            { value: 30, name: '静态工作点设置' },
            { value: 35, name: '特征频率测量' },
            { value: 25, name: '交流特性测量' }
        ],
        emphasis: {
            itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }
    }]
})

const option4 = ref({
    tooltip: {
        trigger: 'item'
    },
    legend: {
        top: '0'
    },
    color,
    series: [{
        type: 'pie',
        radius: ['20%', '70%'],
        roseType: 'radius',
        label: {
            show: false,
            position: 'outside'
        },
        labelLine: {
            show: true
        },
        data: [
            { value: 30, name: '电路连接错误' },
            { value: 25, name: '参数设置错误' },
            { value: 20, name: '测量方法错误' },
            { value: 15, name: '数据记录错误' },
            { value: 10, name: '其他错误' }
        ],
        emphasis: {
            itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }
    }]
})

const option5 = ref({
    tooltip: {
        trigger: 'axis',
        formatter: '{b}: {c}%'
    },
    grid: {
        top: 0,
        bottom: 0,
    },
    yAxis: {
        type: 'category',
        data:  [] // ['电路连接', '测量方法', '数据分析', '理论概念']
    },
    xAxis: {
        type: 'value',
        axisLabel: {
            formatter: '{value}%',
        }
    },
    series: [{
        data: [
            // {
            //     value: 35,
            //     itemStyle: { color: '#5470c6' }
            // },
            // {
            //     value: 28,
            //     itemStyle: { color: '#91cc75' }
            // },
            // {
            //     value: 22,
            //     itemStyle: { color: '#fac858' }
            // },
            // {
            //     value: 15,
            //     itemStyle: { color: '#ee6666' }
            // }
        ],
        type: 'bar'
    }]
})


watchEffect(() => {
    if (props.name === 'taskProcess') {
        setTimeout(_ => {
            chart1Ref.value && chart1Ref.value.resize()
            chart2Ref.value && chart2Ref.value.resize()
            chart3Ref.value && chart3Ref.value.resize()
            chart4Ref.value && chart4Ref.value.resize()
            chart5Ref.value && chart5Ref.value.resize()
        }, 400)
    }
})

onMounted(() => {
    setTimeout(_ => {
        updateChart()
    }, 300)
})

const stageTimeList = ref([])

function updateChart() {
    getTaskAnalysis(projectId, taskId, taskAnalysisEnum.TASK_D_COURSE).then(res => {
        if (res.state == 200) {
            // console.log(res.data)
            setStageTimeList(res.data.stageTime)
            setTimeDistributionStage(res.data.timeDistributionStage1)
            setAiAnalysis(res.data.aiAnalysis.question_stats)
        }
    })
}

// 学生实验各阶段平均耗时
function setStageTimeList(list) {
    list.forEach((_, index) => {
        let label = index == 0 ? '课前预习' : index == 1 ? '实验操作' : '课后考核'
        _.name = label
        _.value = +(_.avg / 1000 / 60).toFixed(1)
        _.maxTime = +(_.max / 1000 / 60).toFixed(1)
        _.minTime = +(_.min / 1000 / 60).toFixed(1)
        _.avgTime = +(_.avg / 1000 / 60).toFixed(1)
    })

    option1.value.series[0].data = list

    // chart1Ref.value && chart1Ref.value.setOption(option1.value)
    stageTimeList.value = list
}

// 学生实验操作阶段时长分布
function setTimeDistributionStage(list) {
    let data = [list[2]['<45'], list[0]['45-80'], list[1]['>80']]
    option2.value.series[0].data = data
    chart2Show.value = true
}

// 设置 option5
function setAiAnalysis(list){
    let yData = list.map(_ => _.category)
    let colors = ['#5470c6', '#91cc75', '#fac858', '#ee6666', '#73c0de', '#3ba272', '#fc8452', '#9a60b4', '#ea7ccc']
    
    let xData = list.map( (_,index) =>{
        return {
            value: _.count,
            itemStyle: {
                color: colors[index]
            }
        }
    })
    option5.value.yAxis.data = yData
    option5.value.series[0].data = xData
}
</script>

<style scoped>
.chart-container {
    position: relative;
}
</style>