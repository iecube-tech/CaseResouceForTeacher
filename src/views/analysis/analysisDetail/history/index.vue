<template>
    <div class="history">
        <div>
            <!-- <el-row :gutter="20" style="margin-top: 20px;">
                <el-col :span="12">
                    <el-card style="height: 60px; display: flex; flex-direction: column;" shadow="hover"
                        :body-style="{ padding: 0 }">
                        <div style="font-size: 16px; font-weight: bold; color: #000;"><span
                                style="padding-left: 10px;">课程：</span></div>
                        <div style="text-align: end; padding-right: 10px; font-size: 20px; font-weight: bold;">
                            <span style="color: #f4a901;">{{ '半导体物理与器件-同上一堂课' }}</span>
                        </div>
                    </el-card>
                </el-col>
            </el-row> -->
            <el-row :gutter="20" style="margin-top: 20px;">
                <el-col :span="12">
                    <el-card style="height: 60px; display: flex; flex-direction: column;" shadow="hover"
                        :body-style="{ padding: 0 }">
                        <div style="font-size: 16px; font-weight: bold; color: #000;"><span
                                style="padding-left: 10px;">总计已参与课程人数</span></div>
                        <div style="text-align: end; padding-right: 10px; font-size: 20px; font-weight: bold;">
                            <span style="color: #f4a901;">{{ theSameCaseProjectsData.numberOfParticipant }}人</span>
                        </div>
                    </el-card>
                </el-col>
                <el-col :span="12">
                    <el-card style="height: 60px; display: flex; flex-direction: column;" shadow="hover"
                        :body-style="{ padding: 0 }">
                        <div style="font-size: 16px; font-weight: bold; color: #000;"><span
                                style="padding-left: 10px;">总计已完成课程人数</span></div>
                        <div style="text-align: end; padding-right: 10px; font-size: 20px; font-weight: bold;">
                            <span style="color: #f4a901;">{{ theSameCaseProjectsData.numberOfCompleter }}人</span>
                        </div>
                    </el-card>
                </el-col>
            </el-row>
            <!-- <el-row :gutter="20" style="margin-top: 20px;">
                <el-col :span="12">
                    <el-card style="height: 60px; display: flex; flex-direction: column;" shadow="hover"
                        :body-style="{ padding: 0 }">
                        <div style="font-size: 16px; font-weight: bold; color: #000;"><span
                                style="padding-left: 10px;">总计开放远程操作：</span></div>
                        <div style="text-align: end; padding-right: 10px; font-size: 20px; font-weight: bold;">
                            <span style="color: #f4a901;">736次</span>
                        </div>
                    </el-card>
                </el-col>
                <el-col :span="12">
                    <el-card style="height: 60px; display: flex; flex-direction: column;" shadow="hover"
                        :body-style="{ padding: 0 }">
                        <div style="font-size: 16px; font-weight: bold; color: #000;"><span
                                style="padding-left: 10px;">总计学生通过远程操作：</span></div>
                        <div style="text-align: end; padding-right: 10px; font-size: 20px; font-weight: bold;">
                            <span style="color: #f4a901;">43次</span>
                        </div>
                    </el-card>
                </el-col>
            </el-row> -->
        </div>
        <el-divider />
        <div>
            <div><span>该课程各实验成绩平均分数</span></div>
            <div id="chartOne" style="min-height: 400px;"></div>
        </div>
        <el-divider />
        <div>
            <div><span>该课程各实验成绩中位数</span></div>
            <div id="chartTwo" style="min-height: 400px;"></div>
        </div>
        <el-divider />
        <div>
            <div><span>该课程各Tag(问题点)出现数量</span></div>
            <div id="chartThree" style="min-height: 400px;"></div>
        </div>
    </div>
</template>

<script setup lang="ts">
import * as echarts from 'echarts';
import { onBeforeMount, onMounted, onUnmounted, ref } from 'vue';
import { useRoute } from 'vue-router';
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

const caseTaskAveragesX = ref([])
const caseTaskAveragesY = ref([])

const caseTaskMediansX = ref([])
const caseTaskMediansY = ref([])


const caseTagsCountX = ref([])
const caseTagsCountY = ref([])

onBeforeMount(() => {
    sameCaseProjectsData(projectId).then(res => {
        if (res.state == 200) {
            theSameCaseProjectsData.value = res.data
            for (let i = 0; i < theSameCaseProjectsData.value.taskAverages.length; i++) {
                caseTaskAveragesX.value.push('实验' + theSameCaseProjectsData.value.taskAverages[i].taskNum)
                caseTaskAveragesY.value.push(theSameCaseProjectsData.value.taskAverages[i].averageGrade)
            }
            for (let i = 0; i < theSameCaseProjectsData.value.taskMedians.length; i++) {
                caseTaskMediansX.value.push('实验' + theSameCaseProjectsData.value.taskMedians[i].taskNum)
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
    }, 1200);
})

onUnmounted(() => {
    destoryEchart();
})

</script>
<style scoped></style>