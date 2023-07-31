<template>
    <div style="display: flex; flex-direction: column;">
        <pageHeader :route=route />
        <div class="suggestion">
            <div class="project">
                <div style="padding: 10px; color: #33b8b9; font-size: 18px;">
                    <h1>项目设计改进建议</h1>
                </div>
                <div style="display: flex; flex-direction: column; padding: 10px; font-size: 14px;">
                    <h2>项目历史平均分数与当前对比</h2>
                    <div id="chartOne" style="min-height:200px;"></div>
                </div>
                <div style="display: flex; flex-direction: column; padding: 10px; font-size: 14px;">
                    <h2>项目历史各任务平均分数与当前对比</h2>
                    <div id="chartTwo" style="min-height:500px;"></div>
                </div>
                <div style="display: flex; flex-direction: column; padding: 10px; font-size: 14px;">
                    <h2>当前项目各任务阶段问题点出现数量最多TOP3</h2>
                    <div id="chartThree" style="min-height:400px;"></div>
                </div>
            </div>
            <div class="student">
                <div style="padding: 10px; color: #33b8b9; font-size: 18px;">
                    <h1>学生改进建议</h1>
                </div>
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
                    style="min-height: 1100px;" stripe :header-cell-style="{ fontWeight: 'bold', textAlign: 'center' }">
                    <el-table-column prop="studentName" label="姓名" width="70" />
                    <el-table-column prop="studentId" label="学号" sortable width="110" />
                    <el-table-column prop="studentTasks" label="任务进度">
                        <template #default="scope">
                            <el-steps align-center>
                                <el-step v-for="step in scope.row.studentTasks.length"
                                    :title="getStepTitle(scope.row.studentTasks[step - 1].taskGrade)"
                                    :status="getStatus(scope.row.studentTasks)" />
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
                    <el-table-column label="个性化改进建议" width="180">
                        <template #default="scope">
                            <div style="height: 74px; overflow: hidden;">
                                {{ scope.row.suggestion[0] }}
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column type="expand">
                        <template #default="props">
                            <div v-for="i in props.row.suggestion">{{ i }}</div>
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
    </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { onMounted, ref, onUnmounted, onBeforeMount } from 'vue'
import pageHeader from '@/components/pageheader.vue'
import * as echarts from 'echarts';
import { Search } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus';
import { ProjectDetail } from '@/apis/project/detail.js';

const route = useRoute()
const projectId = route.params.projectId
const participations = ref(0)
const data = ref([])
const showData = ref([])
const currentPage = ref(1)
const pageSize = ref(20)
const search_input = ref('')
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

const handleSizeChange = (val: number) => {
    pageSize.value = val;
    currentPage.value = 1;
    showData.value = data.value.slice(currentPage.value - 1, pageSize.value + currentPage.value - 1)
}

const handleCurrentChange = (val: number) => {
    showData.value = data.value.slice((currentPage.value - 1) * pageSize.value, (currentPage.value - 1) * pageSize.value + pageSize.value)
}

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

onBeforeMount(() => {
    ProjectDetail(projectId).then(res => {
        if (res.state == 200) {
            console.log(res);

            data.value = res.data

            showData.value = data.value.slice((currentPage.value - 1) * pageSize.value, (currentPage.value - 1) * pageSize.value + pageSize.value)
            participations.value = data.value.length
            console.log(data.value);

        } else {
            ElMessage.error("获取数据异常;" + res.message)
        }
    })
})

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
            data: [80],
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
            data: [77],
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
        data: ['任务一', '任务二', '任务三', '任务四', '任务五'],
        show: false,
    },
    grid: {
        left: "3%"
    },
    tooltip: {
    },
    series: [
        {
            data: [82, 86, 79, 76, 75],
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
            data: [80, 77, 75, 77, 77],
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
        data: ['扩展电路不正确', '电路设计不合理', '仪器使用不正确',]
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
            data: [24, 18, 15],
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
    }, 300);
})

onUnmounted(() => {
    destoryEchart();
})
</script>
<style scoped>
.suggestion {
    display: flex;
    padding: 20px calc(164px + 4.8vw);
}

.project {
    width: 30%;
    margin-right: 20px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
}

.student {
    width: 70%;
    margin-left: 20px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 20px;
}
</style>