<template>
    <div class="w-full flex flex-row">
        <div class="w-full bg-cyan-100 h-screen flex flex-col p-4">
            <div class="w-full h-[50vh]  p-4">
                <div class="h-[50px]">
                    <el-input-number v-model="projectId"></el-input-number>
                    <el-button type="primary" @click="getStudentList">获取学生列表</el-button>
                </div>
                <div class="h-[calc(100%-50px-10vh)] overflow-auto">
                    <div class="h-full flex flex-col">
                        <el-button v-for="(item, i) in showStudentList" class="m-2" @click="changeStudent(item)"
                            :type="setType(item)">
                            {{ item.studentId }}_{{ item.studentName }}
                        </el-button>
                    </div>
                </div>
                <div class="h-[10vh] overflow-auto bg-blue-100 pt-8">
                    <el-button @click="notFilter">清除过滤</el-button>
                </div>
            </div>
            <div class="w-full h-[50vh] overflow-auto p-4">
                <el-form v-if="stuGrade" :model="stuGrade" label-width="auto">
                    <el-form-item label="id">
                        {{ stuGrade.stuId }}
                    </el-form-item>
                    <el-form-item label="姓名">
                        {{ stuGrade.studentName }}
                    </el-form-item>
                    <el-form-item label="学号">
                        {{ stuGrade.studentId }}
                    </el-form-item>

                    <el-form-item label="课前预习1">
                        <el-input-number v-model="stuGrade.yuxiOne" :min="0" :max="2" :step="2"></el-input-number>
                    </el-form-item>
                    <el-form-item label="课前预习2">
                        <el-input-number v-model="stuGrade.yuxiTwo" :min="0" :max="2" :step="2"></el-input-number>
                    </el-form-item>
                    <el-form-item label="课前预习3">
                        <el-input-number v-model="stuGrade.yuxiThree" :min="0" :max="2" :step="2"></el-input-number>
                    </el-form-item>

                    <el-divider />

                    <el-form-item label="课后1">
                        <el-input-number v-model="stuGrade.kehouOne" :min="0" :max="5" :step="5"></el-input-number>
                    </el-form-item>
                    <el-form-item label="课后2">
                        <el-input-number v-model="stuGrade.kehouTwo" :min="0" :max="5" :step="5"></el-input-number>
                    </el-form-item>
                    <el-form-item label="课后3">
                        <el-input-number v-model="stuGrade.kehouThree" :min="0" :max="5" :step="5"></el-input-number>
                    </el-form-item>

                    <el-divider />

                    <el-form-item label="表1——1">
                        <el-input-number v-model="stuGrade.tableOneCol1" :min="0" :max="1" :step="1"></el-input-number>
                    </el-form-item>
                    <el-form-item label="表1——2">
                        <el-input-number v-model="stuGrade.tableOneCol2" :min="0" :max="1" :step="1"></el-input-number>
                    </el-form-item>
                    <el-form-item label="表1——3">
                        <el-input-number v-model="stuGrade.tableOneCol3" :min="0" :max="2" :step="2"></el-input-number>
                    </el-form-item>

                    <el-divider />

                    <el-form-item label="选择1">
                        <el-input-number v-model="stuGrade.choiceOne" :min="0" :max="2" :step="2"></el-input-number>
                    </el-form-item>
                    <el-form-item label="选择2">
                        <el-input-number v-model="stuGrade.choiceTwo" :min="0" :max="2" :step="2"></el-input-number>
                    </el-form-item>
                    <el-form-item label="选择3">
                        <el-input-number v-model="stuGrade.choiceThree" :min="0" :max="2" :step="2"></el-input-number>
                    </el-form-item>

                    <el-divider />

                    <el-form-item label="表2——1">
                        <el-input-number v-model="stuGrade.tableTwoCol1" :min="0" :max="2" :step="2"></el-input-number>
                    </el-form-item>
                    <el-form-item label="表2——2">
                        <el-input-number v-model="stuGrade.tableTwoCol2" :min="0" :max="1" :step="1"></el-input-number>
                    </el-form-item>
                    <el-form-item label="表2——3">
                        <el-input-number v-model="stuGrade.tableTwoCol3" :min="0" :max="2" :step="2"></el-input-number>
                    </el-form-item>
                    <el-form-item label="表2——4">
                        <el-input-number v-model="stuGrade.tableTwoCol4" :min="0" :max="2" :step="2"></el-input-number>
                    </el-form-item>

                    <el-divider />

                    <el-form-item label="表3——1">
                        <el-input-number v-model="stuGrade.tableThreeCol1" :min="0" :max="1"
                            :step="0.1"></el-input-number>
                    </el-form-item>
                    <el-form-item label="表3——2">
                        <el-input-number v-model="stuGrade.tableThreeCol2" :min="0" :max="1"
                            :step="0.1"></el-input-number>
                    </el-form-item>
                    <el-form-item label="表3——3">
                        <el-input-number v-model="stuGrade.tableThreeCol3" :min="0" :max="1"
                            :step="0.1"></el-input-number>
                    </el-form-item>
                    <el-form-item label="表3——4">
                        <el-input-number v-model="stuGrade.tableThreeCol4" :min="0" :max="1"
                            :step="0.1"></el-input-number>
                    </el-form-item>
                    <el-form-item label="表3——5">
                        <el-input-number v-model="stuGrade.tableThreeCol5" :min="0" :max="1"
                            :step="0.1"></el-input-number>
                    </el-form-item>
                    <el-form-item label="表3——6">
                        <el-input-number v-model="stuGrade.tableThreeCol6" :min="0" :max="1"
                            :step="0.1"></el-input-number>
                    </el-form-item>

                    <el-divider />

                    <el-form-item label="表4——1">
                        <el-input-number v-model="stuGrade.tableFourCol1" :min="0" :max="2" :step="2"></el-input-number>
                    </el-form-item>
                    <el-form-item label="表4——2">
                        <el-input-number v-model="stuGrade.tableFourCol2" :min="0" :max="2" :step="2"></el-input-number>
                    </el-form-item>

                    <el-divider />

                    <el-form-item label="选择4">
                        <el-input-number v-model="stuGrade.choiceFour" :min="0" :max="2" :step="2"></el-input-number>
                    </el-form-item>

                    <el-form-item>
                        <el-button size="small" @click="saveGrade">保存</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>

        <div class="w-full bg-blue-100 h-screen flex flex-col p-4">
            <div class="w-full h-[50vh] overflow-auto p-4">
                <aichat v-if="chatId" :chatId="chatId" />
            </div>

            <div ref="lab" v-if="labModelList" class="h-[50vh] overflow-auto">
                <div v-for="(item, i) in labModelList" :key="'module-' + i"
                    class="model-item scroll-mt-[80px] card p-8 mb-8" :id="'module-' + i">
                    <div class="text-2xl font-bold mb-6 flex items-center">
                        <!-- <i class="fas fa-info-circle text-blue-600 mr-3"></i> -->
                        <font-awesome-icon :icon="item.icon" class="text-blue-600 mr-3" />
                        {{ item.name }}
                    </div>
                    <div class="mb-8 overflow-x-auto">
                        <div class="flex space-x-2 md:space-x-4 min-w-max">
                            <button v-for="(section, j) in labModelList[i].sectionVoList"
                                class="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-full text-sm font-medium transition-colors">
                                {{ '步骤' + (j + 1) }}
                            </button>
                        </div>
                    </div>
                    <div v-for="(section, j) in labModelList[i].sectionVoList">
                        <div class="section-container border rounded-lg mb-6 p-6 scroll-mt-[80px]"
                            :id="'module-' + (i) + 'step-' + j">
                            <sectionItem :section="section" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { ProjectDetail } from "@/apis/project/detail.js"
