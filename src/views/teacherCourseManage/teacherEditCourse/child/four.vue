<template>
    <div id="pane-fourth" class="pane" key="3">
        <div style="margin: 20px 0px;">
            <span>
                本节需要明确课程目标和对应知识点的匹配关系
            </span>
        </div>
        <div style="margin: 30px 0px;">
            <el-table :data="courseDesign" :border="true" style="width: 100%">
                <el-table-column prop="graduationRequirementName" label="毕业要求" />

                <el-table-column label="毕业要求指标点">
                    <template #default="scope">
                        <div v-if="courseDesign.length > 0 && courseDesign[0] != null">
                            <li v-for="i in scope.row.graduationPointList.length">
                                {{ scope.row.graduationPointList[i - 1].name }}
                            </li>
                        </div>
                    </template>
                </el-table-column>

                <el-table-column label="对应的课程目标">
                    <template #default="scope">
                        <div v-if="courseDesign.length > 0 && courseDesign[0] != null">
                            <li v-for="i in scope.row.courseTargetList.length">
                                {{ scope.row.courseTargetList[i - 1].name }}
                            </li>
                        </div>
                    </template>
                </el-table-column>

                <el-table-column prop="" label="操作" width="100px">
                    <template #default="scope">
                        <el-popconfirm title="确定删除吗?"
                            @confirm="deleteCourseDesignSubmit(scope.row.graduationRequirementId)">
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
                        <span>添加课程目标和对应知识点匹配关系</span>
                    </div>
                </template>
                <div>
                    <el-form label-width="160px" ref="designFormRef" :model="newDesignForm" :rules="designFormRules">
                        <el-form-item label="毕业要求：" prop="graduationRequirementName">
                            <el-input v-model="newDesignForm.graduationRequirementName" style="max-width: 500px; "
                                placeholder="请输入毕业要求">
                            </el-input>
                        </el-form-item>
                        <el-form-item label="毕业要求指标点：" prop="graduationPointList">
                            <div v-if="newDesignForm.graduationPointList.length > 0">
                                <el-tag v-for="i in newDesignForm.graduationPointList.length" :key="i" class="mx-1"
                                    closable @close="removeGraduationPointNewDesignForm(i - 1)">
                                    {{ newDesignForm.graduationPointList[i - 1].name }}
                                </el-tag>
                            </div>
                        </el-form-item>
                        <el-form-item>
                            <el-input style="max-width: 500px; margin-right: 20px;" v-model="graduationPoint"
                                placeholder="请分条输入毕业要求对应指标点，每一条完成后点击右侧保存"></el-input>
                            <el-button type="primary" circle size="small" :icon="Check"
                                @click="graduationPointAddtoNewDesignForm()"></el-button>
                        </el-form-item>

                        <el-form-item label="对应课程目标：" prop="graduationPointList">
                            <div v-if="newDesignForm.courseTargetList.length > 0">
                                <el-tag v-for="i in newDesignForm.courseTargetList.length" :key="i" class="mx-1"
                                    closable @close="removeCourseTargetNewDesignForm(i - 1)">
                                    {{ newDesignForm.courseTargetList[i - 1].name }}
                                </el-tag>
                            </div>
                        </el-form-item>
                        <el-form-item>
                            <el-input style="max-width: 500px; margin-right: 20px;" v-model="courseTarget"
                                placeholder="请分条输入毕业要求对应课程目标，每一条完成后点击右侧保存"></el-input>
                            <el-button type="primary" circle size="small" :icon="Check"
                                @click="courseTargetAddtoNewDesignForm()"></el-button>
                        </el-form-item>

                        <el-form-item>
                            <el-button type="primary" size="small"
                                @click="courseAddDesignSubmit(designFormRef)">添加</el-button>
                            <el-button size="small" @click="designFormReset()">清除内容</el-button>
                        </el-form-item>
                    </el-form>
                </div>
            </el-card>
        </div>
        <el-row class="bottom-row">
            <el-button @click="lastStep">上一步</el-button>
            <el-button type="primary" @click="courseDesignNext()">下一步</el-button>
        </el-row>
    </div>
</template>

<script setup lang="ts">
import { onBeforeMount, ref, reactive } from 'vue';
import { ElMessage, type FormInstance, type FormRules } from 'element-plus'
import { Check, Delete } from '@element-plus/icons-vue'
import { CourseDesign } from "@/apis/course/courseDesign.js";
import { AddCourseDesign } from "@/apis/course/addCourseDesign.js"
import { DeleteCourseDesign } from "@/apis/course/deleteCourseDesign.js";
import { updateCaseDesigns } from "@/apis/content/teacherContent/updateCaseDesign.js";


const props = defineProps({
    courseId: Number
})

