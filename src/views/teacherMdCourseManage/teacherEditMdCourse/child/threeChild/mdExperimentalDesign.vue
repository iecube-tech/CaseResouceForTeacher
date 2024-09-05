<template>
    <div>
        <el-form label-width="150px" ref="addTaskFormRef" :model="newTaskForm" :rules="taskFormRules">
            <el-form-item label="实验序号：" prop="num">
                <el-input-number :min="1" :max="25" v-model="newTaskForm.num"></el-input-number>
            </el-form-item>
            <el-form-item label="实验名称：" prop="taskName">
                <el-input style="width: 420px;" v-model="newTaskForm.taskName"></el-input>
            </el-form-item>
            <el-form-item label="实验指导书：" prop="taskMdDoc">
                <el-select v-model="newTaskForm.taskMdDoc" placeholder="选择指导书" style="width: 420px;"
                    @change="EditTaskName()">
                    <el-option v-for="(item, i) in chaptetList" :key="i" :label="item.name" :value="item.id" />
                </el-select>
            </el-form-item>
            <!-- <el-form-item label="实验内容：" prop="taskDetails"> -->
            <el-form-item label="实验内容：">

            </el-form-item>
            <div style="margin-left: 120px;">
                <el-row style="margin-top: 20px; margin-bottom: 20px;">
                    <span>思考题：</span>
                </el-row>
                <el-row style="margin-top: 10px; margin-bottom: 10px;" v-for="(item, i) in taskQuestions" :key="i">
                    <el-tag closable class="mx-1" @close="removeQuestion(i)">{{ item.question }}</el-tag>
                </el-row>
                <el-row>
                    <el-col :span="21">
                        <el-input v-model="question" placeholder="添加实验思考题"></el-input>
                    </el-col>
                    <el-col :span=3 style="padding-left: 20px;">
                        <el-button type="primary" circle size="small" :icon="Plus" @click="addTaskQuestion()">
                        </el-button>
                    </el-col>
                </el-row>

            </div>
            <el-form-item v-if="!props.isEdit" style="margin-top: 50px;">
                <el-button type="primary" size="small" @click="addTaskTemplateSubmit(addTaskFormRef)">添加实验</el-button>
                <el-button size="small" @click="newTaskFormReset()">清除内容</el-button>
            </el-form-item>
            <el-form-item v-else style="margin-top: 50px;">
                <el-button type="primary" size="small" @click="EditComplation(addTaskFormRef)">完成</el-button>
                <el-button size="small" @click="EditCancel()">取消</el-button>
            </el-form-item>
        </el-form>


    </div>
</template>

<script setup lang="ts">
import { onBeforeMount, ref, reactive } from 'vue';
import { ElMessage, type FormInstance, type FormRules } from 'element-plus';
import { Check, Plus, Delete } from '@element-plus/icons-vue';
import { addTaskTemplate } from "@/apis/content/teacherContent/addTaskTemplates.js";
import { updateTaskTemplate } from "@/apis/content/updateTaskTemplate.js";
import { GetChapterListByCourseId } from "@/apis/doc_md/getChapterListByCourse.js"
const props = defineProps({
    course: Object,
    isEdit: Boolean,
    oldTaskTemplate: Object,
    lastTaskNum: Number,
})

onBeforeMount(() => {
    courseId.value = props.course.id
    course.value = props.course
    lastTaskNum.value = props.lastTaskNum
    newTaskForm.value.taskDevice = course.value.deviceId
    newTaskForm.value.num = lastTaskNum.value + 1
    getChapterListByCourseId()
    if (props.isEdit) {
        // console.log(props.oldTaskTemplate)
        newTaskForm.value = <any>props.oldTaskTemplate
        if (newTaskForm.value.taskDetails != null || newTaskForm.value.taskDetails != '') {
            taskDetail.value = <any>JSON.parse(newTaskForm.value.taskDetails)
            taskQuestions.value = JSON.parse(taskDetail.value.taskQestion)
        }
    }

})

const courseId = ref(0)
const course = ref()
const lastTaskNum = ref(0)

