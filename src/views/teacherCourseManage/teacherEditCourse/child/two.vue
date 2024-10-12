<template>
    <div id="pane-second" class="pane" key="1">
        <div class="cover-upload">
            <el-upload class="cover-uploader" :action="'/dev-api' + '/content/add_cover/' + CaseId" :headers="headers"
                :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
                <img v-if="contentForm.cover" :src="'/local-resource/image/' + contentForm.cover" class="cover" />
                <el-icon v-else class="cover-uploader-icon">
                    <Plus />
                </el-icon>
            </el-upload>
        </div>
        <el-row class="bottom-row">
            <el-button @click="lastStep">上一步</el-button>
            <el-button type="primary" @click="complateUploadCover()">下一步</el-button>
        </el-row>
    </div>
</template>

<script setup lang="ts">
import { onBeforeMount, ref } from 'vue';
import type { UploadProps } from 'element-plus'
import { ElMessage } from 'element-plus'
import { GetById } from "@/apis/content/getById.js";
import { changeContentCompletion } from "@/apis/content/teacherContent/changeConetentCompletion.js";

const props = defineProps({
    courseId: Number
})

const CaseId = ref(0)
interface content {
    id: number
    name: string
    introduction: string   //简介
    introduce: string //项目案例介绍
    target: string //项目终极目标
    cover: string
    completion: number
    guidance: string
    third: number
}

const headers = ref({
    'x-access-token': localStorage.getItem("x-access-token"),
    'x-access-type': localStorage.getItem("x-access-type")
})

const contentForm = ref<content>({
    id: null,
    name: '',
    introduction: '',
    introduce: '',
    target: '',
    cover: '',
    completion: null,
    guidance: '',
    third: 0,
})

const emit = defineEmits(['nextStep', 'lastStep'])
const nextStep = (completion: number) => {
    emit("nextStep", completion)
}
const lastStep = () => {
    emit('lastStep')
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
    if (CaseId.value == 0) {
        ElMessage.error("请先完成上一步")
    }
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

const complateUploadCover = () => {
    if (contentForm.value.cover == '') {
        ElMessage.error("请先上传图片")
        return
    }
    changeContentCompletion(CaseId.value, 1).then(res => {
        if (res.state == 200) {
            contentForm.value = res.data
            // 下一步
            nextStep(contentForm.value.completion)
        } else {
            ElMessage.error(res.message)
        }
    })
}

const getConten = (id) => {
    GetById(id).then(res => {
        if (res.state == 200) {
            contentForm.value = res.data
        } else {
            ElMessage.error(res.message)
        }
    })
}

onBeforeMount(() => {
    CaseId.value = props.courseId
    console.log(CaseId.value)
    getConten(CaseId.value)
})
</script>
<style scoped>
.cover {
    max-width: 100%;
}

.cover-upload {
    display: flex;
    justify-content: center;
    margin-top: 30px;
}

.cover-uploader .avatar {
    width: 400px;
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