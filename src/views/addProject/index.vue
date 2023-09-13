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
        <div :style="getStyle()">
            <el-form :model="addProjectForm">
                <el-card style="height: 180px;" :shadow="'never'">
                    <el-row>
                        <h1 style="font-size: 24px; color: #33b8b9;">发布信息</h1>
                    </el-row>

                    <el-row style="margin-top: 10px;">
                        <el-form-item label="项目名称：">
                            <el-input v-model="addProjectForm.projectName"></el-input>
                        </el-form-item>
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
                    <el-row style="margin-top: 20px;">
                        <el-col :span="3" style="text-align: center;">
                            <el-button type="warning" link @click="addTask">添加任务</el-button>
                        </el-col>
                        <el-col :span="8" style="text-align: center;">
                            <h2>任务要求</h2>
                        </el-col>
                        <el-col :span="8" style="text-align: center;">
                            <h2>任务交付物要求</h2>
                        </el-col>
                        <el-col :span="4" style="text-align: center;">
                            <h2>任务周期</h2>
                        </el-col>


                    </el-row>
                    <el-row v-if="addProjectForm.task" v-for="i in addProjectForm.task.length"
                        style=" min-height: 300px; display: flex; flex-direction: row;">
                        <el-divider />
                        <el-col :span="3"
                            style="display: flex; flex-direction: column; justify-content: center; align-items: center;">
                            <div class="task-title">
                                <el-button class="btn" type="warning" link @click="modify(i - 1)">
                                    {{ addProjectForm.task[i - 1].taskName }}</el-button>
                            </div>
                        </el-col>
                        <el-col :span="8" class="task-item">
                            <div v-for="j in addProjectForm.task[i - 1].requirementList.length">
                                {{ addProjectForm.task[i - 1].requirementList[j - 1].name }}
                            </div>
                        </el-col>

                        <el-col :span="8" class="task-item">
                            <div v-for="k in addProjectForm.task[i - 1].deliverableRequirementList.length ">
                                {{ addProjectForm.task[i - 1].deliverableRequirementList[k - 1].name }}
                            </div>
                        </el-col>

                        <el-col :span="4" class="task-item">

                            <el-date-picker v-model="addProjectForm.task[i - 1].taskStartTime" type="datetime"
                                placeholder="选择开始日期时间" :size="'small'" style="max-width:150px" />
                            <el-date-picker v-model="addProjectForm.task[i - 1].taskEndTime" type="datetime"
                                placeholder="选择结束日期时间" :size="'small'" style="margin-top: 20px; max-width:150px" />
                        </el-col>

                        <el-col :span="1" class="task-item">
                            <el-popconfirm width="220" confirm-button-text="OK" cancel-button-text="取消" :icon="InfoFilled"
                                icon-color="#33b8b9" title="确定删除该任务吗?" @confirm="deleteTask(i - 1)">
                                <template #reference>
                                    <el-button type="danger" :icon="Delete" link />
                                </template>
                            </el-popconfirm>

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

        <el-dialog v-model="ModifyTaskDialog" title="编辑任务" width="70%">
            <template #default>
                <div class="editTask">
                    <div class="editTaskItem">
                        <span style="width: 120px;">任务编号</span>
                        <el-input-number :min="1" v-model="modifyTask.num"></el-input-number>
                    </div>
                    <div class="editTaskItem">
                        <span style="width: 120px;">任务名称</span>
                        <el-input v-model="modifyTask.taskName" style="max-width: 350px;"></el-input>
                    </div>
                    <div class="editTaskItem">
                        <span style="width: 120px;">任务周期</span>
                        <el-date-picker v-model="modifyTask.taskStartTime" type="datetime" placeholder="选择开始日期时间"
                            style="max-width:200px" />
                        <el-date-picker v-model="modifyTask.taskEndTime" type="datetime" placeholder="选择结束日期时间"
                            style="max-width:200px; margin-left: 20px;" />
                    </div>
                    <div class="editTaskItem">
                        <span style="width: 120px;">任务要求</span>
                        <el-button type="primary" link @click="AddRequirementDialog = true">添加</el-button>
                    </div>

                    <div class="itemlist" style="padding-left: 120px;">
                        <el-tag v-for="i in modifyTask.requirementList.length" :key="i" size="small" closable
                            @close="requirementClose(i - 1)" style="margin-right: 10px;">
                            {{ modifyTask.requirementList[i - 1].name }}
                        </el-tag>
                    </div>

                    <div class="editTaskItem">
                        <span style="width: 120px;">任务交付物要求</span>
                        <el-button type="primary" link @click="AddDeliverableRequirementDialog = true">添加</el-button>
                    </div>

                    <div class="itemlist" style="padding-left: 120px;">
                        <el-tag v-for="i in modifyTask.deliverableRequirementList.length" :key="i" size="small" closable
                            @close="deliverableRequirementClose(i - 1)" style="margin-right: 10px;">
                            {{ modifyTask.deliverableRequirementList[i - 1].name }}
                        </el-tag>
                    </div>

                    <div class="editTaskItem">
                        <span style="width: 120px;">任务参考链接</span>
                        <el-button type="primary" link @click="AddReferenceLinkDialog = true">添加</el-button>
                    </div>

                    <div class="itemlist" style="padding-left: 120px;">
                        <el-tag v-for="i in modifyTask.referenceLinkList.length" :key="i" size="small" closable
                            @close="referenceLinkClose(i - 1)" style="margin-right: 10px;">
                            {{ modifyTask.referenceLinkList[i - 1].name + "：" + modifyTask.referenceLinkList[i - 1].url }}
                        </el-tag>
                    </div>

                    <div class="editTaskItem">
                        <span style="width: 120px;">任务参考文件</span>
                        <el-upload class="upload" action="/local-resource/upfile" multiple :on-success="uploadSuccess"
                            :show-file-list="false">
                            <el-button type="primary" link>上传</el-button>
                        </el-upload>
                    </div>

                    <div class="itemlist" style="padding-left: 120px;">
                        <el-tag v-for="i in modifyTask.referenceFileList.length" :key="i" size="small" closable
                            @close="referenceFileClose(i - 1)" style="margin-right: 10px;">
                            <el-link @click="clickFile(modifyTask.referenceFileList[i - 1])">
                                {{ modifyTask.referenceFileList[i - 1].originFilename }}
                            </el-link>
                        </el-tag>
                    </div>

                </div>

                <el-dialog v-model="AddRequirementDialog" width="50%" title="新增任务要求" append-to-body>
                    <div class="item">
                        <span style="width: 120px;">任务要求：</span>
                        <el-input v-model="requirementName"></el-input>
                    </div>
                    <template #footer>
                        <span class="dialog-footer">
                            <el-button @click="AddRequirementDialog = false">取消</el-button>
                            <el-button type="primary" @click="AddRequirement">
                                添加
                            </el-button>
                        </span>
                    </template>
                </el-dialog>

                <el-dialog v-model="AddDeliverableRequirementDialog" width="50%" title="新增交付物要求" append-to-body>
                    <div class="item">
                        <span style="width: 120px;">交付物要求：</span>
                        <el-input v-model="deliverableRequirementName"></el-input>
                    </div>
                    <template #footer>
                        <span class="dialog-footer">
                            <el-button @click="AddDeliverableRequirementDialog = false">取消</el-button>
                            <el-button type="primary" @click="AddDeliverableRequirement">
                                添加
                            </el-button>
                        </span>
                    </template>
                </el-dialog>

                <el-dialog v-model="AddReferenceLinkDialog" width="50%" title="新增参考链接" append-to-body>
                    <div class="item">
                        <span style="width: 120px;">名称：</span>
                        <el-input v-model="referenceLinkName"></el-input>
                    </div>
                    <div class="item">
                        <span style="width: 120px;">URL:</span>
                        <el-input v-model="referenceLinkUrl"></el-input>
                    </div>
                    <template #footer>
                        <span class="dialog-footer">
                            <el-button @click="AddReferenceLinkDialog = false">取消</el-button>
                            <el-button type="primary" @click="AddReferenceLink">
                                添加
                            </el-button>
                        </span>
                    </template>
                </el-dialog>


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
                <el-form-item label="项目名称：" prop="projectName">
                    <span>{{ ruleForm.projectName }}</span>
                </el-form-item>

                <el-form-item label="项目时间：" prop="date">
                    <span v-if="ruleForm.date.length == 2">
                        {{ ruleForm.date[0].toLocaleString("zh-CN") + "-" +
                            ruleForm.date[1].toLocaleString("zh-CN") }}
                    </span>
                </el-form-item>

                <el-form-item label="参与学生：" prop="students">
                    <template #default>
                        <div class="editTask">
                            <div><span>{{ ruleForm.students.length + '人参与' }}</span></div>
                            <div style="display: flex; flex-wrap: wrap;">
                                <span v-for="item in ruleForm.students " style="margin-right: 5px;">{{ item.studentName
                                }}</span>
                            </div>
                        </div>
                    </template>
                </el-form-item>

                <el-form-item label="任务列表：" prop="task">
                    <template #default>
                        <div class="editTask">
                            <div class="editTask" v-for="item in ruleForm.task">
                                <div>
                                    {{ '任务' + item.num + "：" + item.taskName }}
                                </div>
                                <div>
                                    <span style="margin-right: 10px; color: #33b8b9;">任务时间：</span>
                                    <span v-if="item.taskStartTime && item.taskEndTime">
                                        {{ item.taskStartTime.toLocaleString("zh-CN") + "-" +
                                            item.taskEndTime.toLocaleString("zh-CN") }}
                                    </span>

                                </div>
                                <div style="display: flex; flex-wrap: wrap;">
                                    <span style="margin-right: 10px; color: #33b8b9;">任务要求：</span>
                                    <span style="margin-right: 10px;" v-for="i in item.requirementList.length">
                                        {{ i + "." + item.requirementList[i - 1].name }}
                                    </span>
                                </div>
                                <div style="display: flex; flex-wrap: wrap;">
                                    <span style="margin-right: 10px; color: #33b8b9;">交付物要求：</span>
                                    <span style="margin-right: 10px;" v-for="i in item.deliverableRequirementList.length">
                                        {{ i + "." + item.deliverableRequirementList[i - 1].name }}
                                    </span>
                                </div>
                                <div style="display: flex; flex-wrap: wrap;">
                                    <span style="margin-right: 10px; color: #33b8b9;">参考链接：</span>
                                    <span style="margin-right: 10px;" v-for="i in item.referenceLinkList.length">
                                        {{ i + "." + item.referenceLinkList[i - 1].name + '：' +
                                            item.referenceLinkList[i - 1].url }}
                                    </span>
                                </div>
                                <div style="display: flex; flex-wrap: wrap;">
                                    <span style="margin-right: 10px; color: #33b8b9;">参考资料：</span>
                                    <span style="margin-right: 10px;" v-for="i in item.referenceFileList.length">
                                        {{ i + "." + item.referenceFileList[i - 1].originFilename }}
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
import { publishProject } from '@/apis/project/publish.js'
import router from '@/router';
import { ElLoading } from 'element-plus'
import {
    InfoFilled,
    Delete,
    Edit,
} from '@element-plus/icons-vue'

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

