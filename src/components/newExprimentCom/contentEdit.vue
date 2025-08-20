<template>
  <div class="h-full w-full">
    <div class="h-full w-full" ref="textEditRef"></div>
  </div>
</template>

<script setup lang="ts">
import Vditor from 'vditor'
import 'vditor/dist/index.css'
import { debounce } from 'lodash'
import { useFormItem } from 'element-plus'

const emits = defineEmits(['input', 'focus', 'blur', 'change'])

const { formItem  } = useFormItem()

const textEditRef = ref<HTMLElement | null>(null)
let vditorDom: Vditor | null = null

const content = defineModel({ type: String, default: '' })

const setContent = (newContent: string) => {
  if (vditorDom) {
    vditorDom.setValue(newContent || '')
  }
}

const getContent = () => {
  const value = vditorDom?.getValue() || ''
  content.value = value
  emits('input', value)
  emits('change', value)
  
  // Trigger form validation on change
  if (formItem && formItem.validate) {
    console.log('formItem is available input')
    formItem.validate('change')
  }
  
  return value
}

const debounceInput = debounce(() => {
  getContent()
}, 200)



function init() {
  if (!textEditRef.value) return
  
  vditorDom = new Vditor(textEditRef.value, {
    width: '100%',
    theme: 'classic',
    preview: {
      theme: {
        current: 'ant-design'
      }
    },
    cache: {
      enable: false
    },
    toolbar: [
      'headings', 'bold', 'italic', 'strike', 'link', '|', 
      'list', 'ordered-list', 'check', '|', 
      'quote', 'line', 'code', 'inline-code', 'insert-before', 'insert-after', '|', 
      'upload', 'table', '|', 
      'undo', 'redo'
    ],
    toolbarConfig: {
      hide: false,
    },
    placeholder: '请在此处输入内容',
    upload: {
      accept: 'image/*',
      url: '/dev-api/files/e/image',
      linkToImgUrl: '/dev-api/files/e/image',
      fieldName: 'file',
      multiple: false,
      success(editor, msg) {
        const data = JSON.parse(msg).data
        vditorDom?.insertValue(`![${data.title}](/dev-api/${data.url})`)
      },
      error: (msg) => {
        ElMessage.error(JSON.parse(msg).message)
      },
      filename: (name: string) => {
        return name
      },
    },
    after: () => {
      setContent(content.value)
    },
    blur: () => {
      const value = vditorDom?.getValue() || ''
      content.value = value
      emits('blur', value)
      
      // Trigger form validation on blur
      if (formItem && formItem.validate) {
        console.log('formItem is available')
        formItem.validate('blur').catch(() => {}) // catch to prevent unhandled promise rejection
      }
    },
    input: () => {
      debounceInput()
    }
  })
  
  
}



// Form validation methods required by Element Plus
// const validate = () => {
//   if (formItem && formItem.validate) {
//     return formItem.validate()
//   }
//   return Promise.resolve()
// }

// const resetField = () => {
//   if (vditorDom) {
//     vditorDom.setValue('')
//     content.value = ''
//   }
//   if (formItem && formItem.resetField) {
//     formItem.resetField()
//   }
// }

// const clearValidate = () => {
//   if (formItem && formItem.clearValidate) {
//     formItem.clearValidate()
//   }
// }

defineExpose({
  focus: () => vditorDom?.focus(),
  blur: () => vditorDom?.blur(),
  setValue: setContent,
  getValue: () => vditorDom?.getValue(),
  // validate,
  // resetField,
  // clearValidate
})

onMounted(() => {
  init()
})

onUnmounted(() => {
  if (vditorDom) {
    vditorDom.destroy()
  }
})
</script>