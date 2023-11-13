<template>
    <div class="history">
        <div>
            <el-row :gutter="20" style="margin-top: 20px;">
                <el-col :span="12">
                    <el-card style="height: 60px; display: flex; flex-direction: column;" shadow="hover"
                        :body-style="{ padding: 0 }">
                        <div style="font-size: 16px; font-weight: bold; color: #000;"><span
                                style="padding-left: 10px;">历史已参与项目人数</span></div>
                        <div style="text-align: end; padding-right: 10px; font-size: 20px; font-weight: bold;">
                            <span style="color: #f4a901;">{{ theSameCaseProjectsData.numberOfParticipant }}人</span>
                        </div>
                    </el-card>
                </el-col>
                <el-col :span="12">
                    <el-card style="height: 60px; display: flex; flex-direction: column;" shadow="hover"
                        :body-style="{ padding: 0 }">
                        <div style="font-size: 16px; font-weight: bold; color: #000;"><span
                                style="padding-left: 10px;">历史已完成项目人数</span></div>
                        <div style="text-align: end; padding-right: 10px; font-size: 20px; font-weight: bold;">
                            <span style="color: #f4a901;">{{ theSameCaseProjectsData.numberOfCompleter }}人</span>
                        </div>
                    </el-card>
                </el-col>
            </el-row>
        </div>
        <el-divider />
        <div>
            <div><span>使用该案例的项目各任务成绩平均分数</span></div>
            <div id="chartOne" style="min-height: 400px;"></div>
        </div>
        <el-divider />
        <div>
            <div><span>使用该案例的项目各任务成绩中位数</span></div>
            <div id="chartTwo" style="min-height: 400px;"></div>
        </div>
        <el-divider />
        <div>
            <div><span>使用该案例的项目各Tag(问题点)出现数量</span></div>
            <div id="chartThree" style="min-height: 400px;"></div>
        </div>
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
const optionOne = {
    xAxis: {
        type: 'category',
        data: caseTaskAveragesX.value,
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            data: caseTaskAveragesY.value,
            type: 'bar',
            itemStyle: {
                color: '#fbedd0',
                borderRadius: [5, 5, 0, 0]
            },
            emphasis: {
                itemStyle: {
                    color: '#f4a901'
                }
            }
        }
    ],
    tooltip: {
        trigger: 'axis',
        formatter: '{b0}: {c0}分'
    },
};

const optionTwo = {
    xAxis: {
        type: 'category',
        data: caseTaskMediansX.value,
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            data: caseTaskMediansY.value,
            type: 'bar',
            itemStyle: {
                color: '#fbedd0',
                borderRadius: [5, 5, 0, 0]
            },
            emphasis: {
                itemStyle: {
                    color: '#f4a901'
                }
            }
        }
    ],
    tooltip: {
        trigger: 'axis',
        formatter: '{b0}: {c0}分'
    },
};

const optionThree = {
    xAxis: {
        type: 'category',
        data: caseTagsCountX.value
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            data: caseTagsCountY.value,
            type: 'bar',
            itemStyle: {
                color: '#fbedd0',
                borderRadius: [5, 5, 0, 0]
            },
            emphasis: {
                itemStyle: {
                    color: '#f4a901'
                }
            }
        }
    ],
    tooltip: {
        trigger: 'axis',
        formatter: '{b0}: {c0}个'
    },
};

const optionDataOne = ref([])
const optioneDataTwo = ref([])
const optioneDatathree = ref([])

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
    }, 3000);
})

onUnmounted(() => {
    destoryEchart();
})

</script>
<style scoped></style>