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
                                    <div v-for="(stage, j) in row.tasks[i].stageList" :key="j"
                                        @click="getStudentDetail(row.tasks[i].psId)"
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
                                <span :class="getGradeClass(row.tasks[i])" class="text-base">{{ row.tasks[i].ptScore
                                    }}</span>
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
                    <el-table-column v-for="(block, j) in taskStageList[i].stageBlockList" :label="`${j + 1}`" :key="j"
                        align="center">
                        <template #default="{ row }">
                            <div class="flex justify-center items-center">
                                <div :class="getTaskRowStageInfo(row, i, j).bg"
                                    class="w-[20px] h-[20px] rounded-full text-white flex justify-center items-center">
                                    {{ j + 1 }}</div>
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

    </div>






    <!--     <keep-alive>
        <el-table :data="showData" :default-sort="{ prop: 'studentId', order: 'descending' }" style="min-height: 800px;"
            stripe :header-cell-style="{ fontWeight: 'bold', textAlign: 'center' }" @row-dblclick="getCurttenTask">
            <el-table-column label="姓名/学号" width="110">
                <template #default="scope">
                    <div style="text-align: center;">
                        <span>{{ scope.row.stuName }}</span>
                        <br />
                        <span>{{ scope.row.stuId }}</span>
                    </div>
                </template>
</el-table-column>
<el-table-column label="任务进度">
    <template #default="scope">
                    <el-steps align-center>
                        <el-step v-for="(PST, i) in scope.row.studentTaskList"
                            :title="getStepTitle(PST.score, PST.totalScore)" :status="getStatus(PST.status)"
                            @click="toScoreCheck(PST.id)" />
                    </el-steps>
                </template>
</el-table-column>
<el-table-column label="总分" width="80">
    <template #default="scope">
                    <div style="text-align: center;">
                        <span>{{ scope.row.score }}</span>
                    </div>
                </template>
</el-table-column>
</el-table>
</keep-alive>
<el-row style="margin-top: 20px; text-align: center; display: flex; justify-content: center; align-items: center;">
    <el-pagination v-model:current-page="currentPage" v-model:page-size="pageSize" :page-sizes="[10, 20, 40, 60]"
        :small="true" :background="true" layout="total, sizes, prev, pager, next, jumper" :total="participations"
        @size-change="handleSizeChange" @current-change="handleCurrentChange" />
</el-row>

<el-dialog v-model="dialogTableVisible" title="添加学生">
    <el-table height="400" :data="studentList" ref="multipleTableRef" @selection-change="handleSelectionChange">
        <el-table-column type="selection" :selectable="selectable" width="40" />
        <el-table-column type="index" width="40" />
        <el-table-column prop="studentId" sortable label="学号" />
        <el-table-column prop="studentName" label="姓名" />
        <el-table-column prop="studentClass" label="班级" :filters="classList" :filter-method="filterHandler" />
        <el-table-column prop="collage" label="学院" />
        <el-table-column prop="major" label="专业" />
        <el-table-column prop="studentGrade" label="年级" />
    </el-table>
    <template #footer>
            <span class="dialog-footer">
                <el-button @click="dialogTableVisible = false">取消</el-button>
                <el-button type="primary" @click="addStudents()">
                    确定
                </el-button>
            </span>
        </template>
</el-dialog> -->
</template>

<script setup lang="ts">
// TODO: 重构页面
import { emdV4MonitorInfo, getCourseEmdV4StudentList, getTaskEmdV4StudentList, getEmdV4StudentDetail, getKeyWordsStudentList } from '@/apis/emdV4ProjectDetail'
import { formatDate } from '@/utils/util'
import { debounce } from 'lodash'

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

// 获取学生详情
const getStudentDetail = (psId) => {
    console.log(psId)
    return

    getEmdV4StudentDetail(projectId, psId).then(res => {
        if (res.state == 200) {
            // console.log(res.data)
        }
    })
}

