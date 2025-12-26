<template>
  <transition name="fade" mode="out-in">
    <div v-show="currentModule == 3" class="h-full flex flex-col justify-around" key="expriment-page">
      <div class="grid grid-cols-1 h-[394px]">
        <screen-card title="学生总览" class="p-4">
          <template #right>
            <el-input v-model="searchStudent" class="w-[260px]" placeholder="输入姓名或学号" @input="handleSearchStudent"></el-input>
          </template>
          <div class="h-full p-2">
            <dv-scroll-board v-if="currentModule == 3" :config="studentTableConfig"
              class="h-full w-full bg-white/5 rounded-lg">
            </dv-scroll-board>
          </div>
        </screen-card>
      </div>
      <div class="grid grid-cols-1 h-[584px]">
        <screen-card title="学习行为与AI使用分析">
          <template #right>
            <el-select v-model="selectedExperiment" @change="changeExperiment" class="w-[260px] mr-4">
              <el-option v-for="experiment in experiments" :key="experiment" :value="experiment">
                {{ experiment }}
              </el-option>
            </el-select>
          </template>
          <div class="flex-1 grid grid-cols-2 grid-rows-2 gap-[10px] px-4 py-2">
            <div class="bg-white/5 rounded-2xl border border-white/20 w-full h-full flex flex-col">
              <h4 class="text-md font-medium ml-4 mt-2">
                课前预习时间分布
                <span class="text-xs text-white/70">({{ selectedExperiment }})</span>
              </h4>
              <div class="flex-1">
                <v-chart ref="chart1Ref" :option="option1" class="h-full w-full" theme="mytheme"></v-chart>
              </div>
            </div>
            <div class="bg-white/5 rounded-2xl border border-white/20 w-full h-full flex flex-col">
              <h4 class="text-md font-medium ml-4 mt-2">
                AI辅助使用次数分布
                <span class="text-xs text-white/70">({{ selectedExperiment }})</span>
              </h4>
              <div class="flex-1">
                <v-chart ref="chart2Ref" :option="option2" class="h-full w-full" theme="mytheme"></v-chart>
              </div>
            </div>
            <div class="bg-white/5 rounded-2xl border border-white/20 w-full h-full flex flex-col">
              <h4 class="text-sm font-medium ml-4 mt-2">
                课前预习时间与成绩关系
                <span class="text-xs text-white/70">({{ selectedExperiment }})</span>
              </h4>
              <div class="flex-1">
                <v-chart ref="chart3Ref" :option="option3" class="h-full w-full" theme="mytheme"></v-chart>
              </div>
            </div>
            <div class="bg-white/5 rounded-2xl border border-white/20 w-full h-full flex flex-col">
              <h4 class="text-sm font-medium ml-4 mt-2">
                AI辅助使用与成绩关系
                <span class="text-xs text-white/70">({{ selectedExperiment }})</span>
              </h4>
              <div class="flex-1">
                <v-chart ref="chart4Ref" :option="option4" class="h-full w-full" theme="mytheme"></v-chart>
              </div>
            </div>
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


import { ref, computed, onMounted } from 'vue'
import { analysisTypeEnum, getAnaylsis } from '@/apis/embV4/analysis'

const route = useRoute()
const router = useRouter()

const projectId = route.params.id

// Reactive data
const searchQuery = ref('')

// Grade filter options

const selectedExperiment = ref('')

// Student data
const searchStudent = ref('')

function handleSearchStudent(v){
  let list = students.value.filter(item =>{
    return item.studentName.includes(v) || item.studentId.includes(v)
  })
  handleStudentTableData(list)
}

const students = ref([])

// Experiment options
const experiments = ref([])

const taskList = ref([])

const studentTableConfig = ref({
  header: ['学生信息', '课程进度', '实验完成情况', '优势实验', '待提升实验'],
  data: [],
  columnWidth: [370, 370, 370, 370, 370],
  waitTime: 3000,
  headerBGC: 'rgba(255, 255, 255, 0.08)',
  oddRowBGC: 'transparent',
  evenRowBGC: 'transparent',
})

