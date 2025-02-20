<template>
    <div class="table-edit" @blur="saveCompose">
        <div ref="tableConf" class="table-conf">
            <div class="table-conf-item" style="display: flex; flex-direction: row; justify-content: center;">
                <h3>表格配置</h3>
            </div>
            <div class="table-conf-item">
                <el-input class="content-input" type="textarea" autosize v-model="blockDetail.content"
                    @change="blockContentChange" placeholder="表格必要说明内容,支持mnarkdown语法,可不填"></el-input>
            </div>

            <div class="table-conf-item">
                <el-input class="table-tilte-input" v-model="ConfData.title" placeholder="表名,支持mnarkdown语法,可不填">

                </el-input>
            </div>

            <div class="table-conf-item " style="width: 240px;">
                <el-form-item :label="'行数：' + ConfData.rowNum">
                    <el-button circle :icon="Minus" size="small" @click="delRow"></el-button>
                    <el-button circle :icon="Plus" size="small" @click="addRow"></el-button>
                </el-form-item>
            </div>

            <div class="table-conf-item " style="width: 240px;">
                <el-form-item :label="'列数：' + ConfData.colNum">
                    <el-button circle :icon="Minus" size="small" @click="delCol"></el-button>
                    <el-button circle :icon="Plus" size="small" @click="addCol"></el-button>
                </el-form-item>
            </div>
        </div>
        <div class="table-conf-fold">
            <el-button v-if="ConfData.openConfDiv" link :icon="ArrowUpBold" @click="configDivClose"></el-button>
            <el-button v-else link :icon="ArrowDownBold" @click="configDivOpen"></el-button>
        </div>
        <div class="table-show">
            <div class="table-show-content" v-if="blockDetail.content !== '' && blockDetail.content !== null">
                <emdPreview :id="'table-view-' + blockId" :content="blockDetail.content.toString()"></emdPreview>
            </div>
            <div class="table-show-title" v-if="ConfData.title !== '' && ConfData.title !== null">
                <emdPreview :id="'table-title-view-' + blockId" :content="ConfData.title.toString()"></emdPreview>
            </div>
            <table class="table-show-full">
                <tbody>
                    <tr v-for="rowIndex in ConfData.rowNum">
                        <td v-for="colIndex in ConfData.colNum">
                            <div class="cell" v-if="ConfData.tableData[rowIndex - 1][colIndex - 1]">
                                <div class="cell-data">
                                    <div
                                        v-if="ConfData.tableData[rowIndex - 1][colIndex - 1].itemType == TableItemType.Show">
                                        <emdPreview
                                            :id="'value-priview-' + ConfData.tableData[rowIndex - 1][colIndex - 1].id"
                                            :content="ConfData.tableData[rowIndex - 1][colIndex - 1].value.toString()">
                                        </emdPreview>
                                    </div>
                                    <div v-else>
                                        <div v-if="ConfData.tableData[rowIndex - 1][colIndex - 1].autoData">
                                            <el-button>获取数据</el-button>
                                        </div>
                                        <div v-else>
                                            <div
                                                v-if="ConfData.tableData[rowIndex - 1][colIndex - 1].valueType == ValueType.String">
                                                <el-input></el-input>
                                            </div>
                                            <div v-else>
                                                <el-input-number controls-position="right"></el-input-number>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="cell-conf" v-if="ConfData.openConfDiv">
                                    <el-popover :width="300" trigger="click">
                                        <template #reference>
                                            <el-button size="small" :icon="More"></el-button>
                                        </template>
                                        <template #default>
                                            <div class="cell-conf-list">
                                                <el-row class="cell-conf-item" style="justify-content: center;">
                                                    {{ rowIndex }}行{{ colIndex }}列
                                                </el-row>
                                                <el-row class="cell-conf-item">
                                                    <span>展示为：</span>
                                                    <el-switch size="small" active-text="编辑栏" inactive-text="静态"
                                                        inline-prompt
                                                        v-model="ConfData.tableData[rowIndex - 1][colIndex - 1].itemType" />
                                                </el-row>
                                                <el-row class="cell-conf-item">
                                                    <span>获取数据方式：</span>
                                                    <el-switch size="small" active-text="自动获取" inactive-text="输入"
                                                        :disabled="!ConfData.tableData[rowIndex - 1][colIndex - 1].itemType"
                                                        v-model="ConfData.tableData[rowIndex - 1][colIndex - 1].autoData" />
                                                </el-row>
                                                <el-row class="cell-conf-item">
                                                    <span>输入/获取的数据类型：</span>
                                                    <el-radio-group
                                                        v-model="ConfData.tableData[rowIndex - 1][colIndex - 1].valueType"
                                                        :disabled="!ConfData.tableData[rowIndex - 1][colIndex - 1].itemType">
                                                        <el-radio :label="ValueType.String" size="small">文本</el-radio>
                                                        <el-radio :label="ValueType.Number" size="small">数字</el-radio>
                                                    </el-radio-group>
                                                </el-row>
                                                <el-row class="cell-conf-item">
                                                    <span>静态值:</span>
                                                    <el-input type="textarea" size="small" autosize
                                                        :disabled="ConfData.tableData[rowIndex - 1][colIndex - 1].itemType"
                                                        v-model="ConfData.tableData[rowIndex - 1][colIndex - 1].value"></el-input>
                                                </el-row>
                                            </div>
                                        </template>
                                    </el-popover>
                                </div>
                                <div class="cell-ref"
                                    v-if="ConfData.openRefDiv && ConfData.tableData[rowIndex - 1][colIndex - 1].itemType">
                                    <el-button size="small" :icon="Setting"
                                        :style="{ backgroundColor: ConfData.tableData[rowIndex - 1][colIndex - 1].id === seclectItem.id ? 'var(--el-color-success)' : '' }"
                                        @click="setItemRef('table', rowIndex - 1, colIndex - 1, ConfData.tableData[rowIndex - 1][colIndex - 1].id)">
                                    </el-button>
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="chart-show">
            <div class="chart-tool">
                <el-form-item label="横轴">
                    <el-select v-model="ReferenceData.chartData.xname" placeholder="选择横轴" disabled>
                        <el-option v-for="(item, j) in ConfData.tableData[0]"
                            :label="'第' + (j + 1) + '列--' + item.value" :value="j" />
                    </el-select>
                </el-form-item>
                <el-form-item label="纵轴">
                    <el-select v-model="ReferenceData.chartData.yname" placeholder="选择纵轴" disabled>
                        <el-option v-for="(item, j) in ConfData.tableData[0]"
                            :label="'第' + (j + 1) + '列--' + item.value" :value="j" />
                    </el-select>
                </el-form-item>
                <el-form-item label="连线顺序">
                    <el-select v-model="ReferenceData.chartData.lineOrder" placeholder="选择连线顺序" disabled>
                        <el-option label="表格数据顺序" value='' />
                        <el-option label="沿横轴方向" value='x' />
                        <el-option label="沿纵轴方向" value='y' />
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" size="small"
                        @click="ElMessage.warning('仅为页面预览效果，在值预设中设置参考值')">绘图</el-button>
                </el-form-item>
                <el-form-item v-if="ConfData.openRefDiv">
                    <el-button size="small" :icon="Setting"
                        :style="{ backgroundColor: ReferenceData.chartData.id === seclectItem.id ? 'var(--el-color-success)' : '' }"
                        @click="setItemRef('chart', 999, 999, ReferenceData.chartData.id)">
                    </el-button>
                </el-form-item>
            </div>
            <div class="chart-echart">
                <div :id="generateCellId(blockId, 999, 999)" style="width: 100%; min-height: 300px;">

                </div>
            </div>
        </div>
        <div class="value-reference-fold">
            <el-button v-if="ConfData.openRefDiv" link :icon="ArrowUpBold" @click="refDivClose"></el-button>
            <el-button v-else link :icon="ArrowDownBold" @click="refDivOpen"></el-button>
        </div>
        <div ref="itemRef" class="value-reference">
            <div class="value-reference-main">
                <div v-if="seclectItem.type === 'table' && seclectItem.row != null" class="value-reference-item">
                    <el-form-item :label="(seclectItem.row + 1) + '行' + (seclectItem.col + 1) + '列'">
                    </el-form-item>
                    <el-form-item label="参考值：">
                        <el-input size="small"
                            v-model="ReferenceData.tableData[seclectItem.row][seclectItem.col].value"></el-input>
                    </el-form-item>
                    <el-form-item label="最小值：">
                        <el-input-number size="small"
                            v-model="ReferenceData.tableData[seclectItem.row][seclectItem.col].minVal"></el-input-number>
                    </el-form-item>
                    <el-form-item label="最大值：">
                        <el-input-number size="small"
                            v-model="ReferenceData.tableData[seclectItem.row][seclectItem.col].maxVal"></el-input-number>
                    </el-form-item>
                </div>
                <div v-else-if="seclectItem.type === 'chart'" class="value-reference-item">
                    <el-form-item label="横轴">
                        <el-select v-model="ReferenceData.chartData.xname" placeholder="选择横轴">
                            <el-option v-for="(item, j) in ConfData.tableData[0]"
                                :label="'第' + (j + 1) + '列--' + item.value" :value="j" />
                        </el-select>
                    </el-form-item>
                    <el-form-item label="纵轴">
                        <el-select v-model="ReferenceData.chartData.yname" placeholder="选择纵轴">
                            <el-option v-for="(item, j) in ConfData.tableData[0]"
                                :label="'第' + (j + 1) + '列--' + item.value" :value="j" />
                        </el-select>
                    </el-form-item>
                    <el-form-item label="连线顺序">
                        <el-select v-model="ReferenceData.chartData.lineOrder" placeholder="选择连线顺序">
                            <el-option label="表格数据顺序" value='' />
                            <el-option label="沿横轴方向" value='x' />
                            <el-option label="沿纵轴方向" value='y' />
                        </el-select>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" size="small" @click="loadChartOption">绘图</el-button>
                    </el-form-item>
                </div>
                <div class="value-reference-item">

                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onBeforeMount, onMounted, ref } from 'vue';
