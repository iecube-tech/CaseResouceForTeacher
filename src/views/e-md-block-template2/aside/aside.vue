<template>
    <div class="aside">
        <div class="emd-aside-top">
            <div class="sidebar-top">
                <a href="/">
                    <div style="height:60px; padding: 5px">
                        <img src="@/assets/images/产业资源管理平台.svg" alt="">
                    </div>
                </a>
            </div>
        </div>
        <div class="emd-aside-tree-container">
            <!--
                @node-click="handleNodeClick"
                @node-drop="handleNodeDrop"
                draggable
                :allow-drag="allowDarg"
                :allow-drop="allowDrop"
                 -->
            <el-tree ref="treeRef" node-key="id" :props="treeProps" :load="loadNode" :expand-on-click-node="false" lazy
                accordion @node-click="handleNodeClick" class="emd-aside-tree">
                <template #default="{ node, data }">
                    <div class="w-full flex items-center justify-between">
                        <div class="w-0 flex-1 overflow-hidden">
                            <span :title="node.label" style="overflow: hidden;">{{ node.label }}</span>
                        </div>
                        <div class="w-80px flex items-center justify-end">
                            <el-button type="primary" size="small" link :icon="Plus"
                                @click="openAddItemDialog(data, node)"></el-button>
                            <el-button type="warning" size="small" link :icon="Edit"
                                @click="openEditItemDialog(data, node)"></el-button>
                            <el-popconfirm confirm-button-text="Yes" cancel-button-text="No" :icon="InfoFilled"
                                icon-color="#626AEF" width="300px" :title="getConfirmText(data, node)"
                                @confirm="doDelete(data, node)">
                                <template #reference>
                                    <el-button type="danger" size="small" link :icon="Delete"></el-button>
                                </template>
                            </el-popconfirm>
                        </div>
                    </div>
                </template>
            </el-tree>
        </div>
        <div class="emd-aside-bottom">
            <div class="floating-button" @click="openAddLabBookDialog">
                +
            </div>
        </div>
    </div>


    <el-dialog v-model="labelDialog.visible" :title="labelDialog.title" width="30%" :before-close="closeLabelDialog">
        <el-form ref="addLabRef" :model="labelDialog.formData" :rules="labelRules" label-width="100px">
            <el-form-item label="实验名称" prop="name">
                <el-input v-model="labelDialog.formData.name"></el-input>
            </el-form-item>
            <el-form-item label="知识库章节" prop="sectionPrefix">
                <el-input v-model="labelDialog.formData.sectionPrefix"></el-input>
            </el-form-item>
            <el-form-item label="按步骤" prop="stepByStep">
                <el-switch v-model="labelDialog.formData.stepByStep"></el-switch>
            </el-form-item>
        </el-form>
        <template #footer>
            <div class="dialog-footer">
                <el-button @click="closeLabelDialog">取消</el-button>
                <el-button type="primary" @click="submitLabelItem">提交</el-button>
            </div>
        </template>
    </el-dialog>
</template>

<script setup lang="ts">
import { emdV2Store } from '@/stores/emdV2Store';
import { ElMessage, ElTree, FormInstance, FormRules } from 'element-plus';
import { Plus, Edit, Delete, InfoFilled } from '@element-plus/icons-vue';
import Node from 'element-plus/es/components/tree/src/model/node';

import { UpLabSort } from '@/apis/e-md/labProc/upLabSort';
import { UpLabModelSort } from '@/apis/e-md/labModel/upLabModelSort';
import { UpSectionSort } from '@/apis/e-md/section/upSectionSort';
import { UpBlockSort } from '@/apis/e-md/block/upBlockSort';

import { getBookLabRootNodes, getBookLabChildren, addBookLabNode, updateBookLabNode, deleteBookLabNode } from '@/apis/embV4/index.ts'
import { generateNewBookLabCatalog } from '@/apis/embV4/interfaces.ts'

const router = useRouter();

const emdStore = emdV2Store();

const treeRef = ref<InstanceType<typeof ElTree>>()

watch(treeRef, (newVal, oldVal) => {
    if (newVal) {
        emdStore.setTreeRef(newVal)
    }
})

const treeProps = {
    label: 'name',
    children: 'children'
}

const loadNode = (node: Node, resolve: (data) => void) => {
    if (node.level == 0) {
        // 获取根节点
        getBookLabRootNodes().then(res => {
            if (res.state == 200) {
                resolve(res.data);
            } else {
                ElMessage.error(res.message);
            }
        })
    }
    if (node.level >= 1) {
        // 获取子节点
        getBookLabChildren(node.data.id).then(res => {
            if (res.state == 200) {
                resolve(res.data);
            } else {
                ElMessage.error(res.message);
            }
        })
    }
}

