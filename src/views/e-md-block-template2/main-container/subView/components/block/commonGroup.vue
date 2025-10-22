<!-- 通用组件 -->
<template>
  <div v-for="(compItem, k) in compList" :key="k" :class="k != 0 ? 'mt-8' : ''">
    <!-- Uncomment and use components as needed -->
    <device v-if="compItem.type == 'DEVICE'" :payload="compItem.payload"></device>
    <content v-if="compItem.type == 'TEXT'" :id="compItem.id.toString()" :payload="compItem.payload"></content>
    <group v-if="compItem.type == 'GROUP'" :payload="compItem.payload"></group>
    <!-- Add other components based on type -->
    <qa v-if="compItem.type == 'QA'" :payload="compItem.payload"></qa>
    <myVideo v-if="compItem.type == 'VIDEO'" :video="compItem.payload.video"></myVideo>
    <multipleChoice v-if="compItem.type == 'MULTIPLECHOICE'" :payload="compItem.payload"></multipleChoice>
    <choice v-if="compItem.type == 'CHOICE'" :payload="compItem.payload"></choice>

    <circuit v-if="compItem.type == 'CIRCUIT'" :payload="compItem.payload"></circuit>
    <range v-if="compItem.type == 'RANGE'" :payload="compItem.payload"></range>
    <emdV4Table v-if="compItem.type == 'TABLE'" :labId="labId" :compData="compItem" :payload="compItem.payload"
      :payloadList="compList.filter(item => item.type == 'RANGE')"></emdV4Table>
    <tracneline v-if="compItem.type == 'TRACELINE'" :labId="labId" :compData="compItem" :payload="compItem.payload"
      :payloadList="compList.filter(item => item.type == 'RANGE')"></tracneline>
    <uploadImg v-if="compItem.type == 'UPLOADIMG'" :payload="compItem.payload"></uploadImg>
    <fileList v-if="compItem.type == 'FILELIST'" :payload="compItem.payload"></fileList>

  </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue' // Added missing import
import device from "../../block/device.vue"
import group from "../../block/group.vue"
import content from "../../block/content.vue"

import qa from '../../block/qa.vue'
import myVideo from "@/components/myVideo.vue"
import multipleChoice from "../../block/multipleChoice.vue"
import choice from '../../block/choice.vue'

import circuit from '../../block/circuit.vue'
import range from '../../block/range.vue'
import emdV4Table from '../../block/emdV4Table.vue'
import tracneline from '../../block/tracneline.vue'
import uploadImg from '../../block/uploadImg.vue'
import fileList from '../../block/fileList.vue'

const props = defineProps({
  children: Array,
})

const compList = ref([])

watchEffect(() => {
  if (!props.children) return; // Add safety check

  let res = []
  for (let i = 0; i < props.children.length; i++) {
    let item = props.children[i];
    if (item) { // Add safety checks
      const labComponentVo = item;
      try {
        // Only parse if it's a string
        if (typeof labComponentVo.payload === 'string') {
          labComponentVo.payload = JSON.parse(labComponentVo.payload);
        }
      } catch (e) {
        console.warn('Failed to parse payload', e);
      }
      res.push(labComponentVo);
    }
  }
  compList.value = res;
})
</script>

<style scoped></style>