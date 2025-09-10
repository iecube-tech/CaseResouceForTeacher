<template>
    <div v-if="treeData != null" class="book-lab-catalog-tree">
        <!-- 递归渲染节点 -->
        <div v-for="node in treeData" :key="node.id" class="catalog-node">
            <div class="node-header" :class="'node-header-' + node.level">
                <font-awesome-icon :icon="node.icon" class="mr-1"></font-awesome-icon>
                <div class="node-name">
                    {{ node.name }}
                </div>
            </div>

            <!-- 叶子节点显示components内容 -->
            <div v-if="!node.hasChildren && node.componentList != null && node.componentList.length > 0"
                class="components-content">
                <div v-if="node.type == 'videoGroup'">
                    <video-group :children="node.componentList"></video-group>
                </div>

                <div v-else-if="node.type == 'selectGroup'">
                    <select-group :children="node.componentList"></select-group>
                </div>

                <div v-else>
                    <commonGroup :children="node.componentList"></commonGroup>
                </div>
            </div>

            <!-- 递归渲染子节点 -->
            <div v-if="node.hasChildren" class="card p-[32px]">
                <BookLabRecursion :tree-data="node.children" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import videoGroup from './block/videoGroup.vue'
import selectGroup from './block/selectGroup.vue'
import commonGroup from './block/commonGroup.vue'
const props = defineProps({
    treeData: {
        type: Array,
        required: true,
        default: () => []
    }
})

const treeData = ref()

watch(props.treeData, (newVal) => {
    console.log("变化")
    treeData.value = newVal
    // 可以在这里执行额外逻辑
})

onMounted(() => {
    treeData.value = props.treeData
})

</script>

<script lang="ts">
// 必须指定组件名称，才能实现递归调用
export default {
    name: 'BookLabRecursion'
};
</script>
<style scoped>
.node-header {
    display: flex;
    flex-direction: row;
    align-items: center;
}
</style>