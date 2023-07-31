<template>
  <div class="pdf-preview">
  
  </div>
</template>
<script setup lang="ts">
import { reactive, onMounted, computed } from "vue";

const props = defineProps({
  pdfUrl: {
      type: String,
      required: true
  }
})

onMounted(() => {

});

</script>
<style lang="css" scoped>
.pdf-preview {
  position: relative;
  height: 100vh;
  padding: 20px 0;
  box-sizing: border-box;
  background: rgb(66, 66, 66);
}

.vue-pdf-embed {
  text-align: center;
  width: 515px;
  border: 1px solid #e5e5e5;
  margin: 0 auto;
  box-sizing: border-box;
}

</style>