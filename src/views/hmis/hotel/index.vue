<template>
  <div class="p-2">
    <transition :enter-active-class="proxy?.animate.searchAnimate.enter" :leave-active-class="proxy?.animate.searchAnimate.leave">
      <div class="search" v-show="showSearch">
        <el-form :model="queryParams" ref="queryFormRef" :inline="true" label-width="68px">
          <el-form-item label="酒店名称" prop="hotelName">
            <el-input v-model="queryParams.hotelName" placeholder="请输入酒店名称" clearable style="width: 240px" @keyup.enter="handleQuery" />
          </el-form-item>
          <!--<el-form-item label="英文名" prop="hotelNameEn">
            <el-input v-model="queryParams.hotelNameEn" placeholder="请输入英文名" clearable style="width: 240px" @keyup.enter="handleQuery" />
          </el-form-item>-->
          <el-form-item label="城市名称" prop="cityName">
            <el-input v-model="queryParams.cityName" placeholder="请输入城市名称" clearable style="width: 240px" @keyup.enter="handleQuery" />
          </el-form-item>
          <!--<el-form-item label="星级(1/2/3/4/5)" prop="star">
            <el-select v-model="queryParams.star" placeholder="请选择星级(1/2/3/4/5)" clearable>
              <el-option
                v-for="dict in star_type"
                :key="dict.value"
                :label="dict.label"
                :value="dict.value"
              />
            </el-select>
          </el-form-item>-->
          <el-form-item label="电话" prop="hotelPhone">
            <el-input v-model="queryParams.hotelPhone" placeholder="请输入电话" clearable style="width: 240px" @keyup.enter="handleQuery" />
          </el-form-item>
          <!--<el-form-item label="开业时间" style="width: 308px">
            <el-date-picker
                v-model="dateRangeOpeningTime"
                value-format="YYYY-MM-DD HH:mm:ss"
                type="daterange"
                range-separator="-"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                :default-time="[new Date(2000, 1, 1, 0, 0, 0), new Date(2000, 1, 1, 23, 59, 59)]"
            />
          </el-form-item>
          <el-form-item label="装修时间" style="width: 308px">
            <el-date-picker
                v-model="dateRangeDecorateTime"
                value-format="YYYY-MM-DD HH:mm:ss"
                type="daterange"
                range-separator="-"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                :default-time="[new Date(2000, 1, 1, 0, 0, 0), new Date(2000, 1, 1, 23, 59, 59)]"
            />
          </el-form-item>-->
          <!--<el-form-item label="酒店介绍" prop="introduction">
            <el-input v-model="queryParams.introduction" placeholder="请输入酒店介绍" clearable style="width: 240px" @keyup.enter="handleQuery" />
          </el-form-item>
          <el-form-item label="取消政策" prop="canclePolicy">
            <el-input v-model="queryParams.canclePolicy" placeholder="请输入取消政策" clearable style="width: 240px" @keyup.enter="handleQuery" />
          </el-form-item>
          <el-form-item label="酒店设施列表" prop="facilities">
            <el-input v-model="queryParams.facilities" placeholder="请输入酒店设施列表" clearable style="width: 240px" @keyup.enter="handleQuery" />
          </el-form-item>-->
          <el-form-item label="酒店地址" prop="address">
            <el-input v-model="queryParams.address" placeholder="请输入酒店地址" clearable style="width: 240px" @keyup.enter="handleQuery" />
          </el-form-item>
          <!--<el-form-item label="酒店英文地址" prop="addressEn">
            <el-input v-model="queryParams.addressEn" placeholder="请输入酒店英文地址" clearable style="width: 240px" @keyup.enter="handleQuery" />
          </el-form-item>
          <el-form-item label="高德经度" prop="gaodeLat">
            <el-input v-model="queryParams.gaodeLat" placeholder="请输入高德经度" clearable style="width: 240px" @keyup.enter="handleQuery" />
          </el-form-item>
          <el-form-item label="高德维度" prop="gaodeLon">
            <el-input v-model="queryParams.gaodeLon" placeholder="请输入高德维度" clearable style="width: 240px" @keyup.enter="handleQuery" />
          </el-form-item>
          <el-form-item label="创建人" prop="createBy">
            <el-input v-model="queryParams.createBy" placeholder="请输入创建人" clearable style="width: 240px" @keyup.enter="handleQuery" />
          </el-form-item>
          <el-form-item label="创建时间" style="width: 308px">
            <el-date-picker
                v-model="dateRangeCreateTime"
                value-format="YYYY-MM-DD HH:mm:ss"
                type="daterange"
                range-separator="-"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                :default-time="[new Date(2000, 1, 1, 0, 0, 0), new Date(2000, 1, 1, 23, 59, 59)]"
            />
          </el-form-item>
          <el-form-item label="修改人" prop="updateBy">
            <el-input v-model="queryParams.updateBy" placeholder="请输入修改人" clearable style="width: 240px" @keyup.enter="handleQuery" />
          </el-form-item>
          <el-form-item label="修改时间" style="width: 308px">
            <el-date-picker
                v-model="dateRangeUpdateTime"
                value-format="YYYY-MM-DD HH:mm:ss"
                type="daterange"
                range-separator="-"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                :default-time="[new Date(2000, 1, 1, 0, 0, 0), new Date(2000, 1, 1, 23, 59, 59)]"
            />
          </el-form-item>-->
          <!--<el-form-item label="谷歌经度" prop="googleLat">
            <el-input v-model="queryParams.googleLat" placeholder="请输入谷歌经度" clearable style="width: 240px" @keyup.enter="handleQuery" />
          </el-form-item>
          <el-form-item label="谷歌维度" prop="googleLon">
            <el-input v-model="queryParams.googleLon" placeholder="请输入谷歌维度" clearable style="width: 240px" @keyup.enter="handleQuery" />
          </el-form-item>
          <el-form-item label="百度经度" prop="baiduLat">
            <el-input v-model="queryParams.baiduLat" placeholder="请输入百度经度" clearable style="width: 240px" @keyup.enter="handleQuery" />
          </el-form-item>
          <el-form-item label="百度维度" prop="baiduLon">
            <el-input v-model="queryParams.baiduLon" placeholder="请输入百度维度" clearable style="width: 240px" @keyup.enter="handleQuery" />
          </el-form-item>
          <el-form-item label="目的地标签" prop="destinationLabel">
            <el-input v-model="queryParams.destinationLabel" placeholder="请输入目的地标签" clearable style="width: 240px" @keyup.enter="handleQuery" />
          </el-form-item>-->
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
            <el-button type="primary" plain icon="Plus" @click="handleAdd" v-hasPermi="['hmis:hotel:add']">新增</el-button>
          </el-col>
          <el-col :span="1.5">
            <el-button type="success" plain icon="Edit" :disabled="single" @click="handleUpdate()" v-hasPermi="['hmis:hotel:edit']">修改</el-button>
          </el-col>
          <el-col :span="1.5">
            <el-button type="danger" plain icon="Delete" :disabled="multiple" @click="handleDelete()" v-hasPermi="['hmis:hotel:remove']">删除</el-button>
          </el-col>
          <el-col :span="1.5">
            <el-button type="warning" plain icon="Download" @click="handleExport" v-hasPermi="['hmis:hotel:export']">导出</el-button>
          </el-col>
          <right-toolbar v-model:showSearch="showSearch" @queryTable="getList"></right-toolbar>
        </el-row>
      </template>

      <el-table v-loading="loading" :data="hotelList" @selection-change="handleSelectionChange" >
        <el-table-column type="selection" width="55" align="center" />
        <el-table-column label="酒店编号" align="center" prop="hotelId" v-if="false" />
        <el-table-column label="城市名称" align="center" prop="cityName" />
        <el-table-column label="酒店地址" align="center" prop="address" :show-overflow-tooltip="true" />
        <el-table-column label="酒店名称" align="center" prop="hotelName" :show-overflow-tooltip="true"/>
        <!--<el-table-column label="英文名" align="center" prop="hotelNameEn" :show-overflow-tooltip="true"/>-->
        <!--<el-table-column label="星级(1/2/3/4/5)" align="center" prop="star">
          <template #default="scope">
            <dict-tag :options="star_type" :value="scope.row.star"/>
          </template>
        </el-table-column>-->
        <el-table-column label="电话" align="center" prop="hotelPhone" width="180" />
        <!--<el-table-column label="开业时间" align="center" prop="openingTime" width="180">
          <template #default="scope">
            <span>{{ parseTime(scope.row.openingTime, '{y}-{m}-{d}') }}</span>
          </template>
        </el-table-column>
        <el-table-column label="装修时间" align="center" prop="decorateTime" width="180">
          <template #default="scope">
            <span>{{ parseTime(scope.row.decorateTime, '{y}-{m}-{d}') }}</span>
          </template>
        </el-table-column>
        &lt;!&ndash; 缩略 &ndash;&gt;
        &lt;!&ndash;<el-table-column label="酒店介绍" align="center" prop="introduction" :show-overflow-tooltip="true" />&ndash;&gt;
        <el-table-column label="取消政策" align="center" prop="canclePolicy" />-->
        <el-table-column label="支持的信用卡" align="center" prop="creditCards">
          <template #default="scope">
            <dict-tag :options="credit_card_type" :value="scope.row.creditCards ? scope.row.creditCards.split(',') : []"/>
          </template>
        </el-table-column>
        <!--<el-table-column label="酒店设施列表" align="center" prop="facilities" />-->
        <!--<el-table-column label="酒店英文地址" align="center" prop="addressEn" />
        <el-table-column label="创建人" align="center" prop="createBy" />
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
        </el-table-column>-->
        <!--<el-table-column label="高德经度" align="center" prop="gaodeLat" />-->
        <!--<el-table-column label="高德维度" align="center" prop="gaodeLon" />-->
        <!--<el-table-column label="谷歌经度" align="center" prop="googleLat" />-->
        <!--<el-table-column label="谷歌维度" align="center" prop="googleLon" />-->
        <!--<el-table-column label="百度经度" align="center" prop="baiduLat" />-->
        <!--<el-table-column label="百度维度" align="center" prop="baiduLon" />-->
        <!--<el-table-column label="目的地标签" align="center" prop="destinationLabel" />-->
        <el-table-column label="操作" align="center" class-name="small-padding fixed-width">
          <template #default="scope">
            <el-tooltip content="修改" placement="top">
              <el-button link type="primary" icon="Edit" @click="handleUpdate(scope.row)" v-hasPermi="['hmis:hotel:edit']"></el-button>
            </el-tooltip>
            <el-tooltip content="删除" placement="top">
              <el-button link type="primary" icon="Delete" @click="handleDelete(scope.row)" v-hasPermi="['hmis:hotel:remove']"></el-button>
            </el-tooltip>
            <el-tooltip content="详细" placement="top">
              <el-button link type="primary" icon="View" @click="handleView(scope.row)" v-hasPermi="['hmis:hotel:query']"> </el-button>
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
    <!-- 添加或修改酒店详情对话框 -->
    <el-dialog :title="dialog.title" v-model="dialog.visible" width="500px" append-to-body>
      <el-form v-if="dialog.title == '添加酒店详情' || dialog.title == '修改酒店详情'" ref="hotelFormRef" :model="form" :rules="rules" label-width="80px">
        <el-form-item label="酒店名称" prop="hotelName" required>
          <el-input v-model="form.hotelName" placeholder="请输入酒店名称" />
        </el-form-item>
        <el-form-item label="英文名" prop="hotelNameEn">
          <el-input v-model="form.hotelNameEn" placeholder="请输入英文名" />
        </el-form-item>
        <el-form-item label="城市名称" prop="cityName">
          <el-input v-model="form.cityName" placeholder="请输入城市名称" />
        </el-form-item>
        <el-form-item label="星级(1/2/3/4/5)" prop="star">
          <el-select v-model="form.star" placeholder="请选择星级(1/2/3/4/5)">
            <el-option
                v-for="dict in star_type"
                :key="dict.value"
                :label="dict.label"
                :value="parseInt(dict.value)"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="电话" prop="hotelPhone" required>
          <el-input v-model="form.hotelPhone" placeholder="请输入电话" />
        </el-form-item>
        <el-form-item label="开业时间" prop="openingTime">
          <el-date-picker clearable
            v-model="form.openingTime"
            type="datetime"
            value-format="YYYY-MM-DD HH:mm:ss"
            placeholder="请选择开业时间">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="装修时间" prop="decorateTime">
          <el-date-picker clearable
            v-model="form.decorateTime"
            type="datetime"
            value-format="YYYY-MM-DD HH:mm:ss"
            placeholder="请选择装修时间">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="酒店介绍" prop="introduction">
            <el-input v-model="form.introduction" type="textarea" placeholder="请输入内容" :autosize="{ minRows: 2, maxRows: 4}"/>
        </el-form-item>
        <el-form-item label="取消政策" prop="canclePolicy">
          <el-input v-model="form.canclePolicy" placeholder="请输入取消政策" />
        </el-form-item>
        <el-form-item label="支持的信用卡" prop="creditCards">
          <el-checkbox-group v-model="form.creditCards">
            <el-checkbox
                v-for="dict in credit_card_type"
                :key="dict.value"
                :label="dict.value">
                {{dict.label}}
            </el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="酒店设施列表" prop="facilities" style="height: 60px">
          <el-input v-model="form.facilities" placeholder="请输入酒店设施列表" />
        </el-form-item>
        <el-form-item label="酒店地址" prop="address" required>
          <el-input v-model="form.address" placeholder="请输入酒店地址" />
        </el-form-item>
        <el-form-item label="酒店英文地址" prop="addressEn">
          <el-input v-model="form.addressEn" placeholder="请输入酒店英文地址" />
        </el-form-item>
        <!--<el-form-item label="创建人" prop="createBy">
          <el-input v-model="form.createBy" placeholder="请输入创建人" />
        </el-form-item>
        <el-form-item label="创建时间" prop="createTime">
          <el-date-picker clearable
            v-model="form.createTime"
            type="datetime"
            value-format="YYYY-MM-DD HH:mm:ss"
            placeholder="请选择创建时间">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="修改人" prop="updateBy">
          <el-input v-model="form.updateBy" placeholder="请输入修改人" />
        </el-form-item>
        <el-form-item label="修改时间" prop="updateTime">
          <el-date-picker clearable
            v-model="form.updateTime"
            type="datetime"
            value-format="YYYY-MM-DD HH:mm:ss"
            placeholder="请选择修改时间">
          </el-date-picker>
        </el-form-item>-->
        <el-form-item label="高德经度" prop="gaodeLat">
          <el-input v-model="form.gaodeLat" placeholder="请输入高德经度" />
        </el-form-item>
        <el-form-item label="高德维度" prop="gaodeLon">
          <el-input v-model="form.gaodeLon" placeholder="请输入高德维度" />
        </el-form-item>
        <el-form-item label="谷歌经度" prop="googleLat">
          <el-input v-model="form.googleLat" placeholder="请输入谷歌经度" />
        </el-form-item>
        <el-form-item label="谷歌维度" prop="googleLon">
          <el-input v-model="form.googleLon" placeholder="请输入谷歌维度" />
        </el-form-item>
        <el-form-item label="百度经度" prop="baiduLat">
          <el-input v-model="form.baiduLat" placeholder="请输入百度经度" />
        </el-form-item>
        <el-form-item label="百度维度" prop="baiduLon">
          <el-input v-model="form.baiduLon" placeholder="请输入百度维度" />
        </el-form-item>
        <el-form-item label="目的地标签" prop="destinationLabel">
          <el-input v-model="form.destinationLabel" placeholder="请输入目的地标签" />
        </el-form-item>
      </el-form>

      <el-form :model="form" label-width="100px">
        <el-row v-if="dialog.title == '查看酒店详情'">
          <el-col :span="24">
            <el-form-item label="酒店名称">
              {{ form.hotelName }}
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="英文名">
              {{ form.hotelNameEn }}
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="城市名称">
              {{ form.cityName }}
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="星级(1/2/3/4/5)">
              {{ form.star }}
            </el-form-item>
              </el-col>
            <el-col :span="24">
              <el-form-item label="电话">
                {{ form.hotelPhone }}
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label="开业时间">
                {{ form.openingTime}}
              </el-form-item>
            </el-col>
            <el-col :span="24" label="装修时间">
              {{form.decorateTime}}
            </el-col>
            <el-col :span="24">
              <el-form-item label="酒店介绍">
                {{ form.introduction }}
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label="取消政策">
                {{ form.canclePolicy }}
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label="支持的信用卡">
               {{ form.creditCards}}
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label="酒店设施列表">
                {{ form.facilities }}
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label="酒店地址">
                {{ form.address }}
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label="酒店英文地址">
                {{ form.addressEn }}
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label="创建人">
                {{ form.createBy }}
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label="创建时间">
                {{ form.createTime}}
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label="修改人">
                {{ form.updateBy }}
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label="修改时间">
                {{ form.updateTime}}
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label="高德经度">
                {{ form.gaodeLat }}
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label="高德维度">
                {{ form.gaodeLon }}
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label="谷歌经度">
                {{ form.googleLat }}
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label="谷歌维度">
                {{ form.googleLon }}
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label="百度经度">
                {{ form.baiduLat }}
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label="百度维度">
                {{ form.baiduLon }}
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label="目的地标签">
                {{ form.destinationLabel }}
              </el-form-item>
            </el-col>


        </el-row>
      </el-form>
      <template #footer>
        <div class="dialog-footer">
          <el-button v-if="dialog.title != '查看酒店详情'" :loading="buttonLoading" type="primary" @click="submitForm">确 定</el-button>
          <el-button @click="cancel">取 消</el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script setup name="Hotel" lang="ts">
