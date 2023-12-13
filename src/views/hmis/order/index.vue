<template>
  <div class="p-2">
    <transition :enter-active-class="proxy?.animate.searchAnimate.enter" :leave-active-class="proxy?.animate.searchAnimate.leave">
      <div class="search" v-show="showSearch">
        <el-form :model="queryParams" ref="queryFormRef" :inline="true" label-width="68px">
          <el-form-item label="订单ID" prop="orderId">
            <el-input v-model="queryParams.orderId" placeholder="请输入订单ID" clearable style="width: 240px" @keyup.enter="handleQuery" />
          </el-form-item>
          <el-form-item label="订单编号" prop="orderNo">
            <el-input v-model="queryParams.orderNo" placeholder="请输入订单编号" clearable style="width: 240px" @keyup.enter="handleQuery" />
          </el-form-item>
          <el-form-item label="渠道订单号" prop="channelNo">
            <el-input v-model="queryParams.channelNo" placeholder="请输入渠道订单号" clearable style="width: 240px" @keyup.enter="handleQuery" />
          </el-form-item>
          <el-form-item label="供货单编号" prop="supplyOrderNo">
            <el-input v-model="queryParams.supplyOrderNo" placeholder="请输入供货单编号" clearable style="width: 240px" @keyup.enter="handleQuery" />
          </el-form-item>
          <el-form-item label="跟单员" prop="processors">
            <el-input v-model="queryParams.processors" placeholder="请输入跟单员" clearable style="width: 240px" @keyup.enter="handleQuery" />
          </el-form-item>
          <el-form-item label="入住时间" prop="checkInTime">
            <el-date-picker clearable
              v-model="queryParams.checkInTime"
              type="date"
              value-format="YYYY-MM-DD"
              placeholder="请选择入住时间"
            />
          </el-form-item>
          <el-form-item label="离店时间" prop="checkOutTime">
            <el-date-picker clearable
              v-model="queryParams.checkOutTime"
              type="date"
              value-format="YYYY-MM-DD"
              placeholder="请选择离店时间"
            />
          </el-form-item>
          <el-form-item label="订单来源" prop="orderSource">
            <el-input v-model="queryParams.orderSource" placeholder="请输入订单来源" clearable style="width: 240px" @keyup.enter="handleQuery" />
          </el-form-item>
          <el-form-item label="客户备注" prop="guestRemark">
            <el-input v-model="queryParams.guestRemark" placeholder="请输入客户备注" clearable style="width: 240px" @keyup.enter="handleQuery" />
          </el-form-item>
          <el-form-item label="总售价" prop="totalSalePrice">
            <el-input v-model="queryParams.totalSalePrice" placeholder="请输入总售价" clearable style="width: 240px" @keyup.enter="handleQuery" />
          </el-form-item>
          <el-form-item label="总底价" prop="totalBasePrice">
            <el-input v-model="queryParams.totalBasePrice" placeholder="请输入总底价" clearable style="width: 240px" @keyup.enter="handleQuery" />
          </el-form-item>
          <el-form-item label="商家编码" prop="merchantCode">
            <el-input v-model="queryParams.merchantCode" placeholder="请输入商家编码" clearable style="width: 240px" @keyup.enter="handleQuery" />
          </el-form-item>
          <el-form-item label="创建人" prop="creator">
            <el-input v-model="queryParams.creator" placeholder="请输入创建人" clearable style="width: 240px" @keyup.enter="handleQuery" />
          </el-form-item>
          <el-form-item label="创建时间" prop="createTime">
            <el-date-picker clearable
              v-model="queryParams.createTime"
              type="date"
              value-format="YYYY-MM-DD"
              placeholder="请选择创建时间"
            />
          </el-form-item>
          <el-form-item label="修改人" prop="updateBy">
            <el-input v-model="queryParams.updateBy" placeholder="请输入修改人" clearable style="width: 240px" @keyup.enter="handleQuery" />
          </el-form-item>
          <el-form-item label="修改时间" prop="updateTime">
            <el-date-picker clearable
              v-model="queryParams.updateTime"
              type="date"
              value-format="YYYY-MM-DD"
              placeholder="请选择修改时间"
            />
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
            <el-button type="primary" plain icon="Plus" @click="handleAdd" v-hasPermi="['hmis:order:add']">新增</el-button>
          </el-col>
          <el-col :span="1.5">
            <el-button type="success" plain icon="Edit" :disabled="single" @click="handleUpdate()" v-hasPermi="['hmis:order:edit']">修改</el-button>
          </el-col>
          <el-col :span="1.5">
            <el-button type="danger" plain icon="Delete" :disabled="multiple" @click="handleDelete()" v-hasPermi="['hmis:order:remove']">删除</el-button>
          </el-col>
          <el-col :span="1.5">
            <el-button type="warning" plain icon="Download" @click="handleExport" v-hasPermi="['hmis:order:export']">导出</el-button>
          </el-col>
          <right-toolbar v-model:showSearch="showSearch" @queryTable="getList"></right-toolbar>
        </el-row>
      </template>

      <el-table v-loading="loading" :data="orderList" @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="55" align="center" />
        <el-table-column label="订单ID" align="center" prop="orderId" v-if="true" />
        <el-table-column label="订单编号" align="center" prop="orderNo" />
        <el-table-column label="渠道订单号" align="center" prop="channelNo" />
        <el-table-column label="供货单编号" align="center" prop="supplyOrderNo" />
        <el-table-column label="跟单员" align="center" prop="processors" />
        <el-table-column label="入住时间" align="center" prop="checkInTime" width="180">
          <template #default="scope">
            <span>{{ parseTime(scope.row.checkInTime, '{y}-{m}-{d}') }}</span>
          </template>
        </el-table-column>
        <el-table-column label="离店时间" align="center" prop="checkOutTime" width="180">
          <template #default="scope">
            <span>{{ parseTime(scope.row.checkOutTime, '{y}-{m}-{d}') }}</span>
          </template>
        </el-table-column>
        <el-table-column label="订单来源" align="center" prop="orderSource" />
        <el-table-column label="结算方式" align="center" prop="settlementType" />
        <el-table-column label="客户备注" align="center" prop="guestRemark" />
        <el-table-column label="总售价" align="center" prop="totalSalePrice" />
        <el-table-column label="总底价" align="center" prop="totalBasePrice" />
        <el-table-column label="订单状态" align="center" prop="orderStatus" />
        <el-table-column label="商家编码" align="center" prop="merchantCode" />
        <el-table-column label="创建人" align="center" prop="creator" />
        <el-table-column label="创建时间" align="center" prop="createTime" width="180">
          <template #default="scope">
            <span>{{ parseTime(scope.row.createTime, '{y}-{m}-{d}') }}</span>
          </template>
        </el-table-column>
        <el-table-column label="修改人" align="center" prop="updateBy" />
        <el-table-column label="修改时间" align="center" prop="updateTime" width="180">
          <template #default="scope">
            <span>{{ parseTime(scope.row.updateTime, '{y}-{m}-{d}') }}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作" align="center" class-name="small-padding fixed-width">
          <template #default="scope">
            <el-tooltip content="修改" placement="top">
              <el-button link type="primary" icon="Edit" @click="handleUpdate(scope.row)" v-hasPermi="['hmis:order:edit']"></el-button>
            </el-tooltip>
            <el-tooltip content="删除" placement="top">
              <el-button link type="primary" icon="Delete" @click="handleDelete(scope.row)" v-hasPermi="['hmis:order:remove']"></el-button>
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
    <!-- 添加或修改订单对话框 -->
    <el-dialog :title="dialog.title" v-model="dialog.visible" width="500px" append-to-body>
      <el-form ref="orderFormRef" :model="form" :rules="rules" label-width="80px">
        <el-form-item label="订单编号" prop="orderNo">
          <el-input v-model="form.orderNo" placeholder="请输入订单编号" />
        </el-form-item>
        <el-form-item label="渠道订单号" prop="channelNo">
          <el-input v-model="form.channelNo" placeholder="请输入渠道订单号" />
        </el-form-item>
        <el-form-item label="供货单编号" prop="supplyOrderNo">
          <el-input v-model="form.supplyOrderNo" placeholder="请输入供货单编号" />
        </el-form-item>
        <el-form-item label="跟单员" prop="processors">
          <el-input v-model="form.processors" placeholder="请输入跟单员" />
        </el-form-item>
        <el-form-item label="入住时间" prop="checkInTime">
          <el-date-picker clearable
            v-model="form.checkInTime"
            type="datetime"
            value-format="YYYY-MM-DD HH:mm:ss"
            placeholder="请选择入住时间">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="离店时间" prop="checkOutTime">
          <el-date-picker clearable
            v-model="form.checkOutTime"
            type="datetime"
            value-format="YYYY-MM-DD HH:mm:ss"
            placeholder="请选择离店时间">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="订单来源" prop="orderSource">
          <el-input v-model="form.orderSource" placeholder="请输入订单来源" />
        </el-form-item>
        <el-form-item label="客户备注" prop="guestRemark">
          <el-input v-model="form.guestRemark" placeholder="请输入客户备注" />
        </el-form-item>
        <el-form-item label="总售价" prop="totalSalePrice">
          <el-input v-model="form.totalSalePrice" placeholder="请输入总售价" />
        </el-form-item>
        <el-form-item label="总底价" prop="totalBasePrice">
          <el-input v-model="form.totalBasePrice" placeholder="请输入总底价" />
        </el-form-item>
        <el-form-item label="商家编码" prop="merchantCode">
          <el-input v-model="form.merchantCode" placeholder="请输入商家编码" />
        </el-form-item>
        <el-form-item label="修改人" prop="updateBy">
          <el-input v-model="form.updateBy" placeholder="请输入修改人" />
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

