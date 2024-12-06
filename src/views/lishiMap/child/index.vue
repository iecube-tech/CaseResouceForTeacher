<template>
    <div class="mapping">
        <div class="mapping_tree">
            <el-tree style="max-width: 100%" :data="dataSource" draggable default-expand-all node-key="id"
                :props="defaultProps" :expand-on-click-node="false">
                <template #default="{ node, data }">
                    <div class="custom-tree-node">
                        <div style="overflow: hidden;">
                            <span>{{ node.label }}</span>
                        </div>
                        <div>
                            <span>
                                <el-button v-if="data.level < 4" link :icon="Plus" @click="append(data)"></el-button>
                                <el-button link :icon="Edit" @click="edit(node, data)"></el-button>
                                <el-button v-if="data.level > 1" link :icon="Delete"
                                    @click="remove(node, data)"></el-button>
                            </span>
                        </div>
                    </div>
                </template>
            </el-tree>
        </div>
        <div class="echart_container" id="tree_chart">
        </div>
    </div>

    <el-dialog v-model="updateDialog" title="节点信息" width="700" @closed="cleanUpdateForm">
        <el-form :model="updateForm" label-width="120px" :rules="updtaeFormRules" ref="updateFormRef">
            <el-form-item label="名称：" prop="name">
                <el-input v-model="updateForm.name" style="width: 500px;" />
            </el-form-item>
            <el-form-item label="跳转链接：">
                <div>
                    <el-row>
                        <el-select v-model="currentLinkType" style="width: 320px;">
                            <el-option v-for="(item, i) in linkType" :key="i" :label="item.label"
                                :value="item.id"></el-option>
                        </el-select>
                    </el-row>
                    <el-row style="margin-top: 20px">
                        <el-input v-if="currentLinkType == 1" v-model="updateForm.link" style="width: 500px;" />
                        <el-select v-else v-model="updateForm.link" placeholder="选择指导书" style="width: 320px;">
                            <el-option v-for="(item, i) in chaptetList" :key="i" :label="item.name"
                                :value="'#' + item.name" />
                        </el-select>
                    </el-row>
                </div>
            </el-form-item>
            <el-form-item label="节点大小：">
                <el-select v-model="updateForm.symbolSize" style="width: 120px;">
                    <el-option v-for="(item, i) in sizeList" :key="i" :label="item" :value="item" />
                </el-select>
            </el-form-item>
            <el-form-item label="字体大小：">
                <el-select v-model="updateForm.label.fontSize" style="width: 120px;">
                    <el-option v-for="(item, i) in sizeList" :key="i" :label="item" :value="item" />
                </el-select>
            </el-form-item>
            <el-form-item label="颜色：">
                <el-color-picker v-model="updateForm.itemStyle.color" show-alpha :predefine="predefineColors" />
            </el-form-item>
        </el-form>
        <template #footer>
            <div class="dialog-footer">
                <el-button @click="updateDialog = false">取消</el-button>
                <el-button type="primary" @click="updateNode(updateFormRef)">
                    更新
                </el-button>
            </div>
        </template>
    </el-dialog>
</template>

<script lang="ts" setup>
import { onBeforeMount, onMounted, onUnmounted, reactive, ref } from 'vue'
import { Delete, Edit, Plus } from '@element-plus/icons-vue'
import type Node from 'element-plus/es/components/tree/src/model/node'
import { ElMessage, FormInstance, FormRules } from 'element-plus'
import * as echarts from 'echarts';
import { useRoute } from 'vue-router';
import { GetMapVo } from '@/apis/liShiMap/getMapVoByRootId.js';
import { AddNode } from '@/apis/liShiMap/addNode.js'
import { UpNode } from '@/apis/liShiMap/upNode.js'
import { DelNode } from '@/apis/liShiMap/delNode.js'

const route = useRoute()
const rootNodeId = ref()

onBeforeMount(() => {
    dataSource.value = null
})

const getDataSource = (id) => {
    GetMapVo(id).then(res => {
        if (res.state == 200) {
            dataSource.value = res.data
        } else {
            ElMessage.error(res.message)
        }
    })
}

const updateDialog = ref(false)
const updateFormRef = ref<FormInstance>()
const updateForm = ref<Tree>()

const updtaeFormRules = reactive<FormRules>({
    name: [{ required: true, message: '请输入名称', trigger: 'blur' }],
})
const linkType = [
    {
        id: 1,
        label: "外部链接"
    },
    {
        id: 2,
        label: "实验指导书"
    },
]

const currentLinkType = ref(1)

const chaptetList = ref([])
const getChapterList = () => {

}

const sizeList = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40]

const predefineColors = ref([
    '#343838',
    '#005f6b',
    '#008c9e',
    '#00dffc',
    '#ff4500',
    '#ff8c00',
    '#ffd700',
    '#90ee90',
    '#00ced1',
    '#1e90ff',
    '#c71585',
    'rgba(255, 69, 0, 0.68)',
    'rgb(255, 120, 0)',
    'hsv(51, 100, 98)',
    'hsva(120, 40, 94, 0.5)',
    'hsl(181, 100%, 37%)',
    'hsla(209, 100%, 56%, 0.73)',
    '#c7158577',
])

