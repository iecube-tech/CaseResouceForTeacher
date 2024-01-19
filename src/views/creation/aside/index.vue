<template>
    <el-menu :default-active="route.path" class="el-menu" router>
        <el-menu-item index="/creation">
            <el-icon>
                <House />
            </el-icon>
            <span>首页</span>
        </el-menu-item>
        <el-sub-menu index="/creation/case" router>
            <template #title>
                <el-icon>
                    <Notebook />
                </el-icon>
                <span>内容管理</span>
            </template>
            <el-menu-item-group>
                <el-menu-item index="/creation/case">项目案例</el-menu-item>
                <el-menu-item index="/creation/course">课程资源</el-menu-item>
            </el-menu-item-group>
        </el-sub-menu>
    </el-menu>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
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