import { BlockDetail, confData, referenceData, ValueType, TableItemType, getOutline, generateCellId } from './block';
import { Minus, Plus, More, Setting, ArrowUpBold, ArrowDownBold } from '@element-plus/icons-vue';
import emdPreview from '../emdPreview/emdPreview.vue';
import { ElMessage } from 'element-plus';
import { UpdateBlockDetail } from '@/apis/e-md/block/updateBlockDetail.js';
import { GetBlockDetail } from '@/apis/e-md/block/getBlockDetail.js';
import * as echarts from 'echarts';
const props = defineProps({
    blockId: Number
})

const tableConf = ref()
const itemRef = ref()

const ConfData = ref<confData>({
    openConfDiv: false,
    openRefDiv: false,
    rowNum: 1,
    colNum: 0,
    title: '',
    tableData: [[]]
})

const ReferenceData = ref({
    tableData: <referenceData[][]>[[]],
    chartData: {
        id: generateCellId(props.blockId, 999, 999),
        xname: null,
        xmin: null,
        xmax: null,
        xType: 'value',
        yname: null,
        ymin: null,
        ymax: null,
        yType: 'value',
        x: [],
        y: [],
        trace: [], // 按顺序描点连线[[x,y]]
        lineOrder: ''
    }
})

const seclectItem = ref({
    type: '',
    row: null,
    col: null,
    id: ''
})