const handleNodeClick = (data, node) => {
    // TODO
    console.log(data)
    switch (data.level) {
        case 0:
            router.push({
                name: "bookLabTargetTagManage",
                params: { bookId: data.id }
            })
            break;
        case 1:
            router.push({
                name: "labComponentManage",
                params: { bookId: data.pId, labId: data.id }
            })
            break;
        // case 3:
        //     let labelData = findLabItem(data)
        //     router.push({
        //         name: "labStepViewMange",
        //         params: { labId: labelData.id, blockId: data.id }
        //     })
        //     break;
    }
    if (data.level >= 3) {
        let labelData = findLabItem(data)
        router.push({
            name: "labStepViewMange",
            params: { labId: labelData.id, blockId: data.id }
        })
    }
}

const findLabItem = (item) => {
    let level = undefined
    let pId = item.pId
    let labelData = undefined
    while (level != 1) {
        let { data } = treeRef.value.getNode(pId)
        level = data.level
        pId = data.pId
        labelData = data
    }

    return labelData
}

const handleNodeDrop = (draggingNode, dropNode, type, ev) => {

    // console.log(draggingNode);
    // console.log(dropNode);
    // console.log(type);
    // console.log("drop")
    if (draggingNode.level !== dropNode.level) {
        ElMessage.error('节点只能在同级中拖拽排序');
        return;
    }
    const parent = dropNode.parent;
    // console.log('parent')
    // console.log(parent)
    const siblings = parent ? parent.childNodes : CouseCatalogue.value;
    const draggingIndex = siblings.findIndex(node => node.data.id === draggingNode.data.id); // 获取被拖拽节点的索引
    const dropIndex = siblings.findIndex(node => node.data.id === dropNode.data.id); // 获取目标节点的索引

    // console.log('siblings')
    // console.log(siblings)
    // 移除被拖拽节点
    const [draggedItem] = siblings.splice(draggingIndex, 1);
    // console.log('siblings 移除被拖拽节点')
    // console.log(siblings)

    // 计算目标位置
    let newDropIndex = dropIndex;
    if (type === 'after') {
        newDropIndex += 1;
    } else if (type === 'before') {
        if (draggingIndex < dropIndex) {
            newDropIndex -= 1;
        }
    }

    // 插入到新位置
    siblings.splice(newDropIndex, 0, draggedItem);

    // 更新所有子节点的 sort 字段
    siblings.forEach((node, index) => {
        node.data.sort = index + 1; // 按顺序递增排序值
    });

    // 向后端同步排序
    // console.log('新的排序:', siblings.map(node => node.data));
    if (draggingNode.level === 2) {
        // 更新实验排序
        UpLabSort(siblings.map(node => node.data)).then(res => {
            if (res.state !== 200) {
                ElMessage.error(res.message);
            }
        })
    }
    if (draggingNode.level === 3) {
        UpLabModelSort(siblings.map(node => node.data)).then(res => {
            if (res.state !== 200) {
                ElMessage.error(res.message);
            }
        })
    }
    if (draggingNode.level === 4) {
        // 更新分节排序
        UpSectionSort(siblings.map(node => node.data)).then(res => {
            if (res.state !== 200) {
                ElMessage.error(res.message);
            }
        })
    }
    if (draggingNode.level === 5) {
        // 更新块排序
        UpBlockSort(siblings.map(node => node.data)).then(res => {
            if (res.state !== 200) {
                ElMessage.error(res.message);
            }
        })
    }
}

const allowDarg = (node) => {
    return node.level
}

const allowDrop = (draggingNode, dropNode, type) => {
    // console.log(draggingNode);
    // console.log(dropNode);
    // console.log(type);
    // 禁止拖拽到节点内部（作为子节点）
    if (type === 'inner') return false;
    // 确保拖拽节点和目标节点的父节点相同
    return draggingNode.parent === dropNode.parent;
}

const addLabRef = ref(null)

const labelRules = ref<FormRules>({
    name: [
        { required: true, message: '请输入实验名称', trigger: 'blur' },
    ],
    sectionPrefix: [
        { required: true, message: '请输入AI知识库实验章节', trigger: 'blur' },
    ],
    stepByStep: [
        { required: true, message: '请输入AI知识库实验步骤', trigger: 'blur' },
    ]
})

// 节点树组件
const labelDialog = ref({
    visible: false,
    title: '',
    edit: false,
    formData: {
        pId: '',
        name: '',
        sectionPrefix: '',
        stepByStep: false,
    },
    currentData: null, // 编辑时缓存数据
})

const setDefaultLabelFormData = () => {
    labelDialog.value.formData = {
        pId: '',
        name: '',
        sectionPrefix: '',
        stepByStep: false
    }
}

const closeLabelDialog = () => {
    labelDialog.value.visible = false
    labelDialog.value.edit = false
    labelDialog.value.currentData = null
    setDefaultLabelFormData()
}

const openAddItemDialog = (data, node) => {
    labelDialog.value.edit = false;
    labelDialog.value.title = setLabelDialogTitle(labelDialog.value.edit, data.level + 1)
    labelDialog.value.formData.pId = data.id;
    labelDialog.value.visible = true;
}

