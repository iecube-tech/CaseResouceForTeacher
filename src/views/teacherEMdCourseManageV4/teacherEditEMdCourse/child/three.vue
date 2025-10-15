<template>
    <div id="pane-fiveth" class="pane" key="4">
        <div style="margin: 30px 0px;">
            <span>本节需要完善该课程的实验模版</span>
        </div>
        <div style="margin: 30px 0px;">
            <el-table :data="caseTaskTemplates" :border="true" style="width: 100%">
                <el-table-column prop="num" label="实验序号" width="60px" />
                <el-table-column prop="taskName" label="实验名称" />
                <el-table-column prop="labProc.name" label="实验指导书" />
                <el-table-column prop="weighting" label="实验权重" />
                <el-table-column prop="classHour" label="实验课时" />

                <el-table-column prop="" label="操作" width="100px">
                    <template #default="scope">
                        <el-button link type="primary" size="small" :icon="Edit"
                            @click=EditTask(scope.$index)></el-button>
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
                    <div v-if="!isEdit">
                        <span>添加实验</span>
                    </div>
                    <div v-else>
                        <span>编辑实验</span>
                    </div>
                </template>
                <emdExperimentalDesignd :key="Date.now().toString()" :course="course" :isEdit="isEdit"
                    :oldTaskTemplate="oldData" :lastTaskNum="lastTaskNum" @addSuccess="addSuccess"
                    @exitUpdate="exitUpdate" />
            </el-card>
        </div>
        <el-row class="bottom-row">
            <el-button @click="lastStep">上一步</el-button>
            <el-button type="primary" @click="addTaskTemplateNext()">下一步</el-button>
        </el-row>
    </div>
</template>

<script setup lang="ts">
import { onBeforeMount, ref } from 'vue';
import { ElMessage } from 'element-plus'
import { Delete, Edit } from '@element-plus/icons-vue'
import { contentTaskTemplates } from "@/apis/content/teacherContent/getTaskTemplates.js";
import { deleteTaskTemplate } from "@/apis/content/teacherContent/deletTaskTemplates.js";
import { UpEMdCompleton } from "@/apis/course_emd/upEMdCompletion.js";
import emdExperimentalDesignd from "./threeChild/mdExperimentalDesign.vue";
const props = defineProps({
    courseId: Number,
    course: Object
})

const CaseId = ref(0)
const course = ref()
const lastTaskNum = ref(0)

onBeforeMount(() => {
    CaseId.value = props.courseId
    course.value = props.course
    getCaseTaskTemplates(CaseId.value)
})

const getCaseTaskTemplates = (id) => {
    contentTaskTemplates(id).then(res => {
        if (res.state == 200) {
            caseTaskTemplates.value = res.data
            if (caseTaskTemplates.value.length > 0) {
                lastTaskNum.value = caseTaskTemplates.value[caseTaskTemplates.value.length - 1].num
            }
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
    taskDevice: number,
    taskDataTables: string,
    backDropList: Array<BackDrop>
    requirementList: Array<Requirement>
    deliverableRequirementList: Array<DeliverableRequirement>
    referenceLinkList: Array<ReferenceLink>
    referenceFileList: Array<Resource>
    classHour: number
    weighting: number
}

interface iecubeDevice {
    id: number
    name: string
    connectType: string
    webBasicUrl: string
    basicDataTable: string
}

const caseTaskTemplates = ref<Array<taskTemplate>>([])

const addSuccess = (data) => {
    caseTaskTemplates.value = data
    if (caseTaskTemplates.value.length > 0) {
        lastTaskNum.value = caseTaskTemplates.value[caseTaskTemplates.value.length - 1].num
    }
}

const exitUpdate = () => {
    isEdit.value = false
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
    if (caseTaskTemplates.value.length < 1) {
        ElMessage.warning("请完成实验设计")
    }
    UpEMdCompleton(CaseId.value, 2).then(res => {
        if (res.state == 200) {
            let completion = res.data.completion
            nextStep(completion)
        }
        else {
            ElMessage.error(res.message)
        }
    })
}
const isEdit = ref(false)
const oldData = ref<taskTemplate>()
const EditTask = (index) => {
    console.log(caseTaskTemplates.value[index])
    oldData.value = JSON.parse(JSON.stringify(caseTaskTemplates.value[index]))
    isEdit.value = true
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