const updateNode = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.validate((valid, fields) => {
        if (valid) {
            //提交请求
            UpNode(JSON.parse(JSON.stringify(updateForm.value)), rootNodeId.value).then(res => {
                if (res.state == 200) {
                    updateDialog.value = false
                    dataSource.value = res.data
                    cleanUpdateForm
                    updataChart()
                } else {
                    ElMessage.error(res.message)
                }
            })
        } else {
            ElMessage.error
        }
    })
}

const updateNodeStyle = () => {
    let form = JSON.parse(JSON.stringify(updateForm.value))
    if (form.level == 2) {
        level2.value.color = form.itemStyle.color
        level2.value.position = form.label.position
        level2.value.fontSize = form.label.fontSize
        level2.value.symbolSize = form.symbolSize
    }
    if (form.level == 3) {
        level3.value.color = form.itemStyle.color
        level3.value.position = form.label.position
        level3.value.fontSize = form.label.fontSize
        level3.value.symbolSize = form.symbolSize
    }
    if (form.level == 4) {
        level4.value.color = form.itemStyle.color
        level4.value.position = form.label.position
        level4.value.fontSize = form.label.fontSize
        level4.value.symbolSize = form.symbolSize
    }
}

const cleanUpdateForm = () => {
    updateForm.value = {
        id: null,
        level: null,
        name: '',
        pid: null,
        itemStyle: {
            color: "#00dffc"
        },
        label: {
            position: "right",
            color: 'inherit',
            fontSize: 14,
        },
        symbolSize: 10,
        link: "",
    }
}

const addNode = (nodeQo) => {
    AddNode(nodeQo, rootNodeId.value).then(res => {
        if (res.state == 200) {
            dataSource.value = res.data
            updataChart()
        } else {
            ElMessage.error(res.message)
        }
    })
}

const delNode = (nodeId) => {
    DelNode(nodeId, rootNodeId.value).then(res => {
        if (res.state == 200) {
            dataSource.value = res.data
            updataChart()
        } else {
            ElMessage.error(res.message)
        }
    })
}

const defaultProps = {
    children: 'children',
    label: 'name',
}
interface Tree {
    id?: number
    name: string
    level?: number
    pid: number,
    itemStyle?: {
        color: string
    }
    label?: {
        position: string,
        color: string,
        fontSize: number,
    }
    symbolSize?: number
    link?: string
    children?: Tree[]
}

const level2 = ref({
    color: "#005f6b",
    position: "left",
    fontSize: 24,
    symbolSize: 24,
})

const level3 = ref({
    color: "#008c9e",
    position: "left",
    fontSize: 20,
    symbolSize: 15,
})

const level4 = ref({
    color: "#00dffc",
    position: "right",
    fontSize: 14,
    symbolSize: 10,
})

const append = (data: Tree) => {
    if (!data.children) {
        data.children = []
    }
    const newChild = {
        id: null,
        level: 1,
        name: '新建节点',
        pid: null,
        itemStyle: {
            color: "#00dffc"
        },
        label: {
            position: "right",
            color: 'inherit',
            fontSize: 14,
        },
        symbolSize: 10,
        link: "",
        children: []
    }
    newChild.level = data.level + 1
    newChild.pid = data.id
    if (data.level == 1) {
        // level = 2
        newChild.itemStyle.color = level2.value.color
        newChild.label.position = level2.value.position
        newChild.label.fontSize = level2.value.fontSize
        newChild.symbolSize = level2.value.symbolSize
    } else if (data.level == 2) {
        // level = 3
        newChild.itemStyle.color = level3.value.color
        newChild.label.position = level3.value.position
        newChild.label.fontSize = level3.value.fontSize
        newChild.symbolSize = level3.value.symbolSize
    } else if (data.level == 3) {
        // level = 4
        newChild.itemStyle.color = level4.value.color
        newChild.label.position = level4.value.position
        newChild.label.fontSize = level4.value.fontSize
        newChild.symbolSize = level4.value.symbolSize
    } else {
        return
    }
    addNode(JSON.parse(JSON.stringify(newChild)));
}

const edit = (node: Node, data: Tree) => {
    updateForm.value = data
    updateDialog.value = true
}

const remove = (node: Node, data: Tree) => {
    delNode(data.id)
}

const dataSource = ref<Tree[]>([])
const treeChart = ref()
const option = ref({
    tooltip: {
        trigger: 'item',
        triggerOn: 'mousemove'
    },
    series: [
        {
            type: 'tree',
            name: 'tree',
            data: [],
            top: '5%',
            left: '10%',
            bottom: '5%',
            right: '10%',
            roam: 'move',
            // zoom: 0.6,
            symbolSize: 10, // 标记的大小
            symbol: "emptyCircle",
            itemStyle: {
                color: "#89c7c7",
            },
            leaves: {
                label: {
                    position: 'right',
                },
            },
            emphasis: {
                focus: 'relative', // 聚焦方式
            },
            initialTreeDepth: 3, // 全部展开-1 / 展开层级
            animationDuration: 550,
            animationDurationUpdate: 750,
            layout: 'orthogonal',
            orient: 'LR',
        },
    ]
})
const courseMappingHeight = ref(900)
const treeLeafNum = ref(0)

