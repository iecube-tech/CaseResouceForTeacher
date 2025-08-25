<template>
    <div>
        {{ compData.type }}
        <el-form :model="compData" :rules="formRules" ref="compFormRef" label-width="100">
            <el-form-item label="实验步骤" prop="stage" placeholder="请选择实验步骤">
                <el-select v-model="compData.stage">
                    <el-option v-for="(opt, k) in stageList" :key="k" :label="opt.label" :value="opt.value"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="类型" prop="type">
                <el-select v-model="compData.type" placeholder="选择类型">
                    <el-option v-for="(item, k) in componentTypes" :key="item.value" :label="item.label"
                        :value="item.value" />
                </el-select>
            </el-form-item>
            <el-form-item label="名称" prop="name">
                <el-input v-model="compData.name"></el-input>
            </el-form-item>

            <el-form-item label="检测点" prop="tag">
                <el-select v-model="compData.tag" clearable>
                    <el-option v-for="(tagItem, k) in tagList" :key="tagItem.id" :label="tagItem.name"
                        :value="tagItem.id">
                    </el-option>
                </el-select>
            </el-form-item>

            <el-form-item label="是否计算分值" prop="needCalculate">
                <el-switch v-model="compData.needCalculate"></el-switch>
            </el-form-item>

            <el-form-item label="得分" prop="score" v-show="compData.needCalculate">
                <el-input-number v-model="compData.score" :min="0"></el-input-number>
            </el-form-item>

            <el-form-item label="总分" prop="totalScore" v-show="compData.needCalculate">
                <el-input-number v-model="compData.totalScore" :min="0"></el-input-number>
            </el-form-item>

            <el-form-item label="分数比例" prop="scoreProportion" v-show="compData.needCalculate">
                <span>{{ compData.scoreProportion * 100 }} %</span>
            </el-form-item>

            <!-- 内容 -->
            <template v-if="props.compData.type == 'TEXT'">
                <el-form-item label="内容" prop="payload.content" :rules="[
                    {
                        required: true,
                        validator: notEmpty,
                        message: '请输入内容',
                        trigger: ['blur', 'change'],
                    },
                ]">
                    <contentEdit v-model="compData.payload.content"></contentEdit>
                </el-form-item>
            </template>

            <!-- 视频 -->
            <template v-if="compData.type == 'VIDEO'">
                <el-form-item label="视频" prop="payload.video.filename" :rules="[
                    {
                        required: true,
                        validator: (r, v, cb) => {
                            if (compData.payload.video.filename == '') {
                                cb(new Error('请上传视频'));
                            } else {
                                cb();
                            }
                        },
                        trigger: 'change',
                    },
                ]">
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
                        <span> {{ compData.payload.video.filename }} </span>
                        <el-icon class="ml-4" v-show="compData.payload.video.filename" @click="deleteVideo">
                            <Delete />
                        </el-icon>
                    </div>
                </el-form-item>
                <el-form-item label="视频标题" prop="payload.video.title" :rules="[
                    {
                        required: true,
                        message: '请输入视频标题',
                        trigger: 'blur',
                    },
                ]">
                    <el-input v-model="compData.payload.video.title"></el-input>
                </el-form-item>
                <el-form-item label="视频描述" prop="payload.video.description" :rules="[
                    {
                        required: true,
                        message: '请输入视频描述',
                        trigger: 'blur',
                    },
                ]">
                    <el-input v-model="compData.payload.video.description"></el-input>
                </el-form-item>
                <el-form-item label="视频时长" prop="palyload.video.duration">
                    <el-input v-model.number="compData.payload.video.duration"></el-input>
                </el-form-item>
                <el-form-item label="视频状态" prop="palyload.video.isReady">
                    <el-switch v-model="compData.payload.video.isReady" inactive-text="未观看" active-text="已学习"
                    :inactive-value="0" :active-value="1"></el-switch>
                </el-form-item>
            </template>

            <!-- 分组 -->
            <template v-if="compData.type === 'GROUP'">
                <el-form-item label="限制人数" prop="group.limitNum">
                    <el-input-number v-model="compData.payload.group.limitNum" min="1">
                    </el-input-number>
                </el-form-item>
                <el-form-item label="显示" prop="group.showByDevice">
                    <el-switch v-model="compData.payload.group.showByDevice"
                    active-text="根据设备状态显示" inactive-text="永久显示"></el-switch>
                </el-form-item>
                <el-form-item label="提示信息" prop="group.message">
                    <el-input v-model="compData.payload.group.message"></el-input>
                </el-form-item>
            </template>

            <!-- 设备 -->
            <template v-if="compData.type === 'DEVICE'">
                <el-form-item label="设备类型" prop="device.deviceType">
                    <el-select v-model="compData.payload.device.deviceType">
                        <el-option label="3835" value="3835"></el-option>
                        <el-option label="2830" value="2830"></el-option>
                    </el-select>
                </el-form-item>
            </template>

            <!-- 单选 -->
            <template v-if="compData.type == 'CHOICE'">
                <el-form-item label="题目：" prop="payload.question.question">
                    <el-input v-model="compData.payload.question.question" type="textarea"
                        :autosize="{ minRows: 4, maxRows: 10 }" placeholder="输入题目支持markdown，不要输入题目编号" />
                </el-form-item>

                <el-form-item label="选项：" prop="payload.question.options">
                    <div class="w-full flex items-center">
                        <el-input class="mr-2" v-model="newOptionValue"></el-input>
                        <el-button type="primary" size="small" @click="addOption">添加</el-button>
                    </div>
                    <div class="flex flex-col">
                        <el-radio-group v-model="compData.payload.question.answer">
                            <el-radio v-for="item in compData.payload.question
                                .options" :label="item.label">
                                <div class="flex items-center">
                                    <span class="mr-2">{{ item.label }}.</span>
                                    <textPreview :content="item.value"></textPreview>
                                </div>
                            </el-radio>
                        </el-radio-group>
                    </div>
                </el-form-item>
                <el-form-item label="答案：" prop="payload.question.answer">
                    {{ compData.payload.question.answer }}
                </el-form-item>
                <el-form-item label="解析：">
                    <el-input v-model="compData.payload.question.analysis" type="textarea"
                        :autosize="{ minRows: 4, maxRows: 10 }" placeholder="输入题目解析 支持markdown"></el-input>
                </el-form-item>
                <el-form-item label="难度：" prop="payload.question.difficulty">
                    <el-rate v-model="compData.payload.question.difficulty" :min="1" :max="10" />
                </el-form-item>
            </template>

            <!-- 多选 -->
            <template v-if="compData.type == 'MULTIPLECHOICE'">
                <el-form-item label="题目：" prop="payload.question.question">
                    <el-input v-model="compData.payload.question.question" type="textarea"
                        :autosize="{ minRows: 4, maxRows: 10 }" placeholder="输入题目支持markdown，不要输入题目编号" />
                </el-form-item>
                <el-form-item label="选项：" prop="payload.question.options">
                    <div class="w-full flex items-center">
                        <el-input class="mr-2" v-model="newOptionValue"></el-input>
                        <el-button type="primary" size="small" @click="addOption">添加</el-button>
                    </div>
                    <el-checkbox-group v-model="compData.payload.question.answerOption">
                        <el-checkbox v-for="item in compData.payload.question.options" :label="item.label">
                            <div class="flex items-center">
                                <span class="mr-2">{{ item.label }}.</span>
                                <textPreview :content="item.value"></textPreview>
                            </div>
                        </el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
                <el-form-item label="答案：" prop="payload.question.answerOption">
                    {{ compData.payload.question.answerOption }}
                </el-form-item>

                <el-form-item label="解析：" prop="analysis">
                    <el-input v-model="compData.payload.question.analysis" type="textarea"
                        :autosize="{ minRows: 4, maxRows: 10 }" placeholder="输入题目解析 支持markdown"></el-input>
                </el-form-item>
                <el-form-item label="难度：" prop="difficulty">
                    <el-rate v-model="compData.payload.question.difficulty" :max="10" />
                </el-form-item>
            </template>

            <!-- 问答/电路检查 -->
            <template v-if="['QA', 'CIRCUIT'].includes(compData.type)">
                <el-form-item label="题目：" prop="payload.question.question">
                    <el-input v-model="compData.payload.question.question" type="textarea"
                        :autosize="{ minRows: 4, maxRows: 10 }" placeholder="输入题目 支持markdown，不要输入题目编号" />
                </el-form-item>
                <el-form-item label="答案：" prop="payload.question.answer">
                    <el-input v-model="compData.payload.question.answer" type="textarea"
                        :autosize="{ minRows: 4, maxRows: 10 }" placeholder="输入题目答案 支持markdown" />
                </el-form-item>
                <el-form-item label="解析：" prop="payload.question.analysis">
                    <el-input v-model="compData.payload.question.analysis" type="textarea"
                        :autosize="{ minRows: 4, maxRows: 10 }" placeholder="输入题目解析 支持markdown"></el-input>
                </el-form-item>
                <el-form-item label="错误引导：">
                    <el-input v-model="compData.payload.question.hintWhenWrong" type="textarea"
                        :autosize="{ minRows: 4, maxRows: 10 }" placeholder="输入题目错误指引 支持markdown"></el-input>
                </el-form-item>
                <el-form-item label="难度：" prop="difficulty">
                    <el-rate v-model="compData.payload.question.difficulty" :max="10" />
                </el-form-item>
            </template>

            <!-- 表格 / 描点连线 -->
            <template v-if="['TABLE', 'TRACELINE'].includes(compData.type)">
                <el-form-item label="表名：" prop="payload.table.tableName" :rules="[
                    {
                        type: 'string',
                        required: true,
                        message: '请输入表名',
                        trigger: 'blur',
                    },
                ]">
                    <el-input v-model="compData.payload.table.tableName"></el-input>
                </el-form-item>
                <el-form-item label="列数：" prop="payload.table.col" :rules="[
                    {
                        type: 'number',
                        required: true,
                        min: 2,
                        max: 10,
                        message: '请输入列数',
                        trigger: 'blur',
                    },
                ]">
                    <el-input-number v-model="compData.payload.table.col" :min="2" :max="10"
                        :disabled="isEdit"></el-input-number>
                </el-form-item>
                <el-form-item label="行数：" prop="payload.table.row" :rules="[
                    {
                        type: 'number',
                        required: true,
                        min: 1,
                        max: 20,
                        message: '请输入行数',
                        trigger: 'blur',
                    },
                ]">
                    <el-input-number v-model="compData.payload.table.row" :min="1" :max="20"
                        :disabled="isEdit"></el-input-number>
                </el-form-item>
            </template>


            <!-- 值在区间内 -->
            <template v-if="compData.type == 'RANGE'">
                <el-form-item label="题目：" prop="payload.question.question">
                    <el-input v-model="compData.payload.question.question" type="textarea"
                        :autosize="{ minRows: 4, maxRows: 10 }" placeholder="输入题目支持markdown，不要输入题目编号" />
                </el-form-item>
                <el-form-item label="最小值：" prop="payload.question.min">
                    <el-input-number v-model="compData.payload.question.min"
                        :max="compData.payload.question.max"></el-input-number>
                </el-form-item>
                <el-form-item label="最大值：" prop="payload.question.max">
                    <el-input-number v-model="compData.payload.question.max"
                        :min="compData.payload.question.min"></el-input-number>
                </el-form-item>
                <el-form-item label="解析：" prop="payload.question.analysis">
                    <el-input v-model="compData.payload.question.analysis" type="textarea"
                        :autosize="{ minRows: 4, maxRows: 10 }" placeholder="输入题目解析 支持markdown"></el-input>
                </el-form-item>
                <el-form-item label="难度：" prop="payload.question.difficulty">
                    <el-rate v-model="compData.payload.question.difficulty" :max="10" />
                </el-form-item>
            </template>

            <el-form-item>
                <el-button type="primary" @click="submitForm"> 确定 </el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script setup>