import { emdGetStuTaskDetail } from '@/apis/emdProject/getStudentTaskDetail.js'
import { GetStudentTaskChat } from '@/apis/aiAssistant/studentTaskChat.js'
import { StudentGroup } from '@/apis/course_emd/getTaskStudentGroup.js';
import { GetAllGrades } from "@/apis/louyongle/getGradeAll.js"
import { AddGrades } from "@/apis/louyongle/addGrade.js"
import sectionItem from './sectionContainer/sectionView.vue';
import aichat from '@/views/projectEMDDocReader/EMDLab/AICom/aiChat.vue'
import '@/styles/stuTask/stuLab.css'
import { ElMessage } from 'element-plus';

const projectId = ref(162)
const taskId = ref(915)
const currentStu = ref<any>()

const studentList = ref<any[]>()

const labModelList = ref<any>()

const chatId = ref()

const groupStudents = ref<any[] | null>()

const showStudentList = ref()

const gradeList = ref<any[]>()
const gradeListStuIdList = ref()

const stuGrade = ref()

const studentGradeTemp = ref({
    stuId: null,
    studentName: '',
    studentId: '',
    yuxiOne: 0,
    yuxiTwo: 0,
    yuxiThree: 0,
    kehouOne: 0,
    kehouTwo: 0,
    kehouThree: 0,
    choiceOne: 0,
    choiceTwo: 0,
    choiceThree: 0,
    choiceFour: 0,
    tableOneCol1: 0,
    tableOneCol2: 0,
    tableOneCol3: 0,
    tableTwoCol1: 0,
    tableTwoCol2: 0,
    tableTwoCol3: 0,
    tableTwoCol4: 0,
    tableThreeCol1: 0,
    tableThreeCol2: 0,
    tableThreeCol3: 0,
    tableThreeCol4: 0,
    tableThreeCol5: 0,
    tableThreeCol6: 0,
    tableFourCol1: 0,
    tableFourCol2: 0,
})

