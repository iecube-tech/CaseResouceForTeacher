<template>
    <div>
        <el-table :data="deviceList" row-key="id" style="min-height: 65vh;" stripe
            :header-cell-style="{ fontWeight: 'bold', textAlign: 'center' }" :row-style="{ flexGrow: 1 }">
            <el-table-column label="SNID">
                <template #default="scope">
                    <div style="text-align:center">
                        <span>{{ scope.row.snId }}</span>
                    </div>
                </template>
            </el-table-column>
            <el-table-column label="名称">
                <template #default="scope">
                    <div style="text-align:center">
                        <span>{{ scope.row.name }}</span>
                    </div>
                </template>
            </el-table-column>
            <el-table-column label="version">
                <template #default="scope">
                    <div style="text-align:center">
                        <span>{{ scope.row.version }}</span>
                    </div>
                </template>
            </el-table-column>
            <el-table-column label="状态">
                <template #default="scope">
                    <div style="text-align:center">
                        {{ scope.row.status }}
                    </div>
                </template>
            </el-table-column>
            <el-table-column label="操作">
                <template #default="scope">
                    <div style="text-align:center">
                        <el-button v-if="scope.row.type == 0" type="primary" link size="small" :icon="Plus"
                            @click="openAddRemoteDeviceDialog(scope.row.id)"></el-button>
                        <el-popconfirm title="确定删除该设备及其关联设备吗?" confirm-button-text="确定" cancel-button-text="取消"
                            @confirm="">
                            <template #reference>
                                <el-button type="danger" link size="small" :icon="Delete"></el-button>
                            </template>
                        </el-popconfirm>
                    </div>
                </template>
            </el-table-column>
            <el-table-column type="expand">
                <template #default="scope">
                    <div v-if="scope.row.remoteDevices" style="padding: 0 5rem;">
                        <el-table :data="scope.row.remoteDevices" border :header-cell-style="{ fontWeight: 'bold' }">
                            <el-table-column prop="snId" label="SNID" />
                            <el-table-column prop="name" label="名称" />
                            <el-table-column prop="typeName" label="远程方式" />
                            <el-table-column prop="ip" label="IP" />
                            <el-table-column prop="port" label="端口" />
                            <el-table-column>
                                <template #header>
                                    <span>开启远程操作</span>
                                    <el-tooltip content="操作onlineBox开启/关闭一个远程服务;由高亮表示当前状态" placement="bottom"
                                        effect="light">
                                        <el-button link :icon="InfoFilled" size="small"></el-button>
                                    </el-tooltip>
                                </template>
                                <template #default="sc">
                                    <div v-if="sc.row.remoteControl == 0">
                                        <el-button type="primary" link size='small'
                                            @click="closeRemoteControl(scope.$index, sc.$index, sc.row.id)">关闭</el-button>
                                        <el-button link size='small'
                                            @click="openRemoteControl(scope.$index, sc.$index, sc.row.id)">开启</el-button>
                                        <el-button type="primary" link :icon="Refresh"
                                            @click="freshDeviceStaus(scope.$index, sc.$index, sc.row.id)"></el-button>
                                    </div>
                                    <div v-else>
                                        <el-button link size='small'
                                            @click="closeRemoteControl(scope.$index, sc.$index, sc.row.id)">关闭</el-button>
                                        <el-button type="primary" link size='small'
                                            @click="openRemoteControl(scope.$index, sc.$index, sc.row.id)">开启</el-button>
                                        <el-button type="primary" link :icon="Refresh"
                                            @click="freshDeviceStaus(scope.$index, sc.$index, sc.row.id)"></el-button>
                                    </div>
                                </template>
                            </el-table-column>
                            <el-table-column>
                                <template #header>
                                    <span>设备状态</span>
                                    <el-tooltip content="该远程服务中设备连通状态;由高亮表示当前状态" placement="bottom" effect="light">
                                        <el-button link :icon="InfoFilled" size="small"></el-button>
                                    </el-tooltip>
                                </template>
                                <template #default="sc">
                                    <div>
                                        <span v-if="sc.row.deviceState == 1">在线</span>
                                        <span v-else>离线</span>
                                        <el-button type="primary" link :icon="Refresh"
                                            @click="freshDeviceStaus(scope.$index, sc.$index, sc.row.id)"></el-button>
                                    </div>
                                </template>
                            </el-table-column>
                            <el-table-column label="允许预约">
                                <template #default="sc">
                                    <div v-if="sc.row.allowAppointment == 0">
                                        <el-button type="primary" link size='small'>关闭</el-button>
                                        <el-button link size='small'>开启</el-button>
                                    </div>
                                    <div v-else>
                                        <el-button link size='small'>关闭</el-button>
                                        <el-button type="primary" link size='small'>开启</el-button>
                                    </div>
                                </template>
                            </el-table-column>
                            <el-table-column label="设备单次预约时长/min">
                                <template #default="sc">
                                    <div>
                                        <span>{{ sc.row.singleDuration }}</span>
                                        <el-button type="primary" link size="small" :icon="Edit"></el-button>
                                    </div>
                                </template>
                            </el-table-column>
                            <el-table-column label="操作">
                                <template #default="sc">
                                    <div>
                                        <el-button type="primary" link size="small" :icon="View"
                                            @click="viewItem(sc.row)"></el-button>
                                        <el-button type="primary" link size="small" :icon="Edit"></el-button>
                                        <el-popconfirm title="确定删除该设备吗?" confirm-button-text="确定"
                                            cancel-button-text="取消" @confirm="delRemoteDevice(sc.row.id)">
                                            <template #reference>
                                                <el-button type="danger" link size="small" :icon="Delete"></el-button>
                                            </template>
                                        </el-popconfirm>
                                    </div>
                                </template>
                            </el-table-column>

                        </el-table>

                    </div>
                </template>
            </el-table-column>
        </el-table>

        <el-dialog v-model="addRemoteDeviceDialog" title="添加远程设备" width="550" @close="cleanRemoteDeviceQo()">
            <el-form :model="remoteDeviceQo" ref="ruleFormRef" :rules="rules">
                <el-form-item label="SNID：" :label-width="formLabelWidth" prop="snId">
                    <el-input v-model="remoteDeviceQo.snId" type="text" oninput="value=value.replace(/[^\d.]/g,'')"
                        maxlength="11" minlength="11" />
                </el-form-item>
                <el-form-item label="名称：" :label-width="formLabelWidth" prop="name">
                    <el-input v-model="remoteDeviceQo.name" />
                </el-form-item>
                <el-form-item label="远程方式：" :label-width="formLabelWidth">
                    <el-select v-model="remoteDeviceQo.type" placeholder="选择远程方式" style="width: 240px">
                        <el-option v-for="(item, i) in remoteDeviceType" :key="item.id" :label="item.name"
                            :value="item.id" @click="remoteTypeChanged(i)" />
                    </el-select>
                </el-form-item>
                <el-form-item label="ip：" :label-width="formLabelWidth" prop="ip">
                    <el-input v-model="remoteDeviceQo.ip" />
                </el-form-item>
                <el-form-item label="端口" :label-width="formLabelWidth" prop="port">
                    <el-input v-model="remoteDeviceQo.port" type="text" oninput="value=value.replace(/[^\d.]/g,'')"
                        maxlength="5" minlength="2" />
                </el-form-item>
                <el-form-item label="直播地址" :label-width="formLabelWidth">
                    <el-input v-model="remoteDeviceQo.liveUrl" />
                </el-form-item>

            </el-form>

            <template #footer>
                <div class="dialog-footer">
                    <el-button @click="addRemoteDeviceDialog = false">取消</el-button>
                    <el-button type="primary" @click="submitRemoteDeviceQo(ruleFormRef)">
                        添加
                    </el-button>
                </div>
            </template>
        </el-dialog>

        <el-dialog v-model="showItemDialog" title="设备详情" width="600">
            <el-form :model="showItem">
                <el-form-item label="名称：" :label-width="formLabelWidth">
                    <span>{{ showItem.name }}</span>
                </el-form-item>
                <el-form-item label="SNID：" :label-width="formLabelWidth">
                    <span>{{ showItem.snId }}</span>
                </el-form-item>
                <el-form-item label="远程方式：" :label-width="formLabelWidth">
                    <span>{{ showItem.typeName }}</span>
                </el-form-item>
                <el-form-item label="ip：" :label-width="formLabelWidth">
                    <span>{{ showItem.ip }}</span>
                </el-form-item>
                <el-form-item label="端口：" :label-width="formLabelWidth">
                    <span>{{ showItem.port }}</span>
                </el-form-item>
                <el-form-item label="操作地址：" :label-width="formLabelWidth">
                    <span v-if="showItem.type == 2">
                        <el-link v-if="showItem.remoteUrl != ''" :href="'/vnc/vnc.html' + showItem.remoteUrl"
                            target="_blank">
                            {{ '/vnc/vnc.html' + showItem.remoteUrl }}
                        </el-link>
                    </span>
                    <span v-else> {{ showItem.remoteUrl }}</span>
                </el-form-item>
            </el-form>

            <template #footer>
                <div class="dialog-footer">
                    <el-button type="primary" @click="closeShowItemDialog()">
                        确定
                    </el-button>
                </div>
            </template>
        </el-dialog>
    </div>
