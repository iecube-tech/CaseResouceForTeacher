<template>
    <div id="pane-seventh" class="pane" key="6">
        <div style="display: flex; flex-direction: column;">
            <div style="padding: 20px;">
                <el-upload class="upload-demo" drag multiple :action="'/dev-api/content/upload_pkg/' + CaseId"
                    :before-upload="beforeUploadFile" :on-success="fileSuccess">
                    <el-icon class="el-icon--upload"><upload-filled /></el-icon>
                    <div class="el-upload__text">
                        Drop file here or <em>click to upload</em>
                    </div>
                    <template #tip>
                        <div class="el-upload__tip">
                            单个文件最大不超过100MB。
                        </div>
                    </template>
                </el-upload>
            </div>
            <div>
                <el-row v-for="i in pkgs.length" style="text-align: left;">
                    <el-button type="primary" :icon="Download" link>{{ pkgs[i - 1].originFilename }}</el-button>
                    <el-popconfirm title="确定删除吗?" @confirm="contentDeletePkgSubmit(pkgs[i - 1].id)">
                        <template #reference>
                            <el-button link type="danger" size="small" :icon="Delete"></el-button>
                        </template>
                    </el-popconfirm>
                </el-row>
            </div>
        </div>
        <el-row class="bottom-row">
            <el-button @click="lastStep">上一步</el-button>
            <el-button type="primary" @click="done">完成</el-button>
        </el-row>
    </div>
</template>

<script setup lang="ts">
import { onBeforeMount, ref } from 'vue';
import type { UploadProps } from 'element-plus'
import { ElMessage } from 'element-plus'
import { Delete, Download } from '@element-plus/icons-vue'
import { GetPackages } from "@/apis/content/teacherContent/getPackages.js";
import { contentDeletePkg } from "@/apis/content/teacherContent/contentDeletePkg.js";


const props = defineProps({
    courseId: Number
})
const emit = defineEmits(['done', 'lastStep'])
const done = () => {
    emit("done")
}
const lastStep = () => {
    emit('lastStep')
}
const CaseId = ref(0)

onBeforeMount(() => {
    CaseId.value = props.courseId
    getContentPkgs(CaseId.value)
})

const pkgs = ref([])
const beforeUploadFile: UploadProps['beforeUpload'] = (rawFile) => {
    if (rawFile.size / 1024 / 1024 / 1024 > 1) {
        //console.log('文件最大不能超过1GB')
        ElMessage({
            showClose: true,
            message: '文件最大不能超过1GB',
            type: 'success',
        })
        return false
    }
    return true
}

const fileSuccess: UploadProps['onSuccess'] = (response) => {
    if (response.state == 200) {
        pkgs.value = response.data
    }
}

const getContentPkgs = async (id) => {
    await GetPackages(id).then(res => {
        //console.log(res)
        if (res.state == 200) {
            pkgs.value = res.data
        } else {
            ElMessage.error('获取资源包失败' + res.message)
        }
    })
}

const contentDeletePkgSubmit = (pkgId) => {
    contentDeletePkg(CaseId.value, pkgId).then(res => {
        if (res.state == 200) {
            pkgs.value = res.data
        } else {
            ElMessage.error(res.message)
        }
    })
    //console.log(pkgId)
}

</script>
<style scoped>
.bottom-row {
    margin-top: 20px;
    display: flex;
    justify-content: flex-end;
}
</style>