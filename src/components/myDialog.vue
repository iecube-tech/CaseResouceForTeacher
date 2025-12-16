<template>
  <Teleport to="body">
    <Transition name="dialog">
      <div
        v-if="modelValue"
        class="fixed inset-0 bg-black bg-opacity-70 z-[9998]"
        :style="{ zIndex: maskZIndex }"
      >
        <div
          class="fixed z-[9999] flex items-center justify-center p-6"
          :style="{
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
          }"
        >
          <div 
            class="dialog-panel rounded-xl overflow-hidden"
            :style="[panelStyle]"
          >
            <!-- Header -->
            <div class="flex justify-between items-center p-6 border-b border-white/10">
              <h3 class="text-2xl font-bold text-white">{{ title }}</h3>
              <button 
                v-if="showClose" 
                @click="closeDialog" 
                class="text-gray-400 hover:text-white transition-colors p-2"
                aria-label="Close dialog"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <!-- Content -->
            <div class="p-4 overflow-y-auto overflow-x-hidden" :style="{ maxHeight: contentMaxHeight }">
              <slot></slot>
            </div>

            <!-- Footer -->
            <div v-if="$slots.footer" class="p-6 pt-0 border-t border-white/10">
              <slot name="footer"></slot>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { computed, onMounted, onUnmounted } from 'vue'

// Using defineModel for v-model binding (Vue 3.4+)
const modelValue = defineModel({ default: false })

// Props definition
const props = defineProps({
  title: {
    type: String,
    default: 'Dialog Title'
  },
  width: {
    type: [String, Number],
    default: '500px'
  },
  height: {
    type: [String, Number],
    default: 'auto'
  },
  maxHeight: {
    type: [String, Number],
    default: '80vh'
  },
  showClose: {
    type: Boolean,
    default: true
  },
  closeOnClickModal: {
    type: Boolean,
    default: true
  },
  maskZIndex: {
    type: Number,
    default: 9998
  },
  contentZIndex: {
    type: Number,
    default: 9999
  }
})

// Computed properties
const panelStyle = computed(() => {
  // Handle width value conversion
  const widthValue = props.width === '100%' 
    ? '100%' 
    : typeof props.width === 'number' 
      ? `${props.width}px` 
      : props.width;
  
  return {
    width: widthValue,
    maxWidth: '100%',
    // Preserve other necessary styles
    boxSizing: 'border-box'
  };
});

const contentMaxHeight = computed(() => {
  if (props.height !== 'auto') {
    return `calc(${props.height} - 144px)` // 144px = header + footer height
  }
  return `min(${props.maxHeight}, calc(100vh - 160px))`
})

// Methods
const closeDialog = () => {
  modelValue.value = false
}

const handleMaskClick = () => {
  if (props.closeOnClickModal) {
    closeDialog()
  }
}

// Keyboard handling for accessibility
const handleKeyDown = (e) => {
  if (e.key === 'Escape' && modelValue.value) {
    closeDialog()
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeyDown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDown)
})
</script>

<style scoped>
.dialog-panel {
  background: rgba(30, 41, 59, 0.95);
  backdrop-filter: blur(25px);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  color: white;
}

/* Improved dialog animations with more noticeable effect */
dialog-enter-active {
  animation: dialog-fade-in 0.3s;
}

.dialog-leave-active {
  animation: dialog-fade-out 0.3s;
}

@keyframes dialog-fade-in {
  0% {
    transform: translate3d(-50%, -20px, 0);
    opacity: 0;
  }
  100% {
    transform: translate3d(-50%, 0, 0);
    opacity: 1;
  }
}

@keyframes dialog-fade-out {
  100% {
    opacity: 0;
  }
}
</style>