<template>
  <div class="bg-gray-50 min-h-screen">
    <header class="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-20">
          <div class="flex items-center space-x-4">
            <div class="flex items-center space-x-2">
              <font-awesome-icon icon="fa-solid fa-microchip" class="text-2xl text-indigo-600" />
              <h1 class="text-xl font-semibold text-gray-900">实验评分系统</h1>
            </div>
            <div class="h-6 w-px bg-gray-300"></div>
            <span class="text-sm text-gray-500">教师端</span>
          </div>

          <div class="flex items-center space-x-4">
            <!-- 学生选择器 -->
            <div v-if="currentPS" class="flex items-center space-x-2">
              <label class="text-sm font-medium text-gray-700">当前学生:</label>
              <el-select v-model="currentPS" value-key="id" @change="freshCurrentPST(currentPS.id)">
                <el-option v-for="item in PSList" :key="item.id" :label="item.stuName + '（' + item.stuId + '）'"
                  :value="item">
                  <div class="flex justify-between w-full space-x-6">
                    <div>
                      {{ item.stuName + '(' + item.stuId + ')' }}
                    </div>
                    <div>
                      <!-- 已完成 -->
                    </div>
                  </div>
                </el-option>
              </el-select>
            </div>

            <!-- 操作按钮 -->
            <div class="flex items-center space-x-2">
              <button @click="lastStudent()"
                class="px-3 py-1.5 text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg smooth-transition">
                <font-awesome-icon icon="fas fa-chevron-left" class=" mr-1"></font-awesome-icon>上一个
              </button>
              <button @click="nextStudent()"
                class="px-3 py-1.5 text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg smooth-transition">
                下一个<font-awesome-icon icon="fas fa-chevron-right" class=" ml-1"></font-awesome-icon>
              </button>
              <button @click="saveChecked()"
                class="px-4 py-1.5 text-sm btn-primary text-white rounded-lg smooth-transition">
                <font-awesome-icon icon="fas fa-save" class=" mr-1"></font-awesome-icon>保存评分
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>

    <div class="w-full h-full min-h-screen">
      <!-- 主要内容 -->
      <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex gap-6">
        <!-- 左侧学生内容 -->
        <div class="min-w-[72%] max-w-[72%]">
          <!-- 学生信息卡片 -->
          <div v-if="currentPS && currentPT"
            class="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-6 fade-in">
            <div class="flex items-center justify-between">
              <div class="flex items-center space-x-6">
                <div
                  class="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-lg">
                  {{ currentPS.stuName[0] }}
                </div>
                <div class="flex flex-col space-y-4">
                  <div class="flex flex-row space-x-4">
                    <h2 class="text-xl font-semibold text-gray-900">{{ currentPS.stuName }}</h2>
                    <h3 class="text-lg text-gray-900">{{ currentPT.name }}</h3>
                  </div>
                  <p class="text-sm text-gray-500">学号: {{ currentPS.stuId }}</p>
                  <!-- <p class="text-sm text-gray-500">学号: {{ currentPS.stuId }} | 班级: {{ }}</p> -->
                </div>
              </div>
              <div class="flex items-center space-x-6">
                <div v-if="currentPST.status" class="text-right flex flex-col space-y-4">
                  <p class="text-sm text-gray-500">提交时间</p>
                  <p class="text-sm font-medium text-gray-900">
                    {{ formatDate(currentPST.doneTime) }}
                  </p>
                </div>
                <div class="text-right flex flex-col space-y-4">
                  <p class="text-sm text-gray-500">实验状态</p>
                  <p v-if="!currentPST.status"
                    class="inline-flex items-center px-2.5  rounded-full text-sm font-medium bg-red-100 text-red-800">
                    <font-awesome-icon icon="fa-solid fa-circle-xmark" class="mr-2"></font-awesome-icon>未完成
                  </p>
                  <p v-else
                    class="inline-flex items-center px-2.5  rounded-full text-sm font-medium bg-green-100 text-green-800">
                    <font-awesome-icon icon="fas fa-check-circle" class="mr-2"></font-awesome-icon>已完成
                  </p>

                </div>
              </div>
            </div>
          </div>

          <!-- 实验菜单 -->
          <div v-if="currentPST" class="bg-white rounded-lg shadow-sm border border-gray-200 mb-6">
            <div class="flex border-b border-gray-200">
              <button v-for="(labStep, i) in currentPST.studentTaskBook.children" @click="setCurrentLabStep(i)"
                class="flex-1 py-6 px-8 text-center font-medium tab-transition border-b-2"
                :class="labStep.id == currentLabStep.id ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700'">
                <font-awesome-icon :icon="labStep.icon" class="mr-2"></font-awesome-icon>
                {{ labStep.name }}
              </button>
            </div>
          </div>

          <!-- 菜单对应的内容 -->
          <div v-if="currentLabStep != null" class="bg-white rounded-xl shadow-sm border border-gray-200 fade-in p-6">
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-lg font-semibold text-gray-900">
                {{ currentLabStep.name }}
              </h3>
              <span class="text-sm text-gray-500">
                共 {{ labStepOverviewMap.get(currentLabStep.id).labStepQusNum }} 题 | 总分
                {{ labStepOverviewMap.get(currentLabStep.id).labStepTotalScore }} 分
              </span>
            </div>
            <blockLabRecursion v-if="isShow" :tree-data="currentLabStep.children" class="ist-theam"></blockLabRecursion>
          </div>
        </div>

        <!-- 右侧总分概览 -->
        <div class="w-[28%]">
          <!-- 总分 -->
          <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6 fade-in">
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-lg font-semibold text-gray-900">
                评分概览
              </h3>
              <button @click="weightModalOpen()" class="text-sm text-gray-500 hover:text-gray-700 smooth-transition">
                <font-awesome-icon icon="fas fa-cog"></font-awesome-icon>
              </button>
            </div>
            <div v-if="currentPST" class="space-y-4">
              <div class="space-y-4" v-for="([id, overview], i) in labStepOverviewMap">
                <div class="flex items-center justify-between">
                  <div class="flex items-center space-x-2">
                    <span class="text-sm text-gray-600">
                      {{ overview.name }}
                    </span>
                    <span v-if="!overview.weighting" class="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full">
                      {{ overview.weighting + '%' }}
                    </span>
                    <span v-else class="text-xs px-2 py-1 rounded-full"
                      :class="overview.weighting > 50 ? 'bg-blue-100 text-blue-600' : 'bg-green-100 text-green-600'">
                      {{ overview.weighting + '%' }}
                    </span>
                  </div>
                  <div class="flex items-center space-x-2">
                    <span class="text-lg font-semibold text-gray-900">
                      {{ overview.labStepScore }}
                    </span>
                    <span class="text-lg text-gray-500">
                      {{ '/ ' + overview.labStepTotalScore }}
                    </span>
                  </div>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2">
                  <div class="progress-bar h-2 rounded-full"
                    :style="'width:' + computePer(overview.labStepScore, overview.labStepTotalScore) + '%;'"></div>
                </div>
              </div>

              <div class="border-t pt-4">
                <div class="flex items-center justify-between">
                  <span class="text-base font-medium text-gray-900">加权总分</span>
                  <div class="flex items-center space-x-2">
                    <span class="text-2xl font-bold text-indigo-600">{{ currentPST.score }}</span>
                    <span class="text-lg text-gray-500">/ 100</span>
                  </div>
                </div>

                <div class="mt-2 flex items-center justify-between">
                  <span v-if="currentPST.score < 60"
                    class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800">不合格</span>
                  <span v-if="currentPST.score >= 60 && currentPST.score < 70"
                    class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">合格</span>
                  <span v-if="currentPST.score >= 70 && currentPST.score < 80"
                    class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-sky-100 text-sky-800">中等</span>
                  <span v-if="currentPST.score >= 80 && currentPST.score < 90"
                    class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">良好</span>
                  <span v-if="currentPST.score >= 90"
                    class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-lime-100 text-lime-800">优秀</span>
                  <span class="text-xs text-gray-500">归一化处理后基于权重计算</span>
                </div>
              </div>
            </div>
          </div>
          <!-- 评分历史 -->
          <div v-if="currentPST" class="bg-white rounded-xl shadow-sm border border-gray-200 p-6 fade-in">
            <h3 class="text-lg font-semibold text-gray-900 mb-4">评分记录</h3>

            <div class="space-y-3">
              <div class="flex items-center justify-between text-sm">
                <span class="text-gray-600">AI初版评分</span>
                <span class="font-medium text-gray-900">{{ formatDate(currentPST.aiScoreTime) }}</span>
              </div>
              <div class="flex items-center justify-between text-sm">
                <span class="text-gray-600">教师是否确认</span>
                <div :class="currentPST.hasChecked ? 'font-medium text-green-600' : 'font-medium text-orange-600'">
                  {{ currentPST.hasChecked ? '已确认' : '未确认' }}
                </div>
              </div>
            </div>

            <div class="mt-4 pt-4 border-t">
              <div class="flex items-center space-x-2 text-sm text-gray-600">
                <font-awesome-icon icon="fas fa-info-circle"></font-awesome-icon>
                <span>修改后请及时保存评分</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 权重设置模态框 -->
    <div v-if="weightModalShow" class="fixed inset-0 bg-black bg-opacity-50 z-50">
      <div class="flex items-center justify-center min-h-screen p-4">
        <div class="bg-white rounded-lg shadow-xl max-w-md w-full">
          <div class="p-6">
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-lg font-semibold text-gray-900">权重设置</h3>
              <button id="closeWeightModal" class="text-gray-400 hover:text-gray-600">
                <i class="fas fa-times"></i>
              </button>
            </div>

            <div class="space-y-4" v-if="weightingQo && weightingQo.stepWeightings.length">
              <div v-for="(item, i) in weightingQo.stepWeightings">
                <label class="block text-sm font-medium text-gray-700 mb-2">{{ item.name }}权重</label>
                <div class="flex items-center space-x-2">
                  <input type="range" v-model.number="item.weighting" :min="0" :max="100"
                    @change="computTotalWeight(weightingQo.stepWeightings)"
                    class="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer">
                  <span class="text-sm font-medium text-gray-900 w-12" id="preStudyWeightValue">
                    {{ item.weighting }}%</span>
                </div>
              </div>

              <div class="border rounded p-3"
                :class="weightingQo.totalWeight == 100 ? 'bg-green-50 border-green-200' : 'bg-yellow-50 border-yellow-200'">
                <div class="flex items-center space-x-2">
                  <i class="fas fa-exclamation-triangle text-yellow-500"></i>
                  <span :class="weightingQo.totalWeight == 100 ? 'text-sm text-green-700' : 'text-sm text-yellow-700'">
                    权重总和: <span id="weightSum" class="font-medium">{{ weightingQo.totalWeight }}%</span>
                  </span>
                </div>
              </div>
            </div>

            <div class="flex justify-end space-x-3 mt-6">
              <button @click="weightModalShow = false"
                class="px-4 py-2 text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg smooth-transition">
                取消
              </button>
              <button @click="weightModalSetting()"
                class="px-4 py-2 text-sm btn-primary text-white rounded-lg smooth-transition">
                应用
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <thisfooter></thisfooter>
  </div>
