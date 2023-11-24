<template>
    <div id="pane-fiveth" class="pane" key="4">
        <div style="margin: 30px 0px;">
            <span>本节需要完善该课程的实验模版</span>
        </div>
        <div style="margin: 30px 0px;">
            <el-table :data="caseTaskTemplates" :border="true" style="width: 100%">
                <el-table-column prop="num" label="实验序号" width="60px" />
                <el-table-column prop="taskName" label="实验名称" />

                <el-table-column label="实验背景">
                    <template #default="scope">
                        <ol>
                            <li v-for="i in scope.row.backDropList.length" :key="i">
                                {{ scope.row.backDropList[i - 1].name }}
                            </li>
                        </ol>
                    </template>
                </el-table-column>

                <el-table-column label="实验要求">
                    <template #default="scope">
                        <ol>
                            <li v-for="i in scope.row.requirementList.length" :key="i">
                                {{ scope.row.requirementList[i - 1].name }}
                            </li>
                        </ol>
                    </template>
                </el-table-column>
                <el-table-column label="实验交付物要求">
                    <template #default="scope">
                        <ol>
                            <li v-for="i in scope.row.deliverableRequirementList.length" :key="i">
                                {{ scope.row.deliverableRequirementList[i - 1].name }}
                            </li>
                        </ol>
                    </template>
                </el-table-column>
                <el-table-column label="实验参考链接">
                    <template #default="scope">
                        <ol>
                            <li v-for="i in scope.row.referenceLinkList.length" :key="i">
                                {{ scope.row.referenceLinkList[i - 1].name + "：" +
                                    scope.row.referenceLinkList[i - 1].url }}
                            </li>
                        </ol>
                    </template>
                </el-table-column>
                <el-table-column label="实验参考指导">
                    <template #default="scope">
                        <div>
                            <ol>
                                <li v-for="i in scope.row.referenceFileList.length" :key="i">
                                    {{ scope.row.referenceFileList[i - 1].originFilename }}
                                </li>
                            </ol>
                        </div>
                        <div style="display:flex; justify-content:center">
                            <el-upload class="upload-demo"
                                :action="'/dev-api/task_template/task_template_add_resource/' + CaseId + '/' + scope.row.id"
                                :on-success="uploadFileSuccess" :show-file-list="false">
                                <el-button type="primary" size="small">上传</el-button>
                            </el-upload>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column prop="" label="操作" width="100px">
                    <template #default="scope">
                        <el-popconfirm title="确定删除吗?" @confirm="deleteCaseTaskTemplateSubmit(scope.row.id)">
                            <template #reference>
                                <el-button link type="danger" size="small" :icon="Delete"></el-button>
                            </template>
                        </el-popconfirm>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <div style="margin: 30px 0px;">
            <el-card style="min-height:280px;" shadow="never">
                <template #header>
                    <div>
                        <span>添加实验</span>
                    </div>
                </template>
                <div>
                    <el-form label-width="160px" ref="addTaskFormRef" :model="newTaskForm" :rules="taskFormRules">
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

                        <el-form-item label="实验要求：" prop="requirementList">
                            <div v-if="newTaskForm.requirementList.length > 0">
                                <el-tag closable v-for="i in newTaskForm.requirementList.length" :key="i" class="mx-1"
                                    @close="removeRequirement(i - 1)">
                                    {{ newTaskForm.requirementList[i - 1].name }}
                                </el-tag>
                            </div>
                        </el-form-item>
                        <el-form-item>
                            <el-input style="max-width: 400px; margin-right: 20px;" v-model="requirement"
                                placeholder="请分条输入实验要求，每一条完成后点击右侧保存">
                            </el-input>
                            <el-button type="primary" circle size="small" :icon="Check"
                                @click="addRequirement()"></el-button>
                        </el-form-item>
                        <el-form-item label="实验交付物要求：" prop="deliverableRequirementList">
                            <div v-if="newTaskForm.deliverableRequirementList.length > 0">
                                <el-tag closable v-for="i in newTaskForm.deliverableRequirementList.length" class="mx-1"
                                    :key="i" @close="removeDeliverableRequirement(i - 1)">
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

                        <div style="margin-left: 160px;">
                            <el-form label-width="80px" ref="addReferenceLinkRef" :model="newReferenceLinkForm"
                                :rules="newReferenceLinkFormRules">
                                <el-form-item label="名称：" prop="name">
                                    <el-input style="max-width: 320px; margin-right: 20px;"
                                        v-model="newReferenceLinkForm.name" placeholder="请分条输入实验参考链接的名称和URL">
                                    </el-input>
                                </el-form-item>

                                <el-form-item label="url：" prop="url">
                                    <el-input style="max-width: 320px; margin-right: 20px;"
                                        v-model="newReferenceLinkForm.url" placeholder="输入完成点击右侧保存">
                                    </el-input>
                                    <el-button type="primary" circle size="small" :icon="Check"
                                        @click="addReferenceLinkSubmit(addReferenceLinkRef)"></el-button>
                                </el-form-item>
                            </el-form>
                        </div>


                        <el-form-item style="margin-top: 50px;">
                            <el-button type="primary" size="small"
                                @click="addTaskTemplateSubmit(addTaskFormRef)">添加实验</el-button>
                            <el-button size="small" @click="newTaskFormReset()">清除内容</el-button>
                        </el-form-item>
                    </el-form>
                </div>
            </el-card>
        </div>
        <el-row class="bottom-row">
            <el-button @click="lastStep">上一步</el-button>
            <el-button type="primary" @click="addTaskTemplateNext()">下一步</el-button>
        </el-row>
    </div>
