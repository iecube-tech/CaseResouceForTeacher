<template>
    <div>
        课程页面 -- {{ courseId }}
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
console.log(route);
const courseId = ref(route.query.id);
</script>
<style scoped></style>
