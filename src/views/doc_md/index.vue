<template>
    <div class="common-layout">
        <el-container style="height: 100vh;">
            <el-aside width="250px">
                <div class="sidebar-groups">
                    <section class="sidebar-group" v-for="(course, i) in catalogue" :key="i">
                        <div class="sidebar-group-title" @mouseenter="showButton('course' + course.courseId)"
                            @mouseleave="hideButton('course' + course.courseId)">
                            <div class="sidebar-group-title-text">
                                <p>{{ course.courseName }}</p>
                            </div>
                            <!-- <div v-if="showAddButtons[i]"> -->
                            <div class="sidebar-group-title-btn-div" :id="'course' + course.courseId">
                                <el-button class="sidebar-group-title-btn" link :icon="Plus"
                                    @click="addChapter(course.courseId)">
                                </el-button>
                                <el-popover placement="right" :width="150" trigger="click"
                                    @show="popoverShow('course' + course.courseId)"
                                    @hide="popoverHide('course' + course.courseId)">
                                    <template #reference>
                                        <el-button class="sidebar-group-title-btn" link :icon="MoreFilled"></el-button>
                                    </template>
                                    <template #default>
                                        <div class="more_filled_container">
                                            <div class="more_filled_item" @click="toDelCourse(course.courseId)">
                                                <el-button link :icon="Delete" size="large">删除</el-button>
                                            </div>
                                        </div>
                                    </template>
                                </el-popover>
                            </div>
                        </div>
                        <div class="link" v-for="(chapter, j) in course.chapterList" :key="j"
                            @mouseenter="showButton('chapter' + chapter.id)"
                            @mouseleave="hideButton('chapter' + chapter.id)">
                            <div class="link-title">
                                <el-button class="link-button" link @click="toDetail(chapter.id)">
                                    {{ chapter.name }}
                                </el-button>
                            </div>
                            <div class="sidebar-group-title-btn-div" :id="'chapter' + chapter.id">
                                <el-popover placement="right" :width="150" trigger="click"
                                    @show="popoverShow('chapter' + chapter.id)"
                                    @hide="popoverHide('chapter' + chapter.id)">
                                    <template #reference>
                                        <el-button class="sidebar-group-title-btn" link :icon="MoreFilled"></el-button>
                                    </template>
                                    <template #default>
                                        <div class="more_filled_container">
                                            <div class="more_filled_item">
                                                <el-button link :icon="Delete" size="large"
                                                    @click="toDelChapter(chapter.id)">删除</el-button>
                                            </div>
                                        </div>
                                    </template>
                                </el-popover>
                            </div>
                        </div>
                    </section>
                </div>
                <div class="floating-button" @click="dialogFormVisible = true">
                    +
                </div>
                <el-dialog v-model="dialogFormVisible" title="新建课程" width="500" align-center>
                    <el-form :model="newCourse">
                        <el-form-item label="名称：" label-width="80px">
                            <el-input v-model="newCourse.name" autocomplete="off" />
                        </el-form-item>
                    </el-form>
                    <template #footer>
                        <div class="dialog-footer">
                            <el-button link @click="dialogFormVisible = false">取消</el-button>
                            <el-button type="primary" link @click="addCourse">
                                确定
                            </el-button>
                        </div>
                    </template>
                </el-dialog>

                <el-dialog v-model="dialogDelChapterTip" title="删除页面?" width="500" align-center>
                    <div>
                        <p>您正在删除一个文档，删除后不可恢复，继续删除吗？</p>
                    </div>
                    <template #footer>
                        <div class="dialog-footer">
                            <el-button link @click="dialogDelChapterTip = false">取消</el-button>
                            <el-button type="danger" link @click="delChapter">
                                删除
                            </el-button>
                        </div>
                    </template>
                </el-dialog>

                <el-dialog v-model="dialogDelCourseTip" title="删除课程?" width="500" align-center>
                    <div>
                        <p>您正在删除一个课程，删除后不可恢复，继续删除吗？</p>
                    </div>
                    <template #footer>
                        <div class="dialog-footer">
                            <el-button link @click="dialogDelCourseTip = false">取消</el-button>
                            <el-button type="danger" link @click="delCourse">
                                删除
                            </el-button>
                        </div>
                    </template>
                </el-dialog>
            </el-aside>
            <el-main>
                <RouterView :key="key" @updateChapter="getCa" />
            </el-main>
        </el-container>
    </div>
</template>

<script setup lang="ts">
import router from '@/router';
import { Plus, MoreFilled, Delete } from '@element-plus/icons-vue';
import { onBeforeMount, ref } from 'vue';
import { getCatalogue } from '@/apis/doc_md/getCatalogue.js';
import { AddChapter } from '@/apis/doc_md/addChapter.js';
import { AddCourse } from '@/apis/doc_md/addCourse.js';
import { DelCourse } from '@/apis/doc_md/delCourse.js';
import { DelChapter } from '@/apis/doc_md/delChapter.js';
import { ElMessage } from 'element-plus';

