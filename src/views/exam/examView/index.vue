<template>
    <pageHeader :route=route />
    <div class="view-card">
        <Router-view />
    </div>

</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import pageHeader from '@/components/pageheader.vue'

const route = useRoute()


</script>
<style scoped>
@import "@/styles/cardPadding/cardPadding.css";
</style>