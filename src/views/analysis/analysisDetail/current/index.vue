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
            <div style="display: flex; justify-content: space-between;">
                <span>学生成绩分析</span>
                <div style="display: flex; justify-content: flex-end;">
                    <div style="margin-right: 20px;">
                        <span>优秀成绩：</span>
                        <el-input-number v-model="excellentNum" :min="0" :max="100" size="small" controls-position="right"
                            @change="excellentNumChange" />
                    </div>
                    <div style="margin-right: 20px;">
                        <span>及格成绩：</span>
                        <el-input-number v-model="passNum" :min="0" :max="100" size="small" controls-position="right"
                            @change="passNumChange" />
                    </div>
                    <div>
                        <el-select v-model="whichGrade" placeholder="" size="small" @change="whichGradeChange()">
                            <el-option label="项目/课程成绩" :value="0" />
                            <el-option v-for="i in projectData.taskMedians.length"
                                :key="projectData.taskMedians[i - 1].taskNum"
                                :label="'任务/实验 ' + projectData.taskMedians[i - 1].taskNum + ' 成绩'" :value="i" />
                        </el-select>
                    </div>
                </div>
            </div>
            <div style="display: flex; flex-direction: row; height: 100%; width: 100%; margin-top: 20px;">
                <div style="flex:1; text-align: center;"><span>成绩分布占比</span></div>
                <div style="flex:1; text-align: center;"><span>优秀率</span></div>
                <div style="flex:1; text-align: center;"><span>及格率</span></div>
            </div>
            <div style="display: flex; flex-direction: row; height: 100%; width: 100%;">
                <div id="gradeDistribution" style="min-height: 400px; flex:1"></div>
                <div id="excellentRate" style="min-height: 400px; flex:1"></div>
                <div id="passRate" style="min-height: 400px; flex:1"></div>
            </div>
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

const passNum = ref(60)
const excellentNum = ref(90)
const excellentNumChange = () => {
    whichGradeChange()
}

const passNumChange = () => {
    whichGradeChange()
}

