<template>
    <div id="pane-first" class="pane" key="0">
        <el-form ref="contentFormRef" :model="contentForm" :rules="contentFormRules" label-width="120px"
            class="contentForm">
            <el-form-item label="课程名称" prop="name">
                <el-input v-model="contentForm.name" />
            </el-form-item>
            <el-form-item label="课程简介" prop="introduction">
                <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 4 }" v-model="contentForm.introduction" />
            </el-form-item>
            <el-form-item label="课程介绍" prop="introduce">
                <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 4 }" v-model="contentForm.introduce" />
            </el-form-item>
            <el-form-item label="课程目标" prop="target">
                <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 4 }" v-model="contentForm.target" />
            </el-form-item>
        </el-form>
        <el-row class="bottom-row">
            <el-button type="primary" @click="submitForm(contentFormRef)">创建</el-button>
        </el-row>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import { ElMessage, type FormInstance, type FormRules } from 'element-plus'
import { Add } from "@/apis/content/createContent/add.js";

const emits = defineEmits(['createSuccess'])
const createSuccess = () => {
    emits('createSuccess')
    contentForm.value.name = ''
    contentForm.value.introduction = ''
    contentForm.value.introduce = ''
    contentForm.value.target = ''
}
const CaseId = ref(0)
interface content {
    id: number
    name: string
    introduction: string   //简介
    introduce: string //项目课程介绍
    target: string //项目终极目标
    cover: string
    completion: number
    guidance: string
    third: number
}
const contentFormRef = ref<FormInstance>()
const contentForm = ref<content>({
    id: null,
    name: '',
    introduction: '',
    introduce: '',
    target: '',
    cover: '',
    completion: null,
    guidance: '',
    third: 1,
})

const contentFormRules = reactive<FormRules>({
    name: [{ required: true, message: '请输入课程名称', trigger: 'blur' }],
    introduction: [{ required: true, message: '请输入课程简介', trigger: 'blur' }],
    introduce: [{ required: true, message: '请输入课程详细介绍', trigger: 'blur' }],
    target: [{ required: true, message: '请输入课程目标', trigger: 'blur' }]
})
const submitForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.validate((valid, fields) => {
        if (valid) {
            //提交请求
            {
                // 新增
                Add(Object.assign({}, contentForm.value)).then(res => {
                    console.log(res)
                    if (res.state == 200) {
                        createSuccess()
                    } else {
                        ElMessage.error(res.message)
                    }
                })
            }
        } else {
            ElMessage.error('表单校验未通过，请完善表单信息')
        }
    })
}
</script>
<style scoped>
.bottom-row {
    margin-top: 20px;
    display: flex;
    justify-content: center;
}
</style>