</template>

<script setup lang="ts">
//通过pstId 获取数据 
// 1. 当前的 pstId ==> PST
// 2. 当前的ProjectTask ==> PT
// 3. projectStudentList ==> PS
//// 4. 根据 PS.id & PT.num ==> PST
//// 5. 根据 PST.bookId ==> 内容
import { useRoute } from 'vue-router';
import { ref, onMounted, watch } from 'vue';
import { getPSTById, getPSTByPS_idAndPT_num, saveCheckResult, setWeighting } from '@/apis/emdv4Proejct/proejctStudentTask';
import { getPTbyPTId } from '@/apis/emdv4Proejct/proejctTask';
import { getPSListByPTid } from '@/apis/emdv4Proejct/projectStudent';
import './css/style.css'
import blockLabRecursion from './components/blockLabRecursion.vue'
import '@/styles/stuTask_emb_v4/stuLab.css'
import { formatDate } from '@/utils/dateUtil'
import thisfooter from './components/footer.vue'
import { emitter } from '@/ts/eventBus';
const Route = useRoute()
const initialPSTid = Number(Array.isArray(Route.params.pst) ? Route.params.pst[0] : Route.params.pst)
const initialPTid = ref<number | null>()
const PTnum = ref<number>()
const currentPT = ref<any>() // emdv4ProejctTask
const currentPST = ref<any>() // emdv4ProjectStudentTask
const PSList = ref<any[]>() // emdv4ProjectStudent[]
const currentPS = ref<any>()
const currentPSid = ref<number>()
const currentLabStepIndex = ref<number>(0)
const currentLabStep = ref<any>()
const weightModalShow = ref(false)

