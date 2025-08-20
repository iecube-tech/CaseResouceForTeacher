<template>
  <div style="display: block; width: 360px;">
    <my-video :video="payload.video"></my-video>
  </div>
  
  <el-form inline>
    <el-form-item label="标题">{{ payload.video.title }}</el-form-item>
    <el-form-item label="描述">{{ payload.video.description }}</el-form-item>
  </el-form>
</template>

<script setup>
import myVideo from "@/components/myVideo.vue"

const props = defineProps({
  payload: Object
})

// const src = ref(`/dev-api/video/m3u8/${props.payload.video.filename}.m3u8`)

</script>

<style scoped></style>