import contentEdit from "@/components/newExprimentCom/contentEdit.vue";
import textPreview from "@/views/emdV4/textPreview/textPreview.vue";

import { notEmpty } from "@/utils/validator";

import {
    createNewLabComponent,
    getNewThCell,
    getNewCell,
    componentTypes,
    CHIOCEOPTIONLabelList,
    stageList,
} from "@/apis/embV4/interfaces";
import {
    getBookTags,
    getLabComponentTemplates,
    createLabComponentTemplate,
    updateLabComponentTemplate,
    deleteLabComponentTemplate,
} from "@/apis/embV4/index";

import { cloneDeep } from "lodash";

const props = defineProps({
    bookId: String,
    labId: String,
    compData: Object,
    isEdit: Boolean,
});

const emit = defineEmits(["submit"]);

watchEffect(() => {
    if (props.compData.totalScore) {
        props.compData.scoreProportion = parseFloat(
            (props.compData.score / props.compData.totalScore).toFixed(2)
        );
    } else {
        props.compData.scoreProportion = 0;
    }
});

// 获取监测点列表
const tagList = ref([]);

const initTagList = () => {
    getBookTags(props.bookId).then((res) => {
        if (res.state == 200) {
            tagList.value = res.data;
        } else {
            ElMessage.error(res.message);
        }
    });
};

