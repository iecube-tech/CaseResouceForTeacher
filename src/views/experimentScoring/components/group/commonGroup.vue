<!-- 通用组件 -->
<template>
  <div v-for="(compItem, k) in compList" :key="k" :class="k != 0 ? 'mt-8' : ''">
    <!-- {{ compItem.type }} -->
    <qa v-if="compItem.type == 'QA' && compItem.needCalculate" :comp="compItem" :index="k"></qa>
    <multipleChoice v-if="compItem.type == 'MULTIPLECHOICE' && compItem.needCalculate" :comp="compItem">
    </multipleChoice>
    <choice v-if="compItem.type == 'CHOICE' && compItem.needCalculate" :comp="compItem"></choice>
    <emdV4Table v-if="compItem.type == 'TABLE' && compItem.needCalculate" :index="k" :comp="compItem"></emdV4Table>
    <circuit v-if="compItem.type == 'CIRCUIT' && compItem.needCalculate" :index="k" :comp="compItem"></circuit>
    <tracneline v-if="compItem.type == 'TRACELINE' && compItem.needCalculate" :index="k" :comp="compItem"></tracneline>
  </div>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue' // Added missing import
import qa from '../block/qa.vue'
import multipleChoice from "../block/multipleChoice.vue"
import choice from '../block/choice.vue'

import circuit from '../block/circuit.vue'
// import range from '../block/range.vue'
import emdV4Table from '../block/emdV4Table.vue'
import tracneline from '../block/tracneline.vue'

const props = defineProps({
  block: Object
})

const compList = ref([])

const init = () => {
  let res = []
  for (let i = 0; i < props.block.components?.length; i++) {
    let item = props.block.components[i]
    if (typeof item.payload == 'string') {
      item.payload = JSON.parse(item.payload)
    }
    res.push(item)
  }

  res = res.sort((a, b) => a.order - b.order)
  compList.value = res;
}

watchEffect(() => {
  init()
})

</script>

<style scoped></style>