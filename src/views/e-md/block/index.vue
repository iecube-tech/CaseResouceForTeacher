<template>
    <div>
        blcokCompose
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();

const blockId = ref(route.query.blockId);
</script>
<style scoped></style>