const newCourse = ref({
    id: null,
    name: '',
})
const dialogFormVisible = ref(false)

const addCourse = () => {
    if (newCourse.value.name == '' || newCourse.value.name == null) {
        ElMessage.warning("请输入名称")
        return
    }
    dialogFormVisible.value = false
    AddCourse(newCourse.value).then(res => {
        if (res.state == 200) {
            newCourse.value.name = ''
            catalogue.value = res.data
        } else {
            ElMessage.error(res.message)
        }
    })

}

const dialogDelChapterTip = ref(false)
const dialogDelCourseTip = ref(false)

const willDelCourse = ref()
const willDelChapter = ref()

const toDelCourse = (id) => {
    willDelCourse.value = id
    dialogDelCourseTip.value = true
}

const toDelChapter = (id) => {
    willDelChapter.value = id
    dialogDelChapterTip.value = true
}

const delChapter = () => {
    DelChapter(willDelChapter.value).then(res => {
        if (res.state == 200) {
            catalogue.value = res.data
        } else {
            ElMessage.error(res.message)
        }
    })
    dialogDelChapterTip.value = false
    willDelChapter.value = null
}

const delCourse = () => {
    DelCourse(willDelCourse.value).then(res => {
        if (res.state == 200) {
            catalogue.value = res.data
        } else {
            ElMessage.error(res.message)
        }
    })
    dialogDelCourseTip.value = false
    willDelCourse.value = null
}

const catalogue = ref([])

const key = ref(0)

const isThisShow = ref([])
const popoverShow = (id) => {
    isThisShow.value.push(id)

}

const popoverHide = (id) => {
    let index = isThisShow.value.indexOf(id);
    if (index !== -1) {
        isThisShow.value.splice(index, 1);
    }
    hideButton(id)
}

const showButton = (id) => {
    document.getElementById(id).style.display = "flex"
};
const hideButton = (id) => {
    setTimeout(() => {
        if (isThisShow.value.includes(id)) {
            return
        }
        document.getElementById(id).style.display = "none"
    }, 200)
}

const addChapter = (id) => {
    const mdChapter = {
        id: null,
        name: '无标题',
        courseId: id,
    }
    // mdChapter.course = id
    console.log(mdChapter)
    AddChapter(mdChapter).then(res => {
        if (res.state == 200) {
            catalogue.value = res.data
        }
    })
}

const toDetail = (id) => {
    key.value = id
    router.push({
        name: 'markdownDetail',
        params: {
            chapterId: id,
        }
    })
}

const getCa = () => {
    getCatalogue().then(res => {
        if (res.state == 200) {
            catalogue.value = res.data
        }
    })
}

onBeforeMount(() => {
    getCa()
})

</script>
<style scoped>
.el-aside:deep() {
    display: flex;
    flex-direction: column;
}

.el-aside::-webkit-scrollbar {
    /* 隐藏滚动条 */
    display: none;
}

.sidebar-groups {
    display: flex;
    flex-direction: column;
}

.sidebar-group {
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
}

.sidebar-group-title {
    padding-left: 1.5rem;
    padding-right: 0.5rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 1.6rem;
    line-height: 2;
    border-radius: 5px
}

.sidebar-group-title:hover {
    background-color: #DCDCDC
}

.sidebar-group-title-text {
    font-weight: 600;
}

.link-title {
    overflow: hidden;
}

.link {
    margin-left: 2rem;
    padding-right: 0.5rem;
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.link:hover {
    background-color: #DCDCDC;

}

.link-button {
    font-size: 1.2rem;
    font-weight: 500;
    line-height: 1.6;
}

.sidebar-group-title-btn-div {
    display: none;
    align-items: center;
}

.sidebar-group-title-btn {
    cursor: pointer;
}

.sidebar-group-title-btn.hidden {
    display: none;
}

.sidebar-group-title-btn:hover {
    background-color: #000000;
}

.floating-button {
    position: fixed;
    bottom: 20px;
    left: 30px;
    width: 50px;
    height: 50px;
    background-color: var(--el-color-primary-light-3);
    /* 设置按钮背景色 */
    color: white;
    /* 设置文字颜色 */
    border-radius: 50%;
    /* 将按钮设置为圆形 */
    font-size: 26px;
    /* 设置按钮内文字大小 */
    text-align: center;
    /* 文字居中 */
    line-height: 45px;
    /* 设置文字垂直居中 */
    cursor: pointer;
    /* 设置鼠标悬停样式 */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    /* 添加阴影效果 */
    z-index: 999;
    /* 确保按钮位于其他内容之上 */
}

.floating-button:hover {
    background-color: var(--el-color-primary);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    /* 悬浮时的阴影效果更明显 */
}

.more_filled_container {
    padding: 20 20;
}

.more_filled_item {
    border-radius: 4px;
}

.more_filled_item:hover {
    background-color: #DCDCDC;
}

.more_filled_item button {
    font-size: 16px
}
</style>