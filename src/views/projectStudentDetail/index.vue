<template>
    <el-row class="page_header">
        <pageHeader :route=Route />
    </el-row>
    <main>
        <div class="aside">

        </div>
        <div class="resource">
            <el-row style="background-color: #fff; align-items: center; height: 40px;">
                <el-link :underline="false" @click="returnToDetail(projectId)"><el-icon>
                        <Back />
                    </el-icon>返回学生列表</el-link>
            </el-row>
            <el-collapse v-model="activeNames" accordion>
                <el-collapse-item v-for="j in tasks.length" :key="tasks[j - 1].pstid"
                    :title="'步骤' + tasks[j - 1].taskNum + ':' + tasks[j - 1].taskName" :name="'' + tasks[j - 1].taskNum">
                    <el-row class="student_commit">
                        <el-row style="font-size: 24px;">
                            <span>学生提交内容</span>
                        </el-row>
                        <el-row class="image_preview">
                            <el-image v-for="i in tasks[j - 1].taskImgs.length" :key="i" style="width: 100px; height: 100px"
                                :src="'/local-resource/image/' + tasks[j - 1].taskImgs[i - 1]" :zoom-rate="1.2"
                                :preview-src-list="srcList[tasks[j - 1].taskNum - 1]" :initial-index="i - 1" fit="cover" />
                        </el-row>
                        <el-row class="file_preview">
                            <el-row v-for="file in tasks[j - 1].taskFiles.length" :key="file" :underline="false">
                                <el-link v-if="tasks[j - 1].taskFiles[file - 1] != 'a'" icon="Files"
                                    style="justify-content: flex-start"
                                    :href="'/local-resource/file/' + tasks[j - 1].taskFiles[file - 1]">
                                    {{ tasks[j - 1].taskFiles[file - 1] }}
                                </el-link>
                            </el-row>
                        </el-row>
                        <el-row style="flex-direction: column;">
                            {{ tasks[j - 1].taskContent }}
                        </el-row>
                    </el-row>
                    <el-divider border-style="dashed" />
                    <el-row class="teacher_appraise">
                        <el-row style="font-size: 24px; align-items: center;">
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
                                    <el-input type="textarea" v-model="tasks[j - 1].evaluate" :autosize="{ minRows: 3 }"
                                        placeholder="Please input" :disabled="isDisabled"></el-input>
                                </el-form-item>
                                <el-form-item label="标签：">
                                    <el-row style="height: 20px;">
                                        <el-tag v-for="tag in tasks[j - 1].taskTags.length - 1" :key="tag" class="tag"
                                            :disable-transitions="false" @close="tagClose(j, tag)" :closable="!isDisabled">
                                            {{ tasks[j - 1].taskTags[tag] }}
                                        </el-tag>
                                    </el-row>
                                </el-form-item>
                                <el-row style="flex-direction:column">
                                    <el-row style="align-items: center;">
                                        <span>我的标签</span>
                                        <el-popover placement="right" :width="400" trigger="hover" disabled>
                                            <template #reference>
                                                <el-icon size="small" style="margin-left: 10px; color: #33b8b9;">
                                                    <InfoFilled />
                                                </el-icon>
                                            </template>
                                            <div>
                                                管理我的标签
                                            </div>
                                        </el-popover>
                                    </el-row>
                                    <el-row
                                        style=" margin-top: 10px; margin-bottom: 10px; flex-wrap: wrap; padding-left: 20px;">
                                        <el-button style="margin-top: 10px;" v-for="tag in TeacherTags[j - 1].length"
                                            :disabled="isDisabled" :key="tag" @click="addTagToTaskTags(j, tag)">
                                            {{ TeacherTags[j - 1][tag - 1] }}</el-button>
                                    </el-row>
                                </el-row>

                                <el-form-item label="成绩：">
                                    <el-slider v-model="tasks[j - 1].taskGrade" show-input :disabled="isDisabled" />
                                </el-form-item>
                            </el-form>
                        </el-row>
                        <el-row style="justify-content: center;">
                            <el-button v-if="isDisabled" type="primary" @click="changeIsDisable()">修改</el-button>
                            <el-button v-if="!isDisabled" type="primary" @click="save(j - 1)">保存</el-button>
                        </el-row>
                    </el-row>
                </el-collapse-item>
            </el-collapse>
        </div>

        <div class="right_aside">

        </div>
    </main>
