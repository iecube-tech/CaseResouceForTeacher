<template>
    <div style="padding: 20px 0;" v-if="gw.grade != null">
        <el-row style="font-size: 18px;">
            <span>
                学生客观题成绩
            </span>
        </el-row>
        <div style="padding: 20px 0; display: flex; flex-direction: column;">
            <div style="display: flex; align-items: center;">
                <span>客观题成绩：</span>
                <el-popover trigger="hover" placement="right" :width="600">
                    <template #reference>
                        <el-button link type="primary" style="margin-right: 16px">{{ gw.grade }}</el-button>
                    </template>
                    <div>
                        <div v-for="i in questionVoList.length" style="margin-top: 20px;">
                            <el-row style="display: flex; align-items: center;">
                                <el-col :span="2" style="color: var(--el-color-primary);">
                                    <span v-if="questionVoList[i - 1].multipleChoices">[多选]</span>
                                    <span v-else>[单选]</span>
                                </el-col>
                                <el-col :span="22">
                                    <el-input v-model="questionVoList[i - 1].name" type="primary" disabled></el-input>
                                </el-col>
                            </el-row>
                            <el-row style="margin-top: 20px;">
                                <el-col :span="2"></el-col>
                                <el-col :span="22">
                                    <div v-if="questionVoList[i - 1].multipleChoices">
                                        <el-checkbox-group v-model="questionVoList[i - 1].answer" disabled>
                                            <el-checkbox :class="getClass(i - 1, j - 1)"
                                                v-for="j in questionVoList[i - 1].solutions.length" :key="j"
                                                :label="questionVoList[i - 1].solutions[j - 1].id">
                                                {{ questionVoList[i - 1].solutions[j - 1].name }}
                                            </el-checkbox>
                                        </el-checkbox-group>
                                    </div>
                                    <div v-else>
                                        <el-radio-group v-model="questionVoList[i - 1].answer[0]" disabled>
                                            <el-radio :class="getClass(i - 1, j - 1)"
                                                v-for="j in questionVoList[i - 1].solutions.length" :key="j"
                                                :label="questionVoList[i - 1].solutions[j - 1].id">
                                                {{ questionVoList[i - 1].solutions[j - 1].name }}
                                            </el-radio>

                                        </el-radio-group>
                                    </div>
                                </el-col>
                            </el-row>

                            <el-row v-if="questionVoList[i - 1].result == false" style="margin-top: 20px;">
                                <el-col :span="2">

                                </el-col>
                                <el-col :span="22">
                                    <el-row>
                                        <span style="color: var(--el-color-primary); margin-right: 10px;">[题目解析:] </span>
                                        <span>{{ questionVoList[i - 1].solve }}</span>
                                    </el-row>
                                </el-col>
                            </el-row>
                        </div>
                    </div>
                </el-popover>
            </div>
            <div style="display:flex;align-items:center;">
                <span>
                    本 任务/实验 客观题权重：
                </span>
                <el-popover trigger="click" placement="right" :width="400">
                    <template #reference>
                        <el-button link type="primary" style="margin-right: 16px">{{ gw.weighting }}%</el-button>
                    </template>
                    <div style="display: flex; flex-direction:column;">
                        <span>更改本任务/实验客观题权重：</span>
                        <el-input-number v-model="newWeighting" :min="0" :max="100" @change="weightingChange" />
                    </div>
                </el-popover>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onBeforeMount } from 'vue';

import { getGW } from '@/apis/questionBank/getgw.js';
import { getQuestion } from '@/apis/questionBank/getQuestionVo.js';
import { updateWeighting } from '@/apis/questionBank/updateogw.js';
import { ElMessage } from 'element-plus';

interface solution {
    id: number,
    questionId: number,
    name: string,
}

interface questionVo {
    id: number,
    name: string,
    solve: string,
    difficulty: number,
    multipleChoices: boolean,
    solutions: Array<solution>,
    result: boolean,
    answer: Array<Number>,
    realAnswer: Array<Number>,
}

const props = defineProps({
    pstId: Number,
})

const pstId = props.pstId!


const gw = ref({
    grade: null,
    weighting: null
})

const questionVoList = ref<Array<questionVo>>([])

const getQuestions = () => {
    getQuestion(pstId).then(res => {
        questionVoList.value = res.data
    })
}


const getClass = (i: number, j: number) => {
    if (questionVoList.value[i].result != null) {
        // 是正确答案 且选择了
        if (questionVoList.value[i].realAnswer.includes(questionVoList.value[i].solutions[j].id) && questionVoList.value[i].answer.includes(questionVoList.value[i].solutions[j].id)) {
            return 'aa'
        }

        // 是正确答案 没有选
        if (questionVoList.value[i].realAnswer.includes(questionVoList.value[i].solutions[j].id) && !questionVoList.value[i].answer.includes(questionVoList.value[i].solutions[j].id)) {
            return 'bb'
        }

        // 不是正确答案 选择了
        if (!questionVoList.value[i].realAnswer.includes(questionVoList.value[i].solutions[j].id) && questionVoList.value[i].answer.includes(questionVoList.value[i].solutions[j].id)) {
            return 'cc'
        }
    }
}

const newWeighting = ref(0)

const weightingChange = () => {
    updateWeighting(pstId, newWeighting.value).then(res => {
        if (res.state == 200) {
            gw.value = res.data
        }
        else {
            newWeighting.value = gw.value.weighting
            ElMessage.warning(res.message)

        }
    })
}
//获取学生客观题成绩  在pst中
//获取task的objectiveGrade 权重
onBeforeMount(() => {
    getGW(pstId).then(res => {
        if (res.state == 200) {
            gw.value = res.data
            newWeighting.value = gw.value.weighting
        }
    })
    getQuestions()
})

</script>
<style scoped>
.aa :deep() .el-radio__inner {
    background-color: var(--el-color-primary) !important;
    border-color: var(--el-color-primary) !important;
}

.aa :deep() .el-radio__inner::after {
    background-color: var(--el-color-white) !important;
}

.aa :deep() .el-radio__label {
    color: var(--el-color-primary) !important;
}


.bb :deep() .el-radio__inner {
    background-color: var(--el-color-success) !important;
    border-color: var(--el-color-success) !important;
}

.bb :deep() .el-radio__inner {
    background-color: var(--el-color-white) !important;
}

.bb :deep() .el-radio__label {
    color: var(--el-color-success) !important;
}


.cc :deep() .el-radio__inner {
    background-color: var(--el-color-danger) !important;
    border-color: var(--el-color-danger) !important;
}

.cc :deep() .el-radio__inner::after {
    background-color: var(--el-color-white) !important;
}

.cc :deep() .el-radio__label {
    color: var(--el-color-danger) !important;
}



.aa :deep() .el-checkbox__inner {
    background-color: var(--el-color-primary) !important;
    border-color: var(--el-color-primary) !important;
}


.aa :deep() .el-checkbox__inner::after {
    /* background-color: var(--el-color-primary) !important; */
    border-color: var(--el-color-white) !important;
}

.aa :deep() .el-checkbox__label {
    color: var(--el-color-primary) !important;
}

.bb :deep() .el-checkbox__inner {
    background-color: var(--el-color-white) !important;
    border-color: var(--el-color-success) !important;
}

.bb :deep() .el-checkbox__label {
    color: var(--el-color-success) !important;
}

.cc :deep() .el-checkbox__inner {
    background-color: var(--el-color-danger) !important;
    border-color: var(--el-color-danger) !important;
}

.cc :deep() .el-checkbox__label {
    color: var(--el-color-danger) !important;
}
</style>