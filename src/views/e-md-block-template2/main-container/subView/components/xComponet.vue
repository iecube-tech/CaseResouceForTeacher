<template>
  <div>
    <device v-if="item.type == 'DEVICE'" :payload="payload"></device>
    <group v-if="item.type == 'GROUP'" :payload="payload"></group>
    <content v-if="item.type == 'TEXT'" :payload="payload"></content>
    <xvideo v-if="item.type == 'VIDEO'" :payload="payload"></xvideo>
    <qa v-if="item.type == 'QA'" :payload="payload"></qa>
    <multipleChoice v-if="item.type == 'MULTIPLECHOICE'" :payload="payload"></multipleChoice>
    <choice v-if="item.type == 'CHOICE'" :payload="payload"></choice>
    <circuit v-if="item.type == 'CIRCUIT'" :payload="payload"></circuit>
    <range v-if="item.type == 'RANGE'" :payload="payload"></range>
    <emdV4Table v-if="item.type == 'TABLE'" :labId="labId" :compData="item" :payload="payload"
      :payloadList="compTemplateList.filter(item => item.type == 'RANGE')" @updateCompData="initTemplateList">
    </emdV4Table>
    <tracneline v-if="item.type == 'TRACELINE'" :labId="labId" :compData="item" :payload="payload"
      :payloadList="compTemplateList.filter(item => item.type == 'RANGE')" @updateCompData="initTemplateList">
    </tracneline>
    <uploadImg v-if="item.type == 'UPLOADIMG'" :id="item.id" :payload="payload"></uploadImg>
    <fileList v-if="item.type == 'FILELIST'" :id="item.id" :payload="payload"></fileList>
    
  </div>
</template>

<script setup>

import device from "../block/device.vue"
import group from "../block/group.vue"
import content from "../block/content.vue"
import xvideo from '../block/xvideo.vue'
import qa from '../block/qa.vue'
import multipleChoice from "../block/multipleChoice.vue"
import choice from '../block/choice.vue'
import circuit from '../block/circuit.vue'
import range from '../block/range.vue'
import emdV4Table from '../block/emdV4Table.vue'
import tracneline from '../block/tracneline.vue'
import uploadImg from "../block/uploadImg.vue"
import fileList from '../block/fileList.vue'

import '@/styles/stuTask_emb_v4/stuLab.css'

const props = defineProps({
  labId: String,
  item: Object,
  compTemplateList: {
    type: Array,
    default: () => []
  },
})

const payload = ref(JSON.parse(props.item.payload))

watchEffect(() => {
  payload.value = JSON.parse(props.item.payload)
})

// console.log(props.item.type)

const emists = defineEmits(['updateCompData'])
const initTemplateList = () => {
  emists('updateCompData')
}

</script>

<style scoped></style>