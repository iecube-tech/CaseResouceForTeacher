<template>
    <main v-if="route.name === 'course'">
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
                        <span>{{ contents[i - 1].name }}</span>
                    </div>
                    <div class="card_info_info" @click="jumpToDetail(contents[i - 1].id)">
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
import { AllCourses } from "@/apis/course/allCourses.js"
import pageHeader from '@/components/pageheader.vue'


const route = useRoute()
const jumpToDetail = async (id) => {
    await router.push({
        name: 'CourseDetail',
        params: {
            courseId: id,
        }
    })
}

const contents = ref([])
const getContent = () => {
    AllCourses().then(res => {
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
.contents {
    display: grid;
    position: relative;
    grid-gap: 30px;
    --title-line-height: 1.2rem;
    --title-font-size: 1.2rem;
    --line-height: 1rem;
    --font-size: 1rem;
}

.resource_card {
    border-radius: 9px;
    cursor: pointer;
}

.card_info {
    display: flex;
    flex-direction: column;
    margin-top: 10px;
}

.card_info_title {
    font-size: var(--title-font-size);
    cursor: pointer;
}

.card_info_title:hover {
    color: var(--el-color-primary);
}

.card_info_info {
    margin-top: 10px;
    font-size: var(--font-size);
    height: calc(3 * var(--line-height));
    cursor: pointer;
    overflow: hidden;
    text-overflow: ellipsis;
}

.card_info_info:hover {
    color: var(--el-color-primary);
}

.card_cover {
    aspect-ratio: 16 / 9;
}

.card_img {
    width: 100%;
    height: 100%;
    display: block;
    width: 100%;
    height: 100%;
    object-fit: inherit;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
}


@media screen and (min-width: 760px) {
    .contents {
        grid-column: span 2;
        grid-template-columns: repeat(2, 1fr);
    }
}

@media screen and (min-width: 1024px) {
    .contents {
        grid-column: span 3;
        grid-template-columns: repeat(3, 1fr);
    }
}


@media screen and (min-width: 1366px) {
    .contents {
        grid-column: span 3;
        grid-template-columns: repeat(3, 1fr);
        padding: 0 var(--padding-1366);
    }
}

@media screen and (min-width: 1440px) {
    .contents {
        grid-column: span 4;
        grid-template-columns: repeat(4, 1fr);
    }
}

@media screen and (min-width: 1680px) {
    .contents {
        grid-column: span 4;
        grid-template-columns: repeat(4, 1fr);
        padding: 0 var(--padding-1680);
    }
}

@media screen and (min-width: 1920px) {
    .contents {
        grid-column: span 4;
        grid-template-columns: repeat(4, 1fr);
        padding: 20px var(--padding-1920);
    }
}

@media screen and (min-width: 2560px) {
    .contents {
        grid-column: span 5;
        grid-template-columns: repeat(5, 1fr);
        padding: 20px var(--padding-1920);
    }
}
</style>