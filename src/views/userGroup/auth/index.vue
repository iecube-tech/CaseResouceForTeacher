<template>
    <div style="display: flex; flex-direction: column; width: 100%;">
        <div style="font-size: 1.5em;">
            用户组权限
        </div>
        <div v-if="groupVo != null">

            <el-tag v-for="(tag, i) in groupVo.authorities" :key="tag.authority" closable
                @close="openRemoveAuthDiaglog(tag)" style="margin-right: 1em; margin-top: 1em">
                {{ tag.instructions }}
            </el-tag>
        </div>
        <div style="font-size: 1.5em; margin-top: 2em;">
            用户列表
        </div>

        <div v-if="groupVo != null">
            <el-table :data="groupVo.teacherList">
                <el-table-column prop="schoolName" label="学校"></el-table-column>
                <el-table-column prop="collageName" label="学院"></el-table-column>
                <el-table-column prop="teacherEmail" label="账户"></el-table-column>
                <el-table-column prop="teacherName" label="用户名"></el-table-column>
                <el-table-column label="操作" :align="'right'">
                    <template #default="scoped">
                        <el-popconfirm title="确定要将用户移出用户组吗?" @confirm="groupRemoveUser(scoped.row.teacherId)">
                            <template #reference>
                                <el-button link type="danger" :icon="Delete"></el-button>
                            </template>
                        </el-popconfirm>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>

    <el-dialog v-model="removeAuthDialog" title="确定移除权限吗" width=500 @close="willRemoveAuth = null">
        正在删除权限：“{{ willRemoveAuth.instructions }}”， 确定删除吗
        <template #footer>
            <el-button @click="removeAuthDialog = false">取消</el-button>
            <el-button type="primary" @click="groupRemoveAuth(willRemoveAuth)">确定</el-button>
        </template>
    </el-dialog>

    <el-dialog v-model="thisStore.addAuthDialog" title="用户组权限">
        <el-table :data="allAuthList" @selection-change="authSelectionChange">
            <el-table-column prop="instructions"></el-table-column>
            <el-table-column type="selection" :selectable="AuthSelectable" :align="'right'" />
        </el-table>

        <template #footer>
            <el-button @click="thisStore.addAuthDialogChange()">取消</el-button>
            <el-button type="primary" @click="addAuth">添加</el-button>
        </template>
    </el-dialog>

    <el-dialog v-model="thisStore.addUserDialog" title="添加用户">
        <el-table :data="allTeacherList" @selection-change="teacherSelectionChange">
            <el-table-column prop="schoolName" label="学校"></el-table-column>
            <el-table-column prop="collageName" label="学院"></el-table-column>
            <el-table-column prop="teacherEmail" label="账号"></el-table-column>
            <el-table-column prop="teacherName" label="姓名"></el-table-column>
            <el-table-column type="selection" :selectable="TeacherSelectable" :align="'right'" />
        </el-table>

        <template #footer>
            <el-button @click="thisStore.addUserDialogChange()">取消</el-button>
            <el-button type="primary" @click="addTeacher">添加</el-button>
        </template>

    </el-dialog>


</template>

<script setup lang="ts">
import { onBeforeMount, ref } from 'vue';
import { GetUserGroupDetail } from '@/apis/userGroup/getUserGroupDetail';
import { useRoute } from 'vue-router';
import { ElMessage } from 'element-plus';
import { Delete, CircleCloseFilled } from '@element-plus/icons-vue';
import { userGroupStore } from '@/stores/userGroupStore';
import { GetAllAuth } from '@/apis/userGroup/allAuth';
import { GroupRemoveAuth } from '@/apis/userGroup/removeAuth';
import { GroupRemoveUser } from '@/apis/userGroup/removeUser';
import { GroupAddAuth } from '@/apis/userGroup/addAuth';
import { GroupAddUser } from '@/apis/userGroup/addUser';
import { GetTeacherList } from '@/apis/teacher/getTeacherList';

const route = useRoute()
const thisStore = userGroupStore()

const groupId = ref()

const groupVo = ref()

const allAuthList = ref()
const allTeacherList = ref()

const removeAuthDialog = ref(false)
const willRemoveAuth = ref()
const openRemoveAuthDiaglog = (auth) => {
    willRemoveAuth.value = auth
    removeAuthDialog.value = true
}

const groupRemoveAuth = (auth) => {
    GroupRemoveAuth(groupId.value, auth.id).then(res => {
        if (res.state == 200) {
            groupVo.value = res.data
            removeAuthDialog.value = false
        } else {
            ElMessage.error(res.message)
        }
    })
}

const groupRemoveUser = (teacherId) => {
    GroupRemoveUser(groupId.value, teacherId).then(res => {
        if (res.state == 200) {
            groupVo.value = res.data
        } else {
            ElMessage.error(res.message)
        }
    })
}

const AuthSelectable = (row) => !groupVo.value.authorities.map(item => item.id).includes(row.id)
const AuthSelection = ref([])
const authSelectionChange = (val) => {
    AuthSelection.value = val
}

const TeacherSelectable = (row) => !groupVo.value.teacherList.map(item => item.teacherId).includes(row.teacherId)
const teacherSelected = ref([])
const teacherSelectionChange = (val) => {
    teacherSelected.value = val
}

const addAuth = () => {
    console.log(AuthSelection.value)
    console.log(AuthSelection.value.map(item => item.id))
    if (AuthSelection.value == null) {
        ElMessage.warning("未选择添加的对象")
        return
    }
    if (AuthSelection.value.length < 1) {
        ElMessage.warning("未选择添加的对象")
        thisStore.addAuthDialogChange()
        return
    }
    GroupAddAuth(groupId.value, AuthSelection.value.map(item => item.id)).then(res => {
        if (res.state == 200) {
            groupVo.value = res.data
            thisStore.addAuthDialogChange()
            AuthSelection.value = []
        } else {
            ElMessage.error(res.message)
        }
    })
}

const addTeacher = () => {
    if (teacherSelected.value == null) {
        ElMessage.warning("未选择添加的对象")
        return
    }
    if (teacherSelected.value.length < 1) {
        ElMessage.warning("未选择添加的对象")
        thisStore.addUserDialogChange()
        return
    }
    GroupAddUser(groupId.value, teacherSelected.value.map(item => item.teacherId)).then(res => {
        if (res.state == 200) {
            groupVo.value = res.data
            thisStore.addUserDialogChange()
            teacherSelected.value = []
        } else {
            ElMessage.error(res.message)
        }
    })
}

const initData = () => {
    groupId.value = route.params.id
    GetUserGroupDetail(groupId.value).then(res => {
        if (res.state == 200) {
            groupVo.value = res.data
        } else {
            ElMessage.error(res.message)
        }
    })

    GetAllAuth().then(res => {
        if (res.state == 200) {
            allAuthList.value = res.data
        } else {
            ElMessage.error(res.message)
        }
    })

    GetTeacherList().then(res => {
        if (res.state == 200) {
            allTeacherList.value = res.data
        } else {
            ElMessage.error(res.message)
        }
    })
}

onBeforeMount(() => {
    setTimeout(() => {
        initData();
    }, 50)
})


</script>
<style scoped></style>