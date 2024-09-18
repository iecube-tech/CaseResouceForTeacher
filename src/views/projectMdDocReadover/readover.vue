<template>
    <div>
        <div class="page-header" :class="headerClass">
            <nav>
                <div class="header" v-if="currentIndex >= 0">
                    <div style="width: 80px">
                        <el-button link type="primary" :icon="Back" @click="back()">返回</el-button>
                    </div>
                    <div style="width: 220px">

                    </div>
                    <div class="title student_report_item" style="flex: 1; text-align: center; font-size: 24px">
                        <span>
                            {{
                                thisProjectPstBaseList[currentIndex].studentId + "_" +
                                thisProjectPstBaseList[currentIndex].studentName + "："
                            }}
                        </span>
                        <span>{{ thisProjectPstBaseList[currentIndex].taskName }}</span>
                        <span v-if="thisProjectPstBaseList[currentIndex].status <= 1"
                            style="color: var(--el-color-warning)">
                            _尚未提交
                        </span>
                        <span v-else-if="thisProjectPstBaseList[currentIndex].status == 2"
                            style="color: var(--el-color-warning)">
                            _待批阅
                        </span>
                        <span v-else style="color: var(--el-color-success)">
                            {{ "_" + thisProjectPstBaseList[currentIndex].grade + "分" }}
                        </span>
                    </div>
                    <div class="right_title">
                        <!-- <span>{{ thisProjectPstBaseList[currentIndex].studentId + ' - ' +
                            thisProjectPstBaseList[currentIndex].studentName }}</span> -->
                        <el-select v-model="currentIndex" placeholder="Select" style="width:300px"
                            @change="changeCurrentIndex">
                            <el-option v-for="(item, i) in thisProjectPstBaseList" :key="item.pstId" :value="i"
                                :label="item.taskNum + '.' + item.taskName + '-' + item.studentName">
                                <span style="float: left">
                                    {{ item.taskNum + '.' + item.taskName + '-' + item.studentName }}
                                </span>
                                <span v-if="item.status == 3"
                                    style=" float: right; color: var(--el-color-success); font-size: 13px; ">
                                    {{ item.grade }}
                                </span>
                                <span v-else-if="item.status <= 1"
                                    style=" float: right; color: var(--el-color-warning); font-size: 13px; ">
                                    <el-icon>
                                        <Loading />
                                    </el-icon>
                                </span>
                                <span v-else style=" float: right; color: var(--el-color-success); font-size: 13px; ">
                                    <el-icon>
                                        <Loading />
                                    </el-icon>
                                </span>
                            </el-option>
                        </el-select>
                    </div>
                </div>
            </nav>
        </div>
        <div style="padding-top: 5em; min-height: 100vh">
            <div v-if="composeList">
                <el-row v-for="(item, i) in composeList">
                    <div style="flex:1; border-right: 1px solid gray; padding: 2em 0;">
                        <ComposeDetail :compose=item :is-answer="true"></ComposeDetail>
                    </div>
                    <div style="flex:1; padding: 2em 0;" class="student_report_item">
                        <ComposeDetail :compose=item :is-answer="false"></ComposeDetail>
                    </div>
                </el-row>
            </div>
        </div>
        <div style="width: 100%; display: flex; flex-direction: row; padding-bottom: 30px">
            <div style="flex:1">

            </div>
            <div style="flex:1; display:flex; flex-direction: row; justify-content: center; ">
                <el-button v-if="thisProjectPstBaseList[currentIndex].status >= 3" type="success"
                    @click="saveReadOver()">批阅完成</el-button>
                <el-button v-else type="primary" @click="saveReadOver()">批阅完成</el-button>
            </div>

        </div>

        <div>
            <div>
                <el-button title="上一个" type="primary" class="btn-left" @click="last()">
                    <el-icon>
                        <ArrowLeftBold />
                    </el-icon>
                </el-button>
                <el-button v-if="thisProjectPstBaseList[currentIndex].deviceId" title="学生仪器操作记录" type="primary"
                    class="btn-left2" @click="logOf3835()">
                    <el-icon>
                        <Document />
                    </el-icon>
                </el-button>
                <el-button title="下一个" type="primary" class="btn-right" @click="next()">
                    <el-icon>
                        <ArrowRightBold />
                    </el-icon>
                </el-button>
            </div>
        </div>

        <el-dialog v-model="logOf3835Dialog" width="70%" :before-close="handelBeforClose" destroy-on-close lock-scroll>
            <div id="chart_of_student_log" style="width: 100%; height: calc(70vh);">

            </div>
        </el-dialog>
    </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { onBeforeMount, onMounted, onUnmounted, ref } from 'vue';
