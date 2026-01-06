<template>
    <div v-show="teacherTab === 'processAnalysis'" class="mt-6 space-y-6 fade-in">
        <!-- Student Experiment Stage Average Time -->
        <div class="bg-white rounded-lg shadow p-4 hover-card">
            <h3 class="text-lg font-medium text-gray-900 mb-4">学生实验各阶段平均耗时</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <!-- Stage Duration Chart -->
                <div class="chart-container">
                    <v-chart ref="chart1Ref" :option="option1" style="height: 300px; width: 100%" autoresize />
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
                    <v-chart v-if="chart2Show" ref="chart2Ref" :option="option2" style="height: 300px; width: 100%"
                        autoresize />
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

            <div class="bg-gray-50 p-4 rounded-lg">
                <h4 class="font-medium text-gray-800 mb-3">关键操作成功率分析</h4>
                <el-table :data="tableData">
                    <el-table-column label="关键操作" prop="operate">
                        <template #default="{row, $index}">
                            <div class="flex items-center space-x-2">
                                <div class="w-[20px] h-[20px] leading-[20px] rounded-full bg-blue-500 text-white flex justify-center items-center">{{ $index + 1 }}</div>
                                <span> {{ row.operate }}</span>
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column label="尝试次数" prop="tryTime" width="120px">
                        <template #default="{row}">
                            <my-tag :text="`${row.tryTime} 次`" color="blue" class="rounded-full"></my-tag>
                        </template>
                    </el-table-column>
                    <el-table-column label="各次成功率" prop="trySuccess">
                        <template #default="{row}">
                            <div class="flex items-center space-x-2">
                                <my-tag v-for="(item, i) in row.trySuccess" :key="i" :text="`${item * 100}%`" :color="tagColors(item * 100)" class="rounded-md"></my-tag>
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column label="最终成功率" prop="finalSuccess" width="120px">
                        <template #default="{row}">
                            <my-tag :text="`${row.finalSuccess * 100}%`" :color="tagColors(row.finalSuccess * 100)" class="rounded-md"></my-tag>
                        </template>
                    </el-table-column>
                </el-table>
            </div>

                

            <div class="mt-6 bg-gray-50 p-4 rounded-lg">
                <h4 class="font-medium text-gray-800 mb-3">AI辅助交互分析</h4>
                <div class="grid grid-cols-1">
                    <div>
                        <h5 class="text-sm font-medium text-gray-700 mb-2">最常见的问题类型占比</h5>
                        <div class="h-48">
                            <v-chart ref="chart5Ref" :option="option5" style="height: 192px; width: 100%" autoresize />
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
    grid: {
        top: 0,
        bottom: 0,
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
        radius: ['40%', '80%'],
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
    grid: {
        top: 0,
        bottom: '15%',
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
        bottom: 0,
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
    grid: {
        top: 0,
        bottom: '15%',
    },
    legend: {
        orient: 'horizontal',
        bottom: 0,
    },
    color,
    series: [{
        type: 'pie',
        radius: '70%',
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



const option5 = ref({
    tooltip: {
        trigger: 'item',
        formatter: '{b}: {c}%'
    },
    grid: {
        top: '15%',
        bottom: 0,
    },
    legend: {
        show: true,
        top: '0',
    },
    yAxis: {
        type: 'category',
        data: [], // ['电路连接', '测量方法', '数据分析', '理论概念']
        inverse: true,
    },
    xAxis: {
        type: 'value',
        axisLabel: {
            formatter: '{value}%',
        }
    },
    series: [
    ]
})

const tagColors = function(precent){
    if (precent >= 80) {
        return 'green'
    } else if (precent >= 70) {
        return 'yellow'
    } else {
        return 'red'
    }
}

const tableData = ref([
    {operate: '静态工作点设置', tryTime: 5, trySuccess: [0.6, 0.7, 0.75, 0.85, 0.9], finalSuccess: 0.9},
    {operate: '特征频率测量', tryTime: 4, trySuccess: [0.5, 0.65, 0.75, 0.8], finalSuccess: 0.8},
    {operate: '交流特性测量', tryTime: 3, trySuccess: [0.4, 0.6, 0.75], finalSuccess: 0.75},
    {operate: '电路连接', tryTime: 5, trySuccess: [0.7, 0.75, 0.8, 0.85, 0.9], finalSuccess: 0.9},
    {operate: '参数设置', tryTime: 2, trySuccess: [0.5, 0.7], finalSuccess: 0.7}
])


watchEffect(() => {
    if (props.name === 'taskProcess') {
        setTimeout(_ => {
            chart1Ref.value && chart1Ref.value.resize()
            chart2Ref.value && chart2Ref.value.resize()
            chart3Ref.value && chart3Ref.value.resize()

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
function setAiAnalysis(list) {
    let yData = list.map(_ => _.category)

    let series = list.map((_, index) => {
        let data = new Array(yData.length).fill(0)
        data[index] = _.count
        return {
            name: _.category,  // Required for legend
            type: 'bar',
            // barWidth: '20px',
            data,
            stack: 'total',
            itemStyle: {
                color: function (params){
                    let colors = ['#5470c6', '#91cc75', '#fac858', '#ee6666', '#73c0de', '#3ba272', '#fc8452', '#9a60b4', '#ea7ccc']
                    return colors[ params.dataIndex % colors.length]
                }
            },
        }
    })
    option5.value.yAxis.data = yData
    option5.value.series = series
}
</script>

<style scoped>
.chart-container {
    position: relative;
}
</style>