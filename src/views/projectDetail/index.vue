<template>
    <main>
        <div class="aside">
            <el-col style="flex-grow: 1; margin-top: 80px;">
                <div class="left_text">
                    蓝牙音箱
                </div>
                <div class="left_text">
                    参与人数
                </div>
                <div class="left_text">
                    已完成人数
                </div>
                <div class="left_text">
                    未开始项目人数
                </div>
                <div class="left_text">
                    当前人数最多的步骤为：
                </div>
            </el-col>
        </div>

        <div class="content_main">
            <div v-for="o in 8" :key="o">
                <el-card shadow="hover" class="student_project" @click="jumpToDetail(o, projectId, random())">
                    <el-row style="height: 50px;">
                        李欣然-21408070116
                    </el-row>
                    <el-row>
                        <el-steps :active="random()" finish-status="success" style="flex-grow: 1;">
                            <el-step v-for="i in project_length" :title="gettitle(i)"
                                @click="jumpToDetail(o, projectId, i)" />
                        </el-steps>
                    </el-row>
                </el-card>
            </div>
        </div>

        <div class="right_aside">

        </div>
    </main>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import router from '@/router'
import { useRoute } from 'vue-router';

const Route = useRoute()
const projectId = Route.params.projectId
const project_length = ref(11)
const gettitle = (num) => {
    if (project_length.value <= 19) {
        return '步骤' + num
    } else {
        return num
    }
}
const random = () => {
    return Math.floor(Math.random() * project_length.value)
}

const jumpToDetail = async (studentId, projectId, stepNum) => {
    // console.log(studentId, projectId);
    await router.push({
        name: 'ProjectStudentDetail',
        params: {
            studentId: studentId,
            projectId: projectId,
            stepNum: stepNum,
        }
    })
}

onMounted(() => {
    // console.log("获取到的参数", Route.params.projectId);
})
</script>

<style scoped>
main {
    width: 100%;
    height: 100%;
    display: flex;
}

.aside {
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 200px;
    /* text-align: center; */
    display: flex;
}

.left_text {
    text-align: center;
}


.content_main {
    /* height: 100%; */
    flex-basis: 1000px;
}

.student_project {
    height: 150px;
    margin-top: 30px;
    margin-bottom: 10px;
}

.right_aside {
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 200px;
}
</style>