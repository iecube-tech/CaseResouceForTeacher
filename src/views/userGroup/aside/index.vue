<template>
    <el-menu :default-active="route.path" class="el-menu" router unique-opened>
        <el-menu-item index="/" router>
            <template #title>
                <img src="@/assets/images/产业资源管理平台.svg" alt="">
            </template>
        </el-menu-item>

        <el-menu-item index="/user_group" router>
            <el-icon>
                <UserFilled />
            </el-icon>
            <span>用户组</span>
        </el-menu-item>
    </el-menu>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { UserFilled } from '@element-plus/icons-vue'
const route = useRoute();
console.log(route)
console.log('/' + route.fullPath.split('/')[1])

const handleOpen = () => {

}
</script>
<style scoped>
.el-menu {
    padding-top: 20px;
    height: 100%
}
</style>
