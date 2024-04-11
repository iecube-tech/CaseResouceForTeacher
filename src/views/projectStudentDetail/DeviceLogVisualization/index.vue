<template>
    <div>
        <div :id="'log_visualization' + props.pstId" style="height: 750px; width: 100%;"></div>
    </div>
</template>

<script setup>
import { onBeforeMount, onMounted, onUnmounted, ref, watch } from 'vue';
import { ElMessage } from 'element-plus';
import * as echarts from 'echarts';
import { getLogVisualization } from '@/apis/iecubeDevice/pstLog/getPSTLogPrased.js';

const props = defineProps({
    pstId: Number
})

const visualization = ref({
    pstId: props.pstId,
    categories: '',
    data: ''
})

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
            data: [{ "name": "SMU软面板", "value": [0, "2024/4/2 15:14:44", "2024/4/2 15:14:48", "开始"], "itemStyle": { "color": "#5470c6" } }, { "name": "SMU软面板", "value": [0, "2024/4/2 15:14:48", "2024/4/2 15:14:52", "修改SMU1电流范围 \u003e\u003e Range 4(Max 200uA)"], "itemStyle": { "color": "#5470c6" } }, { "name": "SMU软面板", "value": [0, "2024/4/2 15:14:52", "2024/4/2 15:14:55", "修改SMU1 OSR \u003e\u003e 128"], "itemStyle": { "color": "#5470c6" } }, { "name": "SMU软面板", "value": [0, "2024/4/2 15:14:55", "2024/4/2 15:14:58", "修改SMU1电压 \u003e\u003e 10"], "itemStyle": { "color": "#5470c6" } }, { "name": "SMU软面板", "value": [0, "2024/4/2 15:14:58", "2024/4/2 15:15:01", "修改SMU2电流范围 \u003e\u003e Range 2(Max 20mA)"], "itemStyle": { "color": "#5470c6" } }, { "name": "SMU软面板", "value": [0, "2024/4/2 15:15:01", "2024/4/2 15:15:04", "修改SMU2 OSR \u003e\u003e 128"], "itemStyle": { "color": "#5470c6" } }, { "name": "SMU软面板", "value": [0, "2024/4/2 15:15:04", "2024/4/2 15:15:08", "修改SMU2 电压 \u003e\u003e 10"], "itemStyle": { "color": "#5470c6" } }, { "name": "SMU软面板", "value": [0, "2024/4/2 15:15:08", "2024/4/2 15:15:09", "修改SMU1状态 \u003e\u003e ON"], "itemStyle": { "color": "#5470c6" } }, { "name": "SMU软面板", "value": [0, "2024/4/2 15:15:09", "2024/4/2 15:15:47", "修改SMU2状态 \u003e\u003e ON"], "itemStyle": { "color": "#5470c6" } }, { "name": "FGEN软面板", "value": [1, "2024/4/2 15:15:47", "2024/4/2 15:15:49", "启动"], "itemStyle": { "color": "#91cc75" } }, { "name": "FGEN软面板", "value": [1, "2024/4/2 15:15:49", "2024/4/2 15:15:49", "修改启用状态 \u003e\u003e TRUE"], "itemStyle": { "color": "#91cc75" } }, { "name": "FGEN软面板", "value": [1, "2024/4/2 15:15:49", "2024/4/2 15:15:56", "修改标准波形参数 \u003e\u003e {Type:Sine;Frequency:5M;Amplitude:100m;Duty Cycle:50;DC Offset:0}"], "itemStyle": { "color": "#91cc75" } }, { "name": "OSC软面板", "value": [2, "2024/4/2 15:15:56", "2024/4/2 15:15:57", "通道0参数修改 \u003e\u003e Enable:FALSE"], "itemStyle": { "color": "#fac858" } }, { "name": "OSC软面板", "value": [2, "2024/4/2 15:15:57", "2024/4/2 15:16:04", "通道0参数修改 \u003e\u003e Enable:TRUE"], "itemStyle": { "color": "#fac858" } }, { "name": "OSC软面板", "value": [2, "2024/4/2 15:16:04", "2024/4/2 15:16:18", "通道0参数修改 \u003e\u003e Voltage Level:400mV"], "itemStyle": { "color": "#fac858" } }, { "name": "OSC软面板", "value": [2, "2024/4/2 15:16:18", "2024/4/2 15:16:22", "时间参数修改 \u003e\u003e Timebase Level:500ns"], "itemStyle": { "color": "#fac858" } }, { "name": "OSC软面板", "value": [2, "2024/4/2 15:16:22", "2024/4/2 15:16:29", "时间参数修改 \u003e\u003e Horizontal Position(%):50"], "itemStyle": { "color": "#fac858" } }, { "name": "OSC软面板", "value": [2, "2024/4/2 15:16:29", "2024/4/2 15:16:36", "运行"], "itemStyle": { "color": "#fac858" } }, { "name": "OSC软面板", "value": [2, "2024/4/2 15:16:36", "2024/4/2 15:16:41", "时间参数修改 \u003e\u003e Timebase Level:200ns"], "itemStyle": { "color": "#fac858" } }, { "name": "OSC软面板", "value": [2, "2024/4/2 15:16:41", "2024/4/2 15:17:44", "停止[2024/4/2 15:17:42] CV曲线软面板修改配置"], "itemStyle": { "color": "#fac858" } }, { "name": "CV曲线软面板", "value": [3, "2024/4/2 15:17:44", "2024/4/2 15:17:46", "修改配置 \u003e\u003e {Current Range:Range 2(Max 20mA)}"], "itemStyle": { "color": "#ee6666" } }, { "name": "CV曲线软面板", "value": [3, "2024/4/2 15:17:46", "2024/4/2 15:17:47", "修改配置 \u003e\u003e {OSR:128}"], "itemStyle": { "color": "#ee6666" } }, { "name": "CV曲线软面板", "value": [3, "2024/4/2 15:17:47", "2024/4/2 15:17:48", "修改配置 \u003e\u003e {NoiseRed:FALSE}"], "itemStyle": { "color": "#ee6666" } }, { "name": "CV曲线软面板", "value": [3, "2024/4/2 15:17:48", "2024/4/2 15:17:51", "修改配置 \u003e\u003e {NoiseRed:TRUE}"], "itemStyle": { "color": "#ee6666" } }, { "name": "CV曲线软面板", "value": [3, "2024/4/2 15:17:51", "2024/4/2 15:17:53", "修改配置"], "itemStyle": { "color": "#ee6666" } }, { "name": "CV曲线软面板", "value": [3, "2024/4/2 15:17:53", "2024/4/2 15:17:55", "修改配置"], "itemStyle": { "color": "#ee6666" } }, { "name": "CV曲线软面板", "value": [3, "2024/4/2 15:17:55", "2024/4/2 15:17:58", "修改配置 \u003e\u003e {SMUSweepStepV:500m}"], "itemStyle": { "color": "#ee6666" } }, { "name": "CV曲线软面板", "value": [3, "2024/4/2 15:17:58", "2024/4/2 15:18:00", "修改配置 \u003e\u003e [100,1k,2k]"], "itemStyle": { "color": "#ee6666" } }, { "name": "CV曲线软面板", "value": [3, "2024/4/2 15:18:00", "2024/4/2 15:18:02", "修改配置 \u003e\u003e [100,1k,2k]"], "itemStyle": { "color": "#ee6666" } }, { "name": "CV曲线软面板", "value": [3, "2024/4/2 15:18:02", "2024/4/2 15:18:06", "修改配置 \u003e\u003e [100,1k,2k]"], "itemStyle": { "color": "#ee6666" } }, { "name": "CV曲线软面板", "value": [3, "2024/4/2 15:18:06", "2024/04/02 15:18:07", "扫描"], "itemStyle": { "color": "#ee6666" } }]
        }
    ]
};

