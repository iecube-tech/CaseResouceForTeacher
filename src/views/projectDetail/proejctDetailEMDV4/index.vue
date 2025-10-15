<template>
    <!-- EMDV4ProejctStudentList -->
    <div>
        <el-descriptions :title="thisProject.projectName">
            <el-descriptions-item label="创建时间">{{ formatDate(thisProject.createTime) }}</el-descriptions-item>
            <el-descriptions-item label="开始时间">{{ formatDate(thisProject.startTime) }}</el-descriptions-item>
            <el-descriptions-item label="结束时间">{{ formatDate(thisProject.endTime) }}</el-descriptions-item>
            <el-descriptions-item label="参与人数">
                <el-tag size="small">
                    {{ participations }}人
                </el-tag>
            </el-descriptions-item>
            <el-descriptions-item label="完成人数"><el-tag size="small">{{ downs }}人</el-tag></el-descriptions-item>
        </el-descriptions>
    </div>

    <el-row class="my-4 px-4">
        <el-input :prefix-icon="Search" placeholder="输入学号或姓名搜索学生" v-model="search_input" @change="search()"
            @keyup.enter="search()">
            <template #append>
                <el-button :icon="Close" @click="searchReset()" />
            </template>
        </el-input>
    </el-row>
    <keep-alive>
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
            <el-table-column label="-" width="50" v-if="!thisProject.emdCourse">
                <template #default="scope">
                    <el-popover placement="left-start" trigger="hover" content="下载学生报告">
                        <template #reference>
                            <!-- <el-link type="primary" :underline="false"
                                :href="'/dev-api/project/student_report?projectId=' + projectId + '&studentId=' + scope.row.id">
                                <el-icon :size="18">
                                    <Download />
                                </el-icon>
                            </el-link> -->
                        </template>
                    </el-popover>
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
    </el-dialog>
</template>

<script setup lang="ts">
import { onBeforeMount, onUpdated, ref, watch } from 'vue'
import router from '@/router'
import { useRoute, onBeforeRouteLeave } from 'vue-router';
import { Download, Search, Close } from '@element-plus/icons-vue'
import { Project } from '@/apis/project/project.js'
import { ElMessage } from 'element-plus';
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
    console.log(data.value)
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
        // await router.push({
        //     name: 'EMDReadover',
        //     params: {
        //         projectId: thisProject.value.id,
        //         studentId: studentId,
        //         taskId: taskId
        //     }
        // })
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
        //学生成绩散点图数据
        // 学生成绩直方图
        // let studentTaskDown = 0
        // for (let j = 0; j < data.value[i].studentTaskList.length; j++) {
        //     if (data.value[i].studentTaskList[j].taskStatus == 1) {
        //         doing++
        //     }
        //     if (data.value[i].studentTaskList[j].taskStatus >= 2) {
        //         studentTaskDown++
        //     }
        // }
        if (data.value[i].status >= 1) {
            downs.value++
        }
    }
    // requestStatus.value = 1
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

main {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}

.project {
    width: 100%;
    display: flex;
    padding: 20px 4vw;
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
    width: 100%;
    padding: 20px;
    background-color: #fff;
    /* margin-left: 10px; */
    /* min-height: 800px; */
}

/* .input-with-select {
    height: 40px;
} */

.student_project {
    height: 150px;
    margin-top: 30px;
    margin-bottom: 10px;
}
</style>