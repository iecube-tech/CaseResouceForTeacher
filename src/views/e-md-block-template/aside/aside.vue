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
            <el-tree ref="treeRef" class="emd-aside-tree" :data="CouseCatalogue" :props="treeProps" lazy accordion
                :load="loadNode" @node-click="handleNodeClick" draggable :allow-drag="allowDarg" :allow-drop="allowDrop"
                @node-drop="handleNodeDrop" :expand-on-click-node="false" node-key="treeId">
                <template #default="{ node, data }">
                    <div
                        style="width: 100%; max-width:100%; display: flex; flex-direction: row; justify-content: space-between;">
                        <div style="width: 200px; overflow: hidden;">
                            <span :title="node.label" style="overflow: hidden;">{{ node.label }}</span>
                        </div>
                        <div style="flex: 0 0 80px; display: flex; flex-direction: row; justify-content: end;">
                            <el-button v-if="node.level < 2" type="primary" size="small" link :icon="Plus"
                                @click="addItem(data, node)"></el-button>
                            <el-button v-if="node.level < 3" type="info" size="small" link :icon="Edit"
                                @click="editItem(data, node)"></el-button>
                            <el-popconfirm confirm-button-text="Yes" cancel-button-text="No" :icon="InfoFilled"
                                icon-color="#626AEF" title="确定删除该内容?" @confirm="deleteItem(data, node)">
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
            <div class="floating-button" @click="addCourseDialogVisible = true">
                +
            </div>
        </div>
    </div>
    <el-dialog v-model="addCourseDialogVisible" :title="courseIsEdit ? '编辑课程名称' : '添加课程'" width="30%"
        @close="addCourseDialogClose">
        <el-form ref="addCourseRef" :model="courseQo" :rules="courseQoRule" label-width="80px">
            <el-form-item label="课程名称" prop="name">
                <el-input v-model="courseQo.name"></el-input>
            </el-form-item>
        </el-form>
        <template #footer>
            <div class="dialog-footer">
                <el-button @click="addCourseDialogVisible = false">取消</el-button>
                <el-button type="primary" @click="addCourse(addCourseRef)">
                    提交
                </el-button>
            </div>
        </template>
    </el-dialog>

    <el-dialog v-model="addLabDialogVisible" :title="labIsEdit ? '编辑实验名称' : '添加实验'" width="30%"
        @close="addLabDialogClose">
        <el-form ref="addLabRef" :model="labProcQo" :rules="labProcQoRule" label-width="100px">
            <el-form-item label="实验名称" prop="name">
                <el-input v-model="labProcQo.name"></el-input>
            </el-form-item>
            <el-form-item label="知识库章节" prop="sectionPrefix">
                <el-input v-model="labProcQo.sectionPrefix"></el-input>
            </el-form-item>
        </el-form>
        <template #footer>
            <div class="dialog-footer">
                <el-button @click="addLabDialogVisible = false">取消</el-button>
                <el-button type="primary" @click="addLab(addLabRef)">
                    提交
                </el-button>
            </div>
        </template>
    </el-dialog>
</template>

<script setup lang="ts">
import { emdV2Store } from '@/stores/emdV2Store';
import { Plus, Edit, Delete, InfoFilled } from '@element-plus/icons-vue';
import { ref, onBeforeMount, reactive, watch } from 'vue';
import { GetAllCourse } from '@/apis/e-md/course/getAllCourse';
import { GetLabProcByCourse } from '@/apis/e-md/labProc/getLabProcByCourse';
import { GetLabModelByLabProc } from '@/apis/e-md/labModel/getLabModelByLabProc';
import { GetSectionByLabModel } from '@/apis/e-md/section/getSectionByLabModel';
import { GetBlockBySection } from '@/apis/e-md/block/getBlockBySection';
import { GetComposeByBlock } from '@/apis/e-md/compose/getComposeByBlock';
import { UpLabSort } from '@/apis/e-md/labProc/upLabSort';
import { UpLabModelSort } from '@/apis/e-md/labModel/upLabModelSort';
import { UpSectionSort } from '@/apis/e-md/section/upSectionSort';
import { UpBlockSort } from '@/apis/e-md/block/upBlockSort';
import { UpComposeSort } from '@/apis/e-md/compose/upComposeSort';
import { CreateCourse } from '@/apis/e-md/course/createCourse';
import { DelCourse } from '@/apis/e-md/course/delCourse';
import { UpCourse } from '@/apis/e-md/course/upCourse';
import { CreatelabProc } from '@/apis/e-md/labProc/createlabProc';
import { CreateLabModel } from '@/apis/e-md/labModel/createLabModel';
import { UpLabProc } from '@/apis/e-md/labProc/upLabProc';
import { UpLabModel } from '@/apis/e-md/labModel/upLabModel';
import { DelLabProc } from '@/apis/e-md/labProc/delLabProc';
import { DelLabModel } from '@/apis/e-md/labModel/dellabModel';
import { DelBlock } from '@/apis/e-md/block/delBlock.js'
import { CreateSection } from '@/apis/e-md/section/createSection';
import { DelSection } from '@/apis/e-md/section/delSection';
import { ElMessage, ElTree, FormInstance, FormRules } from 'element-plus';
import Node from 'element-plus/es/components/tree/src/model/node';
import { generateShortUUID } from '@/utils/GenrateUUID.js';
import { useRouter } from 'vue-router';

