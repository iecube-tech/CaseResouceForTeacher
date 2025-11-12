<template>
    <div v-if="payload" class="ist-theam my-4 p-5 bg-gray-50 rounded-lg border-l-4 border-blue-500" tabindex="0">
        <textpreview :id="payload.question?.id" :content="payload.question?.question"></textpreview>
        <div id="c_readover">
            <div>
                已上传文件：
            </div>
            <div v-if="readOverPst" class="text-gray-500 mt-2 text-sm">
                <div>
                    <el-link v-for="(item, i) in readOverPst" class="mr-4"
                        @click="openPage(item.resource.type, item.resource.filename, item.id)">
                        {{ item.resource.originFilename }}
                    </el-link>
                </div>
            </div>
            <div v-else>
                学生未上传文件
            </div>
        </div>
        <div class="mt-4">
            <div>
                已批阅文件：
                <button class="text-blue-500 " @click="reloadReadOverPst">
                    <font-awesome-icon icon="fa-solid fa-rotate" />
                </button>
            </div>
            <div v-if="readOverPst" class="text-gray-500 mt-2 text-sm">
                <div>
                    <el-link v-for="(item, i) in readOverPst" class="mr-4"
                        @click="openPage(item.readOver.type, item.readOver.filename, item.id)">
                        <span v-if="item.readOver">
                            {{ item.readOver.originFilename }}
                        </span>
                    </el-link>
                </div>
            </div>
        </div>
        <div class="mt-4 flex flex-row justify-end">
            <div>
                学生实验成绩：
                <el-input-number :min="0" :max="100" :step="1" v-model="setGradeForm.grade"
                    @change="saveGrade"></el-input-number>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue';
import { type PAYLOAD, type blockVo } from '../EMDLabV3';
import textpreview from '../../textPreview/textPreview.vue'
import { useEmdStore } from '@/stores/emdLabStore'
import { GETPSTResourceVo } from '@/apis/task/getPSTResourceVo.js'
import { setGrade } from '@/apis/emdProject/emdProject.js'

const props = defineProps({
    blockVo: Object,
    status: Number
})

const payload = ref<PAYLOAD>()
const labStore = useEmdStore()
const blockDetail = ref<blockVo>()
const pstId = ref()

const readOverPst = ref<any[]>([])


const setGradeForm = ref({
    pstId: null,
    grade: null
})

const getReadOverPst = (pstId: number) => {
    GETPSTResourceVo(pstId).then(res => {
        if (res.state == 200) {
            readOverPst.value = res.data
        }
    })
}

const reloadReadOverPst = () => {
    getReadOverPst(pstId.value)
}

const saveGrade = () => {
    let data = JSON.parse(JSON.stringify(setGradeForm.value))
    setGrade(data).then(res => {
        if (res.state == 200) {

        } else {
            ElMessage.error(res.message)
        }
    })
}

onMounted(() => {
    pstId.value = labStore.getEmdStudentTask.id
    setGradeForm.value.pstId = labStore.getEmdStudentTask.id
    setGradeForm.value.grade = labStore.getEmdStudentTask.grade
    getReadOverPst(pstId.value)

    blockDetail.value = <blockVo>props.blockVo
    if (blockDetail.value) {
        payload.value = JSON.parse(blockDetail.value.payload)
    }


    nextTick(() => {
        // 2. 再等页面全局加载完毕（图片、字体等资源加载完成，避免滚动位置偏差）
        // console.log("nextTick")
        // window.onload = () => {
        // 3. 定位目标元素
        const targetElement = document.getElementById('c_readover')
        // console.log(targetElement)
        if (targetElement) {
            // 方案1：平滑滚动（推荐，体验更好）
            // targetElement.scrollIntoView({
            //     behavior: 'smooth', // 平滑滚动（移除则为瞬间跳转）
            //     block: 'start' // 滚动后目标元素顶部对齐视口顶部（可选：center/end）
            // })

            // 方案2：瞬间滚动（无动画，直接跳转）
            // targetElement.scrollIntoView();

            // 方案3：通过 window 滚动（兼容部分特殊布局）

            // const targetTop = targetElement.offsetTop;
            // window.scrollTo({
            //         top: targetTop,
            //         behavior: 'smooth'
            //     });
            // console.log(targetTop)
            setTimeout(() => {
                // console.log("滚动")
                targetElement.scrollIntoView({
                    behavior: 'smooth', // 平滑滚动（移除则为瞬间跳转）
                    block: 'start' // 滚动后目标元素顶部对齐视口顶部（可选：center/end）
                })
            }, 1000)
        } else {
            console.warn('未找到 id="c_readover" 的元素，请检查DOM结构')
        }
        // }
    })
})

const openPage = (type: String, filename: String, PSTResourceId: number) => {
    let href = ''
    if (type.includes("image")) {
        href = '/local-resource/image/' + filename
        window.open(href, '_blank')
    } else if (type.includes("pdf")) {
        href = '/pdf/web/viewer.html?file=/local-resource/file/' + filename + '?pstresourceid=' + PSTResourceId;
        window.open(href)
    } else {
        // href = '/local-resource/file/' + filename
        href = '/pdf/web/viewer.html?file=/local-resource/file/' + filename;
        window.open(href)
    }
    // window.open(href, '_blank')
}

const score = ref(0)



</script>
<style scoped></style>