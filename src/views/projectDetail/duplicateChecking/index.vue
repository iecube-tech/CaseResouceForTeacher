<template>
    <pageHeader :route=Route />
    <div class="duplicate">
        <el-card>
            <template #header>
                <div>
                    <el-button link type="primary" :icon="Back" @click="goback">返回</el-button>
                </div>
            </template>
            <el-row>
                <div style="font-size: 18px; font-weight: bold; ">
                    任务/实验下学生提交报告的重复率检测报告
                </div>
            </el-row>
            <el-row style="justify-content: space-between; margin-top: 20px;">
                <el-select v-model="whichTask" class="m-2" placeholder="Select" size="small"
                    @change="getDuplicateCheckings(whichTask)">
                    <el-option v-for="item in tasks" :key="item.num" :label="item.taskName" :value="item.id" />
                </el-select>
                <el-button type="primary" link @click="gen">
                    重新生成
                </el-button>
            </el-row>
            <div style="margin-top: 20px;">
                <el-table :data="sduplicate" style="width: 100%">
                    <el-table-column prop="studentName" label="学生" width="100" align="center" />
                    <el-table-column label="重复率" align="center">
                        <el-table-column align="center">
                            <template #default=scoped>
                                <el-popover v-if="scoped.row.duplicates[0]" placement="top-start" title="重复信息" :width="300"
                                    trigger="hover">
                                    <template #reference>
                                        <el-button v-if="scoped.row.duplicates[0]" link
                                            :type="getRateStyle(scoped.row.duplicates[0].repetitiveRate)">
                                            {{ scoped.row.duplicates[0].repetitiveRate }}%
                                        </el-button>
                                    </template>
                                    <template #default>
                                        <div>
                                            <el-row>
                                                {{ scoped.row.duplicates[0].studentName + "的文件：" }}
                                                <el-button link type="primary"
                                                    @click="OpenPdf(scoped.row.duplicates[0].fileName, scoped.row.pstId)">
                                                    {{ scoped.row.duplicates[0].originFilename }}
                                                </el-button>
                                            </el-row>
                                            <el-row>
                                                {{ "有" + scoped.row.duplicates[0].repetitiveRate + "% 的内容与" }}
                                            </el-row>
                                            <el-row>
                                                {{ scoped.row.duplicates[0].contrastStudentName + "的文件：" }}
                                                <el-button link type="primary"
                                                    @click="OpenPdf(scoped.row.duplicates[0].contrastFileName, scoped.row.duplicates[0].contrastPstId)">
                                                    {{ scoped.row.duplicates[0].contrastOriginFilename }}
                                                </el-button>
                                                相同。
                                            </el-row>
                                            <el-row>
                                            </el-row>
                                        </div>
                                    </template>
                                </el-popover>
                            </template>
                        </el-table-column>

                        <el-table-column align="center">
                            <template #default=scoped>
                                <el-popover v-if="scoped.row.duplicates[1]" placement="top-start" title="重复信息" :width="300"
                                    trigger="hover">
                                    <template #reference>
                                        <el-button v-if="scoped.row.duplicates[1]" link
                                            :type="getRateStyle(scoped.row.duplicates[1].repetitiveRate)">
                                            {{ scoped.row.duplicates[1].repetitiveRate }}%
                                        </el-button>
                                    </template>
                                    <template #default>
                                        <div>
                                            <el-row>
                                                {{ scoped.row.duplicates[1].studentName + "的文件：" }}
                                                <el-button link type="primary"
                                                    @click="OpenPdf(scoped.row.duplicates[1].fileName, scoped.row.pstId)">
                                                    {{ scoped.row.duplicates[1].originFilename }}
                                                </el-button>
                                            </el-row>
                                            <el-row>
                                                {{ "有" + scoped.row.duplicates[1].repetitiveRate + "% 的内容与" }}
                                            </el-row>
                                            <el-row>
                                                {{ scoped.row.duplicates[1].contrastStudentName + "的文件：" }}
                                                <el-button link type="primary"
                                                    @click="OpenPdf(scoped.row.duplicates[1].contrastFileName, scoped.row.duplicates[1].contrastPstId)">
                                                    {{ scoped.row.duplicates[1].contrastOriginFilename }}
                                                </el-button>
                                                相同。
                                            </el-row>
                                            <el-row>
                                            </el-row>
                                        </div>
                                    </template>
                                </el-popover>
                            </template>
                        </el-table-column>

                        <el-table-column align="center">
                            <template #default=scoped>
                                <el-popover v-if="scoped.row.duplicates[2]" placement="top-start" title="重复信息" :width="300"
                                    trigger="hover">
                                    <template #reference>
                                        <el-button v-if="scoped.row.duplicates[2]" link
                                            :type="getRateStyle(scoped.row.duplicates[2].repetitiveRate)">
                                            {{ scoped.row.duplicates[2].repetitiveRate }}%
                                        </el-button>
                                    </template>
                                    <template #default>
                                        <div>
                                            <el-row>
                                                {{ scoped.row.duplicates[2].studentName + "的文件：" }}
                                                <el-button link type="primary"
                                                    @click="OpenPdf(scoped.row.duplicates[2].fileName, scoped.row.pstId)">
                                                    {{ scoped.row.duplicates[2].originFilename }}
                                                </el-button>
                                            </el-row>
                                            <el-row>
                                                {{ "有" + scoped.row.duplicates[2].repetitiveRate + "% 的内容与" }}
                                            </el-row>
                                            <el-row>
                                                {{ scoped.row.duplicates[2].contrastStudentName + "的文件：" }}
                                                <el-button link type="primary"
                                                    @click="OpenPdf(scoped.row.duplicates[2].contrastFileName, scoped.row.duplicates[2].contrastPstId)">
                                                    {{ scoped.row.duplicates[2].contrastOriginFilename }}
                                                </el-button>
                                                相同。
                                            </el-row>
                                            <el-row>
                                            </el-row>
                                        </div>
                                    </template>
                                </el-popover>
                            </template>
                        </el-table-column>

                        <el-table-column align="center">
                            <template #default=scoped>
                                <el-popover v-if="scoped.row.duplicates[3]" placement="top-start" title="重复信息" :width="300"
                                    trigger="hover">
                                    <template #reference>
                                        <el-button v-if="scoped.row.duplicates[3]" link
                                            :type="getRateStyle(scoped.row.duplicates[3].repetitiveRate)">
                                            {{ scoped.row.duplicates[3].repetitiveRate }}%
                                        </el-button>
                                    </template>
                                    <template #default>
                                        <div>
                                            <el-row>
                                                {{ scoped.row.duplicates[3].studentName + "的文件：" }}
                                                <el-button link type="primary"
                                                    @click="OpenPdf(scoped.row.duplicates[3].fileName, scoped.row.pstId)">
                                                    {{ scoped.row.duplicates[3].originFilename }}
                                                </el-button>
                                            </el-row>
                                            <el-row>
                                                {{ "有" + scoped.row.duplicates[3].repetitiveRate + "% 的内容与" }}
                                            </el-row>
                                            <el-row>
                                                {{ scoped.row.duplicates[3].contrastStudentName + "的文件：" }}
                                                <el-button link type="primary"
                                                    @click="OpenPdf(scoped.row.duplicates[3].contrastFileName, scoped.row.duplicates[3].contrastPstId)">
                                                    {{ scoped.row.duplicates[3].contrastOriginFilename }}
                                                </el-button>
                                                相同。
                                            </el-row>
                                            <el-row>
                                            </el-row>
                                        </div>
                                    </template>
                                </el-popover>
                            </template>
                        </el-table-column>

                        <el-table-column align="center">
                            <template #default=scoped>
                                <el-popover v-if="scoped.row.duplicates[4]" placement="top-start" title="重复信息" :width="300"
                                    trigger="hover">
                                    <template #reference>
                                        <el-button v-if="scoped.row.duplicates[4]" link
                                            :type="getRateStyle(scoped.row.duplicates[4].repetitiveRate)">
                                            {{ scoped.row.duplicates[4].repetitiveRate }}%
                                        </el-button>
                                    </template>
                                    <template #default>
                                        <div>
                                            <el-row>
                                                {{ scoped.row.duplicates[4].studentName + "的文件：" }}
                                                <el-button link type="primary"
                                                    @click="OpenPdf(scoped.row.duplicates[4].fileName, scoped.row.pstId)">
                                                    {{ scoped.row.duplicates[4].originFilename }}
                                                </el-button>
                                            </el-row>
                                            <el-row>
                                                {{ "有" + scoped.row.duplicates[4].repetitiveRate + "% 的内容与" }}
                                            </el-row>
                                            <el-row>
                                                {{ scoped.row.duplicates[4].contrastStudentName + "的文件：" }}
                                                <el-button link type="primary"
                                                    @click="OpenPdf(scoped.row.duplicates[4].contrastFileName, scoped.row.duplicates[4].contrastPstId)">
                                                    {{ scoped.row.duplicates[4].contrastOriginFilename }}
                                                </el-button>
                                                相同。
                                            </el-row>
                                            <el-row>
                                            </el-row>
                                        </div>
                                    </template>
                                </el-popover>
                            </template>
                        </el-table-column>

                    </el-table-column>
                </el-table>
            </div>
        </el-card>

        <el-dialog v-model="dialogTableVisible" title="重复内容">
            <div>
                {{ dupContent }}
            </div>
        </el-dialog>
    </div>
