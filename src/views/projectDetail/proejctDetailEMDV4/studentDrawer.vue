<template>
  <el-drawer v-model="drawerConfig.visible" :title="title">
    <div class="flex flex-col" style="height: calc(100vh - 80px);">
      <div class="flex-1 p-4 space-y-4 overflow-hidden overflow-y-auto">
        <div class="flex">
          <div
            class="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-medium mr-3">
            {{ studentInfo.stuName.substring(0, 1) }}
          </div>
          <div class="flex flex-col items-start">
            <div>{{ studentInfo.stuName }}</div>
            <div>{{ studentInfo.stuId }}</div>
          </div>
        </div>
        <div>
          最后活动: {{ studentInfo.lastTime }}
        </div>

        <div class="bg-blue-50 rounded-lg p-4" v-if="studentInfo.isCourse">
          <div class="flex justify-between items-center">
            <div>
              <div class="text-sm text-gray-600">课程总分</div>
              <div class="text-3xl font-bold text-yellow-600">88<span class="text-gray-500 text-lg">/100</span></div>
            </div>
            <div class="text-right">
              <div class="text-sm text-gray-600">状态</div>
              <div
                class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                合格
              </div>
            </div>
          </div>
        </div>

        <div class="bg-gray-50 rounded-lg p-4" v-else>
          <h5 class="font-medium text-gray-900 mb-1">场效应管直流交流参数测量</h5>
          <div class="flex justify-between items-center">
            <div>
              <div class="text-sm text-gray-600">实验分数</div>
              <div class="text-2xl font-bold text-yellow-600">78<span class="text-gray-500 text-sm">/100</span></div>
            </div>
            <button class="student-detail-drawer-btn text-sm text-blue-600 hover:text-blue-800" @click="showAllTask">
              返回学生详情
            </button>
          </div>
        </div>

        <div v-if="studentInfo.isCourse" class="space-y-4">
          <div class="text-lg font-semibold text-gray-900">
            实验详情
          </div>
          <div v-for="(task, i) in studentInfo.taskList" :key="i"
            class="experiment-status-card bg-gray-50 rounded-lg p-4">
            <div class="flex justify-between items-start mb-3">
              <div>
                <h5 class="font-medium text-gray-900 mb-1">{{ task.ptName }}</h5>
              </div>
              <div class="text-right">
                <div class="text-2xl font-bold">
                  <span :class="getGradeClass(task)">{{ task.ptScore }}</span>
                  <span class="text-gray-500 text-sm">/{{ task.ptTotalScore }}</span>
                </div>
                <!-- <div
              class="inline-flex items-center px-2 py-1 rounded text-xs font-medium text-yellow-700 bg-yellow-50 mt-1">
              进行中
            </div> -->
              </div>
            </div>

            <div class="mb-3">

              <div class="mb-2" v-for="(stage, j) in studentInfo.taskList[i].stageList">
                <div class="flex items-center justify-between">
                  <span class="text-sm font-medium text-gray-700">{{ stage.blockName }}</span>
                  <div class="flex items-center space-x-2">
                    <span class="text-xs text-gray-500">{{ stage.minutesDiff ? stage.minutesDiff : 0}} min</span>
                    <span class="text-xs px-2 py-1 rounded-full" :class="getStageInfo(stage).bg">
                      {{ getStageInfo(stage).doneBlockLen }}/{{ getStageInfo(stage).blockLen }} {{
                        getStageInfo(stage).label }}
                    </span>
                  </div>
                </div>
              </div>

            </div>

            <div class="text-right">
              <button @click="showTaskDetail(task)"
                class="experiment-detail-btn inline-flex items-center text-sm text-blue-600 hover:text-blue-800">
                查看详细步骤 <font-awesome-icon icon="fas fa-chevron-right" class="ml-1"></font-awesome-icon>
              </button>
            </div>
          </div>
        </div>

        <div v-else class="space-y-4">
          <div class="bg-white border border-gray-200 rounded-lg p-5 mb-6">
            <div class="text-lg font-semibold text-gray-900 mb-4">实验步骤详情</div>
            <div v-if="studentInfo.ptId != -1 && studentInfo.taskIndex != -1">
              <div v-for="(stage, i) in studentInfo.taskList[studentInfo.taskIndex].stageList" :key="i" class="mb-6">
                <div class="flex justify-between items-center mb-3">
                  <h5 class="font-medium text-gray-900">{{ stage.blockName }}</h5>
                  <div class="flex items-center space-x-2">
                    <span class="text-sm font-medium text-gray-600">总计: {{ getTaskStageInfo(stage).stageTime }} min</span>
                    <span class="text-xs" :class="getTaskStageInfo(stage).bg">{{ getTaskStageInfo(stage).label }}</span>
                  </div>
                </div>
                <div class="space-y-3">

                  <div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200"
                    v-for="(block, j) in studentInfo.taskList[studentInfo.taskIndex].stageList[i].blockList" :key="j">
                    <div class="flex items-center flex-1">
                      <span v-if="block.status == 'DONE'" class="text-green-500 mr-3 text-lg">
                        <font-awesome-icon icon="fas fa-check-circle"></font-awesome-icon>
                      </span>
                      <span v-if="block.status == 'DOING'" class="text-yellow-500 mr-3 text-lg rotating-element">
                        <font-awesome-icon icon="fas fa-spinner fa-pulse"></font-awesome-icon>
                      </span>
                      <span v-if="block.status == 'NOTSTART'" class="text-gray-500 mr-3 text-lg">
                        <font-awesome-icon icon="far fa-circle"></font-awesome-icon>
                      </span>
                      <div>
                        <div class="text-sm font-medium text-gray-900">{{ block.blockName }}</div>
                        <div class="text-xs mt-1" :class="getBlockInfo(block).bg">{{ getBlockInfo(block).label }}</div>
                      </div>
                    </div>
                    <div class="step-time-tag text-sm font-medium text-blue-600">
                      {{ block.minutesDiff ? block.minutesDiff : 0 }} min
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div class="px-6 py-4 border-t border-gray-200 bg-gray-50">
        <div class="flex justify-end space-x-3">
          <button @click="close"
            class="btn-hover inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            关闭
          </button>
        </div>
      </div>
    </div>
  </el-drawer>
