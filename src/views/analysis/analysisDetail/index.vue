<template>
    <div style="display: flex; flex-direction: column;">
        <pageHeader :route=route />
        <div class="analysis">
            <div class="history">
                <div>
                    <h1 style="color: #f4a901;">案例历史项目数据</h1>
                    <el-row :gutter="20" style="margin-top: 20px;">
                        <el-col :span="12">
                            <el-card style="height: 60px; display: flex; flex-direction: column;" shadow="hover"
                                :body-style="{ padding: 0 }">
                                <div style="font-size: 16px; font-weight: bold; color: #000;"><span
                                        style="padding-left: 10px;">历史已参与项目人数</span></div>
                                <div style="text-align: end; padding-right: 10px; font-size: 20px; font-weight: bold;">
                                    <span style="color: #f4a901;">{{ 62 }}人</span>
                                </div>
                            </el-card>
                        </el-col>
                        <el-col :span="12">
                            <el-card style="height: 60px; display: flex; flex-direction: column;" shadow="hover"
                                :body-style="{ padding: 0 }">
                                <div style="font-size: 16px; font-weight: bold; color: #000;"><span
                                        style="padding-left: 10px;">历史已完成项目人数</span></div>
                                <div style="text-align: end; padding-right: 10px; font-size: 20px; font-weight: bold;">
                                    <span style="color: #f4a901;">{{ 32 }}人</span>
                                </div>
                            </el-card>
                        </el-col>
                        <el-col :span="12" style="margin-top: 20px;">
                            <el-card style="height: 60px; display: flex; flex-direction: column;" shadow="hover"
                                :body-style="{ padding: 0 }">
                                <div style="font-size: 16px; font-weight: bold; color: #000;"><span
                                        style="padding-left: 10px;">项目历史平均分数</span></div>
                                <div style="text-align: end; padding-right: 10px; font-size: 20px; font-weight: bold;">
                                    <span style="color: #f4a901;">{{ 80 }}分</span>
                                </div>
                            </el-card>
                        </el-col>

                    </el-row>
                </div>
                <el-divider />
                <div>
                    <div><span>项目历史各任务成绩平均分数</span></div>
                    <div id="chartOne" style="min-height: 400px;"></div>
                </div>
                <el-divider />
                <div>
                    <div><span>项目历史各任务成绩中位数</span></div>
                    <div id="chartTwo" style="min-height: 400px;"></div>
                </div>
                <el-divider />
                <div>
                    <div><span>历史该项目各任务阶段Tag(问题点)出现数量最多Top3</span></div>
                    <div id="chartThree" style="min-height: 400px;"></div>
                </div>
            </div>
            <div class="current">
                <div>
                    <h1>当前项目状态Dashboard</h1>
                    <el-row :gutter="20" style="margin-top: 20px;">
                        <el-col :span="12">
                            <el-card style="height: 60px; display: flex; flex-direction: column;" shadow="hover"
                                :body-style="{ padding: 0 }">
                                <div style="font-size: 16px; font-weight: bold; color: #000;"><span
                                        style="padding-left: 10px;">参与项目人数</span></div>
                                <div style="text-align: end; padding-right: 10px; font-size: 20px; font-weight: bold;">
                                    <span>{{ 32 }}人</span>
                                </div>
                            </el-card>
                        </el-col>
                        <el-col :span="12">
                            <el-card style="height: 60px; display: flex; flex-direction: column;" shadow="hover"
                                :body-style="{ padding: 0 }">
                                <div style="font-size: 16px; font-weight: bold; color: #000;"><span
                                        style="padding-left: 10px;">已完成项目人数</span></div>
                                <div style="text-align: end; padding-right: 10px; font-size: 20px; font-weight: bold;">
                                    <span>{{ 32 }}人</span>
                                </div>
                            </el-card>
                        </el-col>
                    </el-row>
                </div>
                <el-divider />
                <div>
                    <div><span>项目当前任务人数分布图</span></div>
                    <div id="chartFour" style="min-height: 400px;"></div>
                </div>
                <el-divider />
                <div>
                    <div><span>项目各任务成绩平均分数</span></div>
                    <div id="chartFive" style="min-height: 400px;"></div>
                </div>
                <el-divider />
                <div>
                    <div><span>项目各任务成绩中位数</span></div>
                    <div id="chartSix" style="min-height: 400px;"></div>
                </div>
                <el-divider />
                <div>
                    <div><span>当项目各任务阶段Tag(问题点)出现数量最多Top3</span></div>
                    <div id="chartSeven" style="min-height: 400px;"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import * as echarts from 'echarts';
import { onMounted, onUnmounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import pageHeader from '@/components/pageheader.vue'

const route = useRoute()

const optionOne = {
    xAxis: {
        type: 'category',
        data: ['任务1', '任务2', '任务3', '任务4', '任务5',]
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            data: [82, 86, 79, 76, 75],
            type: 'bar',
            itemStyle: {
                color: '#fbedd0',
                borderRadius: [5, 5, 0, 0]
            },
            emphasis: {
                itemStyle: {
                    color: '#f4a901'
                }
            }
        }
    ],
    tooltip: {
        trigger: 'axis',
        formatter: '{b0}: {c0}分'
    },
};

const optionTwo = {
    xAxis: {
        type: 'category',
        data: ['任务1', '任务2', '任务3', '任务4', '任务5',]
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            data: [82, 86, 79, 76, 75],
            type: 'bar',
            itemStyle: {
                color: '#fbedd0',
                borderRadius: [5, 5, 0, 0]
            },
            emphasis: {
                itemStyle: {
                    color: '#f4a901'
                }
            }
        }
    ],
    tooltip: {
        trigger: 'axis',
        formatter: '{b0}: {c0}分'
    },
};

