<template>
  <div class="p-[18px]">
    <div class="h-full mb-4">
      <span> 实验模板组件管理 - 实验id: {{ labId }} </span>
    </div>
    <el-affix :offset="50">
      <el-button size="small" type="primary" @click="openComponentDrawer()">添加组件</el-button>
    </el-affix>
    <div class="mb-4"></div>

    <div v-for="(item, k) in compTemplateList" :key="k" class="mb-2">
      <div class="mb-2">
        <el-button size="small" @click="openComponentDrawer(item)">编辑</el-button>
        <el-button size="small" type="danger" @click="del(item)">删除</el-button>
      </div>
      
      <div>
        {{ item.name }} -- {{ item.type }}
      </div>
      <device v-if="item.type == 'DEVICE'" :payload="JSON.parse(item.payload)" ></device>
      <group v-if="item.type == 'GROUP'" :payload="JSON.parse(item.payload)" ></group>
      <content v-if="item.type == 'TEXT'" :payload="JSON.parse(item.payload)" ></content>
      <xvideo v-if="item.type == 'VIDEO'" :payload="JSON.parse(item.payload)"></xvideo>
      <qa v-if="item.type == 'QA'" :payload="JSON.parse(item.payload)"></qa>
      <multipleChoice v-if="item.type == 'MULTIPLECHOICE'" :payload="JSON.parse(item.payload)"></multipleChoice>
      <choice v-if="item.type == 'CHOICE'" :payload="JSON.parse(item.payload)"></choice>
      <circuit v-if="item.type == 'CIRCUIT'" :payload="JSON.parse(item.payload)"></circuit>
      <range v-if="item.type == 'RANGE'" :payload="JSON.parse(item.payload)"></range>
      <emdV4Table v-if="item.type == 'TABLE'"
        :labId="labId"
        :compData="item"
        :payload="JSON.parse(item.payload)"
        :payloadList="compTemplateList.filter(item => item.type == 'RANGE')"
        @updateCompData="initTemplateList"
        ></emdV4Table>
      <tracneline v-if="item.type == 'TRACELINE'"
        :labId="labId"
        :compData="item"
        :payload="JSON.parse(item.payload)"
        :payloadList="compTemplateList.filter(item => item.type == 'RANGE')"
        @updateCompData="initTemplateList"
        ></tracneline>
      
    </div>

    <el-drawer
      v-model="componentDrawer.visible"
      :show-close="false"
      append-to-body
      size="60%"
    >
      <template #header="{ close, titleId, titleClass }">
        <div class="text-3xl">{{ componentDrawer.title }}</div>
        <button @click="handleClose">
          <font-awesome-icon icon="fa-solid fa-xmark" />
        </button>
      </template>
      <componentDesign
        v-if="componentDrawer.compData"
        :compData="componentDrawer.compData"
        :isEdit="componentDrawer.isEdit"
        :bookId="bookId"
        :labId="labId"
        @submit="handleSubmit"
      />
    </el-drawer>
  </div>
</template>

<script setup>
import { cloneDeep } from "lodash"

import '@/styles/stuTask_emb_v4/stuLab.css'

import componentDesign from "./components/componentDesign.vue"
import device from "./block/device.vue"
import group from "./block/group.vue"
import content from "./block/content.vue"
import xvideo from './block/xvideo.vue'
import qa from './block/qa.vue'
import multipleChoice from "./block/multipleChoice.vue"
import choice from './block/choice.vue'
import circuit from './block/circuit.vue'
import range from './block/range.vue'
import emdV4Table from './block/emdV4Table.vue'
import tracneline from './block/tracneline.vue'

import { createNewLabComponent, getNewThCell } from "@/apis/embV4/interfaces"

import {
  getLabComponentTemplates,
  createLabComponentTemplate,
  updateLabComponentTemplate,
  deleteLabComponentTemplate,
} from "@/apis/embV4/index";

const route = useRoute();
const bookId = ref(route.params.bookId);
const labId = ref(route.params.labId);

const componentDrawer = ref({
  visible: false,
  isEdit: false,
  title: "添加组件",
  compData: null,
});

const compTemplateList = ref([]);
const openComponentDrawer = (item) => {
  let isEdit = item !== undefined;
  componentDrawer.value.title = isEdit ? "编辑组件" : "添加组件";
  componentDrawer.value.isEdit = isEdit;

  if (!componentDrawer.value.isEdit) {
    componentDrawer.value.compData = createNewLabComponent();
  } else {
    let tmp = cloneDeep(item);
    tmp.payload = JSON.parse(tmp.payload);
    componentDrawer.value.compData = tmp;
  }

  componentDrawer.value.visible = true;
};

const handleClose = () => {
  componentDrawer.value.visible = false;
  componentDrawer.value.isEdit = false;
  componentDrawer.value.title = "";
  componentDrawer.value.compData = null;
};

const handleSubmit = () => {
  initTemplateList();
  handleClose();
};

const del = (item) => {
  ElMessageBox.confirm(`确定要删除该组件【${item.name}】吗？`, "提示", {
    type: "warning",
  }).then(async () => {
    deleteLabComponentTemplate(labId.value, item.id).then((res) => {
      if (res.state == 200) {
        initTemplateList();
        ElMessage.success("删除成功");
      } else {
        ElMessage.error(res.message);
      }
    });
  });
};

const initTemplateList = () => {
  getLabComponentTemplates(labId.value).then((res) => {
    if (res.state == 200) {
      let list = res.data || [];
      list.forEach((_) => {
        dealWithTemplateProp(_);
      });
      compTemplateList.value = list;
      compTemplateList.value.unshift();
      // console.log(compTemplateList.value);
    } else {
      ElMessage.error(res.message);
    }
  });
};

const dealWithTemplateProp = (item) => {
  item.id = item.componentId;
};

onMounted(() => {
  initTemplateList();
});
</script>

<style scoped></style>
