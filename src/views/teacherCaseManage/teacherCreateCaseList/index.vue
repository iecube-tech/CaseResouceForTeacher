<template>
    <div>
        <el-card class="content" shadow="hover" v-for="i in contentList.length" :body-style="{ flex: 'auto' }">
            <el-row class="content-body">
                <div style="display: flex; flex-direction: row;">
                    <div>
                        <h1>{{ contentList[i - 1].name }}</h1>
                    </div>
                </div>
                <div style="display: flex; flex-direction: row; align-items: center;">
                    <span>
                        {{ contentList[i - 1].createTime }}
                    </span>
                </div>
                <div style="display: flex; flex-direction: row; align-items: center;">
                    <span>完成度：</span>
                    <span :style="getCompletionStyle(contentList[i - 1].completion)">
                        {{ getCompletion(contentList[i - 1].completion) }}
                    </span>
                </div>
                <div style="display: flex; flex-direction: row;">
                    <el-button link type="primary" :icon="Edit" @click="toContentEdit(contentList[i - 1].id)"></el-button>
                    <el-popconfirm title="确定要删除吗?" @confirm="deleteConten(contentList[i - 1].id)">
                        <template #reference>
                            <el-button link type="danger" :icon="Delete"></el-button>
                        </template>
                    </el-popconfirm>

                </div>
            </el-row>
        </el-card>
    </div>
</template>

<script setup lang="ts">
import { onBeforeMount, ref } from 'vue';
import { ContentsOfICreated } from '@/apis/content/teacherContent/getICreatedContents.js';
import { ElMessage } from 'element-plus';
import { Edit, Delete } from '@element-plus/icons-vue';
import router from '@/router';

import { contentDelete } from '@/apis/content/contentDelete.js';

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
        name: 'teacherModifyCase',
        params: { caseId: id }
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
    ContentsOfICreated().then(res => {
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
    justify-content: space-between;
    align-items: center;
}

h1 {
    color: #33b8b9;
}
</style>