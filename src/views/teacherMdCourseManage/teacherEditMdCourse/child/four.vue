<template>
    <div>
        <el-row>
            <el-select v-model="course.fourthType" placeholder="选择展示方式" style="width: 240px"
                @change="fourthTypeChanged()">
                <el-option :key="'image'" label="图片" :value="'image'" />
                <el-option :key="'video'" label="视频" :value="'video'" />
                <el-option :key="'map'" label="映射关系" :value="'map'" />
            </el-select>
        </el-row>

        <div v-if="course.fourthType === 'image'">
            <div class="cover-upload">
                <el-upload class="cover-uploader" :action="'/dev-api' + '/files/upimage/'" :headers="headers"
                    :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
                    <img v-if="course.fourth" :src="'/local-resource/image/' + course.fourth" class="cover" />
                    <el-icon v-else class="cover-uploader-icon">
                        <Plus />
                    </el-icon>
                </el-upload>
            </div>
        </div>

        <div v-else-if="course.fourthType === 'video'"
            style="display: flex; flex-direction: column; justify-content: center; align-items: center;">
            <el-upload v-model:file-list="caseVideoList" class="upload-demo" :headers="headers"
                :action="'/dev-api' + '/video/n/up/' + courseId" :on-success="handleVideoSuccess"
                :before-upload="beforeVideoUpload">
                <el-button type="primary" style="width: 200px;">上传</el-button>
                <template #tip>
                    <div class="el-upload__tip">
                        视频最大1GB
                    </div>
                </template>
            </el-upload>
        </div>


        <div v-else style="margin-top: 2em;">
            <el-select v-model="CaseMap.nodeId" placeholder="选择映射关系" style="width: 240px" @change="fourthTypeChanged()">
                <el-option v-for="(item, i) in rootNodeList" :key="'node' + i" :label="item.name" :value="item.id" />
            </el-select>
        </div>

        <el-row class="bottom-row">
            <el-button @click="lastStep">上一步</el-button>
            <el-button type="primary" @click="courseNext()">下一步</el-button>
        </el-row>
    </div>
</template>

<script setup lang="ts">
import { ElMessage } from 'element-plus';
import { onBeforeMount, ref } from 'vue';
import type { UploadProps } from 'element-plus';
import { Plus } from '@element-plus/icons-vue';
import { UpMdCompleton } from "@/apis/course_md/upMdCompletion.js";
import { UpFourthType } from '@/apis/course_md/updateFourthType.js';
import videoPlayer from '@/components/markdownInteraction/module/child/video.vue';
import { GetVideo } from '@/apis/vidoe/getVideo.js';
import { DeleteVideo } from '@/apis/vidoe/deleteVidoeById.js';
import { DeleteFiles } from '@/apis/resource/deleteFiles.js';
import { GetRootNodeList } from '@/apis/liShiMap/getRootNodeList.js'
import { UpFourth } from '@/apis/course_md/updateFourth.js'
import { ConnectCaseNode } from '@/apis/course_md/connectCaseMap.js'
import { GetCourseNode } from '@/apis/course_md/getCourseNode.js'
import { GetCaseVideo } from '@/apis/vidoe/getCaseVideo.js'

const props = defineProps({
    course: Object
})

const courseId = ref()
const course = ref()
const video = ref()
const intervalId = ref()
const rootNodeList = ref([])
const CaseMap = ref({
    nodeId: null,
    caseId: courseId.value
})

const headers = ref({
    'x-access-token': localStorage.getItem("x-access-token"),
    'x-access-type': localStorage.getItem("x-access-type")
})

const fourthTypeChanged = () => {
    UpFourthType(courseId.value, course.value.fourthType).then(res => {
        if (res.state == 200) {
            return
        } else {
            ElMessage.error("更新展示方式出错了")
        }
    })
    if (course.value.fourthType === 'video') {
        // 删除图片
        if (course.value.fourth) {
            DeleteFiles(course.value.fourth)
        }
        CaseMap.value.nodeId = null
        getCaseVideoList()
    }

    if (course.value.fourthType === 'image') {
        // 删除视频
        if (video.value) {
            DeleteVideo(video.value.id)
        }
        CaseMap.value.nodeId = null
    }

    if (course.value.fourthType === 'map') {
        if (video.value) {
            DeleteVideo(video.value.id)
        }
        if (course.value.fourth) {
            DeleteFiles(course.value.fourth)
        }

        GetRootNodeList().then(res => {
            if (res.state == 200) {
                rootNodeList.value = res.data
            }
        })
    }

    course.value.fourth = null
}


