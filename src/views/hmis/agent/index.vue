<template>
  <div class="p-2">
    <transition :enter-active-class="proxy?.animate.searchAnimate.enter" :leave-active-class="proxy?.animate.searchAnimate.leave">
      <div class="search" v-show="showSearch">
        <el-form :model="queryParams" ref="queryFormRef" :inline="true" label-width="68px">
          <el-form-item label="主键ID" prop="agentId">
            <el-input v-model="queryParams.agentId" placeholder="请输入主键ID" clearable style="width: 240px" @keyup.enter="handleQuery" />
          </el-form-item>
          <el-form-item label="编号" prop="agentCode">
            <el-input v-model="queryParams.agentCode" placeholder="请输入编号" clearable style="width: 240px" @keyup.enter="handleQuery" />
          </el-form-item>
          <el-form-item label="名字" prop="agentName">
            <el-input v-model="queryParams.agentName" placeholder="请输入名字" clearable style="width: 240px" @keyup.enter="handleQuery" />
          </el-form-item>
          <el-form-item label="结算币种" prop="settlementCurrency">
            <el-input v-model="queryParams.settlementCurrency" placeholder="请输入结算币种" clearable style="width: 240px" @keyup.enter="handleQuery" />
          </el-form-item>
          <el-form-item label="联系电话" prop="phone">
            <el-input v-model="queryParams.phone" placeholder="请输入联系电话" clearable style="width: 240px" @keyup.enter="handleQuery" />
          </el-form-item>
          <el-form-item label="联系人" prop="contact">
            <el-input v-model="queryParams.contact" placeholder="请输入联系人" clearable style="width: 240px" @keyup.enter="handleQuery" />
          </el-form-item>
          <el-form-item label="对账日" prop="settlementDay">
            <el-input v-model="queryParams.settlementDay" placeholder="请输入对账日" clearable style="width: 240px" @keyup.enter="handleQuery" />
          </el-form-item>
          <el-form-item label="信用额度" prop="lineOfCredit">
            <el-input v-model="queryParams.lineOfCredit" placeholder="请输入信用额度" clearable style="width: 240px" @keyup.enter="handleQuery" />
          </el-form-item>
          <el-form-item label="商家编码" prop="merchantCode">
            <el-input v-model="queryParams.merchantCode" placeholder="请输入商家编码" clearable style="width: 240px" @keyup.enter="handleQuery" />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" icon="Search" @click="handleQuery">搜索</el-button>
            <el-button icon="Refresh" @click="resetQuery">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </transition>

    <el-card shadow="never">
      <template #header>
        <el-row :gutter="10" class="mb8">
          <el-col :span="1.5">
            <el-button type="primary" plain icon="Plus" @click="handleAdd" v-hasPermi="['hmis:agent:add']">新增</el-button>
          </el-col>
          <el-col :span="1.5">
            <el-button type="success" plain icon="Edit" :disabled="single" @click="handleUpdate()" v-hasPermi="['hmis:agent:edit']">修改</el-button>
          </el-col>
          <el-col :span="1.5">
            <el-button type="danger" plain icon="Delete" :disabled="multiple" @click="handleDelete()" v-hasPermi="['hmis:agent:remove']">删除</el-button>
          </el-col>
          <el-col :span="1.5">
            <el-button type="warning" plain icon="Download" @click="handleExport" v-hasPermi="['hmis:agent:export']">导出</el-button>
          </el-col>
          <right-toolbar v-model:showSearch="showSearch" @queryTable="getList"></right-toolbar>
        </el-row>
      </template>

      <el-table v-loading="loading" :data="agentList" @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="55" align="center" />
        <el-table-column label="主键ID" align="center" prop="agentId" v-if="true" />
        <el-table-column label="编号" align="center" prop="agentCode" />
        <el-table-column label="名字" align="center" prop="agentName" />
        <el-table-column label="结算币种" align="center" prop="settlementCurrency" />
        <el-table-column label="结算方式" align="center" prop="settlementType" />
        <el-table-column label="联系电话" align="center" prop="phone" />
        <el-table-column label="联系人" align="center" prop="contact" />
        <el-table-column label="对账日" align="center" prop="settlementDay" />
        <el-table-column label="信用额度" align="center" prop="lineOfCredit" />
        <el-table-column label="商家编码" align="center" prop="merchantCode" />
        <el-table-column label="操作" align="center" class-name="small-padding fixed-width">
          <template #default="scope">
            <el-tooltip content="修改" placement="top">
              <el-button link type="primary" icon="Edit" @click="handleUpdate(scope.row)" v-hasPermi="['hmis:agent:edit']"></el-button>
            </el-tooltip>
            <el-tooltip content="删除" placement="top">
              <el-button link type="primary" icon="Delete" @click="handleDelete(scope.row)" v-hasPermi="['hmis:agent:remove']"></el-button>
            </el-tooltip>
          </template>
        </el-table-column>
      </el-table>

      <pagination
          v-show="total>0"
          :total="total"
          v-model:page="queryParams.pageNum"
          v-model:limit="queryParams.pageSize"
          @pagination="getList"
      />
    </el-card>
    <!-- 添加或修改分销商管理对话框 -->
    <el-dialog :title="dialog.title" v-model="dialog.visible" width="500px" append-to-body>
      <el-form ref="agentFormRef" :model="form" :rules="rules" label-width="80px">
        <el-form-item label="编号" prop="agentCode">
          <el-input v-model="form.agentCode" placeholder="请输入编号" />
        </el-form-item>
        <el-form-item label="名字" prop="agentName">
          <el-input v-model="form.agentName" placeholder="请输入名字" />
        </el-form-item>
        <el-form-item label="结算币种" prop="settlementCurrency">
          <el-input v-model="form.settlementCurrency" placeholder="请输入结算币种" />
        </el-form-item>
        <el-form-item label="联系电话" prop="phone">
          <el-input v-model="form.phone" placeholder="请输入联系电话" />
        </el-form-item>
        <el-form-item label="联系人" prop="contact">
          <el-input v-model="form.contact" placeholder="请输入联系人" />
        </el-form-item>
        <el-form-item label="对账日" prop="settlementDay">
          <el-input v-model="form.settlementDay" placeholder="请输入对账日" />
        </el-form-item>
        <el-form-item label="信用额度" prop="lineOfCredit">
          <el-input v-model="form.lineOfCredit" placeholder="请输入信用额度" />
        </el-form-item>
        <el-form-item label="商家编码" prop="merchantCode">
          <el-input v-model="form.merchantCode" placeholder="请输入商家编码" />
        </el-form-item>
      </el-form>
      <template #footer>
        <div class="dialog-footer">
          <el-button :loading="buttonLoading" type="primary" @click="submitForm">确 定</el-button>
          <el-button @click="cancel">取 消</el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script setup name="Agent" lang="ts">
