<template>
  <div class="screen-container">
    <div class="h-full w-full flex justify-center items-center text-white text-sm font-semibold">
      <div class="w-[800px] bg-white/5 rounded-lg flex flex-col" style="height: calc(100% - 20px); ">

        <div class="flex items-center px-4 py-2 border-b border-white/10">
          <h3 class="text-xl font-bold">数智化大屏配置中心</h3>
        </div>

        <div class="px-4 py-2 overflow-y-auto overflow-x-hidden h-0 flex-1">
          <div class="mb-2 text-xl">
            <font-awesome-icon icon="fas fa-graduation-cap" class="mr-4 text-blue-400"></font-awesome-icon>选择展示课程
          </div>
          <div class="grid grid-cols-1 gap-4">
            <template v-for="course in availableCourses" :key="course.id">
              <label
                class="flex items-center space-x-4 p-4 bg-gray-700 rounded-xl hover:bg-gray-600 cursor-pointer transition-colors">
                <input type="radio" name="course" v-model="selectedCourses" :value="course.id"
                  class="rounded w-5 h-5 accent-primary-500 focus:ring-primary-400 border-primary-300">
                <div class="w-0 flex-1  flex justify-between items-center  text-sm ">
                  <span>{{ course.name }}</span>
                  <span class="flex-1 text-right">
                    <span class="text-gray-300 ml-4"> {{ course.studentCount }} 名学生 | {{ course.semester }}</span>
                    <span class="text-green-400 ml-6">平均分: {{ course.avgScore }}</span>
                    <span class="text-blue-400 ml-4">完成度: {{ course.completion }}%</span>
                  </span>
                </div>
              </label>
            </template>
          </div>
        </div>
        <div class="px-4 py-2">
          <h3 class="text-xl  flex items-center">
            <font-awesome-icon icon="fas fa-rotate" class="mr-4 text-purple-400"></font-awesome-icon>轮播设置
          </h3>
          <label class="flex items-center space-x-4 mb-2">
            <el-checkbox v-model="configDialog.autoplay"></el-checkbox>
            <span>启用自动轮播</span>
          </label>
          <div class="flex items-center space-x-4">
            <label>轮播间隔:</label>
            <select v-model="configDialog.rotateInterval"
              class="bg-gray-700 border border-gray-600  rounded-lg px-8 py-1 text-lg focus:ring-2 focus:ring-blue-500">
              <option value="10">10秒</option>
              <option value="20">20秒</option>
              <option value="30">30秒</option>
              <option value="45">45秒</option>
              <option value="60">60秒</option>
            </select>
          </div>
        </div>
        <div class="px-6 py-4  border-t border-white/10 flex">
            <button @click="enterDashboard()"
              class="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700  py-5 px-10 rounded-2xl font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl">
              <font-awesome-icon icon="fas fa-tv" class="mr-4"></font-awesome-icon>进入数智化大屏
            </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { config } from 'process'

const router = useRouter()
const configDialog = ref({
  show: false,
  autoplay: false,
  rotateInterval: 30,
})

const showConfig = function () {
  configDialog.value.show = true
}

// 课程数据
const availableCourses = [
  {
    id: '246',
    name: '半导体器件物理实验',
    teacher: '张教授',
    studentCount: 62,
    semester: '2025春季',
    avgScore: 83.6,
    completion: 68.2
  },
  {
    id: 'course2',
    name: '微电子工艺实验',
    studentCount: 58,
    semester: '2025春季',
    avgScore: 86.2,
    completion: 72.5
  },
  {
    id: 'course3',
    name: '集成电路设计实验',
    studentCount: 45,
    semester: '2025春季',
    avgScore: 81.8,
    completion: 65.3
  }
]

const selectedCourses = ref('')

const enterDashboard = function () {
  if (!selectedCourses.value) {
    return
  }
  console.log('进入课程大屏:', selectedCourses.value)
  router.push({
    name: 'courseDashboard',
    params: {
      autoplay: configDialog.value.autoplay,  // 是否自动播放
      rotateInterval: configDialog.value.rotateInterval,
      id: selectedCourses.value
    }
  })

}

</script>

<style lang="scss">
:root,
body {
  font-size: 16px;
}

@import './scss/index.scss';
</style>


<style lang="css" scoped>
:deep(.el-checkbox__inner) {
  border-radius: 0;
}
</style>