import { listHotel, getHotel, delHotel, addHotel, updateHotel } from '@/api/hmis/hotel';
import { HotelVO, HotelQuery, HotelForm } from '@/api/hmis/hotel/types';

const { proxy } = getCurrentInstance() as ComponentInternalInstance;
const { star_type, credit_card_type } = toRefs<any>(proxy?.useDict('star_type', 'credit_card_type'));

const hotelList = ref<HotelVO[]>([]);
const buttonLoading = ref(false);
const loading = ref(true);
const showSearch = ref(true);
const ids = ref<Array<string | number>>([]);
const single = ref(true);
const multiple = ref(true);
const total = ref(0);
const dateRangeOpeningTime = ref<[DateModelType, DateModelType]>(['', '']);
const dateRangeDecorateTime = ref<[DateModelType, DateModelType]>(['', '']);
const dateRangeCreateTime = ref<[DateModelType, DateModelType]>(['', '']);
const dateRangeUpdateTime = ref<[DateModelType, DateModelType]>(['', '']);

const queryFormRef = ref<ElFormInstance>();
const hotelFormRef = ref<ElFormInstance>();

const dialog = reactive<DialogOption>({
  visible: false,
  title: '',
});

const initFormData: HotelForm = {
  hotelId: undefined,
  hotelName: undefined,
  hotelNameEn: undefined,
  cityName: undefined,
  star: undefined,
  hotelPhone: undefined,
  openingTime: undefined,
  decorateTime: undefined,
  introduction: undefined,
  canclePolicy: undefined,
  creditCards: [],
  facilities: undefined,
  address: undefined,
  addressEn: undefined,
  gaodeLat: undefined,
  gaodeLon: undefined,
  createBy: undefined,
  createTime: undefined,
  updateBy: undefined,
  updateTime: undefined,
  googleLat: undefined,
  googleLon: undefined,
  baiduLat: undefined,
  baiduLon: undefined,
  destinationLabel: undefined
}
const data = reactive<PageData<HotelForm, HotelQuery>>({
  form: {...initFormData},
  queryParams: {
    pageNum: 1,
    pageSize: 10,
    hotelName: undefined,
    hotelNameEn: undefined,
    cityName: undefined,
    star: undefined,
    hotelPhone: undefined,
    introduction: undefined,
    canclePolicy: undefined,
    creditCards: undefined,
    facilities: undefined,
    address: undefined,
    addressEn: undefined,
    gaodeLat: undefined,
    gaodeLon: undefined,
    createBy: undefined,
    updateBy: undefined,
    googleLat: undefined,
    googleLon: undefined,
    baiduLat: undefined,
    baiduLon: undefined,
    destinationLabel: undefined,
    params: {
      openingTime: undefined,
      decorateTime: undefined,
      createTime: undefined,
      updateTime: undefined,
    }
  },
  rules: {
  }
});