// 获取任务列表
const getTaskList = () => {
    let parms = {
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

/* import { useRoute, onBeforeRouteLeave } from 'vue-router';
import { Project } from '@/apis/project/project.js'
import { dayjs } from 'element-plus';
import { projectTableDataStore } from '@/stores/projectTableData.js'
import { type TableColumnCtx } from 'element-plus';
import { getProjectStudentList } from '@/apis/emdv4Proejct/projectStudent';
import { emitter } from '@/ts/eventBus';
import { projecv4AddStudents } from "@/apis/project/publish.js";
import { getAllStudents } from '@/apis/student/all.js';

const props = defineProps({
    addStudent: Number
})

const TableDataStore = projectTableDataStore()

const Route = useRoute()
const projectId = Number(Array.isArray(Route.params.projectId) ? Route.params.projectId[0] : Route.params.projectId)
const participations = ref(0)
const downs = ref(0)
const search_input = ref('')
const data = ref([])
const showData = ref([])
const currentPage = ref(1)
const pageSize = ref(20)
const thisProject = ref({
    id: null,
    projectName: '',
    createTime: undefined,
    startTime: undefined,
    endTime: undefined,
    mdCourse: null,
    emdCourse: null,
})

interface Student {
    id: number
    studentId: string
    studentName: string
    studentGrade: string
    studentClass: string
    major: string
    collage: string
}

// 完成率
const completionRate = computed(()=>{
    if(participations.value == 0 || downs.value == 0){
        return 0
    }
    return (downs.value / participations.value * 100).toFixed(2)
})

watch(() => props.addStudent, (newValue) => {
    if (newValue) {
        console.log(newValue)
        toAddStudents();
    }
})

const toAddStudents = async () => {
    if (studentList.value.length && classList.value.length) {
        dialogTableVisible.value = true
        return
    }
    await getAllStudents().then(res => {
        if (res.state == 200) {
            studentList.value = res.data
            let temp = []
            for (let i = 0; i < studentList.value.length; i++) {
                if (!temp.includes(studentList.value[i].studentClass)) {
                    temp.push(studentList.value[i].studentClass)
                }
            }
            for (let j = 0; j < temp.length; j++) {
                classList.value.push({ text: temp[j], value: temp[j] })
            }
        } else {
            ElMessage.error(res.message)
        }
    })
    dialogTableVisible.value = true
}

const dialogTableVisible = ref(false)

const studentList = ref([])

const classList = ref([])

const willAddStudentList = ref([])

const addStudents = () => {
    willAddStudentList.value = multipleSelection.value.map(item => item.id)
    projecv4AddStudents(projectId, willAddStudentList.value).then(res => {
        if (res.state == 200) {
            ElMessage.success("添加成功")
            dialogTableVisible.value = false
            data.value = res.data
            TableDataStore.setData(data.value)
            makeAllData();
        } else {
            ElMessage.error(res.message)
        }
    })
}

const multipleSelection = ref<Student[]>([])

const handleSelectionChange = (val: Student[]) => {
    multipleSelection.value = val
}

const filterHandler = (
    value: string,
    row: Student,
    column: TableColumnCtx<Student>
) => {
    const property = column['property']
    return row[property] === value
}

// const selectable = (row: Student) => ![1, 2].includes(row.id)
const selectable = (row: Student) => !data.value.map(item => item.studentId).includes(row.id)

const requestStatus = ref(0)

const formatDate = (time: Date) => {
    return dayjs(time).format('YYYY年MM月DD日 HH:mm')
}

const handleSizeChange = (val: number) => {
    pageSize.value = val;
    TableDataStore.setPageSize(val);
    currentPage.value = 1;
    showData.value = data.value.slice(currentPage.value - 1, pageSize.value + currentPage.value - 1)
}

const handleCurrentChange = (val: number) => {
    showData.value = data.value.slice((currentPage.value - 1) * pageSize.value, (currentPage.value - 1) * pageSize.value + pageSize.value)
}

const search = () => {
    if (search_input.value == '') {
        searchReset()
        return
    }
    showData.value = []
    for (let i = 0; i < data.value.length; i++) {
        if (data.value[i].stuName.includes(search_input.value) || data.value[i].stuId.includes(search_input.value)) {
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
    toDetail(row.id, thisProject.value.id, stepNum, row.studentTasks[stepNum - 1].pstid)
}

const toDuplicateCheck = () => {
    router.push({
        name: 'duplicateChecking',
    })
}

const toDetail = async (studentId, taskId, stepNum, pstId) => {
    console.log(thisProject.value)
    if (thisProject.value.mdCourse) {
        await router.push({
            name: 'MdocReadover',
            params: {
                projectId: projectId,
                pstId: pstId,
            }
        })
        return
    }
    if (thisProject.value.emdCourse) {

        const url = router.resolve({
            name: 'EMDReadover', params: {
                projectId: thisProject.value.id,
                studentId: studentId,
                taskId: taskId
            }
        }).href;
        window.open(url, '_blank');
        return
    }
    await router.push({
        name: 'ProjectStudentDetail',
        params: {
            studentId: studentId,
            projectId: projectId,
            stepNum: stepNum,
        }
    })
}

const getStatus = (status) => {
    if (status == 0) {
        return 'process'
    }
    if (status >= 1) {
        return 'finish'
    }
}

const getStepTitle = (taskGrade, taskTotalGrade) => {
    if (taskGrade) {
        return taskGrade + "/" + taskTotalGrade
    } else {
        return "0" + "/" + taskTotalGrade
    }
}

const makeAllData = () => {
    showData.value = data.value.slice((currentPage.value - 1) * pageSize.value, (currentPage.value - 1) * pageSize.value + pageSize.value)
    participations.value = data.value.length
    // 当前正在进行的任务人数数据
    let doing = 0
    for (let i = 0; i < data.value.length; i++) {
        if (data.value[i].status >= 1) {
            downs.value++
        }
    }
}

const getData = () => {
    getProjectStudentList(projectId).then(res => {
        if (res.state == 200) {
            data.value = res.data
            TableDataStore.setData(data.value)
            makeAllData();
        } else {
            ElMessage.error("获取数据异常;" + res.message)
        }
    })
}

const getThisProject = () => {
    Project(projectId).then(res => {
        if (res.state == 200) {
            thisProject.value = res.data
            console.log(thisProject)
        }
    })
}

const initData = () => {
    let storeData = TableDataStore.getData();
    pageSize.value = TableDataStore.getPageSize();
    if (storeData != null) {
        data.value = storeData
        makeAllData();
    } else {
        getData();
    }
    if (Route.meta.position) {
        console.log(Route.meta.position)
        setTimeout(() => {
            const position = Route.meta.position as { x: number; y: number } | undefined;
            if (position) {
                window.scrollTo(position.x, position.y);
            }
        }, 100)
    }
    getThisProject();
}

const refreshData = () => {
    getData();
    getThisProject();
}

onBeforeMount(() => {
    if (Route.name === 'EMDV4ProejctDetail') {
        initData()
    }
})

onMounted(() => {
    setTimeout(() => {
        if (Route.name === 'EMDV4ProejctDetail') {
            emitter.on("emdv4ProejctStudentRefesh", refreshData)
        }
    }, 200)
})

onBeforeRouteLeave((to, from, next) => {
    from.meta.savedPosition = {
        x: window.pageXOffset,
        y: window.pageYOffset
    };
    next();
    // console.log(from)
})

const toScoreCheck = (pst: number) => {
    localStorage.removeItem("teacherRedover-" + pst)
    const routePath = router.resolve({
        path: "/emdv4/task/score/" + pst
    })
    window.open(routePath.href, '_blank');
}
 */
</script>

<style lang="scss" scoped></style>