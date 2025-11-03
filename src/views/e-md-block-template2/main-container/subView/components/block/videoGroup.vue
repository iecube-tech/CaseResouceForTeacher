<!-- 播放一组视频-->
<template>
  <div id="videoGrid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

    <div v-for="(compItem, k) in (compList || [])" :key="k" :class="{ completed: compItem.payload.video.isReady == 1 }"
      class="video-card bg-white border-2 border-gray-200 rounded-lg p-4 " @click="openVideo(compItem)">
      <div v-if="compItem.type == 'VIDEO'" class="flex items-start space-x-4">
        <div class="video-icon">
          <font-awesome-icon icon="fas fa-play" size="lg" class="text-white" widthAuto></font-awesome-icon>
        </div>
        <div class="flex-1">
          <h4 class="text-[16px] font-medium text-gray-900 mb-2 break-all">{{ compItem.payload.video.title }}</h4>
          <p class="text-[14px] h-[42px] text-gray-600 mb-3 line-clamp-2 break-all">{{ compItem.payload.video.description }}</p>
          <div class="flex items-center justify-between">
            <span class="text-xs text-gray-500">
              <font-awesome-icon icon="fas fa-clock" class="mr-1" style="font-size: 12px"></font-awesome-icon>
              <span v-show="compItem.payload.video.duration" style="font-size: 12px">{{ compItem.payload.video.duration
              }} 分钟</span>
            </span>
            <span v-if="compItem.payload.video.isReady == 0" class="text-blue-600 font-medium"
              style="font-size: 12px">点击观看</span>
            <span v-else class="text-green-600 font-medium" style="font-size: 12px">
              <font-awesome-icon icon="fas fa-check" class="mr-1"></font-awesome-icon>
              已完成
            </span>
          </div>
        </div>
      </div>
    </div>

    <el-dialog v-if="videoDialog.visible" v-model="videoDialog.visible"
      :title="videoDialog.compItem.payload.video.title">
      <div class="flex flex-wrap gap-1 mb-2">
        <span class="knowledge-point-badge" v-show="videoDialog.compItem.payload.video.tag">{{
          videoDialog.compItem.payload.video.tag }}</span>
      </div>
      <div class="h-[516px] flow-root">
        <div class="h-full">
          <my-video :video="videoDialog.compItem.payload.video"></my-video>
        </div>
      </div>
      <p class="text-[14px] h-[42px] text-gray-600 mt-4 line-clamp-2">{{ videoDialog.compItem.payload.video.description
        }}</p>

      <template #footer>
        <el-button v-if="videoDialog.compItem.payload.video.isReady == 0" type="primary"
          @click="handleReaded(videoDialog.compItem.payload.video)">标记为已完成</el-button>
        <el-button v-else type="primary">已完成</el-button>
      </template>
    </el-dialog>

  </div>
</template>

<script setup lang="ts">
import myVideo from "@/components/myVideo.vue"

const props = defineProps({
  children: Array,
})

const compList = ref([])

watchEffect(() => {
  let res = []
  // console.log(props.children)
  for (let i = 0; i < props.children.length; i++) {
    let item = <any>props.children[i]
    item!.payload = JSON.parse(item.payload)
    res.push(item)
  }
  compList.value = res;
})


const videoDialog = ref({
  visible: false,
  compItem: null,
})

const openVideo = (item) => {
  videoDialog.value.compItem = item
  videoDialog.value.visible = true;
}

const handleReaded = (videoItem) => {
  videoItem.isReady = 1;
  videoDialog.value.visible = false;
}

</script>

<style scoped>
:deep(.el-dialog__body) {
  padding: 12px;
}

.video-card.completed {
  background: linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%);
  border-color: #10b981;
}


.video-icon {
  width: 48px;
  height: 48px;
  background: #3b82f6;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.knowledge-point-badge {
  background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);
  color: #1e40af;
  padding: 4px 12px;
  border-radius: 16px;
  font-size: 12px;
  font-weight: 500;
}
</style>