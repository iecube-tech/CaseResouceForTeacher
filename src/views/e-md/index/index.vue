<template>
    <el-container style="height: 100vh;">
        <el-aside width="300px">
            <!-- 左侧菜单栏 -->
            <el-tree :data="CouseCatalogue" :props=treeProps lazy :load="loadNode" @node-click="handleNodeClick">
            </el-tree>
        </el-aside>

        <el-container>
            <el-main>
                <!-- 中间内容展示区 -->
                <div>内容展示区</div>
            </el-main>

            <el-aside width="400px">
                <!-- 右侧功能区 -->
                <div>功能区</div>
            </el-aside>
        </el-container>
    </el-container>
</template>

<script setup lang="ts">
import { ref, onBeforeMount } from 'vue';
import { GetAllCourse } from '@/apis/e-md/course/getAllCourse';
import { GetLabProcByCourse } from '@/apis/e-md/labProc/getLabProcByCourse';
import { GetSectionByLabProc } from '@/apis/e-md/section/getSectionByLab';
import { GetBlockBySection } from '@/apis/e-md/block/getBlockBySection';
import { GetComposeByBlock } from '@/apis/e-md/compose/getComposeByBlock';
import { ElMessage } from 'element-plus';
import type Node from 'element-plus/es/components/tree/src/model/node';
import { generateUUID } from '@/utils/GenrateUUID.js';

const CouseCatalogue = ref([]);
const getCouseCatalogue = () => {
    // 获取课程目录
    GetAllCourse().then(res => {
        if (res.state == 200) {
            CouseCatalogue.value = res.data;
        } else {
            ElMessage.error(res.message);
        }
    })
}

const treeProps = {
    label: (data, node) => {
        if (node.level > 2) {
            return data.name + '-' + generateUUID(data.id);
        }
        return data.name;
    },
    isLeaf: (data) => { return !data.hasChildren }
}

const loadNode = (node: Node, resolve: (data) => void) => {
    console.log(node);
    if (node.level === 1) {
        // 获取课程下的实验
        GetLabProcByCourse(node.data.id).then(res => {
            if (res.state == 200) {
                resolve(res.data);
            } else {
                ElMessage.error(res.message);
            }
        })
    }
    if (node.level === 2) {
        // 获实验下的分节
        GetSectionByLabProc(node.data.id).then(res => {
            if (res.state == 200) {
                resolve(res.data);
            } else {
                ElMessage.error(res.message);
            }
        })
    }
    if (node.level === 3) {
        // 获取分节下的块
        GetBlockBySection(node.data.id).then(res => {
            if (res.state == 200) {
                resolve(res.data);
            } else {
                ElMessage.error(res.message);
            }
        })
    }
    if (node.level === 4) {
        // 获取块下的组成
        GetComposeByBlock(node.data.id).then(res => {
            if (res.state == 200) {
                resolve(res.data);
            } else {
                ElMessage.error(res.message);
            }
        })
    }

    resolve([]);
}


const handleNodeClick = (data, node) => {
    console.log(node);
}

onBeforeMount(() => {
    getCouseCatalogue();
});
</script>

<style scoped>
/* 添加一些样式以确保布局正确 */
.el-container {
    display: flex;
    flex-direction: row;
}

.el-aside {
    background-color: #f2f2f2;
}

.el-main {
    flex: 1;
    padding: 20px;
}
</style>