const optionThree = {
    xAxis: {
        type: 'category',
        data: ['扩展电路不正确', '电路设计不合理', '仪器使用不正确',]
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            data: [47, 41, 37],
            type: 'bar',
            itemStyle: {
                color: '#fbedd0',
                borderRadius: [5, 5, 0, 0]
            },
            emphasis: {
                itemStyle: {
                    color: '#f4a901'
                }
            }
        }
    ],
    tooltip: {
        trigger: 'axis',
        formatter: '{b0}: {c0}个'
    },
};
const optionFour = {
    title: {
        left: 'left'
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    series: [
        {
            name: '当前进行中的任务人数',
            type: 'pie',
            radius: ['40%', '70%'],
            data: [{ value: 0, title: '任务1' },
            { value: 0, title: '任务2' },
            { value: 0, title: '任务3' },
            { value: 0, title: '任务4' },
            { value: 0, title: '任务5' }
            ],
            label: {
                show: false,
                position: 'center'
            },
            center: ['50%', '50%'],
            emphasis: {
                label: {
                    show: true,
                    fontSize: 16,
                    fontWeight: 'bold',
                }
            },
        },

    ]
};

const optionFive = {
    xAxis: {
        type: 'category',
        data: ['任务1', '任务2', '任务3', '任务4', '任务5',]
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            data: [80, 77, 75, 77, 77],
            type: 'bar',
            itemStyle: {
                color: '#d6f1f1',
                borderRadius: [5, 5, 0, 0]
            },
            emphasis: {
                itemStyle: {
                    color: '#2acecf'
                }
            }
        }
    ],
    tooltip: {
        trigger: 'axis',
        formatter: '{b0}: {c0}分'
    },
};
const optionSix = {
    xAxis: {
        type: 'category',
        data: ['任务1', '任务2', '任务3', '任务4', '任务5',]
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            data: [80, 77, 75, 77, 77],
            type: 'bar',
            itemStyle: {
                color: '#d6f1f1',
                borderRadius: [5, 5, 0, 0]
            },
            emphasis: {
                itemStyle: {
                    color: '#2acecf'
                }
            }
        }
    ],
    tooltip: {
        trigger: 'axis',
        formatter: '{b0}: {c0}分'
    },
};
const optionSeven = {
    xAxis: {
        type: 'category',
        data: ['扩展电路不正确', '电路设计不合理', '仪器使用不正确',]
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            data: [24, 18, 15],
            type: 'bar',
            itemStyle: {
                color: '#d6f1f1',
                borderRadius: [5, 5, 0, 0]
            },
            emphasis: {
                itemStyle: {
                    color: '#2acecf'
                }
            }
        }
    ],
    tooltip: {
        trigger: 'axis',
        formatter: '{b0}: {c0}个'
    },
};
const optionDataOne = ref([])
const optioneDataTwo = ref([])
const optioneDatathree = ref([])
const optionDataFour = ref([])
const optioneDataFive = ref([])
const optioneDataSix = ref([])
const optionDataSeven = ref([])

let chartOne = null
let chartTwo = null
let chartThree = null
let chartFour = null
let chartFive = null
let chartSix = null
let chartSeven = null

function destoryEchart() {
    if (chartOne) {
        chartOne.dispose()
        chartOne = null
    }
    if (chartTwo) {
        chartTwo.dispose()
        chartTwo = null
    }
    if (chartThree) {
        chartThree.dispose()
        chartThree = null
    }
    if (chartFour) {
        chartFour.dispose()
        chartFour = null
    }
    if (chartFive) {
        chartFive.dispose()
        chartFive = null
    }
    if (chartSix) {
        chartSix.dispose()
        chartSix = null
    }
    if (chartSeven) {
        chartSeven.dispose()
        chartSeven = null
    }
}
function initMychart() {

    chartOne = echarts.init(document.getElementById('chartOne'));
    chartTwo = echarts.init(document.getElementById('chartTwo'));
    chartThree = echarts.init(document.getElementById('chartThree'));
    chartFour = echarts.init(document.getElementById('chartFour'));
    chartFive = echarts.init(document.getElementById('chartFive'));
    chartSix = echarts.init(document.getElementById('chartSix'));
    chartSeven = echarts.init(document.getElementById('chartSeven'));

    chartOne.setOption(optionOne)
    chartTwo.setOption(optionTwo)
    chartThree.setOption(optionThree)
    chartFour.setOption(optionFour)
    chartFive.setOption(optionFive)
    chartSix.setOption(optionSix)
    chartSeven.setOption(optionSeven)
    window.addEventListener('resize', function () {
        chartOne.resize()
        chartTwo.resize()
        chartThree.resize()
        chartFour.resize()
        chartFive.resize()
        chartSix.resize()
        chartSeven.resize()
    })
    window.addEventListener('popstate', function () {
        destoryEchart()
    })

}
onMounted(() => {
    destoryEchart();
    setTimeout(() => {
        initMychart();
    }, 300);
})

onUnmounted(() => {
    destoryEchart();
})


</script>
<style scoped>
.history {
    padding: 10px;
    width: 50%;
    background-color: #fff;
    margin-right: 20px;
    display: flex;
    flex-direction: column;
}

.current {
    padding: 10px;
    width: 50%;
    background-color: #fff;
    margin-left: 20px;
    display: flex;
    flex-direction: column;
}

.analysis {
    padding: 20px calc(164px + 4.8vw);
    display: flex;

}
</style>