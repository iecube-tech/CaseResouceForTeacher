<template>
    <div>
        <el-drawer v-if="props.tag != null" v-model="editLink" :direction="'rtl'" :before-close="handleClose">
            <template #header="{ titleId }">
                <h3 :id="titleId" class="text-2xl">{{ '【' + tag.name + '】链接管理' }}</h3>
            </template>
            <div>
                <el-button size="small" type="primary" @click="handleAddEvent()">添加链接</el-button>
            </div>
            <div>
                <el-table :data="TagLinkList" style="width: 100%">
                    <el-table-column prop="name" label="名称">
                        <template #default="scope">
                            <el-link :href="scope.row.link" target="_blank">{{ scope.row.name }}</el-link>
                        </template>
                    </el-table-column>
                    <el-table-column prop="link" label="链接" />
                    <el-table-column fixed="right" label="操作" max-width="120">
                        <template #default="scope">
                            <el-button link type="primary" size="small" :icon="Edit"
                                @click="handleEditEvent(scope.row)">
                            </el-button>
                            <el-button link type="danger" size="small" :icon="Delete" @click="handleDelete(scope.row)">
                            </el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>

        </el-drawer>

        <el-dialog :title="isEdit ? '编辑链接' : '添加链接'" v-model="editDialog" width="800px">
            <el-form :model="TagLinkForm" ref="formRef" :rules="TagLinkFormRules" label-width="100px">
                <el-form-item label="名称" prop="name">
                    <el-input v-model="TagLinkForm.name" placeholder="名称"></el-input>
                </el-form-item>
                <el-form-item label="链接" prop="link">
                    <el-input v-model="TagLinkForm.link" placeholder="链接"></el-input>
                </el-form-item>
            </el-form>
            <template #footer>
                <el-button @click="editDialog = false">取消</el-button>
                <el-button type="primary" @click="handleSubmit">确定</el-button>
            </template>
        </el-dialog>
    </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { getTagLinks, addTagLink, delTagLink, upTagLink } from '@/apis/embV4/index';
import { Delete, Edit } from "@element-plus/icons-vue";

const props = defineProps({
    editLink: Boolean,
    tag: Object
})

const editLink = ref()
const Tag = ref<any>({ id: null })

const TagLinkList = ref<any[]>([])

const isEdit = ref(false)
const editDialog = ref(false)

const TagLinkForm = ref({
    id: null,
    tagId: Tag.value.id,
    name: '',
    link: '',
    style: '',
    config: '',
    payload: ''
})

const TagLinkFormRules = ref({
    name: [{ required: true, message: "请输入名称", trigger: "blur" }],
    link: [{ required: true, message: "请输入链接", trigger: "blur" }]
})

const initTagLinkForm = () => {
    TagLinkForm.value.id = null
    TagLinkForm.value.tagId = Tag.value.id
    TagLinkForm.value.name = ''
    TagLinkForm.value.link = ''
    isEdit.value = false
    editDialog.value = false
}

const handleAddEvent = () => {
    initTagLinkForm()
    isEdit.value = false
    editDialog.value = true
}

const handleEditEvent = (row: any) => {
    TagLinkForm.value.id = row.id
    TagLinkForm.value.tagId = row.tagId
    TagLinkForm.value.name = row.name
    TagLinkForm.value.link = row.link
    isEdit.value = true
    editDialog.value = true
}

const handleDelete = (row: any) => {
    handleDelTagLink(row)
}

const handleSubmit = () => {
    let TagLink = JSON.parse(JSON.stringify(TagLinkForm.value))
    if (isEdit.value) {
        handleUpTagLink(TagLink)
    } else {
        handleAddTagLink(TagLink)
    }
}

const emit = defineEmits(['handleClose'])
const handleClose = () => {
    emit("handleClose", false)
}

watch(
    () => props.editLink,
    (newVal, oldVal) => {
        console.log('userInfo.name 变化：', oldVal, '→', newVal);
        editLink.value = newVal
    }
)

watch(
    () => props.tag.id,
    (newVal, oldVal) => {
        if (newVal) {
            Tag.value = props.tag
            getTagLinkList(newVal)
        }
    }
)

const getTagLinkList = (tagId: number) => {
    getTagLinks(tagId).then(res => {
        if (res.state == 200) {
            TagLinkList.value = res.data
        } else {
            ElMessage.error(res.message)
        }
    })
}

const handleAddTagLink = (TagLink: any) => {
    addTagLink(TagLink).then(res => {
        if (res.state == 200) {
            TagLinkList.value = res.data
            initTagLinkForm()
        } else {
            ElMessage.error(res.message)
        }
    })
}

const handleDelTagLink = (TagLink) => {
    delTagLink(TagLink).then(res => {
        if (res.state == 200) {
            TagLinkList.value = res.data
        } else {
            ElMessage.error(res.message)
        }
    })
}

const handleUpTagLink = (TagLink) => {
    upTagLink(TagLink).then(res => {
        if (res.state == 200) {
            TagLinkList.value = res.data
            editDialog.value = false
        } else {
            ElMessage.error(res.message)
        }
    })
}

onMounted(() => {
    editLink.value = props.editLink
    Tag.value = props.tag
    if (Tag.value && Tag.value.id) {
        getTagLinkList(Tag.value.id)
    }
})

</script>
<style scoped></style>