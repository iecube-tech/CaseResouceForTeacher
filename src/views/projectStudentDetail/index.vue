<template>
    <el-row class="page_header">
        <pageHeader title="学生完成项目详情" :route=Route />
    </el-row>
    <main>
        <div class="aside">

        </div>
        <div class="resource">

            <el-collapse v-model="activeNames">
                <el-collapse-item v-for="o in 10" :key="o" :title="'步骤' + o" :name="'' + o">
                    <el-row class="student_commit">
                        <el-row style="font-size: 24px;">
                            <span>学生提交内容</span>
                        </el-row>
                        <el-row class="image_preview">
                            <el-image v-for="img in srcList.length" :key="img" style="width: 100px; height: 100px"
                                :src="srcList[img - 1]" :zoom-rate="1.2" :preview-src-list="srcList"
                                :initial-index="img - 1" fit="cover" />
                        </el-row>
                        <el-row class="file_preview">
                            <el-row v-for="file in file_list.length" :key="file">
                                <el-button text icon="Files" style="justify-content: flex-start">
                                    {{ file_list[file - 1].name }}
                                </el-button>
                            </el-row>
                        </el-row>
                        <el-row style="flex-direction: column;">
                            <p>这里是学生提交的自定义内容</p>
                            <p>可以有多个段落</p>
                            <p>是富文本还是只能是文字的描述尚不确定</p>
                        </el-row>
                    </el-row>
                    <el-divider border-style="dashed" />
                    <el-row class="teacher_appraise">
                        <el-row style="font-size: 24px; align-items: center;">
                            <span>教师评价</span>
                            <el-popover placement="right" :width="400" trigger="hover">
                                <template #reference>
                                    <el-icon size="large" style="margin-left: 10px; color: #33b8b9;">
                                        <InfoFilled />
                                    </el-icon>
                                </template>
                                <div>
                                    这里是给老师看的评价标准
                                </div>
                            </el-popover>
                        </el-row>
                        <el-row class="teacher_input">
                            <el-form label-position="top">
                                <el-form-item label="评价/指导内容：">
                                    <el-input type="textarea" v-model="teacher_appraise_input" :autosize="{ minRows: 3 }"
                                        placeholder="Please input"></el-input>
                                </el-form-item>
                                <el-form-item label="标签：">
                                    <el-row style="height: 20px;">
                                        <el-tag v-for="tag in TeacherAppraiseTags.length" :key="tag" class="tag" closable
                                            :disable-transitions="false" @close="tagClose(tag)">
                                            {{ TeacherAppraiseTags[tag - 1].name }}
                                        </el-tag>
                                    </el-row>
                                </el-form-item>
                                <el-row style="flex-direction:column">
                                    <el-row style="align-items: center;">
                                        <span>我的标签</span>
                                        <el-popover placement="right" :width="400" trigger="hover">
                                            <template #reference>
                                                <el-icon size="small" style="margin-left: 10px; color: #33b8b9;">
                                                    <InfoFilled />
                                                </el-icon>
                                            </template>
                                            <div>
                                                管理我的标签
                                            </div>
                                        </el-popover>
                                    </el-row>
                                    <el-row style=" margin-top: 10px; margin-bottom: 10px;">
                                        <el-button v-for="tag in TeacherTags.length" :key="TeacherTags[tag - 1].id"
                                            @click="addTagToTeacherAppraiseTags(tag)">
                                            {{ TeacherTags[tag - 1].name }}</el-button>
                                    </el-row>
                                </el-row>

                                <el-form-item label="分数：">
                                    <el-slider v-model="score" show-input />
                                </el-form-item>
                            </el-form>
                        </el-row>
                        <el-row style="justify-content: center;">
                            <el-button type="primary">保存</el-button>
                        </el-row>
                    </el-row>
                </el-collapse-item>
            </el-collapse>
        </div>

        <div class="right_aside">

        </div>
    </main>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router';
import { Files, InfoFilled } from '@element-plus/icons-vue'
import pageHeader from '@/components/pageheader.vue'

const Route = useRoute()
const projectId = Route.params.projectId
const student = Route.params.studentId
const stepNum = Route.params.stepNum

const url =
    'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg'
const srcList = [
    'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
    'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
    'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
    'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
    'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
    'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
    'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg',
    'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
    'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
    'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
    'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
    'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
    'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
    'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg',
]

const file_list = [
    { name: '6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg', src: 'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg' },
    { name: 'bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg', src: 'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg' },
    { name: 'c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg', src: 'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg' },
]
const teacher_appraise_input = ref('')
const activeNames = ref(['' + stepNum])
const TeacherAppraiseTags = ref([])
const score = ref(0)
const TeacherTags = ref([{ id: 1, name: '内容不完善' }, { id: 2, name: '内容冗余' }, { id: 3, name: '内容有误' }, { id: 4, name: '很好' }, { id: 5, name: '非常棒' }])
const handleChange = (val: string[]) => {
    console.log(val)
}

const addTagToTeacherAppraiseTags = (tag) => {
    for (let i = 0; i < TeacherAppraiseTags.value.length; i++) {
        if (TeacherAppraiseTags.value[i].id === TeacherTags.value[tag - 1].id) {
            return
        }
    }
    TeacherAppraiseTags.value.push(TeacherTags.value[tag - 1])
}
const tagClose = (tag) => {
    TeacherAppraiseTags.value.splice(tag - 1, 1)
}
onMounted(() => {
    document.body.scrollTop = 0;
})
</script>

<style scoped>
.page_header {
    padding-left: 10%;
}

main {
    width: 100%;
    height: 100%;
    display: flex;
}

.aside {
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 200px;
}


.resource {
    height: 100%;
    flex-basis: 1000px;
    margin-top: 30px;
    margin-bottom: 30px;
}

.right_aside {
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 200px;
}

.student_commit {
    margin: 20px;
    flex-direction: column;
}

.teacher_appraise {
    margin: 20px;
    flex-direction: column;
}

.teacher_input {
    flex-direction: column;
    margin-top: 20px;
}

.image_preview {
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 15px;
}

.file_preview {
    padding-top: 20px;
    padding-bottom: 20px;
    flex-direction: column;
    justify-content: flex-start
}

.tag {
    margin-right: 20px;
}

.demo-image__error .image-slot {
    font-size: 30px;
}

.demo-image__error .image-slot .el-icon {
    font-size: 30px;
}

.demo-image__error .el-image {
    width: 100%;
    height: 200px;
}
</style>