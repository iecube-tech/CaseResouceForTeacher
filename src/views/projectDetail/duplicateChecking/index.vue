<template>
    <pageHeader :route=Route />
    <div class="duplicate">
        <el-card>
            <template #header>
                <div>
                    <el-button link type="primary" :icon="Back" @click="goback">返回</el-button>
                </div>
            </template>

        </el-card>
    </div>
</template>

<script setup lang="ts">
import { onBeforeMount, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router';
import router from '@/router';
import { Back } from '@element-plus/icons-vue'
import pageHeader from '@/components/pageheader.vue'
const Route = useRoute()
const projectId = Route.params.projectId


const goback = () => {
    router.push({
        name: <string>Route.meta.parentName
    })
}
onBeforeMount(() => {
    console.log(projectId)
})
</script>
<style scoped>
/* .duplicate {
    padding: 20px 4.8vw
} */
</style>
<style>
@media (min-width: 1900px) {
    .duplicate {
        padding: 20px calc(164px + 4.8vw);
    }
}
</style>