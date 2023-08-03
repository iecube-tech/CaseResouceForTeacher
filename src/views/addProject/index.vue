<template>
    <div class="add-project">
        <pageHeader :route="route" />
        <el-row style="padding: 20px calc(164px + 4.8vw);">
            <el-col :span="15" style="display: flex; flex-direction: column; justify-content: center;">
                <el-row>
                    <h1 style="font-size: 46px; color: #33b8b9;">{{ addProjectForm.projectName }}项目</h1>
                </el-row>
            </el-col>
            <el-col :span="9">
                <img v-if="CurttenContent.cover" :src="'/local-resource/image/' + CurttenContent.cover" alt=""
                    style="width: 100%; height: 100%; object-fit: cover;">
            </el-col>
        </el-row>
        <div style="padding: 20px calc(164px + 4.8vw);">
            <el-form :model="addProjectForm">
                <el-card style="height: 130px;" :shadow="'never'">
                    <el-row>
                        <h1 style="font-size: 24px; color: #33b8b9;">发布信息</h1>
                    </el-row>
                    <el-row style="margin-top: 10px;">
                        <el-col :span="14" style="text-align: center; ">
                            <el-form-item label="项目周期：">
                                <el-date-picker v-model="addProjectForm.date" type="datetimerange" range-separator="-"
                                    start-placeholder="开始时间" end-placeholder="结束时间" />
                            </el-form-item>
                        </el-col>
                        <el-col :span="2"></el-col>
                        <el-col :span="6" style="text-align: center;">
                            <el-form-item label="项目参与学生：">
                                <el-button text type="primary" @click="openAddStudents()">
                                    <el-icon>
                                        <Edit />
                                    </el-icon>添加学生
                                </el-button>
                            </el-form-item>
                        </el-col>
                    </el-row>
                </el-card>

                <el-dialog v-model="dialogTableVisible" title="添加学生">
                    <el-table height="400" :data="studentList" ref="multipleTableRef"
                        @selection-change="handleSelectionChange">
                        <el-table-column type="selection" width="40" />
                        <el-table-column type="index" width="40" />
                        <el-table-column prop="studentId" sortable label="学号" />
                        <el-table-column prop="studentName" label="姓名" />
                        <el-table-column prop="studentClass" label="班级" :filters="classList"
                            :filter-method="filterHandler" />
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

                <el-card style="margin-top: 30px;" :shadow="'never'">
                    <el-row>
                        <h1 style="font-size: 24px; color: #33b8b9;">任务信息</h1>
                    </el-row>
                    <el-row>
                        <el-col :span="4">

                        </el-col>
                        <el-col :span="8" style="text-align: center;">
                            <h2>任务目标</h2>
                        </el-col>
                        <el-col :span="8" style="text-align: center;">
                            <h2>任务交付物</h2>
                        </el-col>
                        <el-col :span="4" style="text-align: center;">
                            <h2>任务周期</h2>
                        </el-col>

                    </el-row>
                    <el-row v-if="addProjectForm.task" v-for="i in addProjectForm.task.length"
                        style=" min-height: 300px; margin: 20px; display: flex; flex-direction: row;">
                        <el-divider />
                        <el-col :span="4" style="display: flex; flex-direction: column; justify-content: center;">
                            <div class="task-title">
                                {{ addProjectForm.task[i - 1].taskName }}
                            </div>
                        </el-col>
                        <el-col :span="8" class="task-item">
                            <div v-for="j in addProjectForm.task[i - 1].taskTargets.length">{{
                                addProjectForm.task[i - 1].taskTargets[j - 1] }}</div>
                        </el-col>

                        <el-col :span="8" class="task-item">
                            <div v-for="k in addProjectForm.task[i - 1].taskDeliverables.length ">{{
                                addProjectForm.task[i - 1].taskDeliverables[k - 1] }}</div>
                        </el-col>

                        <el-col :span="4" class="task-item">

                            <el-date-picker v-model="addProjectForm.task[i - 1].taskStartTime" type="datetime"
                                placeholder="选择开始日期时间" :size="'small'" style="max-width:150px" />
                            <el-date-picker v-model="addProjectForm.task[i - 1].taskEndTime" type="datetime"
                                placeholder="选择结束日期时间" :size="'small'" style="margin-top: 20px; max-width:150px" />
                        </el-col>
                    </el-row>
                </el-card>
            </el-form>
            <el-row style="margin-top: 30px; display: flex; justify-content: center;">
                <el-button type="primary" style="width: 200px;" @click="publish()">
                    发布
                </el-button>
            </el-row>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onBeforeMount, ref } from 'vue';
