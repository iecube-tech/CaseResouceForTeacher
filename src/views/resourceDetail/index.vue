<template>
    <div class="resource">
        <pageHeader :route="route" />
        <el-row style="padding: 20px calc(164px + 4.8vw);">
            <el-col :span="10" style="display: flex; align-items: center;">
                <h1 style="font-size: 46px; color: #33b8b9;">蓝牙音箱项目</h1>
            </el-col>
            <el-col class="banner_right" :span="14">
                <img src="@/assets/images/蓝牙音箱.jpg" alt="" style="width: 100%; height: 100%; object-fit: cover;">
            </el-col>
        </el-row>
        <el-tabs stretch>
            <el-tab-pane label="项目概览">
                <el-row class="summary">
                    <el-row class="summary_title">
                        项目介绍
                    </el-row>
                    <el-row class="summary_detail">
                        {{ CurttenContent.introduction }}
                    </el-row>
                </el-row>
                <el-row class="points_title">
                    知识点
                </el-row>
                <el-row height="750px" style="flex-direction: column; justify-content: center; align-items: center;">
                    <el-carousel class="points" height="750px" trigger="click" arrow="always" :autoplay="false"
                        :loop="false">
                        <el-carousel-item class="points_item" v-for="i in graphs.length" :key="i"
                            :id="'points_item' + (i - 1)">
                        </el-carousel-item>
                    </el-carousel>
                </el-row>
                <el-row class="points_footer_title">
                    关系链
                </el-row>
                <el-row class="points_footer">
                    <el-col :span="8"><el-row>
                            <div class="circle_green"></div>
                            <div class="line_left"></div>
                        </el-row> </el-col>
                    <el-col :span="8">
                        <el-row>
                            <div class="circle_blue"></div>
                            <div class="line_right"></div>
                        </el-row>
                    </el-col>
                    <el-col :span="8">
                        <el-row>
                            <div class="circle_pink"></div>
                        </el-row>
                    </el-col>
                </el-row>
                <el-row class="points_footer_detail">
                    <el-col :span="8" class="points_footer_detail_link">
                        <el-row v-for="CurttenCase in cases" :key="CurttenCase.caseId">
                            <el-link :underline="false" style="color: #33b8b9;" @click="jumpToDetail(CurttenCase.caseId)">{{
                                CurttenCase.name }}</el-link>
                        </el-row>
                    </el-col>
                    <el-col :span="8" class="points_footer_detail_link">
                        <el-row v-for=" CurttenModule in modules" :key="CurttenModule.id">
                            <el-link :underline="false" style="color: #97f7db;" @click="toModule(CurttenModule)">{{
                                CurttenModule.name }}</el-link>
                        </el-row>
                    </el-col>
                    <el-col :span="8" class="points_footer_detail_link">
                        <el-row v-for="CurttenConcept in concepts" :key="CurttenConcept.id">
                            <el-link :underline="false" style="color: #bfc9fd;" @click="toConcept(CurttenConcept)">{{
                                CurttenConcept.name }}</el-link>
                        </el-row>
                    </el-col>
                </el-row>
                <!-- </el-row> -->
            </el-tab-pane>
            <el-tab-pane label="项目案例设计">
                {{ CurttenContent.first }}
            </el-tab-pane>
            <el-tab-pane label="资源包">
                {{ CurttenContent.packageId }}
            </el-tab-pane>
        </el-tabs>
    </div>
</template>


<script setup lang="ts" >
import { onBeforeMount, onMounted, onUnmounted, ref, watch } from 'vue';
import router from '@/router';
import { useRoute } from 'vue-router';
import { ElMessage } from 'element-plus'
import * as echarts from 'echarts';
import { GetById } from '@/apis/content/getById';
import { GetNodesByCaseId } from '@/apis/npoints/getNodesByCaseId';
import { GetNodesByConceptId } from '@/apis/npoints/getNodesByConceptId';
import { GetNodesByModuleId } from '@/apis/npoints/getNodesByModuleId';
import pageHeader from '@/components/pageheader.vue'
import { getScrollContainer } from 'element-plus/es/utils';

