<template>
    <div :id="'preview' + generateShortUUID(compose.id)" class="vditor-reset" style="width: 100%; height: auto;"></div>
</template>

<script setup lang="ts">
// 1.1 引入Vditor 构造函数
import Vditor from 'vditor'
// 1.2 引入样式
import 'vditor/dist/index.css';
import { ref, onMounted } from 'vue';
import { generateShortUUID } from '@/utils/GenrateUUID.js';
import type { Compose } from './compose';
const props = defineProps({
    composeId: Number,
    composeContent: String,
    composeCatalogue: String
})

const compose = ref<Compose>({
    id: props.composeId,
    type: 'content',
    title: '',
    content: props.composeContent,
    catalogue: props.composeCatalogue
})

const initVditor = () => {
    Vditor.preview(document.getElementById('preview' + generateShortUUID(compose.value.id)) as HTMLDivElement, compose.value.content,
        {
            mode: "light", // dark or light
            // anchor: 0,  // 为标题添加锚点 0：不渲染；1：渲染于标题前；2：渲染于标题后，默认 0
            // lang: 'zh_CN',    // 语言，默认为 'zh_CN'
            // speech: {  // 对选中后的内容进行阅读
            //     enable: false,
            // },
            // cdn: '', // 自建 CDN 地址
            // transform: (html: string) => { return '' }, // 在渲染前进行的回调方法
            // after: () => { }, // 渲染完成后的回调
            theme: { current: 'ant-design' }, // 主题
            // render: { media: { enable: false } }
        }
    )
}

onMounted(() => {
    setTimeout(() => {
        initVditor()
    }, 10)
})
</script>
<style scoped></style>