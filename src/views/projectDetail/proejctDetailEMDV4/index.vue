<template>
    <div class="text-sm mt-1 space-y-6">
        <div class="flex items-center justify-between ">
            <div class="flex justify-center items-center  text-gray-700 flex-1 min-w-[200px]">
                <div class="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                    <font-awesome-icon icon="fas fa-calendar-plus" class="text-blue-600"></font-awesome-icon>
                </div>
                <div>
                    <div class=" text-gray-500">创建时间</div>
                    <div class="font-medium">{{ projectInfo.createTime }}</div>
                </div>
            </div>

            <div class="flex justify-center items-center  text-gray-700 flex-1 min-w-[200px]">
                <div class="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-3">
                    <font-awesome-icon icon="fas fa-play-circle" class="text-green-600"></font-awesome-icon>
                </div>
                <div>
                    <div class=" text-gray-500">开始时间</div>
                    <div class="font-medium">{{ projectInfo.startTime }}</div>
                </div>
            </div>

            <div class="flex justify-center items-center  text-gray-700 flex-1 min-w-[200px]">
                <div class="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                    <font-awesome-icon icon="fas fa-flag-checkered" class="text-purple-600"></font-awesome-icon>
                </div>
                <div>
                    <div class=" text-gray-500">结束时间</div>
                    <div class="font-medium">{{ projectInfo.endTime }}</div>
                </div>
            </div>
        </div>
        <div class="bg-gray-200 h-[0.5px]"></div>
        <div class="flex justify-around items-center space-x-6">
            <div class="w-1/3 flex flex-col">
                <span class=" mb-1">查看实验</span>
                <el-select v-model="filterParams.ptId" @change="handleChangeCurrentPtId" placeholder="请选择实验">
                    <el-option v-for="(item, i) in ptIdOptions" :key="i" :label="item.taskName"
                        :value="item.ptId"></el-option>
                </el-select>
            </div>
            <div class="w-1/3 flex flex-col">
                <span class=" mb-1">状态筛选</span>
                <el-select v-model="filterParams.status" placeholder="请选择状态" @change="handleStatusChange" clearable>
                    <el-option v-for="(item, i) in statusOptions" :key="i" :label="item.label"
                        :value="item.value"></el-option>
                </el-select>
            </div>
            <div class="w-1/3 flex flex-col">
                <span class=" mb-1">搜索学生</span>
                <el-input v-model="filterParams.text" @input="debounceHandleChange" placeholder="姓名或学号"
                    prefix-icon="Search"></el-input>
            </div>
        </div>

        <div class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
            <div class="card-hover bg-blue-100/30 overflow-hidden rounded-lg shadow fade-in opacity-100">
                <div class="p-5">
                    <div class="flex items-center">
                        <div class="flex-shrink-0">
                            <div class="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                                <font-awesome-icon icon="fas fa-user-graduate"
                                    class="text-blue-600"></font-awesome-icon>
                            </div>
                        </div>
                        <div class="ml-5">
                            <div class=" font-medium text-gray-600">总学生数</div>
                            <div class="text-2xl font-semibold text-blue-600">
                                {{ cardInfo.stuNum }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card-hover bg-green-100/30 overflow-hidden rounded-lg shadow fade-in opacity-100"
                style="animation-delay: 0.1s;">
                <div class="p-5">
                    <div class="flex items-center">
                        <div class="flex-shrink-0">
                            <div class="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                                <font-awesome-icon icon="fas fa-check-circle"
                                    class="text-green-600"></font-awesome-icon>
                            </div>
                        </div>
                        <div class="ml-5">
                            <div class=" font-medium text-gray-600">已完成</div>
                            <div class="text-2xl font-semibold text-green-600">{{ cardInfo.doneNum }}</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card-hover bg-yellow-100/30 overflow-hidden rounded-lg shadow fade-in opacity-100"
                style="animation-delay: 0.2s;">
                <div class="p-5">
                    <div class="flex items-center">
                        <div class="flex-shrink-0">
                            <div class="h-10 w-10 rounded-full bg-yellow-100 flex items-center justify-center">
                                <font-awesome-icon icon="fas fa-spinner" class="text-yellow-600"></font-awesome-icon>
                            </div>
                        </div>
                        <div class="ml-5">
                            <div class=" font-medium text-gray-600">进行中</div>
                            <div class="text-2xl font-semibold text-yellow-600">{{ cardInfo.doingNum }}</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card-hover bg-gray-100/30 overflow-hidden rounded-lg shadow fade-in opacity-100"
                style="animation-delay: 0.3s;">
                <div class="p-5">
                    <div class="flex items-center">
                        <div class="flex-shrink-0">
                            <div class="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
                                <font-awesome-icon icon="fas fa-clock" class="text-gray-600"></font-awesome-icon>
                            </div>
                        </div>
                        <div class="ml-5">
                            <div class=" font-medium text-gray-600">未开始</div>
                            <div class="text-2xl font-semibold text-gray-600">{{ cardInfo.notStartedNum }}</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card-hover bg-indigo-100/30 overflow-hidden rounded-lg shadow fade-in opacity-100"
                style="animation-delay: 0.4s;">
                <div class="p-5">
                    <div class="flex items-center">
                        <div class="flex-shrink-0">
                            <div class="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center">
                                <font-awesome-icon icon="fas fa-chart-line"
                                    class=" text-indigo-600"></font-awesome-icon>
                            </div>
                        </div>
                        <div class="ml-5">
                            <div class=" font-medium text-gray-600">完成率</div>
                            <div class="text-2xl font-semibold text-indigo-600" id="completionRate">{{
                                cardInfo.rageOfDoneNum }}% </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <el-table :data="courseStudents">
            <el-table-column label="学生信息" align="center" width="200">
                <template #default="{ row }">
                    <div class="flex">
                        <div
                            class="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-medium mr-3">
                            {{ row.stuName.substring(0, 1) }}
                        </div>
                        <div class="flex flex-col items-start">
                            <div>{{ row.stuName }}</div>
                            <div>{{ row.stuId }}</div>
                        </div>
                    </div>
                </template>
            </el-table-column>
            <template v-for="(task, i) in tasks" :key="i">
                <el-table-column :label="task.ptName" align="center" v-if="isCourse">
                    <el-table-column label="状态" align="center">
                        <template #default="{ row }">
                            <div v-if="isCourse && row.tasks">
                                <div class="flex justify-center items-center space-x-1">
                                    <div v-for="(stage, j) in row.tasks[i].stageList" :key="j" @click="handleOpen(row)"
                                        class="w-[8px] h-[8px] rounded-full hover:cursor-pointer"
                                        :class="getStageClass(stage.stageStatus)">
                                    </div>
                                </div>
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column label="分数" align="center" v-if="isCourse">
                        <template #default="{ row }">
                            <div v-if="isCourse && row.tasks">
                                <span :class="getGradeClass(row.tasks[i])" class="text-base"
                                    @click="clickScore(row, i)">
                                    {{ row.tasks[i].ptScore }}
                                </span>
                                <span class="mx-[2px]">/</span>
                                <span>{{ row.tasks[i].ptTotalScore }}</span>
                            </div>
                        </template>
                    </el-table-column>
                </el-table-column>
            </template>

            <el-table-column label="总分" align="center" prop="psScore" v-if="isCourse"></el-table-column>

            <!-- 学生实验列表 -->
            <template v-for="(stage, i) in taskStageList" :key="i">
                <el-table-column :label="stage.stageName" v-if="!isCourse" align="center">
                    <el-table-column v-for="(block, j) in taskStageList[i].stageBlockList" :label="`${<number>j + 1}`"
                        :key="j" align="center">
                        <template #default="{ row }">
                            <div class="flex justify-center items-center" @click="handleOpen(row, row.pstInfo.ptId)">
                                <div :class="getTaskRowStageInfo(row, i, j).bg"
                                    class="w-[20px] h-[20px] rounded-full text-white flex justify-center items-center">
                                    {{ <number>j + 1 }}</div>
                            </div>
                        </template>

                    </el-table-column>
                </el-table-column>
            </template>
            <el-table-column label="分数" v-if="!isCourse" align="center">
                <template #default="{ row }">
                    <div>
                        <span :class="getTaskRowInfo(row.pstInfo).grade" class="text-base">
                            {{ getTaskRowInfo(row.pstInfo).ptScore }}</span>
                        <span class="mx-[2px]">/</span>
                        <span>{{ getTaskRowInfo(row.pstInfo).ptTotalScore }}</span>
                    </div>
                </template>
            </el-table-column>
            <el-table-column label="状态" v-if="!isCourse" align="center">
                <template #default="{ row }">
                    <div class="flex justify-center items-center space-x-1">
                        <div class="rounded-full px-2 py-1" :class="getTaskRowInfo(row.pstInfo).bg">
                            {{ getTaskRowInfo(row.pstInfo).label }}
                        </div>
                    </div>
                </template>
            </el-table-column>
            <el-table-column label="查看报告" v-if="!isCourse" align="center">
                <template v-slot="{ row }">
                    <div class="flex justify-center items-center">
                        <el-button type="primary" size="small" @click="handleViewReport(row)">查看报告</el-button>
                    </div>
                </template>
            </el-table-column>
        </el-table>

        <div class="flex justify-between items-center">
            <el-pagination v-model:current-page="page.current" v-model:page-size="page.size"
                :page-sizes="[10, 20, 30, 40, 50]" :size="page.size" layout="total, sizes, prev, pager, next, jumper"
                :total="page.total" total-text="共" @size-change="handleSizeChange"
                @current-change="handleCurrentChange" />
            <div class="flex justify-center items-center space-x-2">
                <span>状态指示:</span>
                <span><span class="inline-block w-[10px] h-[10px] bg-green-500 rounded-full mr-1"></span>已完成</span>
                <span><span class="inline-block w-[10px] h-[10px] bg-yellow-500 rounded-full mr-1"></span>进行中</span>
                <span><span class="inline-block w-[10px] h-[10px] bg-gray-500 rounded-full mr-1"></span>未开始
                </span>
            </div>
        </div>

        <student-drawer ref="studnetDrawerRef"></student-drawer>
    </div>
</template>

<script setup lang="ts">
// TODO: 重构页面
import { emdV4MonitorInfo, getCourseEmdV4StudentList, getTaskEmdV4StudentList, getEmdV4StudentDetail, getKeyWordsStudentList } from '@/apis/emdV4ProjectDetail'
import { formatDate } from '@/utils/util'
import { debounce } from 'lodash'
import StudentDrawer from './studentDrawer.vue'

const route = useRoute()
const projectId = route.params.projectId

const projectInfo = ref({
    createTime: '',
    startTime: '',
    endTime: '',
})

const cardInfo = ref({
    stuNum: 0,
    doingNum: 0,
    doneNum: 0,
    notStartedNum: 0,
    rageOfDoneNum: 0,
})

const filterParams = ref({
    ptId: '',
    status: '',
    text: '',
})

const isCourse = computed(() => {
    return filterParams.value.ptId === ''
})

const ptIdOptions = ref([])
const statusOptions = ref([
    { label: '未开始', value: 0 },
    { label: '进行中', value: 1 },
    { label: '已完成', value: 2 },
])

emdV4MonitorInfo(projectId).then(res => {
    if (res.state == 200) {
        cardInfo.value.stuNum = res.data.stuNum

        projectInfo.value.createTime = formatDate(res.data.createTime)
        projectInfo.value.startTime = formatDate(res.data.startTime)
        projectInfo.value.endTime = formatDate(res.data.endTime)

        res.data.taskInfoList.forEach(_ => {
            if (_.ptId == null) {
                _.ptId = ''
            }
        })

        ptIdOptions.value = res.data.taskInfoList
        handleChangeCurrentPtId(filterParams.value.ptId)
    }
})

const handleChangeCurrentPtId = (ptId) => {
    // console.log(ptIdOptions.value)
    const item = ptIdOptions.value.find(_ => _.ptId === ptId)
    if (item) {
        setCardInfo(item)
    }
    setFirstPage()

    getCommonList()
}

const setCardInfo = (ptIdOptionItem) => {
    cardInfo.value.doingNum = ptIdOptionItem.doingNum
    cardInfo.value.doneNum = ptIdOptionItem.doneNum
    cardInfo.value.notStartedNum = ptIdOptionItem.notStartedNum
    cardInfo.value.rageOfDoneNum = ptIdOptionItem.rageOfDoneNum
}


// 获取学生列表 课程维度 实验维度
const page = ref({
    current: 1,
    size: 20,
    total: 0,
})

// 学生课程表头
const tasks = ref([])
// 学生任务表头
const task = ref({})
const taskStageList = ref([])
const courseStudents = ref([])

const getList = () => {
    let parms = {
        ptId: '',
        status: '',
        projectId,
        page: page.value.current,
        pageSize: page.value.size
    }
    if (filterParams.value.status !== '') {
        parms.status = filterParams.value.status
    }
    getCourseEmdV4StudentList(parms).then(res => {
        if (res.state == 200) {
            dealwithCourseList(res)
        }
    })
}

getList()



const setFirstPage = () => {
    page.value.current = 1
}

const handleSizeChange = (size) => {
    setFirstPage()
    page.value.size = size
    getCommonList()
}

const handleCurrentChange = (current) => {
    page.value.current = current
    getCommonList()
}

// 搜索过滤 
const handleStatusChange = (v) => {
    setFirstPage()
    getCommonList()
}

const getCommonList = () => {
    if (filterParams.value.text.trim() == '') {
        if (isCourse.value) {
            getList()
        } else {
            getTaskList()
        }
    } else {
        getTextStudentList()
    }

}

const getCourseRowInfo = (task) => {
    let obj = {
        bg: '',
    }
}

const getStageClass = (stageStatus) => {
    if (stageStatus === 'DONE') return 'bg-green-500';
    if (stageStatus === 'DOING') return 'bg-yellow-500';
    return 'bg-gray-500';
}

const getTaskRowInfo = (pstInfo) => {
    let obj = {
        bg: '',
        label: '',
        grade: '',
        ptScore: '',
        ptTotalScore: '',
    }
    if (pstInfo) {
        if (pstInfo.status === 'DONE') {
            obj.bg = 'bg-green-500/20 text-green-500'
            obj.label = '完成'
        } else if (pstInfo.status === 'DOING') {
            obj.bg = 'bg-yellow-500/20 text-yellow-500'
            obj.label = '进行中'
        } else {
            obj.bg = 'bg-gray-500/20 text-gray-500'
            obj.label = '未开始'
        }
    }

    if (pstInfo) {
        obj.ptScore = pstInfo.ptScore
        obj.ptTotalScore = pstInfo.ptTotalScore
        let score = pstInfo.ptScore / pstInfo.ptTotalScore * 100
        if (score >= 90) obj.grade = 'text-green-500'
        if (score >= 80) obj.grade = 'text-blue-500'
        if (score >= 70) obj.grade = 'text-yellow-500'
        if (score >= 60) obj.grade = 'text-orange-500'
        obj.grade = 'text-red-500'
    }
    return obj
}

const getGradeClass = (item) => {
    let score = item.ptScore / item.ptTotalScore * 100
    if (score >= 90) return 'text-green-500'
    if (score >= 80) return 'text-blue-500'
    if (score >= 70) return 'text-yellow-500'
    if (score >= 60) return 'text-orange-500'
    return 'text-red-500'
}

const getTaskRowStageInfo = (row, i, j) => {
    let res = {
        index: j + 1,
        status: '',
        bg: '',
    }
    if (row.pstInfo) {
        let step = row.pstInfo.stageList[i]
        let block = step.stageBlockList[j]
        res.status = block.status
        res.bg = res.status === 'DONE' ? 'bg-green-500' : res.status === 'DOING' ? 'bg-yellow-500' : 'bg-gray-500'
    }

    return res;
}

const handleViewReport = (row) => {

}

// // 获取学生详情
// const getStudentDetail = (psId) => {
//     console.log(psId)
//     return

//     getEmdV4StudentDetail(projectId, psId).then(res => {
//         if (res.state == 200) {
//             // console.log(res.data)
//         }
//     })
// }

// 获取任务列表
const getTaskList = () => {
    let parms = {
        ptId: '',
        status: '',
        projectId,
        page: page.value.current,
        pageSize: page.value.size
    }

    if (filterParams.value.status !== '') {
        parms.status = filterParams.value.status
    }
    if (filterParams.value.ptId !== '') {
        parms.ptId = filterParams.value.ptId
    }
    getTaskEmdV4StudentList(parms).then(res => {
        if (res.state == 200) {
            dealwithTaskList(res)
        }
    })
}

const getTextStudentList = () => {
    let params = {
        ptId: '',
        status: '',
        projectId,
        page: page.value.current,
        pageSize: page.value.size,
        keyword: filterParams.value.text,
    }
    if (filterParams.value.ptId !== '') {
        params.ptId = filterParams.value.ptId
    }
    getKeyWordsStudentList(params).then(res => {
        if (res.state == 200) {
            if (isCourse.value) {
                dealwithCourseList(res)
            } else {
                dealwithTaskList(res)
            }
        }
    })
}

const handleChange = () => {
    setFirstPage()
    if (filterParams.value.text.trim() == '') {
        getCommonList()
    } else {
        getTextStudentList()
    }
}

const debounceHandleChange = debounce(handleChange, 500)

const dealwithCourseList = (res) => {
    tasks.value = res.data.tasks || []
    courseStudents.value = res.data.stuMonitors || []
    page.value.total = res.data.total
}

const dealwithTaskList = (res) => {
    task.value = res.data.task
    taskStageList.value = res.data.task.stageList || []
    courseStudents.value = res.data.stuMonitors || []
    page.value.total = res.data.total
}

const studnetDrawerRef = ref(null)

const handleOpen = (item, ptId) => {
    console.log('open drawer ...', item)
    let params = {
        projectId: projectId,
        psId: item.psId,
        isCourse: isCourse.value,
        ptId: ptId,
    }
    studnetDrawerRef.value.open(params)
}

const clickScore = (row, i) => {
    console.log("1111")
    console.log(row)

}
</script>

<style lang="scss" scoped>
:deep(.el-drawer__header) {
    margin-bottom: 0;

    @apply border-b-gray-400 border-b-[0.5px] pb-4;
    /* Directly control body padding */
}

:deep(.el-drawer__body) {
    // margin-top: 16px;
    padding: 0;
    /* Directly control body padding */
}
</style>