const addTaskStatus = ref(0)
const addTask = () => {
    addTaskStatus.value = 1
    ModifyTaskDialog.value = true
    modifyTask.value.num = addProjectForm.value.task.length + 1
}

const deleteTask = (index) => {
    addProjectForm.value.task.splice(index, 1)
}

const ModifyTaskDialog = ref(false)
const modifyTask = ref({
    num: null,
    taskName: '',
    taskStartTime: '',
    taskEndTime: '',
    requirementList: [],
    deliverableRequirementList: [],
    referenceLinkList: [],
    referenceFileList: [],
})

const modifyTaskIndex = ref()
const modify = (index) => {
    modifyTaskIndex.value = index
    ModifyTaskDialog.value = true
    let data = JSON.stringify(addProjectForm.value.task[index])
    modifyTask.value = JSON.parse(data)
}

const saveModify = () => {
    if (addTaskStatus.value == 0) {
        let data = JSON.stringify(modifyTask.value)
        addProjectForm.value.task[modifyTaskIndex.value] = JSON.parse(data)
        ModifyTaskDialog.value = false
    }
    if (addTaskStatus.value == 1) {
        addProjectForm.value.task.push(modifyTask.value)
        ModifyTaskDialog.value = false
        addTaskStatus.value = 0
    }
}