interface labStepOverview {
  id: String | null,
  name: String | null, // 当前阶段的名称
  weighting: number | null, // 当前阶段的权重
  labStepQusNum: number, // 当前阶段的需要计算得分的总题目数量
  labStepTotalScore: number, // 当前阶段的总计分数
  labStepScore: number// 当前阶段得分
}
const labStepOverviewMap = ref(new Map())

const computePer = (molecule: number, bdenominator: number) => {
  return (molecule / bdenominator) * 100
}

/**
 * 递归计算labstep的overview
 * @param treeData currentStep.children
 * @param labStepOverview labStepOverview
 */
const booklabRecursion = (treeData: Array<any>, labStepOverview: labStepOverview) => {
  treeData.forEach(node => {
    if (!node.hasChildren && node.components != null && node.components.length > 0) {
      if (['commonGroup', 'selectGroup'].includes(node.type)) {
        node.components.forEach(componet => {
          if (['QA', 'MULTIPLECHOICE', 'CHOICE', 'TABLE', 'CIRCUIT', 'TRACELINE'].includes(componet.type) && componet.needCalculate) {
            labStepOverview.labStepQusNum += 1
            labStepOverview.labStepTotalScore += componet.totalScore
            labStepOverview.labStepScore += componet.score
          }
        })
      }
    }
    if (node.hasChildren) {
      booklabRecursion(node.children, labStepOverview)
    }
  })
}

