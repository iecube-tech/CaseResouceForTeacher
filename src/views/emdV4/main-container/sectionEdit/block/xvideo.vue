<template>
  <VideoPlayer v-if="visible" class="video-player" :video="video" ></VideoPlayer>
</template>

<script setup>
import VideoPlayer from "@/components/markdownInteraction/module/child/video.vue"
import { GetBlockDetail } from '@/apis/e-md/block/getBlockDetail.js'
const props = defineProps({
    blockId: Number,
})

const visible = ref(false)
const video = ref(null)

const init = () => {
    GetBlockDetail(props.blockId).then(res => {
        if (res.state == 200) {
            let payload = JSON.parse(res.data.payload)
            video.value = payload.question.video
            visible.value = true
        }
        else {
            ElMessage.error("数据加载失败")
        }
    })
}

onMounted(() => {
    init()
})


</script>

<style scoped>

</style>