<template>
    <div class="article" v-if="chapter">
        <div class="article_detail" id="article_detail">
            <div class="chapter_title">
                <h1 v-if="chapter">{{ chapter.name }}</h1>
                <el-button type="primary" link @click="toView(chapterId)">返回</el-button>
            </div>
            <div class="article_content">
                <MdPreview :editorId="id" :modelValue="content" />
            </div>
        </div>
        <div class="article_catalogue" id="sidebar">
            <div v-for="(item, index) in directoryArray" :key="index" @click="scrollToHeading(item.text)">
                <div class="level" :class="'level-' + item.level">
                    <a :href="'#' + item.text">{{ item.text }}</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { onBeforeMount, onMounted, onUnmounted, ref } from 'vue';
import { GetArticle } from '@/apis/doc_md/getArticle.js';
import { GetChapter } from '@/apis/doc_md/getChapter.js';
import { MdPreview } from 'md-editor-v3';
// preview.css相比style.css少了编辑器那部分样式
import 'md-editor-v3/lib/preview.css';
import router from '@/router';
import { replace } from '@/components/markdownInteraction/script/relpace'

const route = useRoute()
const chapterId = ref(0)

const id = 'preview-only'

const chapter = ref()

const article = ref()
const content = ref('')
const element = ref([])
const toEdit = (id) => {
    router.push({
        name: 'markdownEdit',
        params: { chapterId: id }
    })
}
const toView = (id) => {
    router.push({
        name: 'markdownDetail',
        params: { chapterId: id }
    })
}

const directoryArray = ref()

const getArticle = (id) => {
    GetArticle(id).then(res => {
        if (res.state == 200) {
            article.value = res.data
            content.value = article.value.content
            directoryArray.value = JSON.parse(article.value.catalogue)
            console.log(article.value)
        }
        setTimeout(() => {
            console.log(article.value.id,)
            replace(article.value.id, true, true)
        }, 100)
    })
}

const getChapter = (id) => {
    GetChapter(id).then(res => {
        if (res.state == 200) {
            chapter.value = res.data
        }
    })
}

const sidebarScrollFunction = () => {
    var sidebar = document.getElementById("sidebar");
    if (window.scrollY > 100) { // 100 是一个触发悬浮的阈值，可以根据实际情况调整
        sidebar.style.position = "fixed";
        sidebar.style.top = "0";
    } else {
        sidebar.style.position = "static";
    }
}

const scrollToHeading = (headingText) => {
    // 根据传入的标题文本，找到对应的目录项在主页面中的位置
    const element = document.getElementById(headingText);
    // 使用JavaScript的scrollIntoView方法将主页面滚动到对应位置
    element.scrollIntoView({ behavior: 'smooth' });
}

const autoScrollToAnchor = () => {
    const target = <any>route.meta.scrollTo;
    if (target) {
        scrollToHeading(decodeURIComponent(target).slice(1))
    }
}

onBeforeMount(() => {
    chapterId.value = null
    chapter.value = null
    article.value = null
    setTimeout(() => {
        chapterId.value = <any>route.params.chapterId
        getChapter(chapterId.value)
        getArticle(chapterId.value)
    }, 50)
})



onMounted(() => {
    setTimeout(() => {
        autoScrollToAnchor();
    }, 500)
    window.onscroll = function () {
        sidebarScrollFunction()
    }
})

onUnmounted(() => {
    chapterId.value = null
    chapter.value = null
    article.value = null
})

</script>
<style scoped>
.article {
    display: flex;
}

.article_detail {
    flex: 1;
    /* overflow-y: auto; */
    /* 垂直滚动条 */
    margin-right: 240px;
}

.article_catalogue {
    width: 240px;
    padding: 20px;
    padding-top: 8vh;
    position: fixed;
    /* 让目录栏固定在页面 */
    top: 30px;
    /* 距离页面顶部的距离 */
    right: 30px;
    /* 距离页面右侧的距离 */
    height: 100%;
    /* 目录栏高度 */
    overflow-y: auto;
    /* 如果内容超出目录栏高度，启用垂直滚动条 */
}

.chapter_title {
    height: 6vh;
    padding: 0 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}

.chapter_title h1 {
    font-size: 3rem;
    font-weight: 700;
}

.directory {
    padding: 10px;
    border: 1px solid #ccc;
    background-color: #f5f5f5;
}

.directory-item {
    cursor: pointer;
    margin-bottom: 5px;
    padding: 3px 10px;
    border-radius: 4px;
}

.level a {
    color: #33b8b9;
}

.level a:hover {
    background-color: none;
}


.level-1 {
    /* 一级标题的样式 */
    font-size: 18px;
    font-weight: bold;
}

.level-2 {
    /* 二级标题的样式 */
    margin-left: 15px;
    font-size: 16px;
    font-weight: bold;
}

.level-3 {
    /* 三级标题的样式 */
    margin-left: 30px;
    font-size: 14px;
    font-weight: bold;
}

.level-4 {
    /* 三级标题的样式 */
    margin-left: 45px;
    font-size: 12px;
    font-weight: bold;
}

.level-5 {
    /* 三级标题的样式 */
    margin-left: 60px;
    font-size: 10px;
    font-weight: bold;
}

.level-6 {
    /* 三级标题的样式 */
    margin-left: 75px;
    font-size: 8px;
    font-weight: bold;
}
</style>

<style>
/* .student_report {
    border: 2px solid var(--el-color-warning);
    padding-bottom: 2em
} */
</style>