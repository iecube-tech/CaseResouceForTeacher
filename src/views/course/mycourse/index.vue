<template>
    <pageHeader :route=route />
    <!-- <cassSearch /> -->
    <div class="contents">
        <div v-for="i in contents.length" :key="contents[i - 1].id" class="contents_item">
            <el-card shadow="hover" class="resource_card" :body-style="{ padding: '0px' }"
                @click="jumpToDetail(contents[i - 1].id)">
                <div class="card_cover">
                    <img v-if="contents[i - 1].cover" class="card_img"
                        :src="'/local-resource/image/' + contents[i - 1].cover" alt="">
                </div>
            </el-card>

            <div class="card_info">
                <div class="card_info_title" @click="jumpToDetail(contents[i - 1].id)">
                    <span>{{ contents[i - 1].name }}</span>
                </div>
                <div class="card_info_info" @click="jumpToDetail(contents[i - 1].id)">
                    <span>{{ contents[i - 1].introduction }}</span>
                </div>
            </div>
        </div>
        <div class="contents_item">
            <el-card shadow="hover" class="resource_card" :body-style="{ padding: '0px' }"
                @click="jumpToTeacherAddCourse()">
                <div class="card_cover">
                    <el-icon class="avatar-uploader-icon">
                        <Plus />
                    </el-icon>
                </div>
            </el-card>

            <div class="card_info">
                <div class="card_info_title">{{ '课程管理' }}</div>
                <div class="card_info_info">
                    {{ '根据模版指引，完成必要步骤，导入传统实验课程。' }}
                </div>
            </div>

        </div>
    </div>
</template>

<script setup lang="ts">
import router from '@/router';
import { onBeforeMount, ref } from 'vue'
import { ElMessage } from 'element-plus';
import pageHeader from '@/components/pageheader.vue'
import { useRoute } from 'vue-router';
import { MyCourses } from '@/apis/course/myCourses.js';

const route = useRoute()

const contents = ref([])

const jumpToTeacherAddCourse = () => {
    router.push({
        name: 'teacherCourseManage',
    })
}

const jumpToDetail = async (id) => {
    // console.log(id);
    await router.push({
        name: 'CourseDetail',
        params: {
            courseId: id,
        }
    })
}

onBeforeMount(async () => {
    if (route.name == 'mycourse') {
        await MyCourses().then(res => {
            if (res.state == 200) {
                contents.value = res.data
            } else {
                ElMessage.error(res.message)
            }
        })
    }
})
</script>
<style scoped>
@import "@/styles/itemList/grid.css";
</style>