<template>
    <main v-if="route.name === 'myproject'">
        <pageHeader :route=route />
        <div class="contents">
            <div v-for="project in myProjects" :key="project.id" class="resources">
                <el-card shadow="hover" class="resource_card" :body-style="{ padding: '0px' }"
                    @click="jumpToDetail(project.id)">
                    <div class="">
                        <el-dropdown trigger="hover">
                            <span class="el-dropdown-link">
                                <img v-if="project.cover" class="card_img" :src="'/local-resource/image/' + project.cover"
                                    alt="">
                            </span>
                            <template #dropdown>
                                <el-dropdown-menu>
                                    <el-dropdown-item @click="deleteProject(project.id)">删除</el-dropdown-item>
                                    <el-dropdown-item @click="hiddenProject(project.id)">隐藏</el-dropdown-item>
                                </el-dropdown-menu>
                            </template>
                        </el-dropdown>
                    </div>

                    <div class="card_title">
                        <span>{{ project.projectName }}</span>
                    </div>
                    <div class="card-introduction">
                        {{ project.introduction }}
                    </div>
                </el-card>
            </div>
        </div>
    </main>
    <RouterView />
</template>

<script setup lang="ts">
import router from '@/router';
import { useRoute } from 'vue-router';
import { onBeforeMount, ref } from 'vue';
import { MyProject } from '@/apis/project/myprojhect.js';
import { ElMessage } from 'element-plus';
import pageHeader from '@/components/pageheader.vue'
import { Delete } from '@/apis/project/delete.js'
import { Hidden } from '@/apis/project/hidden.js'

const route = useRoute()

// console.log(router)
const jumpToDetail = async (id) => {
    console.log(id);
    await router.push({
        name: 'ProjectDetail',
        params: {
            projectId: id,
        }
    })
}

const myProjects = ref([])
const deleteProject = (id) => {
    Delete(id).then(res => {
        if (res.state == 200) {
            getMyProject();
            ElMessage({
                type: 'success',
                message: '删除成功'
            })
        } else {
            ElMessage.error(res.message)
        }
    })
}

const hiddenProject = (id) => {
    Hidden(id).then(res => {
        if (res.state == 200) {
            getMyProject();
            ElMessage({
                type: 'success',
                message: '已隐藏'
            })
        } else {
            ElMessage.error(res.message)
        }
    })
}

const getMyProject = () => {
    MyProject().then(res => {
        if (res.state == 200) {
            myProjects.value = res.data
        } else {
            ElMessage.error("获取数据异常;" + res.message)
        }

    })
}

onBeforeMount(() => {
    getMyProject();
})

</script>

<style scoped>
main {
    width: 100%;
    display: flex;
    flex-direction: column;
}


.resources {
    margin-top: 20px;
    padding-bottom: 20px;
}

.contents {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}

.resource_card {
    /* width: 310px; */
    height: 400px;
    width: 400px;
    margin-top: 30px;
    margin-left: 30px;
    border-radius: 22px;
}

.card_img {
    width: 400px;
    height: 240px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
}

.card_title {
    display: flex;
    justify-content: center;
    font-size: 20px;
    font-weight: 600;
    color: #33b8b9;
    line-height: 30px;
    height: 30px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 20px;
}

.card-introduction {
    font-size: 14px;
    color: rgba(0, 0, 0, 0.65);
    line-height: 24px;
    height: 72px;
    margin: 0 20px;
    overflow: hidden;
    word-break: normal;
}

.example-showcase .el-dropdown-link {
    cursor: pointer;
    color: var(--el-color-primary);
    display: flex;
    align-items: center;
}

.el-dropdown-link:focus {
    outline: none;
}
</style>