const { queryParams, form, rules } = toRefs(data);

/** 查询酒店详情列表 */
const getList = async () => {
  loading.value = true;
  queryParams.value.params = {};
  proxy?.addDateRange(queryParams.value, dateRangeOpeningTime.value, 'OpeningTime');
  proxy?.addDateRange(queryParams.value, dateRangeDecorateTime.value, 'DecorateTime');
  proxy?.addDateRange(queryParams.value, dateRangeCreateTime.value, 'CreateTime');
  proxy?.addDateRange(queryParams.value, dateRangeUpdateTime.value, 'UpdateTime');
  const res = await listHotel(queryParams.value);
  hotelList.value = res.rows;
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
  hotelFormRef.value?.resetFields();
}

/** 搜索按钮操作 */
const handleQuery = () => {
  queryParams.value.pageNum = 1;
  getList();
}

/** 重置按钮操作 */
const resetQuery = () => {
  dateRangeOpeningTime.value = ['', ''];
  dateRangeDecorateTime.value = ['', ''];
  dateRangeCreateTime.value = ['', ''];
  dateRangeUpdateTime.value = ['', ''];
  queryFormRef.value?.resetFields();
  handleQuery();
}

/** 多选框选中数据 */
const handleSelectionChange = (selection: HotelVO[]) => {
  ids.value = selection.map(item => item.hotelId);
  single.value = selection.length != 1;
  multiple.value = !selection.length;
}

