<template>
    <div>
        <el-row>
            <el-col :span="24">
                <el-steps :active="active" simple>
                    <el-step title="基本信息" />
                    <el-step title="上传封面" />
                    <el-step title="知识点" />
                    <el-step title="教学设计" />
                    <el-step title="任务设计" />
                    <el-step title="案例指导" />
                    <el-step title="附件资源" />
                </el-steps>
            </el-col>
        </el-row>
        <div style="margin-top: 20px; margin-bottom: 20px; padding: 0px 20px;">
            <!-- 1 -->
            <div id="pane-first" class="pane" key="0" :aria-hidden="getAriaHidden(0)" :style="getStyleDisplay(0)">
                <el-form ref="contentFormRef" :model="contentForm" :rules="contentFormRules" label-width="120px"
                    class="contentForm">
                    <el-form-item label="案例名称" prop="name">
                        <el-input v-model="contentForm.name" />
                    </el-form-item>
                    <el-form-item label="案例简介" prop="introduction">
                        <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 4 }"
                            v-model="contentForm.introduction" />
                    </el-form-item>
                    <el-form-item label="案例介绍" prop="introduce">
                        <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 4 }"
                            v-model="contentForm.introduce" />
                    </el-form-item>
                    <el-form-item label="案例目标" prop="target">
                        <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 4 }" v-model="contentForm.target" />
                    </el-form-item>
                </el-form>
                <el-row class="bottom-row">
                    <el-button v-if="active < 6" type="primary" @click="submitForm(contentFormRef)">下一步</el-button>
                </el-row>
            </div>

            <!-- 2 -->
            <div id="pane-second" class="pane" key="1" :aria-hidden="getAriaHidden(1)" :style="getStyleDisplay(1)">
                <div class="cover-upload">
                    <el-upload class="cover-uploader" :action="'/dev-api' + '/content/add_cover/' + CaseId"
                        :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
                        <img v-if="contentForm.cover" :src="'/local-resource/image/' + contentForm.cover"
                            class="cover" />
                        <el-icon v-else class="cover-uploader-icon">
                            <Plus />
                        </el-icon>
                    </el-upload>
                </div>
                <el-row class="bottom-row">
                    <el-button @click="last">上一步</el-button>
                    <el-button type="primary" @click="complateUploadCover()">下一步</el-button>
                </el-row>
            </div>

            <!-- 3 -->
            <div id="pane-third" class="pane" key="2" :aria-hidden="getAriaHidden(2)" :style="getStyleDisplay(2)">
                <div>
                    <el-row style="margin: 20px 0px">
                        <span>本案例的功能模块</span>
                    </el-row>
                    <div class="card-list" v-if="addModules.length < 1 || addModules[0] != null"
                        style="min-height: 260px;">
                        <el-card v-for="j in addModules.length" :key="j"
                            style="width: 280px; height: 220px; margin-right: 30px; margin-bottom: 30px;"
                            shadow="hover">
                            <template #header>
                                <div class="card-header">
                                    <div>
                                        <span>{{ addModules[j - 1].name }}</span>
                                    </div>
                                    <div>
                                        <el-button type="danger" link :icon="Delete"
                                            @click="removeModuleFromAddModules(j - 1)"></el-button>
                                    </div>
                                </div>
                            </template>
                            <div>
                                <li v-for="i in addModules[j - 1].children.length" :key="i">
                                    {{ addModules[j - 1].children[i - 1].name }}
                                </li>
                            </div>
                        </el-card>
                    </div>
                </div>
                <div class="all-modules">
                    <el-row style="margin: 20px 0px">
                        <span>请从下面选择功能模块添加到本案例</span>
                    </el-row>
                    <div class="card-list">
                        <el-tooltip v-for="i in modules.length" :content="getToolTipContent(i - 1)" raw-content>
                            <el-button type="primary" round size="small" @click="addModuletoContent(i - 1)">{{ modules[i
                -
                1].name }}</el-button>
                        </el-tooltip>
                        <el-button type="warning" circle :icon="Plus" size="small"></el-button>
                    </div>
                </div>
                <el-row class="bottom-row">
                    <el-button @click="last">上一步</el-button>
                    <el-button type="primary" @click="submitAddModules()">下一步</el-button>
                </el-row>
            </div>

            <!-- 4 -->
            <div id="pane-fourth" class="pane" key="3" :aria-hidden="getAriaHidden(3)" :style="getStyleDisplay(3)">
                <div style="margin: 20px 0px;">
                    <span>
                        本节需要明确案例目标和对应知识点的匹配关系
                    </span>
                </div>
                <div style="margin: 30px 0px;">
                    <el-table :data="caseDesign" :border="true" style="width: 100%">
                        <el-table-column prop="targetName" label="案例目标" />
                        <el-table-column label="对应知识点">
                            <template #default="scope">
                                <!-- <span>{{ scope.$index}}</span> -->
                                <!-- <span>{{ scope.row }}</span> -->
                                <div v-if="caseDesign.length > 0 && caseDesign[0] != null">
                                    <li v-for="i in scope.row.knowledgePoints.length">
                                        {{ scope.row.knowledgePoints[i - 1].point }}
                                    </li>
                                </div>
                            </template>
                        </el-table-column>
                        <el-table-column prop="" label="操作" width="100px">
                            <template #default="scope">
                                <el-popconfirm title="确定删除吗?" @confirm="deleteCaseDesignSubmit(scope.row.id)">
                                    <template #reference>
                                        <el-button link type="danger" size="small" :icon="Delete"></el-button>
                                    </template>
                                </el-popconfirm>
                            </template>
                        </el-table-column>
                    </el-table>
                </div>
                <div style="margin: 30px 0px;">
                    <el-card style="min-height:280px;" shadow="never">
                        <template #header>
                            <div>
                                <span>添加案例目标和对应知识点匹配关系</span>
                            </div>
                        </template>
                        <div>
                            <el-form label-width="160px" ref="designFormRef" :model="newDesignForm"
                                :rules="designFormRules">
                                <el-form-item label="案例目标：" prop="targetName">
                                    <el-input v-model="newDesignForm.targetName"></el-input>
                                </el-form-item>
                                <el-form-item label="添加对应知识点：" prop="knowledgePoints">
                                    <div
                                        v-if="newDesignForm.knowledgePoints.length > 0 && newDesignForm.knowledgePoints[0].point != ''">
                                        <el-tag v-for="i in newDesignForm.knowledgePoints.length" :key="i" class="mx-1"
                                            closable @close="removePointFromNewDesignForm(i - 1)">
                                            {{ newDesignForm.knowledgePoints[i - 1].point }}
                                        </el-tag>
                                    </div>
                                </el-form-item>
                                <el-form-item>
                                    <el-input style="max-width: 400px; margin-right: 20px;" v-model="point"
                                        placeholder="请分条输入案例目标对应知识点，每一条完成后点击右侧保存"></el-input>
                                    <el-button type="primary" circle size="small" :icon="Check"
                                        @click="pointAddtoNewDesignForm()"></el-button>
                                </el-form-item>

                                <el-form-item>
                                    <el-button type="primary" size="small"
                                        @click="caseAddDesignSubmit(designFormRef)">添加</el-button>
                                    <el-button size="small" @click="designFormReset()">清除内容</el-button>
                                </el-form-item>
                            </el-form>
                        </div>
                    </el-card>
                </div>
                <el-row class="bottom-row">
                    <el-button @click="last">上一步</el-button>
                    <el-button type="primary" @click="caseDesignNext()">下一步</el-button>
                </el-row>
            </div>

            <!-- 5 -->
            <div id="pane-fiveth" class="pane" key="4" :aria-hidden="getAriaHidden(4)" :style="getStyleDisplay(4)">
                <div style="margin: 30px 0px;">
                    <span>本节需要完善该案例的任务模版</span>
                </div>
                <div style="margin: 30px 0px;">
                    <el-table :data="caseTaskTemplates" :border="true" style="width: 100%">
                        <el-table-column prop="num" label="任务序号" width="60px" />
                        <el-table-column prop="taskName" label="任务名称" />
                        <el-table-column label="任务背景">
                            <template #default="scope">
                                <ol>
                                    <li v-for="i in scope.row.backDropList.length" :key="i">
                                        {{ scope.row.backDropList[i - 1].name }}
                                    </li>
                                </ol>
                            </template>
                        </el-table-column>

                        <el-table-column label="任务目的">
                            <template #default="scope">
                                <ol>
                                    <li v-for="i in scope.row.requirementList.length" :key="i">
                                        {{ scope.row.requirementList[i - 1].name }}
                                    </li>
                                </ol>
                            </template>
                        </el-table-column>
                        <el-table-column label="任务要求">
                            <template #default="scope">
                                <ol>
                                    <li v-for="i in scope.row.deliverableRequirementList.length" :key="i">
                                        {{ scope.row.deliverableRequirementList[i - 1].name }}
                                    </li>
                                </ol>
                            </template>
                        </el-table-column>
                        <el-table-column label="任务参考链接">
                            <template #default="scope">
                                <ol>
                                    <li v-for="i in scope.row.referenceLinkList.length" :key="i">
                                        {{ scope.row.referenceLinkList[i - 1].name + "：" +
                scope.row.referenceLinkList[i - 1].url }}
                                    </li>
                                </ol>
                            </template>
                        </el-table-column>
                        <el-table-column label="任务参考资料">
                            <template #default="scope">
                                <div>
                                    <ol>
                                        <li v-for="i in scope.row.referenceFileList.length" :key="i">
                                            {{ scope.row.referenceFileList[i - 1].originFilename }}
                                        </li>
                                    </ol>
                                </div>
                                <div style="display:flex; justify-content:center">
                                    <el-upload class="upload-demo"
                                        :action="'/dev-api/task_template/task_template_add_resource/' + CaseId + '/' + scope.row.id"
                                        :on-success="uploadFileSuccess" :show-file-list="false">
                                        <el-button type="primary" size="small">上传</el-button>
                                    </el-upload>
                                </div>
                            </template>
                        </el-table-column>
                        <el-table-column prop="" label="操作" width="100px">
                            <template #default="scope">
                                <el-popconfirm title="确定删除吗?" @confirm="deleteCaseTaskTemplateSubmit(scope.row.id)">
                                    <template #reference>
                                        <el-button link type="danger" size="small" :icon="Delete"></el-button>
                                    </template>
                                </el-popconfirm>
                            </template>
                        </el-table-column>
                    </el-table>
                </div>
                <div style="margin: 30px 0px;">
                    <el-card style="min-height:280px;" shadow="never">
                        <template #header>
                            <div>
                                <span>添加任务</span>
                            </div>
                        </template>
                        <div>
                            <el-form label-width="400px" ref="addTaskFormRef" :model="newTaskForm"
                                :rules="taskFormRules">
                                <el-form-item label="任务名称：" prop="taskName">
                                    <el-input style="max-width: 400px; margin-right: 20px;"
                                        v-model="newTaskForm.taskName" placeholder="请输入任务名称">
                                    </el-input>
                                </el-form-item>
                                <el-form-item label="任务序号：" prop="num">
                                    <el-input-number :min="1" :max="10" v-model="newTaskForm.num"></el-input-number>
                                </el-form-item>

                                <el-form-item label="任务背景：" prop="">
                                    <div v-if="newTaskForm.backDropList.length > 0">
                                        <el-tag closable v-for="i in newTaskForm.backDropList.length" :key="i"
                                            class="mx-1" @close="removeBackDrop(i - 1)">
                                            {{ newTaskForm.backDropList[i - 1].name }}
                                        </el-tag>
                                    </div>
                                </el-form-item>
                                <el-form-item>
                                    <el-input style="max-width: 400px; margin-right: 20px;" v-model="backDrop"
                                        placeholder="请分条输入实验背景，每一条完成后点击右侧保存">
                                    </el-input>
                                    <el-button type="primary" circle size="small" :icon="Check"
                                        @click="addBackDrop()"></el-button>
                                </el-form-item>

                                <el-form-item label="任务目的（达成什么样的目标）：" prop="requirementList">
                                    <div v-if="newTaskForm.requirementList.length > 0">
                                        <el-tag closable v-for="i in newTaskForm.requirementList.length" :key="i"
                                            class="mx-1" @close="removeRequirement(i - 1)">
                                            {{ newTaskForm.requirementList[i - 1].name }}
                                        </el-tag>
                                    </div>
                                </el-form-item>
                                <el-form-item>
                                    <el-input style="max-width: 400px; margin-right: 20px;" v-model="requirement"
                                        placeholder="请分条输入任务要求，每一条完成后点击右侧保存">
                                    </el-input>
                                    <el-button type="primary" circle size="small" :icon="Check"
                                        @click="addRequirement()"></el-button>
                                </el-form-item>
                                <el-form-item label="任务要求（必须要完成的内容或提交的内容）：" prop="deliverableRequirementList">
                                    <div v-if="newTaskForm.deliverableRequirementList.length > 0">
                                        <el-tag closable v-for="i in newTaskForm.deliverableRequirementList.length"
                                            class="mx-1" :key="i" @close="removeDeliverableRequirement(i - 1)">
                                            {{ newTaskForm.deliverableRequirementList[i - 1].name }}
                                        </el-tag>
                                    </div>
                                </el-form-item>
                                <el-form-item>
                                    <el-input style="max-width: 400px; margin-right: 20px;"
                                        v-model="deliverableRequirement" placeholder="请分条输入任务交付物要求，每一条完成后点击右侧保存">
                                    </el-input>
                                    <el-button type="primary" circle size="small" :icon="Check"
                                        @click="addDeliverableRequirement()"></el-button>
                                </el-form-item>

                                <el-form-item label="任务参考链接：" prop="referenceLinkList">
                                    <div v-if="newTaskForm.referenceLinkList.length > 0">
                                        <el-tag closable v-for="i in newTaskForm.referenceLinkList.length" class="mx-1"
                                            :key="i" @close="removeReferenceLink(i - 1)">
                                            {{ newTaskForm.referenceLinkList[i - 1].name + '：' +
                newTaskForm.referenceLinkList[i - 1].url }}
                                        </el-tag>
                                    </div>
                                </el-form-item>

                                <div style="margin-left: 400px;">
                                    <el-form label-width="80px" ref="addReferenceLinkRef" :model="newReferenceLinkForm"
                                        :rules="newReferenceLinkFormRules">
                                        <el-form-item label="名称：" prop="name">
                                            <el-input style="max-width: 320px; margin-right: 20px;"
                                                v-model="newReferenceLinkForm.name" placeholder="请分条输入任务参考链接的名称和URL">
                                            </el-input>
                                        </el-form-item>

                                        <el-form-item label="url：" prop="url">
                                            <el-input style="max-width: 320px; margin-right: 20px;"
                                                v-model="newReferenceLinkForm.url" placeholder="输入完成点击右侧保存">
                                            </el-input>
                                            <el-button type="primary" circle size="small" :icon="Check"
                                                @click="addReferenceLinkSubmit(addReferenceLinkRef)"></el-button>
                                        </el-form-item>
                                    </el-form>
                                </div>


                                <el-form-item style="margin-top: 50px;">
                                    <el-button type="primary" size="small"
                                        @click="addTaskTemplateSubmit(addTaskFormRef)">添加任务</el-button>
                                    <el-button size="small" @click="newTaskFormReset()">清除内容</el-button>
                                </el-form-item>
                            </el-form>
                        </div>
                    </el-card>
                </div>
                <el-row class="bottom-row">
                    <el-button @click="last">上一步</el-button>
                    <el-button type="primary" @click="addTaskTemplateNext()">下一步</el-button>
                </el-row>
            </div>

            <!-- 6 -->
            <div id="pane-sixth" class="pane" key="5" :aria-hidden="getAriaHidden(5)" :style="getStyleDisplay(5)">
                <div style="border: 1px solid #ccc">
                    <Toolbar style="border-bottom: 1px solid #ccc" :editor="editorRef" :defaultConfig="toolbarConfig"
                        :mode="mode" />
                    <Editor style="height: 500px; overflow-y: hidden;" v-model="valueHtml" :defaultConfig="editorConfig"
                        :mode="mode" @onCreated="handleCreated" @onChange="onChange" />
                </div>
                <el-row class="bottom-row">
                    <el-button @click="last">上一步</el-button>
                    <el-button type="primary" @click="updateGuidance()">下一步</el-button>
                </el-row>

                <div id="editor-content-view" class="editor-content-view clearfix"></div>
            </div>

            <!-- 7 -->
            <div id="pane-seventh" class="pane" key="6" :aria-hidden="getAriaHidden(6)" :style="getStyleDisplay(6)">
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
                    <el-button @click="last">上一步</el-button>
                    <el-button type="primary" @click="done">完成</el-button>
                </el-row>
            </div>
        </div>

    </div>
