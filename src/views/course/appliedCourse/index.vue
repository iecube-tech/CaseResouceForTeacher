<template>
    <div class="add-project">
        <pageHeader :route="route" />
        <el-row style="padding: 20px calc(164px + 4.8vw);">
            <el-col :span="15" style="display: flex; flex-direction: column; justify-content: center;">
                <el-row>
                    <h1 style="font-size: 46px; color: #33b8b9;">{{ addProjectForm.projectName }}课程</h1>
                </el-row>
            </el-col>
            <el-col :span="9">
                <img v-if="CurttenContent.cover" :src="'/local-resource/image/' + CurttenContent.cover" alt=""
                    style="width: 100%; height: 100%; object-fit: cover;">
            </el-col>
        </el-row>
        <div class="view-card">
            <el-form :model="addProjectForm">
                <el-card :shadow="'never'">
                    <el-row>
                        <h1 style="font-size: 24px; color: #33b8b9;">发布信息</h1>
                    </el-row>

                    <el-row style="margin-top: 10px;">
                        <el-form-item label="课程名称：" style="width: 500px;">
                            <el-input v-model="addProjectForm.projectName"></el-input>
                        </el-form-item>
                    </el-row>

                    <el-row style="margin-top: 10px;">
                        <el-col :span="14" style="text-align: center; ">
                            <el-form-item label="课程时间：">
                                <el-date-picker v-model="addProjectForm.date" type="datetimerange" range-separator="-"
                                    start-placeholder="开始时间" end-placeholder="结束时间" :defaultTime="defaultTime"
                                    @change="proejctTmieChange()" />
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row v-if="CurttenContent.version == 4">
                        <el-col :span="8">
                            <el-form-item label="学期：" prop="semester">
                                <el-select v-model="addProjectForm.semester" placeholder="请选择学期">
                                    <el-option v-for="(semesterItem, k) in semesterOptions" :key="k"
                                        :label="semesterItem.label" :value="semesterItem.value"></el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item label="班级：" prop="gradeClass">
                                <el-select v-model="addProjectForm.gradeClassList" value-key="id" multiple
                                    @change="console.log(addProjectForm.gradeClassList)">
                                    <el-option-group v-for="group in gradeClassList" :label="group.majorName"
                                        :key="group.majorName">
                                        <el-option v-for="item in group.majorClasses" :label="item.name" :value="item"
                                            :key="item.id" />
                                    </el-option-group>
                                </el-select>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col v-if="CurttenContent.version != 4" :span="6" style="text-align: center;">
                            <el-form-item label="课程参与学生：">
                                <el-button text type="primary" @click="openAddStudents()">
                                    <el-icon>
                                        <Edit />
                                    </el-icon>添加学生
                                </el-button>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item label="学生分组实验：">
                                <el-radio-group v-model="addProjectForm.useGroup">
                                    <el-radio :label="0">不分组</el-radio>
                                    <el-radio :label="1">分组实验</el-radio>
                                </el-radio-group>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6" v-if="addProjectForm.useGroup == 1">
                            <el-form-item label="分组最大人数：">
                                <el-input-number controls-position="right" v-model="addProjectForm.groupLimit" :min=2
                                    :max=20>
                                </el-input-number>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-form-item label="远程实验：">
                            <el-radio-group v-model="addProjectForm.useRemote">
                                <el-radio :label="0">关闭</el-radio>
                                <el-radio :label="1">开启</el-radio>
                            </el-radio-group>
                        </el-form-item>
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

                <el-card v-if="addProjectForm.useRemote == 1" style="margin-top: 30px;" :shadow="'never'">
                    <el-row>
                        <h1 style="font-size: 24px; color: #33b8b9;">远程信息</h1>
                    </el-row>

                    <el-row style="margin-top:20px">
                        <el-form-item label="远程设备：">
                            <el-button text type="primary" @click="remoteDeviceDiaglog = true">
                                <el-icon>
                                    <Edit />
                                </el-icon>选择设备
                            </el-button>
                        </el-form-item>
                    </el-row>

                    <el-row>
                        <el-form-item>
                            <template #label>
                                <el-row>
                                    <span>远程设备开放日期</span>
                                    <el-tooltip class="box-item" effect="light" content="表示设备在哪些日期可以远程开放给学生"
                                        placement="top-start">
                                        <el-button type="primary" :icon="InfoFilled" size="large" link></el-button>
                                    </el-tooltip>
                                    <span>：</span>
                                </el-row>
                            </template>
                            <el-date-picker v-model="RemoteDatePicker" type="daterange" range-separator="-"
                                start-placeholder="开始日期" end-placeholder="结束日期" size="small"
                                @change="remoteTimeChange()" />
                        </el-form-item>
                    </el-row>

                    <el-row>
                        <el-form-item>
                            <template #label>
                                <el-row>
                                    <span>远程设备开放时间</span>
                                    <el-tooltip class="box-item" effect="light" content="表示设备在开放日期内每天可以被学生远程操作的时间段"
                                        placement="top-start">
                                        <el-button type="primary" :icon="InfoFilled" size="large" link></el-button>
                                    </el-tooltip>
                                    <span>：</span>
                                </el-row>
                            </template>
                            <el-time-picker v-model="RemoteTimePicker" is-range range-separator="-"
                                start-placeholder="开始时间" end-placeholder="结束时间" size="small"
                                @change="remoteTimeChange()" />
                        </el-form-item>

                    </el-row>

                    <el-row>
                        <el-form-item label="学生远程单次操作时长(分钟)：">
                            <el-input-number v-model="remoteProjectForm.appointmentDuration" :min="1" size="small"
                                controls-position="right" />
                        </el-form-item>
                    </el-row>
                    <el-row>
                        <el-form-item label="每位学生最大可远程操作次数：">
                            <el-input-number v-model="remoteProjectForm.appointmentCount" :min="1" size="small"
                                controls-position="right" />
                        </el-form-item>
                    </el-row>
                    <el-row>
                        <el-form-item label="学生预约限制：">
                            <el-select placeholder="预约限制" size="small" v-model="remoteProjectForm.dayLimit"
                                style="width: 200px">
                                <el-option v-for="item in remoteDayLimits" :key="item.value" :label="item.label"
                                    :value="item.value" />
                            </el-select>
                        </el-form-item>
                    </el-row>
                </el-card>

                <el-dialog v-model="remoteDeviceDiaglog" title="选择远程设备" width="50%">
                    <el-table height="400" :data="remoteDeviceList" @selection-change="handleRemoteDeviceChange">
                        <el-table-column type="selection" width="40" />
                        <el-table-column type="index" width="40" />
                        <el-table-column prop="snId" sortable label="SNID" />
                        <el-table-column prop="name" label="名称" />
                        <el-table-column prop="ip" label="IP" />
                    </el-table>
                    <template #footer>
                        <span class="dialog-footer">
                            <el-button @click="remoteDeviceDiaglog = false">取消</el-button>
                            <el-button type="primary" @click="addRmoteDevice()">
                                确定
                            </el-button>
                        </span>
                    </template>
                </el-dialog>

                <el-card style="margin-top: 30px;" :shadow="'never'">
                    <el-row>
                        <h1 style="font-size: 24px; color: #33b8b9;">实验信息</h1>
                    </el-row>
                    <el-row style="margin-top: 20px;">
                        <el-col :span="4" style="text-align: center;">
                            <!-- <el-button type="warning" link @click="addTask">添加实验</el-button> -->
                        </el-col>
                        <el-col :span="6" style="text-align: center;">
                            <h2>实验时间</h2>
                        </el-col>
                        <el-col :span="4" style="text-align: center;">
                            <h2>课时</h2>
                        </el-col>

                        <!-- <el-col :span="4" style="text-align: center;">
                            <h2>开启预习拦截</h2>
                        </el-col> -->

                        <el-col :span="6" style="text-align: center;">
                            <div>
                                <h2>预习通过分数</h2>
                                <el-input-number controls-position="right" :min="0" :max="100" v-model="step1PassScore"
                                    @change="step1PassScoreChanged" size="small"></el-input-number>
                            </div>
                        </el-col>
                        <el-col :span="4" style="text-align: center;">
                            <h2>选择发布</h2>
                        </el-col>
                    </el-row>
                    <el-row v-if="allTask" v-for="i in allTask.length" :id="'taskItem' + (i - 1)"
                        style=" min-height: 200px; display: flex; flex-direction: row;">
                        <el-divider />

                        <el-col :span="4"
                            style="display: flex; flex-direction: column; justify-content: center; align-items: center;">
                            <div class="task-title">
                                <el-button class="btn" type="warning" link @click="modify(i - 1)">
                                    {{ allTask[i - 1].num + '.' + allTask[i - 1].taskName }}
                                </el-button>
                            </div>
                        </el-col>

                        <el-col :span="6" class="task-item">
                            <div class="task-item">
                                <el-date-picker v-model="allTask[i - 1].taskStartTime" type="datetime"
                                    placeholder="选择开始日期时间" :size="'small'" />
                                <el-date-picker v-model="allTask[i - 1].taskEndTime" type="datetime"
                                    placeholder="选择结束日期时间" :size="'small'" :defaultTime="defaultTime1" class="mt-2" />
                            </div>
                        </el-col>

                        <el-col :span=4 class="task-item">
                            <el-input-number controls-position="right" :min="0" :step="0.1"
                                v-model="allTask[i - 1].classHour">
                            </el-input-number>
                        </el-col>


                        <!-- <el-col :span="4" class="task-item">
                            <el-checkbox v-model="allTask[i - 1].step1NeedPassScore" size="large" />
                        </el-col> -->

                        <el-col :span=6 class="task-item">
                            <el-input-number :min="0" :max="100" v-model="allTask[i - 1].step1PassScore"
                                controls-position="right">
                            </el-input-number>
                        </el-col>

                        <el-col :span="4" class="task-item">
                            <el-checkbox :key="'box' + i" v-model="selectedTask[i - 1]"
                                @change="changeTaskItemStatus(i - 1)" size="large" />
                        </el-col>
                    </el-row>
                </el-card>
            </el-form>

            <el-row style="margin-top: 30px; display: flex; justify-content: center;">
                <el-button type="primary" style="width: 200px;" @click="clickPublish()">
                    发布
                </el-button>
            </el-row>
        </div>

        <el-dialog v-model="ModifyTaskDialog" title="编辑实验" width="70%" @closed="cleanModifyTask()">
            <template #default>
                <div class="editTask">
                    <div class="editTaskItem">
                        <span style="width: 120px;">实验编号</span>
                        <el-input-number :min="1" v-model="modifyTask.num" controls-position="right"></el-input-number>
                    </div>
                    <div class="editTaskItem">
                        <span style="width: 120px;">实验名称</span>
                        <el-input v-model="modifyTask.taskName" style="max-width: 350px;"></el-input>
                    </div>
                    <div class="editTaskItem">
                        <span style="width: 120px;">实验时间</span>
                        <el-date-picker v-model="modifyTask.taskStartTime" type="datetime" placeholder="选择开始日期时间"
                            style="max-width:200px" />
                        <el-date-picker v-model="modifyTask.taskEndTime" type="datetime" placeholder="选择结束日期时间"
                            style="max-width:200px; margin-left: 20px;" :defaultTime="defaultTime1" />
                    </div>
                </div>
            </template>
            <template #footer>
                <span class="dialog-footer">
                    <el-button @click="ModifyTaskDialog = false">取消</el-button>
                    <el-button type="primary" @click="saveModify()">
                        确定
                    </el-button>
                </span>
            </template>
        </el-dialog>


        <el-dialog v-model="checkForm" width="70%" title="确认发布">
            <el-form ref="ruleFormRef" status-icon :model="ruleForm" :rules="rules">
                <el-form-item label="课程名称：" prop="projectName">
                    <span>{{ ruleForm.projectName }}</span>
                </el-form-item>

                <el-form-item label="课程时间：" prop="date">
                    <span v-if="ruleForm.date.length == 2">
                        {{ formatDate(<any>ruleForm.date[0]) + " -- " + formatDate(<any>ruleForm.date[1]) }}
                    </span>
                </el-form-item>
                <div v-if="CurttenContent.version >= 4">
                    <el-form-item label="学期：" prop="semester">
                        <span>{{ ruleForm.semester }}</span>
                    </el-form-item>
                    <el-form-item label="班级：" prop="gradeClassList">
                        <span v-for="(item, i) in ruleForm.gradeClassList" class="mr-4">{{ item.name }}</span>
                    </el-form-item>
                </div>

                <el-form-item v-if="CurttenContent.version != 4" label="参与学生：" prop="students">
                    <template #default>
                        <div class="editTask">
                            <div><span>{{ ruleForm.students.length + '人参与' }}</span></div>
                            <div style="display: flex; flex-wrap: wrap;">
                                <span v-for="item in ruleForm.students" style="margin-right: 5px;">{{ item.studentName
                                }}</span>
                            </div>
                        </div>
                    </template>
                </el-form-item>

                <el-form-item label="分组实验：">
                    <span v-if="ruleForm.userGroup == 1">开启，分组人数限制{{ ruleForm.groupLimit }}</span>
                    <span v-else="">关闭</span>
                </el-form-item>

                <el-form-item label="远程实验：">
                    <div v-if="ruleForm.useRemote == 1">
                        <el-row>
                            <span>
                                远程设备：
                            </span>
                        </el-row>
                        <el-row v-for="(item, i) in multipleSelectionRemoteDevice">
                            {{ item.name }}
                        </el-row>

                    </div>
                    <span v-else>关闭</span>
                </el-form-item>

                <el-form-item label="实验列表：" prop="task">
                    <template #default>
                        <div class="editTask">
                            <div class="editTask" v-for="item in ruleForm.task">
                                <div>
                                    {{ '实验' + item.num + "：" + item.taskName }}
                                </div>
                                <div>
                                    <span style="margin-right: 10px; color: #33b8b9;">实验时间：</span>
                                    <span v-if="item.taskStartTime && item.taskEndTime">
                                        {{ formatDate(item.taskStartTime) + " -- " + formatDate(item.taskEndTime) }}
                                    </span>
                                </div>
                                <el-divider border-style="dashed" />
                            </div>
                        </div>
                    </template>
                </el-form-item>
            </el-form>

            <template #footer>
                <span class="dialog-footer">
                    <el-button @click="checkForm = false">取消</el-button>
                    <el-button type="primary" @click="submitForm(ruleFormRef)">
                        确定
                    </el-button>
                </span>
            </template>
        </el-dialog>
    </div>