</template>

<script setup lang="ts">
import { onBeforeMount, ref, reactive } from 'vue';
import { ElMessage, type FormInstance, type FormRules } from 'element-plus'
import { Check, Delete } from '@element-plus/icons-vue'
import type { UploadProps } from 'element-plus'

import { addTaskTemplate } from "@/apis/content/teacherContent/addTaskTemplates.js";
import { contentTaskTemplates } from "@/apis/content/teacherContent/getTaskTemplates.js";
import { deleteTaskTemplate } from "@/apis/content/teacherContent/deletTaskTemplates.js";
import { updateCaseTaskTemplate } from "@/apis/content/teacherContent/updateCaseTaskTemplate.js";
const props = defineProps({
    courseId: Number
})
const CaseId = ref(0)

onBeforeMount(() => {
    CaseId.value = props.courseId
    getCaseTaskTemplates(CaseId.value)
})

const getCaseTaskTemplates = (id) => {
    contentTaskTemplates(id).then(res => {
        if (res.state == 200) {
            caseTaskTemplates.value = res.data
        } else {
            ElMessage.error("获取课程实验列表异常")
        }
    })
}
const emit = defineEmits(['nextStep', 'lastStep'])
const nextStep = (completion: number) => {
    emit("nextStep", completion)
}
const lastStep = () => {
    emit('lastStep')
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

interface taskTemplate {
    id: number
    contentId: number
    num: number
    taskName: string
    taskCover: string
    backDropList: Array<BackDrop>
    requirementList: Array<Requirement>
    deliverableRequirementList: Array<DeliverableRequirement>
    referenceLinkList: Array<ReferenceLink>
    referenceFileList: Array<Resource>
}

const caseTaskTemplates = ref<Array<taskTemplate>>([])

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
            console.log(newTaskForm.value)
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
    console.log(newTaskForm.value)
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
    console.log(newTaskForm.value)
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
            console.log(newTaskForm.value)
            let data = Object.assign({}, newTaskForm.value)
            addTaskTemplate(data).then(res => {
                if (res.state == 200) {
                    caseTaskTemplates.value = res.data
                    newTaskFormReset()
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
}

const uploadFileSuccess: UploadProps['onSuccess'] = (
    response,
    uploadFile
) => {
    if (response.state == 200) {
        caseTaskTemplates.value = response.data
    }
}

const deleteCaseTaskTemplateSubmit = (taskTemplateId) => {
    deleteTaskTemplate(CaseId.value, taskTemplateId).then(res => {
        if (res.state == 200) {
            caseTaskTemplates.value = res.data
        } else {
            ElMessage.error(res.message)
        }
    })
}

const addTaskTemplateNext = () => {
    updateCaseTaskTemplate(CaseId.value).then(res => {
        if (res.state == 200) {
            let completion = res.data.completion
            nextStep(completion)
        } else {
            ElMessage.error(res.message)
        }
    })
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