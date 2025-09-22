<template>
    <div v-if="treeData != null" class="book-lab-catalog-tree">
        <!-- 递归渲染节点 -->
        <div v-for="node in treeData" :key="node.id" class="catalog-node">
            <!-- 叶子节点显示components内容 -->
            <div v-if="!node.hasChildren && node.components != null && node.components.length > 0"
                class="components-content">
                <div v-if="node.type == 'commonGroup'">
                    <commonGroup :block="node"></commonGroup>
                </div>

                <div v-if="node.type == 'selectGroup'">
                    <select-group :block="node"></select-group>
                </div>
            </div>

            <!-- 递归渲染子节点 -->
            <div v-if="node.hasChildren">
                <BookLabRecursion :tree-data="node.children" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import selectGroup from './group/selectGroup.vue';
import commonGroup from './group/commonGroup.vue';
const props = defineProps({
    treeData: {
        type: Array,
        required: true,
        default: () => []
    }
})

const treeData = ref()

watch(props.treeData, (newVal) => {
    // console.log("变化")
    treeData.value = newVal
    // 可以在这里执行额外逻辑
})

onMounted(() => {
    treeData.value = props.treeData
    // console.log(treeData.value)
})

</script>

<script lang="ts">
// 必须指定组件名称，才能实现递归调用
export default {
    name: 'BookLabRecursion'
};
</script>
<style scoped></style>