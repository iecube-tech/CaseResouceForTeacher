<template>
    <div>
        <div style="display: flex; justify-content: space-between;">
            <span>学生成绩散点图</span>
            <div style="display:flex; flex-direction: row; align-items: center;">
                <div style="margin-right: 20px;">
                    <el-checkbox v-model="showAvg" label="平均值" @change="showAvgChange()" />
                </div>
                <div style="margin-right: 20px;">
                    <el-checkbox v-model="showExt" label="极值" @change="showExtChange()" />
                </div>
                <div>
                    <el-select v-model="whichGrade" placeholder="" size="small" @change="whichGradeChange()">
                        <el-option label="课程成绩" :value="0" />
                        <el-option v-for="i in data[0].studentTasks.length" :key="i"
                            :label="'实验 ' + data[0].studentTasks[i - 1].taskNum + ' 成绩'" :value="i"></el-option>
                    </el-select>
                </div>
            </div>
        </div>
        <div id="scatter" style="min-height: 400px;"></div>
    </div>
    <el-divider />
</template>

<script setup lang="ts">
import { ref, onBeforeMount, onMounted, onUnmounted } from 'vue';
import { ProjectDetail } from '@/apis/project/detail.js';
import * as echarts from 'echarts';

const props = defineProps({
    projectId: Number
})
const projectId = props.projectId

const showAvg = ref(true)
const showExt = ref(true)
const showAvgChange = () => {
    if (showAvg.value == false) {
        scatter.series[0].markLine = null
        scatterOptionChart.setOption(scatter)
    } else {
        scatter.series[0].markLine = scatterAverage
        scatterOptionChart.setOption(scatter)
    }
}
const showExtChange = () => {
    if (showExt.value == false) {
        scatter.series[0].markPoint = null
        scatterOptionChart.setOption(scatter)
    } else {
        scatter.series[0].markPoint = scatterExtremum
        scatterOptionChart.setOption(scatter)
    }
}
const whichGrade = ref(0)
const data = ref([{
    studentGrade: null,
    studentName: '',
    studentTasks: [{ taskNum: null, taskGrade: null }]
}])
const whichGradeChange = () => {
    if (whichGrade.value == 0) {
        scatterProjectData()
        scatterOptionChart.setOption(scatter)
    }
    else {
        scatterTaskDate()
        scatterOptionChart.setOption(scatter)
    }
}

const scatterProjectData = () => {
    scatter.xAxis.data = []
    scatter.series[0].data = []
    for (let i = 0; i < data.value.length; i++) {
        //学生成绩散点图数据
        scatter.xAxis.data.push(data.value[i].studentName)
        if (data.value[i].studentGrade) {
            scatter.series[0].data.push(data.value[i].studentGrade)
        } else {
            scatter.series[0].data.push(0)
        }
    }
}

const scatterTaskDate = () => {
    scatter.xAxis.data = []
    scatter.series[0].data = []

    for (let i = 0; i < data.value.length; i++) {
        //学生成绩散点图数据
        scatter.xAxis.data.push(data.value[i].studentName)
        if (data.value[i].studentTasks[whichGrade.value - 1].taskGrade) {
            scatter.series[0].data.push(data.value[i].studentTasks[whichGrade.value - 1].taskGrade)
        } else {
            scatter.series[0].data.push(0)
        }
    }
}

const scatterAverage = {
    lineStyle: {
        type: 'solid',
        color: '#3ba272',
    },
    label: {
        formatter: '{b}：{c}'
    },
    tooltip: {

    },
    symbol: 'none',
    data: [{
        name: '平均值',
        type: 'average',

    }]
}

const scatterExtremum = {
    data: [
        { type: 'max', name: '最高分' },
        { type: 'min', name: '最低分' }
    ]
}

const scatter = {
    xAxis: {
        show: false,
        data: []
    },
    yAxis: {},
    tooltip: {},
    series: [
        {
            markLine: scatterAverage,
            markPoint: scatterExtremum,
            symbolSize: 5,
            data: [],
            type: 'scatter',
            color: [
                '#73c0de',
                '#3ba272',
                '#fc8452',
                '#9a60b4',
                '#ea7ccc'
            ],

        }
    ]
}

let scatterOptionChart = null

function destoryEchart() {
    if (scatterOptionChart) {
        scatterOptionChart.dispose()
        scatterOptionChart = null
    }
}

function initMychart() {
    scatterOptionChart = echarts.init(document.getElementById('scatter'))

    scatterOptionChart.setOption(scatter)

    window.addEventListener('resize', function () {
        scatterOptionChart.resize()
    })
    window.addEventListener('popstate', function () {
        destoryEchart()
    })
}

onBeforeMount(() => {
    ProjectDetail(projectId).then(res => {
        if (res.state == 200) {
            data.value = res.data
            scatterProjectData()
        }
    })
})

onMounted(() => {
    destoryEchart();
    setTimeout(() => {
        initMychart();
    }, 1300);
})

onUnmounted(() => {
    destoryEchart();
})
</script>
<style scoped></style>