</template>

<script setup lang="ts">
import { onBeforeMount, ref, onMounted, reactive } from 'vue';
import { useRoute } from 'vue-router';
import { GetById } from '@/apis/content/getById';
import { ContentTasks } from '@/apis/content/contentTasks';
import { getAllStudents } from '@/apis/student/all.js'
import { ElMessage } from 'element-plus';
import { ElTable } from 'element-plus'
import pageHeader from '@/components/pageheader.vue';
import type { TableColumnCtx, FormInstance, FormRules } from 'element-plus'
import { publishProject, publishProjectV4 } from '@/apis/project/publish.js'
import router from '@/router';
import { ElLoading } from 'element-plus'
import {
    InfoFilled,
    Delete,
    Edit,
} from '@element-plus/icons-vue'
import dayjs from 'dayjs'
import { MyDevices } from "@/apis/device/device/myDeviceList.js";

import { getClasses } from '@/apis/embV4/index'

const formatDate = (time: string | Date) => {
    if (!time) {
        return '未设置时间节点'
    }
    return dayjs(time).format('YYYY年MM月DD日 HH:mm')
}

const formatDateToDate = (time: string | Date) => {
    if (!time) {
        dayjs(new Date).format('YYYY-MM-DD')
    }
    return dayjs(time).format('YYYY-MM-DD')
}
const formatDateToTime = (time: string | Date) => {
    if (!time) {
        return '00:00:00'
    }
    return dayjs(time).format('HH:mm:ss')
}

