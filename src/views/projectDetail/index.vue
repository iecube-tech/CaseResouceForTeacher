<template>
    <main v-if="Route.name === 'ProjectDetail'">
        <pageHeader title="蓝牙音箱" :route=Route />
        <div>

        </div>
        <div class="project">
            <div class="left_dashboard">
                <div style="margin-bottom: 20px;">
                    <h1>项目状态<br>Dashboard</h1>
                </div>
                <div class="left_text">
                    <h2>参与项目总人数</h2>
                    <h3>{{ participations }}人</h3>
                </div>
                <div class="left_text">
                    <h2>已完成项目人数</h2>
                    <h3>{{ downs }}人</h3>
                </div>
                <div class="left_text">
                    <h2>当前所在任务人数分布</h2>
                </div>
                <div class="pieChart" id="pieChart" style="min-height: 250px; justify-content: center;">
                </div>
                <div class="left_text">
                    <h2>成绩分布散点图</h2>
                </div>
                <div class="scatterChart" id="scatterChart" style="min-height: 300px; justify-content: center;">
                </div>
                <div class="left_text">
                    <h2>项目成绩分布直方图</h2>
                </div>
                <div class="barChart" id="barChart" style="min-height: 300px; justify-content: center;">
                </div>
            </div>

            <div class="right_table">
                <el-row :gutter="20">
                    <el-col :span="20">
                        <el-input v-model="search_input" :clearable="true" placeholder=" 输入学号或者姓名..."
                            class="input-with-select">
                            <template #append>
                                <el-button :icon="Search" type="primary" @click="search()" />
                            </template>
                        </el-input>
                    </el-col>
                    <el-col :span="4" style="text-align: center;">
                        <el-button type="primary" @click="searchReset()">
                            重置搜索
                        </el-button>
                    </el-col>

                </el-row>
                <el-table :data="showData" :default-sort="{ prop: 'studentId', order: 'descending' }"
                    style="min-height: 800px;" stripe :header-cell-style="{ fontWeight: 'bold', textAlign: 'center' }"
                    @row-dblclick="getCurttenTask">
                    <el-table-column prop="studentName" label="姓名" width="70" />
                    <el-table-column prop="studentId" label="学号" sortable width="110" />
                    <el-table-column prop="studentTasks" label="任务进度">
                        <template #default="scope">
                            <el-steps align-center>
                                <el-step v-for="step in scope.row.studentTasks.length"
                                    :title="getStepTitle(scope.row.studentTasks[step - 1].taskGrade)"
                                    :status="getStatus(scope.row.studentTasks)" @click="toDetail(scope.row.id, step)" />
                            </el-steps>
                        </template>
                    </el-table-column>
                    <!-- <el-table-column label="完成度" width="70">
                        <template #default="scope">
                            <div>
                                {{ 0 }}/{{ scope.row.studentTasks.length }}
                            </div>
                        </template>
                    </el-table-column> -->
                    <el-table-column prop="studentGrade" label="总分" width="80" />
                    <el-table-column label="总结报告" width="100">
                        <template #default="scope">
                            <el-button size="small" type="primary" @click="LookReport(scope)">
                                查看报告
                            </el-button>
                        </template>
                    </el-table-column>
                </el-table>
                <el-row
                    style="margin-top: 20px; text-align: center; display: flex; justify-content: center; align-items: center;">
                    <el-pagination v-model:current-page="currentPage" v-model:page-size="pageSize"
                        :page-sizes="[10, 20, 40, 60]" :small="true" :background="true"
                        layout="total, sizes, prev, pager, next, jumper" :total="participations"
                        @size-change="handleSizeChange" @current-change="handleCurrentChange" />
                </el-row>
            </div>
        </div>
    </main>
    <RouterView />
</template>

<script setup lang="ts">
import { onBeforeMount, onMounted, onUnmounted, onUpdated, ref } from 'vue'
import router from '@/router'
import { useRoute } from 'vue-router';
import { Search } from '@element-plus/icons-vue'
import * as echarts from 'echarts'
import pageHeader from '@/components/pageheader.vue'
import { ProjectDetail } from '@/apis/project/detail.js';
import { ElMessage } from 'element-plus';

const Route = useRoute()
const projectId = Route.params.projectId
const participations = ref(0)
const downs = ref(0)
const search_input = ref('')
const data = ref([])
const showData = ref([])
const currentPage = ref(1)
const pageSize = ref(20)

const handleSizeChange = (val: number) => {
    pageSize.value = val;
    currentPage.value = 1;
    showData.value = data.value.slice(currentPage.value - 1, pageSize.value + currentPage.value - 1)
}

const handleCurrentChange = (val: number) => {
    showData.value = data.value.slice((currentPage.value - 1) * pageSize.value, (currentPage.value - 1) * pageSize.value + pageSize.value)
}

const search = () => {
    showData.value = []
    for (let i = 0; i < data.value.length; i++) {
        if (data.value[i].studentName == search_input.value || data.value[i].studentId == search_input.value) {
            showData.value.push(data.value[i])
        }
    }
}

const searchReset = () => {
    search_input.value = ''
    showData.value = data.value.slice((currentPage.value - 1) * pageSize.value, (currentPage.value - 1) * pageSize.value + pageSize.value)
}


function getCurttenTask(row) {
    console.log(row);
    let stepNum = 1
    for (let i = 0; i < row.studentTasks.length; i++) {
        if (row.studentTasks[i].taskStatus == 1) {
            stepNum = i + 1
        }
    }
    toDetail(row.id, stepNum)
}

const toDetail = async (studentId, stepNum) => {
    await router.push({
        name: 'ProjectStudentDetail',
        params: {
            studentId: studentId,
            projectId: projectId,
            stepNum: stepNum,
        }
    })


}

