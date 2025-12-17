<template>
  <header class="header-container">
    <!-- Left: Logo -->
    <div class="header-left">
      <img :src="logo" class="h-[50px]" alt="University Logo" />
    </div>

    <!-- Center: Title -->
    <div class="header-center">
      <span class="text-3xl font-bold">数智化实验教学云平台</span>
    </div>

    <!-- Right: Time -->
    <div class="header-right">
      <div class="flex space-x-2 transition-all duration-500 ease-in-out"
        :class="showControls ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'"
        v-show="isDashboardMode">
        <template v-for="(module, index) in modules" :key="index">
          <button @click="switchModule(index)"
            class="flex items-center space-x-2 px-3 py-2 rounded-xl text-xs font-medium transition-all duration-300 transform"
            :class="currentModule === index ?
              'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-xl scale-105' :
              'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white hover:scale-105'">
            <font-awesome-icon :icon="module.icon"></font-awesome-icon>
            <span class="hidden xl:inline">{{ module.name }}</span>
          </button>
        </template>
      </div>
      <div class="flex flex-col justify-center items-end ml-2 text-right">
        <div class="text-sm font-bold font-mono">{{ currentTime }}</div>
        <div class="text-xs text-blue-500">实时更新 | 在线监测</div>
      </div>
    </div>
  </header>

  <footer
    class="fixed bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/30 to-transparent transition-all duration-500 ease-in-out"
    :class="showControls ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'"
    v-show="isDashboardMode">
    <div class="flex items-center justify-end">

      <!-- 自动播放控制 -->
      <div class="flex items-center space-x-4 text-white text-sm">
        <button @click="toggleAutoPlay()"
          class="flex items-center space-x-2 p-2 rounded-xl hover:bg-white/10 transition-all transform hover:scale-110">
          <font-awesome-icon :icon="autoPlay ? 'fas fa-pause' : 'fas fa-play'"></font-awesome-icon>
          <span class="font-medium">
            {{ autoPlay ? '暂停轮播' : '开始轮播' }}</span>
        </button>

        <!-- 进度条 -->
        <div class="flex items-center space-x-4">
          <div class="w-80 bg-white/20 rounded-full h-3 overflow-hidden">
            <div
              class="h-full rounded-full transition-all duration-300 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
              :style="`width: ${progress}%`"></div>
          </div>
          <span class="font-bold min-w-[4rem]">
            {{ Math.ceil((rotateInterval - progress / 100 * rotateInterval)) }}</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import logo from './logo/logo.png';


// 课程数据
const modules = ref([
  { name: '课程概览', icon: 'fas fa-chart-pie' },
  { name: '实验分析', icon: 'fas fa-microchip' },
  { name: '课程目标', icon: 'fas fa-bullseye' },
  { name: '学生表现', icon: 'fas fa-users' },
  { name: '质量评估', icon: 'fas fa-award' }
])

const isDashboardMode = ref(true)
// 控件

const currentModule = ref(0)

const autoRotate = ref(true) //通过 参数进行初始化 路由跳转进入后

const autoPlay = ref(true)
const progress = ref(0)
const progressInterval = ref(null)
const currentTime = ref('')
const timeInterval = ref(null)
const rotateInterval = ref(30)

// 在现有状态变量后添加
const showControls = ref(true) // 控制导航和控件的显示
const hideControlsTimeout = ref(null)  // 自动隐藏控件的定时器
const mouseMoveThrottle = ref(null)  // 鼠标移动节流定时器

function switchModule(index) {
  currentModule.value = index
  progress.value = 0
}
function nextModule() {
  currentModule.value = (currentModule.value + 1) % modules.value.length;
  progress.value = 0;
}

// 显示控件
function showControlsTemporarily() {
  if (!isDashboardMode.value) return;

  showControls.value = true;

  // 清除之前的隐藏定时器
  if (hideControlsTimeout.value) {
    clearTimeout(hideControlsTimeout.value);
  }

  // 如果是自动播放模式，4秒后隐藏控件
  if (autoPlay.value) {
    hideControlsTimeout.value = setTimeout(() => {
      hideControls()
    }, 4000);
  }
}