const route = useRoute()
const contentId = route.params.resourceId
const CurttenContent = ref({
    id: '',
    name: '',
    parentId: '', // 分类
    cover: '',  // 封面
    introduction: '',  // 简介
    first: '', // 课程设计思路
    second: '', // 工程教育认证标准匹配关系
    third: '',  // 详细的实现流程
    fourth: '',  // 结构关系
    keyWord: '', // 关键字
    packageId: '',
    isDelete: '',
})
//用于npoints图
const graphs = ref([])
const d = [{
    caseId: undefined,
    moduleId: undefined,
    conceptId: undefined,
    x: undefined,
    y: undefined,
    name: undefined
}]
//最多10个graph图
const data = ref([
    [
        {
            caseId: undefined,
            moduleId: undefined,
            conceptId: undefined,
            x: undefined,
            y: undefined,
            name: undefined
        }
    ],
    [
        {
            caseId: undefined,
            moduleId: undefined,
            conceptId: undefined,
            x: undefined,
            y: undefined,
            name: undefined
        }
    ],
    [
        {
            caseId: undefined,
            moduleId: undefined,
            conceptId: undefined,
            x: undefined,
            y: undefined,
            name: undefined
        }
    ],
    [
        {
            caseId: undefined,
            moduleId: undefined,
            conceptId: undefined,
            x: undefined,
            y: undefined,
            name: undefined
        }
    ],
    [
        {
            caseId: undefined,
            moduleId: undefined,
            conceptId: undefined,
            x: undefined,
            y: undefined,
            name: undefined
        }
    ],
    [
        {
            caseId: undefined,
            moduleId: undefined,
            conceptId: undefined,
            x: undefined,
            y: undefined,
            name: undefined
        }
    ],
    [
        {
            caseId: undefined,
            moduleId: undefined,
            conceptId: undefined,
            x: undefined,
            y: undefined,
            name: undefined
        }
    ],
    [
        {
            caseId: undefined,
            moduleId: undefined,
            conceptId: undefined,
            x: undefined,
            y: undefined,
            name: undefined
        }
    ],
    [
        {
            caseId: undefined,
            moduleId: undefined,
            conceptId: undefined,
            x: undefined,
            y: undefined,
            name: undefined
        }
    ],
    [
        {
            caseId: undefined,
            moduleId: undefined,
            conceptId: undefined,
            x: undefined,
            y: undefined,
            name: undefined
        }
    ],

])
//连线
const link = ref([])

// 用于关系链
const cases = ref([])
const modules = ref([])
const concepts = ref([])

//根据graphs数量生成graph
let pointCharts = ref([])
let options = ref([])
const getGraphColor = (data) => {
    console.log(data);
    return "#333333"
    // for(let i=0)
}
const initGraphs = () => {
    options.value.splice(0, options.value.length)
    for (let i = 0; i < graphs.value.length; i++) {
        pointCharts.value.push(null)
        options.value.push(
            {
                animationDurationUpdate: 1500,
                animationEasingUpdate: 'quinticInOut',
                series: [
                    {
                        type: 'graph',
                        layout: 'none',
                        symbolSize: 160,
                        label: {
                            show: true
                        },
                        data: data.value[i],
                        links: link.value[i],
                        lineStyle: {
                            opacity: 0.9,
                            width: 2,
                            curveness: 0
                        },
                    }
                ],
            }
        )
    }
}

const toConcept = async (concept) => {
    await GetNodesByConceptId(concept.conceptId).then(res => {
        if (res.state == 200) {
            // 清空 graphs link data 中的数据
            graphs.value.splice(0, graphs.value.length)
            link.value.splice(0, link.value.length);
            for (let i = 0; i < data.value.length; i++) {
                data.value[i].splice(1, data.value[i].length)
            }
            // 更改 graphs link data 为根据concept查询的结果
            for (let p = 0; p < res.data.length; p++) {
                graphs.value.push(res.data[p])
                link.value.push([])
                for (let q = 0; q < res.data[p][0].length; q++) {
                    data.value[p].push(res.data[p][0][q])
                }
                for (let r = 0; r < res.data[p][1].length; r++) {
                    link.value[p].push(res.data[p][1][r])
                }
            }
            // 更改关系链的数据
            // 点击concept   concept列只展示该数据  对应更改 cases 和 modules 的数据
            // 清除初始的数据
            concepts.value.splice(0, concepts.value.length)
            cases.value.splice(0, cases.value.length)
            modules.value.splice(0, modules.value.length)
            // concept列只展示该数据
            concepts.value.push(concept)
            //对应更改 cases 和 modules 的数据
            for (let c = 0; c < data.value[0].length; c++) {
                if (data.value[0][c].moduleId == concept.moduleId && !data.value[0][c].conceptId) {
                    modules.value.push(data.value[0][c])
                }
            }
            for (let i = 0; i < data.value.length; i++) {
                if (data.value[i].length > 1) {
                    for (let j = 0; j < data.value[i].length; j++) {
                        if (data.value[i][j].caseId && !data.value[i][j].moduleId && !data.value[i][j].conceptId) {
                            cases.value.push(data.value[i][j])
                        }
                    }
                }
            }
            destoryEchart()
            setTimeout(() => {
                initGraphs()
                initChart()
            }, 300)

        } else {
            ElMessage.error(res.message)
        }
    })

}

