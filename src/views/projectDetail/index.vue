<template>
    <div v-if="Route.name === 'ProjectDetail'">
        <div class="page_header">
            <pageHeader title="蓝牙音箱" :route=Route />
        </div>
        <main>
            <div class="aside">

            </div>
            <div class="left">
                <div class="pieChart" id="pieChart" style="min-height: 250px; justify-content: center;">
                </div>
                <div class="barChart" id="barChart" style="min-height: 300px; justify-content: center;">
                </div>

                <div class="left_text">
                    蓝牙音箱
                </div>
                <div class="left_text">
                    参与人数
                </div>
                <div class="left_text">
                    已完成人数
                </div>
                <div class="left_text">
                    未开始项目人数
                </div>
                <div class="left_text">
                    当前人数最多的步骤为：
                </div>
            </div>

            <div class="content_main">
                <div>
                    <el-row>
                        <el-input :v-model="search_input" :clearable="true" placeholder=" 输入学号或者姓名..."
                            class="input-with-select">
                            <template #append>
                                <el-button :icon="Search" />
                            </template>
                        </el-input>
                    </el-row>
                    <el-row>

                    </el-row>
                </div>
                <div v-for="student in data" :key="student.studentId">
                    <el-card shadow="hover" class="student_project"
                        @click="jumpToDetail(student.studentId, projectId, getStepActive(student.step) + 1)">
                        <el-row style="height: 40px;">
                            {{ student.studentName + '-' + student.studentNum }}
                        </el-row>
                        <el-row>
                            <el-steps :active="getStepActive(student.step)" finish-status="success" style="flex-grow: 1;">
                                <el-step v-for="step in student.step" :title="step.stepName"
                                    :description="getStepScore(step)"
                                    @click="jumpToDetail(student.studentId, projectId, step.stepId)" />

                            </el-steps>
                        </el-row>
                    </el-card>
                </div>
            </div>

            <div class="right_aside">

            </div>
        </main>
    </div>
    <RouterView />
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, onUpdated, ref } from 'vue'
import router from '@/router'
import { useRoute } from 'vue-router';
import { Search } from '@element-plus/icons-vue'
import * as echarts from 'echarts'
import pageHeader from '@/components/pageheader.vue'

const Route = useRoute()
console.log('111', Route)
const projectId = Route.params.projectId
const project_length = ref(3)
const search_input = ref('')
const gettitle = (num) => {
    if (project_length.value <= 19) {
        return '任务' + num
    } else {
        return num
    }
}
const random = () => {
    return Math.floor(Math.random() * project_length.value)
}

const jumpToDetail = async (studentId, projectId, stepNum) => {
    await router.push({
        name: 'ProjectStudentDetail',
        params: {
            studentId: studentId,
            projectId: projectId,
            stepNum: stepNum,
        }
    })
}

const getStepActive = (step) => {
    for (let i = 0; i < step.length; i++) {
        if (step[i].stepStatus === 'doing') {
            return i
        }
    }
}

