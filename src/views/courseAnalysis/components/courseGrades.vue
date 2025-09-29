<template>
  <div class="mt-6 space-y-6 fade-in">
    <!-- 权重设置面板 -->
    <div class="bg-white rounded-lg shadow p-6">
      <div class="flex justify-between items-center mb-6">
        <h3 class="text-lg font-medium text-gray-900">成绩计算权重设置</h3>
        <div class="flex space-x-2">
          <button @click="resetWeights"
            class="px-4 py-2 bg-gray-100 text-gray-700 text-sm rounded-md font-medium hover:bg-gray-200 transition-colors">
            <font-awesome-icon icon="fas fa-undo" class="mr-1" /> 重置默认
          </button>
          <button @click="saveSettings"
            class="px-4 py-2 bg-primary-500 text-white text-sm rounded-md font-medium hover:bg-primary-600 transition-colors">
            <font-awesome-icon icon="fas fa-save" class="mr-1" /> 保存设置
          </button>
        </div>
      </div>

      <!-- 权重调节区域 -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <!-- 课前预习权重 -->
        <div class="bg-blue-50 p-4 rounded-lg">
          <div class="flex items-center justify-between mb-4">
            <div class="flex items-center">
              <font-awesome-icon :icon="['fas', 'book-reader']" class="text-blue-600 mr-2" />
              <h4 class="text-md font-medium text-blue-800">课前预习</h4>
            </div>
            <div class="text-2xl font-bold text-blue-600">{{ weights.before }}%</div>
          </div>
          <el-slider v-model="weights.before" :marks="marks"></el-slider>
        </div>

        <!-- 实验操作权重 -->
        <div class="bg-green-50 p-4 rounded-lg">
          <div class="flex items-center justify-between mb-4">
            <div class="flex items-center">
              <font-awesome-icon :icon="['fas', 'cogs']" class="text-green-600 mr-2" />
              <h4 class="text-md font-medium text-green-800">实验操作</h4>
            </div>
            <div class="text-2xl font-bold text-green-600">{{ weights.expreiment }}%</div>
          </div>
          <el-slider v-model="weights.expreiment" :marks="marks"></el-slider>
        </div>

        <!-- 课后考核权重 -->
        <div class="bg-orange-50 p-4 rounded-lg">
          <div class="flex items-center justify-between mb-4">
            <div class="flex items-center">
              <font-awesome-icon :icon="['fas', 'clipboard-check']" class="text-orange-600 mr-2" />
              <h4 class="text-md font-medium text-orange-800">课后考核</h4>
            </div>
            <div class="text-2xl font-bold text-orange-600">{{ weights.after }}%</div>
          </div>
          <el-slider v-model="weights.after" :marks="marks"></el-slider>
        </div>
      </div>

      <!-- 权重总和检查 -->
      <div class="bg-gray-50 p-4 rounded-lg mb-6">
        <div class="flex items-center justify-start space-x-2">
          <span class="text-sm font-medium text-gray-700">权重总和：</span>
          <span class="text-lg font-bold text-green-600" :class="weightSum == 100 ? 'text-green-600' : 'text-red-600'">
            {{ weightSum }}%
          </span>
        </div>
      </div>

      <!-- 计算公式说明 -->
      <div class="bg-blue-50 p-4 rounded-lg">
        <h4 class="text-md font-medium text-blue-800 mb-2">计算公式</h4>
        <div class="text-sm text-gray-700 font-mono bg-white p-3 rounded border">
          最终成绩 = 课前预习分数 ×
          <span class="font-bold text-blue-600">{{ weights.before }}%</span> +
          实验操作分数 ×
          <span class="font-bold text-green-600">{{ weights.expreiment }}%</span> +
          课后考核分数 ×
          <span class="font-bold text-orange-600">{{ weights.after }}%</span>
        </div>

        <!-- 调整提示 -->
        <div class="mt-3 text-sm font-medium text-gray-600">
          <font-awesome-icon icon="fas info-circle" class="mr-1" />
          <span>提示：当前权重之和为
            <span class="font-bold" :class="weightSum == 100 ? 'text-green-600' : 'text-red-600'">{{ weightSum }}%</span>
            ，该设置下的满分成绩为
            <span class="font-bold" :class="weightSum == 100 ? 'text-green-600' : 'text-red-600'">{{ weightSum }}</span>
          </span>
        </div>
      </div>
    </div>

    <!-- 实验权重设置面板 -->
    <div class="bg-white rounded-lg shadow p-6">
      <div class="flex justify-between items-center mb-6">
        <h3 class="text-lg font-medium text-gray-900">实验权重设置</h3>
        <div class="flex space-x-2">
          <button @click="resetExperimentWeights"
            class="px-4 py-2 bg-gray-100 text-gray-700 text-sm rounded-md font-medium hover:bg-gray-200 transition-colors">
            重置为平均分配
          </button>
          <button @click="saveExperimentSettings"
            class="px-4 py-2 bg-primary-500 text-white text-sm rounded-md font-medium hover:bg-primary-600 transition-colors">
            保存实验权重
          </button>
        </div>
      </div>

      <!-- 实验权重表格 -->
      <div class="bg-gray-50 rounded-lg p-4 mb-6">
        <div class="space-y-4">
          <div v-for="(experiment, k) in experimentsData" :key="k"
            class="flex items-center justify-between bg-white p-4 rounded-lg">
            <!-- 实验名称 -->
            <div class="flex-1">
              <span class="text-sm font-medium text-gray-900">{{ experiment.name }}</span>
            </div>

            <!-- 权重设置 -->
            <div class="flex items-center space-x-2">
              <el-input-number :min="0" :max="100" v-model.number="experiment.weight"></el-input-number>
              <span class="text-sm text-gray-500">%</span>
            </div>
          </div>
        </div>
      </div>

      <!-- 权重总和检查 -->
      <div class="bg-gray-50 p-4 rounded-lg mb-4">
        <div class="flex items-center justify-between">
          <span class="text-sm font-medium text-gray-700">实验权重总和：</span>
          <div class="flex items-center">
            <span class="text-xl font-bold" :class="experimentWeightSum === 100 ? 'text-green-600' : 'text-red-600'">
              {{ experimentWeightSum }}%
            </span>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// Main weights data
