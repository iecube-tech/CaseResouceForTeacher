<template>
    <div class="creation_main">
        <div class="creation_two">
            <el-card>
                <template #header style="padding:0 0">
                    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                        <el-menu-item index="1">案例列表</el-menu-item>
                        <el-menu-item index="2">发布案例</el-menu-item>
                    </el-menu>
                </template>
                <div>
                    <RouterView :key="route.fullpath"></RouterView>
                </div>
            </el-card>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onBeforeMount } from 'vue';
import { useRoute } from 'vue-router';
import router from '@/router';
const route = useRoute()
const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
    if (key == '1') {
        router.push({
            name: 'creationCaseList'
        })
        activeIndex.value = '1'
    }
    if (key == '2') {
        router.push({
            name: 'creationCaseEdit'
        })
        activeIndex.value = '2'
    }
}
// onBeforeMount(() => {
//     whichIndex()
// })
</script>
<style scoped>
.creation_main {
    min-width: 1124px;
}

.creation_two {
    height: 100%;
    margin-top: 16px !important;
    display: flow-root;
    padding-bottom: 20px
}

.el-card :deep() .el-card__header {
    padding: 0 0;
    border-bottom: 0px;
}

@media screen and (max-width:1624.9px) {
    .creation_two {
        width: inherit;
        margin-left: 72px;
        margin-right: 72px;
    }
}

@media screen and (min-width: 1625px) {
    .creation_two {
        width: 1283px;
        margin: 0 auto;
    }
}
</style>