const getStepScore = (step) => {
    if (!step.stepScore) {
        return ''
    }
    return step.stepScore + '分'
}
const data = [
    {
        studentId: 1,
        studentName: '张三',
        studentNum: '17408070110',
        step: [
            {
                stepId: 1,
                stepName: '任务1',
                stepStatus: 'done',
                stepScore: 80
            },
            {
                stepId: 2,
                stepName: '任务2',
                stepStatus: 'done',
                stepScore: 70
            },
            {
                stepId: 3,
                stepName: '任务3',
                stepStatus: 'done',
                stepScore: null
            },
            {
                stepId: 4,
                stepName: '任务4',
                stepStatus: 'doing',
                stepScore: null
            },
            {
                stepId: 5,
                stepName: '任务5',
                stepStatus: 'don`t',
                stepScore: null
            },
        ],
    },
    {
        studentId: 2,
        studentName: '李四',
        studentNum: '17408070111',
        step: [
            {
                stepId: 1,
                stepName: '任务1',
                stepStatus: 'done',
                stepScore: 80
            },
            {
                stepId: 2,
                stepName: '任务2',
                stepStatus: 'done',
                stepScore: 70
            },
            {
                stepId: 3,
                stepName: '任务3',
                stepStatus: 'doing',
                stepScore: null
            },
            {
                stepId: 4,
                stepName: '任务4',
                stepStatus: 'don`t',
                stepScore: null
            },
            {
                stepId: 5,
                stepName: '任务5',
                stepStatus: 'don`t',
                stepScore: null
            },
        ],
    },
    {
        studentId: 3,
        studentName: '王五',
        studentNum: '17408070112',
        step: [
            {
                stepId: 1,
                stepName: '任务1',
                stepStatus: 'done',
                stepScore: 80
            },
            {
                stepId: 2,
                stepName: '任务2',
                stepStatus: 'done',
                stepScore: 70
            },
            {
                stepId: 3,
                stepName: '任务3',
                stepStatus: 'doing',
                stepScore: null
            },
            {
                stepId: 4,
                stepName: '任务4',
                stepStatus: 'don`t',
                stepScore: null
            },
            {
                stepId: 5,
                stepName: '任务5',
                stepStatus: 'don`t',
                stepScore: null
            },
        ],
    },
    {
        studentId: 4,
        studentName: '赵六',
        studentNum: '17408070113',
        step: [
            {
                stepId: 1,
                stepName: '任务1',
                stepStatus: 'done',
                stepScore: 80
            },
            {
                stepId: 2,
                stepName: '任务2',
                stepStatus: 'done',
                stepScore: 70
            },
            {
                stepId: 3,
                stepName: '任务3',
                stepStatus: 'doing',
                stepScore: null
            },
            {
                stepId: 4,
                stepName: '任务4',
                stepStatus: 'don`t',
                stepScore: null
            },
            {
                stepId: 5,
                stepName: '任务5',
                stepStatus: 'don`t',
                stepScore: null
            },
        ],
    },
    {
        studentId: 5,
        studentName: '张三',
        studentNum: '17408070114',
        step: [
            {
                stepId: 1,
                stepName: '任务1',
                stepStatus: 'done',
                stepScore: 80
            },
            {
                stepId: 2,
                stepName: '任务2',
                stepStatus: 'done',
                stepScore: 70
            },
            {
                stepId: 3,
                stepName: '任务3',
                stepStatus: 'doing',
                stepScore: null
            },
            {
                stepId: 4,
                stepName: '任务4',
                stepStatus: 'don`t',
                stepScore: null
            },
            {
                stepId: 5,
                stepName: '任务5',
                stepStatus: 'don`t',
                stepScore: null
            },
        ],
    },
    {
        studentId: 6,
        studentName: '李四',
        studentNum: '17408070115',
        step: [
            {
                stepId: 1,
                stepName: '任务1',
                stepStatus: 'done',
                stepScore: 80
            },
            {
                stepId: 2,
                stepName: '任务2',
                stepStatus: 'done',
                stepScore: 70
            },
            {
                stepId: 3,
                stepName: '任务3',
                stepStatus: 'doing',
                stepScore: null
            },
            {
                stepId: 4,
                stepName: '任务4',
                stepStatus: 'don`t',
                stepScore: null
            },
            {
                stepId: 5,
                stepName: '任务5',
                stepStatus: 'don`t',
                stepScore: null
            },
        ],
    },
    {
        studentId: 7,
        studentName: '王五',
        studentNum: '17408070116',
        step: [
            {
                stepId: 1,
                stepName: '任务1',
                stepStatus: 'done',
                stepScore: 80
            },
            {
                stepId: 2,
                stepName: '任务2',
                stepStatus: 'done',
                stepScore: 70
            },
            {
                stepId: 3,
                stepName: '任务3',
                stepStatus: 'doing',
                stepScore: null
            },
            {
                stepId: 4,
                stepName: '任务4',
                stepStatus: 'don`t',
                stepScore: null
            },
            {
                stepId: 5,
                stepName: '任务5',
                stepStatus: 'don`t',
                stepScore: null
            },
        ],
    },
    {
        studentId: 8,
        studentName: '赵六',
        studentNum: '17408070117',
        step: [
            {
                stepId: 1,
                stepName: '任务1',
                stepStatus: 'done',
                stepScore: 80
            },
            {
                stepId: 2,
                stepName: '任务2',
                stepStatus: 'done',
                stepScore: 70
            },
            {
                stepId: 3,
                stepName: '任务3',
                stepStatus: 'doing',
                stepScore: null
            },
            {
                stepId: 4,
                stepName: '任务4',
                stepStatus: 'don`t',
                stepScore: null
            },
            {
                stepId: 5,
                stepName: '任务5',
                stepStatus: 'don`t',
                stepScore: null
            },
        ],
    },
    {
        studentId: 9,
        studentName: '张三',
        studentNum: '17408070118',
        step: [
            {
                stepId: 1,
                stepName: '任务1',
                stepStatus: 'done',
                stepScore: 80
            },
            {
                stepId: 2,
                stepName: '任务2',
                stepStatus: 'done',
                stepScore: 70
            },
            {
                stepId: 3,
                stepName: '任务3',
                stepStatus: 'doing',
                stepScore: null
            },
            {
                stepId: 4,
                stepName: '任务4',
                stepStatus: 'don`t',
                stepScore: null
            },
            {
                stepId: 5,
                stepName: '任务5',
                stepStatus: 'don`t',
                stepScore: null
            },
        ],
    },
    {
        studentId: 10,
        studentName: '李四',
        studentNum: '17408070119',
        step: [
            {
                stepId: 1,
                stepName: '任务1',
                stepStatus: 'done',
                stepScore: 80
            },
            {
                stepId: 2,
                stepName: '任务2',
                stepStatus: 'done',
                stepScore: 70
            },
            {
                stepId: 3,
                stepName: '任务3',
                stepStatus: 'doing',
                stepScore: null
            },
            {
                stepId: 4,
                stepName: '任务4',
                stepStatus: 'don`t',
                stepScore: null
            },
            {
                stepId: 5,
                stepName: '任务5',
                stepStatus: 'don`t',
                stepScore: null
            },
        ],
    }
]