import router from '@/router';
import { GetComposeListByPstId } from '@/apis/projectMdDocReadover/getComposeListByPstId.js';
import { GetPSTBaseList } from '@/apis/projectMdDocReadover/getPSts.js';
import { getLogVisualization } from '@/apis/iecubeDevice/pstLog/getPSTLogPrased.js'
import { PSTReadOver } from '@/apis/projectMdDocReadover/readOver.js'
import { ElMessage } from 'element-plus';
import { Back, ArrowLeftBold, ArrowRightBold, Loading, Document } from '@element-plus/icons-vue';
import ComposeDetail from './child/composeDetail.vue';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import * as echarts from 'echarts';

interface compose {
    id: number | null,
    pstId: number | null,
    pstArticleId: number | null,
    index: number | null,
    name: string,
    val: string,
    answer: string,
    score: number | null,
    result: number | null,
    status: number | null,
    subjective: boolean | null,
}

interface pstBaseDetail {
    pstId: number
    deviceId: number
    projectName: String
    taskNum: number
    taskName: String
    studentId: String
    studentName: String
    status: number
    grade: number
}

const route = useRoute()
const projectId = ref()
const pstId = ref()
// pst的内容
const composeList = ref<compose[]>()

//project的内容
const thisProjectPstBaseList = ref<pstBaseDetail[]>()
const currentIndex = ref()

//3835 log
const thisPstEchartLog = ref()

const init = () => {
    projectId.value = route.params.projectId
    pstId.value = route.params.pstId
}
const back = () => {
    router.push({
        name: 'ProjectDetail',
        params: { projectId: projectId.value }
    })
}

const dataInit = async () => {

    await GetComposeListByPstId(pstId.value).then(res => {
        if (res.state == 200) {
            composeList.value = res.data
        } else {
            ElMessage.error(res.message)
        }
    })

    await GetPSTBaseList(projectId.value).then(res => {
        if (res.state == 200) {
            thisProjectPstBaseList.value = res.data
            for (let i = 0; i < thisProjectPstBaseList.value.length; i++) {
                if (thisProjectPstBaseList.value[i].pstId == pstId.value) {
                    currentIndex.value = i
                    console.log('cur', currentIndex.value)
                    return
                }
            }
        }
        else {
            ElMessage.error(res.message)
        }
    })

    if (thisProjectPstBaseList.value[currentIndex.value].deviceId == 1) {
        await getLogVisualization(thisProjectPstBaseList.value[currentIndex.value].pstId).then(res => {
            if (res.state == 200) {
                thisPstEchartLog.value = res.data
            }
        })
    }
}

const updateComposeList = async (id) => {
    await GetComposeListByPstId(id).then(res => {
        if (res.state == 200) {
            composeList.value = res.data
        } else {
            ElMessage.error(res.message)
        }
    })
}

const updateThisPstEchartLog = async () => {
    if (thisProjectPstBaseList.value[currentIndex.value].deviceId == 1) {
        await getLogVisualization(thisProjectPstBaseList.value[currentIndex.value].pstId).then(res => {
            if (res.state == 200) {
                thisPstEchartLog.value = res.data
            }
        })
    }
}

const last = () => {
    if (currentIndex.value == 0) {
        ElMessage.warning("已是第一个")
        return
    }
    currentIndex.value--
    composeList.value = null
    updateComposeList(thisProjectPstBaseList.value[currentIndex.value].pstId)
    updateThisPstEchartLog()
    router.push({
        name: 'MdocReadover',
        params: { projectId: projectId.value, pstId: thisProjectPstBaseList.value[currentIndex.value].pstId }
    })
}
const next = () => {
    if (currentIndex.value >= thisProjectPstBaseList.value.length - 1) {
        ElMessage.warning("已是最后一个")
        return
    }
    currentIndex.value++
    composeList.value = null
    updateComposeList(thisProjectPstBaseList.value[currentIndex.value].pstId)
    updateThisPstEchartLog()
    router.push({
        name: 'MdocReadover',
        params: { projectId: projectId.value, pstId: thisProjectPstBaseList.value[currentIndex.value].pstId }
    })
}

const changeCurrentIndex = () => {
    composeList.value = null
    updateComposeList(thisProjectPstBaseList.value[currentIndex.value].pstId)
    router.push({
        name: 'MdocReadover',
        params: { projectId: projectId.value, pstId: thisProjectPstBaseList.value[currentIndex.value].pstId }
    })
}

const saveReadOver = () => {
    PSTReadOver(thisProjectPstBaseList.value[currentIndex.value].pstId).then(res => {
        if (res.state == 200) {
            thisProjectPstBaseList.value[currentIndex.value] = res.data
        } else {
            ElMessage.error(res.message)
        }
    })
}