</template>
<script setup lang="ts">
import { useRoute } from 'vue-router';
import router from '@/router';
import { onBeforeMount, ref, reactive, onMounted, shallowRef, onBeforeUnmount } from 'vue';
import { ElMessage, type FormInstance, type FormRules } from 'element-plus'
import { Plus, Check, Delete, Download } from '@element-plus/icons-vue'
import type { UploadProps } from 'element-plus'
import '@wangeditor/editor/dist/css/style.css'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
import { DomEditor } from '@wangeditor/editor'

import { Add } from "@/apis/content/createContent/add.js";
import { GetById } from "@/apis/content/getById.js";
import { changeContentCompletion } from "@/apis/content/teacherContent/changeConetentCompletion.js";
import { AllModules } from "@/apis/content/teacherContent/getAllModule.js";
import { OldModules } from "@/apis/content/teacherContent/getOldModules.js";
import { updateCaseModules } from "@/apis/content/teacherContent/updateCaseModules.js";
import { caseAddDesign } from "@/apis/content/teacherContent/caseAddDesign.js";
import { GetCaseDesigns } from "@/apis/content/teacherContent/getCaseDesign.js";
import { deleteCaseDesign } from "@/apis/content/teacherContent/deleteCaseDesign.js";
import { updateCaseDesigns } from "@/apis/content/teacherContent/updateCaseDesign.js";
import { addTaskTemplate } from "@/apis/content/teacherContent/addTaskTemplates.js";
import { contentTaskTemplates } from "@/apis/content/teacherContent/getTaskTemplates.js";
import { deleteTaskTemplate } from "@/apis/content/teacherContent/deletTaskTemplates.js";
import { updateCaseTaskTemplate } from "@/apis/content/teacherContent/updateCaseTaskTemplate.js";
import { GetGuidance } from "@/apis/content/getGuidance.js";
import { UpdateGuidance } from "@/apis/content/teacherContent/updateGuidance.js";
import { GetPackages } from "@/apis/content/teacherContent/getPackages.js";
import { contentDeletePkg } from "@/apis/content/teacherContent/contentDeletePkg.js";
import { updateContentDone } from "@/apis/content/teacherContent/updateConentDone.js";
import { UpdateContent } from "@/apis/content/teacherContent/updateContent.js";
const route = useRoute()
const CaseId = ref(0)
const active = ref(0)
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
    third: 0,
})