</template>

<script setup lang="ts">
import { onBeforeMount, onMounted, reactive, ref } from 'vue';
import { AllDevice } from '@/apis/device/device/allDevice.js';
import { ElMessage, type FormInstance, type FormRules } from 'element-plus';
import { RemoteType } from '@/apis/device/device/remoteType.js';
import { Plus, Delete, Edit, Refresh, View, InfoFilled } from '@element-plus/icons-vue';
import { AddRemoteDevice } from '@/apis/device/device/addRemoteDevice.js';
import { ChangeRemoteControl } from '@/apis/device/device/changeRemoteContrl.js';
import { DelRemoteDevice } from '@/apis/device/device/delRemoteDevice.js';
import { FreshDeviceStatus } from '@/apis/device/device/freshDeviceStatus.js';

interface device {
    id: number
    snId: String
    name: String
    collageId: number
    pId: number // pid != 0  才可以拥有以下字段
    type: number
    ip: String
    port: number
    liveUrl: String
    deviceState: number// 在线 离线  ping ip地址是否能ping通， 对应的端口是否开放
    remoteControl: number   // 开启关闭远程 0 off  1 on --展示当前的状态， 由控制器返回
    remoteUrl: String
    typeName: String
    singleDuration: number
    allowAppointment: number
}

interface deviceVo {
    id: number
    type: number   // 0 远程控制器  1 普通设备
    snId: String
    name: String
    version: String
    status: number
    remoteDevices: Array<device>
}