const pieChartData = [
    { value: 1, name: '任务1' },
    { value: 3, name: '任务2' },
    { value: 8, name: '任务3' },
    { value: 11, name: '任务4' },
    { value: 10, name: '任务5' },
    { value: 7, name: '任务6' },
    { value: 5, name: '任务7' },
    { value: 0, name: '任务8' },
]
const pieOption = {
    title: {
        text: '当前进行中的任务人数占比',
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
            data: pieChartData,
            label: {
                normal: {
                    show: true,
                },
            },
            radius: '60%',
            center: ['40%', '60%'],
        }
    ]
};
let pieChart = ref(null)
const barChartData = [

]
const barOption = {
    title: {
        text: '任务成绩分布',
        left: 'left'
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c}人'
    },
    xAxis: {
        data: ['<50', '50-60', '60-70', '70-80', '80-90', '90-100']
    },
    yAxis: {},
    series: [
        {
            name: '任务成绩分布',
            type: 'bar',
            data: [1, 2, 8, 25, 8, 5]
        },
        {
            name: '任务成绩分布',
            type: 'bar',
            data: [1, 2, 8, 25, 8, 5]
        },
        {
            name: '任务成绩分布',
            type: 'bar',
            data: [1, 2, 8, 25, 8, 5]
        },
        {
            name: '任务成绩分布',
            type: 'bar',
            data: [1, 2, 8, 25, 8, 5]
        },
        {
            name: '任务成绩分布',
            type: 'bar',
            data: [1, 2, 8, 25, 8, 5]
        },
    ]
}
let barChart = ref(null)
onMounted(() => {
    if (Route.name === 'ProjectDetail') {
        let initEchart = () => {
            pieChart = echarts.init(document.getElementById("pieChart"));
            barChart = echarts.init(document.getElementById("barChart"))
            pieChart.setOption(pieOption)
            barChart.setOption(barOption)
        }
        let destoryEchart = () => {
            if (!pieChart && !barChart) {
                return
            }
            pieChart.dispose()
            barChart.dispose()
            pieChart = null
            barChart = null
        }
        destoryEchart()
        initEchart()
        window.addEventListener('resize', function () {
            pieChart.resize()
            barChart.resize()
        })
        window.addEventListener('popstate', function () {
            destoryEchart()
            initEchart()
        })
    }
})

onUpdated(() => {
    document.body.scrollTop = 0;
})

onUnmounted(() => {
    if (Route.name === 'ProjectDetail') {
        if (!pieChart && !barChart) {
            return
        }
        pieChart.dispose()
        barChart.dispose()
        pieChart = null
        barChart = null
    }
})



</script>

<style scoped>
.page_header {
    padding-left: 10%;
    height: 50px;
    width: 100%;
}

main {
    width: 100%;
    height: 100%;
    display: flex;
}

.aside {
    display: flex;
    min-width: 10%;
}

.left {
    width: 25%;
    display: flex;
    flex-direction: column;
    padding-top: 50px;
}

.left_text {
    text-align: left;
}


.content_main {
    width: 55%;
}

.input-with-select {
    height: 40px;
}

.student_project {
    height: 150px;
    margin-top: 30px;
    margin-bottom: 10px;
}

.right_aside {
    width: 10%;
}
</style>