const headers = ref({
    'x-access-token': localStorage.getItem("x-access-token"),
    'x-access-type': localStorage.getItem("x-access-type")
})

const route = useRoute()
const contentId = route.params.courseId
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
    version: null, // 版本
})

const selectedTask = ref<Array<boolean>>([])

const allTask = ref([])
const useGroup = ref(0)
const groupLimit = ref(0)

const step1PassScore = ref(0)
const step1PassScoreChanged = () => {
    for (let i = 0; i < allTask.value.length; i++) {
        allTask.value[i].step1PassScore = step1PassScore.value
    }
}

const addProjectForm = ref({
    caseId: contentId,
    projectName: '',
    useGroup: 0,
    useRemote: 0,
    groupLimit: 2,
    date: [],
    task: [],
    students: [],
    remoteQo: null,
    semester: '', // 学期
    gradeClass: '', // 年级班级
    gradeClassList: []
})

const semesterOptions = ref([])
const gradeClassList = ref([])

const initSemesterOptions = () => {
    let d = new Date()
    let year = d.getFullYear()
    semesterOptions.value = [
        { label: `${year}年上学期`, value: `${year}01` },
        { label: `${year}年下学期`, value: `${year}02` },
    ]
}

initSemesterOptions()

const RemoteDatePicker = ref([null, null])

