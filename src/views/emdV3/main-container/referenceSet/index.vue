<template>
    <div v-if="labId" class="reference-set">
        <div :id="generateShortUUID(labId)"></div>
    </div>
</template>

<script setup lang="ts">
// 1.1 引入Vditor 构造函数
import Vditor from 'vditor'
import 'vditor/dist/index.css';
import { ref, onMounted, onUnmounted } from 'vue';
import { ElMessage } from 'element-plus';
import { useRoute } from 'vue-router';
import { GetLabRef } from '@/apis/e-md/labProc/getLabRef.js';
import { UpLabRef } from '@/apis/e-md/labProc/upLabRef'
import { generateShortUUID } from '@/utils/GenrateUUID.js';
const route = useRoute();
const isReady = ref(false)
const labId = ref()

const vditor = ref<Vditor | null>()
const reference = ref({
    id: null,
    labProcId: null,
    reference: ''
})


const getLabreference = () => {
    GetLabRef(labId.value).then(res => {
        if (res.state == 200) {
            reference.value = res.data
            if (vditor.value) {
                vditor.value.setValue(reference.value.reference)
                vditor.value.enable()
            }
        }
        else {
            ElMessage.error("数据加载失败")
        }
    })
}

const updateLabRefence = () => {
    UpLabRef(reference.value).then(res => {
        if (res.state == 200) {

        } else {
            ElMessage.error("保存数据失败" + res.message)
        }
    })
}

const initVditor = async () => {
    return new Promise<void>((resolve) => {
        vditor.value = new Vditor(generateShortUUID(labId.value), {
            // width: '100%',
            // height: '100%',
            theme: 'classic',
            preview: {
                theme: {
                    current: 'ant-design'
                }
            },
            cache: {
                enable: false
            },
            toolbar: ['headings', 'bold', 'italic', 'strike', 'link', '|', 'list', 'ordered-list', 'check', '|', 'quote', 'line', 'code', 'inline-code', 'insert-before', 'insert-after', '|', 'upload', 'table', '|', 'undo', 'redo',],
            toolbarConfig: {
                hide: true,
            },
            placeholder: '请在此处输入内容',
            upload: {
                accept: 'image/*',
                url: '/dev-api/files/e/image',
                linkToImgUrl: '/dev-api/files/e/image',
                fieldName: 'file',
                multiple: false,
                success(editor, msg) {
                    // console.log(editor)
                    // console.log(msg)
                    vditor.value.insertValue('![' + JSON.parse(msg).data.title + '](/dev-api/' + JSON.parse(msg).data.url + ')')
                },
                error: (msg) => {
                    ElMessage.error(JSON.parse(msg).message)
                },
                filename: (name: string) => {
                    return name
                },
            },
            after: () => {
                vditor.value.disabled()
                resolve()
            },
            blur: () => {
                reference.value.reference = vditor.value.getValue()
                updateLabRefence()
            }
        })
    })
}

onMounted(() => {
    labId.value = <number><any>route.query.labId
    setTimeout(async () => {
        console.log(document.getElementById(labId.value))
        await initVditor()
        getLabreference()
    }, 10)
})
onUnmounted(() => {
    if (vditor.value) {
        vditor.value.destroy()
    }
})

</script>
<style scoped>
.reference-set {
    max-width: 100%;
    width: 100%;
    height: 100%;
    overflow-y: auto;
    padding-left: 30px;
}
</style>