const toModule = async (clickModule) => {
    await GetNodesByModuleId(clickModule.moduleId).then(res => {
        // console.log(res)
        if (res.state == 200) {
            // 清空 graphs link data 中的数据
            graphs.value.splice(0, graphs.value.length)
            link.value.splice(0, link.value.length);
            for (let i = 0; i < data.value.length; i++) {
                data.value[i].splice(1, data.value[i].length)
            }
            // 更改 graphs link data 为根据concept查询的结果
            for (let p = 0; p < res.data.length; p++) {
                graphs.value.push(res.data[p])
                link.value.push([])
                for (let q = 0; q < res.data[p][0].length; q++) {
                    data.value[p].push(res.data[p][0][q])
                }
                for (let r = 0; r < res.data[p][1].length; r++) {
                    link.value[p].push(res.data[p][1][r])
                }
            }
            // 更改关系链的数据
            // 点击module   module列只展示该数据  对应更改 cases 和 concept 的数据
            // 清除初始的数据
            concepts.value.splice(0, concepts.value.length)
            cases.value.splice(0, cases.value.length)
            modules.value.splice(0, modules.value.length)
            // module列只展示该数据
            modules.value.push(clickModule)
            //对应更改 cases 和 concept 的数据
            for (let i = 0; i < data.value.length; i++) {
                if (data.value[i].length > 1) {
                    for (let j = 0; j < data.value[i].length; j++) {
                        if (data.value[i][j].caseId && !data.value[i][j].moduleId && !data.value[i][j].conceptId) {
                            cases.value.push(data.value[i][j])
                        }
                    }
                }
            }
            for (let c = 0; c < data.value[0].length; c++) {
                if (data.value[0][c].moduleId == clickModule.moduleId && data.value[0][c].conceptId) {
                    concepts.value.push(data.value[0][c])
                }
            }
            destoryEchart()
            setTimeout(() => {
                initGraphs()
                initChart()
            }, 300)
        } else {
            ElMessage.error(res.message)
        }
    })
}

const jumpToDetail = (id) => {
    if (id == contentId) {
        return
    }
    // console.log('跳转');

    router.push({
        name: 'ResourceDetail',
        params: {
            resourceId: id,
        }
    })
}

onBeforeMount(async () => {
    // 内容基本信息
    await GetById(contentId).then(res => {
        if (res.state == 200) {
            CurttenContent.value = res.data
        } else {
            ElMessage.error(res.message)
        }
    })

    // 默认npoints关系图数据
    await GetNodesByCaseId(contentId).then(res => {
        if (res.state == 200) {
            for (let p = 0; p < res.data.length; p++) {
                graphs.value.push(res.data[p])
                link.value.push([])
                for (let q = 0; q < res.data[p][0].length; q++) {
                    data.value[p].push(res.data[p][0][q])
                }
                for (let r = 0; r < res.data[p][1].length; r++) {
                    link.value[p].push(res.data[p][1][r])
                }
            }
            initGraphs();
            // console.log(data);
            //关系链数据 通过处理好的points的data获取
            for (let c = 0; c < data.value[0].length; c++) {
                if (data.value[0][c].conceptId) {
                    concepts.value.push(data.value[0][c])
                }
                if (data.value[0][c].moduleId && !data.value[0][c].conceptId) {
                    modules.value.push(data.value[0][c])
                }
                if (data.value[0][c].caseId && !data.value[0][c].moduleId && !data.value[0][c].conceptId) {
                    cases.value.push(data.value[0][c])
                }
            }
            // console.log(111);

            // console.log(cases.value);

        }
        else {
            ElMessage.error(res.message)
        }
        // console.log(graphs.value);
        // console.log(link.value);
        // console.log(data.value);



    })


})

