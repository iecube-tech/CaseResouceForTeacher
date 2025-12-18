<!-- Page 1 -->
<template>
  <!-- 页面1: 课程概览总览 -->
  <transition name="fade" mode="out-in">
    <div v-show="currentModule == 0" class="h-full flex flex-col justify-around">

      <!-- 第一行 -->
      <screen-card class="p-4 h-[170px]">
        <div class="grid grid-cols-5  items-center">
          <!-- 左侧课程基本信息 -->
          <div class="col-span-2">
            <h1 class="text-white text-dashboard-md font-bold">半导体器件物理实验</h1>
            <div class="grid grid-cols-2  text-dashboard-sm">
              <div class="space-y-3">
                <div class="text-blue-200">授课教师: <span class="text-white font-semibold">张教授</span></div>
                <div class="text-blue-200">班级信息: <span class="text-white font-semibold">电子2301</span></div>
              </div>
              <div class="space-y-3">
                <div class="text-blue-200">学期时间: <span class="text-white font-semibold">2025春季</span></div>
                <div class="text-blue-200">学生人数: <span class="text-white font-semibold">62人</span></div>
              </div>
            </div>
          </div>

          <!-- 右侧课程状态 -->
          <div class="col-span-3">
            <div
              class="bg-gradient-to-r from-blue-500/20 to-purple-500/20 p-4 rounded-3xl border border-blue-400/30 h-full">
              <div class="text-center">
                <div class="text-white/80 text-xl mb-2">当前状态</div>
                <div class="text-green-400 text-4xl font-bold">进行中</div>
              </div>
              <div class="grid grid-cols-3 gap-4 text-xl">
                <div class="text-center">
                  <span class="text-white/60">开课时间: </span>
                  <span class="text-white font-semibold">2025.11.30-2025.12.31</span>
                </div>
                <div class="text-center">
                  <span class="text-white/60">总课时数: </span>
                  <span class="text-white font-semibold">48学时</span>
                </div>
                <div class="text-center">
                  <span class="text-white/60">实验项目: </span>
                  <span class="text-white font-semibold">4个</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </screen-card>

      <!-- 第二行 -->
      <div class="grid grid-cols-6 h-[72px] gap-[10px]">
        <!-- 课程平均分 -->
        <screen-card class="text-center p-4">
          <div class="text-green-400 text-dashboard-md font-bold counter h-[20px] leading-[20px] mb-[4px]">83.6</div>
          <div class="text-white font-semibold text-base h-[20px] leading-[20px]">课程平均分</div>
        </screen-card>

        <!-- 学生总数 -->
        <screen-card class="text-center p-4">
          <div class="text-blue-400 text-dashboard-md font-bold counter h-[20px] leading-[20px] mb-[4px]">62</div>
          <div class="text-white font-semibold text-base h-[20px] leading-[20px]">学生总数</div>
        </screen-card>

        <!-- 实验完成度 -->
        <screen-card class="text-center p-4">
          <div class="text-purple-400 text-dashboard-md font-bold counter h-[20px] leading-[20px] mb-[4px]">5/6</div>
          <div class="text-white font-semibold text-base h-[20px] leading-[20px]">实验完成</div>
        </screen-card>

        <!-- AI交互总量 -->
        <screen-card class="text-center p-4">
          <div class="text-yellow-400 text-dashboard-md font-bold counter h-[20px] leading-[20px] mb-[4px]">3,428</div>
          <div class="text-white font-semibold text-base h-[20px] leading-[20px]">AI交互量</div>
        </screen-card>

        <!-- AI使用率 -->
        <screen-card class="text-center p-4">
          <div class="text-cyan-400 text-dashboard-md font-bold counter h-[20px] leading-[20px] mb-[4px]">85%</div>
          <div class="text-white font-semibold text-base h-[20px] leading-[20px]">AI使用率</div>
        </screen-card>

        <!-- 课程目标达成 -->
        <screen-card class="text-center p-4">
          <div class="text-orange-400 text-dashboard-md font-bold counter h-[20px] leading-[20px] mb-[4px]">77.8%</div>
          <div class="text-white font-semibold text-base h-[20px] leading-[20px]">总体达成度</div>
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