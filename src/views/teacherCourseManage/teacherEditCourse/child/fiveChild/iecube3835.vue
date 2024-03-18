<template>
    <div>
        <el-form label-width="150px" ref="addTaskFormRef" :model="newTaskForm" :rules="taskFormRules">
            <el-form-item label="实验名称：" prop="taskName">
                <el-input style="max-width: 400px; margin-right: 20px;" v-model="newTaskForm.taskName"
                    placeholder="请输入实验名称">
                </el-input>
            </el-form-item>
            <el-form-item label="实验序号：" prop="num">
                <el-input-number :min="1" :max="10" v-model="newTaskForm.num"></el-input-number>
            </el-form-item>

            <el-form-item label="实验背景：" prop="">
                <div v-if="newTaskForm.backDropList.length > 0">
                    <el-tag closable v-for="i in newTaskForm.backDropList.length" :key="i" class="mx-1"
                        @close="removeBackDrop(i - 1)">
                        {{ newTaskForm.backDropList[i - 1].name }}
                    </el-tag>
                </div>
            </el-form-item>
            <el-form-item>
                <el-input style="max-width: 400px; margin-right: 20px;" v-model="backDrop" placeholder="添加实验背景">
                </el-input>
                <el-button type="primary" circle size="small" :icon="Check" @click="addBackDrop()"></el-button>
            </el-form-item>
            <el-form-item label="实验目的：" prop="requirementList">
                <div v-if="newTaskForm.requirementList.length > 0">
                    <el-tag closable v-for="i in newTaskForm.requirementList.length" :key="i" class="mx-1"
                        @close="removeRequirement(i - 1)">
                        {{ newTaskForm.requirementList[i - 1].name }}
                    </el-tag>
                </div>
            </el-form-item>
            <el-form-item>
                <el-input style="max-width: 400px; margin-right: 20px;" v-model="requirement" placeholder="添加实验目的">
                </el-input>
                <el-button type="primary" circle size="small" :icon="Check" @click="addRequirement()"></el-button>
            </el-form-item>
            <el-form-item label="实验器件：" prop="experimentalSubjectList">
                <div v-if="newTaskForm.experimentalSubjectList.length > 0">
                    <el-tag closable v-for="i in newTaskForm.experimentalSubjectList.length" :key="i" class="mx-1"
                        @close="removeExperimentalSubject(i - 1)">
                        {{ newTaskForm.experimentalSubjectList[i - 1].name }}
                    </el-tag>
                </div>
            </el-form-item>
            <el-form-item>
                <el-input style="max-width: 400px; margin-right: 20px;" v-model="experimentalSubject"
                    placeholder="添加实验器件">
                </el-input>
                <el-button type="primary" circle size="small" :icon="Check"
                    @click="addExperimentalSubject()"></el-button>
            </el-form-item>

            <el-form-item label="实验注意事项：" prop="attentionList">
                <div v-if="newTaskForm.attentionList.length > 0">
                    <el-tag closable v-for="i in newTaskForm.attentionList.length" :key="i" class="mx-1"
                        @close="removeAttention(i - 1)">
                        {{ newTaskForm.attentionList[i - 1].name }}
                    </el-tag>
                </div>
            </el-form-item>
            <el-form-item>
                <el-input style="max-width: 400px; margin-right: 20px;" v-model="attention" placeholder="添加实验注意事项">
                </el-input>
                <el-button type="primary" circle size="small" :icon="Check" @click="addAttention()"></el-button>
            </el-form-item>

            <el-form-item label="实验内容：">

            </el-form-item>
            <div style="margin-left: 120px;">
                <el-row>
                    <span>操作设备实验数据记录信息（请完善表格必要信息，表格将在学生操作设备时交由学生填写记录）:</span>
                    <el-button style="margin-left: 20px;" type="primary" size="small"
                        @click="addTaskDataTable()">添加表格</el-button>
                </el-row>
                <el-card style="margin-top:20px" v-for="(item, i) in TaskDataTables" :key="item.id" shadow="never">

                    <template #header>
                        <div style="text-align: right;">
                            <el-button type="danger" link :icon="Delete"
                                @click="deleteTaskDataTable(i - 1)"></el-button>
                        </div>
                    </template>
                    <dataTable :table-date="item" :key="'dataTable' + i">
                    </dataTable>
                </el-card>
            </div>
            <div style="margin-left: 120px;">
                <el-row style="margin-top: 20px; margin-bottom: 20px;">
                    <span>实验思考题：</span>
                </el-row>
                <el-row style="margin-top: 10px; margin-bottom: 10px;" v-for="(item, i) in taskQuestions" :key="i">
                    <el-tag closable class="mx-1" @close="removeQuestion(i)">{{ item.question }}</el-tag>
                </el-row>
                <el-row>
                    <el-col :span="21">
                        <el-input v-model="question" placeholder="添加实验思考题"></el-input>
                    </el-col>
                    <el-col :span=3 style="padding-left: 20px;">
                        <el-button type="primary" circle size="small" :icon="Check" @click="addTaskQuestion()">
                        </el-button>
                    </el-col>
                </el-row>

            </div>
            <el-form-item style="margin-top: 50px;">
                <el-button type="primary" size="small" @click="addTaskTemplateSubmit(addTaskFormRef)">添加实验</el-button>
                <el-button size="small" @click="newTaskFormReset()">清除内容</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script setup lang="ts">