</template>

<script setup>
import { getEmdV4StudentDetail } from '@/apis/emdV4ProjectDetail'
import { formatDate } from '@/utils/util'

const drawerConfig = ref({
  visible: false,
})

const title = computed(() => {
  return `${studentInfo.value.stuName} - 所有实验详情`
})

const studentInfo = ref({
  lastOperateTime: '',
  psId: 0,
  stuId: '',
  stuName: '',
  taskList: [],
  isCourse: false,
  ptId: -1, // 当前实验id
  taskIndex: -1,
  lastTime: ''
})

const setIsCourse = (b) => {
  studentInfo.value.isCourse = b
}

const open = (item) => {
  drawerConfig.value.visible = true
  studentInfo.value.isCourse = item.isCourse
  getEmdV4StudentDetail(item.projectId, item.psId).then(res => {
    if (res.state == 200) {
      studentInfo.value.stuName = res.data.stuName
      studentInfo.value.stuId = res.data.stuId
      studentInfo.value.taskList = res.data.taskList
      studentInfo.value.lastTime = formatDate(res.data.lastOperateTime)
      if(item.ptId){
        setTask(item.ptId)
      }
    }
  })
}

const close = (item) => {
  drawerConfig.value.visible = false
}

const getGradeClass = (item) => {
  let score = item.ptScore / item.ptTotalScore * 100
  if (score >= 90) return 'text-green-500'
  if (score >= 80) return 'text-blue-500'
  if (score >= 70) return 'text-yellow-500'
  if (score >= 60) return 'text-orange-500'
  return 'text-red-500'
}

const getStageInfo = (item) => {
  let obj = {
    bg: '',
    label: '',
    blockLen: 0,
    doneBlockLen: 0,
  }
  if (item) {
    if (item.status === 'DONE') {
      obj.bg = 'bg-green-500/20 text-green-700'
      obj.label = '已完成'
    } else if (item.status === 'DOING') {
      obj.bg = 'bg-yellow-500/20 text-yellow-700'
      obj.label = '进行中'
    } else {
      obj.bg = 'text-gray-500'
      obj.label = '未开始'
    }

    obj.blockLen = item.blockList.length
    obj.doneBlockLen = item.blockList.filter(item => item.status === 'DONE').length
  }

  return obj
}

const getTaskStageInfo = (item) => {
  let obj = {
    bg: '',
    label: '',
    blockLen: 0,
    doneBlockLen: 0,
    stageTime: 0,
  }
  if (item) {
    if (item.status === 'DONE') {
      obj.bg = 'text-green-500'
      obj.label = '已完成'
    } else if (item.status === 'DOING') {
      obj.bg = 'text-yellow-500'
      obj.label = '进行中'
    } else {
      obj.bg = 'text-gray-500'
      obj.label = '未开始'
    }

    obj.blockLen = item.blockList.length
    obj.doneBlockLen = item.blockList.filter(item => item.status === 'DONE').length
    
    let sum = 0
    item.blockList.forEach(_=>{
      let t = _.minutesDiff || 0
      sum += t
    })
    obj.stageTime = sum
  }

  return obj
}

const getBlockInfo = (block) => {
  let obj = {
    bg: '',
    label: '',
  }
  
  if(block){
    if (block.status === 'DONE') {
      obj.bg = 'text-green-500'
      obj.label = '已完成'
    } else if (block.status === 'DOING') {
      obj.bg = 'text-yellow-500'
      obj.label = '进行中'
    } else {
      obj.bg = 'text-gray-500'
      obj.label = '未开始'
    }
  }
  
  return obj
}

const showTaskDetail = (task) => {
  setIsCourse(false)
  setTask(task.ptId)
}

const setTask = (ptId) => {
  studentInfo.value.ptId = ptId

  let index = studentInfo.value.taskList.findIndex(item => item.ptId == ptId)
  if (index > -1) {
    studentInfo.value.taskIndex = index
  }
}

const showAllTask = () => {
  setIsCourse(true)
  studentInfo.value.ptId = -1
}

defineExpose({ open, close })
</script>

<style scoped lang="scss">
  
/* 1. 定义旋转动画 */
@keyframes continuous-rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.rotating-element {
  animation: continuous-rotation 2s linear infinite;
  will-change: transform;
}  
</style>