<template>
    <main>
        <div class="aside">
            zuo
        </div>

        <div class="resource">
            <el-collapse v-model="activeNames" @change="handleChange">
                <el-collapse-item v-for="o in 10" :key="o" :title="'步骤' + o" :name="'' + o">
                </el-collapse-item>
            </el-collapse>
        </div>

        <div class="right_aside">
            you
        </div>
    </main>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router';

const Route = useRoute()
const projectId = Route.params.projectId
const student = Route.params.studentId
const stepNum = Route.params.stepNum

const activeNames = ref(['' + stepNum])
const handleChange = (val: string[]) => {
    console.log(val)
}
onMounted(() => {

})
</script>

<style scoped>
main {
    width: 100%;
    height: 100%;
    display: flex;
}

.aside {
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 200px;
}


.resource {
    background-color: aqua;
    height: 100%;
    flex-basis: 1000px;
    margin-top: 30px;
}

.right_aside {
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 200px;
}
</style>