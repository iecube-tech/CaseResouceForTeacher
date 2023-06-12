<template>
    <div class="resource">
        <el-row class="title">
            <div class="title_class">产业项目案例</div>
            <el-row class="title_font">{{ Resources[0].name }}</el-row>
        </el-row>
        <el-row class="tabs">
            <el-tabs stretch>
                <el-tab-pane label="概览">
                    <el-row class="summary">
                        <el-row class="summary_title">
                            概述
                        </el-row>
                        <el-row class="summary_detail">
                            {{ Resources[0].summary }}
                        </el-row>
                    </el-row>
                    <el-carousel class="points" height="600px" trigger="click" :autoplay="false" :loop="false">
                        <el-carousel-item class="points_item" id="svg" v-for="resource in Resources" :key="resource.id">
                            <el-row class="points_item_first">
                                <div class="circle" :id="'Resource' + resource.id">
                                    <div class="circle_text">
                                        {{ resource.name }}
                                    </div>
                                </div>
                            </el-row>
                            <el-row class="points_item_second" :gutter="20">
                                <div v-for="FunctionModule in resource.FunctionModules" :key="FunctionModule.id"
                                    class="circle2" :id="'FunctionModule' + FunctionModule.id">
                                    <div class="circle_text">
                                        {{ FunctionModule.name }}
                                    </div>
                                </div>
                            </el-row>
                            <el-row class="points_item_third">
                                <div v-for="BasicConcept in resource.BasicConcepts" :key="BasicConcept.id" class="circle3"
                                    :id="'BasicConcept' + BasicConcept.id">
                                    <div class="circle_text">
                                        {{ BasicConcept.name }}
                                    </div>

                                </div>
                            </el-row>
                        </el-carousel-item>
                    </el-carousel>
                    <el-row class="points_footer_title">
                        关系链
                    </el-row>
                    <el-row class="points_footer">
                        <el-col :span="8"><el-row>
                                <div class="circle_green"></div>
                                <div class="line"></div>
                            </el-row> </el-col>
                        <el-col :span="8">
                            <el-row>
                                <div class="circle_blue"></div>
                                <div class="line"></div>
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
                            <el-row v-for="resource in Resources" :key="resource.id">
                                <el-link :underline="false" style="color: #00d9a3;">{{ resource.name }}</el-link>
                            </el-row>
                        </el-col>
                        <el-col :span="8" class="points_footer_detail_link">
                            <el-row v-for="FunctionModule in CurttenResourse.FunctionModules" :key="FunctionModule.id">
                                <el-link :underline="false" style="color: #26c9ff;">{{ FunctionModule.name }}</el-link>
                            </el-row>
                        </el-col>
                        <el-col :span="8" class="points_footer_detail_link">
                            <el-row v-for="BasicConcept in CurttenResourse.BasicConcepts" :key="BasicConcept.id">
                                <el-link :underline="false" style="color: #ff4dff;">{{ BasicConcept.name }}</el-link>
                            </el-row>
                        </el-col>
                    </el-row>
                    <!-- </el-row> -->
                </el-tab-pane>
                <el-tab-pane label="课程设计思路">
                    课程设计思路
                </el-tab-pane>
                <el-tab-pane label="资源包">
                    资源包
                </el-tab-pane>
            </el-tabs>
        </el-row>
    </div>
</template>


<script setup lang="ts" >
import { onBeforeMount, onBeforeUpdate, onMounted, ref } from 'vue';
// import { StraightConnector } from '@jsplumb/browser-ui'

const Resources = ref([
    {
        id: 1, name: '蓝牙音箱', summary: '蓝牙音箱产业项目案例', courseDesign: '蓝牙音箱课程设计思路', resourse: '蓝牙音箱课程资源包',
        FunctionModules: [
            { id: 1, name: '电源模块' },
            { id: 2, name: '功放模块' },
            { id: 3, name: '滤波模块' },
            { id: 4, name: '蓝牙模块' }
        ],
        BasicConcepts: [
            { id: 1, name: 'DC/DC' },
            { id: 2, name: 'AC/DC' },
            { id: 3, name: 'OTL电路' },
            { id: 4, name: 'OCL电路' },
            { id: 5, name: '集成芯片功放电路' },
            { id: 6, name: '高/低通滤波' },
            { id: 7, name: '蓝牙协议' },
        ],
        connect: [
            { ResourceId: 1, FunctionModuleId: 1, BasicConceptId: [1, 2] },
            { ResourceId: 1, FunctionModuleId: 2, BasicConceptId: [3, 4, 5] },
            { ResourceId: 1, FunctionModuleId: 3, BasicConceptId: [6] },
            { ResourceId: 1, FunctionModuleId: 4, BasicConceptId: [7] },
        ]
    },
    {
        id: 1, name: '蓝牙音箱', summary: '蓝牙音箱产业项目案例', courseDesign: '蓝牙音箱课程设计思路', resourse: '蓝牙音箱课程资源包',
        FunctionModules: [
            { id: 1, name: '电源模块' },
            { id: 2, name: '功放模块' },
            { id: 3, name: '滤波模块' },
            { id: 4, name: '蓝牙模块' }
        ],
        BasicConcepts: [
            { id: 1, name: 'DC/DC' },
            { id: 2, name: 'AC/DC' },
            { id: 3, name: 'OTL电路' },
            { id: 4, name: 'OCL电路' },
            { id: 5, name: '集成芯片功放电路' },
            { id: 6, name: '高/低通滤波' },
            { id: 7, name: '蓝牙协议' },
        ],
        connect: [
            { ResourceId: 1, FunctionModuleId: 1, BasicConceptId: [1, 2] },
            { ResourceId: 1, FunctionModuleId: 2, BasicConceptId: [3, 4, 5] },
            { ResourceId: 1, FunctionModuleId: 3, BasicConceptId: [6] },
            { ResourceId: 1, FunctionModuleId: 4, BasicConceptId: [7] },
        ]
    }
])