interface taskTemplate {
    id: number
    contentId: number
    num: number
    taskName: string
    taskCover: string
    taskDevice: number,
    taskDetails: string,
    taskMdDoc: number
}

interface taskDetails {
    taskDataTables: string
    taskQestion: string
}

const addTaskFormRef = ref<FormInstance>()
const newTaskForm = ref<taskTemplate>({
    id: null,
    contentId: courseId.value,
    num: null,
    taskName: '',
    taskCover: '',
    taskDevice: null,
    taskDetails: null,
    taskMdDoc: null,
})

const taskDetail = ref<taskDetails>({
    taskDataTables: '',
    taskQestion: ''
})

interface question {
    id: number
    question: string
    answer: string
}
const taskQuestions = ref<Array<question>>([])

const question = ref('')
const chaptetList = ref([])
const getChapterListByCourseId = () => {
    GetChapterListByCourseId(course.value.mdCourse).then(res => {
        if (res.state == 200) {
            chaptetList.value = res.data
        } else {
            ElMessage.error(res.message)
        }
    })
}

const EditTaskName = () => {
    console.log('name')
    if (newTaskForm.value.taskName == '' || newTaskForm.value.taskName == null) {
        for (let i = 0; i < chaptetList.value.length; i++) {
            if (chaptetList.value[i].id == newTaskForm.value.taskMdDoc) {
                newTaskForm.value.taskName = chaptetList.value[i].name
                return
            }
        }
    }
}
const addTaskQuestion = () => {
    if (question.value != '') {
        let newQuestion = ref<question>({
            id: null,
            question: question.value,
            answer: null
        })
        taskQuestions.value.push(newQuestion.value)
        taskDetail.value.taskQestion = JSON.stringify(taskQuestions.value)
        newTaskForm.value.taskDetails = JSON.stringify(taskDetail.value)
        question.value = ''
    }
}
const removeQuestion = (index) => {
    taskQuestions.value.splice(index, 1)
    taskDetail.value.taskQestion = JSON.stringify(taskQuestions.value)
    newTaskForm.value.taskDetails = JSON.stringify(taskDetail.value)
}

const taskFormRules = reactive<FormRules>({
    taskName: [{ required: true, message: '请输入实验名称', trigger: 'blur' }],
    num: [{ required: true, message: '请输入实验序号', trigger: 'blur' }],
    taskMdDoc: [{ required: true, message: '请选择实验指导书', trigger: 'blur' }],
    taskDetails: [{ required: true, message: '请设计思考题', trigger: 'blur' }],
})

const emit = defineEmits(['addSuccess', 'exitUpdate'])
const addSuccess = (data) => {
    //触发自定义事件， 传数据给父组件
    emit("addSuccess", data)
}

const exitUpdate = () => {
    emit("exitUpdate")
}

const addTaskTemplateSubmit = async (formEl: FormInstance | undefined) => {
    if (!formEl) return
    await formEl.validate((valid, fields) => {
        if (valid) {
            newTaskForm.value.contentId = courseId.value
            newTaskForm.value.taskDevice = course.value.deviceId
            console.log(newTaskForm.value)
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

const EditComplation = async (formEl: FormInstance | undefined) => {
    if (!formEl) return
    await formEl.validate((valid, fields) => {
        if (valid) {
            let data = Object.assign({}, newTaskForm.value)
            updateTaskTemplate(data).then(res => {
                if (res.state == 200) {
                    newTaskFormReset()
                    addSuccess(res.data)
                    exitUpdate()
                    ElMessage.success("更新成功")
                } else {
                    ElMessage.error(res.message)
                }
            })
        } else {
            console.log('error submit!', fields)
        }
    })
}

const EditCancel = () => {
    newTaskFormReset()
    exitUpdate()
}
const newTaskFormReset = () => {
    newTaskForm.value.taskName = ''
    newTaskForm.value.num = null
    newTaskForm.value.taskCover = ''
    newTaskForm.value.taskDetails = null
    newTaskForm.value.taskMdDoc = null
    taskQuestions.value = []
}
</script>
<style scoped></style>