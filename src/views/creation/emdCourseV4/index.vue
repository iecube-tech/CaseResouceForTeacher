<template>
    <div class="creation_main">
        <div class="creation_two">
            <el-card>
                <template #header>
                    <div class="crad_header">
                        <div>

                            <el-button v-if="route.name != 'creationEMdCourseListV4'" type="primary" link :icon="Back"
                                @click="goback()">返回</el-button>
                            <el-divider v-if="route.name != 'creationEMdCourseListV4'" direction="vertical" />
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
</template>

<script setup lang="ts">
import { Back } from '@element-plus/icons-vue';
import { useRoute } from 'vue-router';
import router from '@/router';
const route = useRoute()
const goback = () => {
    router.push({
        name: <string>route.meta.parentName
    })
}
// onBeforeMount(() => {
//     whichIndex()
// })
</script>
<style scoped>
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