// 关系链：当前选中
// const CurttenSelete = 
const CurttenResourse = Resources.value[0]

onMounted(() => {
    // setTimeout(() => {
    //     console.log(document.getElementById('Resource1').getBoundingClientRect());
    //     const elmWrapper = document.getElementById('svg')
    //     console.log(111, elmWrapper)
    //     const line = LeaderLine.setLine(document.getElementById('Resource1'), document.getElementById('FunctionModule1'), { color: 'red', size: 8 })
    //     const lines = document.getElementsByClassName('leader-line')
    //     elmWrapper.append(...lines)
    // }, 100)
})
</script>
<style scoped>
.resource {
    background-color: #f2faff;
}

.points_item {
    padding: 50px;
}

.points_item_first {
    height: 150px;
    /* padding-top: 30px; */
    justify-content: center;
}

.points_item_second {
    height: 150px;
    padding-top: 10px;
    margin-top: 20px;
    justify-content: center;
}

.points_item_third {
    height: 150px;
    padding-top: 30px;
    margin-top: 20px;
    justify-content: center;
}

.circle {
    width: 120px;
    height: 120px;
    border-style: solid;
    border-width: 3px;
    border-radius: 50%;
    border-color: #00d9a3;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin-left: 10px;
    margin-right: 10px;
}

.circle:hover {
    background-color: #00d9a3;
    color: #ffffff;
}

.circle2 {
    width: 120px;
    height: 120px;
    border-style: solid;
    border-width: 3px;
    border-radius: 50%;
    border-color: #26c9ff;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
    margin-right: 10px;
}

.circle2:hover {
    background-color: #26c9ff;
    color: #ffffff;
}

.circle3 {
    width: 120px;
    height: 120px;
    border-style: solid;
    border-width: 3px;
    border-radius: 50%;
    border-color: #ff4dff;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin-left: 5px;
    margin-right: 5px;

}

.circle_text {
    text-align: center;
}

.circle3:hover {
    background-color: #ff4dff;
    color: #ffffff;
}

.summary {
    height: 150px;
    background-color: #ffffff;
    padding-top: 20px;
    padding-left: 8%;
    flex-direction: column;
}

.summary_title {
    font-size: 30px;
}

.summary_detail {
    padding-top: 10px;
    flex-grow: 1;
}

.title {
    height: 150px;
    padding-top: 30px;
    padding-left: 10%;
    display: flex;
    flex-direction: column;
}

.title_class {
    font-size: 20px;
    padding-left: 27px;
    color: #00d9a3;
}

.title_font {
    height: 50px;
    font-size: 30px;
    /* color: #33b8b9; */
}

.title_font::before {
    display: flex;
    justify-content: center;
    content: '';
    display: block;
    width: 20px;
    height: 20px;
    background: #00d9a3;
    border-radius: 50%;
    margin-top: 16px;
    margin-right: 5px;
}

.el-tabs {
    width: 100%;
}

.tabs {
    min-height: 1050px;
}

.points {
    margin-top: 20px;
}

.el-carousel__item:nth-child(2n) {
    /* background-color: #99a9bf; */
    background-color: #f5f5f5;
}

.el-carousel__item:nth-child(2n + 1) {
    /* background-color: #d3dce6; */
    background-color: #f2f2f2;
}

.points_footer_title {
    margin-top: 30px;
    padding-top: 20px;
    padding-left: 8%;
    font-size: 30px;
    background-color: beige;
}

.points_footer {
    padding-left: 10%;
    padding-top: 40px;
    height: 70px;
    background-color: beige;
}

.points_footer_detail {
    padding-left: 10%;
    min-height: 100px;
    background-color: beige;
    padding-bottom: 30px;
}

.circle_green {
    width: 30px;
    height: 30px;
    background-color: #00d9a3;
    border-radius: 50%;
    border-style: solid;
    border-width: 4px;
    border-radius: 50%;
    border-color: #ffffff;
}

.circle_blue {
    width: 30px;
    height: 30px;
    background-color: #26c9ff;
    border-radius: 50%;
    border-style: solid;
    border-width: 4px;
    border-radius: 50%;
    border-color: #ffffff;
}

.circle_pink {
    width: 30px;
    height: 30px;
    background-color: #ff4dff;
    border-radius: 50%;
    border-style: solid;
    border-width: 4px;
    border-radius: 50%;
    border-color: #ffffff;
}

.line {
    flex-grow: 1;
    height: 4px;
    background-color: #ffffff;
    margin-top: 13px;
}
</style>