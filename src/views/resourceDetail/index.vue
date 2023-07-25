<template>
    <div class="resource" v-if="route.name === 'ResourceDetail'">
        <pageHeader :route="route" />
        <el-row style="padding: 20px calc(164px + 4.8vw);">
            <el-col :span="10" style="display: flex; flex-direction: column; justify-content: center;">
                <el-row>
                    <h1 style="font-size: 46px; color: #33b8b9;">{{ CurttenContent.name }}项目</h1>
                </el-row>
                <el-row>
                    <el-button type="primary" style="background-color: #33b8b9; color: #fff; align-self: stretch;"
                        @click="toAddProject()" :disabled="disabled">发布项目</el-button>
                </el-row>
            </el-col>
            <el-col :span="14">
                <img :src="'/local-resource/image/' + CurttenContent.cover" alt=""
                    style="width: 100%; height: 100%; object-fit: cover;">
            </el-col>
        </el-row>
        <el-tabs stretch>
            <el-tab-pane label="项目概览">
                <el-row class="summary">
                    <el-row class="summary_title">
                        项目介绍
                    </el-row>
                    <el-row class="summary_detail">
                        <div style="font-size: 18px;">
                            {{ CurttenContent.introduction }}
                        </div>
                        <div>
                            {{ CurttenContent.introduce }}
                        </div>
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
                <el-row class="table_title">
                    项目案例与知识点对应关系
                </el-row>

                <div style="background-color: #fff; padding: 20px calc(164px + 4.8vw);padding-bottom: 50px; ">
                    <el-table class="table" :data="tableDate" :border="true"
                        :header-cell-style="{ background: '#33b8b9', fontSize: '24px', color: '#fff', lineHeight: '30px' }"
                        :header-row-style="{ height: '60px' }" :cell-style="{ fontSize: '18px', whiteSpace: 'pre-line' }"
                        :row-style="tableRowStyle">
                        <el-table-column label="案例目标" prop="caseObjective" header-align="center">

                        </el-table-column>
                        <el-table-column label="对应知识点" prop="knowledgePoint" header-align="center">
                        </el-table-column>
                    </el-table>
                </div>
                <el-row class="task-title">
                    案例子任务模块
                </el-row>
                <el-row class="task-info">
                    {{ CurttenContent.name
                    }}这个工程问题按照功能分解为若干子任务，每个任务的实施过程中贯穿着学习成果目标和专业课程知识，在实践过程中加深专业知识的理解，快速帮助学生达成设定的学习目标。将{{ CurttenContent.name
}}的设计制作过程分解为{{ tasks.length }}个子任务。
                </el-row>
                <div class="task">
                    <div class="task-module" v-for="task in tasks" :key="task.id">
                        <div class="task-module-img">
                            <img :src="'/local-resource/image/' + task.taskCover" alt=""
                                style="width: 100%; height: 100%; object-fit: cover; position: relative;">
                            <div style="position: absolute;z-index: 999;top: 36%;width: 100px;text-align: center;height: 90px;left: 39%;display: flex;
                            align-items: center;justify-content: center;font-size: 18px;">{{ task.taskName }}</div>
                        </div>
                        <div style="display: flex; flex-direction: column;">
                            <div class="task-module-content">
                                <h1>主要内容</h1>
                                <div v-for="i in task.taskTargets.length">
                                    {{ task.taskTargets[i - 1] }}
                                </div>
                            </div>
                            <div class="task-module-deliverable">
                                <h1>交付物</h1>
                                <div v-for="i in task.taskDeliverables.length">
                                    {{ task.taskDeliverables[i - 1] }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </el-tab-pane>
            <el-tab-pane label="项目案例指导及资源">
                <el-row class="guidance-title">
                    项目案例指导
                </el-row>
                <div class="guidance">
                    <div v-html="CurttenContent.guidance">

                    </div>
                </div>
                <el-row class="resource-title">
                    项目案例资源
                </el-row>
                <div class="download">
                    <div v-for="pkg in CurttenContent.pkgs " style="font-size: 20px;">
                        <el-link :underline="false" type="primary" :href="'/local-resource/file/' + pkg.name"><el-icon>
                                <Download />
                            </el-icon>{{ pkg.filename }}</el-link>
                    </div>
                </div>
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
import { ContentTasks } from '@/apis/content/contentTasks';
import { GetGuidance } from '@/apis/content/getGuidance.js';
import { GetPackages } from '@/apis/content/getPackages.js';

const route = useRoute()
const contentId = route.params.resourceId
const CurttenContent = ref({
    id: '',
    name: '',
    parentId: '', // 分类
    cover: '',  // 封面
    introduction: '',  // 简介
    introduce: '', // 介绍
    guidance: '', // 指导
    third: '',  // 详细的实现流程
    fourth: '',  // 结构关系
    keyWord: '', // 关键字
    packageId: '',
    isDelete: '',
    pkgs: [],
})
const disabled = ref(false)
const toAddProject = async () => {
    await router.push({
        name: 'AddProject',
        params: {
            resourceId: contentId
        }
    })
}

const tableDate = ref([

])

const downloadFiles = (pkg) => {
    // console.log(filename);
    // DownLoadFile(filename).then(res => {
    //     if (res.state != 200) {
    //         ElMessage.error("下载失败")

    //     }
    // })

    // let link = document.createElement('a') // 创建一个 a 标签用来模拟点击事件	
    // link.style.display = 'none'
    // link.href = '/local-resource/file/' + pkg.filename
    // link.setAttribute('download', pkg.name)
    // document.body.appendChild(link)
    // link.click()
    // document.body.removeChild(link)

}

function getTableDate(contentId) {
    if (contentId == 2) {
        tableDate.value = [
            {
                caseObjective: "案例目标1:\n理解并掌握电子元器件的基本原理、正确使用和特性分析，具备查阅手册、合理选用、测试常用电子元器件的能力。",
                knowledgePoint: "根据仿真结果选择元器件"
            },
            {
                caseObjective: "案例目标2:\n掌握基础电路原理，具有分析工程问题中电子电路的能力。",
                knowledgePoint: "1、分析OTL电路的工作原理\n 2、蓝牙模块扩展电路搭建"
            },
            {
                caseObjective: "案例目标3:\n 能够用方框图、电路原理图、程序流程图或设计报告等形式正确表达一个工程问题的解决方案，并使用仪器或工具软件对电路进行分析、仿真或辅助设计。",
                knowledgePoint: "1、OTL功放电路的设计\n 2、OTL功放电路仿真测试\n 3、蓝牙模块功能测试\n 4、功放电路测试\n 5、撰写案例整体解决方案"
            },
            {
                caseObjective: "案例目标4:\n 能够正确采集、处理实验数据，对实验结果进行分析和解释，并通过信息综合得到合理有效的结论。",
                knowledgePoint: "功放电路测试结果分析，对比，得出电路设计的合理性"
            }
        ]

    } else if (contentId == 8) {
        tableDate.value = [
            {
                caseObjective: "案例目标1:\n理解并掌握电子元器件的基本原理、正确使用和特性分析，具备查阅手册、合理选用、测试常用电子元器件的能力。",
                knowledgePoint: "电子电路设计"
            },
            {
                caseObjective: "案例目标2:\n掌握基础电路原理，具有分析工程问题中电子电路的能力。",
                knowledgePoint: "基础知识"
            },
            {
                caseObjective: "案例目标3:\n 能够用方框图、电路原理图、程序流程图或设计报告等形式正确表达一个工程问题的解决方案，并使用仪器或工具软件对电路进行分析、仿真或辅助设计。",
                knowledgePoint: "1、电子电路设计\n 2、硬件电路搭建\n"
            },
            {
                caseObjective: "案例目标4:\n 能够正确采集、处理实验数据，对实验结果进行分析和解释，并通过信息综合得到合理有效的结论。",
                knowledgePoint: "1、电子电路设计\n 2、硬件电路搭建\n 3、心电信号采集与处理"
            }
        ]
        disabled.value = true
    } else if (contentId == 9) {
        tableDate.value = [
            {
                caseObjective: "案例目标1:\n根据工程应用的实际需要，设计和开发满足特定技术需求的模块或系统，掌握电子系统的基本组成，分析电子系统的各组成部分，查询文献资料寻求多种设计解决方案，综合考虑成本、社会、安全、法律和环境等因素影响。",
                knowledgePoint: "项目方案设计"
            },
            {
                caseObjective: "案例目标2:\n掌握电子系统，特别是基于微型计算机的电子系统设计、开发方法，综合运用多学科专业知识对复杂工程问题进行研究，设计和开发实验方案。",
                knowledgePoint: "1、智能音箱方案设计\n 2、嵌入式开发\n 3、AI语音模块开发"
            },
            {
                caseObjective: "案例目标3:\n 根据系统设计方案进行软硬件设计，能够运用适当仪器、工具和软件搭建并调试设计的电子系统，并通过实验方法验证系统功能。",
                knowledgePoint: "音箱制作"
            },
            {
                caseObjective: "案例目标4:\n 根据系统功能要求，在小组内进行分工合作，在团队中作为个体和团队成员有效工作，发挥各自能力，理解团队合作的重要性。",
                knowledgePoint: "项目报告及答辩PPT"
            }
        ]
        disabled.value = true
    }
}

const tableRowStyle = ({ rowIndex }: { rowIndex: number }) => {
    if (rowIndex % 2 === 1) {
        return { backgroundColor: '#f2faff' }
    }
}
const status = ref(false)

const tasks = ref([])

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
    getTableDate(contentId);
    // 内容基本信息
    await GetById(contentId).then(res => {
        if (res.state == 200) {
            CurttenContent.value = res.data
            console.log(CurttenContent.value);
            status.value = true;
        } else {
            ElMessage.error(res.message)
        }
    })

    await GetGuidance(contentId).then(res => {
        if (res.state == 200) {
            CurttenContent.value.guidance = res.data
        } else {
            ElMessage.error("获取案例指导异常")
        }
    })

    await GetPackages(contentId).then(res => {
        if (res.state == 200) {
            CurttenContent.value.pkgs = res.data
            console.log(CurttenContent.value.pkgs);

        } else {
            ElMessage.error("获取资源包导异常")
        }
    })

    await ContentTasks(contentId).then(res => {
        if (res.state == 200) {
            tasks.value = res.data
            console.log(tasks.value);

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
    echarts.dispose;
    // while (true) {
    //     if (status.value == true) {
    //         destoryEchart();
    //         initChart();
    //         return
    //     }
    // }
    // console.log('mounted');
    // echarts.dispose;
    setTimeout(() => {
        destoryEchart();
        initChart();
        // window.addEventListener('resize', function () {
        //     for (let i = 0; i < graphs.value.length; i++) {
        //         pointCharts.value[i].resize()
        //     }
        // })
    }, 500)
})

onUnmounted(() => {
    destoryEchart();
})
</script>
<style scoped>
.resource {
    background-color: #f2faff;
    overflow: hidden;
}

.table_title {
    padding: 20px calc(164px + 4.8vw);
    background-color: #fff;
    font-size: 36px;
    color: #33b8b9;
}

.download {
    padding: 20px calc(164px + 4.8vw);
}

.guidance {
    padding: 20px calc(164px + 4.8vw);
}

.guidance-title,
.resource-title {
    padding: 20px calc(164px + 4.8vw);
    font-size: 36px;
    color: #33b8b9;
}

.task-title {
    padding: 20px calc(164px + 4.8vw);
    font-size: 36px;
    color: #33b8b9;
}

.task-info {
    padding: 20px calc(164px + 4.8vw);
    font-size: 24px;
}

.task {
    /* width: 20vw; */
    padding: 20px calc(164px + 4.8vw);
    display: flex;
    justify-content: center;
}

.task-module {
    width: 10vw;
    margin-right: 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    flex-grow: 1;
}

.task-module-img {
    margin-top: 5vh;
    position: relative;
}

.task-module-content {
    /* margin-left: 2vw;
    margin-top: 5vh;
    display: flex;
    flex-direction: column; */
    height: 200px;
}

.task-module-content h1 {
    color: #33b8b9;
    font-size: 24px;
    font-weight: bold;
}

.task-module-content span {
    font-size: 24px;
}

.task-module-deliverable {
    /* margin-left: 2vw;
    margin-top: 5vh;
    display: flex;
    flex-direction: column; */
}

.task-module-deliverable h1 {
    color: #33b8b9;
    font-size: 24px;
    font-weight: bold;
}

.task-module-deliverable span {
    font-size: 24px;
}

.table {
    box-shadow: var(--el-box-shadow-lighter);
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
    font-size: 36px;
    color: #33b8b9;
}

.points_title {
    padding: 20px calc(164px + 4.8vw);
    font-size: 36px;
    color: #33b8b9;
}

.summary_detail {
    padding-top: 10px;
    /* flex-grow: 1; */
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
    font-size: 36px;
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