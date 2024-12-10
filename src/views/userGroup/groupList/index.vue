<template>
    <el-card class="content" shadow="hover" v-for="(item, i) in UserGroupList" :body-style="{ flex: 'auto' }">
        <el-row class="content-body">
            <div style="display: flex; flex-direction: row;">
                <div>
                    <h1>{{ item.name }}</h1>
                </div>
            </div>
            <div style="display: flex; flex-direction: row; justify-content: flex-end;">
                <el-button link type="primary" @click="toAuth(item.id)">权限管理</el-button>
                <el-button link type="primary" @click="toUser(item.id)">用户管理</el-button>
                <el-popconfirm title="确定要删除吗?" @confirm="">
                    <template #reference>
                        <el-button link type="danger" :icon="Delete"></el-button>
                    </template>
                </el-popconfirm>
            </div>
        </el-row>
    </el-card>
</template>

<script setup lang="ts">
import { onBeforeMount, ref } from 'vue';
import { GetUserGroupList } from '@/apis/userGroup/getUserGroupList.js';
import { ElMessage } from 'element-plus';
import { Delete } from '@element-plus/icons-vue';
import router from '@/router';

const UserGroupList = ref([])


const getUserGroupList = () => {
    GetUserGroupList().then(res => {
        if (res.state == 200) {
            UserGroupList.value = res.data
        } else {
            ElMessage.error(res.message)
        }
    })
}

const toAuth = (id) => {
    router.push({
        name: 'userGroupAuth',
        params: { id: id }
    })
}

const toUser = (id) => {
    router.push({
        name: 'userGroupUser',
        params: { id: id }
    })
}

onBeforeMount(() => {
    getUserGroupList()
})
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
    align-items: center;
    justify-content: space-between;
}
</style>