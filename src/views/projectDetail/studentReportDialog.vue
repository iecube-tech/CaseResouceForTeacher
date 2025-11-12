<template>
  <el-dialog v-model="dialog.visible" :title="dialog.title" :before-close="close" width="80%">
    <div class="mb-4">
      <el-button @click="handleReGenerate" type="primary" icon="Refresh">重新生成</el-button>
    </div>
    <el-table :data="list">
      <el-table-column label="文件">
        <template #default="{ row }">
          <span>{{ row.resource ? row.resource.originFilename : '-' }}</span>
        </template>
      </el-table-column>
      <el-table-column label="进度" align="center">
        <template #default="{ row }">
          <el-progress :percentage="row.percent" :format="format" />
        </template>
      </el-table-column>
      <el-table-column label="信息" align="center" prop="message"></el-table-column>
      <el-table-column label="异常" align="center" prop="errorMsg"></el-table-column>
      <el-table-column label="创建时间" align="center">
        <template #default="{ row }">
          <span>{{ formatTime(row) }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="180">
        <template #default="{ row }">
          <el-button size="small" v-if="!row.finished" type="danger" plain @click="handleCancel">取消</el-button>
          <el-button size="small" :disabled="!row.finished" @click="handleDownload(row.resource.filename)" type="primary" plain icon="Download">下载</el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-dialog>
</template>

<script setup lang="ts">
import { generateStudentReport, reGenerateReport, showProgress, cancelGenReport } from '@/apis/embV4/report'
import dayjs from 'dayjs'

const dialog = ref({
  title: '学生实验报告',
  visible: false
})

const open = () => {
  dialog.value.visible = true
  initGenReport()
}

const close = () => {
  stopCheck()
  dialog.value.visible = false
}

const route = useRoute()
const projectId = ref(route.params.projectId)
const voId = ref('')

const formatTime = (row) =>{
  let time = '';
  if(row && row.resource && row.resource.createTime){
    time = dayjs(row.resource.createTime).format('YYYY-MM-DD HH:mm:ss')
  }
  return time
}

const format = (percentage) => {
  let text = percentage === 100 ? '已完成' : `${percentage}%`
  return text
}

const list = ref([])

const updateList = (data) => {
  list.value = [data]
}

let timeN = null

const startCheck = () => {
  timeN = setInterval(() => {
    handleShowProgress()
  }, 2000)
}

const stopCheck = () => {
  clearInterval(timeN)
  timeN = null
}

const setVoId = (v) => {
  voId.value = v
  startCheck()
}

// 生成报告
const initGenReport = () => {
  if(projectId.value == '') {
    return
  }
  generateStudentReport(projectId.value).then(res => {
    if(res.state == 8000){
      ElMessage.error(res.message)
      return
    }
    if (res.state == 200) {
      if (res.data.errorMsg) {
        ElMessage.error(res.data.errorMsg)
        return
      }
      setVoId(res.data.id)
      updateList(res.data)
    }
  })
}

// 重新生成报告
const handleReGenerate = () => {
  if(projectId.value == '') {
    return
  }
  reGenerateReport(projectId.value).then(res => {
    if(res.state == 8000){
      ElMessage.error(res.message)
      return
    }
    if (res.state == 200) {
      if (res.data.errorMsg) {
        ElMessage.error(res.data.errorMsg)
        return
      }
      setVoId(res.data.id)
      updateList(res.data)
    }
  })
}

// 查看进度
const handleShowProgress = () => {
  if(voId.value == ''){
    return
  }
  showProgress(voId.value).then(res => {
    if (res.state == 200) {
      if (res.data.errorMsg) {
        ElMessage.error(res.data.errorMsg)
        stopCheck()
      }
      if (res.data.finished == true) {
        stopCheck()
      }
      updateList(res.data)
    }
  }).catch(e=>{
    stopCheck()
  })
}

const handleCancel = async () => {
  stopCheck()
  await nextTick()
  cancelGenReport(voId.value).then(res=>{
  })
  list.value = []
}

// 下载
const handleDownload = (filename) => {
  setTimeout(() => {
    const link = document.createElement('a');
    link.href = '/local-resource/file/' + filename;
    link.click();
    link.remove();
  }, 1000)
}

defineExpose({ open, close })
</script>

<style scoped></style>