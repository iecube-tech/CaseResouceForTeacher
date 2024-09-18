<template>
    <div>
        <el-descriptions :title="thisProject.projectName">
            <el-descriptions-item label="创建时间">{{ formatDate(thisProject.createTime) }}</el-descriptions-item>
            <el-descriptions-item label="开始时间">{{ formatDate(thisProject.startTime) }}</el-descriptions-item>
            <el-descriptions-item label="结束时间">{{ formatDate(thisProject.endTime) }}</el-descriptions-item>
        </el-descriptions>
    </div>

    <el-row style="margin-top: 20px">
        <el-steps align-center style="width:100%">
            <el-step v-for="(task, i) in projectTaskList" :title="'实验' + task.taskNum" :status="getStatus(task.taskNum)"
                @click="whichTask(task.taskNum)" />
        </el-steps>
    </el-row>
    <div style="margin-top: 20px;">
        <el-table :data="showData" stripe :default-sort="{ prop: 'studentId', order: 'descending' }"
            :header-cell-style="{ fontWeight: 'bold', textAlign: 'center' }" style="min-height: 800px;"
            @row-click="getCurttenTask">
            <el-table-column label="姓名/学号">
                <template #default="scope">
                    <div style="text-align: center;">
                        <span>{{ scope.row.studentName }}</span>
                        <br />
                        <span>{{ scope.row.studentId }}</span>
                    </div>
                </template>
            </el-table-column>
            <el-table-column label="实验用时">
                <template #default="scope">
                    <div :style="'text-align: center;'">
                        <span :style="getTimeStyle(scope.row.id)">
                            {{ tableShowTime(tableTotalTime(scope.row.taskOperationsList)) }}
                        </span>
                    </div>
                </template>
            </el-table-column>
            <el-table-column v-for="(item, i) in allOperations" :label="item + '/次'">
                <template #default="scope">
                    <div :style="'text-align: center;'">
                        <span :style="getCountStyle(item, scope.row.id)">
                            {{ tableShowCount(item, scope.row.taskOperationsList) }}
                        </span>
                    </div>
                </template>
            </el-table-column>
        </el-table>
    </div>

</template>

<script setup lang="ts">
import { ref, onBeforeMount } from 'vue';
import { useRoute } from 'vue-router';
import router from '@/router'
import { dayjs } from 'element-plus';
import { Project } from '@/apis/project/project.js'
import { getProjectLogCompare } from '@/apis/iecubeDevice/compare/compare.js'
import { getProjectBriefTask } from '@/apis/task/getTaskBriefVo.js'

const route = useRoute();
const projectId = ref(route.params.projectId)
const thisProject = ref({
    projectName: '',
    createTime: undefined,
    startTime: undefined,
    endTime: undefined,
})
const projectTaskList = ref()
const compareList = ref()
const currentTask = ref(0)
const allOperations = [
    'OSC软面板', 'DCPower软面板',
    'FGen软面板', 'DMM软面板',
    'SMU软面板', 'IV测试仪软面板',
    'CV曲线软面板', 'DIO软面板'
]
const showData = ref([])

const formatDate = (time: Date) => {
    return dayjs(time).format('YYYY年MM月DD日 HH:mm')
}

const whichTask = (taskNum) => {
    currentTask.value = taskNum
    praseForEachPanel()
}

const getStatus = (taskNum) => {
    if (taskNum != currentTask.value) {
        return 'process'
    } else {
        return 'finish'
    }
}
const getCurttenTask = (row) => {
    return
    toDetail(row.id, currentTask.value)
}

const toDetail = async (studentId, stepNum) => {
    await router.push({
        name: 'ProjectStudentDetail',
        params: {
            studentId: studentId,
            projectId: projectId.value,
            stepNum: stepNum,
        }
    })


}

const tableTotalTime = (taskOperationsList) => {
    for (let i = 0; i < taskOperationsList.length; i++) {
        if (taskOperationsList[i].taskNum == currentTask.value) {
            return taskOperationsList[i].time
        }
    }
    return null
}

const tableShowTime = (milliseconds: number) => {
    if (milliseconds) {
        let totalSeconds = Math.floor(milliseconds / 1000);

        // 计算小时、分钟和秒
        let hours = Math.floor(totalSeconds / 3600);
        totalSeconds %= 3600;
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = totalSeconds % 60;
        let result = ''
        if (hours == 0) {
            result = minutes + '分' + seconds + '秒'
        } else {
            result = hours + '小时' + minutes + '分' + seconds + '秒'
        }
        return result
    }
    return null
}

const tableShowCount = (panel: string, taskOperationsList) => {
    for (let i = 0; i < taskOperationsList.length; i++) {
        if (taskOperationsList[i].taskNum == currentTask.value) {
            if (taskOperationsList[i].operations) {
                for (let j = 0; j < taskOperationsList[i].operations.length; j++) {
                    if (panel == taskOperationsList[i].operations[j].name) {
                        return taskOperationsList[i].operations[j].count
                    }
                }
            }

        }
    }
    return null
}

