<template>
  <VideoPlayer class="video-player" :video="payload.question.video" ></VideoPlayer>
     
  <el-form inline >
    <el-form-item label="标题">{{ payload.question.video.title }}</el-form-item>
    <el-form-item label="描述">{{ payload.question.video.description }}</el-form-item>
  </el-form>
</template>

<script setup>
import VideoPlayer from "@/components/markdownInteraction/module/child/video.vue"

const props = defineProps({
    payload: Object
})

</script>

<style scoped>

</style>