<template>
    <div class="section">
        <div class="section-edit-parent">
            <div v-if="isReady" class="section-edit">
                <div class="section-block-list">
                    <div v-for="item in blockLisk" :key="item.blockId" class="section-block-item">
                        <div v-if="item.type === BlockType.TEXT">
                            <contentEdit :block-id="item.blockId" />
                        </div>
                        <div v-else-if="item.type === BlockType.QA">
                            <qaEdit :block-id="item.blockId" />
                        </div>
                        <div v-else-if="item.type === BlockType.TABLE">
                            <TableEdit :block-id="item.blockId" />
                        </div>
                        <div v-else-if="item.type === BlockType.TRACELINE">
                            <traceLineEdit :block-id="item.blockId" />
                        </div>
                        <div v-else-if="item.type === BlockType.CHOICE">
                            <choiceEdit :block-id="item.blockId" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="section-block-add-list">
                <button @click="createBlock(BlockType.TEXT)">内容</button>
                <button @click="createBlock(BlockType.QA)">问答 </button>
                <button @click="createBlock(BlockType.CHOICE)">选择题</button>
                <button @click="createBlock(BlockType.TABLE)">表格</button>
                <button @click="createBlock(BlockType.TRACELINE)">表格绘图</button>
            </div>
        </div>
        <div class="section-block-priview">
            <RouterView />
        </div>
    </div>
</template>

<script setup lang="ts">
import contentEdit from './block/contentEdit.vue';
import qaEdit from './block/qaEdit.vue';
import choiceEdit from './block/choiceEdit.vue';
import TableEdit from './block/tableEdit.vue';
import traceLineEdit from './block/traceLineEdit.vue';
import { onMounted, ref, watch } from 'vue';
import { BlockVo, BlockQo, BlockType } from '../../block';
import { RouterView } from 'vue-router';
import router from '@/router';
import { CreateBlock } from '@/apis/e-md/block/createBlock.js';
import { getBlockVoList } from '@/apis/e-md/block/getBlockVoList.js';
import { GetBlockBySection } from '@/apis/e-md/block/getBlockBySection';
import { GetSectionByLabProc } from '@/apis/e-md/section/getSectionByLab';
import { useRoute } from 'vue-router';
import { emdV2Store } from '@/stores/emdV2Store';
import { ElMessage } from 'element-plus';
const emdStore = emdV2Store();

const route = useRoute();
const sectionId = ref();
const blockLisk = ref<BlockVo[]>()

const isReady = ref(false)

const createBlock = (type) => {
    let newBlock = ref<BlockQo>({
        sectionId: sectionId.value,
        sort: null,
        type: '',
    })
    newBlock.value.type = type;
    if (blockLisk.value.length == 0) {
        newBlock.value.sort = 1;
    } else {
        newBlock.value.sort = blockLisk.value[blockLisk.value.length - 1].sort + 1;
    }
    CreateBlock(newBlock.value).then(res => {
        if (res.state == 200) {
            blockLisk.value.push(res.data);
            freshTree();
        } else {
            ElMessage.error(res.message);
        }
    })
}

const freshTree = () => {
    console.log(emdStore.getRouterSectionNode)
    if (!emdStore.getRouterSectionNode.data.hasChildren) {
        GetSectionByLabProc(emdStore.getRouterSectionNode.parent.data.id).then(res => {
            if (res.state == 200) {
                emdStore.getTreeRef.updateKeyChildren(emdStore.getRouterSectionNode.parent.data.treeId, res.data)
            } else {
                ElMessage.error(res.message);
            }
        })
    } else {
        GetBlockBySection(emdStore.getRouterSectionNode.data.id).then(res => {
            if (res.state == 200) {
                emdStore.getTreeRef.updateKeyChildren(emdStore.getRouterSectionNode.data.treeId, res.data);
            } else {
                ElMessage.error(res.message);
            }
        })
    }

}

watch(() => emdStore.needUpdatePage, (newVal) => {
    if (newVal) {
        genBlockList()
        emdStore.setNeedUpdatePage(false)
    }
})

const blcokDetail = (id) => {
    router.push({ name: 'elaborateMarkdownSectionBlock', query: { blockId: id } });
}

const genBlockList = () => {
    getBlockVoList(sectionId.value).then(res => {
        if (res.state == 200) {
            isReady.value = false
            blockLisk.value = res.data;
            isReady.value = true
        }
    })
}

onMounted(() => {
    setTimeout(() => {
        sectionId.value = route.query.section;
        genBlockList();
    }, 10)
})

</script>
<style scoped>
.section {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    overflow: hidden;
}

.section-edit-parent {
    /* height: 100vh; */
    flex: 1;
    position: relative;
    padding: 10px 10px;
}

.section-edit {
    height: calc(100vh - 100px);
    margin-bottom: 50px;
    overflow-y: auto;
}

.section-block-priview {
    width: 400px;
}

.section-block-list {
    display: flex;
    flex-direction: column;
    background-color: #fff;
    padding-left: 20px;
    padding-right: 40px;
}

.section-block-item {
    margin-top: 20px;
}

.section-block-add-list {
    position: absolute;
    bottom: 0;
    left: 30px;
    width: calc(100% - 90px);
    background-color: #F0F2F5;
    padding: 10px;
    box-shadow: 0 -4px 10px rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: center;
    align-items: center;
}

.section-block-add-list button {
    margin: 0 10px;
    padding: 10px 20px;
    background-color: #409EFF;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.section-block-add-list button:hover {
    background-color: #66b1ff;
}
</style>