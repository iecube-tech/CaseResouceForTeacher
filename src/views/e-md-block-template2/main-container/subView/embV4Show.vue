<template>
  <div class="bg-gray-50 min-h-full">
    <div class="py-8 px-16 mx-auto">
      <emb-v4-document :roots="bookTree"></emb-v4-document>
    </div>
  </div>
</template>

<script setup>
import {
  getBookLabChildren,
  getBlockComponents
} from '@/apis/embV4/index'

import embV4Document from './components/embV4Document.vue'
import '@/styles/stuTask_emb_v4/stuLab.css'

const route = useRoute()
const labId = ref(route.params.labId)

const bookTree = ref([])

onBeforeMount(()=> {
  init()
})

const init = async () => {
  const res = await getBookLabChildren(labId.value)
  const roots = res.data
  
  for(let i = 0; i < roots.length; i++){
    await loopChildren(roots[i])
  }
  
  bookTree.value = roots
  console.log(roots)
}

const loopChildren = async (item) =>{
  item.children = []
   // 树组件父节点
  if(item.hasChildren) {
    let res = await getBookLabChildren(item.id)
    let subItems = res.data
    for(let i=0; i < subItems.length; i++){
       await loopChildren(subItems[i])
    }
    item.children = subItems
  } else {
    // console.log("// 树组件叶子节点 has blockId")
    let res = await getBlockComponents(item.id)
    item.children = res.data
  }
}


</script>

<style scoped>

</style>  