const requirementName = ref('')
const deliverableRequirementName = ref('')
const referenceLinkName = ref('')
const referenceLinkUrl = ref('')
const AddRequirementDialog = ref(false)
const AddDeliverableRequirementDialog = ref(false)
const AddReferenceLinkDialog = ref(false)

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


const ruleFormRef = ref<FormInstance>()
const checkForm = ref(false)
interface task {
    num: number
    taskName: string
    requirementList: []
    deliverableRequirementList: []
    referenceLinkList: []
    referenceFileList: []
    taskStartTime: Date
    taskEndTime: Date
}


interface RuleForm {
    caseId: string,
    projectName: string,
    date: Array<3>,
    task: Array<any>,
    students: Array<any>,
}

const ruleForm = reactive<RuleForm>({
    caseId: '',
    projectName: '',
    date: [null, null],
    task: [],
    students: [],
})

const rules = reactive<FormRules>({
    caseId: [{ required: true, message: '没有caseId', trigger: 'blur' }],
    projectName: [{ required: true, message: '没有项目名', trigger: 'blur' }],
    date: [
        {
            required: true,
            validator: function (rule, value, callback) {
                if (value[0] == undefined || value[1] == undefined) {
                    callback(new Error("项目起止时间错误"));
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
                const errorList = []
                for (let i = 0; i < value.length; i++) {
                    if (value[i].num == null) {
                        errorList.push("任务" + (i + 1) + '没有编号')
                    } else if (value[i].taskName == '') {
                        errorList.push("任务" + (i + 1) + '没有名称')
                    } else if (value[i].taskStartTime == undefined || value[i].taskEndTime == undefined) {
                        errorList.push("任务" + (i + 1) + '未设置任务时间')
                    } else {
                        callback();
                    }
                }
                let str: string = errorList.join();
                callback(new Error(str));
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
})

const submitForm = async (formEl: FormInstance | undefined) => {
    if (!formEl) return
    await formEl.validate((valid, fields) => {
        if (valid) {
            console.log('校验通过')
            publish()
        } else {
            console.log('error submit!', fields)
        }
    })
}

const clickPublish = () => {
    ruleForm.caseId = <string>addProjectForm.value.caseId
    ruleForm.projectName = addProjectForm.value.projectName
    ruleForm.date = <[]>addProjectForm.value.date
    ruleForm.task = <[]>addProjectForm.value.task
    ruleForm.students = <[]>addProjectForm.value.students
    checkForm.value = true
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
        if (res.state == 200) {
            ElMessage.success("发布成功")
            publishedProjectId.value = res.data
            router.push("/myproject")
            loading.close();
        } else {
            ElMessage.error("发布失败")
            loading.close();
        }
        loading.close();
    })
}
const getStyle = () => {
    if (windowWidth.value > 1700) {
        return 'padding: 20px calc(164px + 4.8vw);'
    }
    return 'padding: 20px;'
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
// 生命周期
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