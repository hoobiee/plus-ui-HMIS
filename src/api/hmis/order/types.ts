export interface OrderVO {
  /**
   * 订单ID
   */
  orderId: string | number;

  /**
   * 订单编号
   */
  orderNo: string;

  /**
   * 渠道订单号
   */
  channelNo: string;

  /**
   * 供货单编号
   */
  supplyOrderNo: string;

  /**
   * 跟单员
   */
  processors: string;

  /**
   * 入住时间
   */
  checkInTime: string;

  /**
   * 离店时间
   */
  checkOutTime: string;

  /**
   * 订单来源
   */
  orderSource: string;

  /**
   * 结算方式
   */
  settlementType: string;

  /**
   * 客户备注
   */
  guestRemark: string;

  /**
   * 总售价
   */
  totalSalePrice: number;

  /**
   * 总底价
   */
  totalBasePrice: number;

  /**
   * 订单状态
   */
  orderStatus: string;

  /**
   * 商家编码
   */
  merchantCode: string;

  /**
   * 创建人
   */
  creator: string;

  /**
   * 创建时间
   */
  createTime: string;

  /**
   * 修改人
   */
  updateBy: string;

  /**
   * 修改时间
   */
  updateTime: string;

}

export interface OrderForm extends BaseEntity {
  /**
   * 订单ID
   */
  orderId?: string | number;

  /**
   * 订单编号
   */
  orderNo?: string;

  /**
   * 渠道订单号
   */
  channelNo?: string;

  /**
   * 供货单编号
   */
  supplyOrderNo?: string;

  /**
   * 跟单员
   */
  processors?: string;

  /**
   * 入住时间
   */
  checkInTime?: string;

  /**
   * 离店时间
   */
  checkOutTime?: string;

  /**
   * 订单来源
   */
  orderSource?: string;

  /**
   * 结算方式
   */
  settlementType?: string;

  /**
   * 客户备注
   */
  guestRemark?: string;

  /**
   * 总售价
   */
  totalSalePrice?: number;

  /**
   * 总底价
   */
  totalBasePrice?: number;

  /**
   * 订单状态
   */
  orderStatus?: string;

  /**
   * 商家编码
   */
  merchantCode?: string;

  /**
   * 修改人
   */
  updateBy?: string;

}

export interface OrderQuery extends PageQuery {

  /**
   * 订单ID
   */
  orderId?: string | number;

  /**
   * 订单编号
   */
  orderNo?: string;

  /**
   * 渠道订单号
   */
  channelNo?: string;

  /**
   * 供货单编号
   */
  supplyOrderNo?: string;

  /**
   * 跟单员
   */
  processors?: string;

  /**
   * 入住时间
   */
  checkInTime?: string;

  /**
   * 离店时间
   */
  checkOutTime?: string;

  /**
   * 订单来源
   */
  orderSource?: string;

  /**
   * 结算方式
   */
  settlementType?: string;

  /**
   * 客户备注
   */
  guestRemark?: string;

  /**
   * 总售价
   */
  totalSalePrice?: number;

  /**
   * 总底价
   */
  totalBasePrice?: number;

  /**
   * 订单状态
   */
  orderStatus?: string;

  /**
   * 商家编码
   */
  merchantCode?: string;

  /**
   * 创建人
   */
  creator?: string;

  /**
   * 创建时间
   */
  createTime?: string;

  /**
   * 修改人
   */
  updateBy?: string;

  /**
   * 修改时间
   */
  updateTime?: string;

    /**
     * 日期范围参数
     */
    params?: any;
}