const RemoteTimePicker = ref([null, null])

const remoteProjectForm = ref({
    startDate: formatDateToDate(RemoteDatePicker.value[0]),
    endDate: formatDateToDate(RemoteDatePicker.value[1]),
    startTime: formatDateToTime(RemoteTimePicker.value[0]),
    endTime: formatDateToTime(RemoteTimePicker.value[1]),
    appointmentDuration: 60,
    appointmentCount: 1,
    dayLimit: 2,
    remoteDeviceIdList: [],
})

const remoteTimeChange = () => {
    remoteProjectForm.value.startDate = formatDateToDate(RemoteDatePicker.value[0])
    remoteProjectForm.value.endDate = formatDateToDate(RemoteDatePicker.value[1])
    remoteProjectForm.value.startTime = formatDateToTime(RemoteTimePicker.value[0])
    remoteProjectForm.value.endTime = formatDateToTime(RemoteTimePicker.value[1])
}

const defaultTime: [Date, Date] = [
    new Date(2000, 1, 1, 0, 0, 0),
    new Date(2000, 2, 1, 23, 59, 59),
] // '00:00:00', '23:59:59'

const defaultTime1 = new Date(2000, 1, 1, 23, 59, 59)


const remoteDayLimits = [
    {
        label: '无限制',
        value: 90
    },
    {
        label: '可预约当天',
        value: 1
    },
    {
        label: '可预约今明两天',
        value: 2
    },
    {
        label: '可预约一周内',
        value: 7
    },
]