onBeforeMount(() => {
    CaseId.value = props.courseId
    getCourseDesign()

})
const emit = defineEmits(['nextStep', 'lastStep'])
const nextStep = (completion: number) => {
    emit("nextStep", completion)
}
const lastStep = () => {
    emit('lastStep')
}
const CaseId = ref(0)
const courseDesign = ref<Array<design | null>>([])
const getCourseDesign = () => {
    CourseDesign(CaseId.value).then(res => {
        if (res.state == 200) {
            courseDesign.value = res.data
        } else {
            ElMessage.error("获取课程设计内容异常")
        }
    })
}

const designFormRef = ref<FormInstance>()
interface graduationPoint {
    id: number | null
    name: string
    parentId: number | null
}

interface courseTarget {
    id: number | null
    name: string
    parentId: number | null
}

interface courseChapter {
    id: number | null
    name: string
    parentId: number | null
}

interface design {
    id: number | null
    graduationRequirementName: string
    graduationPointList: Array<graduationPoint | null>
    courseTargetList: Array<courseTarget | null>
}

const newDesignForm = ref<design | null>({
    id: null,
    graduationRequirementName: '',
    graduationPointList: [],
    courseTargetList: [],
})
const designFormRules = reactive<FormRules>({
    graduationRequirementName: [{ required: true, message: '请输入毕业要求', trigger: 'blur' }],
    graduationPointList: [{
        required: true,
        validator: function (rule, value, callback) {
            if (value[0].point == '') {
                callback(new Error('没有对应的毕业要求指标点'));
            } else {
                callback()
            }
        }, trigger: 'change'
    }],
    courseTargetList: [{
        required: true,
        validator: function (rule, value, callback) {
            if (value[0].point == '') {
                callback(new Error('没有对应的课程目标'));
            } else {
                callback()
            }
        }, trigger: 'change'
    }],
})
const graduationPoint = ref('')
const courseTarget = ref('')
const courseChapter = ref('')

const graduationPointAddtoNewDesignForm = () => {
    if (graduationPoint.value == '') {
        return
    }
    let graduationPointQo = ref<graduationPoint>({
        id: null,
        parentId: null,
        name: graduationPoint.value
    })
    newDesignForm.value.graduationPointList.push(graduationPointQo.value)
    graduationPoint.value = ''
}

const removeGraduationPointNewDesignForm = (index) => {
    newDesignForm.value.graduationPointList.splice(index, 1)
}


const courseTargetAddtoNewDesignForm = () => {
    if (courseTarget.value == '') {
        return
    }
    let courseTargetQo = ref<courseTarget>({
        id: null,
        parentId: null,
        name: courseTarget.value
    })
    newDesignForm.value.courseTargetList.push(courseTargetQo.value)
    courseTarget.value = ''
}

const removeCourseTargetNewDesignForm = (index) => {
    newDesignForm.value.courseTargetList.splice(index, 1)
}

const courseChapterAddtoNewDesignForm = () => {
    if (courseChapter.value == '') {
        return
    }
    let courseChapterQo = ref<courseChapter>({
        id: null,
        parentId: null,
        name: courseChapter.value
    })
    courseChapter.value = ''
}


const courseAddDesignSubmit = async (formEl: FormInstance | undefined) => {
    if (!formEl) return
    await formEl.validate((valid, fields) => {
        if (valid) {
            //console.log('submit!')
            //console.log(newDesignForm.value)
            let data = Object.assign({}, newDesignForm.value)
            //提交表单
            AddCourseDesign(CaseId.value, data).then(res => {
                if (res.state == 200) {
                    courseDesign.value = res.data
                    //清空表单
                    designFormReset()
                } else {
                    ElMessage.error(res.message)
                }
            })
        } else {
            //console.log('error submit!', fields)
        }
    })
}
const designFormReset = () => {
    newDesignForm.value.graduationRequirementName = ''
    newDesignForm.value.graduationPointList.splice(0, newDesignForm.value.graduationPointList.length)
    newDesignForm.value.courseTargetList.splice(0, newDesignForm.value.courseTargetList.length)
}
const deleteCourseDesignSubmit = (id) => {
    DeleteCourseDesign(CaseId.value, id).then(res => {
        if (res.state == 200) {
            courseDesign.value = res.data
        } else {
            ElMessage.error(res.message)
        }
    })
}
const courseDesignNext = () => {
    updateCaseDesigns(CaseId.value).then(res => {
        if (res.state == 200) {
            let completion = res.data.completion
            nextStep(completion)
        } else {
            ElMessage.error(res.message)
        }
    })
}
</script>

<style scoped>
.bottom-row {
    margin-top: 20px;
    display: flex;
    justify-content: flex-end;
}

.mx-1 {
    margin-right: 10px;
    margin-bottom: 10px;
}
</style>