// 隐藏控件
function hideControls() {
  if (!isDashboardMode.value || !autoPlay.value) return;
  showControls.value = false;
}


function toggleAutoPlay() {
  autoPlay.value = !autoPlay.value;
  if (autoPlay.value) {
    startAutoPlay();
    // 自动播放时，4秒后隐藏控件
    hideControlsTimeout.value = setTimeout(() => {
      hideControls();
    }, 4000);
  } else {
    stopAutoPlay();
    // 暂停时始终显示控件
    showControls.value = true;
    if (hideControlsTimeout.value) {
      clearTimeout(hideControlsTimeout.value);
    }
  }
}

function startAutoPlay() {
  stopAutoPlay();
  progress.value = 0;

  progressInterval.value = setInterval(() => {
    progress.value += (100 / rotateInterval.value);
    if (progress.value >= 100) {
      nextModule();
    }
  }, 1000);
}

function stopAutoPlay() {
  if (progressInterval.value) {
    clearInterval(progressInterval.value);
    progressInterval.value = null;
  }
}


// 添加新方法
function setupControlsVisibility() {
  // 鼠标移动事件（节流处理）
  document.addEventListener('mousemove', (e) => {
    if (mouseMoveThrottle.value) return;

    mouseMoveThrottle.value = setTimeout(() => {
      showControlsTemporarily();
      mouseMoveThrottle.value = null;
    }, 100);
  });

  // 鼠标点击事件
  document.addEventListener('mousedown', () => {
    showControlsTemporarily();
  });

  // 键盘事件
  document.addEventListener('keydown', () => {
    showControlsTemporarily();
  });

  // 触摸事件（移动设备）
  document.addEventListener('touchstart', () => {
    showControlsTemporarily();
  });

  // 初始显示控件，5秒后隐藏
  setTimeout(() => {
    if (isDashboardMode.value && autoPlay.value) {
      hideControls();
    }
  }, 5000);
}

function enterDashboard() {
  isDashboardMode.value = true;
  currentModule.value = 0;
  showControls.value = true;  // 进入时显示控件

  if (autoRotate.value) {
    startAutoPlay();
  }

  // 延迟初始化图表
  // setTimeout(() => {
  //  initCharts();
  // }, 500);

  // 设置控件显示逻辑
  setupControlsVisibility();
}


// Methods
const updateCurrentTime = () => {
  const now = new Date();
  const dateStr = now.toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  }).replace(/\//g, '/');
  const timeStr = now.toLocaleTimeString('zh-CN', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });
  currentTime.value = `${dateStr} ${timeStr}`;
};

// Lifecycle hooks
onMounted(() => {
  updateCurrentTime();
  timeInterval.value = setInterval(updateCurrentTime, 1000);

  enterDashboard();
});

onUnmounted(() => {
  // Cleanup if needed
    // 清理所有定时器
  if (progressInterval.value) {
    clearInterval(progressInterval.value);
  }
  if (timeInterval.value) {
    clearInterval(timeInterval.value);
  }
  if (hideControlsTimeout.value) {
    clearTimeout(hideControlsTimeout.value);
  }
  if (mouseMoveThrottle.value) {
    clearTimeout(mouseMoveThrottle.value);
  }
  
  // 移除事件监听器
  document.removeEventListener('mousemove', showControlsTemporarily);
  document.removeEventListener('mousedown', showControlsTemporarily);
  document.removeEventListener('keydown', showControlsTemporarily);
  document.removeEventListener('touchstart', showControlsTemporarily);
});
</script>

<style scoped>
.header-container {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  height: 66px;
  width: 100%;
  padding: 8px 20px;
  box-sizing: border-box;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 12px;
}

.header-center {
  text-align: center;
  width: 100%;
}

.header-right {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
</style>