initTagList();

//
const formRules = reactive({
    'name': [
        { required: true, message: '请输入名称', trigger: 'blur' },
    ],
    'payload.question.question': [
        { type: 'string', required: true, message: "请输入题目问题", trigger: 'blur' }
    ],
    'payload.question.options': [
        { type: 'array', required: true, message: "请设置选项", trigger: 'blur' }
    ],
    'payload.question.answer': [
        { type: 'string', required: true, message: "请设置题目答案", trigger: 'blur' }
    ],
    'payload.question.answerOption': [
        { type: 'array', required: true, message: "请设置答案选项", trigger: 'blur' }
    ],
    'payload.table.col': [
        { type: "number", required: true, min: 2, max: 10, message: "请设置列数", trigger: 'blur' }
    ],
    'payload.table.row': [
        { type: "number", required: true, min: 1, max: 20, message: "请设置行数", trigger: 'blur' }
    ],
    'payload.table.tableName': [
        { type: "string", required: true, message: "请输入表名", trigger: 'blur' }
    ],
    'payload.question.min': [
        { type: "number", required: true, message: "请设置值", trigger: 'blur', }
    ],
    'payload.question.max': [
        { type: "number", required: true, message: "请设置值", trigger: 'blur', }
    ],
})



// 视频
const headers = ref({
    "x-access-token": localStorage.getItem("x-access-token"),
    "x-access-type": localStorage.getItem("x-access-type"),
});