interface concept {
    id: number
    name: string
}

interface model {
    id: number
    name: string
    children: Array<concept>
}

const modules = ref<[model]>([
    {
        id: null,
        name: null,
        children: [
            {
                id: null,
                name: null,
            }
        ]
    }
])

const addModules = ref<Array<model>>([])

/* -------------------- 1 -------------------- */
const contentFormRules = reactive<FormRules>({
    name: [{ required: true, message: '请输入案例名称', trigger: 'blur' }],
    introduction: [{ required: true, message: '请输入案例简介', trigger: 'blur' }],
    introduce: [{ required: true, message: '请输入案例详细介绍', trigger: 'blur' }],
    target: [{ required: true, message: '请输入案例目标', trigger: 'blur' }]
})
const submitForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.validate((valid, fields) => {
        if (valid) {
            //提交请求
            if (CaseId.value == 0) {
                // 新增
                Add(Object.assign({}, contentForm.value)).then(res => {
                    //console.log(res)
                    if (res.state == 200) {
                        CaseId.value = res.data
                        contentForm.value.id = res.data
                        active.value++
                    } else {
                        ElMessage.error(res.message)
                    }
                })
            } else {
                contentForm.value.id = CaseId.value
                UpdateContent(Object.assign({}, contentForm.value)).then(res => {
                    if (res.state == 200) {
                        contentForm.value = res.data
                        active.value++
                    } else {
                        ElMessage.error(res.message)
                    }
                })
            }
        } else {
            return
        }
    })
}
/* --------------------- 2 ------------------- */

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
        return false
    } else if (rawFile.size / 1024 / 1024 > 2) {
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
            active.value++
        } else {
            ElMessage.error(res.message)
        }
    })
}
/* --------------------- 3 ------------------- */
const getToolTipContent = (index) => {
    let str = '基础知识：'
    for (let i = 0; i < modules.value[index].children.length; i++) {
        str = str + modules.value[index].children[i].name + "；"
    }
    return str
}