const remoteDeviceList = ref([])

const getDeviceList = () => {
    MyDevices().then(res => {
        if (res.state == 200) {
            remoteDeviceList.value = res.data
        }
        else {
            ElMessage.error(res.message)
        }
    })
}

const remoteDeviceDiaglog = ref(false)

const handleRemoteDeviceChange = (val) => {
    multipleSelectionRemoteDevice.value = val
    // console.log(multipleSelectionRemoteDevice.value)
}

const multipleSelectionRemoteDevice = ref([])

const addRmoteDevice = () => {
    remoteDeviceDiaglog.value = false
    remoteProjectForm.value.remoteDeviceIdList = []
    multipleSelectionRemoteDevice.value.forEach(item => {
        remoteProjectForm.value.remoteDeviceIdList.push(item.id)
    })
}
const proejctTmieChange = () => {
    if (RemoteDatePicker.value[0] && RemoteDatePicker.value[1] && RemoteTimePicker.value[0] && RemoteTimePicker.value[1]) {
        return
    }
    RemoteDatePicker.value = JSON.parse(JSON.stringify(addProjectForm.value.date))
    RemoteTimePicker.value = JSON.parse(JSON.stringify(addProjectForm.value.date))
    remoteProjectForm.value.startDate = formatDateToDate(RemoteDatePicker.value[0])
    remoteProjectForm.value.endDate = formatDateToDate(RemoteDatePicker.value[1])
    remoteProjectForm.value.startTime = formatDateToTime(RemoteTimePicker.value[0])
    remoteProjectForm.value.endTime = formatDateToTime(RemoteTimePicker.value[1])
    // console.log(RemoteDatePicker.value)
    // console.log(remoteProjectForm.value)
}
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

const addTaskStatus = ref(0)
const addTask = () => {
    addTaskStatus.value = 1
    ModifyTaskDialog.value = true
    modifyTask.value.num = allTask.value[allTask.value.length - 1].num + 1
    modifyTask.value.weighting = Math.round((100 / (allTask.value.length + 1)))
    modifyTask.value.taskName = ''
    modifyTask.value.taskStartTime = ''
    modifyTask.value.taskEndTime = ''
    modifyTask.value.backDropList = []
    modifyTask.value.requirementList = []
    modifyTask.value.deliverableRequirementList = []
    modifyTask.value.referenceFileList = []
    modifyTask.value.referenceLinkList = []
    modifyTask.value.attentionList = []
    modifyTask.value.experimentalSubjectList = []
    modifyTask.value.taskDetails = ''
}

// const deleteTask = (index) => {
//     addProjectForm.value.task.splice(index, 1)
// }

const ModifyTaskDialog = ref(false)
const modifyTask = ref({
    num: null,
    weighting: null,
    taskName: '',
    taskStartTime: '',
    taskEndTime: '',
    taskDevice: null,
    taskDataTables: '',
    backDropList: [],
    requirementList: [],
    deliverableRequirementList: [],
    referenceLinkList: [],
    referenceFileList: [],
    attentionList: [],
    experimentalSubjectList: [],
    taskDetails: '',
    taskMdDoc: null,
    mdChapter: {
        courseId: null,
        id: null,
        name: '',
    }

})

const modifyTaskIndex = ref()
const modify = (index) => {
    addTaskStatus.value = 0
    modifyTaskIndex.value = index
    ModifyTaskDialog.value = true
    let data = JSON.stringify(allTask.value[index])
    modifyTask.value = JSON.parse(data)
}

const saveModify = () => {
    if (addTaskStatus.value == 0) {
        let data = JSON.stringify(modifyTask.value)
        allTask.value[modifyTaskIndex.value] = JSON.parse(data)
        ModifyTaskDialog.value = false
    }
    if (addTaskStatus.value == 1) {
        const taskDto = Object.assign({}, modifyTask.value)
        allTask.value.push(taskDto)
        selectedTask.value.push(true)
        ModifyTaskDialog.value = false
        addTaskStatus.value = 0
        cleanModifyTask()
    }
}

const cleanModifyTask = () => {
    ModifyTaskDialog.value = false
    modifyTask.value.num = null
    modifyTask.value.weighting = null
    modifyTask.value.taskName = ''
    modifyTask.value.taskStartTime = ''
    modifyTask.value.taskEndTime = ''
    modifyTask.value.taskDevice = null
    modifyTask.value.taskDataTables = ''
    modifyTask.value.backDropList = []
    modifyTask.value.referenceFileList = []
    modifyTask.value.deliverableRequirementList = []
    modifyTask.value.referenceFileList = []
    modifyTask.value.referenceLinkList = []
    modifyTask.value.attentionList = []
    modifyTask.value.experimentalSubjectList = []
    modifyTask.value.taskDataTables = ''
    modifyTask.value.taskMdDoc = null
}

