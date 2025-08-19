<template>
    <div
        class="ist-theam p-4 bg-gray-50 rounded-lg border-l-4 border-blue-500 scroll-mt-[80px] min-h-[200px] flex flex-row justify-center items-center">
        <button
            class="btn bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-xl shadow-md flex items-center mx-auto">
            电路检查
        </button>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const props = defineProps({
    payload: Object
})


</script>
<style scoped></style>