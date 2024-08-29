<template>
    <main>
        <div class="banner">
            <div class="banner_left">
                <h1>IECUBE<br>产业案例教学资源库和过程评价系统</h1>
                <h2>IECUBE-产业案例教学资源库和过程评价系统是北京曾益慧创科技有限公司开发的帮助教师与学生优化教学过程的承载产业案例及其资源包的平台，教师可通过本平台发布项目，实时监测学生任务完成情况，根据结果数据分析帮助老师评判学生能力薄弱点，改进项目难度设定，为学生提供个性化改进建议。
                </h2>
            </div>
            <div class="banner_right">
                <img src="@/assets/images/homeBackGround.png" alt="">
            </div>
        </div>
        <div class="index1">
            <div class="title">
                <h1>精选项目案例</h1>
            </div>
            <div class="case">
                <el-card class="card1" v-for="content in contents" shadow="hover" :body-style="{ padding: '0px' }">
                    <div class="cover">
                        <img v-if="content.cover" class="card_img" :src="'/local-resource/image/' + content.cover" alt="">
                    </div>
                    <div
                        style="height: 25rem; display: flex; flex-direction: column; justify-content: space-between; padding: 20px;">
                        <div style="font-size: 1.4rem; font-weight: bold;">
                            {{ content.name }}
                        </div>
                        <div style="overflow: hidden; flex-grow: 1;">
                            {{ content.introduction }}
                        </div>
                        <div style="margin-top: 5px;">
                            <el-link :underline="false" type="primary" @click="jumpToDetail(content.id)">
                                查看案例详情
                                <el-icon>
                                    <ArrowRight />
                                </el-icon>
                            </el-link>
                        </div>
                    </div>
                </el-card>
            </div>
        </div>
        <div class="index2">
            <div class="title">
                <h1>项目案例使用实时数据</h1>
            </div>
            <div class="data">
                <div class="data_left">
                    <div>
                        <el-row style="background-color: #fff; padding: 10px;">
                            <el-col :span="20">
                                项目使用人数概览
                            </el-col>
                            <el-col :span="4" style="text-align: center;">
                                <el-button>过去7天</el-button>
                            </el-col>
                        </el-row>
                    </div>
                    <div id="usecount" style="height: 30vh; background-color: #fff;">
                    </div>
                    <div style="margin-top: 20px; background-color: #fff; padding: 10px;">
                        <div>项目参与总体情况</div>
                        <el-table :data="caseData" height="300">
                            <el-table-column prop="cover" label="">
                                <template #default="scope">
                                    <div></div>
                                    <img v-if="scope.row.cover" style="width: 100%; height: 100%; object-fit: cover;"
                                        :src="'/local-resource/image/' + scope.row.cover" alt="">
                                </template>
                            </el-table-column>
                            <el-table-column prop="name" label="" />
                            <el-table-column prop="usedNum" label="总参与人数" />
                            <el-table-column prop="time" label="项目平均完成时长" />
                            <el-table-column prop="biggestGrade" label="项目最高分" />
                            <el-table-column prop="grade" label="项目平均分" />
                        </el-table>
                    </div>
                </div>
                <div class="data_right">
                    <div>
                        数据饼图
                    </div>
                    <div id="caseused" style="min-height: calc(30vh);">

                    </div>
                    <div style="margin-top: 20px; display: flex; flex-direction: column; flex-grow: 1;">
                        <div style="flex-grow: 1;">
                            <span>蓝牙音箱</span>
                            <el-progress :color="'#546fc6'" :percentage="49.2" />
                        </div>
                        <div style="flex-grow: 1;">
                            <span>心电图仪</span>
                            <el-progress :color="'#92cc75'" :percentage="25.4" />
                        </div>
                        <div style="flex-grow: 1;">
                            <span>智能音箱</span>
                            <el-progress :color="'#fac857'" :percentage="25.4" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </main>
</template>

<script setup lang="ts">
import { onBeforeMount, onMounted, onUnmounted, onUpdated, ref } from 'vue';
import * as echarts from 'echarts'
import { All } from '@/apis/content/all.js'
import router from '@/router';

const dayNum = ref(7)
const dataArr = ref([])
const contents = ref([])
const projectList = ref(['蓝牙音箱', '心电图仪', '智能音箱'])
const caseData = ref([])

const jumpToDetail = async (id) => {
    await router.push({
        name: 'ResourceDetail',
        params: {
            resourceId: id,
        }
    })
}

function initDataArr() {
    for (let i = 0; i < dayNum.value; i++) {
        const time = new Date(new Date().setDate(new Date().getDate() + i - dayNum.value));
        const month = `0${time.getMonth() + 1}`.slice(-2);
        const strDate = `0${time.getDate()}`.slice(-2);
        dataArr.value.push(`${month}-${strDate}`);
    }
}