/**
 * 计算currentPST.value.studentTaskBook的 overview 放入 labStepOverviewMap
 * @param index currentPST.value.studentTaskBook.children[index] => index
 */
const computeLabSetpOverview = (currentStep: any) => {
  const labStepOverview = <labStepOverview>{
    id: <String | null>null,
    name: '',
    weighting: 0,
    labStepQusNum: <number>0, // 当前阶段的需要计算得分的总题目数量
    labStepTotalScore: <number>0, // 当前阶段的总计分数
    labStepScore: <number>0 // 当前阶段得分
  }
  labStepOverview.id = currentStep.id
  labStepOverview.name = currentStep.name
  labStepOverview.weighting = currentStep.weighting == null ? 0 : currentStep.weighting
  booklabRecursion(currentStep.children, labStepOverview)
  labStepOverviewMap.value.set(currentStep.id, labStepOverview)
  console.log(labStepOverviewMap.value)
}


const isShow = ref(false)

const setCurrentLabStep = (index: number) => {
  isShow.value = false
  currentLabStepIndex.value = index
  currentLabStep.value = null
  currentLabStep.value = JSON.parse(JSON.stringify(currentPST.value.studentTaskBook.children[index]))
  // console.log(currentLabStep.value)

  setTimeout(() => {
    isShow.value = true
  }, 100)
}

/**
 * 切换学生获取新的 currentPST
 * @param PSid 课程学生的id
 */
const freshCurrentPST = async (PSid: number) => {
  await getPSTByPS_idAndPT_num(PSid, PTnum.value).then(res => {
    if (res.state == 200) {
      currentPST.value = res.data
      if (currentPST.value) {
        localStorage.setItem("teacherRedover-" + initialPSTid, currentPST.value.id.toString())
        //计算 overview
        labStepOverviewMap.value.clear()
        currentPST.value.studentTaskBook.children.forEach(step => {
          computeLabSetpOverview(step)
        })
        setCurrentLabStep(0)
      }
    } else {
      ElMessage.error("获取学生实验内容错误；" + res.message)
    }
  })
}

const lastStudent = () => {
  const index = PSList.value.findIndex(ps => ps.id === currentPS.value.id);
  if (index == 0) {
    ElMessage.warning("已经是第一个了")
    return
  }
  currentPS.value = PSList.value[index - 1]
  freshCurrentPST(currentPS.value.id)
}

const nextStudent = () => {
  const index = PSList.value.findIndex(ps => ps.id === currentPS.value.id);
  if (index == PSList.value.length - 1) {
    ElMessage.warning("已经是最后一个了")
    return
  }
  currentPS.value = PSList.value[index + 1]
  freshCurrentPST(currentPS.value.id)
}