const weights = ref({
  before: 10,
  expreiment: 70,
  after: 20
})

const marks = ref({
  0: '0%',
  50: '50%',
  100: '100%',
})

const adjustmentOrder = ref([])

// Computed property for weight sum
const weightSum = computed(() => {
  return weights.value.before + weights.value.expreiment + weights.value.after
})

// Update weight function
const updateWeight = (type, value) => {
  const newValue = parseInt(value)
  weights.value[type] = newValue

  // Record adjustment order
  if (!adjustmentOrder.value.includes(type)) {
    adjustmentOrder.value.push(type)
  } else {
    // If already exists, move to end
    const index = adjustmentOrder.value.indexOf(type)
    adjustmentOrder.value.splice(index, 1)
    adjustmentOrder.value.push(type)
  }

  // Keep at most 2 elements
  if (adjustmentOrder.value.length > 2) {
    adjustmentOrder.value.shift()
  }

  // Automatically adjust third weight
  const allTypes = ['before', 'expreiment', 'after']
  const unchangedType = allTypes.find(t => !adjustmentOrder.value.includes(t))

  if (unchangedType && adjustmentOrder.value.length >= 2) {
    const total = adjustmentOrder.value.reduce((sum, t) => sum + weights.value[t], 0)
    weights.value[unchangedType] = Math.max(0, Math.min(100, 100 - total))
  }
}

// Reset weights to default
const resetWeights = () => {
  weights.value = { before: 10, expreiment: 70, after: 20 }
  adjustmentOrder.value = []
}

// Save settings
const saveSettings = () => {
  // Here you can send to backend to save
  alert('权重设置已保存！')
}

// Experiment weights data
const experimentsData = ref([
  { key: 'experiment1', name: '晶体管特性测量', weight: 0 },
  { key: 'experiment2', name: '共射放大器设计', weight: 0 },
  { key: 'experiment3', name: '运算放大器应用', weight: 0 },
  { key: 'experiment4', name: 'BJT特征频率测量', weight: 0 },
  { key: 'experiment5', name: '有源滤波器设计', weight: 0 },
  { key: 'experiment6', name: '电源电路设计', weight: 0 }
])

// Computed property for experiment weight sum
const experimentWeightSum = computed(() => {
  let ar = experimentsData.value.map(_ => _.weight)
  return ar.reduce((a, b) => a + b, 0)
})

// Reset experiment weights
const resetExperimentWeights = () => {
  const len = experimentsData.value.length;
  
  let initNum = Math.floor(10000 / len);
  
  for (let i = 0; i < len - 1; i++) {
    experimentsData.value[i].weight = Number(initNum / 100); 
  }
  
  let totalWeightSoFar = (initNum * (len - 1)) / 100; 
  experimentsData.value[len - 1].weight = Number((100 - totalWeightSoFar).toFixed(2));
};

resetExperimentWeights()

// Save experiment settings
const saveExperimentSettings = () => {
  if (experimentWeightSum.value === 100) {
    // Here you can send to backend to save
    alert('实验权重设置已保存！')
  } else {
    alert('权重总和必须为100%，请调整后再保存！')
  }
}
</script>

<style scoped>
.fade-in {
  animation: fadeIn 0.3s ease-in;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
</style>