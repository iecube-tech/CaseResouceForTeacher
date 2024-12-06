<template>
    <main v-if="route.name === 'suggestion'">
        <pageHeader :route=route />
        <div class="contents">
            <div v-for="i in myProjects.length" :key="myProjects[i - 1].id" class="contents_item">
                <el-card shadow="hover" class="resource_card" :body-style="{ padding: '0px' }"
                    @click="jumpToDetail(myProjects[i - 1].id)">
                    <div class="card_cover">
                        <img v-if="myProjects[i - 1].cover" class="card_img"
                            :src="'/local-resource/image/' + myProjects[i - 1].cover" alt="">
                    </div>
                </el-card>

                <div class="card_info">
                    <div class="card_info_title" @click="jumpToDetail(myProjects[i - 1].id)">
                        <span :title="myProjects[i - 1].projectName">{{ myProjects[i - 1].projectName }}</span>
                    </div>
                    <div class="card_info_info" @click="jumpToDetail(myProjects[i - 1].id)">
                        <span>{{ myProjects[i - 1].introduction }}</span>
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
const jumpToDetail = async (id) => {
    // console.log(id);
    await router.push({
        name: 'suggestionDetailS',
        params: {
            projectId: id,
        }
    })
}

const myProjects = ref([])

onBeforeMount(() => {
    MyProject().then(res => {
        if (res.state == 200) {
            myProjects.value = res.data
        } else {
            ElMessage.error("获取数据异常;" + res.message)
        }

    })
})

</script>

<style scoped>
@import "@/styles/itemList/grid.css";
</style>