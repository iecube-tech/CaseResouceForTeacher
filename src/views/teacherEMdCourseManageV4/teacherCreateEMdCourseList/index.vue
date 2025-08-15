<template>
    <div>
        <el-card class="content" shadow="hover" v-for="(item, i) in contentList" :body-style="{ flex: 'auto' }">
            <el-row class="content-body">
                <el-col :span="6" style="display: flex; flex-direction: row;">
                    <div>
                        <h1>{{ item.name }}</h1>
                    </div>
                </el-col>
                <el-col :span="4" style="display: flex; flex-direction: row;">
                    <span>
                        {{ formatDate(item.createTime) }}
                    </span>
                </el-col>
                <el-col :span="4" style="display: flex; flex-direction: row; justify-content: center;">
                    <span>完成度：</span>
                    <span :style="getCompletionStyle(item.completion)">
                        {{ getCompletion(item.completion) }}
                    </span>
                </el-col>
                <el-col :span="4"
                    style="display: flex; flex-direction: row; align-items: center; justify-content: center;">
                    <el-switch v-model="item.isPrivate" size="small" active-text="公开" inactive-text="私密"
                        :active-value="0" :inactive-value="1" @click="switchChange(item.id)" />
                </el-col>
                <el-col :span="6" style="display: flex; flex-direction: row; justify-content: flex-end;">
                    <el-button link type="primary" @click="toContentEdit(item.id)">课程编辑</el-button>
                    <el-popconfirm title="确定要删除吗?" @confirm="deleteConten(item.id)">
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
import { GetEMdCourse } from '@/apis/course_emd/getEMdCourse.js';
import { ElMessage } from 'element-plus';
import {  Delete } from '@element-plus/icons-vue';
import router from '@/router';
import { UpdateIsPrivate } from '@/apis/content/teacherContent/updatePrivate.js';
import { contentDelete } from '@/apis/content/contentDelete.js';
import dayjs from 'dayjs'

const formatDate = (time: string | Date) => {
    if (!time) {
        return '未设置时间节点'
    }
    return dayjs(time).format('YYYY年MM月DD日 HH:mm')
}

const contentList = ref([])

const switchChange = (id) => {
    UpdateIsPrivate(id).then(res => {
        if (res.state == 200) {
            
        } else {
            ElMessage.error("更新失败 " + res.message)
            initContentList()
        }
    })
}


const getCompletion = (completion) => {
    if (completion < 6) {
        return (completion + 1) + "/5"
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
        name: 'teacherModifyEMdCourseV4',
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
            initContentList();
        } else {
            ElMessage.error(res.message)
        }
    })
}

const initContentList = () => {
    GetEMdCourse().then(res => {
        if (res.state == 200) {
            contentList.value = res.data
        } else {
            ElMessage.error("获取数据失败")
        }
    })
}

initContentList()

</script>

<style scoped>
.content {
    height: 80px;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 1em 1em;
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