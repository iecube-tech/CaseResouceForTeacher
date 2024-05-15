<template>
    <div v-if="route.name === 'myproject'">
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
                        <span>{{ myProjects[i - 1].projectName }}</span>
                    </div>
                    <div class="card_info_info" @click="jumpToDetail(myProjects[i - 1].id)">
                        <span>{{ myProjects[i - 1].introduction }}</span>
                    </div>
                </div>
            </div>

        </div>
    </div>
    <RouterView />
</template>

<script setup lang="ts">
import router from '@/router';
import { useRoute } from 'vue-router';
import { onBeforeMount, ref } from 'vue';
import { MyProject } from '@/apis/project/myprojhect.js';
import { ElMessage } from 'element-plus';
import pageHeader from '@/components/pageheader.vue'
import { DeleteProject } from '@/apis/project/delete.js'
import { Hidden } from '@/apis/project/hidden.js'
import { projectTableDataStore } from '@/stores/projectTableData.js'
const TableDataStore = projectTableDataStore()

const route = useRoute()

// console.log(router)
const jumpToDetail = async (id) => {
    TableDataStore.clearData();
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
    DeleteProject(id).then(res => {
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
@import "@/styles/itemList/grid.css";
</style>