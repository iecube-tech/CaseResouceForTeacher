<template>
    <div class="project">
        <div style="display: flex; flex-direction: column; padding: 10px; font-size: 14px;">
            <h2>项目历史平均分数与当前对比</h2>
            <div id="chartOne" style="min-height:200px;"></div>
        </div>
        <div style="display: flex; flex-direction: column; padding: 10px; font-size: 14px;">
            <h2>项目历史各任务平均分数与当前对比</h2>
            <div id="chartTwo" style="min-height:500px;"></div>
        </div>
        <div style="display: flex; flex-direction: column; padding: 10px; font-size: 14px;">
            <h2>当前项目tag点出现数量</h2>
            <div id="chartThree" style="min-height:400px;"></div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { onMounted, ref, onUnmounted, onBeforeMount } from 'vue'
import pageHeader from '@/components/pageheader.vue'
import * as echarts from 'echarts';
import { Back, Search } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus';
import { ProjectDetail } from '@/apis/project/detail.js';
import router from '@/router';
import { currentProjectData } from '@/apis/analysis/currentProject.js'
import { sameCaseProjectsData } from '@/apis/analysis/sameCaseProjects.js'

const route = useRoute()
const projectId = route.params.projectId
const data = ref([])

const projectData = ref({
    averageGrade: null,
    numberOfCompleter: null,
    numberOfParticipant: null,
    personnelDistributions: [{ taskNum: null, studentNum: null }],
    taskAverages: [{ taskNum: null, averageGrade: null }],
    taskMedians: [{ taskNum: null, medianGrade: null }],
    tagsCount: [{ item: null, count: null }],
})

const theSameCaseProjectsData = ref({
    historyAverageGrade: null,
    numberOfCompleter: null,
    numberOfParticipant: null,
    taskAverages: [{ taskNum: null, averageGrade: null }],
    taskMedians: [{ taskNum: null, medianGrade: null }],
    taskTagCountList: [{ taskNum: null, tagsCount: [{ item: null, count: null }] }],
    tagsCount: [{ item: null, count: null }],
})

const caseAverageGrade = ref([])
const currentProjectAverageGrade = ref([])

const optionTwoY = ref([])
const optionTwoXCurrent = ref([])
const optionTwoXCase = ref([])

const currentTagsCountX = ref([])
const currentTagsCountY = ref([])
onBeforeMount(() => {
    currentProjectData(projectId).then(res => {
        if (res.state == 200) {
            projectData.value = res.data
            currentProjectAverageGrade.value.push(projectData.value.averageGrade)
        }
    })

    sameCaseProjectsData(projectId).then(res => {
        if (res.state == 200) {
            theSameCaseProjectsData.value = res.data
            caseAverageGrade.value.push(theSameCaseProjectsData.value.historyAverageGrade)
            for (let i = 0; i < theSameCaseProjectsData.value.taskAverages.length; i++) {
                optionTwoY.value.push('任务' + projectData.value.taskAverages[i].taskNum)
                optionTwoXCurrent.value.push(projectData.value.taskAverages[i].averageGrade)
                optionTwoXCase.value.push(theSameCaseProjectsData.value.taskAverages[i].averageGrade)
            }
            for (let i = 0; i < projectData.value.tagsCount.length; i++) {
                currentTagsCountX.value.push(projectData.value.tagsCount[i].item)
                currentTagsCountY.value.push(projectData.value.tagsCount[i].count)
            }

        }
    })
})

const getStepActive = (tasks) => {
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].taskStatus == 1) {
            return i
        }
    }
}

const getStatus = (tasks) => {
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].taskStatus == 0) {
            return 'wait'
        }
        if (tasks[i].taskStatus == 1) {
            return 'process'
        }
        if (tasks[i].taskStatus >= 2) {
            return 'finish'
        }
    }
}
const getStepTitle = (taskGrade) => {
    if (taskGrade) {
        return taskGrade + "分"
    } else {
        return "-"
    }

}



const goBack = () => {
    router.push({
        name: <string>route.meta.parentName
    })
}