const addModuletoContent = (index) => {
    if (addModules.value[0] == null) {
        addModules.value.splice(0, 1)
    }
    let conceptLength = 0
    if (addModules.value.length > 1) {
        for (let i = 0; i < addModules.value.length; i++) {
            conceptLength = conceptLength + addModules.value[i].children.length
        }

    }
    conceptLength = conceptLength + modules.value[index].children.length
    if (conceptLength <= 8) {
        addModules.value.push(modules.value[index])
        modules.value.splice(index, 1)
    } else {
        ElMessage.warning("案例添加的基础知识点条目超过8个")
        return
    }

}

const removeModuleFromAddModules = (index) => {
    modules.value.push(addModules.value[index])
    addModules.value.splice(index, 1)
}

const submitAddModules = () => {
    let newModels = []
    for (let i = 0; i < addModules.value.length; i++) {
        newModels.push(addModules.value[i].id)
    }
    //console.log(newModels)
    updateCaseModules(CaseId.value, newModels).then(res => {
        if (res.state == 200) {
            contentForm.value == res.data
            active.value++
            //console.log(active.value)
        } else {
            ElMessage.error(res.message)
        }
    })
}

/* --------------------- 4 ------------------- */
const designFormRef = ref<FormInstance>()
interface knowledgePoint {
    id: number
    targetId: number
    point: string
}
interface design {
    id: number
    targetName: string
    knowledgePoints: Array<knowledgePoint>
}