</template>

<script setup lang="ts">
import { onBeforeMount, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router';
import router from '@/router';
import { Back } from '@element-plus/icons-vue'
import pageHeader from '@/components/pageheader.vue'

import { getProjectTasks } from '@/apis/project/tasks.js'
import { getDuplicateChecking } from '@/apis/project/duplicateChecking/getduplicateChecking.js'
import { genTaskDup } from "@/apis/project/duplicateChecking/genTaskDup.js"
import { ElMessage } from 'element-plus';

const Route = useRoute()
const projectId = Route.params.projectId

interface task {
    id: number
    num: number
    taskName: string
}

interface duplicate {
    id: number
    projectId: number
    taskId: number
    pstId: number
    studentId: number
    studentName: string
    resourceId: number
    fileName: string
    originFilename: string
    contrastPstId: number
    contrastStudentId: number
    contrastStudentName: string
    contrastResourceId: number
    contrastFileName: string
    contrastOriginFilename: string
    repetitiveRate: number
    repetitiveContent: string
}

interface sduplicate {
    pstId: number
    studentId: number
    studentName: string
    duplicates: Array<duplicate | null> | null
}

const whichTask = ref(0)
const tasks = ref<Array<task | null>>([])

const duplicates = ref<Array<duplicate | null>>([])

const sduplicate = ref<Array<sduplicate | null>>([])

const goback = () => {
    router.push({
        name: <string>Route.meta.parentName
    })
}

const pdfUrl = ref('')
const OpenPdf = (filename, PSTResourceId?) => {
    pdfUrl.value = '/pdf/web/viewer.html?file=/local-resource/file/' + filename + '?pstresourceid=' + PSTResourceId;
    window.open(pdfUrl.value)
}

const getRateStyle = (rate) => {
    if (rate >= 80) {
        return 'danger'
    }

    if (rate >= 50) {
        return 'warning'
    }
}

const gensduplicate = () => {
    sduplicate.value = []
    let dup: sduplicate = {
        pstId: duplicates.value[0].pstId,
        studentId: duplicates.value[0].studentId,
        studentName: duplicates.value[0].studentName,
        duplicates: [],
    }
    sduplicate.value.push(Object.assign(dup))
    for (let i = 0; i < duplicates.value.length; i++) {
        if (duplicates.value[i].pstId != sduplicate.value[sduplicate.value.length - 1].pstId) {
            let dup2: sduplicate = {
                pstId: duplicates.value[i].pstId,
                studentId: duplicates.value[i].studentId,
                studentName: duplicates.value[i].studentName,
                duplicates: [],
            }
            sduplicate.value.push(Object.assign(dup2))
        }
        sduplicate.value[sduplicate.value.length - 1].duplicates.push(duplicates.value[i])
    }
    console.log(sduplicate.value);
}

const gen = () => {
    genTaskDup(whichTask.value).then(res => {
        if (res.state == 200) {
            duplicates.value = res.data
            gensduplicate()
            ElMessage.success("已生成")
        }
        else {
            ElMessage.warning(res.message)
        }
    })
}

const getDuplicateCheckings = (id) => {
    sduplicate.value = []
    getDuplicateChecking(id).then(res => {
        if (res.state == 200) {
            duplicates.value = res.data
            gensduplicate()
        }
        else {
            ElMessage.warning(res.message)
        }
    })
}

const dialogTableVisible = ref(false)
const dupContent = ref('')

onBeforeMount(() => {
    console.log(projectId)
    getProjectTasks(projectId).then(res => {
        if (res.state == 200) {
            tasks.value = res.data
            if (tasks.value.length > 0) {
                whichTask.value = tasks.value[0].id
                getDuplicateCheckings(whichTask.value)
            }
        }
    })
})
</script>
<style scoped>
/* .duplicate {
    padding: 20px 4.8vw
} */
</style>
<style>
@media (min-width: 1900px) {
    .duplicate {
        padding: 20px calc(164px + 4.8vw);
    }
}
</style>