function getTreeLeaf(treeData, leafList) {
    // 判断是否为数组
    if (Array.isArray(treeData)) {
        treeData.forEach(item => {
            if (item.children && item.children.length > 0) {
                getTreeLeaf(item.children, leafList)
            } else {
                leafList.push(item)
            }
        })
    } else {
        if (treeData.children && treeData.children.length > 0) {
            getTreeLeaf(treeData.children, leafList)
        } else {
            leafList.push(treeData)
        }
    }
    return leafList
}

function getAllNodeInTree(treeData) {
    const list = []
    treeData.forEach(node => {
        list.push(node)
        if (node.children.length > 0) {
            list.push.apply(list, getAllNodeInTree(node.children))
        }
    })
    return list
}

const initChart = () => {
    destoryEchart();
    const eleArr = getTreeLeaf(dataSource.value, [])
    const itemHeight = 40;
    const currentHeight = itemHeight * (eleArr.length - 1) || itemHeight;
    const newHeight = Math.max(currentHeight, itemHeight, courseMappingHeight.value);
    courseMappingHeight.value = newHeight;
    treeChart.value = echarts.init(document.getElementById("tree_chart"))
    treeChart.value.showLoading();
    //todo 初始化数据
    option.value.series[0].data = dataSource.value
    treeChart.value.setOption(option.value);
    treeChart.value.hideLoading();
    treeChart.value.on('mousedown', function (params: any) {
        const name = params.data.name;
        const dataIndex = params.dataIndex;
        console.log(dataIndex)
        const curNode = treeChart.value._chartsViews[0]._data.tree._nodes.filter(function (item: any) {
            return item.name === name;
        });
        if (curNode[0].depth) {
            treeChart.value._chartsViews[0]._data.tree._nodes.forEach(function (item: any) {
                if (params.event.target.culling === false) {
                    //点击标签阻止默认节点展开或收缩事件
                    if (item.dataIndex === dataIndex) {
                        // 若是展开状态不允许收缩，若是收缩状态不允许展开
                        item.isExpand = !item.isExpand;
                    }
                }
            });
        }
    })
    treeChart.value.on('click', function (params: any) {
        if (params.event.target.culling === false) {
            if (params.data.link && params.data.link != '') {
                if (params.data.link.startsWith('http', 0)) {
                    window.open(params.data.link);
                }
            }
        }
    })
    // if (treeChart.value.getWidth() && treeChart.value.getHeight()) {
    //     // treeChart.value.resize({ height: courseMappingHeight.value + 'px' });
    // }
    window.addEventListener('resize', function () {
        if (treeChart.value) {
            treeChart.value.resize();
        }
    })
}

const updataChart = () => {
    if (treeChart.value != null) {
        const eleArr = getTreeLeaf(dataSource.value, [])
        const itemHeight = 40;
        const currentHeight = itemHeight * (eleArr.length - 1) || itemHeight;
        const newHeight = Math.max(currentHeight, itemHeight, courseMappingHeight.value);
        courseMappingHeight.value = newHeight;
        treeChart.value.resize({ height: courseMappingHeight.value + 'px' })
        option.value.series[0].data = dataSource.value
        treeChart.value.setOption(option.value)
    }
    const list = getAllNodeInTree(dataSource.value)
    console.log(list)
    list.forEach(item => {
        if (item.level === 2) {
            level2.value.color = item.itemStyle.color
            level2.value.position = item.label.position
            level2.value.fontSize = item.label.fontSize
            level2.value.symbolSize = item.symbolSize
        }
        if (item.level === 3) {
            level3.value.color = item.itemStyle.color
            level3.value.position = item.label.position
            level3.value.fontSize = item.label.fontSize
            level3.value.symbolSize = item.symbolSize
        }
        if (item.level === 4) {
            level4.value.color = item.itemStyle.color
            level4.value.position = item.label.position
            level4.value.fontSize = item.label.fontSize
            level4.value.symbolSize = item.symbolSize
        }
    })
}

const destoryEchart = () => {
    if (treeChart.value != null) {
        treeChart.value.dispose()
        treeChart.value = null
    }
}

onMounted(() => {
    echarts.dispose;

    setTimeout(() => {
        rootNodeId.value = route.params.id
        getDataSource(rootNodeId.value)
    }, 200)

    setTimeout(() => {
        initChart();
    }, 1500)

})
onUnmounted(() => {
    destoryEchart();
})
</script>
<style scoped>
.custom-tree-node {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex: 1;
}

.custom-tree-node div {
    max-width: 160px;
    overflow: hidden;
}

.mapping {
    display: flex;
    flex-direction: row;
    height: 100%;
    overflow: auto;
}

.mapping_tree {
    width: 300px;
    height: 100%;
    overflow-y: auto;
}

.echart_container {
    flex: 1;
    padding-left: 20px;
    width: 100%;
    height: 100%;
}

.bottom-row {
    padding-top: 20px;
    display: flex;
    justify-content: flex-end;
}
</style>