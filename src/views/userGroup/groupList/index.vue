<template>
    <el-card class="content" shadow="hover" v-for="(item, i) in UserGroupList" :body-style="{ flex: 'auto' }">
        <el-row class="content-body">
            <div style="display: flex; flex-direction: row;">
                <div>
                    <h1>{{ item.name }}</h1>
                </div>
            </div>
            <div style="display: flex; flex-direction: row; justify-content: flex-end;">
                <el-button link type="primary" @click="toAuth(item.id)">权限及用户</el-button>
                <el-button link type="primary" :icon="Edit" @click="editGroup(item)"></el-button>
                <el-popconfirm title="确定要删除吗?" @confirm="delUserGroup(item)">
                    <template #reference>
                        <el-button link type="danger" :icon="Delete"></el-button>
                    </template>
                </el-popconfirm>
            </div>
        </el-row>
    </el-card>

    <el-dialog v-model="thisStore.addGroupDialog" title="新建用户组" width="700" @close="addGroupDialogClose">
        <div>
            <el-form-item label="用户组名称：">
                <el-input v-model="newUserGroup.name" placeholder="请输入用户组名"> </el-input>
            </el-form-item>
        </div>
        <template #footer>
            <div>
                <el-button @click="thisStore.addGroupDialogChange()">取消</el-button>
                <el-button type="primary" @click="addUserGroup()">添加</el-button>
            </div>
        </template>
    </el-dialog>

    <el-dialog v-model="updateGroupDialog" title="编辑用户组" width="700" @close="updateGroupDialogClose">
        <div>
            <el-form-item label="用户组名称：">
                <el-input v-model="currentGroup.name" placeholder="请输入用户组名"> </el-input>
            </el-form-item>
        </div>
        <template #footer>
            <div>
                <el-button @click="updateGroupDialogChange()">取消</el-button>
                <el-button type="primary" @click="updateUserGroup()">更新</el-button>
            </div>
        </template>
    </el-dialog>
</template>

<script setup lang="ts">
import { onBeforeMount, ref } from 'vue';
import { GetUserGroupList } from '@/apis/userGroup/getUserGroupList.js';
import { ElMessage } from 'element-plus';
import { Delete, Edit } from '@element-plus/icons-vue';
import router from '@/router';
import { userGroupStore } from '@/stores/userGroupStore';
import { AddUserGroup } from '@/apis/userGroup/addUserGroup';
import { UpdateUserGroup } from '@/apis/userGroup/updateUserGroup';
import { DelUserGroup } from '@/apis/userGroup/delUserGroup';

const thisStore = userGroupStore()

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

const newUserGroup = ref({
    id: null,
    name: ''
})

const addUserGroup = () => {
    if (newUserGroup.value.name === '' || newUserGroup.value.name == null) {
        ElMessage.warning("请输入用户组名")
        return
    }
    AddUserGroup(newUserGroup.value).then(res => {
        if (res.state == 200) {
            UserGroupList.value = res.data
            thisStore.addGroupDialogChange()
        } else {
            ElMessage.error(res.message)
        }
    })

}

const addGroupDialogClose = () => {
    newUserGroup.value.name = ''
}

const currentGroup = ref()

const editGroup = (group) => {
    currentGroup.value = group
    updateGroupDialog.value = true
}

const updateGroupDialog = ref(false)

const updateGroupDialogChange = () => {
    updateGroupDialog.value = !updateGroupDialog.value
}

const updateGroupDialogClose = () => {
    currentGroup.value = null
}

const updateUserGroup = () => {
    UpdateUserGroup(currentGroup.value).then(res => {
        if (res.state == 200) {
            UserGroupList.value = res.data
            updateGroupDialogChange()
        } else {
            ElMessage.error(res.message)
        }
    })
}


const delUserGroup = (userGroup) => {
    DelUserGroup(userGroup.id).then(res => {
        if (res.state == 200) {
            UserGroupList.value = res.data
        } else {
            ElMessage.error(res.message)
        }
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