const whichGrade = ref(0)
const projectData = ref({
    numberOfCompleter: null,
    numberOfParticipant: null,
    projectGradeList: [],
    projectTaskStudentsGradeList: [{ taskNum: null, gradeList: [] }],
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

const whichGradeChange = () => {
    console.log(whichGrade.value)
    if (whichGrade.value == 0) {
        computeProjectGradeDistributionData();
        computeProjectExcellentRateData();
        computeProjectPassRateData();
    } else {
        computeTaskGradeDistributionData();
        computeTaskExcellentRateData();
        computeTaskPassRateData();
    }
    gradeDistributionChart.setOption(gradeDistribution)
    excellentRateChart.setOption(excellentRate)
    passRateChart.setOption(passRate)
}

const resetGradeDistributionData = () => {
    for (let i = 0; i < gradeDistributionData.value.length; i++) {
        gradeDistributionData.value[i].value = 0
    }
}


const computeProjectGradeDistributionData = () => {
    resetGradeDistributionData()
    for (let i = 0; i < projectData.value.projectGradeList.length; i++) {
        if (projectData.value.projectGradeList[i] <= 100 && projectData.value.projectGradeList[i] >= 90) {
            gradeDistributionData.value[5].value += 1
        } else if (projectData.value.projectGradeList[i] < 90 && projectData.value.projectGradeList[i] >= 80) {
            gradeDistributionData.value[4].value += 1
        } else if (projectData.value.projectGradeList[i] < 80 && projectData.value.projectGradeList[i] >= 70) {
            gradeDistributionData.value[3].value += 1
        } else if (projectData.value.projectGradeList[i] < 70 && projectData.value.projectGradeList[i] >= 60) {
            gradeDistributionData.value[2].value += 1
        } else if (projectData.value.projectGradeList[i] < 60 && projectData.value.projectGradeList[i] >= 50) {
            gradeDistributionData.value[1].value += 1
        } else {
            gradeDistributionData.value[0].value += 1
        }
    }
}

const computeTaskGradeDistributionData = () => {
    resetGradeDistributionData()
    // 实验几  whichGrade != 0 时   whichGrade-1 为projectTaskStudentsGradeList的index
    for (let i = 0; i < projectData.value.projectTaskStudentsGradeList[whichGrade.value - 1].gradeList.length; i++) {
        let num = projectData.value.projectTaskStudentsGradeList[whichGrade.value - 1].gradeList[i]
        if (num <= 100 && num > 90) {
            gradeDistributionData.value[5].value += 1
        } else if (num <= 90 && num > 80) {
            gradeDistributionData.value[4].value += 1
        } else if (num <= 80 && num > 70) {
            gradeDistributionData.value[3].value += 1
        } else if (num <= 70 && num > 60) {
            gradeDistributionData.value[2].value += 1
        } else if (num <= 60 && num > 50) {
            gradeDistributionData.value[1].value += 1
        } else {
            gradeDistributionData.value[0].value += 1
        }
    }
}

const resetExcellentRateData = () => {
    for (let i = 0; i < excellentRateData.value.length; i++) {
        excellentRateData.value[i].value = 0
    }
    console.log(excellentRateData.value)
}
const computeProjectExcellentRateData = () => {
    resetExcellentRateData()
    // 计算项目成绩的优秀率  大于等于  excellentNum 的值为优秀成绩
    for (let i = 0; i < projectData.value.projectGradeList.length; i++) {
        if (projectData.value.projectGradeList[i] >= excellentNum.value) {
            excellentRateData.value[0].value += 1
        } else {
            excellentRateData.value[1].value += 1
        }
    }
    console.log(excellentRateData.value)
}

const computeTaskExcellentRateData = () => {
    resetExcellentRateData()
    for (let i = 0; i < projectData.value.projectTaskStudentsGradeList[whichGrade.value - 1].gradeList.length; i++) {
        let num = projectData.value.projectTaskStudentsGradeList[whichGrade.value - 1].gradeList[i]
        if (num >= excellentNum.value) {
            excellentRateData.value[0].value += 1
        } else {
            excellentRateData.value[1].value += 1
        }
    }

}

const resetPassRateDate = () => {
    for (let i = 0; i < passRateData.value.length; i++) {
        passRateData.value[i].value = 0
    }
}

const computeProjectPassRateData = () => {
    resetPassRateDate()
    for (let i = 0; i < projectData.value.projectGradeList.length; i++) {
        if (projectData.value.projectGradeList[i] >= passNum.value) {
            passRateData.value[0].value += 1
        } else {
            passRateData.value[1].value += 1
        }
    }
    console.log(passRateData.value)
}

const computeTaskPassRateData = () => {
    resetPassRateDate()
    for (let i = 0; i < projectData.value.projectTaskStudentsGradeList[whichGrade.value - 1].gradeList.length; i++) {
        let num = projectData.value.projectTaskStudentsGradeList[whichGrade.value - 1].gradeList[i]
        if (num >= passNum.value) {
            passRateData.value[0].value += 1
        } else {
            passRateData.value[1].value += 1
        }
    }
}

const currentPersonnelDistributionsData = ref([])
const currentTaskAveragesX = ref([])
const currentTaskAveragesY = ref([])

const currentTaskMediansX = ref([])
const currentTaskMediansY = ref([])

// 当前所处在任务的人数分布
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

const gradeDistributionData = ref([
    { value: 0, name: '<50' },
    { value: 0, name: '50-60' },
    { value: 0, name: '60-70' },
    { value: 0, name: '70-80' },
    { value: 0, name: '80-90' },
    { value: 0, name: '90-100' },
])

// 成绩分布饼图
const gradeDistribution = {
    tooltip: {
        formatter: '{a} <br/> 成绩在区间 "{b}" 的学生有{c}人，占 {d}%',
    },
    series: [
        {
            name: '成绩区间占比',
            type: 'pie',
            radius: '60%',
            data: gradeDistributionData.value,
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};

const excellentRateData = ref([
    { value: 0, name: '优秀' },
    { value: 0, name: '一般' }
])

// 优秀率饼图
const excellentRate = {
    tooltip: {
        formatter: '{a} <br/> {b}:{c}人 {d}%',
    },
    series: [
        {
            name: '成绩优秀占比',
            type: 'pie',
            color: [
                '#91cc75',
                '#5470c6',
                '#fac858',
                '#ee6666',
                '#73c0de',
                '#3ba272',
                '#fc8452',
                '#9a60b4',
                '#ea7ccc'
            ],
            radius: '60%',
            data: excellentRateData.value,
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};

const passRateData = ref([
    { value: 0, name: '及格' },
    { value: 0, name: '不及格' }
])
// 及格率饼图
const passRate = {
    tooltip: {
        formatter: '{a} <br/> {b}:{c}人 {d}%',
    },
    series: [
        {
            name: '成绩及格占比',
            type: 'pie',
            color: [
                '#3ba272',
                '#ee6666',
                '#73c0de',
                '#91cc75',
                '#5470c6',
                '#fc8452',
                '#9a60b4',
                '#ea7ccc'
            ],
            radius: '60%',
            data: passRateData.value,
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};

let chartFour = null
let chartFive = null
let chartSix = null
let gradeDistributionChart = null
let excellentRateChart = null
let passRateChart = null

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
    if (gradeDistributionChart) {
        gradeDistributionChart.dispose()
        gradeDistributionChart = null
    }
    if (excellentRateChart) {
        excellentRateChart.dispose()
        excellentRateChart = null
    }
    if (passRateChart) {
        passRateChart.dispose()
        passRateChart = null
    }
}
function initMychart() {
    chartFive = echarts.init(document.getElementById('chartFive'));
    chartSix = echarts.init(document.getElementById('chartSix'));
    gradeDistributionChart = echarts.init(document.getElementById('gradeDistribution'));
    excellentRateChart = echarts.init(document.getElementById('excellentRate'));
    passRateChart = echarts.init(document.getElementById('passRate'));

    chartFive.setOption(optionFive)
    chartSix.setOption(optionSix)
    gradeDistributionChart.setOption(gradeDistribution)
    excellentRateChart.setOption(excellentRate)
    passRateChart.setOption(passRate)

    window.addEventListener('resize', function () {
        chartFive.resize()
        chartSix.resize()
        gradeDistributionChart.resize()
        excellentRateChart.resize()
        passRateChart.resize()
    })
    window.addEventListener('popstate', function () {
        destoryEchart()
    })

}

onBeforeMount(() => {
    currentProjectData(projectId).then(res => {
        if (res.state == 200) {
            projectData.value = res.data
            // for (let i = 0; i < projectData.value.personnelDistributions.length; i++) {
            //     currentPersonnelDistributionsData.value.push({ value: projectData.value.personnelDistributions[i].studentNum, name: '任务' + (i + 1) })
            // }
            for (let i = 0; i < projectData.value.taskAverages.length; i++) {
                currentTaskAveragesX.value.push('任务' + projectData.value.taskAverages[i].taskNum)
                currentTaskAveragesY.value.push(projectData.value.taskAverages[i].averageGrade)
            }
            for (let i = 0; i < projectData.value.taskMedians.length; i++) {
                currentTaskMediansX.value.push('任务' + projectData.value.taskMedians[i].taskNum)
                currentTaskMediansY.value.push(projectData.value.taskMedians[i].medianGrade)
            }
            computeProjectGradeDistributionData()
            computeProjectExcellentRateData()
            computeProjectPassRateData()
        }
    })

    projectClassHour(projectId).then(res => {
        if (res.state == 200) {
            classHour.value = res.data
        }
    })
})

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