const optionOne = {
    xAxis: {
        type: 'value',
        show: false,
    },
    yAxis: {
        type: 'category',
        data: ["项目成绩平均值"],
        show: false
    },
    grid: {
        left: "3%"
    },
    tooltip: {},
    series: [
        {
            data: caseAverageGrade.value,
            name: "历史项目",
            type: 'bar',
            label: {
                show: true,
                precision: 1,
                position: 'right',
                valueAnimation: true,
            },
            itemStyle: {
                color: "#fbedd0",
                borderRadius: [0, 20, 20, 0]
            },
            center: ['50%', '60%'],
            emphasis: {
                itemStyle: {
                    color: "#f4a901"
                }
            }
        },
        {
            data: currentProjectAverageGrade.value,
            name: "当前项目",
            type: 'bar',
            label: {
                show: true,
                precision: 1,
                position: 'right',
                valueAnimation: true,
            },
            itemStyle: {
                color: "#c1dfdf",
                borderRadius: [0, 20, 20, 0]
            },
            center: ['50%', '60%'],
            emphasis: {
                itemStyle: {
                    color: "#33b8b9"
                }
            }
        },
    ],

};

const optionTwo = {
    xAxis: {
        type: 'value',
        show: false,
    },
    yAxis: {
        type: 'category',
        data: optionTwoY.value,
        show: false,
    },
    grid: {
        left: "3%"
    },
    tooltip: {
    },
    series: [
        {
            data: optionTwoXCase.value,
            name: '历史项目',
            type: 'bar',
            label: {
                show: true,
                precision: 1,
                position: 'right',
                valueAnimation: true,
            },
            itemStyle: {
                color: "#fbedd0",
                borderRadius: [0, 20, 20, 0]
            },
            emphasis: {
                itemStyle: {
                    color: "#f4a901"
                }
            }
        },
        {
            data: optionTwoXCurrent.value,
            name: '当前项目',
            type: 'bar',
            label: {
                show: true,
                precision: 1,
                position: 'right',
                valueAnimation: true,
            },
            itemStyle: {
                color: "#c1dfdf",
                borderRadius: [0, 20, 20, 0]
            },
            emphasis: {
                itemStyle: {
                    color: "#33b8b9"
                }
            }
        }
    ],

};
const optionThree = {
    xAxis: {
        type: 'category',
        data: currentTagsCountX.value
    },
    yAxis: {
        type: 'value',
        show: false
    },
    label: {
        show: true,
        precision: 1,
        position: 'top',
        valueAnimation: true,
    },
    series: [
        {
            data: currentTagsCountY.value,
            type: 'bar',
            itemStyle: {
                color: '#c1dfdf',
                borderRadius: [5, 5, 0, 0]
            },
            emphasis: {
                itemStyle: {
                    color: '#33b8b9'
                }
            }
        }
    ],
    tooltip: {
        // trigger: 'axis',
        // formatter: '{b0}: {c0}'
    },
};

let chartOne = null
let chartTwo = null
let chartThree = null

function destoryEchart() {
    if (chartOne) {
        chartOne.dispose()
        chartOne = null
    }
    if (chartTwo) {
        chartTwo.dispose()
        chartTwo = null
    }
    if (chartThree) {
        chartThree.dispose()
        chartThree = null
    }
}
function initMychart() {

    chartOne = echarts.init(document.getElementById('chartOne'));
    chartTwo = echarts.init(document.getElementById('chartTwo'));
    chartThree = echarts.init(document.getElementById('chartThree'));

    chartOne.setOption(optionOne)
    chartTwo.setOption(optionTwo)
    chartThree.setOption(optionThree)
    window.addEventListener('resize', function () {
        chartOne.resize()
        chartTwo.resize()
        chartThree.resize()
    })
    window.addEventListener('popstate', function () {
        destoryEchart()
    })

}
onMounted(() => {
    destoryEchart();
    setTimeout(() => {
        initMychart();
    }, 2500);
})

onUnmounted(() => {
    destoryEchart();
})
</script>
<style scoped></style>