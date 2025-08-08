<template>
  <VideoPlayer class="video-player" :video="payload.question.video" ></VideoPlayer>
     {{ payload.question.video }}
</template>

<script setup>
import VideoPlayer from "@/components/markdownInteraction/module/child/video.vue"

const props = defineProps({
    payload: Object
})

</script>

<style scoped>

</style>