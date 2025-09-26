<template>
  <div class="bg-gray-50 min-h-screen">
    <header class="bg-white border-b border-l border-gray-200 sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <div class="flex items-center space-x-2">
            <el-button type="primary" @click="openComponentDrawer()">添加组件</el-button>
          </div>
          <div>
            <span> 实验模板组件管理 - 实验id: {{ labId }} </span>
          </div>
        </div>
      </div>
    </header>

    <div class="w-full h-full min-h-screen p-6 border-l">
      <div v-for="(item, k) in compTemplateList" :key="k" class="mb-4 border border-gray-200 bg-white">
        <div class="flex flex-row justify-between p-4 bg-gray-100 border border-gray-300">
          <div class="text-gray-500">
            <span class="font-medium"
              :class="item.stage == 0 ? 'text-blue-500' : item.stage == 1 ? 'text-green-500' : 'text-purple-500'">{{
                getStageLabel(item.stage) }}</span> --
            <span>{{ item.type }}</span> --
            <span>名称: {{ item.name }}</span> --
            <span v-show="item.needCalculate && item.totalScore > 0 ? true : false" class="text-green-500">
              记分: {{ item.needCalculate ? '是' : '否' }} -- 总分: {{ item.totalScore }} --
            </span> 
            <span :class="item.tag ? 'text-green-400' : 'text-red-400'">监测点: {{ item.tag ? getTagNameById(item.tag) : '无' }}</span>
          </div>
          <div>
            <el-button size="small" @click="openComponentDrawer(item)">编辑</el-button>
            <el-button size="small" type="danger" @click="del(item)">删除</el-button>
          </div>
        </div>

        <div class="p-8">
          <XComponet :labId="labId" :item="item" :compTemplateList="compTemplateList" class="ist-theam"
            @updateCompData="initTemplateList">
          </XComponet>
        </div>
      </div>
    </div>

    <el-drawer v-model="componentDrawer.visible" :show-close="false" append-to-body size="60%">
      <template #header="{ close, titleId, titleClass }">
        <div class="text-3xl">{{ componentDrawer.title }}</div>
        <button @click="handleClose">
          <font-awesome-icon icon="fa-solid fa-xmark" />
        </button>
      </template>
      <componentDesign v-if="componentDrawer.compData" :compData="componentDrawer.compData"
        :isEdit="componentDrawer.isEdit" :bookId="bookId" :labId="labId" @submit="handleSubmit" />
    </el-drawer>
  </div>
</template>

<script setup>
import { cloneDeep } from "lodash"

import '@/styles/stuTask_emb_v4/stuLab.css'

import componentDesign from "./components/componentDesign.vue"

import { createNewLabComponent, getNewThCell, getStageLabel, getNewStatics } from "@/apis/embV4/interfaces"

import {
  getLabComponentTemplates,
  createLabComponentTemplate,
  updateLabComponentTemplate,
  deleteLabComponentTemplate,
  getBookTags,
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

    // 适配历史数据
    if (!tmp.payload.hasOwnProperty("statics")) {
      tmp.payload.statics = getNewStatics();
    }
    console.log(tmp.payload)

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

// 获取监测点列表
const tagList = ref([]);

const initTagList = () => {
    getBookTags(bookId.value).then((res) => {
        if (res.state == 200) {
            tagList.value = res.data;
        } else {
            ElMessage.error(res.message);
        }
    });
};

const getTagNameById = (tagId) => {
  return tagList.value.find((item) => item.id == tagId).name;
};

initTagList();

onMounted(() => {
  initTemplateList();
});
</script>

<style scoped></style>