import { useRoute } from 'vue-router';
import { GetById } from '@/apis/content/getById';
import { ContentTasks } from '@/apis/content/contentTasks';
import { getAllStudents } from '@/apis/student/all.js'
import { ElMessage } from 'element-plus';
import { ElTable } from 'element-plus'
import pageHeader from '@/components/pageheader.vue';
import type { TableColumnCtx } from 'element-plus'
import { publishProject } from '@/apis/project/publish.js'
import router from '@/router';
import { ElLoading } from 'element-plus'

const route = useRoute()
const contentId = route.params.resourceId
const CurttenContent = ref({
    id: '',
    name: '',
    parentId: '', // 分类
    cover: '',  // 封面
    introduction: '',  // 简介
    introduce: '', // 介绍
    guidance: '', // 指导
    third: '',  // 详细的实现流程
    fourth: '',  // 结构关系
    keyWord: '', // 关键字
    packageId: '',
    isDelete: '',
    pkgs: '',
})

const addProjectForm = ref({
    caseId: contentId,
    projectName: '',
    date: [],
    task: [],
    students: [],
})

const dialogTableVisible = ref(false)

const studentList = ref([])

const addStudents = () => {
    dialogTableVisible.value = false
    addProjectForm.value.students = multipleSelection.value
}

const openAddStudents = () => {
    dialogTableVisible.value = true
    multipleSelection.value = addProjectForm.value.students
}

interface Student {
    id: number
    studentId: string
    studentName: string
    studentGrade: string
    studentClass: string
    major: string
    collage: string
}

const multipleSelection = ref<Student[]>([])

const handleSelectionChange = (val: Student[]) => {
    multipleSelection.value = val
}

const classList = ref([])

const publishedProjectId = ref()

// 

const filterHandler = (
    value: string,
    row: Student,
    column: TableColumnCtx<Student>
) => {
    const property = column['property']
    return row[property] === value
}

const publish = async () => {
    // openFullScreenLoading();
    const projectDto = Object.assign({}, addProjectForm.value)
    const loading = ElLoading.service({
        lock: true,
        text: 'Loading',
        background: 'rgba(0, 0, 0, 0.7)',
    })
    await publishProject(projectDto).then(res => {
        loading.close();
        if (res.state == 200) {
            ElMessage.success("发布成功")
            publishedProjectId.value = res.data
            router.push("/myproject")
        } else {
            ElMessage.error("发布失败")
        }
    })
}

onBeforeMount(async () => {
    // 内容基本信息
    await GetById(contentId).then(res => {
        if (res.state == 200) {
            CurttenContent.value = res.data
            addProjectForm.value.projectName = CurttenContent.value.name
        } else {
            ElMessage.error(res.message)
        }
    })

    await ContentTasks(contentId).then(res => {
        if (res.state == 200) {
            addProjectForm.value.task = res.data
        } else {
            ElMessage.error(res.message)
        }

    })

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
})
</script>
<style scoped>
.task-title {
    height: 130px;
    width: 130px;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-color: #33b8b9;
    border-style: solid;
    border-width: 13px;
    border-radius: 50%;
    word-break: normal;
    text-align: center;
}

.task-title-small {
    height: 130px;
    width: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    font-weight: bold;
    color: #33b8b9;
}

.task-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

h2 {
    font-size: 20px;
    color: #33b8b9;
    margin-bottom: 10px;
}

.add-project {
    overflow: hidden;
}
</style>