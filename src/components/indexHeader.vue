<template>
    <div class="headerdiv">
        <a href="/" class="logo"><img src="@/assets/images/产业资源管理平台.svg" alt=""></a>
        <div class="menu">
            <div class="navs">
                <div class="item">
                    <a href="/">首页</a>
                </div>
                <div class="item hasnav">
                    <a href="/t/mycourse">我的课程</a>
                </div>
                <div class="item hasnav">
                    <a href="/t/myproject">我的发布</a>
                </div>
            </div>
            <!-- <div class="navs">
                <div class="item hasnav">
                    <a href="/creation">创作中心</a>
                </div>
            </div> -->
        </div>
        <div style="display: flex; flex-direction: row;">
            <el-dropdown trigger="click">
                <el-icon size="40px">
                    <UserFilled />
                </el-icon>
                <template #dropdown>
                    <el-dropdown-menu>
                        <router-link to="/t/account"><el-dropdown-item>账户信息</el-dropdown-item></router-link>
                        <router-link to="/t/student"><el-dropdown-item>学生管理</el-dropdown-item></router-link>
                        <router-link to="/t/mp"><el-dropdown-item>发布管理</el-dropdown-item></router-link>
                        <router-link to="/t/device"><el-dropdown-item>设备管理</el-dropdown-item></router-link>
                        <el-dropdown-item divided @click.native="logout">退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
    </div>
</template>

<script setup lang="ts">
import router from '@/router';
import { Logout } from '@/apis/logout'
import { ref } from 'vue';
import { ElMessage } from 'element-plus';

const logout = async () => {
    await Logout().then(res => {
        if (res.state == 200) {
            ElMessage.success("退出成功")
            localStorage.removeItem("x-access-token")
            localStorage.removeItem("x-access-type")
            localStorage.removeItem("auth")
        } else {
            ElMessage.error("退出失败")
        }
        router.push('/login')
    })
}

const chooseItem1 = ref(0)
const chooseItem2 = ref(0)


const getDisplay1 = () => {
    if (chooseItem1.value == 1) {
        return "display:block"
    }
}
const getDisplay2 = () => {
    if (chooseItem2.value == 1) {
        return "display:block"
    }
}
</script>
<style scoped>
@import "@/styles/header/header.css";
</style>