<template>
  <div class="data-card rounded-2xl flex flex-col">
    <div v-if="showHeader" class="text-lg font-semibold h-[30px] ml-2 mt-2 flex items-center">
      <slot name="icon"></slot>
      <span class="text-white">{{ title }}</span>
    </div>
    <slot></slot>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: '',
  },
})

const showHeader = computed(() => {
  return props.title.length > 0
})
</script>

<style scoped>
.data-card {
  backdrop-filter: blur(15px);
  background: rgba(255, 255, 255, 0.1);
  border: 0.5px solid rgba(255, 255, 255, 0.2);
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
}

.data-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  transition: left 0.8s;
}

.data-card:hover::before {
  left: 100%;
}

.data-card:hover {
  transform: translateY(-5px);
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
}
</style>