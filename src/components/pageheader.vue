<template>
    <div class="pageheader">
        <el-breadcrumb separator=">">
            <!-- <el-breadcrumb-item v-for="item in breadcrumbList" :key="item.name" :to="item.path" style="font-size: 16px;">
                {{ item.name + item.path + "__" + item.params.projectId }}
            </el-breadcrumb-item> -->

            <el-breadcrumb-item v-for="item in breadcrumbList" :key="item" :to="to(item.path)" style="font-size: 16px;">
                {{ item.meta.title }}
            </el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>
  
<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useRoute } from 'vue-router';

export default defineComponent({
    name: 'Breadcrumb',
    setup() {
        const route = useRoute();
        const projectId = route.params.projectId
        const studentId = route.params.studentId
        const stepNum = route.params.stepNum
        // const breadcrumbList = computed(() => {
        //     const matchedRoutes = route.matched;
        //     for (let i = 0; i < matchedRoutes.length; i++) {
        //         // console.log(route)
        //         // console.log(route.params.projectId)
        //         // console.log(matchedRoutes[i].path)
        //         matchedRoutes[i].path = matchedRoutes[i].path.replace(':projectId', <string>projectId).replace(':studentId', <string>studentId).replace(':stepNum', <string>stepNum)

        //     }
        //     return matchedRoutes.map((routeRecord) => ({
        //         name: routeRecord.meta.title as string,
        //         path: routeRecord.path,
        //         params: route.params
        //     }));
        // });
        const breadcrumbList = route.matched
        const to = (path: string) => {
            let newpath = path.replace(':projectId', <string>projectId).replace(':studentId', <string>studentId).replace(':stepNum', <string>stepNum)
            return newpath
        }
        return {
            breadcrumbList,
            to,
        };
    }
});
</script>
<style scoped>
.pageheader {
    height: 30px;
    margin-top: 50px;
    margin-bottom: 10px;
}

/* .pageheader::-webkit-scrollbar {
    width: 0;
} */

.el-breadcrumb {
    margin-top: 10px;
}

@media screen and (min-width: 1366px) {
    .pageheader {
        padding-left: 3vw;
    }
}

@media screen and (min-width: 1680px) {
    .pageheader {
        padding-left: 4.8vw;
    }
}

@media screen and (min-width: 1920px) {
    .pageheader {
        padding-left: calc(164px + 4.8vw);
    }
}
</style>