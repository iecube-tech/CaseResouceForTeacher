<template>
  
  <device v-if="item.type == 'DEVICE'" :payload="JSON.parse(item.payload)" ></device>
  <group v-if="item.type == 'GROUP'" :payload="JSON.parse(item.payload)" ></group>
  <content v-if="item.type == 'TEXT'" :payload="JSON.parse(item.payload)" ></content>
  <xvideo v-if="item.type == 'VIDEO'" :payload="JSON.parse(item.payload)"></xvideo>
  <qa v-if="item.type == 'QA'" :payload="JSON.parse(item.payload)"></qa>
  <multipleChoice v-if="item.type == 'MULTIPLECHOICE'" :payload="JSON.parse(item.payload)"></multipleChoice>
  <choice v-if="item.type == 'CHOICE'" :payload="JSON.parse(item.payload)"></choice>
  <circuit v-if="item.type == 'CIRCUIT'" :payload="JSON.parse(item.payload)"></circuit>
  <range v-if="item.type == 'RANGE'" :payload="JSON.parse(item.payload)"></range>
  <emdV4Table v-if="item.type == 'TABLE'"
    :labId="labId"
    :compData="item"
    :payload="JSON.parse(item.payload)"
    :payloadList="compTemplateList.filter(item => item.type == 'RANGE')"
    @updateCompData="initTemplateList"
    ></emdV4Table>
  <tracneline v-if="item.type == 'TRACELINE'"
    :labId="labId"
    :compData="item"
    :payload="JSON.parse(item.payload)"
    :payloadList="compTemplateList.filter(item => item.type == 'RANGE')"
    @updateCompData="initTemplateList"
    ></tracneline>
    
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

const props = defineProps({
  labId: String,
  item: Object,
  compTemplateList: Array,
})

console.log(props.item.type)
  
const emists = defineEmits(['updateCompData'])
const initTemplateList = ()=>{
  emists('updateCompData')
}

</script>

<style scoped>

</style>