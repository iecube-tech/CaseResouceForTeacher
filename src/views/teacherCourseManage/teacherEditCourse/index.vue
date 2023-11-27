<template>
    <div>
        <el-row>
            <el-col :span="24">
                <el-steps :active="active" simple>
                    <el-step title="基本信息" @click="changeTab(0)" />
                    <el-step title="上传封面" @click="changeTab(1)" />
                    <el-step title="知识点" @click="changeTab(2)" />
                    <el-step title="课程设计" @click="changeTab(3)" />
                    <el-step title="实验设计" @click="changeTab(4)" />
                    <el-step title="课程概览" @click="changeTab(5)" />
                    <el-step title="附件资源" @click="changeTab(6)" />
                </el-steps>
            </el-col>
        </el-row>
        <div style="margin-top: 40px;">
            <one v-if="active == 0" :courseId="courseId" @nextStep="nextStep" />
            <two v-if="active == 1" :courseId="courseId" @lastStep="lastStep" @nextStep="nextStep" />
            <three v-if="active == 2" :courseId="courseId" @lastStep="lastStep" @nextStep="nextStep" />
            <four v-if="active == 3" :courseId="courseId" @lastStep="lastStep" @nextStep="nextStep" />
            <five v-if="active == 4" :courseId="courseId" @lastStep="lastStep" @nextStep="nextStep" />
            <six v-if="active == 5" :courseId="courseId" @lastStep="lastStep" @nextStep="nextStep" />
            <seven v-if="active >= 6" :courseId="courseId" @lastStep="lastStep" @done="done" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import router from '@/router';
import { onBeforeMount, ref } from 'vue'
import one from './child/one.vue'
import two from './child/two.vue'
import three from './child/three.vue'
import four from './child/four.vue'
import five from './child/five.vue'
import six from './child/six.vue'
import seven from './child/seven.vue'
import { ElMessage } from 'element-plus'
import { GetById } from "@/apis/content/getById.js";
import { updateContentDone } from "@/apis/content/teacherContent/updateConentDone.js";

interface content {
    id: number
    name: string
    introduction: string   //简介
    introduce: string //项目课程介绍
    target: string //项目终极目标
    cover: string
    completion: number
    guidance: string
    third: number
}
const contentForm = ref<content>({
    id: null,
    name: '',
    introduction: '',
    introduce: '',
    target: '',
    cover: '',
    completion: null,
    guidance: '',
    third: 1,
})
const route = useRoute()
const courseId = ref(0)
const active = ref(0)
const biggestCompetion = ref(0)

const changeTab = (index) => {
    if (index > biggestCompetion.value + 1) {
        return
    }
    else {
        active.value = index
    }
}

const nextStep = (completion) => {
    active.value = completion + 1
    if (completion > biggestCompetion.value) {
        biggestCompetion.value = completion
    }
}

const lastStep = () => {
    active.value -= 1
}
const getConten = (id) => {
    GetById(id).then(res => {
        if (res.state == 200) {
            contentForm.value = res.data
            active.value = contentForm.value.completion + 1
            biggestCompetion.value = contentForm.value.completion
        } else {
            ElMessage.error(res.message)
        }
    })
}

const done = () => {
    updateContentDone(courseId.value).then(res => {
        console.log('11111', courseId.value)
        if (res.state == 200) {
            router.push({
                name: <any>route.meta.parentName,
            })
        } else {
            ElMessage.error(res.message)
        }
    })
}

onBeforeMount(() => {
    courseId.value = <any>route.params.courseId
    getConten(courseId.value)
})
</script>
<style scoped></style>