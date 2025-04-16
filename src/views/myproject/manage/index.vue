<template>
    <div>
        <pageHeader :route=route />
        <div class="view-card">
            <el-card style="display: flex; flex-direction: column; "
                :body-style="{ display: 'flex', flexDirection: 'column', }">
                <template #header>
                    <div class="card-header">
                        <el-button type="primary" :icon="Back" link @click="goBack">返回</el-button>
                    </div>
                </template>
                <el-card shadow="hover" v-for="(item, i) in myProjects" :body-style="{ flex: 'auto' }"
                    style="margin-top: .5rem; margin-bottom: .5rem;">
                    <el-row>
                        <el-col :span="8">
                            {{ item.projectName }}
                        </el-col>
                        <el-col :span="8">
                            {{ formatDate(item.startTime) }} - {{ formatDate(item.endTime) }}
                        </el-col>
                        <el-col :span="4">
                            <el-switch v-model="item.hidden" active-text="展示" inactive-text="隐藏" :active-value="0"
                                :inactive-value="1" @click="changeHidden(item.id)" />
                        </el-col>
                        <el-col :span="4">
                            <el-button link type="primary" @click="jumpToDetail(item.id)">详情</el-button>
                            <el-popconfirm title="确定要删除吗?" @confirm="deleteProject(item.id)">
                                <template #reference>
                                    <el-button link type="danger" :icon="Delete"></el-button>
                                </template>
                            </el-popconfirm>
                        </el-col>
                    </el-row>
                </el-card>
            </el-card>
        </div>
    </div>
</template>

<script setup lang="ts">
import router from '@/router';
import { useRoute } from 'vue-router';
import { onBeforeMount, ref } from 'vue';
import { ElMessage } from 'element-plus';
import pageHeader from '@/components/pageheader.vue';
import { Back, Delete } from '@element-plus/icons-vue'
import { MyProjectAll } from '@/apis/project/myProjectAll.js';
import { DeleteProject } from '@/apis/project/delete.js';
import { Hidden } from '@/apis/project/hidden.js';
import dayjs from 'dayjs'
import { projectTableDataStore } from '@/stores/projectTableData.js'
const TableDataStore = projectTableDataStore()

const route = useRoute()
const myProjects = ref([])
const goBack = () => {
    router.go(-1)
}

const formatDate = (time: string | Date) => {
    if (!time) {
        return '未设置时间节点'
    }
    return dayjs(time).format('YYYY年MM月DD日 HH:mm')
}
const deleteProject = (id) => {
    DeleteProject(id).then(res => {
        if (res.state == 200) {
            getMyProject();
            ElMessage({
                type: 'success',
                message: '删除成功'
            })
        } else {
            ElMessage.error(res.message)
        }
    })
}
const jumpToDetail = async (id) => {
    TableDataStore.clearData();
    await router.push({
        name: 'ProjectDetail',
        params: {
            projectId: id,
        }
    })
}

const hiddenProject = (id) => {
    Hidden(id).then(res => {
        if (res.state == 200) {
            getMyProject();
            ElMessage({
                type: 'success',
                message: '已隐藏'
            })
        } else {
            ElMessage.error(res.message)
        }
    })
}

const changeHidden = (id) => {
    Hidden(id).then(res => {
        if (res.state == 200) {
            // getMyProject();
            ElMessage.success("操作成功")
        } else {
            ElMessage.error(res.message)
        }
    })
}

const getMyProject = () => {
    MyProjectAll().then(res => {
        if (res.state == 200) {
            myProjects.value = res.data
        } else {
            ElMessage.error("获取数据异常;" + res.message)
        }

    })
}

onBeforeMount(() => {
    getMyProject();
})
</script>
<style scoped>
@import "@/styles/cardPadding/cardPadding.css";

.el-col {
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>