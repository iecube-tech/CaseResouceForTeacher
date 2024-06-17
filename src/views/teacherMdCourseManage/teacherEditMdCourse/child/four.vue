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
    <el-row class="bottom-row">
        <el-button @click="lastStep">上一步</el-button>
        <el-button type="primary" @click="courseNext()">下一步</el-button>
    </el-row>

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
import { UpMdCompleton } from "@/apis/course_md/upMdCompletion.js";
import { GetCaseMapping } from "@/apis/map/getCaseMapping.js";
import { AddRootNode } from "@/apis/map/addRootNode.js";
import { AddNode } from "@/apis/map/addNode.js";
import { UpNode } from "@/apis/map/upNode.js";
import { DelNode } from "@/apis/map/delNode.js";
import { GetChapterListByCourseId } from "@/apis/doc_md/getChapterListByCourse.js"
import * as echarts from 'echarts';

const props = defineProps({
    course: Object
})

onBeforeMount(() => {
    course.value = props.course
    courseId.value = props.course.id
    addRootNode(course.value.name, course.value.id)
    getChapterListByCourseId()
})

const courseId = ref()
const course = ref()

const emit = defineEmits(['nextStep', 'lastStep'])
const nextStep = (completion: number) => {
    emit("nextStep", completion)
}
const lastStep = () => {
    emit('lastStep')
}

const getMapping = (caseId) => {
    GetCaseMapping(caseId).then(res => {
        if (res.state == 200) {
            dataSource.value = res.data
        } else {
            ElMessage.error(res.message)
        }
    })
}

const addRootNode = (name, id) => {
    AddRootNode(name, id).then(res => {
        if (res.state == 200) {
            dataSource.value = res.data
            updataChart()
        } else {
            ElMessage.error(res.message)
        }
    })
}


const addNode = (nodeQo, caseId) => {
    AddNode(nodeQo, caseId).then(res => {
        if (res.state == 200) {
            dataSource.value = res.data
            updataChart()
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
const getChapterListByCourseId = () => {
    GetChapterListByCourseId(course.value.mdCourse).then(res => {
        if (res.state == 200) {
            chaptetList.value = res.data
        } else {
            ElMessage.error(res.message)
        }
    })
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
            UpNode(JSON.parse(JSON.stringify(updateForm.value)), courseId.value).then(res => {
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

const delNode = (caseId, nodeId) => {
    DelNode(caseId, nodeId).then(res => {
        if (res.state == 200) {
            dataSource.value = res.data
            updataChart()
        } else {
            ElMessage.error(res.message)
        }
    })
}

const courseNext = () => {
    UpMdCompleton(courseId.value, 3).then(res => {
        if (res.state == 200) {
            let completion = res.data.completion
            nextStep(completion)
        }
        else {
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
        newChild.itemStyle.color = "#005f6b"
        newChild.label.position = "left"
        newChild.label.fontSize = 24
        newChild.symbolSize = 24
    } else if (data.level == 2) {
        // level = 3
        newChild.itemStyle.color = "#008c9e"
        newChild.label.position = "left"
        newChild.label.fontSize = 20
        newChild.symbolSize = 15
    } else if (data.level == 3) {
        // level = 4
    } else {
        return
    }
    addNode(JSON.parse(JSON.stringify(newChild)), courseId.value);
}

const edit = (node: Node, data: Tree) => {
    updateForm.value = data
    updateDialog.value = true
}

const remove = (node: Node, data: Tree) => {
    delNode(courseId.value, data.id)
}
const dataSource = ref<Tree[]>([])
const treeChart = ref()
const option = ref({
    tooltip: {
        trigger: 'item',
        triggerOn: 'mousemove'
    },
    title: {
        id: 1,
        text: '单击展开/折叠节点，右击跳转节点详细信息',
        textStyle: {
            color: '#D3D3D3',
            fontWeight: 'bold',
        }
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
            roam: true,
            zoom: 0.6,
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

const initChart = () => {
    destoryEchart();
    treeChart.value = echarts.init(document.getElementById("tree_chart"))
    treeChart.value.showLoading();
    //todo 初始化数据
    option.value.series[0].data = dataSource.value
    treeChart.value.setOption(option.value);
    treeChart.value.hideLoading();

    treeChart.value.off('contextmenu');
    treeChart.value.on('contextmenu', function (parmas) {
        console.log(parmas)
        if (parmas.data.link && parmas.data.link != '') {
            if (parmas.data.link.startsWith('http', 0)) {
                window.open(parmas.data.link);
            }
        }
    })
    // document.oncontextmenu = function () {
    //     return false;
    // }
    let objDemo = document.getElementById('tree_chart')
    objDemo.oncontextmenu = (e) => {
        e.preventDefault()
    }
    window.addEventListener('resize', function () {
        treeChart.value.resize();
    })
}

const updataChart = () => {
    if (treeChart.value != null) {
        option.value.series[0].data = dataSource.value
        treeChart.value.setOption(option.value)
    }
}

const destoryEchart = () => {
    if (treeChart.value != null) {
        treeChart.value.dispose()
        treeChart.value = null
    }
}
onBeforeMount(() => {

})
onMounted(() => {
    echarts.dispose;
    setTimeout(() => {
        initChart();
    }, 500)

})
onUnmounted(() => {
    destoryEchart();
    document.oncontextmenu = function () {
        return false;
    }
})
</script>
<style scoped>
.custom-tree-node {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex: 1;
}

.mapping {
    display: flex;
    flex-direction: row
}

.mapping_tree {
    width: 300px;
    height: 70vh;
    overflow-y: auto;
}

.echart_container {
    flex: 1;
    padding-left: 20px;
    width: 100%;
    height: 70vh;
}

.bottom-row {
    margin-top: 20px;
    display: flex;
    justify-content: flex-end;
}
</style>