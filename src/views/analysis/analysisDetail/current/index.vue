<template>
    <div class="current">
        <div>
            <h1>当前项目状态</h1>
            <el-row :gutter="20" style="margin-top: 20px;">
                <el-col :span="12">
                    <el-card style="height: 60px; display: flex; flex-direction: column;" shadow="hover"
                        :body-style="{ padding: 0 }">
                        <div style="font-size: 16px; font-weight: bold; color: #000;"><span
                                style="padding-left: 10px;">参与项目人数</span></div>
                        <div style="text-align: end; padding-right: 10px; font-size: 20px; font-weight: bold;">
                            <span>{{ projectData.numberOfParticipant }}人</span>
                        </div>
                    </el-card>
                </el-col>
                <el-col :span="12">
                    <el-card style="height: 60px; display: flex; flex-direction: column;" shadow="hover"
                        :body-style="{ padding: 0 }">
                        <div style="font-size: 16px; font-weight: bold; color: #000;"><span
                                style="padding-left: 10px;">已完成项目人数</span></div>
                        <div style="text-align: end; padding-right: 10px; font-size: 20px; font-weight: bold;">
                            <span>{{ projectData.numberOfCompleter }}人</span>
                        </div>
                    </el-card>
                </el-col>
            </el-row>
        </div>
        <el-divider />
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
import pageHeader from '@/components/pageheader.vue'
import { currentProjectData } from '@/apis/analysis/currentProject.js'
import { sameCaseProjectsData } from '@/apis/analysis/sameCaseProjects.js'

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

const theSameCaseProjectsData = ref({
    numberOfCompleter: null,
    numberOfParticipant: null,
    taskAverages: [{ taskNum: null, averageGrade: null }],
    taskMedians: [{ taskNum: null, medianGrade: null }],
    taskTagCountList: [{ taskNum: null, tagsCount: [{ item: null, count: null }] }],
    tagsCount: [{ item: null, count: null }],
})

const currentPersonnelDistributionsData = ref([])
const currentTaskAveragesX = ref([])
const currentTaskAveragesY = ref([])

const currentTaskMediansX = ref([])
const currentTaskMediansY = ref([])

const caseTaskAveragesX = ref([])
const caseTaskAveragesY = ref([])

const caseTaskMediansX = ref([])
const caseTaskMediansY = ref([])


const caseTagsCountX = ref([])
const caseTagsCountY = ref([])

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

    sameCaseProjectsData(projectId).then(res => {
        if (res.state == 200) {
            theSameCaseProjectsData.value = res.data
            for (let i = 0; i < theSameCaseProjectsData.value.taskAverages.length; i++) {
                caseTaskAveragesX.value.push('任务' + theSameCaseProjectsData.value.taskAverages[i].taskNum)
                caseTaskAveragesY.value.push(theSameCaseProjectsData.value.taskAverages[i].averageGrade)
            }
            for (let i = 0; i < theSameCaseProjectsData.value.taskMedians.length; i++) {
                caseTaskMediansX.value.push('任务' + theSameCaseProjectsData.value.taskMedians[i].taskNum)
                caseTaskMediansY.value.push(theSameCaseProjectsData.value.taskMedians[i].medianGrade)
            }
            for (let i = 0; i < theSameCaseProjectsData.value.tagsCount.length; i++) {
                caseTagsCountX.value.push(theSameCaseProjectsData.value.tagsCount[i].item)
                caseTagsCountY.value.push(theSameCaseProjectsData.value.tagsCount[i].count)
            }
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
const optionSeven = {
    xAxis: {
        type: 'category',
        data: ['扩展电路不正确', '电路设计不合理', '仪器使用不正确',]
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            data: [24, 18, 15],
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
        formatter: '{b0}: {c0}个'
    },
};
const optionDataFour = ref([])
const optioneDataFive = ref([])
const optioneDataSix = ref([])
const optionDataSeven = ref([])

let chartFour = null
let chartFive = null
let chartSix = null
let chartSeven = null

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
    if (chartSeven) {
        chartSeven.dispose()
        chartSeven = null
    }
}
function initMychart() {
    chartFour = echarts.init(document.getElementById('chartFour'));
    chartFive = echarts.init(document.getElementById('chartFive'));
    chartSix = echarts.init(document.getElementById('chartSix'));
    // chartSeven = echarts.init(document.getElementById('chartSeven'));
    chartFour.setOption(optionFour)
    chartFive.setOption(optionFive)
    chartSix.setOption(optionSix)
    // chartSeven.setOption(optionSeven)
    window.addEventListener('resize', function () {
        chartFour.resize()
        chartFive.resize()
        chartSix.resize()
        // chartSeven.resize()
    })
    window.addEventListener('popstate', function () {
        destoryEchart()
    })

}
onMounted(() => {
    destoryEchart();
    setTimeout(() => {
        initMychart();
    }, 3000);
})

onUnmounted(() => {
    destoryEchart();
})


</script>
<style scoped></style>