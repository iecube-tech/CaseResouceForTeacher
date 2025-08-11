<template>
    <div>
        <el-form :model="porps.payload.question" label-width="100">
            <el-form-item label="类型：" prop="type">
                <el-select v-model="porps.payload.type" placeholder="选择类型">
                    <el-option v-if="porps.payload.question" label="内容" :value="BlockType.TEXT" />
                    <el-option v-if="porps.payload.question" label="视频" :value="BlockType.VIDEO" />
                    <el-option v-if="porps.payload.question" label="单选" :value="BlockType.CHOICE" />
                    <el-option v-if="porps.payload.question" label="多选" :value="BlockType.MULTIPLECHOICE" />
                    <el-option v-if="porps.payload.question" label="问答" :value="BlockType.QA" />
                    <el-option v-if="porps.payload.question" label="值在区间内" :value="BlockType.RANGE" />
                    <el-option v-if="porps.payload.question" label="电路检查" :value="BlockType.CIRCUIT" />
                    <el-option v-if="porps.payload.table" label="表格" :value="BlockType.TABLE" />
                    <el-option v-if="porps.payload.table" label="描点连线" :value="BlockType.TRACELINE" />
                </el-select>
            </el-form-item>
        </el-form>
        
        <!-- TODO 视频 -->
        <el-form v-if="porps.payload.type == BlockType.VIDEO" ref="VideoFormRef" :model="porps.payload.question"
         label-width="100">
            <el-form-item label="阶段：" prop="stage">
                <el-select v-model="porps.payload.question.stage" placeholder="选择阶段">
                    <el-option label="实验前" :value="StageType.befor" />
                    <el-option label="实验中" :value="StageType.experiment" />
                    <el-option label="实验后" :value="StageType.after" />
                </el-select>
            </el-form-item>
            <el-form-item label="视频" prop="video.filename" :rules="[{
                required: true,
                validator: (r, v, cb)=>{
                    if(porps.payload.question.video.filename == ''){
                        cb(new Error('请上传视频'))
                    }else{
                        cb()
                    }
                },
                trigger: 'change'
            }]">
                <el-upload ref="uploadRef" class="upload-demo" drag action="/dev-api/video/n/up" :headers="headers"
                    :on-success="UpVideoSuccess" :show-file-list="false" :before-upload="beforeVideoUpload">
                    <el-icon class="el-icon--upload">
                        <UploadFilled />
                    </el-icon>
                    <div class="el-upload__text">
                        将视频拖入 或 <em>点击上传</em>
                    </div>
                </el-upload>
                <div>
                   <span> {{ porps.payload.question.video.filename }} </span> 
                   <el-icon class="ml-4" v-show="porps.payload.question.video.filename" @click="deleteVideo">
                        <Delete />
                    </el-icon>
                </div>
            </el-form-item>
            <el-form-item label="视频标题" prop="video.title" :rules="[
                {required: true, message: '请输入视频标题', trigger: 'blur'}
            ]">
                <el-input v-model="porps.payload.question.video.title"></el-input>
            </el-form-item>
            <el-form-item label="视频描述" prop="video.description" :rules="[
                {required: true, message: '请输入视频描述', trigger: 'blur'}
            ]">
                <el-input v-model="porps.payload.question.video.description"></el-input>
            </el-form-item>
             <el-form-item>
                <el-button type="primary" @click="submitForm(VideoFormRef)">
                    确定
                </el-button>
            </el-form-item>
        </el-form>
        
        <!-- 内容 -->
        <el-form v-if="porps.payload.type == BlockType.TEXT" ref="TEXTFormRef" :model="porps.payload.question"
         label-width="100">
            <el-form-item label="阶段：" prop="stage">
                <el-select v-model="porps.payload.question.stage" placeholder="选择阶段">
                    <el-option label="实验前" :value="StageType.befor" />
                    <el-option label="实验中" :value="StageType.experiment" />
                    <el-option label="实验后" :value="StageType.after" />
                </el-select>
            </el-form-item>
            <el-form-item label="内容" prop="content" :rules="[{
                required: true,
                validator: notEmpty,
                message: '请输入内容',
                trigger: ['blur', 'change']
            }]">
                <contentEdit v-model="porps.payload.question.content"></contentEdit>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm(TEXTFormRef)">
                    确定
                </el-button>
            </el-form-item>
        </el-form>
        
        <!-- 单选 -->
        <el-form v-if="porps.payload.type == BlockType.CHOICE" ref="CHOICEFormRef" :model="porps.payload.question"
            :rules="Rules" label-width="100">
            <el-form-item label="阶段：" prop="stage">
                <el-select v-model="porps.payload.question.stage" placeholder="选择阶段">
                    <el-option label="实验前" :value="StageType.befor" />
                    <el-option label="实验中" :value="StageType.experiment" />
                    <el-option label="实验后" :value="StageType.after" />
                </el-select>
            </el-form-item>
            <el-form-item label="题目：" prop="question">
                <el-input v-model="porps.payload.question.question" type="textarea"
                    :autosize="{ minRows: 4, maxRows: 10 }" placeholder="输入题目支持markdown，不要输入题目编号" />
            </el-form-item>

            <el-form-item label="选项：" prop="options">
                <div class="w-full flex items-center">
                    <el-input class="mr-2" v-model="newOptionValue"></el-input>
                    <el-button type="primary" size="small" @click="addOption">添加</el-button>
                </div>
                <div class="flex flex-col">
                    <el-radio-group v-model="porps.payload.question.answer">
                        <el-radio v-for="item in porps.payload.question.options" :label="item.label">
                            <div class="flex items-center">
                                <span class="mr-2">{{ item.label }}.</span>
                                <textPreview :content="item.value"></textPreview>
                            </div>
                        </el-radio>
                    </el-radio-group>
                </div>
            </el-form-item>
            <el-form-item label="答案：" prop="answer">
                {{ porps.payload.question.answer }}
            </el-form-item>
            <el-form-item label="标签：">
                <el-input v-model="porps.payload.question.tag" placeholder="输入题目标签"></el-input>
            </el-form-item>
            <el-form-item label="解析：">
                <el-input v-model="porps.payload.question.analysis" type="textarea"
                    :autosize="{ minRows: 4, maxRows: 10 }" placeholder="输入题目解析 支持markdown"></el-input>
            </el-form-item>
            <el-form-item label="难度：" prop="difficulty">
                <el-rate v-model="porps.payload.question.difficulty" :min="1" :max="10" />
            </el-form-item>
            <el-form-item label="分数：" prop="score">
                <el-input-number v-model="porps.payload.question.score" :min="1" :max="10" />
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm(CHOICEFormRef)">
                    确定
                </el-button>
            </el-form-item>
        </el-form>
        <!-- 多选 -->
        <el-form v-if="porps.payload.type == BlockType.MULTIPLECHOICE" ref="MULTIPLECHOICEFormRef"
            :model="porps.payload.question" :rules="Rules" label-width="100">
            <el-form-item label="阶段：" prop="stage">
                <el-select v-model="porps.payload.question.stage" placeholder="选择阶段">
                    <el-option label="实验前" :value="StageType.befor" />
                    <el-option label="实验中" :value="StageType.experiment" />
                    <el-option label="实验后" :value="StageType.after" />
                </el-select>
            </el-form-item>
            <el-form-item label="题目：" prop="question">
                <el-input v-model="porps.payload.question.question" type="textarea"
                    :autosize="{ minRows: 4, maxRows: 10 }" placeholder="输入题目支持markdown，不要输入题目编号" />
            </el-form-item>

            <el-form-item label="选项：" prop="options">
                <div class="w-full flex items-center">
                    <el-input class="mr-2" v-model="newOptionValue"></el-input>
                    <el-button type="primary" size="small" @click="addOption">添加</el-button>
                </div>
                <el-checkbox-group v-model="porps.payload.question.answerOption">
                    <el-checkbox v-for="item in porps.payload.question.options" :label="item.label">
                        <div class="flex items-center">
                            <span class="mr-2">{{ item.label }}.</span>
                            <textPreview :content="item.value"></textPreview>
                        </div>
                    </el-checkbox>
                </el-checkbox-group>
            </el-form-item>
            <el-form-item label="答案：" prop="answerOption">
                {{ porps.payload.question.answerOption }}
            </el-form-item>
            <el-form-item label="标签：" prop="tag">
                <el-input v-model="porps.payload.question.tag" placeholder="输入题目标签"></el-input>
            </el-form-item>
            <el-form-item label="解析：" prop="analysis">
                <el-input v-model="porps.payload.question.analysis" type="textarea"
                    :autosize="{ minRows: 4, maxRows: 10 }" placeholder="输入题目解析 支持markdown"></el-input>
            </el-form-item>
            <el-form-item label="难度：" prop="difficulty">
                <el-rate v-model="porps.payload.question.difficulty" :max="10" />
            </el-form-item>
            <el-form-item label="分数：" prop="score">
                <el-input-number v-model="porps.payload.question.score" :min="1" :max="10" />
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm(MULTIPLECHOICEFormRef)">
                    确定
                </el-button>
            </el-form-item>
        </el-form>
        <!-- 问答/电路检查 -->
        <el-form v-if="porps.payload.type == BlockType.QA || porps.payload.type == BlockType.CIRCUIT" ref="QAFormRef"
            :model="porps.payload.question" :rules="Rules" label-width="100">
            <el-form-item label="阶段：" prop="stage">
                <el-select v-model="porps.payload.question.stage" placeholder="选择阶段">
                    <el-option label="实验前" :value="StageType.befor" />
                    <el-option label="实验中" :value="StageType.experiment" />
                    <el-option label="实验后" :value="StageType.after" />
                </el-select>
            </el-form-item>
            <el-form-item label="题目：" prop="question">
                <el-input v-model="porps.payload.question.question" type="textarea"
                    :autosize="{ minRows: 4, maxRows: 10 }" placeholder="输入题目 支持markdown，不要输入题目编号" />
            </el-form-item>
            <el-form-item label="答案：" prop="answer">
                <el-input v-model="porps.payload.question.answer" type="textarea"
                    :autosize="{ minRows: 4, maxRows: 10 }" placeholder="输入题目答案 支持markdown" />
            </el-form-item>
            <el-form-item label="标签：" prop="tag">
                <el-input v-model="porps.payload.question.tag" placeholder="输入题目标签"></el-input>
            </el-form-item>
            <el-form-item label="解析：" prop="analysis">
                <el-input v-model="porps.payload.question.analysis" type="textarea"
                    :autosize="{ minRows: 4, maxRows: 10 }" placeholder="输入题目解析 支持markdown"></el-input>
            </el-form-item>

            <el-form-item label="错误引导：">
                <el-input v-model="porps.payload.question.hintWhenWrong" type="textarea"
                    :autosize="{ minRows: 4, maxRows: 10 }" placeholder="输入题目错误指引 支持markdown"></el-input>
            </el-form-item>

            <el-form-item label="难度：" prop="difficulty">
                <el-rate v-model="porps.payload.question.difficulty" :max="10" />
            </el-form-item>
            <el-form-item label="分数：" prop="score">
                <el-input-number v-model="porps.payload.question.score" :min="1" :max="10" />
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm(QAFormRef)">
                    确定
                </el-button>
            </el-form-item>
        </el-form>
        <!-- 电路检查 -->
        <!-- <el-form v-if="porps.payload.type == BlockType.CIRCUIT" ref="CIRCUITFormRef" :model="porps.payload"
            :rules="Rules" label-width="100">
            <el-form-item>
                <el-button type="primary" @click="submitForm(CIRCUITFormRef)">
                    确定
                </el-button>
            </el-form-item>
        </el-form> -->
        <!-- 表格 -->
        <el-form v-if="porps.payload.type == BlockType.TABLE" ref="TABLEFormRef" :model="porps.payload.table"
            :rules="Rules" label-width="100">
            <el-form-item label="表名：" prop="tableName">
                <el-input v-model="porps.payload.table.tableName"></el-input>
            </el-form-item>
            <el-form-item label="列数：" prop="col">
                <el-input-number v-model="porps.payload.table.col" :min="2" :max="10"></el-input-number>
            </el-form-item>
            <el-form-item label="行数：" prop="row">
                <el-input-number v-model="porps.payload.table.row" :min="1" :max="20"></el-input-number>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm(TABLEFormRef)">
                    确定
                </el-button>
            </el-form-item>
        </el-form>
        <!-- 描点连线 -->
        <el-form v-if="porps.payload.type == BlockType.TRACELINE" ref="TRACELINEFormRef" :model="porps.payload.table"
            :rules="Rules" label-width="100">
            <el-form-item label="表名：" prop="tableName">
                <el-input v-model="porps.payload.table.tableName"></el-input>
            </el-form-item>
            <el-form-item label="列数：" prop="col">
                <el-input-number v-model="porps.payload.table.col" :min="2" :max="10"></el-input-number>
            </el-form-item>
            <el-form-item label="行数：" prop="row">
                <el-input-number v-model="porps.payload.table.row" :min="1" :max="20"></el-input-number>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm(TRACELINEFormRef)">
                    确定
                </el-button>
            </el-form-item>
        </el-form>

        <!-- 值在区间内 -->
        <el-form v-if="porps.payload.type == BlockType.RANGE" ref="MULTIPLECHOICEFormRef"
            :model="porps.payload.question" :rules="Rules" label-width="100">
            <el-form-item label="阶段：" prop="stage">
                <el-select v-model="porps.payload.question.stage" placeholder="选择阶段">
                    <el-option label="实验前" :value="StageType.befor" />
                    <el-option label="实验中" :value="StageType.experiment" />
                    <el-option label="实验后" :value="StageType.after" />
                </el-select>
            </el-form-item>
            <el-form-item label="题目：" prop="question">
                <el-input v-model="porps.payload.question.question" type="textarea"
                    :autosize="{ minRows: 4, maxRows: 10 }" placeholder="输入题目支持markdown，不要输入题目编号" />
            </el-form-item>

            <el-form-item label="最小值：" prop="min">
                <el-input-number v-model="porps.payload.question.min"
                    :max="porps.payload.question.max"></el-input-number>
            </el-form-item>
            <el-form-item label="最大值：" prop="max">
                <el-input-number v-model="porps.payload.question.max"
                    :min="porps.payload.question.min"></el-input-number>
            </el-form-item>
            <el-form-item label="标签：" prop="tag">
                <el-input v-model="porps.payload.question.tag" placeholder="输入题目标签"></el-input>
            </el-form-item>
            <el-form-item label="解析：" prop="analysis">
                <el-input v-model="porps.payload.question.analysis" type="textarea"
                    :autosize="{ minRows: 4, maxRows: 10 }" placeholder="输入题目解析 支持markdown"></el-input>
            </el-form-item>
            <el-form-item label="难度：" prop="difficulty">
                <el-rate v-model="porps.payload.question.difficulty" :max="10" />
            </el-form-item>
            <el-form-item label="分数：" prop="score">
                <el-input-number v-model="porps.payload.question.score" :min="1" :max="10" />
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm(MULTIPLECHOICEFormRef)">
                    确定
                </el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script setup lang="ts">
