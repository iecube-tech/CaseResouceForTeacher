<template>
    <main v-if="route.name === 'resource'">
        <div v-for="id in 8" key="id" class="resources">
            <el-card shadow="hover" class="resource_card" :body-style="{ padding: '0px' }" @click="jumpToDetail(id)">
                <img class="card_img" src="@/assets/images/ELVIS-QCB.png" alt="">
                <div class="card_title">蓝牙音箱</div>
                <div class="card-introduction">
                    zhegeshimiaoshuxinxi,jjjjjjjjhgahjkvbjkbv
                    jiahbiufhio,iaojhakjbvnjihgbfiuajfposmvja.
                    hiavnjahbaiuhfkolvnajhbuiahjkmuih.
                    gggggg
                    ggggggggg
                    ggg
                </div>
            </el-card>
        </div>
    </main>
    <RouterView />
</template>

<script setup lang="ts">
import router from '@/router';
import { ref } from 'vue'
import { useRoute } from 'vue-router';

const route = useRoute()
const jumpToDetail = async (id) => {
    console.log(id);
    await router.push({
        name: 'ResourceDetail',
        params: {
            resourceId: id,
        }
    })
}


const resource = ref([])
resource.value = [
    {
        id: '',
        img: '',
        title: '',

    }
]

const activeNames = ref(['1'])
const handleChange = (val: string[]) => {
    console.log(val)
}
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
</style>