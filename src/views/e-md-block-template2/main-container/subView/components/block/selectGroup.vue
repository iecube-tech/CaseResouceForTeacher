<!-- 播放一组视频-->
<template>
  <div v-for="(compItem, k ) in compList" :key="k" :class="k != 0 ? 'mt-8' : ''">
    <multipleChoice :index="k+1" v-if="compItem.type == 'MULTIPLECHOICE'" :payload="compItem.payload"></multipleChoice>
    <choice :index="k+1" v-if="compItem.type == 'CHOICE'" :payload="compItem.payload"></choice>
  </div>
</template>

<script setup lang="ts">
import choice from '../../block/choice.vue'
import multipleChoice from '../../block/multipleChoice.vue'

const props = defineProps({
  children: Array,
})

const compList = ref([])

watchEffect(() => {
  let res = []
  for (let i = 0; i < props.children.length; i++) {
    let item = props.children[i]
    item!.labComponentVo!.payload = JSON.parse(item.labComponentVo.payload)
    res.push(item.labComponentVo)
  }
  compList.value = res;
  // console.log(res)
})


</script>

<style scoped>

</style>