const newDesignForm = ref<design>({
    id: null,
    targetName: '',
    knowledgePoints: [
        {
            id: null,
            targetId: null,
            point: '',
        }
    ]
})
const point = ref('')
const designFormRules = reactive<FormRules>({
    targetName: [{ required: true, message: '请输入案例目标', trigger: 'blur' }],
    knowledgePoints: [{
        required: true,
        validator: function (rule, value, callback) {
            if (value[0].point == '') {
                callback(new Error('没有对应知识点'));
            } else {
                callback()
            }
        }, trigger: 'change'
    }]
})

const caseDesign = ref<Array<design>>([])
const pointAddtoNewDesignForm = () => {
    if (point.value == '') {
        return
    }
    if (newDesignForm.value.knowledgePoints.length > 0 && newDesignForm.value.knowledgePoints[0].point == '') {
        newDesignForm.value.knowledgePoints[0].point = point.value
        point.value = ''
    } else {
        let knowledgePoint = ref<knowledgePoint>({
            id: null,
            targetId: null,
            point: point.value
        })
        newDesignForm.value.knowledgePoints.push(knowledgePoint.value)
        point.value = ''
    }
}

const removePointFromNewDesignForm = (index) => {
    newDesignForm.value.knowledgePoints.splice(index, 1)
}

