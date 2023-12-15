<template>
    <div v-if="DupRates.length > 0">
        <el-popover placement="right" :width="400" trigger="hover">
            <template #reference>
                <el-button link :type="getType()"> {{ biggestRate }}%</el-button>
            </template>
            <el-table :data="DupRates">

                <el-table-column property="contrastStudentName" label="对比人" />
                <el-table-column label="对比文件">
                    <template #default="scoped">
                        <el-button link type="primary" @click="OpenPdf(scoped.row.fileName, pstId)"> {{
                            scoped.row.contrastOriginFilename }}
                        </el-button>
                    </template>
                </el-table-column>
                <el-table-column property="repetitiveRate" align="center" label="当前文件与对比人的文件对比，重复内容占当前文件的百分比" />
            </el-table>
        </el-popover>
    </div>
</template>

<script setup lang="ts">

import { getDupRateByResource } from '@/apis/project/duplicateChecking/getDupRateByStudentId.js';
import { onBeforeMount, ref } from 'vue';

const props = defineProps({
    resourceId: Number,
    pstId: Number
})

const biggestRate = ref(0)
const resourceId = ref(0)
const pstId = ref(0)
const DupRates = ref([])
const maxSize = ref(5)
onBeforeMount(() => {
    resourceId.value = <any>props.resourceId
    pstId.value = <any>props.pstId
    getDupRateByResource(resourceId.value).then(res => {
        if (res.state == 200) {
            if (res.data.length > 0) {
                if (res.data.length < maxSize.value) {
                    maxSize.value = res.data.length
                }
                for (let i = 0; i < maxSize.value; i++) {
                    DupRates.value.push(res.data[i])
                }
                biggestRate.value = DupRates.value[0].repetitiveRate
            }
        }
    })
})

const pdfUrl = ref('')
const OpenPdf = (filename, PSTResourceId) => {
    pdfUrl.value = '/pdf/web/viewer.html?file=/local-resource/file/' + filename + '?pstresourceid=' + PSTResourceId;
    window.open(pdfUrl.value)
}

const getType = () => {
    if (biggestRate.value >= 80) {
        return "danger"
    }
    if (biggestRate.value >= 50) {
        return "warning"
    }
    return "primary"
}
</script>
<style scoped></style>