const handleStudentTableData = (list) => {
  let data = []

  list.forEach(item => {
    let ar = []
    let bgClass = getAvatarBgClass(item.studentName)
    let firstNameClass = getAvatarTextColorClass(item.studentName)
    let firstName = item.studentName.substring(0, 1)
    let studentInfo = `<div class="h-full flex items-center">
                  <div class="flex-shrink-0 h-10 w-10 rounded-full flex items-center justify-center ${bgClass}">
                    <span class="font-medium ${firstNameClass}">${firstName}</span>
                  </div>
                  <div class="ml-4">
                    <div class="text-sm font-medium">${item.studentName}</div>
                    <div class="text-sm text-white/70">${item.studentId}</div>
                  </div>
                </div>`
    ar.push(studentInfo)

    let progressClass = getProgressClass(item.rageOfCourse)
    let courseProgressInfo =
      `<div class="h-full flex flex-col justify-center items-start">
        <div class="text-sm">${item.rageOfCourse}%</div>
        <div class="w-24 bg-gray-200/20 rounded-full h-1.5">
          <div class="h-1.5 rounded-full ${progressClass}"
            style="width: ${item.rageOfCourse}%"></div>
        </div>
      </div>`
    ar.push(courseProgressInfo)

    let doneInfo = `<div class="h-full flex flex-col justify-center items-start">
      <div class="text-sm ">${item.numOfDoneTask} / ${item.numOfTotalTask}
                </div>
                <div class="text-xs text-white/70">已完成${item.numOfDoneTask}个实验</div>
      </div>`
    ar.push(doneInfo)

    let hightExpriment = `<div class="h-full flex flex-col justify-center items-start">
    <span class="text-sm text-green-400">${getHightScoreTask(item.orderByScore)}</span>
    </div>`
    ar.push(hightExpriment)


    let lowExpriment = `<div class="h-full flex flex-col justify-center items-start">
    <span class="text-sm text-red-400">${getLowScoreTask(item.orderByScore)}</span>
    </div>`
    ar.push(lowExpriment)

    data.push(ar)
  })

  studentTableConfig.value.data = data
}


// Chart references
const preStudyTimeDistributionChart = ref(null)
const aiUsageDistributionChart = ref(null)
const preStudyTimeVsScoreChart = ref(null)
const aiUsageVsScoreChart = ref(null)

// Helper functions
const getAvatarBgClass = (name) => {
  const colors = [
    'bg-blue-500/20',
    'bg-green-500/20',
    'bg-purple-500/20',
    'bg-yellow-500/20',
    'bg-red-500/20',
    'bg-indigo-500/20',
    'bg-pink-500/20'
  ]
  const index = name.charCodeAt(0) % colors.length
  return colors[index]
}

const getAvatarTextColorClass = (name) => {
  const colors = [
    'text-blue-400',
    'text-green-400',
    'text-purple-400',
    'text-yellow-400',
    'text-red-400',
    'text-indigo-400',
    'text-pink-400'
  ]
  const index = name.charCodeAt(0) % colors.length
  return colors[index]
}

const getProgressClass = (progress) => {
  if (progress >= 70) return 'bg-green-500'
  if (progress >= 50) return 'bg-yellow-500'
  return 'bg-red-500'
}

const getGradeClass = (score) => {
  if (score >= 90) return 'green'
  if (score >= 80) return 'blue'
  if (score >= 70) return 'yellow'
  if (score >= 60) return 'orange'
  return 'red'
}

const getHightScoreTask = (list) => {
  let len = list.length
  if (len > 0) {
    return list[len - 1].ptName
  } else {
    return '--'
  }
}

const getLowScoreTask = (list) => {
  let len = list.length
  if (len > 0) {
    return list[0].ptName
  } else {
    return '--'
  }
}

// init charts
const chart1Ref = ref(null)
const chart2Ref = ref(null)
const chart3Ref = ref(null)
const chart4Ref = ref(null)

watchEffect(() => {
  if (props.currentModule == 3) {
    resizeChart()
  }
})

window.addEventListener('resize', () => {
  if (props.currentModule == 3) {
    resizeChart()
  }
})

function resizeChart() {
  setTimeout(_ => {
    console.log('......... resizeChart')
    chart1Ref.value && chart1Ref.value.resize()
    chart2Ref.value && chart2Ref.value.resize()
    chart3Ref.value && chart3Ref.value.resize()
    chart4Ref.value && chart4Ref.value.resize()
  }, 200)
}


