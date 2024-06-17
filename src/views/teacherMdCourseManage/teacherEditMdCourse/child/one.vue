<template>
    <div id="pane-first" class="pane" key="0">
        <el-form ref="contentFormRef" :model="contentForm" :rules="contentFormRules" label-width="120px"
            class="contentForm">
            <el-form-item label="课程名称" prop="name">
                <el-input v-model="contentForm.name" />
            </el-form-item>
            <el-form-item label="课程介绍" prop="introduce">
                <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 4 }" v-model="contentForm.introduce" />
            </el-form-item>
            <el-form-item label="封面" prop="cover">
                <div class="cover-upload">
                    <el-upload class="cover-uploader" :action="'/dev-api/files/e/image'" :show-file-list="false"
                        :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
                        <img v-if="contentForm.cover" :src="'/local-resource/image/' + contentForm.cover"
                            class="cover" />
                        <el-icon v-else class="cover-uploader-icon">
                            <Plus />
                        </el-icon>
                    </el-upload>
                </div>
            </el-form-item>
            <el-form-item label="指导书" prop="mdCourse">
                <el-select v-model="contentForm.mdCourse" placeholder="选择课程" style="width: 240px">
                    <el-option v-for="(item, i) in catalogueList" :key="i" :label="item.courseName"
                        :value="item.courseId" />
                </el-select>
            </el-form-item>
            <el-form-item label="实验设备" prop="deviceId">
                <el-radio-group v-model="contentForm.deviceId">
                    <el-radio :label="0">无设备</el-radio>
                    <el-radio v-for="item in iecubeDeviceList" :label="item.id">{{ item.name }}</el-radio>
                </el-radio-group>
            </el-form-item>
        </el-form>
        <el-row class="bottom-row">
            <el-button type="primary" @click="submitForm(contentFormRef)">下一步</el-button>
        </el-row>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive, onBeforeMount } from 'vue';
import { ElMessage, type FormInstance, type FormRules } from 'element-plus'
import { AddMdCourse } from "@/apis/course_md/addMdCourse.js";
import { GetById } from "@/apis/content/getById.js";
import { allIecuebDevice } from "@/apis/iecubeDevice/allIecubeDevices.js"
import { getCatalogue } from "@/apis/doc_md/getCatalogue.js";
import type { UploadProps } from 'element-plus';

const prosps = defineProps({
    courseId: Number
})
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
    deviceId: number
    mdCourse: number
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
    deviceId: null,
    mdCourse: null,
})
const iecubeDeviceList = ref([])

const catalogueList = ref([])

const contentFormRules = reactive<FormRules>({
    name: [{ required: true, message: '请输入课程名称', trigger: 'blur' }],
    introduce: [{ required: true, message: '请输入课程详细介绍', trigger: 'blur' }],
    cover: [{ required: true, message: '请上传封面', trigger: 'blur' }],
    mdCourse: [{ required: true, message: '请选择课程指导书', trigger: 'blur' }]
})
const submitForm = (formEl: FormInstance | undefined) => {
    if (CaseId.value != 0) {
        emit("created", CaseId.value)
        nextStep(0)
        return
    }
    if (!formEl) return
    formEl.validate((valid, fields) => {
        if (valid) {
            //提交请求
            contentForm.value.id = CaseId.value
            AddMdCourse(Object.assign({}, contentForm.value)).then(res => {
                if (res.state == 200) {
                    contentForm.value = res.data
                    CaseId.value = res.data.id
                    created(CaseId.value)
                    nextStep(contentForm.value.completion)
                } else {
                    ElMessage.error(res.message)
                }
            })
        } else {
            ElMessage.error
        }
    })
}
const emit = defineEmits(['nextStep', 'created'])
const nextStep = (completion: number) => {
    emit("nextStep", completion)
}
const created = (id) => {
    emit("created", id)
}

const getConten = (id) => {
    if (id == null) {
        return
    }
    GetById(id).then(res => {
        if (res.state == 200) {
            contentForm.value = res.data
        } else {
            ElMessage.error(res.message)
        }
    })
}

const getCatalogues = () => {
    getCatalogue().then(res => {
        if (res.state == 200) {
            catalogueList.value = res.data
        }
    })
}

const getIecubeDeviceList = () => {
    allIecuebDevice().then(res => {
        if (res.state == 200) {
            iecubeDeviceList.value = res.data
        } else {
            ElMessage.error("获取iecube设备列表异常")
        }
    })

}


const handleAvatarSuccess: UploadProps['onSuccess'] = (
    response,
    uploadFile
) => {
    if (response.state == 200) {
        contentForm.value.cover = response.data.filename
    }
}

const beforeAvatarUpload: UploadProps['beforeUpload'] = (rawFile) => {
    //console.log(rawFile.type)
    if (!(rawFile.type == 'image/jpeg' || rawFile.type == 'image/png' || rawFile.type == 'image/gif')) {
        ElMessage.error('支持 JPG，PNG， GIF！')
        // return false
    } else if (rawFile.size / 1024 / 1024 > 5) {
        ElMessage.error('图片不要大于 2MB!')
        return false
    }
    return true
}


onBeforeMount(() => {
    CaseId.value = prosps.courseId
    getConten(CaseId.value)
    getCatalogues()
    getIecubeDeviceList()
})
</script>
<style scoped>
.bottom-row {
    margin-top: 20px;
    display: flex;
    justify-content: flex-end;
}

.cover {
    max-width: 100%;
    object-fit: cover;
}

.cover-upload {
    display: flex;
    justify-content: center;
    /* margin-top: 30px; */
    aspect-ratio: 16 / 9;
    max-width: 402px;
}

.cover-uploader .avatar {
    max-width: 400px;
    height: 240px;
    display: block;
}

.bottom-row {
    margin-top: 20px;
    display: flex;
    justify-content: flex-end;
}
</style>

<style>
.cover-uploader .el-upload {
    border: 1px dashed var(--el-border-color);
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: var(--el-transition-duration-fast);
    aspect-ratio: 16/9;
}

.cover-uploader .el-upload:hover {
    border-color: var(--el-color-primary);
}

.el-icon.cover-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 400px;
    height: 240px;
    text-align: center;
}
</style>