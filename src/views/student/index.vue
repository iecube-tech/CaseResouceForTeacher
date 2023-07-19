<template>
    <div class="main-page">
        <!-- height: calc(100vh - 180px); overflow: scroll;  -->
        <el-card style="display: flex; flex-direction: column; " shadow="never"
            :body-style="{ display: 'flex', flexDirection: 'column', }">
            <el-row>
                <h2>学生列表</h2>
            </el-row>

            <el-row style="margin-top: 20px;">
                <el-col :span="4">
                    <el-input disabled></el-input>
                </el-col>
                <el-col :span="4">
                    <el-input disabled></el-input>
                </el-col>
                <el-col :span="4">
                    <el-input disabled></el-input>
                </el-col>
                <el-col :span="4">
                    <el-input disabled></el-input>
                </el-col>
                <el-col :span="4">
                    <el-input disabled></el-input>
                </el-col>
                <el-col :span="4">
                    <el-button type="primary" disabled>查询</el-button>
                    <el-button type="primary" disabled>新增</el-button>
                </el-col>
            </el-row>
            <el-table style="margin-top: 20px; margin-bottom: 20px;" :data="Students" :row-style="{ flexGrow: 1 }">
                <el-table-column prop="studentId" label="学号" />
                <el-table-column prop="studentName" label="姓名" />
                <el-table-column prop="collage" label="学院" />
                <el-table-column prop="major" label="专业" />
                <el-table-column prop="studentGrade" label="年级" />
                <el-table-column prop="studentClass" label="班级" />
            </el-table>
            <el-row style="display: flex; justify-content: flex-end;">
                <el-pagination v-model:current-page="currentPage" v-model:page-size="pageSize" background small
                    layout="prev, pager, next, jumper" :total="totalNum" @current-change="handleCurrentChange" />
            </el-row>
        </el-card>
    </div>
</template>

<script setup lang="ts">
import { onBeforeMount, ref } from 'vue';
import { getStudents } from '@/apis/student/getStudentsList.js'
import { getSNum } from '@/apis/student/getstudentsNum.js'
import { ElMessage } from 'element-plus'
const Students = ref([

])
const totalNum = ref(0)
const currentPage = ref(1)
const pageSize = ref(22)
const handleCurrentChange = () => {
    getStudentsList();
}

const getStudentsList = async () => {
    await getStudents((currentPage.value - 1) * pageSize.value, pageSize.value).then(res => {
        console.log(res);
        if (res.state == 200) {
            Students.value = res.data
            console.log(Students);

        } else {
            ElMessage.error(res.message)
        }
    })
}

const getStudentsNum = async () => {
    await getSNum().then(res => {
        console.log(res);
        if (res.state == 200) {
            totalNum.value = res.data
        } else {
            ElMessage.error(res.message)
        }
    })
}

onBeforeMount(() => {
    getStudentsList();
    getStudentsNum();
})
</script>

<style scoped>
.main-page {
    padding: 20px calc(164px + 4.8vw);
}

.el-col {
    padding: 0 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;
}

h2 {
    font-size: 24px;
    color: #33b8b9;
}
</style>