<template>
    <div>
        <el-row class="title">
            <div class="title_class">产业项目案例</div>
            <el-row class="title_font">蓝牙音箱</el-row>
        </el-row>
        <el-row class="tabs">
            <el-tabs stretch>
                <el-tab-pane label="概览">
                    <el-row>
                        概览
                    </el-row>
                </el-tab-pane>
                <el-tab-pane label="简介">
                    简介
                </el-tab-pane>
                <el-tab-pane label="资源包">
                    资源包
                </el-tab-pane>
            </el-tabs>
        </el-row>
    </div>
</template>

<script setup lang="ts">

</script>
<style scoped>
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

.points_footer {
    height: 300px;
    background-color: beige;
}
</style>