const genReport = async () => {
    const elements = document.getElementsByClassName("student_report_item")
    // console.log(elements)

    const pdf = new jsPDF('p', 'pt', 'a4');
    let pageHeigth = pdf.internal.pageSize.height;// 页面的高度
    let pageWidth = pdf.internal.pageSize.width;// 页面的宽度
    let pageTopDistance = 10; //指针距离页面顶端的距离
    let pageMarginBottom = 10;
    for (let i = 0; i < elements.length; i++) {
        let canvas = await html2canvas(<any>elements[i], {
            logging: true,
            useCORS: true //允许canvas画布内可以跨域请求外部链接图片, 允许跨域请求。
        })
        let imgData = canvas.toDataURL('image/png', 1.0)
        if (canvas.height * pageWidth / canvas.width > pageHeigth - pageTopDistance - pageMarginBottom) { // 图像高度大于页面剩余高度
            pdf.addPage()
            pageTopDistance = 10
        }
        pdf.addImage(imgData, 'PNG', 0, pageTopDistance, pageWidth, canvas.height * pageWidth / canvas.width); // 数据， 图像， 0,0 width， height
        pageTopDistance += canvas.height * pageWidth / canvas.width
    }
    pdf.save("student.pdf")
}

const logOf3835Dialog = ref(false)

var option = {
    tooltip: {
        formatter: function (params) {
            return params.marker + params.name + ': ' + params.value[3];
        }
    },
    grid: {
        height: 700
    },
    yAxis: {
        inverse: true,
        type: 'time',
    },
    xAxis: {
        position: 'top',
        data: [' SMU软面板', ' FGEN软面板', ' OSC软面板', ' CV曲线软面板'],
    },
    series: [
        {
            type: 'custom',
            renderItem: function (params, api) {
                var categoryIndex = api.value(0); // 柱体id
                var start = api.coord([categoryIndex, api.value(1)]);
                var end = api.coord([categoryIndex, api.value(2)]);
                var size = api.size([0, 1]);
                var width = size[0] / 2;
                var height = end[1] - start[1];
                // console.log(start)
                var x = start[0] - width / 2;
                var y = start[1];
                var rectShape = echarts.graphic.clipRectByRect(
                    {
                        x: x,
                        y: y,
                        width: width,
                        height: 2
                    },
                    {
                        x: params.coordSys.x,
                        y: params.coordSys.y,
                        width: params.coordSys.width,
                        height: params.coordSys.height
                    }
                );
                return (
                    rectShape && {
                        type: 'rect',
                        transition: ['shape'],
                        shape: rectShape,
                        style: api.style()
                    }
                );
            },
            encode: {
                x: 0,
                y: [1, 2]
            },
            emphasis: {
                focus: 'self'
            },
            data: []
        }
    ]
};
let barChart = null

function init3835Logchart() {
    barOptionData().then(() => {
        barChart = echarts.init(document.getElementById('chart_of_student_log'))
        barChart.setOption(option)
        barChart.resize()

        window.addEventListener('resize', function () {
            barChart.resize()
        })
        window.addEventListener('popstate', function () {
            destoryEchart()
        })
    }).catch(() => {
        ElMessage.warning("没有学生操作数据")
    })
}
const barOptionData = () => {
    return new Promise<void>((resolve, reject) => {
        console.log(thisPstEchartLog.value)
        if (thisPstEchartLog.value.categories != null && thisPstEchartLog.value.data != null) {
            option.xAxis.data = JSON.parse(thisPstEchartLog.value.categories)
            option.series[0].data = JSON.parse(thisPstEchartLog.value.data)
            resolve()
        } else {
            ElMessage.warning("没有学生操作数据")
            reject()
        }
    })

}

function destoryEchart() {
    if (barChart) {
        barChart.dispose()
        barChart = null
    }
}
const logOf3835 = () => {
    logOf3835Dialog.value = true
    setTimeout(() => {
        init3835Logchart()
    }, 200)
}

const handelBeforClose = (done: any) => {
    destoryEchart
    done()
}

onBeforeMount(() => {
    init();
    dataInit();
})

const headerClass = ref('')

const handleScroll = () => {
    let scrollTop = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollTop) {
        headerClass.value = "down"
    } else {
        headerClass.value = ""
    }
}

window.addEventListener("scroll", handleScroll)
</script>
<style scoped>
.page-header {
    left: 0;
    right: 0;
    position: fixed;
    z-index: 10;
    transition: all 0.3s;
}

.down {
    top: 0;
    background: #fff;
    box-shadow: 0 3px 6px 0px rgb(0 0 0 / 5%);
}

.header {
    display: flex;
    flex-direction: row;
    height: 100%;
    width: 100%;
    align-items: center;
}


.header .right_title {
    min-width: 300px;
    font-size: 16px;
}

nav {
    padding: 0 3em;
    height: 5em;
}
</style>

<style>
.btn-left {
    position: fixed;
    right: calc(50% - 60px);
    bottom: 30px;
    color: white;
    border: none;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    z-index: 10;
}

.btn-left2 {
    position: fixed;
    right: calc(50% - 130px);
    bottom: 30px;
    color: white;
    border: none;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    z-index: 10;
}

.btn-right {
    position: fixed;
    right: 20px;
    bottom: 30px;
    color: white;
    border: none;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    z-index: 10;
}
</style>