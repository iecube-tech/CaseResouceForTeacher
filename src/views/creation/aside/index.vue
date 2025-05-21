<template>
    <el-menu :default-active="route.path" class="el-menu" router unique-opened>
        <el-menu-item index="/" router>
            <template #title>
                <img src="@/assets/images/产业资源管理平台.svg" alt="">
            </template>
        </el-menu-item>
        <el-sub-menu index="/creation/case" router>
            <template #title>
                <el-icon>
                    <Tickets />
                </el-icon>
                <span>项目案例</span>
            </template>
            <el-menu-item-group>
                <el-menu-item index="/creation/case">案例列表</el-menu-item>
                <el-menu-item index="/creation/case/edit">发布案例</el-menu-item>
            </el-menu-item-group>
        </el-sub-menu>
        <el-sub-menu index="/creation/course" router>
            <template #title>
                <el-icon>
                    <Collection />
                </el-icon>
                <span>课程资源</span>
            </template>
            <el-menu-item-group>
                <el-menu-item index="/creation/course">课程列表</el-menu-item>
                <el-menu-item index="/creation/course/edit">发布课程</el-menu-item>
            </el-menu-item-group>
        </el-sub-menu>
        <el-sub-menu index="/creation/mdcourse" router>
            <template #title>
                <el-icon>
                    <Collection />
                </el-icon>
                <span>MD课程</span>
            </template>
            <el-menu-item-group>
                <el-menu-item index="/creation/mdc">课程列表</el-menu-item>
                <el-menu-item index="/creation/mdc/edit">发布课程</el-menu-item>
            </el-menu-item-group>
        </el-sub-menu>
        <el-sub-menu index="/creation/emdcourse" router>
            <template #title>
                <el-icon>
                    <Collection />
                </el-icon>
                <span>EMD课程</span>
            </template>
            <el-menu-item-group>
                <el-menu-item index="/creation/emdc">课程列表</el-menu-item>
                <el-menu-item index="/creation/emdc/edit">发布课程</el-menu-item>
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