const getStatus = (tasks) => {
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].taskStatus == 0) {
            return 'wait'
        }
        if (tasks[i].taskStatus == 1) {
            return 'process'
        }
        if (tasks[i].taskStatus == 2) {
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

const LookReport = (scope) => {
    console.log(scope);
}

const pieChartData = ref([])
const pieOption = {
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
            data: pieChartData.value,
            label: {
                show: false,
                position: 'center'
            },
            center: ['40%', '60%'],
            emphasis: {
                label: {
                    show: true,
                    fontSize: 16,
                    fontWeight: 'bold'
                }
            },
        }
    ]
};

const scatterOption = {
    xAxis: {
        show: false,
        data: []
    },
    yAxis: {

    },
    tooltip: {},
    series: [
        {
            symbolSize: 5,
            data: [],
            type: 'scatter'
        }
    ]
}
const barChartData = []
const barOption = {
    title: {
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
            data: [0, 0, 0, 0, 0, 0]
        },
    ]
}

let pieChart = null
let scatterChart = null
let barChart = null
onBeforeMount(() => {
    ProjectDetail(projectId).then(res => {
        if (res.state == 200) {
            data.value = res.data
            console.log(data.value);

            showData.value = data.value.slice((currentPage.value - 1) * pageSize.value, (currentPage.value - 1) * pageSize.value + pageSize.value)
            participations.value = data.value.length
            for (let i = 0; i < data.value[0].studentTasks.length; i++) {
                pieChartData.value.push({ value: 0, name: "任务" + (i + 1) })
            }
            for (let i = 0; i < data.value.length; i++) {
                //学生成绩散点图数据
                scatterOption.xAxis.data.push(data.value[i].studentName)
                // 学生成绩直方图
                if (data.value[i].studentGrade) {
                    scatterOption.series[0].data.push(data.value[i].studentGrade)
                    if (data.value[i].studentGrade < 50) {
                        barOption.series[0].data[0]++
                    } else if (data.value[i].studentGrade >= 50 && data.value[i].studentGrade < 60) {
                        barOption.series[0].data[1]++
                    } else if (data.value[i].studentGrade >= 60 && data.value[i].studentGrade < 70) {
                        barOption.series[0].data[2]++
                    } else if (data.value[i].studentGrade >= 70 && data.value[i].studentGrade < 80) {
                        barOption.series[0].data[3]++
                    } else if (data.value[i].studentGrade >= 80 && data.value[i].studentGrade < 90) {
                        barOption.series[0].data[4]++
                    } else if (data.value[i].studentGrade >= 90 && data.value[i].studentGrade <= 100) {
                        barOption.series[0].data[5]++
                    }
                } else {
                    scatterOption.series[0].data.push(0)
                }
                // 当前正在进行的任务人数数据
                let doing = 0
                for (let j = 0; j < data.value[i].studentTasks.length; j++) {
                    if (data.value[i].studentTasks[j].taskStatus == 1) {
                        doing++
                        pieChartData.value[j].value++
                    }
                }
                downs.value = participations.value - doing
            }
            console.log(scatterOption);
        } else {
            ElMessage.error("获取数据异常;" + res.message)
        }
    })
})

onMounted(() => {
    echarts.dispose;
    if (Route.name === 'ProjectDetail') {
        setTimeout(() => {
            let initEchart = () => {
                pieChart = echarts.init(document.getElementById("pieChart"));
                barChart = echarts.init(document.getElementById("barChart"))
                scatterChart = echarts.init(document.getElementById("scatterChart"))
                pieChart.setOption(pieOption)
                barChart.setOption(barOption)
                scatterChart.setOption(scatterOption)
            }
            let destoryEchart = () => {
                if (pieChart != null) {
                    pieChart.dispose()
                    pieChart = null
                }
                if (barChart != null) {
                    barChart.dispose()
                    barChart = null
                }
                if (scatterChart != null) {
                    scatterChart.dispose()
                    scatterChart = null
                }
            }
            destoryEchart()
            if (pieChart == null && barChart == null) {
                initEchart()
            }

            window.addEventListener('resize', function () {
                pieChart.resize()
                scatterChart.resize()
                barChart.resize()
            })
            window.addEventListener('popstate', function () {
                destoryEchart()
                initEchart()
            })

        }, 1000)
    }
})

onUpdated(() => {
    document.body.scrollTop = 0;
})

onUnmounted(() => {
    if (pieChart) {
        pieChart.dispose()
        pieChart = null
        console.log('Echarts destroy')
    }
    if (barChart) {
        barChart.dispose()
        barChart = null
        console.log('Echarts destroy')
    }
    if (scatterChart) {
        scatterChart.dispose()
        scatterChart = null
        console.log('Echarts destroy')
    }

})



</script>

<style scoped>
h1 {
    color: #33b8b9;
}

h2 {
    font-size: 16px;
}

h3 {
    font-size: 16px;
    font-weight: bold;
    color: #33b8b9;
    padding-left: 20px;
}

.page_header {
    padding-left: 10%;
    height: 50px;
    width: 100%;
}

main {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}

.project {
    width: 100%;
    display: flex;
    padding: 20px calc(164px + 4.8vw);
}

.left_dashboard {
    width: 20vw;
    display: flex;
    flex-direction: column;
    /* padding-top: 50px; */
}

.left_text {
    text-align: left;
    height: 40px;
    display: flex;
}


.content_main,
.right_table {
    width: 65vw;
    padding: 20px;
    background-color: #fff;
    margin-left: 10px;
    min-height: 800px;
}

.input-with-select {
    /* height: 40px; */
}

.student_project {
    height: 150px;
    margin-top: 30px;
    margin-bottom: 10px;
}
</style>