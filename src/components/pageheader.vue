<template>
    <el-page-header title="返回" @back="onBack">
        <template #breadcrumb>
            <el-breadcrumb separator="/">
                <el-breadcrumb-item v-for="item in route.matched" :key="item.path" :to="{ path: item.path }">
                    {{ item.meta.title }}
                </el-breadcrumb-item>
            </el-breadcrumb>
        </template>
        <template #content>
            <span class="text-large font-600 mr-3"> {{ title }} </span>
        </template>
    </el-page-header>
</template>

<script setup lang="ts">
import router from '@/router';
import { it } from 'element-plus/es/locale';
import { ref } from 'vue';

const props = defineProps({
    title: String,
    route: ref(null),
})
const onBack = () => {
    router.go(-1)
}
console.log('header', props.route)
</script>
<style scoped>
.el-page-header {
    margin-top: 10px;
}
</style>