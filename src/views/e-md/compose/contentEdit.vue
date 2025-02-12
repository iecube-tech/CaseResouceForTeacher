<template>
    <div style="width: 100%; height: auto; display: flex; flex-direction: column; align-items: center;">
        <div :id="generateShortUUID(compose.id)"></div>
    </div>
</template>

<script setup lang="ts">
// 1.1 引入Vditor 构造函数
import Vditor from 'vditor'
// 1.2 引入样式
import 'vditor/dist/index.css';
import { ref, onMounted } from 'vue';
import { generateShortUUID } from '@/utils/GenrateUUID.js';
import type { Compose } from './compose';
import { ElMessage } from 'element-plus';
import { marked } from 'marked';
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

const vditor = ref<Vditor | null>()

const saveCompose = () => {
    console.log(compose.value)
}

const getOutline = (markdown: string) => {
    const tokens = <any>marked.lexer(markdown);
    console.log(tokens);
    const outline = tokens
        .filter((token: { type: string; }) => token.type === 'heading')
        .map((token: { depth: any; text: any; }) => ({
            level: token.depth,
            text: token.text
        }));
    console.log(outline);
    return outline;
}

const initVditor = () => {
    vditor.value = new Vditor(generateShortUUID(compose.value.id), {
        height: 'auto',
        width: '1000px',
        theme: 'classic',
        preview: {
            theme: {
                current: 'ant-design'
            }
        },
        cache: {
            enable: false
        },
        toolbar: ['headings', 'bold', 'italic', 'strike', 'link', '|', 'list', 'ordered-list', 'check', '|', 'quote', 'line', 'code', 'inline-code', 'insert-before', 'insert-after', '|', 'upload', 'record', 'table', '|', 'undo', 'redo',],
        toolbarConfig: {
            hide: true,
        },
        placeholder: '请在此处输入内容',
        upload: {
            accept: 'image/*',
            url: '/dev-api/files/e/image',
            linkToImgUrl: '/dev-api/files/e/image',
            fieldName: 'file',
            multiple: false,
            success(editor, msg) {
                // console.log(editor)
                // console.log(msg)
                vditor.value.insertValue('![' + JSON.parse(msg).data.title + '](/dev-api/' + JSON.parse(msg).data.url + ')')
            },
            error: (msg) => {
                ElMessage.error(JSON.parse(msg).message)
            },
            filename: (name: string) => {
                return name
            },
        },
        after: () => {
            vditor.value.setValue(compose.value.content)
        },
        blur: () => {
            compose.value.content = vditor.value.getValue()
            compose.value.catalogue = JSON.stringify(getOutline(compose.value.content))
            saveCompose()
        }
    })
}

onMounted(() => {
    setTimeout(() => {
        initVditor()
    }, 10)
})

</script>
<style scoped></style>