import { listAgent, getAgent, delAgent, addAgent, updateAgent } from '@/api/hmis/agent';
import { AgentVO, AgentQuery, AgentForm } from '@/api/hmis/agent/types';

const { proxy } = getCurrentInstance() as ComponentInternalInstance;

const agentList = ref<AgentVO[]>([]);
const buttonLoading = ref(false);
const loading = ref(true);
const showSearch = ref(true);
const ids = ref<Array<string | number>>([]);
const single = ref(true);
const multiple = ref(true);
const total = ref(0);

const queryFormRef = ref<ElFormInstance>();
const agentFormRef = ref<ElFormInstance>();

const dialog = reactive<DialogOption>({
  visible: false,
  title: ''
});

const initFormData: AgentForm = {
  agentId: undefined,
  agentCode: undefined,
  agentName: undefined,
  settlementCurrency: undefined,
  settlementType: undefined,
  phone: undefined,
  contact: undefined,
  settlementDay: undefined,
  lineOfCredit: undefined,
  merchantCode: undefined
}
const data = reactive<PageData<AgentForm, AgentQuery>>({
  form: {...initFormData},
  queryParams: {
    pageNum: 1,
    pageSize: 10,
    agentId: undefined,
    agentCode: undefined,
    agentName: undefined,
    settlementCurrency: undefined,
    settlementType: undefined,
    phone: undefined,
    contact: undefined,
    settlementDay: undefined,
    lineOfCredit: undefined,
    merchantCode: undefined,
    params: {
    }
  },
  rules: {
    agentId: [
      { required: true, message: "主键ID不能为空", trigger: "blur" }
    ],
    agentCode: [
      { required: true, message: "编号不能为空", trigger: "blur" }
    ],
    agentName: [
      { required: true, message: "名字不能为空", trigger: "blur" }
    ],
    settlementCurrency: [
      { required: true, message: "结算币种不能为空", trigger: "blur" }
    ],
    settlementType: [
      { required: true, message: "结算方式不能为空", trigger: "change" }
    ],
    phone: [
      { required: true, message: "联系电话不能为空", trigger: "blur" }
    ],
    contact: [
      { required: true, message: "联系人不能为空", trigger: "blur" }
    ],
    settlementDay: [
      { required: true, message: "对账日不能为空", trigger: "blur" }
    ],
    lineOfCredit: [
      { required: true, message: "信用额度不能为空", trigger: "blur" }
    ],
    merchantCode: [
      { required: true, message: "商家编码不能为空", trigger: "blur" }
    ]
  }
});