// watch(graphs.value, (oldValue, newValue) => {
//     console.log('老值', oldValue, '新值', newValue)
// })

let initChart = () => {
    // console.log('points 初始化')
    for (let i = 0; i < graphs.value.length; i++) {
        // console.log("points_item" + i)
        pointCharts.value[i] = echarts.init(document.getElementById("points_item" + i))
        pointCharts.value[i].setOption(options.value[i])
        pointCharts.value[i].on('click', function (params) {
            if (!params.data.conceptId && !params.data.moduleId) {
                if (params.data.caseId == contentId) {
                    return
                }
                else {
                    jumpToDetail(params.data.caseId)
                }
            }
            if (!params.data.conceptId && params.data.moduleId) {
                toModule(params.data)
            }
            if (params.data.conceptId) {
                toConcept(params.data)
            }
        })
    }
}

let destoryEchart = () => {
    for (let i = 0; i < graphs.value.length; i++) {
        if (pointCharts.value[i] != null) {
            pointCharts.value[i].dispose()
            pointCharts.value[i] = null
        }
    }
}

window.addEventListener('popstate', function () {
    // destoryEchart()
    // // // setTimeout(() => {
    // // //     initChart()
    // // // }, 300)
    router.go(0)
})

onMounted(() => {
    // console.log('mounted');
    echarts.dispose;
    setTimeout(() => {
        destoryEchart();
        initChart();
        // window.addEventListener('resize', function () {
        //     for (let i = 0; i < graphs.value.length; i++) {
        //         pointCharts.value[i].resize()
        //     }
        // })
    }, 1000)
})

onUnmounted(() => {
    destoryEchart();
})
</script>
<style scoped>
.resource {
    background-color: #f2faff;
}

.points_item {
    height: 700px;
    width: 1400px;
    padding-top: 50px;
    padding-bottom: 50px;
    background-color: #26c9ff;
}

.summary {
    min-height: 30vh;
    background-color: #ffffff;
    /* padding-top: 20px; */
    padding: 20px calc(164px + 4.8vw);
    flex-direction: column;
}

.summary_title {
    font-size: 46px;
    color: #33b8b9;
}

.points_title {
    padding: 20px calc(164px + 4.8vw);
    font-size: 46px;
    color: #33b8b9;
}

.summary_detail {
    padding-top: 10px;
    flex-grow: 1;
    font-size: 16px;
}

.points {
    /* display: flex; */
    width: 1400px;
    margin-top: 20px;

}

.el-carousel__item:nth-child(2n) {
    /* background-color: #99a9bf; */
    background-color: #f2faff;
}

.el-carousel__item:nth-child(2n + 1) {
    /* background-color: #d3dce6; */
    background-color: #f2faff;
}

.points_footer_title {
    margin-top: 30px;
    padding: 20px calc(164px + 4.8vw);
    font-size: 46px;
    color: #33b8b9;
    background-color: #fff;
}

.points_footer {
    padding-left: calc(164px + 4.8vw);
    padding-top: 40px;
    height: 70px;
    background-color: #fff;
}

.points_footer_detail {
    padding-left: calc(164px + 4.8vw);
    min-height: 100px;
    background-color: #fff;
    padding-bottom: 30px;
}

.circle_green {
    width: 30px;
    height: 30px;
    background-color: #33b8b9;
    border-radius: 50%;
    border-style: solid;
    border-width: 4px;
    border-radius: 50%;
    border-color: #f2faff;
}

.circle_blue {
    width: 30px;
    height: 30px;
    background-color: #97f7db;
    border-radius: 50%;
    border-style: solid;
    border-width: 4px;
    border-radius: 50%;
    border-color: #f2faff;
}

.circle_pink {
    width: 30px;
    height: 30px;
    background-color: #bfc9fd;
    border-radius: 50%;
    border-style: solid;
    border-width: 4px;
    border-radius: 50%;
    border-color: #f2faff;
}

.line_left {
    flex-grow: 1;
    height: 4px;
    background-color: #97f7db;
    margin-top: 13px;
}

.line_right {
    flex-grow: 1;
    height: 4px;
    background-color: #bfc9fd;
    margin-top: 13px;
}
</style>