interface remoteDeviceType {
    id: String
    name: String
    port: number
}

const deviceList = ref<[deviceVo]>()

const getAllDevice = () => {
    AllDevice().then(res => {
        if (res.state == 200) {
            deviceList.value = res.data
        } else {
            ElMessage.error(res.message)
        }
    })
}

const remoteDeviceType = ref<[remoteDeviceType] | []>([])

const getRemoteDeviceType = () => {
    RemoteType().then(res => {
        if (res.state == 200) {
            remoteDeviceType.value = res.data
        } else {
            ElMessage.error(res.message)
        }
    })
}

const openAddRemoteDeviceDialog = (id) => {
    console.log(id)
    addRemoteDeviceDialog.value = true
    remoteDeviceQo.value.pId = id
}

const addRemoteDeviceDialog = ref(false)
const formLabelWidth = ref('100px')
const ruleFormRef = ref<FormInstance>()
const remoteDeviceQo = ref({
    snId: '',
    name: '',
    pId: null,
    type: null,
    ip: '',
    port: null,
    liveUrl: null,
})
const rules = reactive<FormRules>({
    name: [
        { required: true, message: '请输入名称', trigger: 'blur' }
    ],
    snId: [
        { required: true, message: '请输入SN号', trigger: 'blur' }
    ],
    ip: [
        { required: true, message: '请输入ip地址', trigger: 'blur' },
        {
            validator: function (rule, value, callback) {
                const reg = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/
                if ((!reg.test(value)) && value !== '') {
                    callback(new Error('请输入正确的IP地址'))
                } else {
                    callback()
                }
            }, trigger: 'blur'
        }
    ],
    port: [
        { required: true, message: '请输入端口号', trigger: 'blur' }
    ],
})
const remoteTypeChanged = (index) => {
    console.log(remoteDeviceType.value[index])
    remoteDeviceQo.value.port = remoteDeviceType.value[index].port
}
const cleanRemoteDeviceQo = () => {
    remoteDeviceQo.value.snId = ''
    remoteDeviceQo.value.name = ''
    remoteDeviceQo.value.pId = null
    remoteDeviceQo.value.type = null
    remoteDeviceQo.value.ip = ''
    remoteDeviceQo.value.port = null
    remoteDeviceQo.value.liveUrl = ''
}

