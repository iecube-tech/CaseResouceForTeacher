<!-- emb V4 Document show-->
<template>
  <div v-if="labTree != null">
    <div class="white-card" v-if="labTree.children.length > 0">
      <div class="flex border-b border-gray-200">
        <button v-for="(block, k) in labTree.children" :key="k"
          class="flex-1 py-8 px-12 text-center font-medium tab-transition border-b-2 border-blue-600 text-blue-600"
          @click="setShouldShowTree(k)">
          <font-awesome-icon v-if="block.icon" :icon="block.icon" class="mr-2" />
          <span>{{ block.name }}</span>
        </button>
      </div>
    </div>

    <div class="white-card p-[32px]" v-if="shouldShowTree != null">
      <BookLabRecursion v-if="isShow" :tree-data="shouldShowTree.children" class="ist-theam"></BookLabRecursion>
    </div>
  </div>
</template>

<script setup lang="ts">
import BookLabRecursion from './bookLabRecursion.vue';
import '@/styles/stuTask_emb_v4/stuLab.css'
const props = defineProps({
  lab: Object
})

const blue = ref('#2563eb')
const labTree = ref()
onMounted(() => {
  labTree.value = props.lab
  console.log(labTree.value)
  if (labTree.value != null && labTree.value.children.length) {
    shouldShowTree.value = JSON.parse(JSON.stringify(labTree.value.children[0]))
    setTimeout(() => {
      isShow.value = true
    }, 100)
  }
})

const shouldShowTree = ref()
const isShow = ref(false)

const setShouldShowTree = (index: number) => {
  isShow.value = false
  shouldShowTree.value = null
  shouldShowTree.value = JSON.parse(JSON.stringify(labTree.value.children[index]))
  console.log(shouldShowTree.value)
  setTimeout(() => {
    isShow.value = true
  }, 100)
}

</script>

<style scoped>
.white-card {
  @apply bg-white rounded-lg shadow-sm border border-gray-200 mb-6;
}

.section-card {
  background: white;
  border-radius: 12px;
  border: 1px solid #e5e7eb;
  overflow: hidden;
  margin-bottom: 24px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}
</style>