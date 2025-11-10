<template>
    <div class="rounded-lg border-l-4 border-blue-500 p-2">
        <div v-if="payload?.table" class="ist-theam scroll-mt-[80px] my-4">
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
                                <el-tooltip v-if="item.question" content="本列单元格数据填写后自动检查" placement="top"
                                    effect="light">
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
                            <div :id="cell.id" v-if="cell.isNeedInput"
                                class="flex flex-row justify-between items-center">
                                <div :class="payload.table.tableHeader[j].question ? 'w-[calc(100%-40px)]' : ''">
                                    <div v-if="cell.isAutoGet">
                                        <el-input readonly v-model="cell.stuVlaue" :title="cell.stuVlaue">
                                            <!-- <template #append>
                                                <button :class="'text-gay-500 cursor-not-allowed'" disabled>获取</button>
                                            </template> -->
                                        </el-input>
                                    </div>
                                    <div v-else>
                                        <el-input v-model="cell.stuVlaue" readonly :title="cell.stuVlaue"></el-input>
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
                                            <textpreview
                                                :content="payload.table.tableHeader[j].question.hintWhenWrong" />
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
        </div>
        <div class="flex justify-end items-center space-x-2">
            <span>X轴：</span>
            <el-select v-model="tracneline.xIndex" placeholder="选择横轴" disabled style="width: 120px;">
                <el-option v-for="col in colLen" :label="`第 ${col} 列`" :value="col" />
            </el-select>
            <span>Y轴：</span>
            <el-select v-model="tracneline.yIndex" placeholder="选择纵轴" disabled style="width: 120px;">
                <el-option v-for="col in colLen" :label="`第 ${col} 列`" :value="col" />
            </el-select>

            <span>连线顺序：</span>
            <el-select v-model="tracneline.order" placeholder="选择连线顺序" disabled style="width: 120px;">
                <el-option label="表格数据顺序" value='' />
                <el-option label="沿X轴方向" value='x' />
                <el-option label="沿Y轴方向" value='y' />
            </el-select>
            <el-button type="primary" size="small" @click="handelTraceLine">绘图</el-button>
        </div>
        <div ref="chartRef" class="border mt-4" style="height: 400px;"></div>
        <score-read-over :component="comp" />
    </div>

</template>

<script setup lang="ts">
import * as echarts from 'echarts';
import scoreReadOver from './scoreReadOver.vue';
import textpreview from '@/components/textPreview.vue';

const props = defineProps({
    index: Number,
    comp: Object,
})

const tracneline = ref()
tracneline.value = props.comp.payload.tracneline

const colLen = computed(() => {
    return props.comp.payload.table.col
})

const compNotComplete = computed(() => {
    return props.comp.status == 0
})

const chartRef = ref(null)

let myChart = null
let resizeObserver = null;

const initChart = () => {
    if (!compNotComplete.value && myChart == null && chartRef.value) {
        myChart = echarts.init(chartRef.value)

        // Observe container resize events
        resizeObserver = new ResizeObserver(entries => {
            for (let entry of entries) {
                const { width, height } = entry.contentRect;
                if (width > 0 && height > 0 && myChart) {
                    // Container became visible, resize chart
                    myChart.resize();
                }
            }
        });
        resizeObserver.observe(chartRef.value);
    }
}

const handelTraceLine = () => {
    let isLog = props.comp.payload.tracneline.coordinateIsLog

    let table = props.comp.payload.table
    let tableRow = table.tableRow
    let row = table.row
    let col = table.col

    let chartOption = tracneline.value
    let xIndex = chartOption.xIndex - 1
    let yIndex = chartOption.yIndex - 1

    // Create data array without headers for sorting
    let rawData = []
    for (let i = 0; i < row; i++) {
        let rowArray = []
        if (tableRow[i][xIndex].stuVlaue == '' || tableRow[i][yIndex].stuVlaue == '') {
            // 过滤实验数据
            continue
        } else {
            rowArray.push(+tableRow[i][xIndex].stuVlaue, +tableRow[i][yIndex].stuVlaue)
        }

        rawData.push(rowArray)
    }

    // Apply sorting based on order parameter
    if (chartOption.order === 'x') {
        rawData.sort((a, b) => a[0] - b[0])
    } else if (chartOption.order === 'y') {
        rawData.sort((a, b) => a[1] - b[1])
    }

    // Create header row with column names
    let headerRow = ['列1', '列2']

    // Combine header and sorted data
    let tableArray = [headerRow, ...rawData]

    // console.log(tableArray)

    initChart()

    if (myChart) {
        // Determine axis types based on isLog value
        const xAxisType = isLog ? 'log' : 'value'
        const yAxisType = isLog ? 'log' : 'value'

        let option = {
            title: {
                show: false,
                text: '',
            },
            dataset: {
                source: tableArray
            },
            xAxis: {
                name: 'x 轴',
                type: xAxisType,
                axisLine: {
                    symbol: ['none', 'arrow'],  // 只在轴线末端显示箭头
                    symbolSize: [10, 15],       // 箭头大小
                }
            },
            yAxis: {
                name: 'y 轴',
                type: yAxisType,
                axisLine: {
                    symbol: ['none', 'arrow'],  // 只在轴线末端显示箭头
                    symbolSize: [10, 15],       // 箭头大小
                }
            },
            series: [
                {
                    type: 'line',
                    smooth: true,
                    encode: {
                        x: 0, // 因为先push xZindx 所以是0
                        y: 1, // 因为后push yZindx 所以是1
                    },
                }
            ]
        }
        // console.log(option)
        myChart.setOption(option)
    }
}

const handleChange = () => {
    let payloadStr = JSON.stringify(props.comp.payload)
}

const payload = ref()
onMounted(() => {
    payload.value = props.comp.payload
    // console.log(props.comp.payload.table)
})

onMounted(() => {
    initChart()
    handelTraceLine()
})

onUnmounted(() => {
    if (resizeObserver) {
        resizeObserver.disconnect();
    }
    if (myChart) {
        myChart.dispose();
    }
})

</script>

<style lang="scss" scoped>
.chart-option-item {
    @apply mr-4;
}
</style>