const caseAddDesignSubmit = async (formEl: FormInstance | undefined) => {
    if (!formEl) return
    await formEl.validate((valid, fields) => {
        if (valid) {
            //console.log('submit!')
            //console.log(newDesignForm.value)
            let data = Object.assign({}, newDesignForm.value)
            //提交表单
            caseAddDesign(CaseId.value, data).then(res => {
                if (res.state == 200) {
                    caseDesign.value = res.data.designs
                    //清空表单
                    newDesignForm.value.targetName = ''
                    newDesignForm.value.knowledgePoints.splice(0, newDesignForm.value.knowledgePoints.length)
                } else {
                    ElMessage.error(res.message)
                }
            })
        } else {
            console.log('error submit!', fields)
        }
    })
}
const designFormReset = () => {
    newDesignForm.value.targetName = ''
    newDesignForm.value.knowledgePoints.splice(0, newDesignForm.value.knowledgePoints.length)
}
const deleteCaseDesignSubmit = (id) => {
    deleteCaseDesign(CaseId.value, id).then(res => {
        if (res.state == 200) {
            caseDesign.value = res.data.designs
        } else {
            ElMessage.error(res.message)
        }
    })
}
const caseDesignNext = () => {
    updateCaseDesigns(CaseId.value).then(res => {
        if (res.state == 200) {
            contentForm.value == res.data
            active.value++
        } else {
            ElMessage.error(res.message)
        }
    })
}

/* --------------------- 5 ------------------- */
interface BackDrop {
    id: number
    name: string
}
interface Requirement {
    id: number
    name: string
}
interface DeliverableRequirement {
    id: number
    name: string
}
interface ReferenceLink {
    id: number
    name: string
    url: string
}
interface Resource {
    id: number
    name: string
    filename: string
    originFilename: string
    type: string
}

interface taskTemplate {
    id: number
    contentId: number
    num: number
    taskName: string
    taskCover: string
    backDropList: Array<BackDrop>
    requirementList: Array<Requirement>
    deliverableRequirementList: Array<DeliverableRequirement>
    referenceLinkList: Array<ReferenceLink>
    referenceFileList: Array<Resource>
}

const caseTaskTemplates = ref<Array<taskTemplate>>([])

const addReferenceLinkRef = ref<FormInstance>()
const newReferenceLinkForm = ref<ReferenceLink>({
    id: null,
    name: '',
    url: '',
})
const newReferenceLinkFormRules = reactive<FormRules>({
    name: [{ required: true, message: '请输入参考链接名称', trigger: 'blur' }],
    url: [{ required: true, message: '请输入参考链接URL', trigger: 'blur' }],

})

const addReferenceLinkSubmit = async (formEl: FormInstance | undefined) => {
    if (!formEl) return
    await formEl.validate((valid, fields) => {
        if (valid) {
            let newReferenceLink = Object.assign({}, newReferenceLinkForm.value)
            newTaskForm.value.referenceLinkList.push(newReferenceLink)
            newReferenceLinkForm.value.name = ''
            newReferenceLinkForm.value.url = ''
            //console.log(newTaskForm.value)
        } else {
            //console.log('error submit!', fields)
        }
    })
}
const removeReferenceLink = (index) => {
    newTaskForm.value.referenceLinkList.splice(index, 1)
}

const backDrop = ref('')
const addBackDrop = () => {
    if (backDrop.value == '') {
        return
    }
    let newBackDrop = ref<BackDrop>({
        id: null,
        name: backDrop.value
    })
    if (newTaskForm.value.backDropList.length > 0 && newTaskForm.value.backDropList[0] == null) {
        newTaskForm.value.backDropList[0] = newBackDrop.value
    } else {
        newTaskForm.value.backDropList.push(newBackDrop.value)
    }
    backDrop.value = ''
}

const removeBackDrop = (index) => {
    newTaskForm.value.backDropList.splice(index, 1)
}

const requirement = ref('')
const addRequirement = () => {
    if (requirement.value != '') {
        let newRequirement = ref<Requirement>({
            id: null,
            name: requirement.value
        })
        if (newTaskForm.value.requirementList.length > 0 && newTaskForm.value.requirementList[0] == null) {
            newTaskForm.value.requirementList[0] = newRequirement.value
        } else {
            newTaskForm.value.requirementList.push(newRequirement.value)
        }
        requirement.value = ''
    }
    //console.log(newTaskForm.value)
}

const removeRequirement = (index) => {
    newTaskForm.value.requirementList.splice(index, 1)
}
const deliverableRequirement = ref('')

const addDeliverableRequirement = () => {
    if (deliverableRequirement.value != '') {
        let newDeliverableRequirement = ref<DeliverableRequirement>({
            id: null,
            name: deliverableRequirement.value
        })
        if (newTaskForm.value.deliverableRequirementList.length > 0 && newTaskForm.value.deliverableRequirementList[0] == null) {
            newTaskForm.value.deliverableRequirementList[0] = newDeliverableRequirement.value
        } else {
            newTaskForm.value.deliverableRequirementList.push(newDeliverableRequirement.value)
        }
        deliverableRequirement.value = ''
    }
    //console.log(newTaskForm.value)
}
const removeDeliverableRequirement = (index) => {
    newTaskForm.value.deliverableRequirementList.splice(index, 1)
}

