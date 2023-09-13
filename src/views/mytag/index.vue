<template>
    <el-row class="page_header">
        <pageHeader :route=route />
    </el-row>
    <main>
        <div class="resource">
            <el-card style="display: flex; flex-direction: column; "
                :body-style="{ display: 'flex', flexDirection: 'column', }">
                <template #header>
                    <el-button type="primary" link :icon="Back" :size="'large'" @click="goback">返回</el-button>
                </template>
                <el-table :data="tableData" :border="true" :row-style="{ flexGrow: 1 }">

                    <el-table-column type="index" label="序号" width="80" />
                    <el-table-column prop="taskName" label="任务名称" width="180" />
                    <el-table-column prop="name" label="tag名称" width="200" />
                    <el-table-column prop="suggestion" label="改进建议" />
                    <el-table-column :align="'center'" width="180">
                        <template #header>
                            <el-button type="primary" link @click="handleEdit">添加Tag</el-button>
                        </template>
                        <template #default="scope">
                            <el-button type="primary" link :icon="Edit" @click="handleEdit(scope.row)"></el-button>
                            <el-popconfirm width="220" confirm-button-text="确定" cancel-button-text="取消" :icon="InfoFilled"
                                icon-color="#33b8b9" title="确定删除该条目吗?" @confirm="deleteTags(scope.row)">
                                <template #reference>
                                    <el-button size="small" type="danger" :icon="Delete" link></el-button>
                                </template>
                            </el-popconfirm>
                        </template>
                    </el-table-column>
                </el-table>
            </el-card>
        </div>

        <el-dialog v-model="editDialog" title="编辑" width="70%">
            <div>
                <el-form ref="formRef" status-icon :model="tag" :rules="tagRules" label-width="120px">
                    <el-form-item v-if="isModify == false" label="任务名称" prop="taskNum">
                        <el-select v-model="tag.taskNum" placeholder="请选择任务">
                            <el-option v-for="item in taskList" :key="item.num" :label="item.name" :value="item.num" />
                        </el-select>
                    </el-form-item>
                    <el-form-item label="Tag名称" prop="name">
                        <el-input placeholder="请输入名称" v-model="tag.name">
                        </el-input>
                    </el-form-item>
                    <el-form-item label="改进建议">
                        <el-input placeholder="改进建议" v-model="tag.suggestion">
                        </el-input>
                    </el-form-item>
                </el-form>
            </div>
            <template #footer>
                <span class="dialog-footer">
                    <el-button @click="closeModify">取消</el-button>
                    <el-button type="primary" @click="submit(formRef)">
                        保存
                    </el-button>
                </span>
            </template>
        </el-dialog>
    </main>
</template>

<script setup lang="ts">
import { onBeforeMount, ref, reactive } from 'vue'
import { Back, Edit, Delete, InfoFilled } from '@element-plus/icons-vue'
import { useRoute } from 'vue-router';
import pageHeader from '@/components/pageheader.vue'
import { ElMessage } from 'element-plus';
import router from '@/router';
import { teacherProjectTags } from '@/apis/tag/teacherProjectTags.js';
import type { FormInstance, FormRules } from 'element-plus';
import { addTag } from '@/apis/tag/addTag.js'
import { modifyTag } from '@/apis/tag/modifyTag.js'
import { deleteTag } from '@/apis/tag/deleteTag.js'
import { fa } from 'element-plus/es/locale';



const route = useRoute()
const projectId = route.params.projectId
const studentId = route.params.studentId
const stepNum = route.params.stepNum

const editDialog = ref(false)
const tableData = ref([])
const isModify = ref(false)
const taskList = ref([])

const formRef = ref<FormInstance>()
const tag = reactive({
    id: null,
    taskNum: null,
    name: '',
    suggestion: '',
    projectId: projectId
})

const tagRules = reactive<FormRules>({
    taskNum: [{ required: true, message: '请选择任务', trigger: 'blur' }],
    name: [
        { required: true, message: '请输入tag名称', trigger: 'blur' },
    ],
})

const handleEdit = (row) => {
    console.log(row)
    if (row.id != null) {
        tag.id = row.id
        tag.name = row.name
        tag.suggestion = row.suggestion
        tag.projectId = row.projectId
        tag.taskNum = row.taskNum
        isModify.value = true
    }
    editDialog.value = true

}

const closeModify = () => {
    editDialog.value = false
    isModify.value = false
    tag.id = null
    tag.name = ''
    tag.taskNum = ''
    tag.suggestion = ''
    tag.projectId = projectId
}

const submit = async (formEl: FormInstance | undefined) => {
    if (!formEl) return
    await formEl.validate((valid, fields) => {
        if (valid) {
            if (isModify.value == true) {
                modifyTags()
                isModify.value = false
            } else {
                addTags()
            }

        } else {
            console.log('error submit!', fields)
        }
    })
}

const modifyTags = async () => {
    const data = Object.assign({}, tag)
    await modifyTag(data).then(res => {
        if (res.state == 200) {
            ElMessage({
                message: '修改成功',
                type: 'success',
            })
            getTeacherProjectTags()
            tag.id = null
            tag.name = ''
            tag.taskNum = ''
            tag.suggestion = ''
            tag.projectId = projectId
            editDialog.value = false
        } else {
            ElMessage.error("修改失败：" + res.data)
        }
    })
}

const addTags = async () => {
    const data = Object.assign({}, tag)
    await addTag(data).then(res => {
        if (res.state == 200) {
            ElMessage({
                message: '添加成功',
                type: 'success',
            })
            getTeacherProjectTags()
            tag.id = null
            tag.name = ''
            tag.taskNum = ''
            tag.suggestion = ''
            tag.projectId = projectId
            editDialog.value = false
        } else {
            ElMessage.error("添加失败：" + res.data)
        }
    })
}

const deleteTags = async (row) => {
    await deleteTag(row.id).then(res => {
        if (res.state == 200) {
            ElMessage({
                message: '删除成功',
                type: 'success',
            })
            getTeacherProjectTags()
        } else {
            ElMessage.error("删除失败：" + res.data)
        }
    })
}

const getTeacherProjectTags = async () => {
    await teacherProjectTags(projectId).then(res => {
        if (res.state == 200) {
            tableData.value = res.data
            for (let i = 0; i < tableData.value.length; i++) {
                let option = { num: tableData.value[i].taskNum, name: tableData.value[i].taskName }
                if (JSON.stringify(taskList.value).indexOf(JSON.stringify(option)) < 0) {
                    console.log(i);
                    taskList.value.push(option)
                }
            }
            console.log(taskList)
            console.log(tableData)
        } else {
            ElMessage.error("获取数据失败：" + res.message)
        }
    })
}

const goback = () => {
    router.push({
        name: <string>route.meta.parentName
    })
}


onBeforeMount(() => {
    getTeacherProjectTags();
})

</script>

<style scoped>
main {
    width: 100%;
    height: 100%;
    display: flex;
}

.resource {
    height: 100%;
    width: 100%;
    flex-grow: 1;
    padding: 20px calc(164px + 4.8vw);
}
</style>