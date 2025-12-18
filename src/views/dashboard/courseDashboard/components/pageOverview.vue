<!-- Page 1 -->
<template>
  <!-- 页面1: 课程概览总览 -->
  <transition name="fade" mode="out-in">
    <div v-show="currentModule == 0" class="h-full flex flex-col justify-around">

      <!-- 第一行 -->
      <screen-card class="p-4 h-[162px]">
        <div class="h-full grid grid-cols-5">
          <div class="col-span-2 flex flex-col justify-around">
            <h1 class="text-white text-xl font-bold">半导体器件物理实验</h1>
            <div class="grid grid-cols-2">
              <div class="text-blue-200">授课教师: <span class="text-white ">张教授</span></div>
              <div class="text-blue-200">学期时间: <span class="text-white ">2025春季</span></div>
            </div>
            <div class="grid grid-cols-2">
              <div class="text-blue-200">班级信息: <span class="text-white ">电子2301</span></div>
              <div class="text-blue-200">学生人数: <span class="text-white ">62人</span></div>
            </div>
          </div>
          <!-- 右侧课程状态 -->
          <div class="col-span-3">
            <div class="h-full flex flex-col justify-around items-center p-2 rounded-3xl border border-blue-400/30
               bg-gradient-to-r from-blue-500/20 to-purple-500/20">
              <div class="text-white/80 text-xl">当前状态</div>
              <div class="text-green-400 text-4xl ">进行中</div>
              <div class="grid grid-cols-3 gap-6 text-xl">
                <div class="text-center">
                  <span class="text-white/60">开课时间: </span>
                  <span class="text-white ">2025.11.30-2025.12.31</span>
                </div>
                <div class="text-center">
                  <span class="text-white/60">总课时数: </span>
                  <span class="text-white ">48学时</span>
                </div>
                <div class="text-center">
                  <span class="text-white/60">实验项目: </span>
                  <span class="text-white ">4个</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </screen-card>

      <!-- 第二行 -->
      <div class="grid grid-cols-6 h-[80px] gap-[10px]">
        <!-- 课程平均分 -->
        <screen-card class="flex flex-col justify-around items-center p-2">
          <span class="text-green-400  font-bold text-[30px] leading-[30px]">83.6</span>
          <span class="text-lg">课程平均分</span>
        </screen-card>

        <!-- 学生总数 -->
        <screen-card class="flex flex-col justify-around items-center p-2">
          <span class="text-blue-400  font-bold text-[30px] leading-[30px]">62</span>
          <span class="text-lg">学生总数</span>
        </screen-card>

        <!-- 实验完成度 -->
        <screen-card class="flex flex-col justify-around items-center p-2">
          <span class="text-purple-400  font-bold text-[30px] leading-[30px]">5/6</span>
          <span class="text-lg">实验完成</span>
        </screen-card>

        <!-- AI交互总量 -->
        <screen-card class="flex flex-col justify-around items-center p-2">
          <span class="text-yellow-400  font-bold text-[30px] leading-[30px]">3,428</span>
          <span class="text-lg">AI交互量</span>
        </screen-card>

        <!-- AI使用率 -->
        <screen-card class="flex flex-col justify-around items-center p-2">
          <span class="text-cyan-400  font-bold text-[30px] leading-[30px]">85%</span>
          <span class="text-lg">AI使用率</span>
        </screen-card>

        <!-- 课程目标达成 -->
        <screen-card class="flex flex-col justify-around items-center p-2">
          <span class="text-orange-400  font-bold text-[30px] leading-[30px]">77.8%</span>
          <span class="text-lg">总体达成度</span>
        </screen-card>
      </div>

      <!-- 第三行 -->
      <div class="grid grid-cols-3 h-[358px] gap-[10px]">
        <screen-card title="课程进度概览">
          <div class="flex-1">
            11111
          </div>
        </screen-card>

        <screen-card title="课程目标达成度分析">
          <div class="flex-1">
            11111
          </div>
        </screen-card>

        <screen-card title="班级成绩分布情况">
          <div class="flex-1">
            11111
          </div>
        </screen-card>
      </div>

      <!-- 第四行 -->
      <div class="grid grid-cols-2 h-[358px] gap-[10px]">
        <screen-card title="各实验得分情况">
          <div class="flex-1">
            11111
          </div>
        </screen-card>

        <screen-card title="与上学期对比分析">
          <div class="flex-1">
            11111
          </div>
        </screen-card>
      </div>
    </div>
  </transition>
</template>

<script setup>
const props = defineProps({
  currentModule: Number,
})
</script>

<style scoped></style>