<template>
    <el-container>
        <el-header class="header">
            <el-col :span="4">
            </el-col>
            <el-col :span="16">
                <el-menu class="el-menu-demo" mode="horizontal" :ellipsis=false @select="" router>
                    <el-menu-item index="/">首页</el-menu-item>
                    <el-menu-item index="/resource">项目案例</el-menu-item>
                    <el-menu-item index="/myresource">我的项目</el-menu-item>
                    <el-menu-item index="/myproject">我的发布</el-menu-item>
                    <el-menu-item index="/analysis">项目数据</el-menu-item>
                    <el-menu-item index="/suggestion">总结建议</el-menu-item>
                </el-menu>
            </el-col>
            <el-col :span="4" style="padding-top: 10px;">
                <el-dropdown trigger="click">
                    <el-icon size="40px">
                        <UserFilled />
                    </el-icon>
                    <template #dropdown>
                        <el-dropdown-menu>
                            <router-link to="/account"><el-dropdown-item>账户信息</el-dropdown-item></router-link>
                            <router-link to="/student"><el-dropdown-item>学生管理</el-dropdown-item></router-link>
                            <router-link to="/device"><el-dropdown-item>设备管理</el-dropdown-item></router-link>
                            <el-dropdown-item divided @click.native="logout">退出登录</el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
            </el-col>
        </el-header>
        <el-main style="padding: 0;">
            <div class="maincontainer">
                <!-- 二级路由 -->
                <RouterView />
            </div>
            <el-footer>
                这是底部
            </el-footer>
        </el-main>
    </el-container>
</template>

<script setup lang="ts">
import router from '@/router';
import { Logout } from '@/apis/logout'
const logout = async () => {
    await Logout().then(res => {
        if (res.state == 200) {
            console.log("退出成功")
        } else {
            console.log("退出失败");
        }
        router.push('/login')
    })
}

</script>

<style scoped>
.maincontainer {
    min-height: 1200px;
}

.el-container,
.el-main {
    height: 100%;
}

.header {
    height: 60px;
    border-bottom: 1px solid var(--el-border-color);
}

.el-col,
.el-header {
    display: flex;
    justify-content: center;
}

.el-menu {
    border-bottom: 0px;
}

.el-footer {
    display: flex;
    justify-content: center;
    height: 300px;
    background-color: #333333;
}
</style>