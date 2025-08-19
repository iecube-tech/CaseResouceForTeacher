<template>
  <div class="p-[18px]">
    <div class="h-full mb-4">
      <span class="text-xl">监测点管理 - 实验id: {{ bookId }}</span>
    </div>
    <div>
      <el-button type="primary" @click="openAddDialog">添加监测点</el-button>
      <el-table :data="tagList" style="width: 100%" class="mt-4">
        <el-table-column prop="id" label="ID" width="80"></el-table-column>
        <el-table-column
          prop="name"
          label="监测点名称"
          width="200"
        ></el-table-column>
        <el-table-column
          prop="description"
          label="描述"
          width="200"
        ></el-table-column>
        <el-table-column prop="targetName" label="课程目标"></el-table-column>
        <el-table-column label="操作" width="200">
          <template #default="{ row }">
            <el-button size="small" @click="openEditDialog(row)"
              >编辑</el-button
            >
            <el-button size="small" type="danger" @click="handleDelete(row)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>

    <!-- 添加/编辑对话框 -->
    <el-dialog
      :title="TargetTagDialog.title"
      v-model="TargetTagDialog.visible"
      width="800px"
    >
      <el-form
        :model="formData"
        ref="formRef"
        :rules="rules"
        label-width="100px"
      >
        <el-form-item label="课程目标" prop="targetId">
          <el-select v-model="formData.targetId" style="width: 100%">
            <el-option
              v-for="item in bookTargetList"
              :key="item.id"
              :label="item.name"
              :value="item.id"
              :title="item.name"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="监测点名称" prop="name">
          <el-input v-model="formData.name" placeholder="监测点名称"></el-input>
        </el-form-item>
        <el-form-item label="能力">
          <el-input v-model="formData.ability" placeholder="能力"></el-input>
        </el-form-item>
        <el-form-item label="描述" prop="description">
          <el-input
            v-model="formData.description"
            placeholder="监测点描述"
          ></el-input>
        </el-form-item>
      </el-form>
      <template #footer>
        <el-button @click="TargetTagDialog.visible = false">取消</el-button>
        <el-button type="primary" @click="saveTag">确定</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import {
  getBookTags,
  addBookTag,
  updateBookTag,
  deleteBookTag,
  getBookTarget,
} from "@/apis/embV4";

import { cloneDeep } from "lodash";

const route = useRoute();

const bookId = ref(route.params.bookId);

const bookTargetList = ref([]);

// 监测点增删改查
const tagList = ref([]);

const TargetTagDialog = ref({
  title: "",
  visible: false,
  isEdit: false,
});

const isEdit = ref(false);

const formRef = ref(null);

const formData = ref({
  id: null,
  bookId: bookId.value,
  targetId: null,
  name: "",
  ability: "",
  description: "",
  style: "",
  config: "",
  payload: "",
});

const setDefaultFormData = () => {
  formData.value = {
    id: null,
    bookId: bookId.value,
    targetId: null,
    name: "",
    ability: "",
    description: "",
    style: "",
    config: "",
    payload: "",
  };
};

const rules = ref({
  name: [{ required: true, message: "请输入监测点名称", trigger: "blur" }],
  targetId: [{ required: true, message: "请选择监测点目标", trigger: "blur" }],
  ability: [{ required: false, message: "请输入监测点能力", trigger: "blur" }],
  description: [
    { required: false, message: "请输入监测点描述", trigger: "blur" },
  ],
});

// 获取监测点列表
const initList = () => {
  getBookTags(bookId.value).then((res) => {
    if (res.state == 200) {
      tagList.value = res.data;
    } else {
      ElMessage.error(res.message);
    }
  });
};

// 添加监测点
const openAddDialog = () => {
  TargetTagDialog.value.title = "添加监测点";
  TargetTagDialog.value.isEdit = false;
  TargetTagDialog.value.visible = true;
};

// 编辑监测点
const openEditDialog = (row) => {
  TargetTagDialog.value.title = "编辑监测点";
  TargetTagDialog.value.isEdit = true;
  TargetTagDialog.value.visible = true;
  console.log(row);
  formData.value = cloneDeep(row);
};

const closeDialog = () => {
  formRef.value.clearValidate();
  TargetTagDialog.value.visible = false;
  TargetTagDialog.value.title = "";
  TargetTagDialog.value.isEdit = false;
  setDefaultFormData();
};

// 保存监测点
const saveTag = async () => {
  formRef.value.validate((v) => {
    if (TargetTagDialog.value.isEdit) {
      updateBookTag(formData.value).then((res) => {
        if (res.state == 200) {
          closeDialog();
          initList();
        } else {
          ElMessage.error(res.message);
        }
      });
    } else {
      addBookTag(formData.value).then((res) => {
        if (res.state == 200) {
          closeDialog();
          initList();
        } else {
          ElMessage.error(res.message);
        }
      });
    }
  });
};

// 删除监测点
const handleDelete = (row) => {
  ElMessageBox.confirm(`确定要删除该监测点【${row.name}】吗？`, "提示", {
    type: "warning",
  })
    .then(async () => {
      deleteBookTag(row.id).then((res) => {
        if (res.state == 200) {
          initList();
          ElMessage.success("删除成功");
        } else {
          ElMessage.error(res.message);
        }
      });
    })
    .catch(() => {
      // 取消删除
    });
};

const initBookTargetList = () => {
  getBookTarget(bookId.value).then((res) => {
    if (res.state == 200) {
      console.log(res.data);
      bookTargetList.value = res.data.targetList;
    } else {
      ElMessage.error(res.message);
    }
  });
};

onMounted(() => {
  initList();
  initBookTargetList();
});
</script>

<style scoped></style>
