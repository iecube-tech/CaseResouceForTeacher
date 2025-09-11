<template>
    <main v-if="route.name === 'analysis'">
        <pageHeader :route=route />
        <div class="contents">
            <div v-for="(project, k) in myProjects" :key="project.id" class="contents_item">
                <div @click="jumpToDetail(project)">
                    <el-card shadow="hover" class="resource_card" :body-style="{ padding: '0px' }">
                        <div class="card_cover">
                            <img v-if="project.cover" class="card_img" :src="'/local-resource/image/' + project.cover"
                                alt="">
                        </div>
                    </el-card>

                    <div class="card_info">
                        <div class="card_info_title">
                            <span :title="project.projectName">{{ project.projectName }}</span>
                        </div>
                        <div class="card_info_info">
                            <span>{{ project.introduction }}</span>
                        </div>
                    </div>
                </div>

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

const route = useRoute()

// console.log(router)
const jumpToDetail = (project) => {
    // console.log(project);
    let version = project.version || 0
    if (version >= 4) {
        // let url = router.resolve({
        //     name: 'courseAnalysis',
        //     params: {
        //         projectId: project.id,
        //     }
        // })
        // window.open(url.href, '_blank')
        // TODO 演示使用
        window.open('/courseAnalysis.html', '_blank')
    } else {
        router.push({
            name: 'analysisDetailC',
            params: {
                projectId: project.id,
            }
        })
    }

}

const myProjects = ref([])

onBeforeMount(() => {
    MyProject().then(res => {
        if (res.state == 200) {
            myProjects.value = res.data
            // console.log(myProjects);

        } else {
            ElMessage.error("获取数据异常;" + res.message)
        }

    })
})

</script>

<style scoped>
@import "@/styles/itemList/grid.css";
</style>