<script setup name="Order" lang="ts">
import { listOrder, getOrder, delOrder, addOrder, updateOrder } from '@/api/hmis/order';
import { OrderVO, OrderQuery, OrderForm } from '@/api/hmis/order/types';

const { proxy } = getCurrentInstance() as ComponentInternalInstance;

const orderList = ref<OrderVO[]>([]);
const buttonLoading = ref(false);
const loading = ref(true);
const showSearch = ref(true);
const ids = ref<Array<string | number>>([]);
const single = ref(true);
const multiple = ref(true);
const total = ref(0);

const queryFormRef = ref<ElFormInstance>();
const orderFormRef = ref<ElFormInstance>();

const dialog = reactive<DialogOption>({
  visible: false,
  title: ''
});

const initFormData: OrderForm = {
  orderId: undefined,
  orderNo: undefined,
  channelNo: undefined,
  supplyOrderNo: undefined,
  processors: undefined,
  checkInTime: undefined,
  checkOutTime: undefined,
  orderSource: undefined,
  settlementType: undefined,
  guestRemark: undefined,
  totalSalePrice: undefined,
  totalBasePrice: undefined,
  orderStatus: undefined,
  merchantCode: undefined,
  updateBy: undefined,
}
const data = reactive<PageData<OrderForm, OrderQuery>>({
  form: {...initFormData},
  queryParams: {
    pageNum: 1,
    pageSize: 10,
    orderId: undefined,
    orderNo: undefined,
    channelNo: undefined,
    supplyOrderNo: undefined,
    processors: undefined,
    checkInTime: undefined,
    checkOutTime: undefined,
    orderSource: undefined,
    settlementType: undefined,
    guestRemark: undefined,
    totalSalePrice: undefined,
    totalBasePrice: undefined,
    orderStatus: undefined,
    merchantCode: undefined,
    creator: undefined,
    createTime: undefined,
    updateBy: undefined,
    updateTime: undefined,
    params: {
    }
  },
  rules: {
  }
});

