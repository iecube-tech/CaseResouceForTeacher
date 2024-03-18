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
                <el-input style="max-width: 400px; margin-right: 20px;" v-model="backDrop"
                    placeholder="请分条输入实验背景，每一条完成后点击右侧保存">
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
                <el-input style="max-width: 400px; margin-right: 20px;" v-model="requirement"
                    placeholder="请分条输入实验目的，每一条完成后点击右侧保存">
                </el-input>
                <el-button type="primary" circle size="small" :icon="Check" @click="addRequirement()"></el-button>
            </el-form-item>
            <el-form-item label="实验要求：" prop="deliverableRequirementList">
                <div v-if="newTaskForm.deliverableRequirementList.length > 0">
                    <el-tag closable v-for="i in newTaskForm.deliverableRequirementList.length" class="mx-1" :key="i"
                        @close="removeDeliverableRequirement(i - 1)">
                        {{ newTaskForm.deliverableRequirementList[i - 1].name }}
                    </el-tag>
                </div>
            </el-form-item>
            <el-form-item>
                <el-input style="max-width: 400px; margin-right: 20px;" v-model="deliverableRequirement"
                    placeholder="请分条输入实验交付物要求，每一条完成后点击右侧保存">
                </el-input>
                <el-button type="primary" circle size="small" :icon="Check"
                    @click="addDeliverableRequirement()"></el-button>
            </el-form-item>

            <el-form-item label="实验参考链接：" prop="referenceLinkList">
                <div v-if="newTaskForm.referenceLinkList.length > 0">
                    <el-tag closable v-for="i in newTaskForm.referenceLinkList.length" class="mx-1" :key="i"
                        @close="removeReferenceLink(i - 1)">
                        {{ newTaskForm.referenceLinkList[i - 1].name + '：' +
            newTaskForm.referenceLinkList[i - 1].url }}
                    </el-tag>
                </div>
            </el-form-item>

            <div style="margin-left: 150px;">
                <el-form label-width="80px" ref="addReferenceLinkRef" :model="newReferenceLinkForm"
                    :rules="newReferenceLinkFormRules">
                    <el-form-item label="名称：" prop="name">
                        <el-input style="max-width: 320px; margin-right: 20px;" v-model="newReferenceLinkForm.name"
                            placeholder="请分条输入实验参考链接的名称和URL">
                        </el-input>
                    </el-form-item>

                    <el-form-item label="url：" prop="url">
                        <el-input style="max-width: 320px; margin-right: 20px;" v-model="newReferenceLinkForm.url"
                            placeholder="输入完成点击右侧保存">
                        </el-input>
                        <el-button type="primary" circle size="small" :icon="Check"
                            @click="addReferenceLinkSubmit(addReferenceLinkRef)"></el-button>
                    </el-form-item>
                </el-form>
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
import { Check } from '@element-plus/icons-vue'

import { addTaskTemplate } from "@/apis/content/teacherContent/addTaskTemplates.js";
const props = defineProps({
    courseId: Number
})
const CaseId = ref(0)

onBeforeMount(() => {
    CaseId.value = props.courseId
})
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

interface taskTemplate {
    id: number
    contentId: number
    num: number
    taskName: string
    taskCover: string
    taskDevice: number,
    taskDataTables: string,
    backDropList: Array<BackDrop>
    requirementList: Array<Requirement>
    deliverableRequirementList: Array<DeliverableRequirement>
    referenceLinkList: Array<ReferenceLink>
    referenceFileList: Array<Resource>
}
const emit = defineEmits(['addSuccess'])
const addSuccess = (data) => {
    //触发自定义事件， 传数据给父组件
    emit("addSuccess", data)
}

const addReferenceLinkRef = ref<FormInstance>()
const newReferenceLinkForm = ref<ReferenceLink>({
    id: null,
    name: '',
    url: '',
})
const newReferenceLinkFormRules = reactive<FormRules>({
    name: [{ required: true, message: '请输入参考链接名称', trigger: 'blur' }],
    url: [{ required: true, message: '请输入参考链接URL', trigger: 'blur' }],

})

const addReferenceLinkSubmit = async (formEl: FormInstance | undefined) => {
    if (!formEl) return
    await formEl.validate((valid, fields) => {
        if (valid) {
            let newReferenceLink = Object.assign({}, newReferenceLinkForm.value)
            newTaskForm.value.referenceLinkList.push(newReferenceLink)
            newReferenceLinkForm.value.name = ''
            newReferenceLinkForm.value.url = ''
            //console.log(newTaskForm.value)
        } else {
            console.log('error submit!', fields)
        }
    })
}
const removeReferenceLink = (index) => {
    newTaskForm.value.referenceLinkList.splice(index, 1)
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
const deliverableRequirement = ref('')

const addDeliverableRequirement = () => {
    if (deliverableRequirement.value != '') {
        let newDeliverableRequirement = ref<DeliverableRequirement>({
            id: null,
            name: deliverableRequirement.value
        })
        if (newTaskForm.value.deliverableRequirementList.length > 0 && newTaskForm.value.deliverableRequirementList[0] == null) {
            newTaskForm.value.deliverableRequirementList[0] = newDeliverableRequirement.value
        } else {
            newTaskForm.value.deliverableRequirementList.push(newDeliverableRequirement.value)
        }
        deliverableRequirement.value = ''
    }
    //console.log(newTaskForm.value)
}
const removeDeliverableRequirement = (index) => {
    newTaskForm.value.deliverableRequirementList.splice(index, 1)
}

const addTaskFormRef = ref<FormInstance>()
const newTaskForm = ref<taskTemplate>({
    id: null,
    contentId: CaseId.value,
    num: null,
    taskName: '',
    taskCover: '',
    taskDevice: null,
    taskDataTables: null,
    backDropList: [],
    requirementList: [],
    deliverableRequirementList: [],
    referenceLinkList: [],
    referenceFileList: [],
})

const taskFormRules = reactive<FormRules>({
    taskName: [{ required: true, message: '请输入实验名称', trigger: 'blur' }],
    num: [{ required: true, message: '请输入实验序号', trigger: 'blur' }],
    requirementList: [{
        required: true,
        validator: function (rule, value, callback) {
            if (value[0].point == '') {
                callback(new Error('没有实验要求'));
            } else {
                callback()
            }
        }, trigger: 'change'
    }],
    deliverableRequirementList: [{
        required: true,
        validator: function (rule, value, callback) {
            if (value[0].point == '') {
                callback(new Error('没有实验交付物要求'));
            } else {
                callback()
            }
        }, trigger: 'change'
    }]
})

const addTaskTemplateSubmit = async (formEl: FormInstance | undefined) => {
    if (!formEl) return
    await formEl.validate((valid, fields) => {
        if (valid) {
            newTaskForm.value.contentId = CaseId.value
            // console.log(newTaskForm.value)
            let data = Object.assign({}, newTaskForm.value)
            addTaskTemplate(data).then(res => {
                if (res.state == 200) {
                    newTaskFormReset()
                    addSuccess(res.data)
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
    newTaskForm.value.taskDevice = null
    newTaskForm.value.taskDataTables = null
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