</template>

<script setup lang="ts">
import { onBeforeMount, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router';
import { Files, InfoFilled } from '@element-plus/icons-vue'
import pageHeader from '@/components/pageheader.vue'
import { GetTask } from '@/apis/task/getTask.js'
import { ElMessage } from 'element-plus';
import router from '@/router';
import { getTeacherTags } from '@/apis/teacher/getTags.js'
// import PdfPreview from '@/components/PdfPreview/index.vue'


const Route = useRoute()
const projectId = Route.params.projectId
const studentId = Route.params.studentId
const stepNum = Route.params.stepNum
const isDisabled = ref(true)

const changeIsDisable = () => {
    isDisabled.value = !isDisabled.value
}

interface formData {
    PSTid: Number
    grade: Number
    tags: []
    improvement: String
    evaluate: String
}

const myFormData = ref<formData>()

const save = (index) => {
    changeIsDisable();
    console.log(index);
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
const TeacherTags = ref([
    ['电路技术指标合理',
        '电路技术指标不正确',
        '功放选择原则正确',
        '功放选择原则不正确'],
    ['电路设计合理',
        '电路设计不合理',
        'Multisim仿真电路结果正确',
        'Multisim仿真电路结果不正确'],
    ['扩展电路正确',
        '扩展电路不正确',
        '测试项目齐全',
        '测试项目不全',
        '蓝牙模块功能正常',
        '蓝牙模块功能不正常'],
    ['电路指标达成',
        '电路指标未达成',
        '仪器使用正确',
        '仪器使用不正确',
        '硬件电路与仿真电路对比分析合理完善',
        '硬件电路与仿真电路对比分析不合理'],
    ['组装正确',
        '组装不正确',
        '功能正常',
        '功能不正常',
        '总结文档规范',
        '总结文档不规范']
])

const handleChange = (val: string[]) => {
    console.log(val)
}

const addTagToTaskTags = (j, tag) => {
    // j 第几个任务
    // tag ==>任务j下， teacherTags[j][tag] ==> 选择的tag
    for (let i = 0; i < tasks.value[j - 1].taskTags.length; i++) {
        if (TeacherTags.value[j - 1][tag - 1] === tasks.value[j - 1].taskTags[i]) {
            return
        }
    }
    tasks.value[j - 1].taskTags.push(TeacherTags.value[j - 1][tag - 1])
}
const tagClose = (j, tag) => {
    // TeacherAppraiseTags.value.splice(tag - 1, 1)
    tasks.value[j - 1].taskTags.splice(tag, 1)
}

onBeforeMount(() => {
    // getTeacherTags().then(res => {
    //     console.log(res);
    //     if (res.state == 200) {
    //         TeacherTags.value = res.data
    //     } else {
    //         ElMessage.error("获取标签异常")
    //     }
    // })
    GetTask(projectId, studentId).then(res => {
        console.log(res);
        if (res.state == 200) {
            tasks.value = res.data
            for (let i = 0; i < tasks.value.length; i++) {
                let taskImg = []
                for (let j = 0; j < tasks.value[i].taskImgs.length; j++) {
                    taskImg.push('/local-resource/image/' + tasks.value[i].taskImgs[j])
                }
                srcList.value.push(taskImg)
            }
            console.log(srcList.value);

        } else {
            ElMessage.error("获取数据失败;" + res.message)
        }
    })
})

onMounted(() => {
    document.body.scrollTop = 0;
})
</script>

<style scoped>
.page_header {
    /* padding-left: 10%; */
}

main {
    width: 100%;
    height: 100%;
    display: flex;
}

.aside {
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 200px;
}


.resource {
    height: 100%;
    flex-basis: 1000px;
    margin-top: 30px;
    margin-bottom: 30px;
}

.right_aside {
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 200px;
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