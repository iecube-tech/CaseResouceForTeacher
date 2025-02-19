<template>
    <el-container class="emd-main" style="height: 100vh;">
        <el-aside>
            <!-- 左侧菜单栏 -->
            <div class="emd-aside-top">

            </div>
            <el-tree class="emd-aside-tree" :data="CouseCatalogue" :props="treeProps" lazy accordion :load="loadNode"
                @node-click="handleNodeClick" draggable :allow-drag="allowDarg" :allow-drop="allowDrop"
                @node-drop="handleNodeDrop">
            </el-tree>
        </el-aside>

        <el-container style="padding: 5px, 5px;">
            <div class="emd-right-main">
                <RouterView :key="routeKey" />
            </div>
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
import { UpLabSort } from '@/apis/e-md/labProc/upLabSort';
import { UpSectionSort } from '@/apis/e-md/section/upSectionSort';
import { UpBlockSort } from '@/apis/e-md/block/upBlockSort';
import { UpComposeSort } from '@/apis/e-md/compose/upComposeSort';
import { ElMessage } from 'element-plus';
import type Node from 'element-plus/es/components/tree/src/model/node';
import { generateShortUUID } from '@/utils/GenrateUUID.js';
import { RouterView } from 'vue-router';
import { useRouter } from 'vue-router';
const router = useRouter();
const routeKey = ref("main")

const CouseCatalogue = ref([]);
const getCouseCatalogue = () => {
    // 获取课程目录
    GetAllCourse().then(res => {
        if (res.state == 200) {
            // CouseCatalogue.value = res.data;
            for (let i = 0; i < 10; i++) {
                CouseCatalogue.value.push(res.data[0]);
            }
        } else {
            ElMessage.error(res.message);
        }
    })
}

const treeProps = {
    label: (data, node) => {
        if (node.level > 2) {
            return data.name + '-' + generateShortUUID(data.id);
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
    if (node.level > 3) {
        return
    }
    routeKey.value = generateShortUUID(node.level) + generateShortUUID(data.id)
    if (node.level === 1) {
        router.push({ name: 'elaborateMarkdownCourse', query: { id: data.id } });
    }
    if (node.level === 2) {
        router.push({ name: 'elaborateMarkdownLab', query: { id: data.id } });
    }
    if (node.level === 3) {
        router.push({ name: 'elaborateMarkdownSection', query: { id: data.id } });
    }
}

const handleNodeDrop = (draggingNode, dropNode, type, ev) => {

    // console.log(draggingNode);
    // console.log(dropNode);
    // console.log(type);
    // console.log("drop")
    if (draggingNode.level !== dropNode.level) {
        ElMessage.error('节点只能在同级中拖拽排序');
        return;
    }
    const parent = dropNode.parent;
    // console.log('parent')
    // console.log(parent)
    const siblings = parent ? parent.childNodes : CouseCatalogue.value;
    const draggingIndex = siblings.findIndex(node => node.data.id === draggingNode.data.id); // 获取被拖拽节点的索引
    const dropIndex = siblings.findIndex(node => node.data.id === dropNode.data.id); // 获取目标节点的索引

    // console.log('siblings')
    // console.log(siblings)
    // 移除被拖拽节点
    const [draggedItem] = siblings.splice(draggingIndex, 1);
    // console.log('siblings 移除被拖拽节点')
    // console.log(siblings)

    // 计算目标位置
    let newDropIndex = dropIndex;
    if (type === 'after') {
        newDropIndex += 1;
    } else if (type === 'before') {
        if (draggingIndex < dropIndex) {
            newDropIndex -= 1;
        }
    }

    // 插入到新位置
    siblings.splice(newDropIndex, 0, draggedItem);

    // 更新所有子节点的 sort 字段
    siblings.forEach((node, index) => {
        node.data.sort = index + 1; // 按顺序递增排序值
    });

    // 向后端同步排序
    // console.log('新的排序:', siblings.map(node => node.data));
    if (draggingNode.level === 2) {
        // 更新实验排序
        UpLabSort(siblings.map(node => node.data)).then(res => {
            if (res.state !== 200) {
                ElMessage.error(res.message);
            }
        })
    }
    if (draggingNode.level === 3) {
        // 更新分节排序
        UpSectionSort(siblings.map(node => node.data)).then(res => {
            if (res.state !== 200) {
                ElMessage.error(res.message);
            }
        })
    }
    if (draggingNode.level === 4) {
        // 更新块排序
        UpBlockSort(siblings.map(node => node.data)).then(res => {
            if (res.state !== 200) {
                ElMessage.error(res.message);
            }
        })
    }
    if (draggingNode.level === 5) {
        // 更新组件排序
        UpComposeSort(siblings.map(node => node.data)).then(res => {
            if (res.state !== 200) {
                ElMessage.error(res.message);
            }
        })
    }

}

const allowDarg = (node) => {
    return node.level > 1;
}

const allowDrop = (draggingNode, dropNode, type) => {
    // console.log(draggingNode);
    // console.log(dropNode);
    // console.log(type);
    // 禁止拖拽到节点内部（作为子节点）
    if (type === 'inner') return false;
    // 确保拖拽节点和目标节点的父节点相同
    return draggingNode.parent === dropNode.parent;
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
    height: 100%;
    width: 300px;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
    /* 添加右侧阴影 */
}

.el-main {
    flex: 1;
    padding: 20px;
}

.emd-main {

    background-color: #FAFCFF;
}

.emd-aside-top {
    height: 120px;
}

.emd-aside-tree {
    min-height: calc(100% - 120px);
}

.emd-aside-top,
.emd-aside-tree {
    background-color: #FAFAFA;
}

.emd-right-main {
    padding: 10px 10px;
    width: 100%;
    height: 100%;
}
</style>