const blockDetail = ref<BlockDetail>({
    id: 0,
    parentId: 0,
    type: '',
    title: '',
    content: '',
    catalogue: '',
    confData: '',
    referenceData: '',
    dataTemplate: ''
})

const initConfigDiv = () => {
    if (ConfData.value.openConfDiv) {
        const height = tableConf.value.scrollHeight;
        //console.log(height)
        tableConf.value.style.maxHeight = `${height}px`;
        tableConf.value.style.opacity = '1';
    } else {
        tableConf.value.style.maxHeight = '0'
        tableConf.value.style.opacity = '0'
    }

}

const configDivClose = () => {
    tableConf.value.style.maxHeight = '0';
    tableConf.value.style.opacity = '0';
    ConfData.value.openConfDiv = false
    // 保存 confData
    saveCompose()
}

const configDivOpen = () => {
    refDivClose()  // 关闭值预设
    const height = tableConf.value.scrollHeight;
    tableConf.value.style.maxHeight = '0';
    tableConf.value.style.opacity = '0';
    setTimeout(() => {
        tableConf.value.style.maxHeight = `${height}px`;
        tableConf.value.style.opacity = '1';
        ConfData.value.openConfDiv = true
    }, 10);
}

const initRefDiv = () => {
    if (ConfData.value.openRefDiv) {
        const height = itemRef.value.scrollHeight;
        itemRef.value.style.maxHeight = `${height}px`;
        itemRef.value.style.opacity = '1';
    } else {
        itemRef.value.style.maxHeight = '0'
        itemRef.value.style.opacity = '0'
    }
}

