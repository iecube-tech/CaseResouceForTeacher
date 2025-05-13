<template>
    <div>
        <el-form-item label="类型：" prop="type">
            <el-select v-model="porps.payload.type" placeholder="选择类型">
                <el-option v-if="porps.payload.question" label="单选" :value="BlockType.CHOICE" />
                <el-option v-if="porps.payload.question" label="多选" :value="BlockType.MULTIPLECHOICE" />
                <el-option v-if="porps.payload.question" label="问答" :value="BlockType.QA" />
                <el-option v-if="porps.payload.question" label="电路检查" :value="BlockType.CIRCUIT" />
                <el-option v-if="porps.payload.table" label="表格" :value="BlockType.TABLE" />
                <el-option v-if="porps.payload.table" label="描点连线" :value="BlockType.TRACELINE" />
            </el-select>
        </el-form-item>
        <!-- 单选 -->
        <el-form v-if="porps.payload.type == BlockType.CHOICE" ref="CHOICEFormRef" :model="porps.payload.question"
            :rules="Rules" label-width="auto">
            <el-form-item label="阶段：" prop="stage">
                <el-select v-model="porps.payload.question.stage" placeholder="选择阶段">
                    <el-option label="实验前" :value="StageType.befor" />
                    <el-option label="实验中" :value="StageType.experiment" />
                    <el-option label="实验后" :value="StageType.after" />
                </el-select>
            </el-form-item>
            <el-form-item label="题目：" prop="question">
                <el-input v-model="porps.payload.question.question" type="textarea"
                    placeholder="输入题目支持markdown，不要输入题目编号" />
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
                <el-input v-model="porps.payload.question.flag" placeholder="输入题目标签"></el-input>
            </el-form-item>
            <el-form-item label="解析：">
                <el-input v-model="porps.payload.question.analysis" type="textarea"
                    placeholder="输入题目解析 支持markdown"></el-input>
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
            :model="porps.payload.question" :rules="Rules" label-width="auto">
            <el-form-item label="阶段：" prop="stage">
                <el-select v-model="porps.payload.question.stage" placeholder="选择阶段">
                    <el-option label="实验前" :value="StageType.befor" />
                    <el-option label="实验中" :value="StageType.experiment" />
                    <el-option label="实验后" :value="StageType.after" />
                </el-select>
            </el-form-item>
            <el-form-item label="题目：" prop="question">
                <el-input v-model="porps.payload.question.question" type="textarea"
                    placeholder="输入题目支持markdown，不要输入题目编号" />
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
            <el-form-item label="标签：" prop="flag">
                <el-input v-model="porps.payload.question.flag" placeholder="输入题目标签"></el-input>
            </el-form-item>
            <el-form-item label="解析：" prop="analysis">
                <el-input v-model="porps.payload.question.analysis" type="textarea"
                    placeholder="输入题目解析 支持markdown"></el-input>
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
        <!-- 问答 -->
        <el-form v-if="porps.payload.type == BlockType.QA" ref="QAFormRef" :model="porps.payload.question"
            :rules="Rules" label-width="auto">
            <el-form-item label="阶段：" prop="stage">
                <el-select v-model="porps.payload.question.stage" placeholder="选择阶段">
                    <el-option label="实验前" :value="StageType.befor" />
                    <el-option label="实验中" :value="StageType.experiment" />
                    <el-option label="实验后" :value="StageType.after" />
                </el-select>
            </el-form-item>
            <el-form-item label="题目：" prop="question">
                <el-input v-model="porps.payload.question.question" type="textarea"
                    placeholder="输入题目 支持markdown，不要输入题目编号" />
            </el-form-item>
            <el-form-item label="答案：" prop="answer">
                <el-input v-model="porps.payload.question.answer" type="textarea" placeholder="输入题目答案 支持markdown" />
            </el-form-item>
            <el-form-item label="标签：" prop="flag">
                <el-input v-model="porps.payload.question.flag" placeholder="输入题目标签"></el-input>
            </el-form-item>
            <el-form-item label="解析：" prop="analysis">
                <el-input v-model="porps.payload.question.analysis" type="textarea"
                    placeholder="输入题目解析 支持markdown"></el-input>
            </el-form-item>

            <el-form-item label="错误引导：">
                <el-input v-model="porps.payload.question.hintWhenWrong" type="textarea"
                    placeholder="输入题目错误指引 支持markdown"></el-input>
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
        <el-form v-if="porps.payload.type == BlockType.CIRCUIT" ref="CIRCUITFormRef" :model="porps.payload"
            :rules="Rules" label-width="auto">
            <el-form-item>
                <el-button type="primary" @click="submitForm(CIRCUITFormRef)">
                    确定
                </el-button>
            </el-form-item>
        </el-form>
        <!-- 表格 -->
        <el-form v-if="porps.payload.type == BlockType.TABLE" ref="TABLEFormRef" :model="porps.payload.table"
            :rules="Rules" label-width="auto">
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
            :rules="Rules" label-width="auto">
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
    </div>
</template>

<script setup lang="ts">
import { FormInstance, FormRules } from 'element-plus';
import { reactive, ref } from 'vue';
import { BlockType, StageType, CHIOCEOPTIONLabelList, type CHIOCEOPTION } from '../../../ts/block';
import textPreview from '@/views/emdV3/textPreview/textPreview.vue';

const porps = defineProps({
    payload: Object
})

const emits = defineEmits(['submit'])

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
    ]

})
const newOptionValue = ref('')

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
        if (valid) {
            console.log('submit!')
            emits('submit')
        } else {
            console.log(porps.payload)
            console.log('error submit!', fields)
        }
    })
}

</script>
<style scoped></style>