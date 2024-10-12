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
                            <el-upload class="upload-demo" :headers="headers"
                                :action="'/dev-api/task_template/task_template_add_resource/' + CaseId + '/' + scope.row.id"
                                :on-success="uploadFileSuccess" :show-file-list="false">
                                <el-button type="primary" size="small">上传</el-button>
                            </el-upload>
                        </div>
                    </template>
                </el-table-column>
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
                <div>
                    <el-form label-width="100px">
                        <el-form-item label="实验设备：" prop="taskDevice">
                            <el-radio-group v-model="device" @change="DeviceChange()" :disabled="isEdit">
                                <el-radio :label="0">无设备</el-radio>
                                <el-radio v-for="item in iecubeDeviceList" :label="item.id">{{ item.name }}</el-radio>
                            </el-radio-group>
                        </el-form-item>
                    </el-form>
                </div>
                <el-divider />
                <noDeviceTaskTemplate v-if="device == 0 && CaseId" :key="Date.now().toString()" :courseId="CaseId"
                    :isEdit="isEdit" :oldTaskTemplate="oldData" @addSuccess="addSuccess" @exitUpdate="exitUpdate">
                </noDeviceTaskTemplate>
                <iecube3835TaskTemplate v-if="device == 1 && curttenDevice && CaseId" :key="Date.now().toString()"
                    :device="curttenDevice" :courseId="CaseId" :isEdit="isEdit" :oldTaskTemplate="oldData"
                    @addSuccess="addSuccess" @exitUpdate="exitUpdate">
                </iecube3835TaskTemplate>
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
import type { UploadProps } from 'element-plus'
import { contentTaskTemplates } from "@/apis/content/teacherContent/getTaskTemplates.js";
import { deleteTaskTemplate } from "@/apis/content/teacherContent/deletTaskTemplates.js";
import { updateCaseTaskTemplate } from "@/apis/content/teacherContent/updateCaseTaskTemplate.js";
import { allIecuebDevice } from "@/apis/iecubeDevice/allIecubeDevices.js"

import noDeviceTaskTemplate from '@/views/teacherCourseManage/teacherEditCourse/child/fiveChild/noDevice.vue'
import iecube3835TaskTemplate from '@/views/teacherCourseManage/teacherEditCourse/child/fiveChild/iecube3835.vue'
const props = defineProps({
    courseId: Number
})

const headers = ref({
    'x-access-token': localStorage.getItem("x-access-token"),
    'x-access-type': localStorage.getItem("x-access-type")
})

const CaseId = ref(0)

onBeforeMount(() => {
    CaseId.value = props.courseId
    getCaseTaskTemplates(CaseId.value)
    getIecubeDeviceList()
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
const getIecubeDeviceList = () => {
    allIecuebDevice().then(res => {
        if (res.state == 200) {
            iecubeDeviceList.value = res.data
        } else {
            ElMessage.error("获取iecube设备列表异常")
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
}

interface iecubeDevice {
    id: number
    name: string
    connectType: string
    webBasicUrl: string
    basicDataTable: string
}

const device = ref<number | null>(0)
const curttenDevice = ref<iecubeDevice | null>()
const DeviceChange = () => {
    for (let i = 0; i < iecubeDeviceList.value.length; i++) {
        if (iecubeDeviceList.value[i].id == device.value) {
            curttenDevice.value = iecubeDeviceList.value[i]
        }
    }
    console.log(curttenDevice.value)
}

const iecubeDeviceList = ref<Array<iecubeDevice>>([])
const caseTaskTemplates = ref<Array<taskTemplate>>([])

const addSuccess = (data) => {
    console.log('添加成功')
    console.log(data)
    caseTaskTemplates.value = data
}

const exitUpdate = () => {
    isEdit.value = false
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
const isEdit = ref(false)
const oldData = ref<taskTemplate>()
const EditTask = (index) => {
    console.log(caseTaskTemplates.value[index])
    // 修改taskDeviceId
    if (caseTaskTemplates.value[index].taskDevice != null) {
        device.value = <any>JSON.parse(JSON.stringify(caseTaskTemplates.value[index].taskDevice))
    } else {
        device.value = 0
    }
    oldData.value = JSON.parse(JSON.stringify(caseTaskTemplates.value[index]))
    isEdit.value = true
    DeviceChange()
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