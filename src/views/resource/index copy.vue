<template>
    <main v-if="route.name === 'resource'">
        <pageHeader :route=route />
        <div class="contents">
            <div v-for="i in contents.length" :key="contents[i - 1].id" class="contents_item">
                <el-card shadow="hover" class="resource_card" :body-style="{ padding: '0px' }"
                    @click="jumpToDetail(contents[i - 1].id)">
                    <div class="card_cover">
                        <img v-if="contents[i - 1].cover" class="card_img"
                            :src="'/local-resource/image/' + contents[i - 1].cover" alt="">
                    </div>
                </el-card>

                <div class="card_info">
                    <div class="card_info_title" @click="jumpToDetail(contents[i - 1].id)">
                        <span :title="contents[i - 1].name">{{ contents[i - 1].name }}</span>
                    </div>
                    <div class="card_info_info" :title="contents[i - 1].introduction"
                        @click="jumpToDetail(contents[i - 1].id)">
                        <span>{{ contents[i - 1].introduction }}</span>
                    </div>
                </div>
            </div>
        </div>
    </main>
    <RouterView />
</template>

<script setup lang="ts">
import router from '@/router';
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router';
import { All } from "@/apis/content/all"
import pageHeader from '@/components/pageheader.vue'
import cassSearch from '@/components/casesearch.vue'


const route = useRoute()
const jumpToDetail = async (id) => {
    await router.push({
        name: 'ResourceDetail',
        params: {
            resourceId: id,
        }
    })
}

const contents = ref([])
const getContent = () => {
    All().then(res => {
        if (res.state == 200) {
            contents.value = res.data
        }
    })
}
getContent()

onMounted(() => {
    // getContent()
})

</script>

<style scoped>
@import "@/styles/itemList/grid.css";
</style>