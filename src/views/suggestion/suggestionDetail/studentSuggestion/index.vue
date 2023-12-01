<template>
    <div class="student">
        <!-- <div style="padding: 10px; color: #33b8b9; font-size: 18px;">
            <h1>学生改进建议</h1>
        </div> -->
        <el-row :gutter="20" style="margin-top:20px">
            <el-col :span="20">
                <el-input v-model="search_input" :clearable="true" placeholder=" 输入学号或者姓名..." class="input-with-select">
                    <template #append>
                        <el-button :icon="Search" type="primary" @click="search()" />
                    </template>
                </el-input>
            </el-col>
            <el-col :span="4" style="text-align: center;">
                <el-button type="primary" @click="searchReset()">
                    重置搜索
                </el-button>
            </el-col>
        </el-row>

        <el-table :data="showData" :default-sort="{ prop: 'studentId', order: 'descending' }"
            style="min-height: 65vh; margin-top:30px" stripe
            :header-cell-style="{ fontWeight: 'bold', textAlign: 'center' }" :row-style="{ flexGrow: 1 }">
            <el-table-column label="姓名/学号" width="110">
                <template #default="scope">
                    <div style="text-align:center">
                        <span>{{ scope.row.studentName }}</span>
                        <br />
                        <span>{{ scope.row.studentId }}</span>
                    </div>
                </template>
            </el-table-column>
            <el-table-column label="实验状态">
                <template #default="scope">
                    <el-steps align-center>
                        <el-step v-for="step in scope.row.studentTasks.length"
                            :title="getStepTitle(scope.row.studentTasks[step - 1].taskGrade)"
                            :status="getStatus(scope.row.studentTasks)" />
                    </el-steps>
                </template>
            </el-table-column>
            <el-table-column label="总分" width="100">
                <template #default="scope">
                    <div style="text-align:center">
                        <span>{{ scope.row.studentGrade }}</span>
                    </div>
                </template>
            </el-table-column>
            <el-table-column label="个性化改进建议" width="180">
                <template #default="scope">
                    <div style="height: 74px; overflow: hidden;">
                        {{ scope.row.suggestion[0] }}
                    </div>
                </template>
            </el-table-column>
            <el-table-column type="expand">
                <template #default="props">
                    <div v-for="i in props.row.suggestion">{{ i }}</div>
                </template>
            </el-table-column>
        </el-table>

        <el-row style="margin-top: 20px; text-align: center; display: flex; justify-content: center; align-items: center;">
            <el-pagination v-model:current-page="currentPage" v-model:page-size="pageSize" :page-sizes="[10, 20, 40, 60]"
                :small="true" :background="true" layout="total, sizes, prev, pager, next, jumper" :total="participations"
                @size-change="handleSizeChange" @current-change="handleCurrentChange" />
        </el-row>
    </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { onMounted, ref, onUnmounted, onBeforeMount } from 'vue'
import pageHeader from '@/components/pageheader.vue'
import { Back, Search } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus';
import { ProjectDetail } from '@/apis/project/detail.js';
import router from '@/router';

const route = useRoute()
const projectId = route.params.projectId
const participations = ref(0)
const data = ref([])
const showData = ref([])
const currentPage = ref(1)
const pageSize = ref(20)
const search_input = ref('')
const search = () => {
    showData.value = []
    for (let i = 0; i < data.value.length; i++) {
        if (data.value[i].studentName == search_input.value || data.value[i].studentId == search_input.value) {
            showData.value.push(data.value[i])
        }
    }
}
const searchReset = () => {
    search_input.value = ''
    showData.value = data.value.slice((currentPage.value - 1) * pageSize.value, (currentPage.value - 1) * pageSize.value + pageSize.value)
}

const handleSizeChange = (val: number) => {
    pageSize.value = val;
    currentPage.value = 1;
    showData.value = data.value.slice(currentPage.value - 1, pageSize.value + currentPage.value - 1)
}

const handleCurrentChange = (val: number) => {
    showData.value = data.value.slice((currentPage.value - 1) * pageSize.value, (currentPage.value - 1) * pageSize.value + pageSize.value)
}

const projectData = ref({
    averageGrade: null,
    numberOfCompleter: null,
    numberOfParticipant: null,
    personnelDistributions: [{ taskNum: null, studentNum: null }],
    taskAverages: [{ taskNum: null, averageGrade: null }],
    taskMedians: [{ taskNum: null, medianGrade: null }],
    tagsCount: [{ item: null, count: null }],
})
onBeforeMount(async () => {
    await ProjectDetail(projectId).then(res => {
        if (res.state == 200) {
            //console.log(res);
            data.value = res.data
            showData.value = data.value.slice((currentPage.value - 1) * pageSize.value, (currentPage.value - 1) * pageSize.value + pageSize.value)
            participations.value = data.value.length
        } else {
            ElMessage.error("获取数据异常;" + res.message)
        }
    })

})

const getStepActive = (tasks) => {
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].taskStatus == 1) {
            return i
        }
    }
}

const getStatus = (tasks) => {
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].taskStatus == 0) {
            return 'wait'
        }
        if (tasks[i].taskStatus == 1) {
            return 'process'
        }
        if (tasks[i].taskStatus >= 2) {
            return 'finish'
        }
    }
}
const getStepTitle = (taskGrade) => {
    if (taskGrade) {
        return taskGrade + ''
    } else {
        return "-"
    }

}

const goBack = () => {
    router.push({
        name: <string>route.meta.parentName
    })
}
</script>
<style scoped></style>