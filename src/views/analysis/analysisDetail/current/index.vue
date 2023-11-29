<template>
    <div class="current">
        <div>
            <div><span>项目当前状态</span></div>
            <el-descriptions :column="2" :border="true" :size="'large'" style="margin-top: 20px;">
                <el-descriptions-item label="学生人数" label-align="right" align="center" label-class-name="my-label"
                    class-name="my-content">
                    {{ projectData.numberOfParticipant }}
                </el-descriptions-item>

                <el-descriptions-item label="已完成学生人数" label-align="right" align="center" label-class-name="my-label">
                    <el-tag>{{ projectData.numberOfCompleter }}</el-tag>
                </el-descriptions-item>

                <el-descriptions-item label="项目课时" label-align="right" align="center" label-class-name="my-label">
                    {{ classHour.classHour }}
                </el-descriptions-item>

                <el-descriptions-item label="总课时" label-align="right" align="center" label-class-name="my-label">
                    {{ classHour.totalClassHour }}
                </el-descriptions-item>

                <el-descriptions-item label="已完成课时" label-align="right" align="center" label-class-name="my-label">
                    <template #default>
                        <br />
                        <el-tag>{{ classHour.completedClassHour }}</el-tag>
                        <br />
                        <span class="tips">已完成课时 = 所有学生已完成的课时之和</span>
                    </template>
                </el-descriptions-item>

                <el-descriptions-item label="项目进度" label-align="right" align="center" label-class-name="my-label">
                    <br />
                    <el-tag>{{ classHour.completedPercent }}%</el-tag>
                    <br />
                    <span class="tips">项目进度 = (所有学生已完成的课时之和 / 总课时) * 100%</span>
                </el-descriptions-item>
            </el-descriptions>
        </div>
        <el-divider style="margin-top: 30px;" />
        <div>
            <div><span>项目当前任务人数分布图</span></div>
            <div id="chartFour" style="min-height: 400px;"></div>
        </div>
        <el-divider />
        <div>
            <div><span>项目各任务成绩平均分数</span></div>
            <div id="chartFive" style="min-height: 400px;"></div>
        </div>
        <el-divider />
        <div>
            <div><span>项目各任务成绩中位数</span></div>
            <div id="chartSix" style="min-height: 400px;"></div>
        </div>
        <el-divider />
    </div>
</template>

<script setup lang="ts">
import * as echarts from 'echarts';
import { onBeforeMount, onMounted, onUnmounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { currentProjectData } from '@/apis/analysis/currentProject.js'
import { projectClassHour } from '@/apis/analysis/projectClassHour.js'

const route = useRoute()
const projectId = route.params.projectId

const projectData = ref({
    numberOfCompleter: null,
    numberOfParticipant: null,
    personnelDistributions: [{ taskNum: null, studentNum: null }],
    taskAverages: [{ taskNum: null, averageGrade: null }],
    taskMedians: [{ taskNum: null, medianGrade: null }],
    tagsCount: [{ item: null, count: null }],
})

const classHour = ref({
    classHour: null,
    totalClassHour: null,
    completedClassHour: null,
    completedPercent: null,
    redaOVerClassHour: null,
    redaOverPercent: null
})

const currentPersonnelDistributionsData = ref([])
const currentTaskAveragesX = ref([])
const currentTaskAveragesY = ref([])

const currentTaskMediansX = ref([])
const currentTaskMediansY = ref([])

onBeforeMount(() => {
    currentProjectData(projectId).then(res => {
        if (res.state == 200) {
            projectData.value = res.data
            for (let i = 0; i < projectData.value.personnelDistributions.length; i++) {
                currentPersonnelDistributionsData.value.push({ value: projectData.value.personnelDistributions[i].studentNum, name: '任务' + (i + 1) })
            }
            for (let i = 0; i < projectData.value.taskAverages.length; i++) {
                currentTaskAveragesX.value.push('任务' + projectData.value.taskAverages[i].taskNum)
                currentTaskAveragesY.value.push(projectData.value.taskAverages[i].averageGrade)
            }
            for (let i = 0; i < projectData.value.taskMedians.length; i++) {
                currentTaskMediansX.value.push('任务' + projectData.value.taskMedians[i].taskNum)
                currentTaskMediansY.value.push(projectData.value.taskMedians[i].medianGrade)
            }
        }
    })

    projectClassHour(projectId).then(res => {
        if (res.state == 200) {
            classHour.value = res.data
        }
    })
})

const optionFour = {
    title: {
        left: 'left'
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    series: [
        {
            name: '当前进行中的任务人数',
            type: 'pie',
            radius: ['40%', '70%'],
            data: currentPersonnelDistributionsData.value,
            label: {
                show: false,
                position: 'center'
            },
            center: ['50%', '50%'],
            emphasis: {
                label: {
                    show: true,
                    fontSize: 16,
                    fontWeight: 'bold'
                }
            },
        },

    ]
};

const optionFive = {
    xAxis: {
        type: 'category',
        data: currentTaskAveragesX.value,
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            data: currentTaskAveragesY.value,
            type: 'bar',
            itemStyle: {
                color: '#d6f1f1',
                borderRadius: [5, 5, 0, 0]
            },
            emphasis: {
                itemStyle: {
                    color: '#2acecf'
                }
            }
        }
    ],
    tooltip: {
        trigger: 'axis',
        formatter: '{b0}: {c0}分'
    },
};
const optionSix = {
    xAxis: {
        type: 'category',
        data: currentTaskMediansX.value,
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            data: currentTaskMediansY.value,
            type: 'bar',
            itemStyle: {
                color: '#d6f1f1',
                borderRadius: [5, 5, 0, 0]
            },
            emphasis: {
                itemStyle: {
                    color: '#2acecf'
                }
            }
        }
    ],
    tooltip: {
        trigger: 'axis',
        formatter: '{b0}: {c0}分'
    },
};

let chartFour = null
let chartFive = null
let chartSix = null
function destoryEchart() {
    if (chartFour) {
        chartFour.dispose()
        chartFour = null
    }
    if (chartFive) {
        chartFive.dispose()
        chartFive = null
    }
    if (chartSix) {
        chartSix.dispose()
        chartSix = null
    }
}
function initMychart() {
    chartFour = echarts.init(document.getElementById('chartFour'));
    chartFive = echarts.init(document.getElementById('chartFive'));
    chartSix = echarts.init(document.getElementById('chartSix'));
    chartFour.setOption(optionFour)
    chartFive.setOption(optionFive)
    chartSix.setOption(optionSix)
    window.addEventListener('resize', function () {
        chartFour.resize()
        chartFive.resize()
        chartSix.resize()
    })
    window.addEventListener('popstate', function () {
        destoryEchart()
    })

}
onMounted(() => {
    destoryEchart();
    setTimeout(() => {
        initMychart();
    }, 1200);
})

onUnmounted(() => {
    destoryEchart();
})


</script>
<style scoped>
:deep(.my-label) {
    background: var(--el-color-primary-light-9) !important;
    max-width: 150px;
}

.tips {
    color: gray;
}
</style>