import { FormInstance, FormRules } from 'element-plus';
import type { MessageParamsWithType, UploadProps } from 'element-plus'
import { reactive, ref } from 'vue';
import { BlockType, StageType, CHIOCEOPTIONLabelList, type CHIOCEOPTION } from '../../../ts/block';
import textPreview from '@/views/emdV4/textPreview/textPreview.vue';

import contentEdit  from '@/components/newExprimentCom/contentEdit.vue';

import { notEmpty} from '@/utils/validator'

const porps = defineProps({
    payload: Object
})

// console.log('---------------------------------------')
// console.log(porps.payload)

const emits = defineEmits(['submit'])



const VideoFormRef = ref(null)
const TEXTFormRef = ref<FormInstance>()
const CHOICEFormRef = ref<FormInstance>()
const MULTIPLECHOICEFormRef = ref<FormInstance>()
const QAFormRef = ref<FormInstance>()
const TABLEFormRef = ref<FormInstance>()
const TRACELINEFormRef = ref<FormInstance>()
const CIRCUITFormRef = ref<FormInstance>()

const Rules = reactive<FormRules>({
    stage: [

    ],
    question: [
        { type: 'string', required: true, message: "请输入题目问题", trigger: 'blur' }
    ],
    options: [
        { type: 'array', required: true }
    ],
    answer: [
        { type: 'string', required: true, message: "请设置题目答案", trigger: 'blur' }
    ],
    answerOption: [
        { type: 'array', required: true }
    ],
    col: [
        { type: "number", required: true, min: 2, max: 10, trigger: 'blur' }
    ],
    row: [
        { type: "number", required: true, min: 1, max: 20, trigger: 'blur' }
    ],
    tableName: [
        { type: "string", required: true, message: "请输入表名", trigger: 'blur' }
    ],
    min: [
        { type: "number", required: true, trigger: 'blur', message: "请设置值", }
    ],
    max: [
        { type: "number", required: true, trigger: 'blur', message: "请设置值", }
    ], 
    content: [
        { type: "string", required: true, message: "请输入内容", trigger: ['blur', 'change'] }
    ],

})
const newOptionValue = ref('')

