<template>
    <div class="pageheader">
        <el-breadcrumb separator=">">
            <el-breadcrumb-item v-for="item in route.matched" :key="item.path" :to="{ path: item.path }">
                {{ item.meta.title }}
            </el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps({
    route: ref(null),
})
</script>
<style scoped>
.pageheader {
    padding-left: calc(164px + 4.8vw);
    height: 30px;
}

/* .pageheader::-webkit-scrollbar {
    width: 0;
} */

.el-breadcrumb {
    margin-top: 10px;
}
</style>