const UpVideoSuccess = (res) => {
    props.compData.payload.video.filename = res.data.filename;
    props.compData.payload.video.isReady = res.data.isReady;
    setTimeout(() => {
        getVideo(res.data.filename);
    }, 1000);
};

import { GetVideo } from "@/components/markdownInteraction/api/getVideo";
const getVideo = (filename) => {
    if (filename && filename != "") {
        GetVideo(filename).then((res) => {
            if (res.state == 200) {
                props.compData.payload.video.isReady = res.data.isReady;
            } else {
                ElMessage.warning(res.message);
            }
        });
    }
};

const beforeVideoUpload = (rawFile) => {
    if (rawFile.type !== "video/mp4") {
        ElMessage.error("请确认视频格式为 MP4");
        return false;
    } else if (rawFile.size / 1024 / 1024 > 200) {
        ElMessage.error("请确认视频小于200MB!");
        return false;
    }
    return true;
};

const uploadRef = ref(null);
const deleteVideo = () => {
    props.compData.payload.video.filename = "";
    props.compData.payload.video.isReady = 0;
    uploadRef.value.clearFiles();
};

// 选择题
const newOptionValue = ref("");

const addOption = () => {
    let option = {
        label: CHIOCEOPTIONLabelList[
            props.compData.payload.question.options.length
        ],
        value: newOptionValue.value,
    };
    props.compData.payload.question.options.push(option);
    newOptionValue.value = "";
};

// 提交表单 *************************************
const compFormRef = ref(null);

const submitForm = () => {
    compFormRef.value.validate((v) => {
        if (v) {
            handleSubmit(cloneDeep(props.compData));
        }
    });
};

// save or edit
const handleSubmit = (reqCompData) => {
    if (!props.isEdit) {
        savePlayload(reqCompData);
    } else {
        editPlayload(reqCompData);
    }
};

const savePlayload = (reqCompData) => {
    if (['TABLE', 'TRACELINE'].includes(reqCompData.type)) {
        // 根据行列数生成表格数据
        for (let i = 0; i < reqCompData.payload.table.col; i++) {
            let newThCell = cloneDeep(getNewThCell())
            reqCompData.payload.table.tableHeader.push(newThCell)
        }
        for (let i = 0; i < reqCompData.payload.table.row; i++) {
            reqCompData.payload.table.tableRow.push([])
            for (let j = 0; j < reqCompData.payload.table.col; j++) {
                let newCell = cloneDeep(getNewCell())
                reqCompData.payload.table.tableRow[i].push(newCell)
            }
        }
    }

    reqCompData.payload = JSON.stringify(reqCompData.payload);

    createLabComponentTemplate(props.labId, reqCompData).then((res) => {
        if (res.state == 200) {
            emit("submit");
        } else {
            ElMessage.error(res.message);
        }
    });
};

const editPlayload = (reqCompData) => {
    reqCompData.payload = JSON.stringify(reqCompData.payload);

    updateLabComponentTemplate(props.labId, reqCompData).then((res) => {
        if (res.state == 200) {
            emit("submit");
        } else {
            ElMessage.error(res.message);
        }
    });
};
</script>

<style scoped></style>