const backDropName = ref('')
const requirementName = ref('')
const deliverableRequirementName = ref('')
const referenceLinkName = ref('')
const experimentalSubjectName = ref('')
const attentionName = ref('')

const referenceLinkUrl = ref('')
const AddBackDropDialog = ref(false)
const AddRequirementDialog = ref(false)
const AddDeliverableRequirementDialog = ref(false)
const AddReferenceLinkDialog = ref(false)
const AddExperimentalSubjectDialog = ref(false)
const AddAttentionDialog = ref(false)

const AddBackDrop = () => {
    if (backDropName.value != '') {
        let backDrop = { name: backDropName.value }
        modifyTask.value.backDropList.push(backDrop)
        backDropName.value = ''
        AddBackDropDialog.value = false
    }
}

const backDropClose = (index) => {
    modifyTask.value.backDropList.splice(index, 1)
}

const AddRequirement = () => {
    if (requirementName.value != '') {
        let requirement = { name: requirementName.value }
        modifyTask.value.requirementList.push(requirement)
        requirementName.value = ''
        AddRequirementDialog.value = false
    }

}

const requirementClose = (index) => {
    modifyTask.value.requirementList.splice(index, 1)
}

const AddDeliverableRequirement = () => {
    if (deliverableRequirementName.value != '') {
        let deliverableRequirement = { name: deliverableRequirementName.value }
        modifyTask.value.deliverableRequirementList.push(deliverableRequirement)
        deliverableRequirementName.value = ''
        AddDeliverableRequirementDialog.value = false
    }
}
const deliverableRequirementClose = (index) => {
    modifyTask.value.deliverableRequirementList.splice(index, 1)
}

const AddReferenceLink = () => {
    if (referenceLinkName.value != '' && referenceLinkUrl.value != '') {
        let referenceLink = { name: referenceLinkName.value, url: referenceLinkUrl.value }
        modifyTask.value.referenceLinkList.push(referenceLink)
        referenceLinkName.value = ''
        referenceLinkUrl.value = ''
        AddReferenceLinkDialog.value = false
    }
}
const referenceLinkClose = (index) => {
    modifyTask.value.referenceLinkList.splice(index, 1)
}

const referenceFileClose = (index) => {
    modifyTask.value.referenceFileList.splice(index, 1)
}

const AddExperimentalSubject = () => {
    if (experimentalSubjectName.value != '') {
        let experimentalSubject = { name: experimentalSubjectName.value }
        modifyTask.value.experimentalSubjectList.push(experimentalSubject)
        experimentalSubjectName.value = ''
        AddExperimentalSubjectDialog.value = false
    }
}
const experimentalSubjectClose = (index) => {
    modifyTask.value.experimentalSubjectList.splice(index, 1)
}

const AddAttention = () => {
    if (attentionName.value != '') {
        let attention = { name: attentionName.value }
        modifyTask.value.attentionList.push(attention)
        attentionName.value = ''
        AddAttentionDialog.value = false
    }
}

const attentionClose = (index) => {
    modifyTask.value.attentionList.splice(index, 1)
}

const uploadSuccess = (res) => {
    if (res.state = 200) {
        modifyTask.value.referenceFileList.push(res.data)
    } else {
        ElMessage.error("上传失败" + res.message)
    }

}
interface resource {
    id: number,
    name: string,
    filename: string,
    originFilename: string,
    type: string,
}

const clickFile = (resource: resource) => {
    downloadFile(resource.filename)
}

const downloadFile = (filename) => {
    let fileUrl = '/local-resource/file/' + filename
    window.open(fileUrl)
}

const filterHandler = (
    value: string,
    row: Student,
    column: TableColumnCtx<Student>
) => {
    const property = column['property']
    return row[property] === value
}

const taskWeighting = ref(false)
const editWeighting = () => {
    if (addProjectForm.value.useRemote == 1) {
        if (remoteProjectForm.value.remoteDeviceIdList.length == 0) {
            ElMessage.warning("开起远程实验，但未选择任何远程设备")
            return
        }
    }
    addProjectForm.value.task = []
    for (let i = 0; i < allTask.value.length; i++) {
        if (selectedTask.value[i] == true) {
            addProjectForm.value.task.push(allTask.value[i])
        }
    }
    // console.log(allTask.value)
    // console.log(addProjectForm.value.task)
    // console.log(selectedTask.value)
    // taskWeighting.value = true
}
const getRemainingWeighting = () => {
    let num = 0
    for (let i = 0; i < addProjectForm.value.task.length; i++) {
        num = num + addProjectForm.value.task[i].weighting
    }
    return Math.round((100 - num))
}
const getWeightingStyle = () => {
    if (getRemainingWeighting() > 0) {
        return 'color: var(--el-color-warning)'
    } else if (getRemainingWeighting() < 0) {
        return 'color: var(--el-color-danger)'
    } else {
        return 'color: var(--el-color-primary)'
    }
}

