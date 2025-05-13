<template>
    <div style="width: 100%; height: auto; display: flex; flex-direction: column; align-items: flex-start;"
        class="ist-theam">
        <div :id="generateShortUUID(blockId)" style="flex: 1;"></div>
    </div>
</template>

<script setup lang="ts">
// 1.1 引入Vditor 构造函数
import Vditor from 'vditor'
import 'vditor/dist/index.css';
import { ref, onMounted, onUnmounted } from 'vue';
import { generateShortUUID } from '@/utils/GenrateUUID.js';
import { BlockDetail, getOutline } from '../../../block';
import { ElMessage } from 'element-plus';
import { GetBlockDetail } from '@/apis/e-md/block/getBlockDetail.js'
import { UpdateBlockDetail } from '@/apis/e-md/block/updateBlockDetail.js'
const props = defineProps({
    blockId: Number,
})


const blockDetail = ref<BlockDetail>()
const vditor = ref<Vditor | null>()

const saveCompose = () => {
    UpdateBlockDetail(blockDetail.value).then(res => {
        if (res.state != 200) {
            ElMessage.error("保存数据失败 " + res.message)
        }
    })
}

const getBlockDetail = () => {
    GetBlockDetail(props.blockId).then(res => {
        if (res.state == 200) {
            blockDetail.value = res.data
            if (vditor.value) {
                vditor.value.setValue(blockDetail.value.content)
                vditor.value.enable()
            }
        }
        else {
            ElMessage.error("数据加载失败")
        }
    })
}

const initVditor = async () => {
    return new Promise<void>((resolve) => {
        vditor.value = new Vditor(generateShortUUID(props.blockId), {
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
                blockDetail.value.content = vditor.value.getValue()
                blockDetail.value.catalogue = JSON.stringify(getOutline(blockDetail.value.content))
                saveCompose()
            }
        })
    })
}

onMounted(() => {
    setTimeout(async () => {
        await initVditor()
        getBlockDetail()
    }, 10)
})

onUnmounted(() => {
    if (vditor.value) {
        vditor.value.destroy()
    }
})

</script>
<style scoped></style>