<template>
  <my-header :name="name" @goHome="goHome" @goBack="goBack"></my-header>
</template>

<script setup>
const router = useRouter()
const route = useRoute()

const props = defineProps({
  name: {
    type: String,
    default: '实验过程评价系统'
  }
})

const goBack = () => {
  router.push({
    name: 'courseAnalysis',
    params: {
      projectId: route.params.projectId
    }
  })
}

const goHome = () => {
  router.push('/')
}
</script>

<style scoped></style>