const resetWeighting = () => {
    let num = Math.round((100 / addProjectForm.value.task.length))
    // console.log(num)
    // console.log(addProjectForm.value.task)
    for (let i = 0; i < addProjectForm.value.task.length; i++) {
        addProjectForm.value.task[i].weighting = num
    }
}

const assignRemainingWeighting = () => {
    let num = 0
    for (let i = 0; i < addProjectForm.value.task.length; i++) {
        num = num + addProjectForm.value.task[i].weighting
    }
    let j = (100 - num) / addProjectForm.value.task.length
    // console.log(j)
    for (let i = 0; i < addProjectForm.value.task.length; i++) {
        addProjectForm.value.task[i].weighting = Math.round((j + addProjectForm.value.task[i].weighting))
    }
}

const ruleFormRef = ref<FormInstance>()
const checkForm = ref(false)
interface task {
    num: number
    taskName: string
    backDropList: []
    requirementList: []
    deliverableRequirementList: []
    referenceLinkList: []
    referenceFileList: []
    attentionList: []
    experimentalSubjectList: []
    taskDetails: string
    taskStartTime: Date
    taskEndTime: Date
}


interface RuleForm {
    caseId: string,
    projectName: string,
    date: Array<3>,
    task: Array<any>,
    students: Array<any>,
    userGroup: number,
    groupLimit: number,
    useRemote: number,
    remoteQo: any | null
    semester: any | null
    gradeClass: any | null
    gradeClassList: any[]
}

const ruleForm = reactive<RuleForm>({
    caseId: '',
    projectName: '',
    date: [null, null],
    task: [],
    students: [],
    userGroup: 0,
    groupLimit: 2,
    useRemote: 0,
    remoteQo: null,
    semester: '',
    gradeClass: '',
    gradeClassList: []
})

const rules = reactive<FormRules>({
    caseId: [{ required: true, message: '没有caseId', trigger: 'blur' }],
    projectName: [{ required: true, message: '没有课程名', trigger: 'blur' }],
    date: [
        {
            required: true,
            validator: function (rule, value, callback) {
                if (value[0] == undefined || value[1] == undefined) {
                    callback(new Error("课程起止时间错误"));
                } else {
                    callback();
                }
            }, trigger: 'blur'
        }
    ],
    task: [
        {
            required: true,
            validator: function (rule, value, callback) {
                if (value.length == 0) {
                    callback(new Error("未添加实验"));
                }
                const errorList = []
                for (let i = 0; i < value.length; i++) {
                    if (value[i].num == null) {
                        errorList.push("实验" + (i + 1) + '没有编号')
                    }
                    if (value[i].taskName == '') {
                        errorList.push("实验" + (i + 1) + '没有名称')
                    }
                    // 对实验时间的校验  和课程时间比较
                }
                if (errorList.length > 0) {
                    let str: string = errorList.join();
                    callback(new Error(str));
                } else {
                    callback();
                }

            }, trigger: 'blur'
        }
    ],
    students: [
        {
            required: true,
            validator: function (rule, value, callback) {
                if (value.length == 0) {
                    callback(new Error("未添加学生"));
                } else {
                    callback()
                }
            }, trigger: 'change'
        }
    ],
    semester: [
        {
            required: true,
            validator: (r, v, cb) => {
                if (CurttenContent.value.version >= 4) {
                    if (v) {
                        cb()
                    } else {
                        cb(new Error('未选择学期'))
                    }
                } else {
                    cb()
                }
            }
        }
    ],
    gradeClass: [
        {
            required: true,
            validator: (r, v, cb) => {
                if (CurttenContent.value.version >= 4) {
                    if (v) {
                        cb()
                    } else {
                        cb(new Error('未选择班级'))
                    }
                } else {
                    cb()
                }
            }
        }
    ],
    gradeClassList: [
        {
            required: true,
            validator: function (rule, value, callback) {
                if (value.length == 0) {
                    callback(new Error("未添加班级"));
                } else {
                    callback()
                }
            }, trigger: 'change'
        }
    ]
})

const submitForm = async (formEl: FormInstance | undefined) => {
    if (!formEl) return
    await formEl.validate((valid, fields) => {
        if (valid) {
            // console.log('校验通过')
            publish()
        } else {
            console.log('error submit!', fields)
            ElMessage.error("发布信息校验不通过，请检查")
        }
    })
}

