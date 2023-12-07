export interface HotelVO {
  /**
   * 酒店名称
   */
  hotelName: string;

  /**
   * 英文名
   */
  hotelNameEn: string;

  /**
   * 城市名称
   */
  cityName: string;

  /**
   * 星级(1/2/3/4/5)
   */
  star: number;

  /**
   * 电话
   */
  hotelPhone: string;

  /**
   * 开业时间
   */
  openingTime: string;

  /**
   * 装修时间
   */
  decorateTime: string;

  /**
   * 酒店介绍
   */
  introduction: string;

  /**
   * 取消政策
   */
  canclePolicy: string;

  /**
   * 支持的信用卡
   */
  creditCards: string;

  /**
   * 酒店设施列表
   */
  facilities: string;

  /**
   * 酒店地址
   */
  address: string;

  /**
   * 酒店英文地址
   */
  addressEn: string;

  /**
   * 高德经度
   */
  gaodeLat: string;

  /**
   * 高德维度
   */
  gaodeLon: string;

  /**
   * 创建人
   */
  createBy: string;

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

  /**
   * 谷歌经度
   */
  googleLat: string;

  /**
   * 谷歌维度
   */
  googleLon: string;

  /**
   * 百度经度
   */
  baiduLat: string | number;

  /**
   * 百度维度
   */
  baiduLon: string | number;

  /**
   * 目的地标签
   */
  destinationLabel: number;

}

export interface HotelForm extends BaseEntity {
  /**
   * 酒店编号
   */
  hotelId?: string | number;

  /**
   * 酒店名称
   */
  hotelName?: string;

  /**
   * 英文名
   */
  hotelNameEn?: string;

  /**
   * 城市名称
   */
  cityName?: string;

  /**
   * 星级(1/2/3/4/5)
   */
  star?: number;

  /**
   * 电话
   */
  hotelPhone?: string;

  /**
   * 开业时间
   */
  openingTime?: string;

  /**
   * 装修时间
   */
  decorateTime?: string;

  /**
   * 酒店介绍
   */
  introduction?: string;

  /**
   * 取消政策
   */
  canclePolicy?: string;

  /**
   * 支持的信用卡
   */
  creditCards?: string;

  /**
   * 酒店设施列表
   */
  facilities?: string;

  /**
   * 酒店地址
   */
  address?: string;

  /**
   * 酒店英文地址
   */
  addressEn?: string;

  /**
   * 高德经度
   */
  gaodeLat?: string;

  /**
   * 高德维度
   */
  gaodeLon?: string;

  /**
   * 创建人
   */
  createBy?: string;

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
   * 谷歌经度
   */
  googleLat?: string;

  /**
   * 谷歌维度
   */
  googleLon?: string;

  /**
   * 百度经度
   */
  baiduLat?: string | number;

  /**
   * 百度维度
   */
  baiduLon?: string | number;

  /**
   * 目的地标签
   */
  destinationLabel?: number;

}

export interface HotelQuery extends PageQuery {

  /**
   * 酒店名称
   */
  hotelName?: string;

  /**
   * 英文名
   */
  hotelNameEn?: string;

  /**
   * 城市名称
   */
  cityName?: string;

  /**
   * 星级(1/2/3/4/5)
   */
  star?: number;

  /**
   * 电话
   */
  hotelPhone?: string;

  /**
   * 开业时间
   */
  openingTime?: string;

  /**
   * 装修时间
   */
  decorateTime?: string;

  /**
   * 酒店介绍
   */
  introduction?: string;

  /**
   * 取消政策
   */
  canclePolicy?: string;

  /**
   * 支持的信用卡
   */
  creditCards?: string;

  /**
   * 酒店设施列表
   */
  facilities?: string;

  /**
   * 酒店地址
   */
  address?: string;

  /**
   * 酒店英文地址
   */
  addressEn?: string;

  /**
   * 高德经度
   */
  gaodeLat?: string;

  /**
   * 高德维度
   */
  gaodeLon?: string;

  /**
   * 创建人
   */
  createBy?: string;

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
   * 谷歌经度
   */
  googleLat?: string;

  /**
   * 谷歌维度
   */
  googleLon?: string;

  /**
   * 百度经度
   */
  baiduLat?: string | number;

  /**
   * 百度维度
   */
  baiduLon?: string | number;

  /**
   * 目的地标签
   */
  destinationLabel?: number;

    /**
     * 日期范围参数
     */
    params?: any;
}