const getStudentList = () => {
    ProjectDetail(projectId.value).then(res => {
        if (res.state == 200) {
            studentList.value = res.data
            showStudentList.value = studentList.value.slice(142)
        }
    })
}

const setType = (stu) => {
    if (currentStu.value) {
        if (stu.id == currentStu.value.id) {
            return 'primary'
        }
    }

    if (gradeListStuIdList.value) {
        if (gradeListStuIdList.value.has(stu.id)) {
            return 'success'
        }
    }
    return ''

}

const changeStudent = (stu: any) => {
    currentStu.value = stu
    labModelList.value = null
    chatId.value = null
    groupStudents.value = null
    stuGrade.value = JSON.parse(JSON.stringify(studentGradeTemp))
    stuGrade.value.stuId = currentStu.value.id
    stuGrade.value.studentName = currentStu.value.studentName
    stuGrade.value.studentId = currentStu.value.studentId
    getStuGroup(stu.id, taskId.value)
    getStuChatId(stu.id, taskId.value)
    getStuTaskDetail(stu.id, taskId.value)

}

const notFilter = () => {
    // if (gradeListStuIdList.value) {
    //     showStudentList.value = studentList.value.filter(item => gradeListStuIdList.value.some(item2 => item2.id !== item.id))
    //     return
    // }
    showStudentList.value = studentList.value
}

const getStuTaskDetail = (stuId, taskId) => {
    emdGetStuTaskDetail(stuId, taskId).then(res => {
        if (res.state == 200) {
            labModelList.value = res.data.labModelVoList
        }
    })
}

const getStuChatId = (s, t) => {
    GetStudentTaskChat(s, t).then(res => {
        if (res.state == 200) {
            chatId.value = res.data
        }
    })
}

const getStuGroup = (s, t) => {
    StudentGroup(t, s).then(res => {
        if (res.state == 200) {
            if (res.data != null) {
                groupStudents.value = res.data.groupStudents
            }
            if (groupStudents.value != null) {
                showStudentList.value = studentList.value.filter(item1 => groupStudents.value.some(item2 => item2.id === item1.id))
            }

        }
    })
}

const saveGrade = () => {
    const qo = []
    if (groupStudents.value != null) {
        groupStudents.value.forEach(stu => {
            let nStuGrade = JSON.parse(JSON.stringify(stuGrade.value))
            nStuGrade.stuId = stu.id
            nStuGrade.studentName = stu.studentName
            nStuGrade.studentId = stu.studentId
            qo.push(nStuGrade)
        })
    } else {
        qo.push(stuGrade.value)
    }
    AddGrades(qo).then(res => {
        if (res.state == 200) {
            ElMessage.success("已保存")
            gradeList.value = res.data
            if (gradeList.value.length > 0) {
                gradeListStuIdList.value = new Set(gradeList.value.map(item => item.stuId));
            }
            notFilter()
        }
    })

}

onMounted(() => {
    GetAllGrades().then(res => {
        if (res.state == 200) {
            gradeList.value = res.data
            if (gradeList.value.length > 0) {
                gradeListStuIdList.value = new Set(gradeList.value.map(item => item.stuId));
            }
        }
    })
})

</script>
<style scoped>
.a {
    height: calc(100%-50px);
}
</style>