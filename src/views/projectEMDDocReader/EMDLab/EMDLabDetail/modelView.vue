<template>
    <div ref="lab" class="lab-container" v-if="labModelList">
        <div v-for="(item, i) in labModelList" :key="'module-' + i" class="model-item scroll-mt-[80px] card p-8 mb-8"
            :id="'module-' + i">
            <div class="text-2xl font-bold mb-6 flex items-center">
                <!-- <i class="fas fa-info-circle text-blue-600 mr-3"></i> -->
                <font-awesome-icon :icon="item.icon" class="text-blue-600 mr-3" />
                {{ item.name }}
            </div>
            <div class="mb-8 overflow-x-auto">
                <div class="flex space-x-2 md:space-x-4 min-w-max">
                    <button v-for="(section, j) in labModelList[i].sectionVoList"
                        class="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-full text-sm font-medium transition-colors">
                        {{ '步骤' + (j + 1) }}
                    </button>
                </div>
            </div>
            <div v-for="(section, j) in labModelList[i].sectionVoList">
                <div class="section-container border rounded-lg mb-6 p-6 scroll-mt-[80px]"
                    :id="'module-' + (i) + 'step-' + j">
                    <sectionItem :section="section" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import { emdGetStuTaskDetail } from '@/apis/emdProject/getStudentTaskDetail';
import { ElMessage } from 'element-plus';
import { type taskDetailVo, type sectionVo } from './EMDLab';
import sectionItem from './sectionContainer/sectionViewV3.vue';
import { useChatStore } from '@/stores/aiStore';
import { useEmdStore } from '@/stores/emdLabStore';
import auto3835 from '../../deviceData/auto-3835.vue';

const props = defineProps({
    taskId: {
        type: Number,
        required: true
    },
    studentId: {
        type: Number,
        required: true
    }
})
const aistore = useChatStore()
const labModelList = ref()
// const sectionVoList = ref<sectionVo[]>([])
const labStore = useEmdStore()
const labdoneDialog = ref(false)

const handlePageClick = () => {
    document.addEventListener('click', function (event: Event) {
        // console.log(event)
        if ((event.target as HTMLElement).classList.contains("md-image")) {
            labStore.showZoomed = true
            labStore.setimageSrc((event.target as HTMLImageElement).currentSrc)
        }
    })
}

const getTaskDetailVo = () => {
    return new Promise<void>((resolve, reject) => {
        emdGetStuTaskDetail(props.studentId, props.taskId).then(res => {
            if (res.state == 200) {
                labModelList.value = res.data.labModelVoList
                labStore.setLabModelList(labModelList.value)
                labStore.setEmdStudentTask(res.data.emdStudentTask)
                console.log(labModelList.value)
                resolve()
            } else {
                ElMessage.error(res.message)
                reject()
            }
        })
    })
}


onMounted(async () => {
    await getTaskDetailVo()  // 获取实验内容
    handlePageClick()
})
</script>
<style scoped></style>