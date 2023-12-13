export interface BankVO {
  /**
   * 主键ID
   */
  cardId: string | number;

  /**
   * 开户地
   */
  address: string;

  /**
   * 开户人
   */
  name: string;

  /**
   * 银行卡号
   */
  cardNumber: string;

  /**
   * 分销商ID
   */
  agentId: string | number;

}

export interface BankForm extends BaseEntity {
  /**
   * 主键ID
   */
  cardId?: string | number;

  /**
   * 开户地
   */
  address?: string;

  /**
   * 开户人
   */
  name?: string;

  /**
   * 银行卡号
   */
  cardNumber?: string;

  /**
   * 分销商ID
   */
  agentId?: string | number;

}

export interface BankQuery extends PageQuery {

  /**
   * 开户地
   */
  address?: string;

  /**
   * 开户人
   */
  name?: string;

  /**
   * 银行卡号
   */
  cardNumber?: string;

  /**
   * 分销商ID
   */
  agentId?: string | number;

    /**
     * 日期范围参数
     */
    params?: any;
}



