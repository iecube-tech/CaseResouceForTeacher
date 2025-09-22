<template>
    <div v-if="payload?.table" class="ist-theam scroll-mt-[80px] my-4 rounded-lg border-l-4 border-blue-500">
        <table>
            <thead>
                <tr v-if="payload.table.tableName">
                    <th :colspan="payload.table.tableHeader.length">
                        <textpreview :content="payload.table.tableName"></textpreview>
                    </th>
                </tr>
                <tr>
                    <th v-for="(item, i) in payload.table.tableHeader">
                        <div class="flex flex-row justify-between">
                            <textpreview :content="item.value"></textpreview>
                            <el-tooltip v-if="item.question" content="本列单元格数据填写后自动检查" placement="top" effect="light">
                                <button class="text-blue-400">
                                    <font-awesome-icon icon="fa-solid fa-circle-info" />
                                </button>
                            </el-tooltip>
                        </div>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(row, i) in payload.table.tableRow">
                    <td v-for="(cell, j) in payload.table.tableRow[i]">
                        <div :id="cell.id" v-if="cell.isNeedInput" class="flex flex-row justify-between items-center">
                            <div :class="payload.table.tableHeader[j].question ? 'w-[calc(100%-40px)]' : ''">
                                <div v-if="cell.isAutoGet">
                                    <el-input readonly v-model="cell.stuVlaue">
                                        <template #append>
                                            <button :class="'text-gay-500 cursor-not-allowed'" disabled>获取</button>
                                        </template>
                                    </el-input>
                                </div>
                                <div v-else>
                                    <el-input v-model="cell.stuVlaue" readonly></el-input>
                                </div>
                            </div>
                            <div v-if="payload.table.tableHeader[j].question">
                                <div v-if="cell.stuVlaue">
                                    <el-popover v-if="cell.result?.score == 0" placement="top-start" :width="200"
                                        trigger="hover">
                                        <template #reference>
                                            <button class="text-red-400">
                                                <font-awesome-icon icon="fa-solid fa-circle-exclamation" />
                                            </button>
                                        </template>
                                        <textpreview :content="payload.table.tableHeader[j].question.hintWhenWrong" />
                                    </el-popover>
                                    <button v-else-if="cell.result?.score > 0" class="text-emerald-400">
                                        <font-awesome-icon icon="fa-solid fa-circle-check" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div v-else>
                            <textpreview :content="cell.value"></textpreview>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
        <score-read-over :component="comp" />
    </div>
</template>

<script setup lang="ts">
import scoreReadOver from './scoreReadOver.vue'
import textpreview from '@/components/textPreview.vue';

const props = defineProps({
    comp: Object,
    status: { type: Boolean, default: false },
})


// console.log(props.comp)

const payload = ref()



onMounted(() => {
    payload.value = props.comp.payload
    // console.log(props.comp.payload.table)
})
</script>
<style scoped></style>