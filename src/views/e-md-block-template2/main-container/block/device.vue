<template>
  <div>
    <div class="flex justify-end mb-4">
        <div id="deviceStatus" class="inline-block device-status"
            :class="deviceState ? 'status-connected' : 'status-disconnected'">
            <div id="statusIndicator" class="w-3 h-3 rounded-full" :class="deviceState ? 'bg-green-500' : 'bg-red-500'"></div>
            <span id="statusText">{{ stateText }}</span>
            <button
                id="connectBtn"
                class="ml-3 px-4 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                @click="toggleDeviceConnection()"
            >
                {{ btnText }}
            </button>
        </div>
    </div>
    
    <div v-show="!deviceState"
      id="deviceNotConnectedHint"
      class="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-6 text-center"
    >
      <i class="fas fa-exclamation-triangle text-amber-600 text-3xl mb-4"></i>
      <h4 class="text-xl font-semibold text-amber-800 mb-2">设备未连接</h4>
      <p class="text-amber-700 mb-4">请先连接实验设备后才能进行实验操作</p>
      <div class="text-sm text-amber-600">
        <i class="fas fa-info-circle mr-1"></i>
        在设备未连接状态下，您可以查看实验指导书进行学习
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
    payload: Object,
})

const deviceState = computed(()=>{
    return props.payload.question.device.state != ''
})

const stateText = computed(()=>{
    return deviceState ? '设备已连接' : '未连接设备'
})

const btnText = computed(()=>{
    return deviceState ? '断开链接' : '连接设备'
})

const toggleDeviceConnection = ()=> {
    if(props.payload.question.device.state == ''){
        props.payload.question.device.state = 'connected'
    }else{
        props.payload.question.device.state = ''
    }
}
</script>

<style scoped>
.device-status{
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 12px 16px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 500;
    background: white;
    border: 1px solid #e5e7eb;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.status-disconnected {
    border-color: #f87171;
}

.status-connected {
    border-color: #34d399;
}
</style>
