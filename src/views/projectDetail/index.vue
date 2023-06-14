<template>
    <main>
        <div class="aside">
            <el-col style="flex-grow: 1; margin-top: 80px;">
                <div class="pieChart" id="pieChart" style="min-height: 200px; width: 30px00px;">

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
            </el-col>
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
            <div v-for="o in 8" :key="o">
                <el-card shadow="hover" class="student_project" @click="jumpToDetail(o, projectId, random())">
                    <el-row style="height: 50px;">
                        李欣然-21408070116
                    </el-row>
                    <el-row>
                        <el-steps :active="random()" finish-status="success" style="flex-grow: 1;">
                            <el-step v-for="i in project_length" :title="gettitle(i)"
                                @click="jumpToDetail(o, projectId, i)" />
                        </el-steps>
                    </el-row>
                </el-card>
            </div>
        </div>

        <div class="right_aside">

        </div>
    </main>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import router from '@/router'
import { useRoute } from 'vue-router';
import { Search } from '@element-plus/icons-vue'
import * as echarts from 'echarts'

const Route = useRoute()
const projectId = Route.params.projectId
const project_length = ref(3)
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
    // console.log(studentId, projectId);
    await router.push({
        name: 'ProjectStudentDetail',
        params: {
            studentId: studentId,
            projectId: projectId,
            stepNum: stepNum,
        }
    })
}

const search_input = ref('')



const pieChartData = [
    { value: 1, name: '步骤1' },
    { value: 3, name: '步骤2' },
    { value: 8, name: '步骤3' },
    { value: 11, name: '步骤4' },
    { value: 10, name: '步骤5' },
    { value: 7, name: '步骤6' },
    { value: 5, name: '步骤7' },
    { value: 0, name: '步骤8' },
]
const pieOption = {
    series: [
        {
            type: 'pie',
            data: pieChartData,
        }
    ]
};


onMounted(() => {
    const pieChart = echarts.init(document.getElementById("pieChart"));
    pieChart.setOption(pieOption)
    // console.log("获取到的参数", Route.params.projectId);
})
</script>

<style scoped>
main {
    width: 100%;
    height: 100%;
    display: flex;
}

.aside {
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 200px;
    /* text-align: center; */
    display: flex;
    min-width: 200px;
}

.left_text {
    text-align: center;
}


.content_main {
    /* height: 100%; */
    flex-basis: 1000px;
    padding-top: 50px;
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
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 200px;
    min-width: 200px;
}
</style>