import { onBeforeMount, ref, reactive } from 'vue';
import { ElMessage, type FormInstance, type FormRules } from 'element-plus'
import { Check, Delete } from '@element-plus/icons-vue'
import dataTable from "@/components/dataTable/table.vue"

import { addTaskTemplate } from "@/apis/content/teacherContent/addTaskTemplates.js";
const props = defineProps({
    courseId: Number,
    device: Object,
})
const CaseId = ref(0)
const device = ref<iecubeDevice | null>()

onBeforeMount(() => {
    CaseId.value = props.courseId
    device.value = <iecubeDevice>props.device
    taskDeviceChange()
})

const emit = defineEmits(['addSuccess'])
const addSuccess = (data) => {
    //触发自定义事件， 传数据给父组件
    emit("addSuccess", data)
}

interface BackDrop {
    id: number
    name: string
}
interface Requirement {
    id: number
    name: string
}
interface DeliverableRequirement {
    id: number
    name: string
}
interface ReferenceLink {
    id: number
    name: string
    url: string
}
interface Resource {
    id: number
    name: string
    filename: string
    originFilename: string
    type: string
}

interface experimentalSubject {
    id: number
    name: string
}

interface attention {
    id: number
    name: string
}
interface taskDetails {
    taskDataTables: string
    taskQestion: string
}

interface taskTemplate {
    id: number
    contentId: number
    num: number
    taskName: string
    taskCover: string
    taskDevice: number,
    taskDetails: string,
    backDropList: Array<BackDrop>
    requirementList: Array<Requirement>
    deliverableRequirementList: Array<DeliverableRequirement>
    referenceLinkList: Array<ReferenceLink>
    referenceFileList: Array<Resource>
    experimentalSubjectList: Array<experimentalSubject>
    attentionList: Array<attention>
}

interface iecubeDevice {
    id: number
    name: string
    connectType: string
    webBasicUrl: string
    basicDataTable: string
}

const BasicDateTable = ref(null)

const TaskDataTables = ref([])

const taskDeviceChange = () => {
    BasicDateTable.value = JSON.parse(device.value.basicDataTable)
    let dataTable = JSON.parse(JSON.stringify(BasicDateTable.value))
    dataTable.id = Date.now()
    TaskDataTables.value.push(dataTable)
}

const addTaskDataTable = () => {
    let dataTable = JSON.parse(JSON.stringify(BasicDateTable.value))
    dataTable.id = Date.now()
    TaskDataTables.value.push(dataTable)
}

const deleteTaskDataTable = (index) => {
    // if (TaskDataTables.value.length == 1) {
    //     ElMessage.warning("请至少保留一个表格")
    //     return
    // }
    TaskDataTables.value.splice(index, 1)
}

const backDrop = ref('')
const addBackDrop = () => {
    if (backDrop.value == '') {
        return
    }
    let newBackDrop = ref<BackDrop>({
        id: null,
        name: backDrop.value
    })
    if (newTaskForm.value.backDropList.length > 0 && newTaskForm.value.backDropList[0] == null) {
        newTaskForm.value.backDropList[0] = newBackDrop.value
    } else {
        newTaskForm.value.backDropList.push(newBackDrop.value)
    }
    backDrop.value = ''
}

const removeBackDrop = (index) => {
    newTaskForm.value.backDropList.splice(index, 1)
}

const requirement = ref('')
const addRequirement = () => {
    if (requirement.value != '') {
        let newRequirement = ref<Requirement>({
            id: null,
            name: requirement.value
        })
        if (newTaskForm.value.requirementList.length > 0 && newTaskForm.value.requirementList[0] == null) {
            newTaskForm.value.requirementList[0] = newRequirement.value
        } else {
            newTaskForm.value.requirementList.push(newRequirement.value)
        }
        requirement.value = ''
    }
    //console.log(newTaskForm.value)
}

