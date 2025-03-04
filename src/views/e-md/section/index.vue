<template>
    <div class="section">
        <div class="section-edit-parent">
            <div v-if="isReady" class="section-edit">
                <div class="section-block-list">
                    <div v-for="item in blockLisk" :key="item.blockId" class="section-block-item">
                        <div v-if="item.type === BlockType.TEXT">
                            <contentEdit :blockId="item.blockId" />
                        </div>
                        <div v-else-if="item.type === BlockType.TABLE">
                            <tableEdit :blockId="item.blockId" />
                        </div>
                        <div v-else-if="item.type === BlockType.TRACELINE">
                            <traceline :blockId="item.blockId" />
                        </div>
                        <div v-else-if="item.type === BlockType.CHOICE">
                            <choice :blockId="item.blockId" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="section-block-add-list">
                <button @click="createBlock(BlockType.TEXT)">内容</button>
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
import contentEdit from '@/views/e-md/block/contentEdit.vue';
import tableEdit from '../block/tableEdit.vue';
import traceline from '../block/traceLineEdit.vue';
import choice from '../block/choice.vue';
import { onMounted, ref } from 'vue';
import { BlockVo, BlockQo, BlockType } from '../block/block';
import { RouterView } from 'vue-router';
import router from '@/router';
import { CreateBlock } from '@/apis/e-md/block/createBlock.js';
import { getBlockVoList } from '@/apis/e-md/block/getBlockVoList.js';
import { useRoute } from 'vue-router';

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
        }
    })
}

const blcokDetail = (id) => {
    router.push({ name: 'elaborateMarkdownSectionBlock', query: { blockId: id } });
}

const genBlockList = () => {
    getBlockVoList(sectionId.value).then(res => {
        if (res.state == 200) {
            blockLisk.value = res.data;
            isReady.value = true
        }
    })
}

onMounted(() => {
    setTimeout(() => {
        sectionId.value = route.query.id;
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
}

.section-block-item {}

.section-block-add-list {
    position: absolute;
    bottom: 0;
    left: 0;
    width: calc(100% - 30px);
    background-color: #F0F2F5;
    padding: 10px;
    box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
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