const useCountOption = ref({
    color: [
        '#637afd',
        '#48eaca',
        '#24cbd4',
        '#20a0eb',
        '#4684fd',
        '#4764fe',
        '#7c33fe',
        '#f9c140',
    ],
    tooltip: {
        axisPointer: {
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    legend: {
        data: ['蓝牙音箱', '心电图仪', '智能音箱']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '8%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            boundaryGap: false,
            data: []
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        {
            name: '蓝牙音箱',
            type: 'line',
            areaStyle: {},
            smooth: true,
            emphasis: {
                focus: 'series'
            },
            data: [45, 52, 38, 32, 62, 62, 50]
        },
        {
            name: '心电图仪',
            type: 'line',
            // stack: 'Total',
            areaStyle: {},
            smooth: true,
            emphasis: {
                focus: 'series'
            },
            data: [25, 26, 32, 32, 30, 32, 29]
        },
        {
            name: '智能音箱',
            type: 'line',
            // stack: 'Total',
            areaStyle: {},
            smooth: true,
            emphasis: {
                focus: 'series'
            },
            data: [32, 31, 32, 29, 31, 28, 30]
        }

    ]
})

const caseUsedOption = ref({
    tooltip: {
        trigger: 'item'
    },
    // legend: {
    //     top: '10%',
    //     left: 'center'
    // },
    series: [
        {
            name: '案例使用情况',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            itemStyle: {
                borderRadius: 10,
                borderColor: '#fff',
                borderWidth: 2
            },
            label: {
                show: false,
                position: 'center'
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: 24,
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            data: [
                { value: 62, name: '蓝牙音箱' },
                { value: 32, name: '心电图仪' },
                { value: 32, name: '智能音箱' },
            ]
        }
    ]
})

let useCountChart = null
let caseUsedChart = null
function initChart() {
    useCountOption.value.xAxis[0].data = dataArr.value;
    useCountOption.value.legend.data = projectList.value;
    useCountChart = echarts.init(document.getElementById("usecount"))
    caseUsedChart = echarts.init(document.getElementById("caseused"))
    useCountChart.setOption(useCountOption.value)
    caseUsedChart.setOption(caseUsedOption.value)

}

function destoryCharts() {
    if (useCountChart) {
        useCountChart.dispose()
        useCountChart = null
    };

    if (caseUsedChart) {
        caseUsedChart.dispose()
        caseUsedChart = null
    }
}


onBeforeMount(() => {
    initDataArr();
    All().then(res => {
        if (res.state == 200) {
            contents.value = res.data
            contents.value.splice(5, contents.value.length)
            // console.log(contents.value);
            caseData.value = [
                {
                    name: contents.value[0].name,
                    cover: contents.value[0].cover,
                    usedNum: 62,
                    time: 12,
                    biggestGrade: 96,
                    grade: 88
                },
                {
                    name: contents.value[1].name,
                    cover: contents.value[1].cover,
                    usedNum: 32,
                    time: 12,
                    biggestGrade: 99,
                    grade: 83
                },
                {
                    name: contents.value[2].name,
                    cover: contents.value[2].cover,
                    usedNum: 32,
                    time: 12,
                    biggestGrade: 95,
                    grade: 89
                }
            ]
        }
    })

})

onMounted(() => {
    setTimeout(() => {
        if (!useCountChart) {
            initChart();
        }
        window.addEventListener('resize', function () {

            useCountChart.resize();
            caseUsedChart.resize();
        })
        window.addEventListener('popstate', function () {
            destoryCharts()
            initChart()
        })
    }, 1000);
})

onUpdated(() => {
    document.body.scrollTop = 0;
})

onUnmounted(() => {
    if (useCountChart) {
        useCountChart.dispose()
        useCountChart = null
        // console.log('Echarts destroy')
    }

    if (caseUsedChart) {
        caseUsedChart.dispose()
        caseUsedChart = null
        // console.log('Echarts destroy')
    }
})


</script>

<style scoped>
main {
    width: 100%;
    height: 300%;
    display: flex;
    flex-direction: column;
}

.card_img {
    width: 100%;
    height: 100%;
    /* border-top-left-radius: 20px;
    border-top-right-radius: 20px; */

}

.data {
    padding: 20px 0px;
    display: flex;
}

.data_left {
    width: 70%;
    display: flex;
    flex-direction: column;
    margin-right: 20px;
}

.data_right {
    width: 30%;
    margin-left: 20px;
    padding: 10px;
    background-color: #FFF;
    display: flex;
    flex-direction: column;
}

.index1 {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    background: #FFF;
}

.title {
    margin-top: 5vh;
    margin-bottom: 5vh;
    font-size: 2rem;
    color: #33b8b9;
    display: flex;
    justify-content: center;
}

.case {
    display: grid;
    grid-gap: 3rem;
    position: relative;
    grid-template-columns: repeat(4, 1fr);
    width: 100%;
    padding: 3rem
}

.cover {
    aspect-ratio: 16 / 9;
}

.card1 {
    border-color: #33b8b9;
}

.index2 {
    display: none;
    flex-direction: column;
    /* align-items: center; */
    width: 100%;
}

.banner {
    display: flex;
    align-items: center;
    height: calc(100vh - 100px);
    padding: 0 3vw;
    padding-bottom: 4vw;
    justify-content: center;
}

.banner_left {
    display: flex;
    flex-direction: column;
    width: 31%;
    justify-content: center;
}

.banner_right {
    width: 60.3%;
    position: relative;
    max-width: 1228px;
    display: flex;
    justify-content: flex-end;

}

.banner_right img {
    max-width: 120%;
    display: block;
    border: 0;
    width: 95%;
    height: 95%;
    object-fit: cover;
}

@media screen and (max-width: 799.9px) {

    .banner h1 {
        font-size: 2rem;
        color: #33b8b9;
        line-height: 1.5;
    }

    .banner h2 {
        display: none;
        font-size: 1.6rem;
        color: #333;
        line-height: 3rem;
        margin: 3vw 0 2.8vw;
    }
}

@media screen and (min-width: 800px) {
    .banner h1 {
        font-size: 3.6rem;
        color: #33b8b9;
        line-height: 1.5;
    }

    .banner h2 {
        font-size: 1.6rem;
        color: #333;
        line-height: 3rem;
        margin: 3vw 0 2.8vw;
    }
}
</style>