const { queryParams, form, rules } = toRefs(data);

/** 查询分销商管理列表 */
const getList = async () => {
  loading.value = true;
  const res = await listAgent(queryParams.value);
  agentList.value = res.rows;
  total.value = res.total;
  loading.value = false;
}

/** 取消按钮 */
const cancel = () => {
  reset();
  dialog.visible = false;
}

/** 表单重置 */
const reset = () => {
  form.value = {...initFormData};
  agentFormRef.value?.resetFields();
}

/** 搜索按钮操作 */
const handleQuery = () => {
  queryParams.value.pageNum = 1;
  getList();
}

/** 重置按钮操作 */
const resetQuery = () => {
  queryFormRef.value?.resetFields();
  handleQuery();
}

/** 多选框选中数据 */
const handleSelectionChange = (selection: AgentVO[]) => {
  ids.value = selection.map(item => item.agentId);
  single.value = selection.length != 1;
  multiple.value = !selection.length;
}

/** 新增按钮操作 */
const handleAdd = () => {
  reset();
  dialog.visible = true;
  dialog.title = "添加分销商管理";
}

/** 修改按钮操作 */
const handleUpdate = async (row?: AgentVO) => {
  reset();
  const _agentId = row?.agentId || ids.value[0]
  const res = await getAgent(_agentId);
  Object.assign(form.value, res.data);
  dialog.visible = true;
  dialog.title = "修改分销商管理";
}

/** 提交按钮 */
const submitForm = () => {
  agentFormRef.value?.validate(async (valid: boolean) => {
    if (valid) {
      buttonLoading.value = true;
      if (form.value.agentId) {
        await updateAgent(form.value).finally(() =>  buttonLoading.value = false);
      } else {
        await addAgent(form.value).finally(() =>  buttonLoading.value = false);
      }
      proxy?.$modal.msgSuccess("修改成功");
      dialog.visible = false;
      await getList();
    }
  });
}

/** 删除按钮操作 */
const handleDelete = async (row?: AgentVO) => {
  const _agentIds = row?.agentId || ids.value;
  await proxy?.$modal.confirm('是否确认删除分销商管理编号为"' + _agentIds + '"的数据项？').finally(() => loading.value = false);
  await delAgent(_agentIds);
  proxy?.$modal.msgSuccess("删除成功");
  await getList();
}

/** 导出按钮操作 */
const handleExport = () => {
  proxy?.download('hmis/agent/export', {
    ...queryParams.value
  }, `agent_${new Date().getTime()}.xlsx`)
}

onMounted(() => {
  getList();
});
</script>
