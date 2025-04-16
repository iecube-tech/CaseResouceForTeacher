<template>
    <pageHeader :route=Route />
    <div class="view-card">
        <el-card shadow="never">
            <template #header>
                <div style="display: flex; justify-content: space-between;">
                    <div style="display: flex; flex-direction: row;">
                        <el-button link type="primary" :icon="Back" @click="goback">返回</el-button>
                        <div>
                            <el-divider direction="vertical" />
                            <span>{{ thisProject.projectName }}</span>
                        </div>
                        <div v-if="routerName == 'ProjectStudentDetail'">
                            <el-divider direction="vertical" />
                            <span>{{ student.studentName }}</span>
                        </div>
                    </div>
                    <div>
                        <el-button v-if="routerName == 'ProjectDetail' && !thisProject.emdCourse" type="primary" link
                            @click="toAddStudents">
                            添加学生
                        </el-button>

                        <el-button v-if="routerName == 'ProjectDetail'" type="primary" link @click="toAnalysis">
                            数据分析
                        </el-button>
                        <el-button v-if="routerName == 'ProjectDetail'" type="primary" link @click="toDuplicateCheck">
                            报告查重
                        </el-button>
                        <el-button v-if="routerName == 'ProjectDetail'" type="primary" link @click="downloadReport">
                            报告批量下载
                        </el-button>
                        <el-button v-if="routerName == 'ProjectDetail'" type="primary" link @click="exportGrade">
                            成绩导出
                        </el-button>
                        <el-button v-if="routerName == 'ProjectDetail' && thisProject.deviceId == 1" type="primary" link
                            @click="projectLogCompare">
                            仪器操作概览
                        </el-button>

                    </div>
                </div>
            </template>
            <RouterView :addStudent="addStudent" />
        </el-card>
    </div>
</template>

<script setup lang="ts">
import { Back } from '@element-plus/icons-vue';
import { onBeforeMount, ref } from 'vue'
import { useRoute } from 'vue-router';
import router from '@/router';
import pageHeader from '@/components/pageheader.vue';
import { Project } from '@/apis/project/project.js';
import { getStudnetDetail } from '@/apis/student/stduentDetail.js';
const Route = useRoute()
const routerName = Route.name
const projectId = Route.params.projectId
const studentId = Route.params.studentId


const goback = () => {
    router.push({
        name: <string>Route.meta.parentName
    })
    // router.back()
}
const addStudent = ref(0)

const toAddStudents = () => {
    addStudent.value++
}

const toAnalysis = () => {
    router.push({
        name: 'analysisDetailC',
        params: { projectId: projectId }
    })
}
const downloadReport = () => {
    window.open('/dev-api/project/project_report?projectId=' + projectId)
}
const exportGrade = () => {
    window.open('/dev-api/project/export_project_data?projectId=' + projectId)
}

const toDuplicateCheck = () => {
    router.push({
        name: 'duplicateChecking',
    })
}

const projectLogCompare = () => {
    router.push({
        name: 'projectLogCompare'
    })
}

const thisProject = ref({
    emdCourse: null,
    projectName: '',
    deviceId: null,
})

const student = ref({
    studentName: ''
})



onBeforeMount(() => {
    if (studentId) {
        getStudnetDetail(studentId).then(res => {
            if (res.state == 200) {
                student.value = res.data
            }
        })
    }
    Project(projectId).then(res => {
        if (res.state == 200) {
            thisProject.value = res.data
        }
    })

})
</script>
<style scoped>
@import "@/styles/cardPadding/cardPadding.css";
</style>