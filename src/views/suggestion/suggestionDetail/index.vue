<template>
    <pageHeader :route=route />
    <div class="view-card">
        <el-card>
            <template #header>
                <div class="card-header">
                    <div>
                        <el-button type="primary" link :icon="Back" @click="goback()">返回</el-button>
                        <el-divider direction="vertical" />
                        <span>{{ routeTitle }}改进建议</span>
                    </div>
                    <div>
                        <el-button v-if="routeName == 'suggestionDetailS'" type="primary" link
                            @click="toP()">项目改进建议</el-button>
                        <el-button v-if="routeName == 'suggestionDetailP'" type="primary" link
                            @click="toS()">学生改进建议</el-button>
                    </div>
                </div>
            </template>
            <div>
                <RouterView :key="$route.path" />
            </div>
        </el-card>
    </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import router from '@/router';
import pageHeader from '@/components/pageheader.vue'
import { Back } from '@element-plus/icons-vue';
import { onBeforeMount, ref, onMounted, reactive } from 'vue';
const route = useRoute()
const routeName = route.name
const routeTitle = route.meta.title
const id = route.params.projectId

const goback = () => {
    router.push({
        name: <string>route.meta.parentName
    })
}
const toP = () => {
    router.push({
        name: 'suggestionDetailP',
        params: { projectId: id }
    })
}
const toS = () => {
    router.push({
        name: 'suggestionDetailS',
        params: { projectId: id }
    })
}

const getStyle = () => {
    // if (windowWidth.value > 1900) {
    //     return 'padding: 20px calc(164px + 4.8vw);'
    // }
    return 'padding: 20px 4vw;'
}
const down = ref({
    top: 20,
    background: "",
})
const headrClass = ref('')
const handleScroll = () => {
    let scrollTop = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollTop) {
        headrClass.value = "down"
    } else {
        headrClass.value = ""
    }
}
// 屏幕宽度
const windowWidth = ref(0)
// 屏幕高度
const windowHeight = ref(0)
// 生命周期
onMounted(() => {
    getWindowResize()
    window.addEventListener('resize', getWindowResize)
})
// 获取屏幕尺寸
const getWindowResize = function () {
    windowWidth.value = window.innerWidth
    windowHeight.value = window.innerHeight
}

window.addEventListener("scroll", handleScroll)

</script>
<style scoped>
@import "@/styles/cardPadding/cardPadding.css";

.card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>