// 上传视频

const headers = ref({
    'x-access-token': localStorage.getItem("x-access-token"),
    'x-access-type': localStorage.getItem("x-access-type")
})

const beforeVideoUpload: UploadProps['beforeUpload'] = (rawFile) => {
    if (rawFile.type !== 'video/mp4') {
        ElMessage.error('请确认视频格式为 MP4')
        return false
    } else if (rawFile.size / 1024 / 1024 > 200) {
        ElMessage.error('请确认视频小于200MB!')
        return false
    }
    return true
}

const UpVideoSuccess = (res: { data: { filename: string; }; }) => {
    porps.payload.question.video.filename = res.data.filename
    porps.payload.question.video.isReady = res.data.isReady
    setTimeout(() => { getVideo(res.data.filename) }, 1000)
}

import { GetVideo } from '@/components/markdownInteraction/api/getVideo'
const getVideo = (filename: string) => {
    if (filename && filename != '') {
        GetVideo(filename).then(res => {
            if (res.state == 200) {
                // video.value = res.data
                porps.payload.question.video.isReady = res.data.isReady
                // console.log(res.data)
            } else {
                ElMessage.warning(res.message)
            }
        })
    }
}

const uploadRef = ref(null)
const deleteVideo = ()=>{
    porps.payload.question.video.filename = ''
    porps.payload.question.video.isReady = 0
    uploadRef.value.clearFiles()
}

const addOption = () => {
    let option = <CHIOCEOPTION>{
        label: CHIOCEOPTIONLabelList[porps.payload.question.options.length],
        value: newOptionValue.value
    }
    porps.payload.question.options.push(option)
    newOptionValue.value = ''
}

const submitForm = async (formEl: FormInstance | undefined) => {
    if (!formEl) return
    await formEl.validate((valid, fields) => {
        // console.log('校验 结果', valid)
        if (valid) {
            // console.log('submit!')
            emits('submit')
        } else {
            // console.log(porps.payload)
            // console.log('error submit!', fields)
        }
    })
}

</script>
<style scoped></style>