const clickPublish = () => {
    // if (getRemainingWeighting() != 0) {
    //     ElMessage.error("实验权重剩余值不等于零，请重新分配")
    //     return
    // }
    editWeighting()
    addProjectForm.value.remoteQo = remoteProjectForm.value
    taskWeighting.value = false
    ruleForm.caseId = <string>addProjectForm.value.caseId
    ruleForm.projectName = addProjectForm.value.projectName
    ruleForm.date = <[]>addProjectForm.value.date
    ruleForm.task = <[]>addProjectForm.value.task
    ruleForm.students = <[]>addProjectForm.value.students
    ruleForm.userGroup = addProjectForm.value.useGroup
    ruleForm.groupLimit = addProjectForm.value.groupLimit
    ruleForm.useRemote = addProjectForm.value.useRemote
    ruleForm.remoteQo = addProjectForm.value.remoteQo
    ruleForm.semester = getSemesterLabel(addProjectForm.value.semester)
    ruleForm.gradeClass = getGradeClassLabel(addProjectForm.value.gradeClass)
    ruleForm.gradeClassList = addProjectForm.value.gradeClassList
    checkForm.value = true
    // console.log(addProjectForm.value)
}

const getSemesterLabel = (v) => {
    let item = semesterOptions.value.find(_ => _.value == v)
    let label = item ? item.label : ''
    return label
}

const getGradeClassLabel = (v) => {
    let list = []
    gradeClassList.value.forEach(_ => {
        list = list.concat(_.majorClasses)
    })
    let item = list.find(_ => _.id == v)
    let label = item ? item.name : ''
    return label
}

const publish = () => {
    const loading = ElLoading.service({
        lock: true,
        text: 'Loading',
        background: 'rgba(0, 0, 0, 0.7)',
    })

    if (CurttenContent.value.version >= 4) {
        let EMDV4ProjectQo = Object.assign({}, addProjectForm.value, {
            version: CurttenContent.value.version,
        })
        publishProjectV4(EMDV4ProjectQo).then(res => {
            if (res.state == 200) {
                ElMessage.success("发布成功")
                publishedProjectId.value = res.data
                router.push({
                    name: 'myproject'
                })
                loading.close();
            } else {
                ElMessage.error("发布失败" + res.message)
                loading.close();
            }
        })

    } else {
        // openFullScreenLoading();
        const projectDto = Object.assign({}, addProjectForm.value)

        publishProject(projectDto).then(res => {
            if (res.state == 200) {
                ElMessage.success("发布成功")
                publishedProjectId.value = res.data
                router.push({
                    name: 'myproject'
                })
                loading.close();
            } else {
                ElMessage.error("发布失败" + res.message)
                loading.close();
            }
        })
    }
}

const getStyle = () => {
    if (windowWidth.value > 1900) {
        return 'padding: 20px calc(164px + 4.8vw);'
    }
    return 'padding: 20px;'
}

const changeTaskItemStatus = (index) => {
    let item = document.getElementById('taskItem' + index)
    if (selectedTask.value[index] == false) {
        item.style.filter = 'grayscale(100%)';
    } else {
        item.style.filter = '';
    }
}

const down = ref({
    top: 20,
    background: "",
})
const headrClass = ref('')

const handleScroll = () => {
    let scrollTop = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollTop) {
        headrClass.value = "down"
    } else {
        headrClass.value = ""
    }
}
// 屏幕宽度
const windowWidth = ref(0)
// 屏幕高度
const windowHeight = ref(0)
// 生命时间
onMounted(() => {
    getWindowResize()
    window.addEventListener('resize', getWindowResize)
})
// 获取屏幕尺寸
const getWindowResize = function () {
    windowWidth.value = window.innerWidth
    windowHeight.value = window.innerHeight
}

window.addEventListener("scroll", handleScroll)

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
            allTask.value = res.data
            for (let i = 0; i < allTask.value.length; i++) {
                selectedTask.value.push(true)
            }
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
    await getDeviceList()

    // 获取班级信息
    getClasses().then(res => {
        if (res.state == 200) {
            gradeClassList.value = res.data
        } else {
            ElMessage.error(res.message)
        }
    })
})
</script>

<style scoped>
@import "@/styles/cardPadding/cardPadding.css";

.el-tag--small {
    height: auto;
    display: block;
    white-space: unset;
    line-height: normal;
}

.itemlist2 {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
}

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
    word-wrap: normal;
}

h2 {
    font-size: 20px;
    color: #33b8b9;
    margin-bottom: 10px;
}

.add-project {
    overflow: hidden;
}

.editTask {
    display: flex;
    flex-direction: column;
}

.editTaskItem {
    display: flex;
    flex-direction: row;
    margin-top: 20px;
}

.itemlist {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 20px;
}

.item {
    display: flex;
    flex-direction: row;
    justify-self: start;
    align-items: center;
    margin-top: 20px;
}

.btn {
    width: 90px;
    overflow-wrap: break-word;
    white-space: normal;
    height: auto;
    overflow: hidden
}
</style>