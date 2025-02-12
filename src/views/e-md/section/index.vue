<template>
    <div style="width: 100%; height: 100%; display: flex; flex-direction: row;">
        <div style=" flex :1; display:flex;  flex-direction: column; ">
            <div v-for="item in composeList" :key="item.id">
                <contentEdit :composeId="item.id" :composeContent="item.content" :composeCatalogue="item.catalogue"
                    @click="blcokDetail(item.id)" />
            </div>
            <div style="height: 30px; display: flex; flex-direction: column; align-items: center;">
                <el-row style="height: 100%; width: 800px;">
                    <button>内容</button>
                    <button>单选</button>
                    <button>表格</button>
                    <button>表格绘图</button>
                </el-row>
            </div>
        </div>
        <div style="width: 400px;">
            <RouterView />
        </div>
    </div>
</template>

<script setup lang="ts">
import contentEdit from '@/views/e-md/compose/contentEdit.vue'
import { onMounted, ref } from 'vue';
import { Compose } from '../compose/compose';
import 'md-editor-v3/lib/preview.css';
import { RouterView } from 'vue-router';
import router from '@/router';
import { set } from 'video.js/dist/types/tech/middleware';

const compose = ref<Compose>({
    id: 1,
    type: 'content',
    title: '',
    content: '# 1234567890123456789012345678901234567890123456789',
    catalogue: '',
})

const composeList = ref([
    {
        id: 1,
        type: 'content',
        title: '',
        content: '# 1234567890123456789012345678901234567890123456789',
        catalogue: '',
    },
    {
        id: 2,
        type: 'content',
        title: '',
        content: '# 哦哈哦啊哈哦哈哦啊哈哦哈哦啊哈哦哈哦啊哈哦哈哦啊哈',
        catalogue: '',
    }
])

const blcokDetail = (id) => {
    router.push({ name: 'elaborateMarkdownSectionBlock', query: { blockId: id } });
}

onMounted(() => {
    setTimeout(() => {
        blcokDetail(compose.value.id)
    }, 1000)
})

</script>
<style scoped></style>