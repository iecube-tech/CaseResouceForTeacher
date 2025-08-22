<template>
  <div class="p-[18px]">
    <div class="h-full mb-4">
      <span> 实验模板步骤管理 - 实验id: {{ labId }} - 实验步骤 blockId: {{ blockId }} </span>
    </div>
    <el-affix :offset="50">
      <el-button size="small" type="primary" @click="openAddTmpDialog">添加模板</el-button>
    </el-affix>
    <div class="mb-4"></div>

    <div v-for="(item, k) in blockComponentList" :key="k" class="mb-2">
      <div class="mb-2">
        <el-popover title="排序" ref="orderPopRef">
          <template #reference>
            <el-button size="small">排序</el-button>
          </template>
          <div>
            <el-input v-model.number="item.order"></el-input>
            <div class="flex justify-end mt-2">
              <el-button link size="small" @click="closeOrder(k)">取消</el-button>
              <el-button size="small" type="primary" @click="updateOrder(k)">确定</el-button>
            </div>
          </div>
        </el-popover>
        <el-popconfirm width="200px" title="确认删除这个组件吗?" confirm-button-text="确定" cancel-button-text="取消"
          @confirm="handleDelBlockComponent(item.id)">
          <template #reference>
            <el-button size="small" type="danger">删除</el-button>
          </template>
        </el-popconfirm>
      </div>

      <div class="mb-2">
        {{ item.labComponentVo.name }} -- {{ getTypeLabel(item.labComponentVo.type) }} -- {{ getStageLabel(item.labComponentVo.stage) }}
      </div>
      <XComponet :labId="labId" :item="item.labComponentVo"></XComponet>
    </div>

    <el-dialog v-model="tmpDialog.visible" :title="tmpDialog.title">
      <el-tabs v-model="activeTab">
        <el-tab-pane v-for="(classifyTmps, k) in classifyTemplateMap" :label="getTypeLabel(k)" :name="k">
          <el-table :data="classifyTmps">
            <el-table-column prop="name"></el-table-column>
            <el-table-column prop="stage">
              <template v-slot="scope">
                {{ getStageLabel(scope.row.stage) }}
              </template>
            </el-table-column>
            <el-table-column width="100px">
              <template #default="{ row }">
                <el-button size="small" @click="addTemplate(row)">添加</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
      </el-tabs>
    </el-dialog>

  </div>
</template>

<script setup>
import { getBlockComponents, addBlockComponent, deleteBlockComponent, updateBlockComponentOrder, getLabComponentTemplates } from '@/apis/embV4'
import { getTypeLabel, getStageLabel } from '@/apis/embV4/interfaces'
import { _, cloneDeep } from 'lodash'
import XComponet from "./components/xComponet.vue";


const route = useRoute()
const blockId = ref(route.params.blockId)
const labId = ref(route.params.labId)

const tmpDialog = ref({
  visible: false,
  title: '添加组件模版',
})

const activeTab = ref('')

const blockComponentList = ref([])

const compTemplateList = ref([])
const classifyTemplateMap = ref({})

const orderPopRef = ref(null)

const updateOrder = (index) => {
  orderBlockComponentList()

  let reqlist = cloneDeep(blockComponentList.value)
  
  reqlist.forEach(compItem => {
    compItem.component = compItem.componentId
  })

  updateBlockComponentOrder(reqlist).then(res => {
    if (res.state == 200) {
      initBlockComponentList()
      closeOrder(index)
    }
  })
}

const closeOrder = (index) => {
  orderPopRef.value[index].hide()
}


const handleDelBlockComponent = (id) => {
  deleteBlockComponent(id).then(res => {
    if (res.state == 200) {
      initBlockComponentList()
    }
  })
}

const openAddTmpDialog = () => {
  tmpDialog.value.visible = true
}

const addTemplate = (row) => {
  addBlockComponent(blockId.value, row.id).then(res => {
    if (res.state == 200) {
      initBlockComponentList()
    }
  })
}


const initBlockComponentList = () => {
  getBlockComponents(blockId.value).then((res) => {
    if (res.state == 200) {
      let list = res.data || [];
      blockComponentList.value = list
      orderBlockComponentList()
    }
  });
}

const orderBlockComponentList = () => {
  let list = blockComponentList.value;
  list.sort((a, b) => Number.parseInt(a.order) - Number.parseInt(b.order))
  blockComponentList.value = list
}


const initTemplateList = () => {
  getLabComponentTemplates(labId.value).then((res) => {
    if (res.state == 200) {
      let list = res.data || [];
      list.forEach((item) => {
        dealWithTemplateProp(item);
      });
      compTemplateList.value = list;
      classifyTemplateMap.value = _.groupBy(list, "type")
      let keys = Object.keys(classifyTemplateMap.value)
      if (keys.length) {
        activeTab.value = keys[0]
      }
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
  initBlockComponentList();
})

</script>

<style scoped></style>