<template>
    <div class="resource">
        <el-row class="title">
            <div class="title_class">产业项目案例</div>
            <el-row class="title_font">蓝牙音箱</el-row>
        </el-row>
        <el-row class="tabs">
            <el-tabs stretch>
                <el-tab-pane label="概览">
                    <el-row class="summary">
                        <el-row class="summary_title">
                            概述
                        </el-row>
                        <el-row class="summary_detail">
                            对于这个内容的一个总结性概括。
                        </el-row>
                    </el-row>
                    <el-carousel class="points" type="card" height="600px" trigger="click" :autoplay="false" :loop="false">
                        <el-carousel-item class="points_item" v-for="item in 6" :key="item">
                            <el-row class="points_item_first">
                                <div class="circle">
                                    蓝牙音箱
                                </div>
                            </el-row>
                            <el-row class="points_item_second">
                                <div v-for="o in 3" :key="o" class="circle2">
                                    蓝牙音箱
                                </div>
                            </el-row>
                            <el-row class="points_item_third">
                                <div v-for="p in 8" :key="p" class="circle3">
                                    蓝牙音箱
                                </div>
                            </el-row>
                        </el-carousel-item>
                    </el-carousel>
                    <el-row class="points_footer_title">
                        关系链
                    </el-row>
                    <!-- <el-row style="width: 100%; flex-direction: column; padding-left: 15%;"> -->
                    <el-row class="points_footer">
                        <el-col :span="8">
                            <el-row>
                                <div class="circle_green"></div>
                                <div class="line"></div>
                            </el-row>
                        </el-col>
                        <el-col :span="8">
                            <el-row>
                                <div class="circle_blue"></div>
                                <div class="line"></div>
                            </el-row>
                        </el-col>
                        <el-col :span="8">
                            <el-row>
                                <div class="circle_pink"></div>
                            </el-row>
                        </el-col>
                    </el-row>

                    <el-row class="points_footer_detail">
                        <el-col :span="8" class="points_footer_detail_link">
                            <el-row v-for="o in 1" :key="o">
                                <el-link :underline="false" style="color: #00d9a3;">项目案例</el-link>
                            </el-row>
                        </el-col>
                        <el-col :span="8" class="points_footer_detail_link">
                            <el-row v-for="p in 3" :key="p">
                                <el-link :underline="false" style="color: #26c9ff;">教学套件</el-link>
                            </el-row>
                        </el-col>
                        <el-col :span="8" class="points_footer_detail_link">
                            <el-row v-for="i in 8" :key="5">
                                <el-link :underline="false" style="color: #ff4dff;">教学知识点</el-link>
                            </el-row>
                        </el-col>
                    </el-row>
                    <!-- </el-row> -->
                </el-tab-pane>
                <el-tab-pane label="课程设计思路">
                    课程设计思路
                </el-tab-pane>
                <el-tab-pane label="资源包">
                    资源包
                </el-tab-pane>
            </el-tabs>
        </el-row>
    </div>
</template>

<script setup lang="ts">
import { Star } from '@element-plus/icons-vue'
</script>
<style scoped>
.resource {
    background-color: #f2faff;
}

.points_item {
    padding: 50px;
}

.points_item_first {
    height: 150px;
    /* padding-top: 30px; */
    justify-content: center;
}

.points_item_second {
    height: 150px;
    padding-top: 10px;
    margin-top: 20px;
    justify-content: center;
}

.points_item_third {
    height: 150px;
    padding-top: 30px;
    margin-top: 20px;
    justify-content: center;
}

.circle {
    width: 120px;
    height: 120px;
    border-style: solid;
    border-width: 4px;
    border-radius: 50%;
    border-color: #00d9a3;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
    margin-right: 10px;
}

.circle:hover {
    background-color: #00d9a3;
    color: #ffffff;
}

.circle2 {
    width: 120px;
    height: 120px;
    border-style: solid;
    border-width: 4px;
    border-radius: 50%;
    border-color: #26c9ff;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 50px;
    margin-right: 50px;
}

.circle2:hover {
    background-color: #26c9ff;
    color: #ffffff;
}

.circle3 {
    width: 120px;
    height: 120px;
    border-style: solid;
    border-width: 4px;
    border-radius: 50%;
    border-color: #ff4dff;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
    margin-right: 10px;
}

.circle3:hover {
    background-color: #ff4dff;
    color: #ffffff;
}

.summary {
    height: 150px;
    background-color: #ffffff;
    padding-top: 20px;
    padding-left: 8%;
    flex-direction: column;
}

.summary_title {
    font-size: 30px;
}

.summary_detail {
    padding-top: 10px;
    flex-grow: 1;
}

.title {
    height: 150px;
    padding-top: 30px;
    padding-left: 10%;
    display: flex;
    flex-direction: column;
}

.title_class {
    font-size: 20px;
    padding-left: 27px;
    color: #00d9a3;
}

.title_font {
    height: 50px;
    font-size: 30px;
    /* color: #33b8b9; */
}

.title_font::before {
    display: flex;
    justify-content: center;
    content: '';
    display: block;
    width: 20px;
    height: 20px;
    background: #00d9a3;
    border-radius: 50%;
    margin-top: 16px;
    margin-right: 5px;
}

.el-tabs {
    width: 100%;
}

.tabs {
    min-height: 1050px;
}

.points {
    margin-top: 20px;
}

.el-carousel__item:nth-child(2n) {
    /* background-color: #99a9bf; */
    background-color: #f5f5f5;
}

.el-carousel__item:nth-child(2n + 1) {
    /* background-color: #d3dce6; */
    background-color: #f2f2f2;
}

.points_footer_title {
    margin-top: 30px;
    padding-top: 20px;
    padding-left: 8%;
    font-size: 30px;
    background-color: beige;
}

.points_footer {
    padding-left: 10%;
    padding-top: 40px;
    height: 70px;
    background-color: beige;
}

.points_footer_detail {
    padding-left: 10%;
    min-height: 100px;
    background-color: beige;
    padding-bottom: 30px;
}

.circle_green {
    width: 30px;
    height: 30px;
    background-color: #00d9a3;
    border-radius: 50%;
    border-style: solid;
    border-width: 4px;
    border-radius: 50%;
    border-color: #ffffff;
}

.circle_blue {
    width: 30px;
    height: 30px;
    background-color: #26c9ff;
    border-radius: 50%;
    border-style: solid;
    border-width: 4px;
    border-radius: 50%;
    border-color: #ffffff;
}

.circle_pink {
    width: 30px;
    height: 30px;
    background-color: #ff4dff;
    border-radius: 50%;
    border-style: solid;
    border-width: 4px;
    border-radius: 50%;
    border-color: #ffffff;
}

.line {
    flex-grow: 1;
    height: 4px;
    background-color: #ffffff;
    margin-top: 13px;
}
</style>