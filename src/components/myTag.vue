<template>
  <span v-if="dark" class="px-2 inline-flex text-xs leading-5" :class="[`bg-${color}-500/20`, `text-${color}-400`]">{{ text }}</span>
  <span v-else class="px-2 inline-flex text-xs leading-5" :class="[`bg-${color}-100`, `text-${color}-800`]">{{ text }}</span>
</template>

<script setup>
const props = defineProps({
  color: String, //green, yellow, gray, red, blue, purple, indigo, pink, orange
  text: {
    type: [String , Number],
    default: ''
  },
  dark: Boolean,
})

</script>

<style scoped>

</style>