const beforeAvatarUpload: UploadProps['beforeUpload'] = (rawFile) => {
    // console.log(rawFile.type)
    if (rawFile.type != 'image/png') {
        ElMessage.error('请上传PNG类型的图片')
        return false
    } else if (rawFile.size / 1024 / 1024 > 2) {
        ElMessage.error('图片最大2MB!')
        return false
    }
    return true
}

const handleAvatarSuccess: UploadProps['onSuccess'] = (
    response,
    uploadFile
) => {
    if (response.state == 200) {
        course.value.fourth = response.data.filename
    }
}

const beforeVideoUpload: UploadProps['beforeUpload'] = (rawFile) => {
    if (rawFile.type != 'video/mp4') {
        ElMessage.error('请上传MP4类型的视频')
        return false
    } else if (rawFile.size / 1024 / 1024 > 2048) {
        ElMessage.error('视频最大2G!')
        return false
    }
    return true
}

const handleVideoSuccess: UploadProps['onSuccess'] = (response, uploadFile) => {
    if (response.state == 200) {
        caseVideoList.value = response.data
    }
}

const getVideo = (filename: string) => {
    if (filename && filename != '') {
        GetVideo(filename).then(res => {
            if (res.state == 200) {
                video.value = res.data
                if (video.value.isReady == 1) {
                    clearInterval(intervalId.value)
                }
            } else {
                ElMessage.warning(res.message)
            }
        })
    }
}

const caseVideoList = ref([])

const getCaseVideoList = () => {
    GetCaseVideo(courseId.value).then(res => {
        if (res.state == 200) {
            caseVideoList.value = res.data
        }
        else {
            ElMessage.error(res.message)
        }
    })
}

onBeforeMount(() => {
    course.value = props.course
    courseId.value = props.course.id
    if (course.value.fourthType === 'video') {
        // getVideo(course.value.fourth)
        getCaseVideoList()
    }

    if (course.value.fourthType === 'map') {
        GetRootNodeList().then(res => {
            if (res.state == 200) {
                rootNodeList.value = res.data
            }
        })

        GetCourseNode(courseId.value).then(res => {
            if (res.state == 200) {
                CaseMap.value = res.data
            }
        })
    }
})

const emit = defineEmits(['nextStep', 'lastStep'])
const nextStep = (completion: number) => {
    emit("nextStep", completion)
}
const lastStep = () => {
    emit('lastStep')
}

const courseNext = async () => {
    if (course.value.fourthType === 'video' || course.value.fourthType === 'image') {
        // 更新fourth
        await UpFourth(courseId.value, course.value.fourth).then(res => {
            if (res.state != 200) {
                ElMessage.error(res.message)
                return
            }
        })
    }

    if (course.value.fourthType === 'map') {

        await UpFourth(courseId.value, null).then(res => {
            if (res.state != 200) {
                ElMessage.error(res.message)
                return
            }
        })

        // 更新Coursenode
        if (CaseMap.value.nodeId != null) {
            await ConnectCaseNode(courseId.value, CaseMap.value.nodeId).then(res => {
                if (res.state != 200) {
                    ElMessage.error(res.message)
                    return
                }
            })
        } else {
            ElMessage.error("请选择映射图")
            return
        }
    }

    await UpMdCompleton(courseId.value, 3).then(res => {
        if (res.state == 200) {
            let completion = res.data.completion
            nextStep(completion)
        }
        else {
            ElMessage.error(res.message)
        }
    })
}

</script>
<style scoped>
.cover-upload {
    display: flex;
    justify-content: center;
    margin-top: 30px;
}

.cover-uploader {
    width: 400px;
    height: 240px;
}

.cover-uploader .avatar {
    width: 400px;
    height: 240px;
    display: block;
}

.cover {
    width: 100%;
    height: 100%;
}

.bottom-row {
    margin-top: 20px;
    display: flex;
    justify-content: flex-end;
}
</style>

<style>
.cover-uploader .el-upload {
    width: 100%;
    height: 100%;
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

.el-icon .cover-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 400px;
    height: 240px;
    text-align: center;
}
</style>