<template>
    <div class="pageheader">
        <el-breadcrumb separator=">">
            <el-breadcrumb-item v-for="item in route.matched" :key="item.path" style="font-size: 16px;"
                @click="toPath(item)">
                <!-- :to="{ path: item.path }" -->
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

const toPath = (item) => {
    // console.log(item)
}

setTimeout(() => {
    // console.log(props.route)
}, 500)
</script>
<style scoped>
.pageheader {
    padding-left: calc(164px + 4.8vw);
    height: 30px;
    margin-top: 10px;
    margin-bottom: 10px;
}

/* .pageheader::-webkit-scrollbar {
    width: 0;
} */

.el-breadcrumb {
    margin-top: 10px;
}
</style>