const saveChecked = () => {
  saveCheckResult(currentPST.value.id, currentPST.value.score).then(res => {
    if (res.state == 200) {
      console.log(currentPST.value.hasChecked)
      currentPST.value.hasChecked = res.data.hasChecked
      console.log(currentPST.value.hasChecked)
    } else {
      ElMessage.error("保存数据错误：" + res.message)
    }
  })
}

const handleCheckScoreChange = async () => {
  await getPSTById(currentPST.value.id).then(res => {
    if (res.state == 200) {
      currentPST.value = res.data
      initialPTid.value = currentPST.value.projectTask
      currentPSid.value = currentPST.value.projectStudent
      if (currentPST.value) {
        // 计算 overview
        labStepOverviewMap.value.clear()
        currentPST.value.studentTaskBook.children.forEach(step => {
          computeLabSetpOverview(step)
        })
      }
    } else {
      ElMessage.error("获取初始数据错误;" + res.message)
    }
  })
}

const weightingQo = ref<any>()

const weightModalOpen = () => {
  weightingQo.value = {
    pstId: currentPST.value.id,
    taskBookId: currentPST.value.taskBookId,
    totalWeight: 0,
    stepWeightings: []
  }
  labStepOverviewMap.value.forEach((overview) => {
    // console.log(a)
    // console.log(val)
    let stepWeighting = {
      blockId: overview.id,
      name: overview.name,
      weighting: overview.weighting
    }
    weightingQo.value.stepWeightings.push(stepWeighting)
    weightingQo.value.totalWeight += overview.weighting
  })

  weightModalShow.value = true
}

const computTotalWeight = (stepWeightings: Array<any>) => {
  let totalWeight = 0
  for (let i = 0; i < stepWeightings.length; i++) {
    totalWeight += stepWeightings[i].weighting
  }
  weightingQo.value.totalWeight = totalWeight
}

const weightModalSetting = () => {
  if (weightingQo.value.totalWeight != 100) {
    ElMessage.warning("权重总和不等于100，请重设")
    return
  }


  console.log(weightingQo.value)
  setWeighting(weightingQo.value).then(res => {
    if (res.state == 200) {
      currentPST.value = res.data
      //计算 overview
      labStepOverviewMap.value.clear()
      currentPST.value.studentTaskBook.children.forEach(step => {
        computeLabSetpOverview(step)
      })
      weightModalShow.value = false
    } else {
      ElMessage.error(res.message)
    }
  })

}

const init = () => {
  setTimeout(async () => {
    let pstId = initialPSTid
    if (localStorage.getItem("teacherRedover-" + initialPSTid) != null) {
      pstId = parseInt(localStorage.getItem("teacherRedover-" + initialPSTid))
    }
    await getPSTById(pstId).then(res => {
      if (res.state == 200) {
        currentPST.value = res.data
        initialPTid.value = currentPST.value.projectTask
        currentPSid.value = currentPST.value.projectStudent
        if (currentPST.value) {
          // todo 计算 overview
          currentPST.value.studentTaskBook.children.forEach(step => {
            computeLabSetpOverview(step)
          })
          setCurrentLabStep(0)
        }
      } else {
        ElMessage.error("获取初始数据错误;" + res.message)
      }
    })
    emitter.on("checkScoreChange", handleCheckScoreChange)
  }, 100)
  watch(initialPTid, async (newVal) => {
    if (newVal != null) {
      getPTbyPTId(newVal).then(res => {
        if (res.state == 200) {
          currentPT.value = res.data
          PTnum.value = currentPT.value.num
        } else {
          ElMessage.error("获取实验内容错误；" + res.message)
        }
      })
      getPSListByPTid(newVal).then(res => {
        if (res.state == 200) {
          PSList.value = res.data
          PSList.value.forEach(PS => {
            if (PS.id == currentPSid.value) {
              currentPS.value = PS
              // console.log(currentPS.value)
            }
          })
        } else {
          ElMessage.error("获取学生列表错误；" + res.message)
        }
      })
    }
  })
}

onMounted(() => {
  init()
})
</script>
<style scoped>
.main {
  height: 100%;
  width: 100%;
}
</style>