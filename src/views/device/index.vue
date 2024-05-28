<template>
    <div>
        <pageHeader title="" :route=route />
        <div class="card">
            <el-card style="display: flex; flex-direction: column; "
                :body-style="{ display: 'flex', flexDirection: 'column', }">
                <template #header>
                    <div class="card-header">
                        <el-button type="primary" :icon="Back" link @click="goBack">返回</el-button>
                        <div>
                            <el-button type="primary" @click="addDeviceDialog = true" link>添加设备</el-button>
                        </div>
                    </div>
                </template>
                <RouterView />
            </el-card>
            <el-dialog v-model="addDeviceDialog" title="添加设备" width="550" @close="cleanDeviceQo()">
                <el-form :model="deviceQo" ref="ruleFormRef" :rules="rules">
                    <el-form-item label="类型：" :label-width="formLabelWidth">
                        <el-select v-model="deviceQo.type" placeholder="选择种类" style="width: 240px">
                            <el-option v-for="item in deviceType" :key="item.value" :label="item.label"
                                :value="item.value" />
                        </el-select>
                    </el-form-item>

                    <el-form-item v-if="deviceQo.type == 0" label="ID：" :label-width="formLabelWidth" prop="id">
                        <el-input v-model="deviceQo.id" type="text" oninput="value=value.replace(/[^\d.]/g,'')"
                            maxlength="7" minlength="7" />
                    </el-form-item>
                    <el-form-item label="SNID：" :label-width="formLabelWidth" prop="snId">
                        <el-input v-model="deviceQo.snId" autocomplete="off" type="text"
                            oninput="value=value.replace(/[^\d.]/g,'')" maxlength="11" minlength="11" />
                    </el-form-item>

                    <el-form-item label="名称：" :label-width="formLabelWidth" prop="name">
                        <el-input v-model="deviceQo.name" autocomplete="off" />
                    </el-form-item>
                </el-form>
                <template #footer>
                    <div class="dialog-footer">
                        <el-button @click="addDeviceDialog = false">取消</el-button>
                        <el-button type="primary" @click="submitDeviceQo(ruleFormRef)">
                            添加
                        </el-button>
                    </div>
                </template>
            </el-dialog>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onBeforeMount, onMounted, reactive, ref } from 'vue';
import { useRoute } from 'vue-router';
import router from '@/router';
import pageHeader from '@/components/pageheader.vue';
import { Back } from '@element-plus/icons-vue';
import { ElMessage, type FormInstance, type FormRules } from 'element-plus';
import { AddDevice } from '@/apis/device/device/addDevice.js';

const route = useRoute()

const addDeviceDialog = ref(false)
const formLabelWidth = ref('80px')
const deviceType = ref([
    {
        label: '远程控制器',
        value: 0,
    },
    {
        label: '普通设备',
        value: 1,
    }
])
const ruleFormRef = ref<FormInstance>()
const deviceQo = ref({
    type: 0,
    id: null,
    snId: '',
    name: '',
})
const rules = reactive<FormRules>({
    id: [
        {
            validator: function (rule, value, callback) {
                if (deviceQo.value.type == 0) {
                    if (deviceQo.value.id == null) {
                        callback(new Error("远程设备ID不能为空"));
                    }
                    if (deviceQo.value.id.toString().length != 7) {
                        callback(new Error("远程设备ID为长度7位的数字"));
                    }
                    else {
                        callback();
                    }
                }
            }, trigger: 'blur'
        },
    ],
    snId: [
        { required: true, min: 11, max: 11, message: '设备SNID为长度11位的数字', trigger: 'blur' }
    ],
    name: [
        { required: true, message: '请输入名称', trigger: 'blur' }
    ],
})

const submitDeviceQo = async (formEl: FormInstance | undefined) => {
    if (!formEl) return
    await formEl.validate((valid, fields) => {
        if (valid) {
            if (deviceQo.value.type == 1) {
                deviceQo.value.id = null
            }
            AddDevice(deviceQo.value).then(res => {
                if (res.state == 200) {
                    ElMessage.success("添加成功")
                    addDeviceDialog.value = false
                } else {
                    ElMessage.error(res.message)
                }
            })
        } else {
            ElMessage.warning("表单提交错误")
        }
    })
}

const cleanDeviceQo = () => {
    deviceQo.value.type = 0
    deviceQo.value.id = null
    deviceQo.value.snId = ''
    deviceQo.value.name = ''
}
const goBack = () => {
    router.go(-1)
}

</script>

<style scoped>
@import "@/styles/cardPadding/cardPadding.css";

.card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>