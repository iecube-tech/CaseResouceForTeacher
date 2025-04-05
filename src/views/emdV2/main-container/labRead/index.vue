<template>
    <div class="main-content">
        <div ref="lab" class="lab-container" v-if="labModelVoList">
            <div v-for="(model, i) in labModelVoList" :key="'module-' + i"
                class="model-item scroll-mt-[80px] card p-8 mb-8" :id="'module-' + i">
                <div class="text-2xl font-bold mb-6 flex items-center">
                    <!-- <i class="fas fa-info-circle text-blue-600 mr-3"></i> -->
                    <font-awesome-icon :icon="model.icon" class="text-blue-600 mr-3" />
                    {{ model.name }}
                </div>
                <div class="mb-8 overflow-x-auto">
                    <div class="flex space-x-2 md:space-x-4 min-w-max">
                        <button v-for="(section, j) in model.sectionVoList"
                            class="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-full text-sm font-medium transition-colors">
                            {{ '步骤' + (j + 1) }}
                        </button>
                    </div>
                </div>
                <div v-for="(section, j) in model.sectionVoList">
                    <div class="section-container border rounded-lg mb-6 p-6 scroll-mt-[80px]"
                        :id="'module-' + i + 'step-' + j">
                        <sectionItem :section="section" />
                        <div class="text-center mt-6">
                            <button
                                class="btn bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-full shadow-md flex items-center mx-auto">
                                下一步
                                <font-awesome-icon icon="fas fa-arrow-right" class="ml-2" />
                            </button>
                        </div>
                    </div>
                </div>
                <div class="flex justify-end mb-4">
                    <a :href="'#module-' + i" class="text-sm text-blue-600 hover:text-blue-800 flex items-center">
                        <font-awesome-icon icon="fas fa-arrow-up" class="mr-1" />
                        返回本模块顶部
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { RouterView, useRoute } from 'vue-router';
import router from '@/router';
import { GetLabModelVoList } from '@/apis/e-md/labModel/getLabModelVoList';
import { ElMessage } from 'element-plus';
import { generateShortUUID } from '@/utils/GenrateUUID';
import '@/styles/stuTask/stuLab.css'
import sectionItem from './sectionContainer/sectionView.vue'

const route = useRoute();
const labId = ref();

// const sectionVoList = ref();
const labModelVoList = ref()
const getLabModelVoList = () => {
    GetLabModelVoList(labId.value).then(res => {
        if (res.state == 200) {
            labModelVoList.value = res.data
        } else {
            ElMessage.error(res.message)
        }
    })
}

const buttonClick = () => {
    router.push({ name: 'elaborateMarkdownLabRight', query: { id: 2 } });
}

onMounted(() => {
    setTimeout(() => {
        labId.value = route.query.labId
        getLabModelVoList()
    }, 10)
})

</script>
<style scoped>
.main-content {
    height: 100%;
    overflow: auto;
}

.lab-proc-view {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
}
</style>