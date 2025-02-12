<template>
    <div style="width: 100%; height: 100%; display: flex; flex-direction: row;">
        <div style="flex: 1;">
            实验 {{ labId }}
            <el-button @click="buttonClick">tiao</el-button>
        </div>

        <div style="width: 400px;">
            <RouterView />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { RouterView, useRoute } from 'vue-router';
import router from '@/router';

const route = useRoute();
const labId = ref(route.query.id);

const buttonClick = () => {
    router.push({ name: 'elaborateMarkdownLabRight', query: { id: 2 } });
}

</script>
<style scoped></style>