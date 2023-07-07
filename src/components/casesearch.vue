<template>
    <el-card class="search_card" :body-style="{ padding: 0 }" shadow="never">
        <el-row>
            <el-input placeholder="请输入关键字，点击搜索按钮进行检索" style="border-bottom:3px solid #33b8b9">
                <template #append>
                    <el-button :icon="Search" />
                </template>
            </el-input>
        </el-row>
        <el-row style="margin-top: 10px; margin-bottom: 10px;">
            <el-select v-model="hardware" placeholder="硬件平台" :change="hardwareChange(hardware)">
                <el-option v-for="item in hardwares  " :key="item.value" :label="item.label" :value="item.value"
                    :disabled="item.disabled" />
            </el-select>

            <el-select v-model="subject" placeholder="项目主题" style="margin-right: 4.8vw;" :change="subjectChange(subject)">
                <el-option v-for="  item   in   subjects  " :key="item.value" :label="item.label" :value="item.value"
                    :disabled="item.disabled" />
            </el-select>

            <el-radio-group class="classification" v-model="classification" :change="classificationChange(classification)">
                <el-radio v-for="  item   in   classifications  " :key="item.value" :label="item.value">{{
                    item.name }}</el-radio>
            </el-radio-group>
        </el-row>
    </el-card>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Search } from '@element-plus/icons-vue'
//下拉选择框1
const hardware = ref('')
const hardwares = [
    {
        value: 1,
        label: 'ADS',
        disabled: true,
    },
    {
        value: 2,
        label: 'MyRIO',
        disabled: true,
    },
    {
        value: 3,
        label: 'USRP',
        disabled: true,
    },
    {
        value: 4,
        label: '3100',
        disabled: true,
    },
]

//下拉选择框2
const subject = ref('')
const subjects = [
    {
        value: 1,
        label: '模电、数电、电路原理',
        // disabled: true,
    },
    {
        value: 2,
        label: '电子系统综合设计',
        disabled: true,
    },
]

//单选框
const classification = ref(0)
const classifications = [
    {
        value: 1,
        name: "工科基础"
    },
    {
        value: 2,
        name: "信息与电子"
    },
    {
        value: 3,
        name: "机电与测控"
    },
    {
        value: 4,
        name: "能源与动力"
    },
]

const classificationChange = (item) => {
    console.log('classification');
    console.log(item);
}
const subjectChange = (subject) => {
    console.log('subject');
    console.log(subject)
}
const hardwareChange = (hardware) => {
    console.log(hardware);
    console.log(hardware)
}
</script>

<style scoped>
.search_card {
    /* height: 15vh; */
    margin-top: 10px;
    margin-left: calc(164px + 4.8vw);
    margin-right: calc(164px + 4.8vw);
    padding: 0;
}
</style>