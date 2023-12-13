export interface AgentVO {
  /**
   * 主键ID
   */
  agentId: string | number;

  /**
   * 编号
   */
  agentCode: string;

  /**
   * 名字
   */
  agentName: string;

  /**
   * 结算币种
   */
  settlementCurrency: string;

  /**
   * 结算方式
   */
  settlementType: string;

  /**
   * 联系电话
   */
  phone: string;

  /**
   * 联系人
   */
  contact: string;

  /**
   * 对账日
   */
  settlementDay: number;

  /**
   * 信用额度
   */
  lineOfCredit: number;

  /**
   * 商家编码
   */
  merchantCode: string;

}

export interface AgentForm extends BaseEntity {
  /**
   * 主键ID
   */
  agentId?: string | number;

  /**
   * 编号
   */
  agentCode?: string;

  /**
   * 名字
   */
  agentName?: string;

  /**
   * 结算币种
   */
  settlementCurrency?: string;

  /**
   * 结算方式
   */
  settlementType?: string;

  /**
   * 联系电话
   */
  phone?: string;

  /**
   * 联系人
   */
  contact?: string;

  /**
   * 对账日
   */
  settlementDay?: number;

  /**
   * 信用额度
   */
  lineOfCredit?: number;

  /**
   * 商家编码
   */
  merchantCode?: string;

}

export interface AgentQuery extends PageQuery {

  /**
   * 主键ID
   */
  agentId?: string | number;

  /**
   * 编号
   */
  agentCode?: string;

  /**
   * 名字
   */
  agentName?: string;

  /**
   * 结算币种
   */
  settlementCurrency?: string;

  /**
   * 结算方式
   */
  settlementType?: string;

  /**
   * 联系电话
   */
  phone?: string;

  /**
   * 联系人
   */
  contact?: string;

  /**
   * 对账日
   */
  settlementDay?: number;

  /**
   * 信用额度
   */
  lineOfCredit?: number;

  /**
   * 商家编码
   */
  merchantCode?: string;

    /**
     * 日期范围参数
     */
    params?: any;
}



