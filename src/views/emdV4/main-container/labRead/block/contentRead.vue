<template>
    <div v-html="htmlStr"></div>
</template>

<script setup lang="ts">
import { GetBlockDetail } from '@/apis/e-md/block/getBlockDetail.js'

import {parseHtml}  from '@/utils/htmlTools.js'
import { pa } from 'element-plus/es/locale'
const props = defineProps({
    blockId: Number,
})

const htmlStr = ref('')
const init = () => {
    GetBlockDetail(props.blockId).then(res => {
        if (res.state == 200) {
            let payload = JSON.parse(res.data.payload)
            htmlStr.value = parseHtml(payload.question.content)
            console.log(htmlStr.value)
        }
        else {
            ElMessage.error("数据加载失败")
        }
    })
}


onMounted(() => {
    init()
})


</script>
<style scoped></style>