/** 新增按钮操作 */
const handleAdd = () => {
  reset();
  dialog.visible = true;
  dialog.title = "添加酒店详情";
}

/** 修改按钮操作 */
const handleUpdate = async (row?: HotelVO) => {
  reset();
  const _hotelId = row?.hotelId || ids.value[0]
  const res = await getHotel(_hotelId);
  Object.assign(form.value, res.data);
  form.value.creditCards = form.value.creditCards.split(",");
  dialog.visible = true;
  dialog.title = "修改酒店详情";
}

/** 详细按钮操作 */
const handleView = async (row?: HotelVO) => {
  const _hotelId = row?.hotelId || ids.value[0]
  const res = await getHotel(_hotelId);
  Object.assign(form.value, res.data);
  form.value.creditCards = form.value.creditCards.split(",");
  dialog.visible = true;
  dialog.title = "查看酒店详情";
}

/** 提交按钮 */
const submitForm = () => {
  hotelFormRef.value?.validate(async (valid: boolean) => {
    if (valid) {
      buttonLoading.value = true;
        form.value.creditCards = form.value.creditCards.join(",");
      if (form.value.hotelId) {
        await updateHotel(form.value).finally(() =>  buttonLoading.value = false);
      } else {
        await addHotel(form.value).finally(() =>  buttonLoading.value = false);
      }
      proxy?.$modal.msgSuccess("修改成功");
      dialog.visible = false;
      await getList();
    }
  });
}

/** 删除按钮操作 */
const handleDelete = async (row?: HotelVO) => {
  const _hotelIds = row?.hotelId || ids.value;
  await proxy?.$modal.confirm('是否确认删除酒店详情编号为"' + _hotelIds + '"的数据项？').finally(() => loading.value = false);
  await delHotel(_hotelIds);
  proxy?.$modal.msgSuccess("删除成功");
  await getList();
}

/** 导出按钮操作 */
const handleExport = () => {
  proxy?.download('hmis/hotel/export', {
    ...queryParams.value
  }, `hotel_${new Date().getTime()}.xlsx`)
}

onMounted(() => {
  getList();
});
</script>