const option1 = ref(null)
option1.value = {
  title: {
    show: false,
  },
  grid: {
    top: '10%',
    bottom: 0,
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    },
    formatter: '{b}: {c} 人'
  },
  xAxis: {
    type: 'category',
    data: ['<0.5小时', '0.5-1小时', '1-1.5小时', '1.5-2小时', '2-2.5小时', '2.5-3小时', '>3小时'],
    axisLabel: {
      interval: 0,  // Display all labels
      rotate: 0,    // Keep labels horizontal
      fontSize: 10
    }
  },
  yAxis: {
    type: 'value',
    axisLabel: {
      fontSize: 12
    },
    name: '学生人数',
    nameLocation: 'middle',
    nameGap: 30
  },
  // color: ['#38B1E8'],
  series: [
    {
      type: 'bar',
      barWidth: '50%',
      data: [
        {
          value: 0,
          itemStyle: { color: '#32C96A' },
          name: '<0.5小时'
        },
        {
          value: 0,
          itemStyle: { color: '#609DFE' },
          name: '0.5-1小时' // Light green for 80-90
        },
        {
          value: 0,
          itemStyle: { color: '#F8954E' },
          name: '1-1.5小时' // Yellow for 70-80
        },
        {
          value: 0,
          itemStyle: { color: '#F0CA52' },
          name: '1.5-2小时' // Orange for 60-70
        },
        {
          value: 0,
          itemStyle: { color: '#F47C7C' },
          name: '2-2.5小时' // Red for <60
        },
        {
          value: 0,
          itemStyle: { color: '#D06BEE' },
          name: '2.5-3小时'
        },
        {
          value: 0,
          itemStyle: { color: '#4EC7F0' },
          name: '>3小时'
        }
      ]
    },
  ]
}

const option2 = ref(null)
option2.value = {
  title: {
    show: false,
  },
  grid: {
    top: '10%',
    bottom: 0,
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    },
    formatter: '{b}: {c} 人'
  },
  xAxis: {
    type: 'category',
    data: ['0次', '1-2次', '3-4次', '5-6次', '7-8次', '9-10次', '>10次'],
    axisLabel: {
      interval: 0,  // Display all labels
      rotate: 0,    // Keep labels horizontal
      fontSize: 10
    }
  },
  yAxis: {
    type: 'value',
    axisLabel: {
      fontSize: 12
    },
    name: '学生人数',
    nameLocation: 'middle',
    nameGap: 30
  },
  // color: ['#38B1E8'],
  series: [
    {
      type: 'bar',
      barWidth: '50%',
      data: [
        {
          value: 0,
          itemStyle: { color: '#32C96A' },
          name: '0次'
        },
        {
          value: 0,
          itemStyle: { color: '#609DFE' },
          name: '1-2次' // Light green for 80-90
        },
        {
          value: 0,
          itemStyle: { color: '#F8954E' },
          name: '3-4次'
        },
        {
          value: 0,
          itemStyle: { color: '#F0CA52' },
          name: '5-6次'
        },
        {
          value: 0,
          itemStyle: { color: '#F47C7C' },
          name: '7-8次'
        },
        {
          value: 0,
          itemStyle: { color: '#D06BEE' },
          name: '9-10次'
        },
        {
          value: 0,
          itemStyle: { color: '#4EC7F0' },
          name: '>10次'
        }
      ]
    },
  ]
}


const generateScatterData = () => {
  const data = [];
  for (let i = 0; i < 30; i++) {
    // First number: study time between 0.5 and 6 hours
    const studyTime = parseFloat((Math.random() * 5.5 + 0.5).toFixed(2));

    // Second number: score between 60 and 99
    const score = Math.floor(Math.random() * 40) + 60;

    data.push([studyTime, score]);
  }
  return data;
};

