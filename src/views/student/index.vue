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
                </el-col>
            </el-row>
            <el-row style="margin-top: 20px; justify-content: flex-end;">
                <el-button type="primary" @click="ADDStudent = true">新增</el-button>
                <el-button type="primary" @click="ExportByExcel = true">批量导入</el-button>
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

            <el-dialog v-model="ADDStudent" title="添加学生">
                <el-form :model="addStudentForm" label-width="120px" style="max-width: 460px">
                    <el-form-item label="邮箱:">
                        <el-input clearable v-model="addStudentForm.email"></el-input>
                    </el-form-item>
                    <el-form-item label="学号:">
                        <el-input clearable v-model="addStudentForm.studentId"></el-input>
                    </el-form-item>
                    <el-form-item label="姓名:">
                        <el-input clearable v-model="addStudentForm.studentName"></el-input>
                    </el-form-item>
                    <el-form-item label="专业:" prop="region">
                        <el-select v-model="addStudentForm.majorId" placeholder="选择专业">
                            <el-option v-for="i in majorList.length" :key="i" :label="majorList[i - 1].majorName"
                                :value="majorList[i - 1].majorId" @click="changeClassList(i - 1)" />
                        </el-select>
                    </el-form-item>
                    <el-form-item label="班级:" prop="region">
                        <el-select v-model="addStudentForm.studentClass" placeholder="请先选择专业">
                            <el-option v-for="i in classList.length" :key="i" :label="classList[i - 1].name"
                                :value="classList[i - 1].id" />
                        </el-select>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="submitADDStudent(addStudentForm)">
                            提交
                        </el-button>
                    </el-form-item>
                </el-form>
            </el-dialog>

            <el-dialog v-model="ExportByExcel" title="批量导入">
                <el-row>
                    <el-col :span="4">
                        <el-button type="primary" @click="DownloadTemplate()">下载导入模板</el-button>
                    </el-col>
                    <el-col :span="6">
                        <el-upload class="upload-demo" action="/dev-api/student//batch/excel" :show-file-list="false"
                            :before-upload="beforeAvatarUpload" :on-success="handleAvatarSuccess">
                            <el-button type="primary">选择文件</el-button>
                            <template #tip>
                                <div class="el-upload__tip">
                                    请根据导入模板完善信息再上传excel文件
                                </div>
                            </template>
                        </el-upload>
                    </el-col>
                </el-row>
            </el-dialog>
        </el-card>
    </div>
</template>

<script setup lang="ts">
import { onBeforeMount, reactive, ref } from 'vue';
import { getStudents } from '@/apis/student/getStudentsList.js'
import { getSNum } from '@/apis/student/getstudentsNum.js'
import { ElMessage, UploadProps } from 'element-plus'
import { Majors } from '@/apis/major/myMajors.js'
import { addStudent } from '@/apis/student/addStudent.js'
import { h } from 'vue'
import { ElNotification } from 'element-plus'
const Students = ref([

])
interface AddStudentForm {
    email: String
    studentId: string
    studentName: string
    majorId: number,
    studentClass: number,
}
const addStudentForm = ref<AddStudentForm>({
    email: '',
    studentId: '',
    studentName: '',
    majorId: null,
    studentClass: null,
})

const majorList = ref([])
const classList = ref([])

const ADDStudent = ref(false)
const ExportByExcel = ref(false)
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

const getMajorClasses = async () => {
    await Majors().then(res => {
        console.log(res)
        if (res.state == 200) {
            majorList.value = res.data
        }
    })
}

const changeClassList = (index) => {
    classList.value = majorList.value[index].majorClasses
    console.log(classList)
}

const submitADDStudent = async (from) => {
    const data = Object.assign({}, from)
    await addStudent(data).then(res => {
        if (res.state == 200) {
            ElMessage.success('添加成功')
        } else {
            ElMessage.error(res.message)
        }
    })
}

const beforeAvatarUpload: UploadProps['beforeUpload'] = (rawFile) => {
    console.log(rawFile.type)
    if (rawFile.type !== 'application/vnd.ms-excel') {
        ElMessage.error('只支持.xsl文件')
        return false
    }
    ElNotification({
        title: '批量导入学生',
        message: h('i', { style: 'color: #33b8b9' }, '已开始导入学生信息'),
        duration: 0,
    })
    return true
}

const handleAvatarSuccess: UploadProps['onSuccess'] = (
    response
) => {
    console.log(response);
    if (response.state == 200) {
        ElNotification({
            title: '批量导入学生',
            message: h('i', { style: 'color: #33b8b9' }, '学生信息已导入完成'),
            duration: 0,
        })
    }
}

const DownloadTemplate = async () => {
    console.log('aaaa')
    let link = document.createElement('a') // 创建一个 a 标签用来模拟点击事件	
    link.style.display = 'none'
    link.href = '/dev-api/student/template'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
}

onBeforeMount(() => {
    getStudentsList();
    getStudentsNum();
    getMajorClasses();
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