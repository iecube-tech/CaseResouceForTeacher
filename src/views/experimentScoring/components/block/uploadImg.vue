<template>
  <div>
    <!-- Display description -->
    <text-preview class="ist-theam" :content="comp.payload.upload.description"></text-preview>

    <!-- Upload Section -->
    <div>
      <el-button type="primary" :disabled="true">
        <font-awesome-icon icon="fa-solid fa-cloud-arrow-up" class="mr-2"></font-awesome-icon>
        请上传指定图片
      </el-button>

      <!-- Preview Uploaded Image -->
      <div v-if="comp.payload.upload.imgUrl" class="mt-4 flex justify-center">
        <img :src="`/dev-api${comp.payload.upload.imgUrl}`" alt="Uploaded Image"
         class="h-[400px] w-auto rounded md-image"  @click.native="handleClick"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import textpreview from '@/components/textPreview.vue';

import { useEmdStore } from '@/stores/emdLabStore';
const labStore = useEmdStore()

// Props
const props = defineProps({
  index: Number,
  comp: Object,
});

const handleClick = (event) => {
  if (props.comp.payload.upload.imgUrl != '') {
    if ((event.target as HTMLElement).classList.contains("md-image")) {
      labStore.showZoomed = true
      labStore.setimageSrc((event.target as HTMLImageElement).currentSrc)
    }
  }
}
</script>

<style scoped>
/* Add any custom styles if needed */
</style>