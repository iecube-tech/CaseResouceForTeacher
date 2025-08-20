<template>
  <div class="p-[18px]">
    <div class="mb-4">
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
      <XComponet :labId="labId" :item="item" :compTemplateList="compTemplateList" @updateCompData="initTemplateList"></XComponet>
      
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

import { createNewLabComponent, getNewThCell } from "@/apis/embV4/interfaces"

import {
  getLabComponentTemplates,
  createLabComponentTemplate,
  updateLabComponentTemplate,
  deleteLabComponentTemplate,
} from "@/apis/embV4/index";
import XComponet from "./components/xComponet.vue";

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
