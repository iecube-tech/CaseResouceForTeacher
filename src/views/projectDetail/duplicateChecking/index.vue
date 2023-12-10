<template>
    <pageHeader :route=Route />
    <div class="duplicate">
        <el-card>
            <template #header>
                <div>
                    <el-button link type="primary" :icon="Back" @click="goback">返回</el-button>
                </div>
            </template>
            <el-row>
                <el-select v-model="value" class="m-2" placeholder="Select" size="small">
                    <el-option v-for="item in tasks" :key="item.num" :label="item.taskName" :value="item.id" />
                </el-select>
                <el-button type="primary" link>
                    重新生成
                </el-button>
            </el-row>

        </el-card>
    </div>
</template>

<script setup lang="ts">
import { onBeforeMount, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router';
import router from '@/router';
import { Back } from '@element-plus/icons-vue'
import pageHeader from '@/components/pageheader.vue'

import { getProjectTasks } from '@/apis/project/tasks.js'
import { getDuplicateChecking } from '@/apis/project/duplicateChecking/getduplicateChecking.js'

const Route = useRoute()
const projectId = Route.params.projectId

interface task {
    id: number
    num: number
    taskName: string
}


const value=ref(0)
const tasks = ref<Array<task | null>>([])

const goback = () => {
    router.push({
        name: <string>Route.meta.parentName
    })
}

const getDuplicateCheckings = (id)=>{
    getDuplicateChecking(id).then(res=>{
        if(res.state==200){
            console.log(res);
            
        } 
    })
}
onBeforeMount(() => {
    console.log(projectId)
    getProjectTasks(projectId).then(res => {
        if (res.state == 200) {
            tasks.value=res.data
            if(tasks.value.length>0){
                value.value=tasks.value[0].id
                getDuplicateCheckings(value.value)
            }
        }
    })
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