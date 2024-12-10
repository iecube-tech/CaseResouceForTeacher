<template>
    <el-container>
        <el-container>
            <el-aside width="210px">
                <asidediv></asidediv>
            </el-aside>
            <el-main>
                <div class="creation_main">
                    <div class="creation_two">
                        <el-card>
                            <template #header>
                                <div class="crad_header">
                                    <div>
                                        <el-button v-if="route.meta.parentName != null" type="primary" link :icon="Back"
                                            @click="goback()">返回</el-button>
                                        <el-divider v-if="route.meta.parentName != null" direction="vertical" />
                                        <span>{{ route.meta.title }}</span>
                                    </div>
                                    <div>

                                    </div>
                                </div>
                            </template>
                            <div>
                                <RouterView :key="route.fullPath"></RouterView>
                            </div>
                        </el-card>
                    </div>
                </div>
                <div class="footer">
                    京ICP备20018557号-3
                </div>
            </el-main>
        </el-container>
    </el-container>
</template>

<script setup lang="ts">
import asidediv from "./aside/index.vue"
import { useRoute } from "vue-router";
import { Back } from '@element-plus/icons-vue'
import router from '@/router';
const route = useRoute();

const goback = () => {
    router.push({
        name: <string>route.meta.parentName
    })
}
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

.crad_header {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.creation_main {
    min-width: 1224px;
}

.creation_two {
    height: 100%;
    margin-top: 16px !important;
    display: flow-root;
    padding-bottom: 20px
}

@media screen and (max-width:1624.9px) {
    .creation_two {
        width: inherit;
        margin-left: 68px;
        margin-right: 68px;
    }
}

@media screen and (min-width: 1625px) {
    .creation_two {
        margin: 0 4vw;
    }
}
</style>