const refDivOpen = () => {
    configDivClose() //折叠表配置div
    const height = itemRef.value.scrollHeight;
    itemRef.value.style.maxHeight = '0';
    itemRef.value.style.opacity = '0';
    setTimeout(() => {
        itemRef.value.style.maxHeight = `${height}px`;
        itemRef.value.style.opacity = '1';
        ConfData.value.openRefDiv = true
    }, 10);
}

const refDivClose = () => {
    itemRef.value.style.maxHeight = '0';
    itemRef.value.style.opacity = '0';
    ConfData.value.openRefDiv = false
    saveCompose()
    // 保存 refData
}

const blockContentChange = () => {
    blockDetail.value.catalogue = JSON.stringify(getOutline(blockDetail.value.content))
}

const addRow = () => {
    // //console.log(ConfData.value.tableData)
    let newRow = []
    let newRefRow = []
    for (let col = 0; col < ConfData.value.colNum; col++) {
        const cell = {
            itemType: TableItemType.Show,
            id: generateCellId(props.blockId, ConfData.value.rowNum, col),
            autoData: false,
            valueType: ValueType.String,
            value: ''
        }
        const refData = {
            id: generateCellId(props.blockId, ConfData.value.rowNum, col),
            row: ConfData.value.rowNum,
            col: col,
            value: null,
            maxVal: null,
            minVal: null,
            stuVal: null,
        }
        newRow.push(JSON.parse(JSON.stringify(cell)))
        newRefRow.push(JSON.parse(JSON.stringify(refData)))
    }
    ConfData.value.tableData.push(newRow)
    ReferenceData.value.tableData.push(newRefRow)
    ConfData.value.rowNum++
    //console.log('add r')
    //console.log(ConfData.value)
    //console.log(ReferenceData.value)
}

const delRow = () => {
    if (ConfData.value.rowNum <= 1) {
        return
    }
    ConfData.value.rowNum--
    ConfData.value.tableData.pop()
    ReferenceData.value.tableData.pop()
    //console.log('del r')
    //console.log(ConfData.value)
    //console.log(ReferenceData.value)
}

const addCol = () => {
    for (let row = 0; row < ConfData.value.rowNum; row++) {
        const cell = {
            itemType: TableItemType.Show,
            id: generateCellId(props.blockId, row, ConfData.value.colNum),
            autoData: false,
            valueType: ValueType.String,
            value: ''
        }
        const refData = {
            id: generateCellId(props.blockId, row, ConfData.value.colNum),
            row: row,
            col: ConfData.value.colNum,
            value: null,
            maxVal: null,
            minVal: null,
            stuVal: null, // 学生输入
        }
        //console.log("push" + row)
        ConfData.value.tableData[row].push(JSON.parse(JSON.stringify(cell)))
        ReferenceData.value.tableData[row].push(JSON.parse(JSON.stringify(refData)))
    }
    ConfData.value.colNum++
    //console.log('add c')
    //console.log(ConfData.value)
    //console.log(ReferenceData.value)
}

const delCol = () => {
    if (ConfData.value.colNum <= 0) {
        return
    }
    ConfData.value.colNum--
    for (let row = 0; row < ConfData.value.rowNum; row++) {
        ConfData.value.tableData[row].pop()
        ReferenceData.value.tableData[row].pop()
    }
    //console.log('del c')
    //console.log(ConfData.value)
    //console.log(ReferenceData.value)
}

const setItemRef = (type: string, row: number, col: number, id: string) => {
    seclectItem.value.type = type
    if (type == 'table') {
        seclectItem.value.row = row
        seclectItem.value.col = col
        seclectItem.value.id = id
    }
    if (type == 'chart') {
        seclectItem.value.id = id
    }

}

