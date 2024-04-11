<template>
    <div>
        <el-collapse v-model="activeNames" accordion style="width: 100%;">
            <el-collapse-item v-for="j in    tasks.length   " :key="tasks[j - 1].pstid"
                :title="'实验' + tasks[j - 1].taskNum + ':' + tasks[j - 1].taskName + ' ' + '(' + formatDate(tasks[j - 1].taskStartTime) + '--' + formatDate(tasks[j - 1].taskEndTime) + ')'"
                :name="'' + tasks[j - 1].taskNum" @click="changePST(tasks[j - 1].pstid)">
                <el-row class="student_commit">
                    <el-row style="font-size: 24px; color: #33b8b9">
                        <span>学生提交内容</span>
                    </el-row>
                    <el-row v-if="srcList[tasks[j - 1].taskNum - 1].length > 1" class="image_preview">
                        <el-image v-for="   i    in    tasks[j - 1].taskImgs.length   " :key="i"
                            v-if="tasks[j - 1].taskImgs.length > 1" style="width: 100px; height: 100px"
                            :src="'/local-resource/image/' + tasks[j - 1].taskImgs[i]" :zoom-rate="1.2"
                            :preview-src-list="srcList[tasks[j - 1].taskNum - 1]" :initial-index="i" fit="cover" />
                    </el-row>
                    <el-row class="file_preview">
                        <el-row style="font-size: 18px;">
                            <span>学生提交报告(请批阅)</span>
                        </el-row>
                        <el-row class="file_preview" v-if="PSTResourceVo.length > 0" :underline="false">
                            <el-row v-for=" (pstresource, i) in PSTResourceVo" :key="pstresource.id">
                                <el-col :span="12" style="display: flex; flex-direction: row; align-items: center;">
                                    <el-link style="margin-right: 20px;"
                                        @click="OpenPdf(pstresource.resource.filename, pstresource.id)">
                                        {{ pstresource.resource.originFilename }}
                                    </el-link>
                                    <dupChecking :resourceId="pstresource.resource.id" :pstId="tasks[j - 1].pstid">
                                    </dupChecking>
                                </el-col>
                                <el-col :span="12" v-if="pstresource.readOver">
                                    <el-link type="success"
                                        @click="OpenPdf(pstresource.readOver.filename, pstresource.id)">
                                        {{ pstresource.readOver.originFilename }}
                                    </el-link>
                                </el-col>
                            </el-row>
                        </el-row>
                        <el-row v-else>
                            <span>尚未提交</span>
                        </el-row>
                    </el-row>
                    <el-row class="file_preview" v-if="PSTDeviceLog.length > 0" :key="'pstDevicelog' + j">
                        <el-row style="font-size: 18px;">
                            <span>学生设备操作过程记录</span>
                        </el-row>
                        <!-- <el-row style="padding: 20px 0;" v-for="(item, a) in PSTDeviceLog" :key="item.filename">
                            <a :href="logUrl(item.filename)" target="_blank">{{ item.originFilename }}</a>
                        </el-row> -->
                        <logVisualization v-if="PSTDeviceLog.length > 0" :key="j + 'Visualization'"
                            :pstId="tasks[j - 1].pstid"></logVisualization>
                    </el-row>


                    <el-row v-if="tasks[j - 1].taskContent != null"
                        style="padding: 20px 0; display: flex; flex-direction: column;">
                        <el-row style="font-size: 18px;">
                            <span>学生留言</span>
                        </el-row>
                        <el-row style="flex-direction: column; padding: 20px 0;">
                            {{ tasks[j - 1].taskContent }}
                        </el-row>
                    </el-row>
                    <objectiveGrade :pstId="tasks[j - 1].pstid"></objectiveGrade>
                </el-row>
                <el-divider border-style="dashed" />
                <el-row class="teacher_appraise">
                    <el-row style="font-size: 24px; color: #33b8b9; align-items: center;">
                        <span>教师评价</span>
                        <el-popover placement="right" :width="400" trigger="hover">
                            <template #reference>
                                <el-icon size="large" style="margin-left: 10px; color: #33b8b9;">
                                    <InfoFilled />
                                </el-icon>
                            </template>
                            <div>
                                评价标准
                            </div>
                        </el-popover>
                    </el-row>
                    <el-row class="teacher_input">
                        <el-form label-position="top">
                            <el-form-item label="评价/指导内容：">
                                <el-input type="textarea" v-model="tasks[j - 1].taskEvaluate" :autosize="{ minRows: 3 }"
                                    placeholder="Please input" :disabled="isDisabled(j - 1)"></el-input>
                            </el-form-item>
                            <el-form-item label="标签：">
                                <el-row style="height: 20px;" v-if="tasks[j - 1].taskTags.length > 0">
                                    <el-tag v-for="   tag    in    tasks[j - 1].taskTags.length   " :key="tag"
                                        class="tag" :disable-transitions="false" @close="tagClose(j, tag - 1)"
                                        :closable="!isDisabled(j - 1)">
                                        {{ tasks[j - 1].taskTags[tag - 1].name }}
                                    </el-tag>
                                </el-row>
                            </el-form-item>
                            <el-row style="flex-direction:column">
                                <el-row style="align-items: center;">
                                    <span>我的标签：</span>
                                    <el-button type="primary" :icon="Edit" size="small" link
                                        @click="toMyTag()"></el-button>
                                </el-row>
                                <el-row
                                    style=" margin-top: 10px; margin-bottom: 10px; flex-wrap: wrap; padding-left: 20px;">
                                    <div v-for="   tag    in    TeacherTags   ">
                                        <el-button style="margin-top: 10px; margin-right: 10px;"
                                            v-if="tag.taskNum == tasks[j - 1].taskNum" :disabled="isDisabled(j - 1)"
                                            :key="tag" @click="addTagToTaskTags(j, tag)">
                                            {{ tag.name }}
                                        </el-button>
                                    </div>
                                </el-row>
                            </el-row>

                            <el-form-item label="成绩：">
                                <el-slider v-model="tasks[j - 1].taskGrade" show-input :step="0.1"
                                    :disabled="isDisabled(j - 1)" />
                            </el-form-item>
                        </el-form>
                    </el-row>
                    <el-row style="justify-content: center;">
                        <el-button :key="j - 1" v-if="tasks[j - 1].taskStatus == 3" type="primary"
                            @click="changeIsDisable(j - 1)">修改</el-button>
                        <el-button :key="j - 1" v-if="tasks[j - 1].taskStatus < 3" type="primary"
                            @click="save(j - 1)">保存</el-button>
                    </el-row>
                </el-row>
            </el-collapse-item>
        </el-collapse>
    </div>