const submitRemoteDeviceQo = async (formEl: FormInstance | undefined) => {
    if (!formEl) return
    await formEl.validate((valid, fields) => {
        if (valid) {
            AddRemoteDevice(JSON.parse(JSON.stringify(remoteDeviceQo.value)), remoteDeviceQo.value.pId).then(res => {
                if (res.state == 200) {
                    deviceList.value = res.data
                    addRemoteDeviceDialog.value = false
                    ElMessage.success("添加成功")
                } else {
                    ElMessage.error(res.message)
                }
            })
        } else {
            ElMessage.warning("表单提交错误")
        }
    })
}

const closeRemoteControl = (index, index1, id) => {
    if (deviceList.value[index].remoteDevices[index1].remoteControl == 1) {
        ChangeRemoteControl(id, 0).then(res => {
            if (res.state == 200) {
                deviceList.value[index].remoteDevices[index1] = res.data
                ElMessage.success("操作成功")
            } else {
                ElMessage.error(res.message)
            }
        })
    }

}

const openRemoteControl = (index, index1, id) => {
    if (deviceList.value[index].remoteDevices[index1].remoteControl == 0) {
        ChangeRemoteControl(id, 1).then(res => {
            if (res.state == 200) {
                deviceList.value[index].remoteDevices[index1] = res.data
                ElMessage.success("操作成功")
            } else {
                ElMessage.error(res.message)
            }
        })
    }
}

const delRemoteDevice = (id) => {
    DelRemoteDevice(id).then(res => {
        if (res.state == 200) {
            deviceList.value = res.data
            ElMessage.success("操作成功")
        } else {
            ElMessage.error(res.message)
        }
    })
}

const freshDeviceStaus = (index, index1, id) => {
    FreshDeviceStatus(id).then(res => {
        if (res.state == 200) {
            deviceList.value[index].remoteDevices[index1] = res.data
            ElMessage.success("操作成功")
        } else {
            ElMessage.error(res.message)
        }
    })
}

const showItem = ref()
const showItemDialog = ref(false)
const viewItem = (row) => {
    showItem.value = JSON.parse(JSON.stringify(row))
    showItemDialog.value = true
}
const closeShowItemDialog = () => {
    showItemDialog.value = false
}

onBeforeMount(() => {
    getAllDevice();
    getRemoteDeviceType();
})

</script>
<style scoped></style>