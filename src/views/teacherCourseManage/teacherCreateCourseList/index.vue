<template>
    <div>
        <el-card class="content" shadow="hover" v-for="i in contentList.length" :body-style="{ flex: 'auto' }">
            <el-row class="content-body">
                <el-col :span="6" style="display: flex; flex-direction: row;">
                    <div>
                        <h1>{{ contentList[i - 1].name }}</h1>
                    </div>
                </el-col>
                <el-col :span="6" style="display: flex; flex-direction: row;">
                    <span>
                        {{ formatDate(contentList[i - 1].createTime) }}
                    </span>
                </el-col>
                <el-col :span="6" style="display: flex; flex-direction: row; justify-content: center;">
                    <span>完成度：</span>
                    <span :style="getCompletionStyle(contentList[i - 1].completion)">
                        {{ getCompletion(contentList[i - 1].completion) }}
                    </span>
                </el-col>
                <el-col :span="6" style="display: flex; flex-direction: row; justify-content: flex-end;">
                    <el-button link type="primary" :icon="Edit" @click="toContentEdit(contentList[i - 1].id)"></el-button>
                    <el-popconfirm title="确定要删除吗?" @confirm="deleteConten(contentList[i - 1].id)">
                        <template #reference>
                            <el-button link type="danger" :icon="Delete"></el-button>
                        </template>
                    </el-popconfirm>
                </el-col>
            </el-row>
        </el-card>
    </div>
</template>

<script setup lang="ts">
import { onBeforeMount, ref } from 'vue';
import { TeacherCreatedCourses } from '@/apis/course/teacherCreated.js';
import { ElMessage } from 'element-plus';
import { Edit, Delete } from '@element-plus/icons-vue';
import router from '@/router';

import { contentDelete } from '@/apis/content/contentDelete.js';
import dayjs from 'dayjs'

const formatDate = (time: string | Date) => {
    if (!time) {
        return '未设置时间节点'
    }
    return dayjs(time).format('YYYY年MM月DD日 HH:mm')
}

const contentList = ref([])

const format = (percentage) => (percentage === 100 ? 'Full' : `${percentage}%`)

const getCompletion = (completion) => {
    if (completion < 6) {
        return (completion + 1) + "/7"
    } else {
        return "done"
    }
}

const getCompletionStyle = (completion) => {
    if (completion < 6) {
        return "color: red"
    } else {
        return "color: #33b8b9"
    }

}
const toContentEdit = (id) => {
    router.push({
        name: 'teacherModifyCourse',
        params: { courseId: <any>id }
    })
}
const deleteConten = (id) => {
    contentDelete(id).then(res => {
        if (res.state == 200) {
            ElMessage({
                type: 'success',
                message: '删除成功'
            })
            getContentList();
        } else {
            ElMessage.error(res.message)
        }
    })
    console.log(id)
}

const getContentList = () => {
    TeacherCreatedCourses().then(res => {
        if (res.state == 200) {
            contentList.value = res.data
        } else {
            ElMessage.error("获取数据失败")
        }
    })
}

onBeforeMount(() => {
    getContentList()
})
</script>
<style scoped>
.content {
    height: 80px;
    display: flex;
    flex-direction: row;
    align-items: center;
}

.content-body {
    display: flex;
    /* justify-content: space-between; */
    align-items: center;
}

h1 {
    color: #33b8b9;
}
</style>