</template>

<script setup lang="ts">
import { onBeforeMount, onMounted, onUnmounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { Edit, InfoFilled, Back } from '@element-plus/icons-vue';
import pageHeader from '@/components/pageheader.vue';
import { GetTask } from '@/apis/task/getTask.js';
import { savePST } from '@/apis/task/teacherSavePST.js';
import { ElMessage } from 'element-plus';
import router from '@/router';
import { getTeacherTags } from '@/apis/teacher/getTags.js'
import { dayjs } from 'element-plus';
// import PdfPreview from '@/components/PdfPreview/index.vue'
import { getStudnetDetail } from '@/apis/student/stduentDetail.js';
import dupChecking from './duplicateChecking/index.vue';
import objectiveGrade from './objectiveGrade/index.vue';
import { GETPSTDeviceLog } from '@/apis/task/getpstDeviceLog.js';
import { GETPSTResourceVo } from '@/apis/task/getPSTResourceVo.js';
import logVisualization from '@/views/projectStudentDetail/DeviceLogVisualization/index.vue'

const formatDate = (time: Date) => {
    if (time == null) {
        return '未设置时间'
    }
    return dayjs(time).format('YYYY年MM月DD日 HH:mm')
}

const Route = useRoute()
const projectId = Route.params.projectId
const studentId = Route.params.studentId
const stepNum = <number><unknown>Route.params.stepNum
const isDisabled = (index) => {
    if (tasks.value[index].taskStatus == 3) {
        return true
    }
    return false
}

const changeIsDisable = (index) => {
    tasks.value[index].taskStatus--
}

interface formData {
    PSTid: Number
    grade: Number
    tags: []
    improvement: String
    evaluate: String
}

const myFormData = ref<formData>()

const save = async (index) => {
    tasks.value[index].taskStatus = 3
    //console.log(index);
    //console.log(tasks.value[index])
    const data = Object.assign({}, tasks.value[index])
    await savePST(data).then(res => {
        if (res.state == 200) {
            //console.log(res)
            ElMessage({
                message: '更新成功',
                type: 'success',
            })
        } else {
            ElMessage.error(res.message)
        }
    })
}

const tasks = ref([])

const returnToDetail = async (id) => {
    await router.push({
        name: 'ProjectDetail',
        params: {
            projectId: id,
        }
    })
}

const srcList = ref([])
const teacher_appraise_input = ref('')
const activeNames = ref(['' + stepNum])
const TeacherAppraiseTags = ref([])
const TeacherTags = ref([])

const pdfUrl = ref('')
const dialogVisible = ref(false)
const OpenPdf = (filename, PSTResourceId) => {
    pdfUrl.value = '/pdf/web/viewer.html?file=/local-resource/file/' + filename + '?pstresourceid=' + PSTResourceId;
    window.open(pdfUrl.value)
}

const logUrl = (filename) => {
    let url = '/local-resource/file/' + filename
    let logul = '/log-content?url=' + encodeURIComponent(url);
    return logul
}

const OpenLog = (filename) => {
    let fileUrl = '/local-resource/file/' + filename
    window.open(fileUrl)
}
const downloadFile = (filename) => {
    let fileUrl = '/local-resource/file/' + filename
    window.open(fileUrl)
}

const handleChange = (val: string[]) => {
    //console.log(val)
}

const addTagToTaskTags = (j, tag) => {
    for (let index = 0; index < tasks.value[j - 1].taskTags.length; index++) {
        if (tasks.value[j - 1].taskTags[index].id == tag.id) {
            return
        }
    }
    tasks.value[j - 1].taskTags.push(tag)
}
const tagClose = (j, tag) => {
    tasks.value[j - 1].taskTags.splice(tag, 1)
}

const toMyTag = () => {
    router.push({
        name: 'mytag',
    })
}

const goback = () => {
    router.push({
        name: <string>Route.meta.parentName
    })
}
const student = ref({
    studentName: ''
})
const pstId = ref()

const PSTDeviceLog = ref([])
const PSTResourceVo = ref([])

const changePST = (id) => {
    pstId.value = id
    getPSTResourceVo(id)
    GETPSTDeviceLog(id).then(res => {
        if (res.state == 200) {
            PSTDeviceLog.value = res.data
        }
    })
    var myEvent = new Event('resize');
    window.dispatchEvent(myEvent);
}
const getPSTResourceVo = (id) => {
    GETPSTResourceVo(id).then(res => {
        if (res.state == 200) {
            PSTResourceVo.value = res.data
        }
    })
}
const gettaskDetail = () => {
    GetTask(projectId, studentId).then(res => {
        if (res.state == 200) {
            //console.log(res)
            tasks.value = res.data
            pstId.value = tasks.value[<number>stepNum - 1].pstid
            for (let i = 0; i < tasks.value.length; i++) {
                let taskImg = []
                for (let j = 0; j < tasks.value[i].resources.length; j++) {
                    if (tasks.value[i].resources[j].resource.type.includes("image")) {
                        taskImg.push('/local-resource/image/' + tasks.value[i].resources[j].resource.filename)
                    }
                    // taskImg.push('/local-resource/image/' + tasks.value[i].taskImgs[j])
                }
                srcList.value.push(taskImg)
            }
            // //console.log(srcList.value);

        } else {
            ElMessage.error("获取数据失败;" + res.message)
        }
    })
}

const interval = ref()

onBeforeMount(async () => {
    // getStudnetDetail(studentId).then(res => {
    //     if (res.state == 200) {
    //         student.value = res.data
    //     }
    // })

    await gettaskDetail();
    await getTeacherTags(projectId).then(res => {
        //console.log(res);
        if (res.state == 200) {
            TeacherTags.value = res.data
            //console.log(TeacherTags)
        } else {
            ElMessage.error("获取标签异常")
        }
    })
})

onMounted(() => {
    document.body.scrollTop = 0;
    // 先获取pstId
    setTimeout(() => {
        changePST(pstId.value);
        // getPSTResourceVo(pstId.value);
    }, 1500)
    interval.value = setInterval(() => {
        getPSTResourceVo(pstId.value);
    }, 10000)
    // document.addEventListener("visibilitychange", function () {
    //     if (document.visibilityState == "hidden") {
    //         //切离该页面时执行
    //     } else if (document.visibilityState == "visible") {
    //         //切换到该页面时执行
    //         GetTask(projectId, studentId).then(res => {
    //             if (res.state == 200) {
    //                 tasks.value = res.data
    //                 for (let i = 0; i < tasks.value.length; i++) {
    //                     let taskImg = []
    //                     for (let j = 0; j < tasks.value[i].resources.length; j++) {
    //                         if (tasks.value[i].resources[j].resource.type.includes("image")) {
    //                             taskImg.push('/local-resource/image/' + tasks.value[i].resources[j].resource.filename)
    //                         }
    //                         // taskImg.push('/local-resource/image/' + tasks.value[i].taskImgs[j])
    //                     }
    //                     srcList.value.push(taskImg)
    //                 }
    //                 // //console.log(srcList.value);

    //             } else {
    //                 ElMessage.error("获取数据失败;" + res.message)
    //             }
    //         })
    //     }
    // })
})

onUnmounted(() => {
    if (interval.value) {
        clearInterval(interval.value)
    }
})
</script>

<style scoped>
.dialog-footer button:first-child {
    margin-right: 10px;
}

el-dialog__body {
    flex-grow: 1
}

main {
    width: 100%;
    height: 100%;
    display: flex;
}

.aside {
    /* flex-grow: 1; */
    flex-shrink: 1;
    flex-basis: calc(164px + 4.8vw);
}


.resource {
    height: 100%;
    width: 100%;
    flex-grow: 1;
    padding: 20px calc(164px + 4.8vw);
}

.right_aside {
    /* flex-grow: 1; */
    flex-shrink: 1;
    flex-basis: calc(164px + 4.8vw);
}

.student_commit {
    margin: 20px;
    flex-direction: column;
}

.teacher_appraise {
    margin: 20px;
    flex-direction: column;
}

.teacher_input {
    flex-direction: column;
    margin-top: 20px;
}

.image_preview {
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 15px;
}

.file_preview {
    padding-top: 20px;
    padding-bottom: 20px;
    flex-direction: column;
    justify-content: flex-start
}

.tag {
    margin-right: 20px;
}

.demo-image__error .image-slot {
    font-size: 30px;
}

.demo-image__error .image-slot .el-icon {
    font-size: 30px;
}

.demo-image__error .el-image {
    width: 100%;
    height: 200px;
}
</style>