const openEditItemDialog = (data, node) => {
    labelDialog.value.edit = true;
    labelDialog.value.currentData = data;
    labelDialog.value.title = setLabelDialogTitle(labelDialog.value.edit, data.level + 1)

    labelDialog.value.formData.pId = data.id;
    labelDialog.value.formData.name = data.name;
    labelDialog.value.formData.sectionPrefix = data.sectionPrefix;
    labelDialog.value.formData.stepByStep = data.stepByStep;

    labelDialog.value.visible = true;
}

// data level 0
const openAddLabBookDialog = () => {
    labelDialog.value.edit = false;
    labelDialog.value.title = setLabelDialogTitle(labelDialog.value.edit, 0)
    labelDialog.value.formData.pId = null;
    labelDialog.value.visible = true;
}

const setLabelDialogTitle = (edit, level) => {
    let state = edit ? '编辑' : '添加'
    let item = getLevelLabelText(level)
    return `${state}${item}`
}

const getLevelLabelText = (level) => {
    let item = ''
    switch (level) {
        case 0:
            item = '实验指导书'
            break;
        case 1:
            item = '实验'
            break;
        case 2:
            item = '实验内步骤'
            break;
        case 3:
            item = '步骤内模块'
            break;
        default:
            break;
    }
    return item
}

const getConfirmText = (data, node) => {
    let item = getLevelLabelText(data.level)
    return `确定要删除${item}【${data.name}】吗 (删除不可恢复)？`
}

// 左侧树 新建树节点
const submitLabelItem = () => {
    addLabRef.value.validate(v => {
        if (v) {
            // 新建节点
            if (!labelDialog.value.edit) {
                let req = generateNewBookLabCatalog(labelDialog.value.formData)
                addTreeNode(req, (data) => {
                    // console.log(data)
                    if (req.pId == null) {
                        // 树懒加载 如何更新根节点
                        treeRef.value.root.setData(data)
                    } else {
                        treeRef.value.updateKeyChildren(req.pId, data);
                    }
                    closeLabelDialog()
                })
            } else {
                // 编辑节点
                let req = Object.assign(labelDialog.value.currentData, labelDialog.value.formData)
                editTreeNode(req, (data) => {
                    // console.log(data)
                    closeLabelDialog()
                })
            }

        }
    })
}

const addTreeNode = (req, cb) => {
    addBookLabNode(req).then(res => {
        if (res.state === 200) {
            if (typeof cb === 'function') {
                cb(res.data)
            }
        } else {
            ElMessage.error(res.message);
        }
    })
}

const editTreeNode = (req, cb) => {
    updateBookLabNode(req).then(res => {
        if (res.state === 200) {
            if (typeof cb === 'function') {
                cb(res.data)
            }
        } else {
            ElMessage.error(res.message);
        }
    })
}

const doDelete = (data, node) => {
    deleteBookLabNode(data.id).then(res => {
        if (res.state == 200) {
            ElMessage({
                type: 'success',
                message: '删除成功',
            })
            node.remove()
        }
    })
}
</script>

<style scoped>
.aside {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
}

.emd-aside-top {
    position: absolute;
    top: 0;
    left: 0px;
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.sidebar-top {
    position: sticky;
    top: 0;
    left: 0;
    width: 80%;
    padding: 10px;
    z-index: 100;
}

.emd-aside-bottom {
    position: absolute;
    bottom: 0;
    left: 0px;
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
}

.floating-button {
    position: relative;
    top: 25px;
    left: 50px;
    width: 50px;
    height: 50px;
    background-color: var(--el-color-primary-light-3);
    /* 设置按钮背景色 */
    color: white;
    /* 设置文字颜色 */
    border-radius: 25%;
    /* 将按钮设置为圆形 */
    font-size: 26px;
    /* 设置按钮内文字大小 */
    text-align: center;
    /* 文字居中 */
    line-height: 45px;
    /* 设置文字垂直居中 */
    cursor: pointer;
    /* 设置鼠标悬停样式 */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    /* 添加阴影效果 */
    z-index: 100;
    /* 确保按钮位于其他内容之上 */
}

.floating-button:hover {
    background-color: var(--el-color-primary);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    /* 悬浮时的阴影效果更明显 */
}

.mode-button {
    position: relative;
    top: 25px;
    left: 150px;
    width: 50px;
    height: 50px;
    background-color: var(--el-color-primary-light-3);
    /* 设置按钮背景色 */
    color: white;
    border-radius: 25%;
    /* 将按钮设置为圆形 */
    font-size: 26px;
    /* 设置按钮内文字大小 */
    text-align: center;
    /* 文字居中 */
    line-height: 45px;
    /* 设置文字垂直居中 */
    cursor: pointer;
    /* 设置鼠标悬停样式 */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    /* 添加阴影效果 */
    z-index: 100;
    /* 确保按钮位于其他内容之上 */
    overflow: hidden;
}

.mode-button:hover {
    background-color: var(--el-color-primary);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    /* 悬浮时的阴影效果更明显 */
}

.emd-aside-tree-container {
    min-height: calc(100% - 240px);
    margin-top: 100px;
    margin-bottom: 100px;
    padding: 20px;
    overflow: auto;
}

.emd-aside-tree {
    height: 100%;
}
</style>