const router = useRouter();
const routeKey = ref("main")
const emdStore = emdV2Store();
const treeRef = ref<InstanceType<typeof ElTree>>()

watch(treeRef, (newVal, oldVal) => {
    if (newVal) {
        emdStore.setTreeRef(newVal)
    }
})

const CouseCatalogue = ref([]);
const getCouseCatalogue = () => {
    // 获取课程目录
    GetAllCourse().then(res => {
        if (res.state == 200) {
            CouseCatalogue.value = res.data;
        } else {
            ElMessage.error(res.message);
        }
    })
}

const currentNode = ref()
const currentData = ref()

const treeProps = {
    label: (data, node) => {
        return data.name;
    },
    isLeaf: (data, node) => {
        if (node.level < 5) {
            return !data.hasChildren
        }
        else {
            return true
        }
    },
    class: (data, node) => {
        switch (node.level) {
            case 0:
                return 'tree-l0'
            case 1:
                return 'tree-l1'
            case 2:
                return 'tree-l2'
            case 3:
                return 'tree-l3'
        }
    }
}

const loadNode = (node: Node, resolve: (data) => void) => {
    if (node.level === 1) {
        // 获取课程下的实验
        GetLabProcByCourse(node.data.id).then(res => {
            if (res.state == 200) {
                resolve(res.data);
            } else {
                ElMessage.error(res.message);
            }
        })
    }
    resolve([]);
}

