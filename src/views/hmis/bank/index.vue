<template>
  <div class="p-2">
    <transition :enter-active-class="proxy?.animate.searchAnimate.enter" :leave-active-class="proxy?.animate.searchAnimate.leave">
      <div class="search" v-show="showSearch">
        <el-form :model="queryParams" ref="queryFormRef" :inline="true" label-width="68px">
          <el-form-item label="开户地" prop="address">
            <el-input v-model="queryParams.address" placeholder="请输入开户地" clearable style="width: 240px" @keyup.enter="handleQuery" />
          </el-form-item>
          <el-form-item label="开户人" prop="name">
            <el-input v-model="queryParams.name" placeholder="请输入开户人" clearable style="width: 240px" @keyup.enter="handleQuery" />
          </el-form-item>
          <el-form-item label="银行卡号" prop="cardNumber">
            <el-input v-model="queryParams.cardNumber" placeholder="请输入银行卡号" clearable style="width: 240px" @keyup.enter="handleQuery" />
          </el-form-item>
          <el-form-item label="分销商ID" prop="agentId">
            <el-input v-model="queryParams.agentId" placeholder="请输入分销商ID" clearable style="width: 240px" @keyup.enter="handleQuery" />
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
            <el-button type="primary" plain icon="Plus" @click="handleAdd" v-hasPermi="['hmis:bank:add']">新增</el-button>
          </el-col>
          <el-col :span="1.5">
            <el-button type="success" plain icon="Edit" :disabled="single" @click="handleUpdate()" v-hasPermi="['hmis:bank:edit']">修改</el-button>
          </el-col>
          <el-col :span="1.5">
            <el-button type="danger" plain icon="Delete" :disabled="multiple" @click="handleDelete()" v-hasPermi="['hmis:bank:remove']">删除</el-button>
          </el-col>
          <el-col :span="1.5">
            <el-button type="warning" plain icon="Download" @click="handleExport" v-hasPermi="['hmis:bank:export']">导出</el-button>
          </el-col>
          <right-toolbar v-model:showSearch="showSearch" @queryTable="getList"></right-toolbar>
        </el-row>
      </template>

      <el-table v-loading="loading" :data="bankList" @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="55" align="center" />
        <el-table-column label="主键ID" align="center" prop="cardId" v-if="true" />
        <el-table-column label="开户地" align="center" prop="address" />
        <el-table-column label="开户人" align="center" prop="name" />
        <el-table-column label="银行卡号" align="center" prop="cardNumber" />
        <el-table-column label="分销商ID" align="center" prop="agentId" />
        <el-table-column label="操作" align="center" class-name="small-padding fixed-width">
          <template #default="scope">
            <el-tooltip content="修改" placement="top">
              <el-button link type="primary" icon="Edit" @click="handleUpdate(scope.row)" v-hasPermi="['hmis:bank:edit']"></el-button>
            </el-tooltip>
            <el-tooltip content="删除" placement="top">
              <el-button link type="primary" icon="Delete" @click="handleDelete(scope.row)" v-hasPermi="['hmis:bank:remove']"></el-button>
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
    <!-- 添加或修改分销商银行卡对话框 -->
    <el-dialog :title="dialog.title" v-model="dialog.visible" width="500px" append-to-body>
      <el-form ref="bankFormRef" :model="form" :rules="rules" label-width="80px">
        <el-form-item label="开户地" prop="address">
          <el-input v-model="form.address" placeholder="请输入开户地" />
        </el-form-item>
        <el-form-item label="开户人" prop="name">
          <el-input v-model="form.name" placeholder="请输入开户人" />
        </el-form-item>
        <el-form-item label="银行卡号" prop="cardNumber">
          <el-input v-model="form.cardNumber" placeholder="请输入银行卡号" />
        </el-form-item>
        <el-form-item label="分销商ID" prop="agentId">
          <el-input v-model="form.agentId" placeholder="请输入分销商ID" />
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

<script setup name="Bank" lang="ts">
import { listBank, getBank, delBank, addBank, updateBank } from '@/api/hmis/bank';
import { BankVO, BankQuery, BankForm } from '@/api/hmis/bank/types';

const { proxy } = getCurrentInstance() as ComponentInternalInstance;

const bankList = ref<BankVO[]>([]);
const buttonLoading = ref(false);
const loading = ref(true);
const showSearch = ref(true);
const ids = ref<Array<string | number>>([]);
const single = ref(true);
const multiple = ref(true);
const total = ref(0);

const queryFormRef = ref<ElFormInstance>();
const bankFormRef = ref<ElFormInstance>();

const dialog = reactive<DialogOption>({
  visible: false,
  title: ''
});

const initFormData: BankForm = {
  cardId: undefined,
  address: undefined,
  name: undefined,
  cardNumber: undefined,
  agentId: undefined,
}
const data = reactive<PageData<BankForm, BankQuery>>({
  form: {...initFormData},
  queryParams: {
    pageNum: 1,
    pageSize: 10,
    address: undefined,
    name: undefined,
    cardNumber: undefined,
    agentId: undefined,
    params: {
    }
  },
  rules: {
    cardId: [
      { required: true, message: "主键ID不能为空", trigger: "blur" }
    ],
    address: [
      { required: true, message: "开户地不能为空", trigger: "blur" }
    ],
    name: [
      { required: true, message: "开户人不能为空", trigger: "blur" }
    ],
    cardNumber: [
      { required: true, message: "银行卡号不能为空", trigger: "blur" }
    ],
    agentId: [
      { required: true, message: "分销商ID不能为空", trigger: "blur" }
    ],
  }
});

const { queryParams, form, rules } = toRefs(data);

/** 查询分销商银行卡列表 */
const getList = async () => {
  loading.value = true;
  const res = await listBank(queryParams.value);
  bankList.value = res.rows;
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
  bankFormRef.value?.resetFields();
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
const handleSelectionChange = (selection: BankVO[]) => {
  ids.value = selection.map(item => item.cardId);
  single.value = selection.length != 1;
  multiple.value = !selection.length;
}

/** 新增按钮操作 */
const handleAdd = () => {
  reset();
  dialog.visible = true;
  dialog.title = "添加分销商银行卡";
}

/** 修改按钮操作 */
const handleUpdate = async (row?: BankVO) => {
  reset();
  const _cardId = row?.cardId || ids.value[0]
  const res = await getBank(_cardId);
  Object.assign(form.value, res.data);
  dialog.visible = true;
  dialog.title = "修改分销商银行卡";
}

/** 提交按钮 */
const submitForm = () => {
  bankFormRef.value?.validate(async (valid: boolean) => {
    if (valid) {
      buttonLoading.value = true;
      if (form.value.cardId) {
        await updateBank(form.value).finally(() =>  buttonLoading.value = false);
      } else {
        await addBank(form.value).finally(() =>  buttonLoading.value = false);
      }
      proxy?.$modal.msgSuccess("修改成功");
      dialog.visible = false;
      await getList();
    }
  });
}

/** 删除按钮操作 */
const handleDelete = async (row?: BankVO) => {
  const _cardIds = row?.cardId || ids.value;
  await proxy?.$modal.confirm('是否确认删除分销商银行卡编号为"' + _cardIds + '"的数据项？').finally(() => loading.value = false);
  await delBank(_cardIds);
  proxy?.$modal.msgSuccess("删除成功");
  await getList();
}

/** 导出按钮操作 */
const handleExport = () => {
  proxy?.download('hmis/bank/export', {
    ...queryParams.value
  }, `bank_${new Date().getTime()}.xlsx`)
}

onMounted(() => {
  getList();
});
</script>
