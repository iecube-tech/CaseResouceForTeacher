<template>
    <pageHeader :route=route />
    <!-- <cassSearch /> -->
    <main>
        <div v-for="content in contents" :key="content.id" class="resources">
            <el-card shadow="hover" class="resource_card" :body-style="{ padding: '0px' }"
                @click="jumpToDetail(content.id)">
                <img v-if="content.cover" class="card_img" :src="'/local-resource/image/' + content.cover" alt="">
                <div class="card_title">{{ content.name }}</div>
                <div class="card-introduction">
                    {{ content.introduction }}
                </div>
            </el-card>
        </div>
        <div class="resources">
            <el-card shadow="hover" class="resource_card" :body-style="{ padding: '0px' }" @click="jumpToTeacherAddCase()">
                <div class="card_img">
                    <el-icon class="avatar-uploader-icon">
                        <Plus />
                    </el-icon>
                </div>
                <div class="card_title">{{ '案例管理' }}</div>
                <div class="card-introduction">
                    {{ '根据模版指引，完成必要步骤，即可创建一个可实用的案例。' }}
                </div>
            </el-card>
        </div>
    </main>
</template>

<script setup lang="ts">
import router from '@/router';
import { onBeforeMount, ref } from 'vue'
import { GetByTeacherId } from '@/apis/content/getByTeacherId'
import { ElMessage } from 'element-plus';
import { Plus } from '@element-plus/icons-vue'
import pageHeader from '@/components/pageheader.vue'
import cassSearch from '@/components/casesearch.vue'
import { useRoute } from 'vue-router';

const route = useRoute()

const contents = ref([])

const activeNames = ref(['1'])

const jumpToDetail = async (id) => {
    console.log(id);
    await router.push({
        name: 'ResourceDetail',
        params: {
            resourceId: id,
        }
    })
}

const jumpToTeacherAddCase = () => {
    router.push({
        name: 'teacherCaseManage',
    })
}

onBeforeMount(async () => {
    if (route.name == 'myresouce') {
        await GetByTeacherId().then(res => {
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
main {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}

.resources {
    margin-top: 20px;
    padding-bottom: 20px;
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


.avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 400px;
    height: 300px;
    text-align: center;
}
</style>