let barChart = null

watch(
    () => visualization.data, // 监视 count 数据的变化
    (newValue, oldValue) => {
        console.log(`count 变化了：从 ${oldValue} 到 ${newValue}`);
    }
);

const barOptionData = () => {
    console.log(visualization.value)
    if (visualization.value.categories != null && visualization.value.data != null) {
        option.xAxis.data = JSON.parse(visualization.value.categories)
        option.series[0].data = JSON.parse(visualization.value.data)
    }

}

function destoryEchart() {
    if (barChart) {
        barChart.dispose()
        barChart = null
    }
}

function initMychart() {
    barOptionData();
    barChart = echarts.init(document.getElementById('log_visualization' + visualization.value.pstId))
    barChart.setOption(option)
    barChart.resize()

    window.addEventListener('resize', function () {
        barChart.resize()
    })
    window.addEventListener('popstate', function () {
        destoryEchart()
    })
}

onBeforeMount(() => {
    getLogVisualization(props.pstId).then(res => {
        if (res.state == 200) {
            visualization.value = res.data
        } else {
            ElMessage.error(res.message)
        }
    })
})

onMounted(() => {
    setTimeout(() => {
        destoryEchart();
        initMychart();
    }, 2000)
})

onUnmounted(() => {

})
</script>
<style scoped></style>
