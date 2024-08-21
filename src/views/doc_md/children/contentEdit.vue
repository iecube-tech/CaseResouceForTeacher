<template>
    <div class="chapter_title" v-if="chapter">
        <h1>
            <input class="title_input" type="text" v-model="chapter.name" placeholder="输入标题" @change="updateChapter">
        </h1>
        <el-button type="primary" link @click="toView(chapterId)">返回</el-button>
    </div>
    <div>
        <MdEditor v-model="content" :toolbarsExclude="toolbarsExclude" :showToolbarName="true" :scrollAuto="false"
            :onGetCatalog="onGetCatalog" @onUploadImg="onUploadImg" :onSave="debounce(saveArticle, 2000)"
            :onChange="change" />
    </div>
</template>

<script setup lang="ts">
import { onBeforeMount, ref } from 'vue';
import { useRoute } from 'vue-router';
import { MdEditor } from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';
import '@/styles/mdEditor/style.css'
import { GetArticle } from '@/apis/doc_md/getArticle.js';
import { GetChapter } from '@/apis/doc_md/getChapter.js';
import { UpdateArticle } from '@/apis/doc_md/updateArticle.js';
import router from '@/router';
import { ElMessage } from 'element-plus';
import axios from 'axios';
import { UpdateChapter } from '@/apis/doc_md/updateChapter.js';
import { debounce } from 'lodash';
import { replace } from '@/components/markdownInteraction/script/relpace'
const toolbarsExclude = [
    'strikeThrough',
    'task',
    'mermaid',
    'htmlPreview',
    'github',
]
const route = useRoute()
const chapterId = ref()
chapterId.value = <any>route.params.chapterId
const chapter = ref()

const article = ref()
const content = ref('')
const element = ref([])

const articleCatalogue = ref()

const onGetCatalog = (list) => {
    articleCatalogue.value = list
}

const updateChapter = () => {
    if (chapter.value.name == '' || chapter.value.name == null) {
        ElMessage.warning("请输入标题")
        return
    }
    UpdateChapter(JSON.parse(JSON.stringify(chapter.value))).then(res => {

        if (res.state == 200) {
            chapter.value == res.data
            emit('updateChapter')
        }
        else {
            ElMessage.error(res.message)
        }
    })

}

const emit = defineEmits(['updateChapter'])

const toView = (id) => {
    router.push({
        name: 'markdownDetail',
        params: { chapterId: id }
    })
}

const onUploadImg = async (files, callback) => {
    const res = await Promise.all(
        files.map((file) => {
            return new Promise((rev, rej) => {
                const form = new FormData();
                form.append('file', file);
                axios.post('/dev-api/files/e/image', form, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'access-control-allow-origin': '*',
                        'access-control-expose-headers': '*',
                        'access-control-expose-methods': '*',
                    }
                })
                    .then((res) => rev(res))
                    .catch((error) => rej(error));
            });
        })
    );
    // 方式一
    // callback(res.map((item) => 'http://172.27.148.103:5173/dev-api' + item.data.data.url));

    // 方式二
    callback(
        res.map((item: any) => ({
            url: 'http://www.iecube.online/dev-api' + item.data.data.url,
            alt: item.data.data.alt,
            title: item.data.data.title,
        }))
    );
};

const replacedList = ref([])
const replacedListResult = ref([])

const change = () => {
    setTimeout(() => {
        replacedList.value = replace(null, null, null)
        if (replacedList.value.length > 0) {
            replacedListResult.value = replacedList.value
        }
        // console.log(replacedList.value)
        // console.log(replacedListResult.value)
    }, 800)
}

const saveArticle = () => {
    console.log("replaced结果")
    console.log(replacedListResult.value)
    // 复制replacedListResult
    let composeList = replacedListResult.value
    composeList.forEach(item => {
        if (typeof (item.val) != 'string') {
            item.val = JSON.stringify(item.val)
        }
    })
    article.value.content = content.value
    article.value.composeList = composeList
    article.value.catalogue = JSON.stringify(articleCatalogue.value)
    console.log(article.value)
    UpdateArticle(JSON.parse(JSON.stringify(article.value))).then(res => {
        if (res.state == 200) {
            article.value = res.data
        } else {
            ElMessage.error("保存失败 " + res.message)
        }
    })
}

const getArticle = (id) => {
    GetArticle(id).then(res => {
        if (res.state == 200) {
            article.value = res.data
            content.value = article.value.content
        }
    })
    setTimeout(() => {
        replace(null, null, null)
    }, 100)
}

const getChapter = (id) => {
    GetChapter(id).then(res => {
        if (res.state == 200) {
            chapter.value = res.data
        }
    })
}

onBeforeMount(() => {
    chapterId.value = null
    chapter.value = null
    article.value = null
    chapterId.value = <any>route.params.chapterId
    getChapter(chapterId.value)
    getArticle(chapterId.value)
})
</script>
<style scoped>
.chapter_title {
    height: 6vh;
    padding: 0 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}

.title_input {
    border: none;
    outline: none;
    border-radius: 5px;
    font-size: 3rem;
    font-weight: 700;
    width: 40vw;
}

.chapter_title h1 {
    font-size: 2em;
    font-weight: 700;
}

.md-editor:deep() {
    height: 85vh
}
</style>