<template>
    <div>

    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { emdGetStuTaskDetail } from '@/apis/emdProject/getStudentTaskDetail';
import router from '@/router';
import { useRoute } from 'vue-router';
import { ElMessage } from 'element-plus';

const route = useRoute()
const studentId = route.params.studentId
const taskId = route.params.taskId


const getStuTaskDetail = () => {
    emdGetStuTaskDetail(studentId, taskId).then(res => {
        if (res.state == 200) {

        }
        else {
            ElMessage.error(res.message)
        }
    })
}
onMounted(() => {
    getStuTaskDetail()
})

</script>
<style scoped></style>