const { queryParams, form, rules } = toRefs(data);

/** 查询订单列表 */
const getList = async () => {
  loading.value = true;
  const res = await listOrder(queryParams.value);
  orderList.value = res.rows;
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
  orderFormRef.value?.resetFields();
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
const handleSelectionChange = (selection: OrderVO[]) => {
  ids.value = selection.map(item => item.orderId);
  single.value = selection.length != 1;
  multiple.value = !selection.length;
}

/** 新增按钮操作 */
const handleAdd = () => {
  reset();
  dialog.visible = true;
  dialog.title = "添加订单";
}

/** 修改按钮操作 */
const handleUpdate = async (row?: OrderVO) => {
  reset();
  const _orderId = row?.orderId || ids.value[0]
  const res = await getOrder(_orderId);
  Object.assign(form.value, res.data);
  dialog.visible = true;
  dialog.title = "修改订单";
}

/** 提交按钮 */
const submitForm = () => {
  orderFormRef.value?.validate(async (valid: boolean) => {
    if (valid) {
      buttonLoading.value = true;
      if (form.value.orderId) {
        await updateOrder(form.value).finally(() =>  buttonLoading.value = false);
      } else {
        await addOrder(form.value).finally(() =>  buttonLoading.value = false);
      }
      proxy?.$modal.msgSuccess("修改成功");
      dialog.visible = false;
      await getList();
    }
  });
}

/** 删除按钮操作 */
const handleDelete = async (row?: OrderVO) => {
  const _orderIds = row?.orderId || ids.value;
  await proxy?.$modal.confirm('是否确认删除订单编号为"' + _orderIds + '"的数据项？').finally(() => loading.value = false);
  await delOrder(_orderIds);
  proxy?.$modal.msgSuccess("删除成功");
  await getList();
}

/** 导出按钮操作 */
const handleExport = () => {
  proxy?.download('hmis/order/export', {
    ...queryParams.value
  }, `order_${new Date().getTime()}.xlsx`)
}

onMounted(() => {
  getList();
});
</script>
