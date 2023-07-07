<template>
    <main>
        <div class="banner">
            <div class="banner_left">
                <h1>曾益慧创IECUBE<br>产业资源案例与评价平台</h1>
                <h2>曾益慧创IECUBE产业案例资源与评价平台是北京曾益慧创科技有限公司开发的帮助教师与学生优化教学过程的承载产业案例及其资源包的平台，教师可通过本平台发布项目，实时监测学生任务完成情况，根据结果数据分析帮助老师评判学生能力薄弱点，改进项目难度设定，为学生提供个性化改进建议。
                </h2>
            </div>
            <div class="banner_right">
                <img src="@/assets/images/homeBackGround.png" alt="">
            </div>
        </div>
        <div class="index1">
            <div class="title">
                <h1>项目案例</h1>
            </div>
            <div class="case">
                <el-card class="card1">

                </el-card>
            </div>
        </div>
        <div class="index2">
            <div class="title">
                <h1>项目案例使用实时数据</h1>
            </div>
            <div class="">
                <h1>hh</h1>
            </div>

        </div>
    </main>
</template>

<script setup lang="ts">

</script>

<style scoped>
main {
    width: 100%;
    height: 300%;
    display: flex;
    flex-direction: column;
}

.index1 {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    background: #FFF;
    /* padding-top: 2vw; */
}

.title {
    margin-top: 5vh;
    margin-bottom: 5vh;
    font-size: 36px;
    color: #33b8b9;
}

.case {
    height: 45vh;
}

.card1 {
    width: 15vw;
    height: 40vh;
}

.index2 {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
}

.banner {
    display: flex;
    align-items: center;
    height: calc(100vh - 100px);
    padding: 0 3vw;
    padding-bottom: 4vw;
    justify-content: center;
}

.banner h1 {
    font-size: 46px;
    color: #33b8b9;
    line-height: 1.261;
}

.banner h2 {
    font-size: 16px;
    color: #333;
    line-height: 1.75;
    margin: 3vw 0 2.8vw;
}

.banner_left {
    display: flex;
    flex-direction: column;
    width: 31%;
    justify-content: center;
}

.banner_right {
    width: 60.3%;
    position: relative;
    max-width: 1228px;
    display: flex;
    justify-content: flex-end;

}

.banner_right img {
    max-width: 120%;
    display: block;
    border: 0;
    width: 95%;
    height: 95%;
    object-fit: cover;
}
</style>