<template>
      <nav class="bg-white shadow sticky top-0 z-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between h-16">
                <div class="flex">
                    <div class="flex-shrink-0 flex items-center">
                        <span class="text-xl font-bold text-primary-600">IECUBE</span>
                        <span class="ml-2 text-lg text-gray-700 ">{{ name }}</span>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script setup>

const props = defineProps({
  name: {
    type: String,
    default: '课程能力评价系统'
  }
})

</script>

<style scoped>

</style>