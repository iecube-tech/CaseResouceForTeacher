<template>
    <pageheader :route="route" />
    <main>
        <div class="aside">

        </div>

        <div class="resource">
            <el-card shadow="never">
                <template #header>
                    <div class="card-header">
                        <span style="color: #33b8b9; font-size: 24px;">账号信息</span>
                    </div>
                </template>
                <el-row>
                    <el-col :span="8">
                        账号信息
                    </el-col>
                    <el-col :span="8">
                        姓名
                    </el-col>
                    <el-col :span="8">
                        学院
                    </el-col>
                </el-row>
            </el-card>

            <el-card shadow="never">
                <template #header>
                    <div class="card-header">
                        <span style="color: #33b8b9; font-size: 24px;">修改密码</span>
                    </div>
                </template>
                <el-row>
                    <el-col :span="8">
                        账号信息
                    </el-col>
                    <el-col :span="8">
                        姓名
                    </el-col>
                    <el-col :span="8">
                        学院
                    </el-col>
                </el-row>
            </el-card>
        </div>

        <div class="right_aside">

        </div>
    </main>
</template>

<script setup lang="ts">
import pageheader from '@/components/pageheader.vue';
import { onBeforeMount, ref } from 'vue';
import { useRoute } from 'vue-router';
import { Majors } from '@/apis/major/myMajors.js'

const manageMagor = ref(false)
const route = useRoute()

onBeforeMount(async () => {
    await Majors().then(res => {
        console.log(res)
    })
})
</script>

<style scoped>
main {
    width: 100%;
    height: 100%;
    display: flex;
}

.aside {
    width: calc(164px + 4.8vw);
}


.resource {
    flex-grow: 1;
}

.right_aside {
    width: calc(164px + 4.8vw);
}
</style>