const addTaskFormRef = ref<FormInstance>()
const newTaskForm = ref<taskTemplate>({
    id: null,
    contentId: CaseId.value,
    num: null,
    taskName: '',
    taskCover: '',
    backDropList: [],
    requirementList: [],
    deliverableRequirementList: [],
    referenceLinkList: [],
    referenceFileList: [],
})

const taskFormRules = reactive<FormRules>({
    taskName: [{ required: true, message: '请输入任务名称', trigger: 'blur' }],
    num: [{ required: true, message: '请输入任务序号', trigger: 'blur' }],
    requirementList: [{
        required: true,
        validator: function (rule, value, callback) {
            if (value[0].point == '') {
                callback(new Error('没有任务要求'));
            } else {
                callback()
            }
        }, trigger: 'change'
    }],
    deliverableRequirementList: [{
        required: true,
        validator: function (rule, value, callback) {
            if (value[0].point == '') {
                callback(new Error('没有任务交付物要求'));
            } else {
                callback()
            }
        }, trigger: 'change'
    }]
})

const addTaskTemplateSubmit = async (formEl: FormInstance | undefined) => {
    if (!formEl) return
    await formEl.validate((valid, fields) => {
        if (valid) {
            if (caseTaskTemplates.value.length >= 5) {
                ElMessage.warning("当前最多支持5个任务")
                return
            }
            newTaskForm.value.contentId = CaseId.value
            //console.log(newTaskForm.value)
            let data = Object.assign({}, newTaskForm.value)
            addTaskTemplate(data).then(res => {
                if (res.state == 200) {
                    caseTaskTemplates.value = res.data
                    newTaskFormReset()
                } else {
                    ElMessage.error(res.message)
                }
            })
        } else {
            //console.log('error submit!', fields)
        }
    })
}

const newTaskFormReset = () => {
    newTaskForm.value.taskName = ''
    newTaskForm.value.num = null
    newTaskForm.value.taskCover = ''
    newTaskForm.value.backDropList = []
    newTaskForm.value.deliverableRequirementList = []
    newTaskForm.value.requirementList = []
    newTaskForm.value.referenceLinkList = []
}

const uploadFileSuccess: UploadProps['onSuccess'] = (
    response,
    uploadFile
) => {
    if (response.state == 200) {
        caseTaskTemplates.value = response.data
    }
}

const deleteCaseTaskTemplateSubmit = (taskTemplateId) => {
    deleteTaskTemplate(CaseId.value, taskTemplateId).then(res => {
        if (res.state == 200) {
            caseTaskTemplates.value = res.data
        } else {
            ElMessage.error(res.message)
        }
    })
}

const addTaskTemplateNext = () => {
    updateCaseTaskTemplate(CaseId.value).then(res => {
        if (res.state == 200) {
            contentForm.value = res.data
            active.value++
        } else {
            ElMessage.error(res.message)
        }
    })
}

/* --------------------- 6 ------------------- */

const editorRef = shallowRef()
const valueHtml = ref('')

// 工具栏配置
const toolbarConfig = {
    excludeKeys: [
        "bold",
        "group-video",
        "fullScreen"
    ]
}
// 编辑器配置
const editorConfig = {
    placeholder: '请输入内容...',
    MENU_CONF: {},
}
const handleCreated = (editor) => {
    editorRef.value = editor // 记录 editor 实例，重要！
}
editorConfig.MENU_CONF['uploadImage'] = {
    // 上传图片的配置
    server: '/dev-api/files/wdupimage',
    timeout: 5 * 1000, // 5s

    fieldName: 'file',
    metaWithUrl: true,
    maxFileSize: 10 * 1024 * 1024,
    base64LimitSize: 5 * 1024,
    onBeforeUpload(file) {
        //console.log('onBeforeUpload', file)

        return file // will upload this file
        // return false // prevent upload
    },
    onProgress(progress) {
        //console.log('onProgress', progress)
    },
    onSuccess(file, res) {
        //console.log('onSuccess', file, res)
    },
    onFailed(file, res) {
        alert(res.message)
        //console.log('onFailed', file, res)
    },
    onError(file, err, res) {
        alert(err.message)
        console.error('onError', file, err, res)
    },
}
const onChange = () => {
    document.getElementById('editor-content-view').innerHTML = valueHtml.value
}

const GetKeys = () => {
    const toolbar = DomEditor.getToolbar(editorRef.value)

    const curToolbarConfig = toolbar.getConfig()
    //console.log(curToolbarConfig.toolbarKeys) // 当前菜单排序和分组
}

const updateGuidance = () => {
    contentForm.value.guidance = valueHtml.value
    let data = Object.assign({}, contentForm.value)
    UpdateGuidance(CaseId.value, data).then(res => {
        if (res.state == 200) {
            contentForm.value = res.data
            active.value++
        } else {
            ElMessage.error(res.message)
        }
    })
}
// const saveContent = () => {
//     content.value.guidance = editorRef.value.getHtml()
//     const params = Object.assign({}, content.value)
//     //console.log(params);
//     SaveContent(params).then(res => {
//         //console.log(res);

