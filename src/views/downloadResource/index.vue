<template>
    <main>
        <pageHeader :route=route />
        <el-col>
            <div class="contents">
                <div v-for="i in contents.length" :key="contents[i - 1].id" class='contents_item'>
                    <el-card shadow="hover" class="resource_card" :body-style="{ padding: '0px' }"
                        @click="downloadHandler(contents[i - 1].name, contents[i - 1].id)">
                        <div class="card_cover contents_overlay">
                            <img v-if="contents[i - 1].cover" class="card_img card_img_gray"
                                :src="'/local-resource/image/' + contents[i - 1].cover" alt="">
                            <div class="overlay-text">
                                <el-icon>
                                    <Download />
                                </el-icon>
                            </div>
                        </div>
                    </el-card>

                    <div class="card_info">
                        <div class="card_info_title" @click="downloadHandler(contents[i - 1].name, contents[i - 1].id)">
                            <span :title="contents[i - 1].name">{{ contents[i - 1].name }}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="contents" style="margin-top: 2em;">
                <div v-for="i in courses.length" :key="courses[i - 1].id" class="contents_item">
                    <el-card shadow="hover" class="resource_card" :body-style="{ padding: '0px' }"
                        @click="downloadHandler(courses[i - 1].name, courses[i - 1].id)">
                        <div class="card_cover contents_overlay">
                            <img v-if="courses[i - 1].cover" class="card_img card_img_gray"
                                :src="'/local-resource/image/' + courses[i - 1].cover" alt="">
                            <div class="overlay-text">
                                <el-icon>
                                    <Download />
                                </el-icon>
                            </div>
                        </div>
                    </el-card>

                    <div class="card_info">
                        <div class="card_info_title" @click="downloadHandler(courses[i - 1].name, courses[i - 1].id)">
                            <span :title="courses[i - 1].name">{{ courses[i - 1].name }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </el-col>
    </main>

    <el-dialog v-model="selectDialog" :title="selectContentName + '资源下载'" :before-close="dialogClose()">
        <div>
            <el-table :data="resourceVoList" height="40vh" @selection-change="handleSelectionChange">
                <el-table-column type="selection" width="55" />
                <el-table-column prop="originFilename" label="资源" />
                <el-table-column :align="'right'">
                    <template #default="scope">
                        <el-button link @click="downloadItemHandler(scope.row.filename)">
                            下载
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <template #footer>
            <el-button type="primary" @click="downloadBatchHandler()">
                批量下载
            </el-button>
        </template>
    </el-dialog>
</template>

<script setup lang="ts">
import router from '@/router';
import { onBeforeMount, ref } from 'vue'
import { ElMessage } from 'element-plus';
import pageHeader from '@/components/pageheader.vue'
import { useRoute } from 'vue-router';
import { MyCourses } from '@/apis/course/myCourses.js';
import { GetByTeacherId } from '@/apis/content/getByTeacherId';
import { Download } from '@element-plus/icons-vue';
import { GetPackages } from '@/apis/content/getPackages';
import { downloadUtil } from '@/utils/fetchDownload.js';
const route = useRoute()

const contents = ref([])

const courses = ref([])

const jumpToTeacherAddCourse = () => {
    router.push({
        name: 'teacherCourseManage',
    })
}

const resourceVoList = ref([])

const selectContentName = ref()

const downloadHandler = (name, id) => {
    selectContentName.value = name
    GetPackages(id).then(res => {
        if (res.state == 200) {
            resourceVoList.value = res.data
            console.log(resourceVoList.value)
            selectDialog.value = true
        } else {
            ElMessage.error(res.message)
        }
    })
}

const downloadItemHandler = (filename) => {
    return new Promise<void>((resovle, reject) => {
        setTimeout(() => {
            var link = document.createElement('a');
            link.href = '/local-resource/file/' + filename;
            link.click();  // 触发下载
            link.remove();
            resovle()
        }, 1000)

    })
}

const downloadBatchHandler = () => {
    if (!multipleSelection.value) {
        ElMessage.warning("请选择下载内容")
        return
    }
    if (multipleSelection.value.length < 1) {
        ElMessage.warning("请选择下载内容")
        return
    }
    console.log(multipleSelection.value)
    multipleSelection.value.forEach(item => {
        const aTag = document.createElement('a');
        aTag.href = '/local-resource/file/' + item.filename;
        aTag.download = item.originFilename;
        document.body.appendChild(aTag);
        aTag.click();
        document.body.removeChild(aTag);
    })

    ElMessage.success("已添至下载列表")
    selectDialog.value = false

}

const multipleSelection = ref([])

const handleSelectionChange = (val) => {
    multipleSelection.value = val

    console.log(multipleSelection.value)
}

const selectDialog = ref(false)

const dialogClose = () => {
    multipleSelection.value = []
}

onBeforeMount(async () => {

    await GetByTeacherId().then(res => {
        if (res.state == 200) {
            contents.value = res.data
        } else {
            ElMessage.error(res.message)
        }
    })

    await MyCourses().then(res => {
        if (res.state == 200) {
            courses.value = res.data
        } else {
            ElMessage.error(res.message)
        }
    })
})
</script>
<style scoped>
@import "@/styles/itemList/grid.css";
</style>