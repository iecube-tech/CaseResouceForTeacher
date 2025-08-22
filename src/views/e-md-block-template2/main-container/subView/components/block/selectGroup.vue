<!-- 播放一组视频-->
<template>
  <div >
  </div>
</template>

<script setup lang="ts">

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
  console.log(res)
})


</script>

<style scoped>

</style>