const removeRequirement = (index) => {
    newTaskForm.value.requirementList.splice(index, 1)
}

const experimentalSubject = ref('')
const addExperimentalSubject = () => {
    if (experimentalSubject.value != '') {
        let newExperimentalSubject = ref<experimentalSubject>({
            id: null,
            name: experimentalSubject.value
        })
        if (newTaskForm.value.experimentalSubjectList.length > 0 && newTaskForm.value.experimentalSubjectList[0] == null) {
            newTaskForm.value.experimentalSubjectList[0] = newExperimentalSubject.value
        } else {
            newTaskForm.value.experimentalSubjectList.push(newExperimentalSubject.value)
        }
        experimentalSubject.value = ''
    }
}
const removeExperimentalSubject = (index) => {
    newTaskForm.value.experimentalSubjectList.splice(index, 1)
}

const attention = ref('')
const addAttention = () => {
    if (attention.value != '') {
        let newAttention = ref<attention>({
            id: null,
            name: attention.value
        })
        if (newTaskForm.value.attentionList.length > 0 && newTaskForm.value.attentionList[0] == null) {
            newTaskForm.value.attentionList[0] = newAttention.value
        } else {
            newTaskForm.value.attentionList.push(newAttention.value)
        }
        attention.value = ''
    }
}
const removeAttention = (index) => {
    newTaskForm.value.attentionList.splice(index, 1)
}
interface question {
    id: number
    question: string
    answer: string
}
const taskQuestions = ref<Array<question>>([])

const question = ref('')

const addTaskQuestion = () => {
    if (question.value != '') {
        let newQuestion = ref<question>({
            id: null,
            question: question.value,
            answer: null
        })
        taskQuestions.value.push(newQuestion.value)
        question.value = ''
    }
}
const removeQuestion = (index) => {
    taskQuestions.value.splice(index, 1)
}

const addTaskFormRef = ref<FormInstance>()
const newTaskForm = ref<taskTemplate>({
    id: null,
    contentId: CaseId.value,
    num: null,
    taskName: '',
    taskCover: '',
    taskDevice: null,
    taskDetails: null,
    backDropList: [],
    requirementList: [],
    deliverableRequirementList: [],
    referenceLinkList: [],
    referenceFileList: [],
    experimentalSubjectList: [],
    attentionList: []
})

const taskDetail = ref<taskDetails>({
    taskDataTables: '',
    taskQestion: ''
})

const taskFormRules = reactive<FormRules>({
    taskName: [{ required: true, message: '请输入实验名称', trigger: 'blur' }],
    num: [{ required: true, message: '请输入实验序号', trigger: 'blur' }],
})

const addTaskTemplateSubmit = async (formEl: FormInstance | undefined) => {
    if (!formEl) return
    await formEl.validate((valid, fields) => {
        if (valid) {
            newTaskForm.value.contentId = CaseId.value
            newTaskForm.value.taskDevice = device.value.id
            taskDetail.value.taskDataTables = JSON.stringify(TaskDataTables.value)
            taskDetail.value.taskQestion = JSON.stringify(taskQuestions.value)
            newTaskForm.value.taskDetails = JSON.stringify(taskDetail.value)
            // console.log(newTaskForm.value)
            let data = Object.assign({}, newTaskForm.value)
            addTaskTemplate(data).then(res => {
                if (res.state == 200) {
                    newTaskFormReset()
                    addSuccess(res.data)
                    ElMessage.success("添加成功")
                } else {
                    ElMessage.error(res.message)
                }
            })
        } else {
            console.log('error submit!', fields)
        }
    })
}

const newTaskFormReset = () => {
    newTaskForm.value.taskName = ''
    newTaskForm.value.num = null
    newTaskForm.value.taskCover = ''
    newTaskForm.value.backDropList = []
    newTaskForm.value.deliverableRequirementList = []
    newTaskForm.value.requirementList = []
    newTaskForm.value.referenceLinkList = []
    newTaskForm.value.taskDetails = null
    TaskDataTables.value = []
    taskDeviceChange()
    taskQuestions.value = []
}
</script>

<style scoped>
.bottom-row {
    margin-top: 20px;
    display: flex;
    justify-content: flex-end;
}

.mx-1 {
    margin-right: 10px;
    margin-bottom: 10px;
}
</style>