const totalTime = (timeList) => {
    if (timeList) {
        var total = 0;
        for (let i = 0; i < timeList.length; i++) {
            let date1 = new Date(timeList[i][0])
            let date2 = new Date(timeList[i][1])
            total = total + (date2.getTime() - date1.getTime());
        }
    }
    return total
}
const eachPanel = ref([])  // 当前实验下每个面板的学生操作次数
const praseForEachPanel = () => {
    eachPanel.value = []
    let panel = {
        name: '',
        operationCount: []
    }
    for (let i = 0; i < allOperations.length; i++) {
        panel.name = allOperations[i]
        eachPanel.value.push(JSON.parse(JSON.stringify(panel)))
    }
    let currentTaskStudentOperations = []
    let taskStudentOperation = {
        id: null,
        operations: null
    }
    for (let i = 0; i < showData.value.length; i++) {
        for (let j = 0; j < showData.value[i].taskOperationsList.length; j++) {
            if (showData.value[i].taskOperationsList[j].taskNum == currentTask.value) {
                taskStudentOperation.id = showData.value[i].id
                taskStudentOperation.operations = showData.value[i].taskOperationsList[j].operations
                currentTaskStudentOperations.push(JSON.parse(JSON.stringify(taskStudentOperation)))
            }
        }
    }
    for (let i = 0; i < currentTaskStudentOperations.length; i++) {
        if (currentTaskStudentOperations[i].operations) {
            for (let j = 0; j < currentTaskStudentOperations[i].operations.length; j++) {
                for (let k = 0; k < eachPanel.value.length; k++) {
                    if (currentTaskStudentOperations[i].operations[j].name == eachPanel.value[k].name) {
                        eachPanel.value[k].operationCount.push({ id: currentTaskStudentOperations[i].id, value: currentTaskStudentOperations[i].operations[j].count })
                    }
                }
            }
        }

    }
    console.log(eachPanel.value)
}

const praseCompare = () => {
    for (let i = 0; i < compareList.value.length; i++) {
        let studentOperations = {
            id: compareList.value[i].id,
            studentId: compareList.value[i].studentId,
            studentName: compareList.value[i].studentName,
            taskOperationsList: []
        }
        for (let j = 0; j < compareList.value[i].tasksOperations.length; j++) {
            let operation = {
                taskNum: compareList.value[i].tasksOperations[j].taskNum,
                pstId: compareList.value[i].tasksOperations[j].pstId,
                time: totalTime(JSON.parse(compareList.value[i].tasksOperations[j].times)),
                operations: JSON.parse(compareList.value[i].tasksOperations[j].operations)
            }
            studentOperations.taskOperationsList.push(JSON.parse(JSON.stringify(operation)))
        }
        showData.value.push(JSON.parse(JSON.stringify(studentOperations)))
    }
    praseForEachPanel()
    console.log(showData)
}

function isMaxOrMinValue(arr, id) {
    // 找到对应id的value值
    const value = arr.find(item => item.id === id)?.value;
    if (value === undefined) {
        console.error(`ID ${id} 不存在于数组中`);
        return false;
    }

    // 获取数组中所有value值的数组
    const values = arr.map(item => item.value);

    // 检查是否为最大值或最小值
    const maxValue = Math.max(...values);
    const minValue = Math.min(...values);

    return value === maxValue || value === minValue;
}

const getTimeStyle = (id) => {
    // 获取所有的时间
    let allShowTimes = []
    let showTimesItem = {
        id: null,
        value: null
    }
    for (let i = 0; i < showData.value.length; i++) {
        for (let j = 0; j < showData.value[i].taskOperationsList.length; j++) {
            if (showData.value[i].taskOperationsList[j].taskNum == currentTask.value && showData.value[i].taskOperationsList[j].time) {
                showTimesItem.id = showData.value[i].id
                showTimesItem.value = showData.value[i].taskOperationsList[j].time
                allShowTimes.push(JSON.parse(JSON.stringify(showTimesItem)))
            }
        }
    }
    if (allShowTimes.length < 2) {
        return ''
    }
    // 找到对应id的value值
    const value = allShowTimes.find(item => item.id === id)?.value;
    if (value === undefined) {
        return '';
    }

    // 获取数组中所有value值的数组
    const values = allShowTimes.map(item => item.value);

    // 检查是否为最大值或最小值
    const maxValue = Math.max(...values);
    const minValue = Math.min(...values);
    if (value === maxValue) {
        return 'color: red;'
    } else if (value === minValue) {
        return 'color: #33b8b9;'
    } else {
        return ''
    }
}
const getCountStyle = (name: string, id: number) => {
    const studentsOperation = eachPanel.value.find(item => item.name === name)?.operationCount;
    if (!studentsOperation || studentsOperation.length < 2) {
        return ''
    }
    const value = studentsOperation.find(item => item.id === id)?.value;
    if (value === undefined) {
        return '';
    }

    // 获取数组中所有value值的数组
    const values = studentsOperation.map(item => item.value);

    // 检查是否为最大值或最小值
    const maxValue = Math.max(...values);
    const minValue = Math.min(...values);
    if (value === maxValue) {
        return 'color: red;'
    } else if (value === minValue) {
        return 'color: #33b8b9;'
    } else {
        return ''
    }
}


onBeforeMount(() => {
    Project(projectId.value).then(res => {
        if (res.state == 200) {
            thisProject.value = res.data
            //console.log(thisProject)
        }
    })

    getProjectBriefTask(projectId.value).then(res => {
        if (res.state == 200) {
            projectTaskList.value = res.data
            currentTask.value = projectTaskList.value[0].taskNum
            // console.log(projectTaskList)
        }
    })
    getProjectLogCompare(projectId.value).then(res => {
        if (res.state == 200) {
            compareList.value = res.data
            // console.log(compareList)
            praseCompare();

        }
    })
})

</script>
<style scoped></style>