//     })

// }


/* --------------------- 7 ------------------- */
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


/* ------------------------------------------- */

const mode = ref('default')
const getAriaHidden = (key) => {
    if (key == active.value) {
        return false
    } else {
        return true
    }
}

const getStyleDisplay = (key) => {
    if (key == active.value) {
        return null
    } else {
        return 'display:none'
    }
}

const last = () => {
    active.value--
}

const next = () => {
    active.value++
}

const done = () => {
    updateContentDone(CaseId.value).then(res => {
        if (res.state == 200) {
            router.push({
                name: <any>route.meta.parentName,
            })
        } else {
            ElMessage.error(res.message)
        }
    })
}

const getConten = (id) => {
    GetById(id).then(res => {
        if (res.state == 200) {
            contentForm.value = res.data
            if (contentForm.value.completion >= 6) {
                active.value = 6
            } else {
                active.value = contentForm.value.completion + 1
            }
            //console.log('1' + active.value)
        } else {
            ElMessage.error(res.message)
        }
    })
}

const getAllModule = () => {
    AllModules().then(res => {
        if (res.state == 200) {
            modules.value = res.data
        } else {
            ElMessage.error("获取知识模块异常")
        }
    })
}
const getOldModiles = (id) => {
    OldModules(id).then(res => {
        if (res.state == 200) {
            addModules.value = res.data
        } else {
            ElMessage.error("获取案例知识模块异常")
        }
    })
}

const getDesigns = (id) => {
    GetCaseDesigns(id).then(res => {
        if (res.state == 200) {
            caseDesign.value = res.data.designs
        } else {
            ElMessage.error("获取案例教学设计点异常")
        }
    })
}
const getCaseTaskTemplates = (id) => {
    contentTaskTemplates(id).then(res => {
        if (res.state == 200) {
            caseTaskTemplates.value = res.data
        } else {
            ElMessage.error("获取案例任务列表异常")
        }
    })
}
const getGuidance = (id) => {
    GetGuidance(id).then(res => {
        if (res.state == 200) {
            valueHtml.value = res.data
        } else {
            ElMessage.error("获取案例指导异常")
        }
    })
}


onBeforeMount(() => {
    if (route.params.caseId) {
        CaseId.value = <any>route.params.caseId
        getConten(CaseId.value)
        getOldModiles(CaseId.value)
        getDesigns(CaseId.value)
        getCaseTaskTemplates(CaseId.value)
        getGuidance(CaseId.value)
        getContentPkgs(CaseId.value)
    } else {
        //console.log(CaseId.value)
    }
    getAllModule()
})

onMounted(() => {
    if (addModules.value[0] == null) {
        addModules.value.splice(0, 1)
        //console.log(addModules.value)
    }
})


onBeforeUnmount(() => {
    const editor = editorRef.value
    if (editor == null) return
    editor.destroy()
})

</script>
<style scoped>
.el-steps :deep() .el-step__title {
    font-size: 14px;
}

.el-steps {
    padding: 13px 3%;
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

.card-list {
    display: flex;
    flex-wrap: wrap;
}

.card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
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

.mx-1 {
    margin-right: 10px;
    margin-bottom: 10px;
}

.vhtml h1 {
    font-size: 30px;
}

.vhtml h2 {
    font-size: 28px;
}

.vhtml h3 {
    font-size: 26px;
}

.vhtml h4 {
    font-size: 22px;
}

.vhtml h5 {
    font-size: 18px;
}

.editor-content-view {
    padding: 0 10px;
    margin-top: 20px;
    overflow-x: auto;
}

.editor-content-view p,
.editor-content-view li {
    white-space: pre-wrap;
    /* 保留空格 */
}

.editor-content-view blockquote {
    border-left: 8px solid #d0e5f2;
    padding: 10px 10px;
    margin: 10px 0;
    background-color: #f1f1f1;
}

.editor-content-view code {
    font-family: monospace;
    background-color: #eee;
    padding: 3px;
    border-radius: 3px;
}

.editor-content-view pre>code {
    display: block;
    padding: 10px;
}

.editor-content-view table {
    border-collapse: collapse;
}

.editor-content-view td,
.editor-content-view th {
    border: 1px solid #ccc;
    min-width: 50px;
    height: 20px;
}

.editor-content-view th {
    background-color: #f1f1f1;
}

.editor-content-view ul,
.editor-content-view ol {
    padding-left: 20px;
}

.editor-content-view input[type="checkbox"] {
    margin-right: 5px;
}

.editor-content-view img {
    max-width: 100%;
    height: auto;
    margin: 0px 20px;
    float: right;
}


.editor-content-view strong {
    font-weight: bold;
}

.clearfix::after {
    content: "";
    clear: both;
    display: table;
}
</style>