let traceLineChart = null
const initChats = () => {
    let id = generateCellId(props.blockId, 999, 999)
    if (traceLineChart == null) {
        traceLineChart = echarts.init(document.getElementById(id))
    }
    window.addEventListener('resize', function () {
        if (traceLineChart) {
            console.log('resize')
            traceLineChart.resize()
        }
    })
    window.addEventListener('popstate', function () {
        if (traceLineChart) {
            traceLineChart.dispose()
            traceLineChart = null
        }
    })

    setTimeout(() => {
        if (ReferenceData.value.chartData.x.length > 0 && ReferenceData.value.chartData.y.length > 0) {
            //console.log('渲染')
            setCharts(ReferenceData.value.chartData)
        } else {
            //console.log('不渲染')
        }
    }, 5000)
}

const setCharts = (value: any) => {
    let option = {
        tooltip: {
            formatter: function (params) {
                var data = params.data || [0, 0];
                return data[0].toFixed(2) + ', ' + data[1].toFixed(2);
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            min: value.xmin,
            max: value.xmax,
            type: value.xType,
        },
        yAxis: {
            min: value.ymin,
            max: value.ymax,
            type: value.yType,
        },
        series: [
            {
                id: 'a',
                type: 'line',
                smooth: true,
                symbolSize: 10,
                data: value.trace
            }
        ]
    };
    if (traceLineChart != null) {
        traceLineChart.setOption(option)
    } else {
        ElMessage.error("绘图区加载失败")
    }
}

const loadChartOption = () => {
    if (ReferenceData.value.chartData.yname == null || ReferenceData.value.chartData.xname == null) {
        ElMessage.error("请选择数据源")
        return
    }
    //初始化数据
    ReferenceData.value.chartData.xmin = null
    ReferenceData.value.chartData.xmax = null
    ReferenceData.value.chartData.xType = 'value'
    ReferenceData.value.chartData.ymin = null
    ReferenceData.value.chartData.ymax = null
    ReferenceData.value.chartData.yType = 'value'
    ReferenceData.value.chartData.x = []
    ReferenceData.value.chartData.y = []
    ReferenceData.value.chartData.trace = [] // 按顺序描点连线[[x,y]]

    let x = ReferenceData.value.chartData.xname
    let y = ReferenceData.value.chartData.yname
    let xIsNaN = []
    let yIsNaN = []
    //处理横轴数据
    for (let i = 1; i < ConfData.value.tableData.length; i++) {
        let ix = ConfData.value.tableData[i][x]
        let x_v
        if (ix.itemType == TableItemType.Edit) {
            x_v = ReferenceData.value.tableData[i][x].value
        }
        if (ix.itemType == TableItemType.Show) {
            x_v = ConfData.value.tableData[i][x].value
        }

        if (isNaN(x_v)) {//不是一个number  是个字符串
            xIsNaN.push(true)
            ReferenceData.value.chartData.x.push(x_v)
        } else {
            if (x_v.trim() === '') {
                xIsNaN.push(true)
                ReferenceData.value.chartData.x.push('')
            } else {
                xIsNaN.push(false)
                ReferenceData.value.chartData.x.push(Number(<any>x_v))
            }
        }
    }
    if (xIsNaN.includes(true)) {
        ReferenceData.value.chartData.xType = 'category'
    } else {
        ReferenceData.value.chartData.xmax = Math.max.apply(null, ReferenceData.value.chartData.x);
        ReferenceData.value.chartData.xmin = Math.min.apply(null, ReferenceData.value.chartData.x);
    }

    //处理y
    for (let i = 1; i < ConfData.value.tableData.length; i++) {
        let iy = ConfData.value.tableData[i][y]
        let y_v
        if (iy.itemType == TableItemType.Edit) {
            y_v = ReferenceData.value.tableData[i][y].value
        }
        if (iy.itemType == TableItemType.Show) {
            y_v = ConfData.value.tableData[i][y].value
        }

        if (isNaN(y_v)) {//不是一个number  是个字符串
            xIsNaN.push(true)
            ReferenceData.value.chartData.y.push(y_v)
        } else {
            if (y_v.trim() === '') {
                xIsNaN.push(true)
                ReferenceData.value.chartData.y.push('')
            } else {
                xIsNaN.push(false)
                ReferenceData.value.chartData.y.push(Number(<any>y_v))
            }
        }
    }

    if (yIsNaN.includes(true)) {
        ReferenceData.value.chartData.yType = 'category'
    } else {
        ReferenceData.value.chartData.ymax = Math.max.apply(null, ReferenceData.value.chartData.y)
        ReferenceData.value.chartData.ymin = Math.min.apply(null, ReferenceData.value.chartData.y)
    }

    let minLength = Math.min(ReferenceData.value.chartData.x.length, ReferenceData.value.chartData.y.length)

    // 处理trace
    for (let i = 0; i < minLength; i++) {
        ReferenceData.value.chartData.trace.push([ReferenceData.value.chartData.x[i], ReferenceData.value.chartData.y[i]])
    }

    if (ReferenceData.value.chartData.lineOrder == 'x') {
        ReferenceData.value.chartData.trace.sort((a, b) => a[0] - b[0])
    }

    if (ReferenceData.value.chartData.lineOrder == 'y') {
        ReferenceData.value.chartData.trace.sort((a, b) => a[1] - b[1])
    }

    setCharts(ReferenceData.value.chartData)
}

const getBlockDetail = () => {
    if (!props.blockId) {
        ElMessage.warning("未知的块id")
        return
    }
    GetBlockDetail(props.blockId).then(res => {
        if (res.state == 200) {
            blockDetail.value = res.data
            if (blockDetail.value.confData !== null && blockDetail.value.confData.length !== 0) {
                ConfData.value = JSON.parse(blockDetail.value.confData)
            }
            if (blockDetail.value.referenceData !== null && blockDetail.value.referenceData.length !== 0) {
                ReferenceData.value = JSON.parse(blockDetail.value.referenceData)
                //console.log('re')
                //console.log(ReferenceData.value)
            }
        }
        else {
            ElMessage.error("数据加载失败")
        }
    })
}

const saveCompose = () => {
    if (!props.blockId) {
        ElMessage.warning("未知的块id")
        return
    }
    //console.log('save')
    //console.log(ConfData.value)
    //console.log(ReferenceData.value)
    blockDetail.value.confData = JSON.stringify(ConfData.value)
    blockDetail.value.referenceData = JSON.stringify(ReferenceData.value)
    blockDetail.value.dataTemplate = JSON.stringify(ReferenceData.value)
    //console.log(blockDetail.value)
    UpdateBlockDetail(blockDetail.value).then(res => {
        if (res.state != 200) {
            ElMessage.error("保存数据失败 " + res.message)
        }
    })
}

onMounted(() => {
    initConfigDiv()
    initRefDiv()
    initChats()
})

onBeforeMount(() => {
    getBlockDetail()
})

</script>
<style scoped>
.table-edit {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
    background-color: #FAFCFF;
}

.table-conf {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    /* 设置过渡效果 */
    transition: max-height 0.5s ease-in-out, opacity 0.5s ease-in-out;
}

.table-conf-item {
    padding: 20px 20px;
}

.table-conf-fold {
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: var(--el-color-primary-light-9);
}

.table-conf-fold button {
    width: 100%;
}

.table-show {
    display: flex;
    flex-direction: column;
    padding: 20px 20px;
}

.table-show table {
    width: 100%;
    /* 使表格宽度铺满屏幕 */
    border-collapse: collapse;
    /* 合并相邻单元格的边框 */
}

.table-show table td {
    border: 1px solid #ccc;
    /* 为表头和单元格添加边框 */
    padding: 8px;
    /* 为表头和单元格添加内边距，使内容有一定的间距 */
    text-align: left;
    /* 文本左对齐 */
}

.table-show-title {
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.table-show-full {
    /* opacity: 0; */
    transition: opacity 0.5s;
}


.cell {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.cell-data {
    flex: 1;
}

.cell-conf-item {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.value-reference-fold {
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: var(--el-color-success-light-9);
}

.value-reference-fold button {
    width: 100%;
}

.value-reference {
    display: flex;
    flex-direction: row;
    overflow: hidden;
    /* 设置过渡效果 */
    transition: max-height 0.5s ease-in-out, opacity 0.5s ease-in-out;

    padding: 20px;
}

.value-reference-main {
    flex: 1;
    height: 300px;
    display: flex;
    flex-direction: row;
    border: 1px solid #ccc;
}

.value-reference-main .value-reference-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
}

.chart-show {
    display: flex;
    flex-direction: column;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
}

.chart-tool {
    width: 100%;
    display: flex;
    flex-direction: row;
}

.chart-echart {
    width: 100%;
}

.chart-tool div {
    padding: 0 20px;
    flex: 1
}

.chart-tool .el-select {
    max-width: 300px;
}
</style>