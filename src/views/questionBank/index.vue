<template>
    <div>
        <el-row style="display: flex; flex-direction: row; justify-content: space-between; align-items: center;">
            <el-select v-model="taskTemplateId" placeholder="请选择任务/实验" @change="taskTemplateIdChanged">
                <el-option v-for="item in taskTemplates" :key="item.id" :value="item.id"
                    :label="item.num + '：' + item.taskName"></el-option>
            </el-select>

            <div>
                <el-button v-if="taskTemplateId" link type="primary" @click="addQestionDialog = true">添加题目</el-button>
            </div>
        </el-row>
        <div>
            <el-table :data="questionVoList">
                <el-table-column prop="name" label="题目">
                </el-table-column>

                <el-table-column prop="solve" label="解析">

                </el-table-column>

                <el-table-column label="选项">

                </el-table-column>
            </el-table>
        </div>
    </div>

    <el-dialog v-model="addQestionDialog" title="编辑题目">
        <el-form :model="questionVo" ref="ruleFormRef" :rules="rules" label-width="120px">
            <el-form-item label="题目：" prop="name">
                <el-input v-model="questionVo.name" type="textarea" :rows="2" />
            </el-form-item>
            <el-form-item label="题目解析：">
                <el-input v-model="questionVo.solve" type="textarea" :rows="2" />
            </el-form-item>
            <el-form-item label="题目选项：">
                <div>
                    <div v-for="item in questionVo.solutions" style="margin-right: 20px;">
                        <el-switch v-model="item.isSolution" size="small" />
                        {{ item.name }}
                    </div>
                </div>
            </el-form-item>

            <el-form-item label="添加选项：">
                <div>
                    <el-row style="display: flex; align-items: center;">
                        <el-input v-model="solution.name" type="textarea" :rows="1"
                            style="width: 400px;margin-right: 20px;">
                        </el-input>
                        <el-button type="primary" size="small" @click="addSolution">添加</el-button>
                    </el-row>
                    <el-row style="margin-top: 20px;">

                    </el-row>
                </div>

            </el-form-item>
        </el-form>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="addQestionDialog = false">取消</el-button>
                <el-button type="primary" @click="submitAddQuestionVo(ruleFormRef)">
                    提交
                </el-button>
            </span>
        </template>
    </el-dialog>
</template>

<script setup lang="ts">
import { onBeforeMount, reactive, ref } from 'vue';
import { useRoute } from 'vue-router';
import { ElMessage, type FormInstance, type FormRules } from 'element-plus'

import { contentTaskTemplates } from '@/apis/content/teacherContent/getTaskTemplates.js';
import { getQuestionList } from '@/apis/questionBank/getQuestionList.js';
import { addQuestionVo } from '@/apis/questionBank/addQuestionVo.js';
interface taskTemplate {
    id: number
    num: number
    taskName: string
}

interface question {
    id: number
    taskTemplateId: number
    name: string
    solve: string
    difficulty: number
}

interface solution {
    id: number
    questionId: number
    name: string
    isSolution: number
}

interface questionVo {
    id: number
    taskTemplateId: number
    name: string
    solve: string
    difficulty: number
    solutions: Array<solution>
}

const route = useRoute();
const caseId = <any>route.params.caseId

const addQestionDialog = ref(false)

const taskTemplateId = ref<number>(undefined)

const taskTemplateIdChanged = () => {
    getQuestionList(taskTemplateId.value).then(res => {
        if (res.state == 200) {
            questionVoList.value = res.data
        }
    })
}

const taskTemplates = ref<Array<taskTemplate>>([])

const questionVoList = ref([])

const ruleFormRef = ref<FormInstance>()

const questionVo = ref<questionVo>({
    id: null,
    taskTemplateId: taskTemplateId.value,
    name: '',
    solve: '',
    difficulty: null,
    solutions: []
})

const solution = ref<solution>({
    id: undefined,
    questionId: undefined,
    name: '',
    isSolution: 0
})

const rules = reactive<FormRules>({
    name: [
        { required: true, message: '请输入题目', trigger: 'blur' },
    ],
})

const addQuestion = () => {
    questionVoList.value.unshift(Object.assign({}, questionVo.value))
    console.log(questionVoList.value)
}

const addSolution = () => {
    questionVo.value.solutions.push(Object.assign({}, solution.value))
    solution.value.name = ''
}

const submitAddQuestionVo = async (formEl: FormInstance | undefined) => {
    if (!formEl) return
    await formEl.validate((valid, fields) => {
        if (valid) {
            questionVo.value.taskTemplateId = taskTemplateId.value
            console.log(questionVo.value)
            addQuestionVo(questionVo.value).then(res => {
                if (res.state == 200) {
                    taskTemplates.value = res.data
                    questionVo.value.name = ''
                    questionVo.value.solve = ''
                    questionVo.value.solutions = []
                    addQestionDialog.value = false
                } else {
                    ElMessage.error(res.message)
                }
            })
        } else {
            // ElMessage.error("表单校验未通过")
        }
    })
}

const getTaskTemplates = (id) => {
    contentTaskTemplates(id).then(res => {
        if (res.state == 200) {
            taskTemplates.value = res.data
            if (taskTemplates.value.length > 0) {
                taskTemplateId.value = taskTemplates.value[0].id
                taskTemplateIdChanged()
            }
        }
    })
}

onBeforeMount(() => {
    getTaskTemplates(caseId)

})
</script>
<style scoped></style>