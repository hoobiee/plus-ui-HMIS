import request from '@/utils/request';
import { AxiosPromise } from 'axios';
import { HotelVO, HotelForm, HotelQuery } from '@/api/hmis/hotel/types';

/**
 * 查询酒店详情列表
 * @param query
 * @returns {*}
 */

export const listHotel = (query?: HotelQuery): AxiosPromise<HotelVO[]> => {
  return request({
    url: '/hmis/hotel/list',
    method: 'get',
    params: query
  });
};

/**
 * 查询酒店详情详细
 * @param hotelId
 */
export const getHotel = (hotelId: string | number): AxiosPromise<HotelVO> => {
  return request({
    url: '/hmis/hotel/' + hotelId,
    method: 'get'
  });
};

/**
 * 新增酒店详情
 * @param data
 */
export const addHotel = (data: HotelForm) => {
  return request({
    url: '/hmis/hotel',
    method: 'post',
    data: data
  });
};

/**
 * 修改酒店详情
 * @param data
 */
export const updateHotel = (data: HotelForm) => {
  return request({
    url: '/hmis/hotel',
    method: 'put',
    data: data
  });
};

/**
 * 删除酒店详情
 * @param hotelId
 */
export const delHotel = (hotelId: string | number | Array<string | number>) => {
  return request({
    url: '/hmis/hotel/' + hotelId,
    method: 'delete'
  });
};
