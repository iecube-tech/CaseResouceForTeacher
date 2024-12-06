<template>
    <el-container>
        <el-container>
            <el-aside width="210px">
                <asidediv></asidediv>
            </el-aside>
            <el-main>
                <div>
                    <RouterView :key="route.path" />
                </div>
                <div class="footer">
                    京ICP备20018557号-3
                </div>
            </el-main>
        </el-container>
    </el-container>
</template>

<script setup lang="ts">
import indexHeader from "@/components/indexHeader.vue";
import asidediv from "./aside/index.vue"
import { useRoute } from "vue-router";
const route = useRoute();

</script>
<style scoped>
@import "@/styles/header/header.css";

.el-container {
    height: 100%;
}



.el-main {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
</style>