const option3 = ref(null)
option3.value = {
  xAxis: {},
  yAxis: {
    axisLabel: {
      fontSize: 12
    },
    name: '实验成绩',
    nameLocation: 'middle',
    nameGap: 30
  },
  grid: {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  tooltip: {
    position: 'top',
    formatter: function (params) {
      let [time, score] = params.data;

      return `${time}小时: ${score}`;
    }
  },
  series: [
    {
      symbolSize: 10,
      data: [], //generateScatterData(),
      type: 'scatter'
    }
  ]
};

const generateScatterTimesData = () => {
  const data = [];
  for (let i = 0; i < 30; i++) {
    // First number: study time between 0.5 and 6 hours
    const times = Math.floor(Math.random() * 30);

    // Second number: score between 60 and 99
    const score = Math.floor(Math.random() * 40) + 50;

    data.push([times, score]);
  }
  return data;
};

const option4 = ref(null)
option4.value = {
  xAxis: {},
  yAxis: {
    axisLabel: {
      fontSize: 12
    },
    name: '实验成绩',
    nameLocation: 'middle',
    nameGap: 30
  },
  grid: {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  color: ['#4caf50'],
  tooltip: {
    position: 'top',
    formatter: function (params) {
      let [time, score] = params.data;

      return `${time}次数: ${score}`;
    },
  },
  series: [
    {
      symbolSize: 10,
      data: [], //generateScatterTimesData(),
      type: 'scatter'
    }
  ]
};



// Lifecycle
onMounted(() => {
  setTimeout(() => {
    updateChart()
  }, 200)
})

function updateChart() {
  getAnaylsis(projectId, analysisTypeEnum.T_STU_OVERVIEW).then(res => {
    if (res.state == 200) {
      students.value = res.data || []
      handleStudentTableData(students.value);
    }
  })
  getAnaylsis(projectId, analysisTypeEnum.T_STU_BEHAVIOUR).then(res => {
    if (res.state == 200) {
      // console.log(res.data)
      let list = res.data || []
      taskList.value = list
      let taskNames = list.map(_ => _.ptName)
      experiments.value = taskNames
      if (list.length > 0) {
        changeExperiment(taskNames[0])
      }
    }
  })
}

const changeExperiment = (taskName) => {
  selectedExperiment.value = taskName
  let index = taskList.value.findIndex(_ => _.ptName == taskName)
  let taskItem = taskList.value[index]

  let timeDistribution = taskItem.timeDistribution // 时间分布
  setOption1(timeDistribution)

  let aiUsedDistribution = taskItem.aiUsedDistribution
  setOption2(aiUsedDistribution)

  let btg = taskItem.btg
  setOption3(btg)

  let ug = taskItem.ug
  setOption4(ug)

}

const setOption1 = (list) => {
  list.forEach(item => {
    let key = Object.keys(item)[0]
    let value = item[key]
    let data = option1.value.series[0].data
    if (key == '<0.5小时') {
      data[0].value = value
    }
    if (key == '0.5-1小时') {
      data[1].value = value
    }
    if (key == '1-1.5小时') {
      data[2].value = value
    }
    if (key == '1.5-2小时') {
      data[3].value = value
    }
    if (key == '2-2.5小时') {
      data[4].value = value
    }
    if (key == '2.5-3小时') {
      data[5].value = value
    }
    if (key == '>3小时') {
      data[6].value = value
    }
  })

  chart1Ref.value && chart1Ref.value.setOption(option1.value)
}

const setOption2 = (list) => {
  list.forEach(item => {
    let key = Object.keys(item)[0]
    let value = item[key]
    let data = option2.value.series[0].data
    if (key == '0次') {
      data[0].value = value
    }
    if (key == '1-2次') {
      data[1].value = value
    }
    if (key == '3-4次') {
      data[2].value = value
    }
    if (key == '5-6次') {
      data[3].value = value
    }
    if (key == '7-8次') {
      data[4].value = value
    }
    if (key == '9-10次') {
      data[5].value = value
    }
    if (key == '>10次') {
      data[6].value = value
    }
  })

  chart2Ref.value && chart2Ref.value.setOption(option2.value)
}

const setOption3 = (list) => {
  let datas = list.map(_ => {
    let time = (_.data[0] / 1000 / 60 / 60).toFixed(1)
    return [time, _.data[1]]
  })
  option3.value.series[0].data = datas
  chart3Ref.value && chart3Ref.value.setOption(option3.value)

}

const setOption4 = (list) => {
  let datas = list.map(_ => _.data)
  option4.value.series[0].data = datas
  chart4Ref.value && chart4Ref.value.setOption(option4.value)
}
</script>

<style scoped></style>