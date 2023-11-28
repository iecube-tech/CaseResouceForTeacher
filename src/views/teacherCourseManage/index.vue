<template>
    <pageHeader :route=route />
    <div :style="getStyle()">
        <el-card>
            <template #header>
                <div class="card-header">
                    <div>
                        <el-button type="primary" link :icon="Back" @click="goback()">返回</el-button>
                        <el-divider direction="vertical" />
                        <span>{{ routeTitle }}</span>
                    </div>
                    <div>
                        <el-button v-if="routeName == 'CreateCourseList'" type="primary" link
                            @click="AddCourse()">新建</el-button>
                    </div>
                </div>
            </template>

            <div>
                <RouterView :key="$route.path" />
            </div>
        </el-card>
    </div>

    <el-dialog v-model="dialogAddCourse" title="创建课程">
        <addCourse @createSuccess="createSuccess" />
    </el-dialog>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import router from '@/router';
import pageHeader from '@/components/pageheader.vue'
import { Back } from '@element-plus/icons-vue';
import { ref, onMounted } from 'vue';
import addCourse from './teacherEditCourse/child/addCourse.vue'
const route = useRoute()
const routeName = route.name
const routeTitle = route.meta.title

const dialogAddCourse = ref(false)

const AddCourse = () => {
    dialogAddCourse.value = true
}

const goback = () => {
    router.push({
        name: <string>route.meta.parentName
    })
}
const createSuccess = () => {
    dialogAddCourse.value = false
    router.go(0)
}

const getStyle = () => {
    if (windowWidth.value > 1900) {
        return 'padding: 20px calc(164px + 4.8vw);'
    }
    return 'padding: 20px;'
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
.card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>