const handleNodeClick = (data, node) => {
    currentNode.value = node
    currentData.value = data
    emdStore.setCurrentNode(node)
    if (node.level == 2) {
        router.push({
            name: "labQuestionBank",
            params: { labId: data.id }
        })
    }
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


const addCourseDialogVisible = ref(false);
const addLabDialogVisible = ref(false);
const addLabModelDialogVisible = ref(false);

const addCourseRef = ref<FormInstance>()
const courseIsEdit = ref(false)
const courseQo = ref({
    id: null,
    name: '',
})
const courseQoRule = reactive<FormRules>({
    name: [
        { required: true, message: '请输入课程名称', trigger: 'blur' },
    ]
})
const addCourseDialogClose = () => {
    courseQo.value.id = null;
    courseQo.value.name = ''
    courseIsEdit.value = false;
}
const addCourse = async (formEl: FormInstance | undefined) => {
    if (!formEl) return
    await formEl.validate((valid, fields) => {
        if (valid) {
            if (courseIsEdit.value) {
                // 编辑课程
                UpCourse(courseQo.value).then(res => {
                    if (res.state == 200) {
                        CouseCatalogue.value = res.data
                        ElMessage.success('编辑成功');
                        addCourseDialogVisible.value = false;
                    } else {
                        ElMessage.error(res.message);
                    }
                })
            } else {
                CreateCourse(courseQo.value).then(res => {
                    if (res.state == 200) {
                        CouseCatalogue.value = res.data
                        ElMessage.success('添加成功');
                        addCourseDialogVisible.value = false;
                    } else {
                        ElMessage.error(res.message);
                    }
                })
            }
        } else {
            ElMessage.info('请检查输入内容');
        }
    })
}


const addLabRef = ref()
const labIsEdit = ref(false)
const labProcQo = ref({
    id: null,
    courseId: null,
    name: '',
    sectionPrefix: ''
})
const labProcQoRule = reactive<FormRules>({
    name: [
        { required: true, message: '请输入实验名称', trigger: 'blur' },
    ],
    sectionPrefix: [
        { required: true, message: '请输入AI知识库实验章节', trigger: 'blur' },
    ],
})
const addLabDialogClose = () => {
    labProcQo.value.courseId = null;
    labProcQo.value.name = ''
    labProcQo.value.sectionPrefix = ''
    labIsEdit.value = false;
}
const addLab = async (formEl: FormInstance | undefined) => {
    if (!formEl) return
    await formEl.validate((valid, fields) => {
        if (valid) {
            if (labIsEdit.value) {
                // 编辑实验
                UpLabProc(labProcQo.value).then(res => {
                    if (res.state == 200) {
                        ElMessage.success('更新成功');
                        addLabDialogVisible.value = false;
                        treeRef.value.updateKeyChildren(currentNode.value.parent.data.treeId, res.data)
                    } else {
                        ElMessage.error(res.message);
                    }
                })
            } else {
                CreatelabProc(labProcQo.value).then(res => {
                    if (res.state == 200) {
                        ElMessage.success('添加成功');
                        addLabDialogVisible.value = false;
                        if (!currentNode.value.data.hasChildren) {
                            getCouseCatalogue()
                        }
                        treeRef.value.updateKeyChildren(currentData.value.treeId, res.data)
                    } else {
                        ElMessage.error(res.message);
                    }
                })
            }
        } else {
            ElMessage.info('请检查输入内容');
        }
    })
}

const sectionQo = ref({
    id: null,
    labModelId: null,
})

const addLabModelRef = ref()
const labModelIsEdit = ref(false)
const labModelQo = ref({
    id: null,
    labProcId: null,
    name: '',
    icon: '',
    isNeedAiAsk: false,
    askNum: 1,
    sectionPrefix: '',
    stage: 'before-class'
})
const labModelQoRule = reactive<FormRules>({
    name: [
        { required: true, message: '请输入模块名称', trigger: 'blur' }
    ],
    askNum: [
        { required: true, message: '请设置问题个数', trigger: 'blur' },
    ],
    sectionPrefix: [
        { required: true, message: '请输入ai知识库章节序号', trigger: 'blur' }
    ],
    stage: [
        { required: true, message: '请选择课前部分还是课后部分', trigger: 'blur' }
    ]
})
const addLabModelDialogClose = () => {
    labModelQo.value.id = null
    labModelQo.value.labProcId = null
    labModelQo.value.name = ''
    labModelQo.value.icon = ''
    labModelQo.value.isNeedAiAsk = false
    labModelQo.value.askNum = 0
    labModelQo.value.sectionPrefix = ''
    labModelQo.value.stage = ''
    labModelIsEdit.value = false
}

const addLabModel = async (formEl: FormInstance | undefined) => {
    if (!formEl) return
    await formEl.validate((valid, fields) => {
        if (valid) {
            if (labModelIsEdit.value) {
                // 编辑实验
                UpLabModel(labModelQo.value).then(res => {
                    if (res.state == 200) {
                        ElMessage.success('更新成功');
                        addLabModelDialogVisible.value = false;
                        treeRef.value.updateKeyChildren(currentNode.value.parent.data.treeId, res.data)
                    } else {
                        ElMessage.error(res.message);
                    }
                })
            } else {
                CreateLabModel(labModelQo.value).then(res => {
                    if (res.state == 200) {
                        ElMessage.success('添加成功');
                        addLabModelDialogVisible.value = false;
                        treeRef.value.updateKeyChildren(currentData.value.treeId, res.data)
                    } else {
                        ElMessage.error(res.message);
                    }
                })
            }
        } else {
            ElMessage.info('请检查输入内容');
        }
    })
}


const addItem = (data, node) => {
    switch (node.level) {
        case 1:
            // 添加实验
            labProcQo.value.courseId = node.data.id;
            addLabDialogVisible.value = true;
            break;
        default:
            break;
    }
}

const editItem = (data, node) => {
    switch (node.level) {
        case 1:
            //编辑课程
            courseQo.value.id = node.data.id;
            courseQo.value.name = node.data.name;
            courseIsEdit.value = true;
            addCourseDialogVisible.value = true;
            break;
        case 2:
            // 编辑实验
            labProcQo.value.id = node.data.id;
            labProcQo.value.name = node.data.name;
            labProcQo.value.sectionPrefix = node.data.sectionPrefix
            labIsEdit.value = true;
            addLabDialogVisible.value = true;
            break;
        default:
            break;
    }
}

const deleteItem = (data, node) => {
    switch (node.level) {
        case 1:
            //删除课程
            if (node.data.hasChildren) {
                ElMessage.error('请先删除课程中的内容');
                return
            }
            courseQo.value.id = node.data.id;
            DelCourse(courseQo.value).then(res => {
                if (res.state == 200) {
                    CouseCatalogue.value = res.data
                    ElMessage.success('删除成功');
                    courseQo.value.id = null;
                } else {
                    ElMessage.error(res.message);
                }
            })
            break;
        case 2:
            // 删除实验
            if (node.data.hasChildren) {
                ElMessage.error('请先删除实验中的内容');
                return
            }
            labProcQo.value.id = node.data.id;
            DelLabProc(labProcQo.value).then(res => {
                if (res.state == 200) {
                    ElMessage.success('删除成功');
                    treeRef.value.remove(node);
                    labProcQo.value.id = null
                } else {
                    ElMessage.error(res.message);
                }
            })
            break;
        default:
            break;
    }
}


onBeforeMount(() => {
    getCouseCatalogue();
});
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

<style>
.tree-l0 {
    font-size: 20px;

}

.tree-l1 {
    font-size: 18px;
}

.tree-l2 {
    font-size: 16px;
}
</style>