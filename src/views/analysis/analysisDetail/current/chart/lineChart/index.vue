<template>
    <div style="display: flex; flex-direction: column;">
        <div><span>各实验的学生成绩及格率曲线</span></div>
        <div id="line" style="min-height: 400px; width: 100%;"></div>
    </div>
    <el-divider />
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref, watch } from 'vue';
import * as echarts from 'echarts';

interface taskGradeList {
    taskNum: Number
    gradeList: Array<number>
}

const props = defineProps({
    gradeList: Array<taskGradeList>,
    passGrade: Number
})

const gradeList = ref([])
const passGrade = ref(60)

const line = {
    xAxis: {
        type: 'category',
        data: []
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            formatter: '{value} %'
        }
    },
    tooltip: {},
    series: [
        {
            data: [],
            type: 'line'
        }
    ]
};

const lineDate = () => {
    if (gradeList.value.length > 0) {
        line.xAxis.data = []
        line.series[0].data = []
        for (let i = 0; i < gradeList.value.length; i++) {
            let passNum = 0
            for (let j = 0; j < gradeList.value[i].gradeList.length; j++) {
                if (gradeList.value[i].gradeList[j] >= passGrade.value) {
                    passNum += 1
                }
            }
            line.xAxis.data.push('实验 ' + gradeList.value[i].taskNum)
            line.series[0].data.push((passNum / gradeList.value[i].gradeList.length) * 100)
        }
    }
}

let lineChart = null

function destoryEchart() {
    if (lineChart) {
        lineChart.dispose()
        lineChart = null
    }
}

function initMychart() {
    lineChart = echarts.init(document.getElementById('line'))

    lineChart.setOption(line)

    window.addEventListener('resize', function () {
        lineChart.resize()
    })
    window.addEventListener('popstate', function () {
        destoryEchart()
    })
}

const frashLine = () => {
    gradeList.value = props.gradeList
    passGrade.value = props.passGrade
    lineDate()
    lineChart.setOption(line)
}

defineExpose({
    frashLine,
})

onMounted(() => {
    gradeList.value = props.gradeList
    passGrade.value = props.passGrade
    lineDate()
    destoryEchart();
    initMychart();

})

onUnmounted(() => {
    destoryEchart();
})

</script>
<style scoped></style>