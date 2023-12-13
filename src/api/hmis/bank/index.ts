import request from '@/utils/request';
import { AxiosPromise } from 'axios';
import { BankVO, BankForm, BankQuery } from '@/api/hmis/bank/types';

/**
 * 查询分销商银行卡列表
 * @param query
 * @returns {*}
 */

export const listBank = (query?: BankQuery): AxiosPromise<BankVO[]> => {
  return request({
    url: '/hmis/bank/list',
    method: 'get',
    params: query
  });
};

/**
 * 查询分销商银行卡详细
 * @param cardId
 */
export const getBank = (cardId: string | number): AxiosPromise<BankVO> => {
  return request({
    url: '/hmis/bank/' + cardId,
    method: 'get'
  });
};

/**
 * 新增分销商银行卡
 * @param data
 */
export const addBank = (data: BankForm) => {
  return request({
    url: '/hmis/bank',
    method: 'post',
    data: data
  });
};

/**
 * 修改分销商银行卡
 * @param data
 */
export const updateBank = (data: BankForm) => {
  return request({
    url: '/hmis/bank',
    method: 'put',
    data: data
  });
};

/**
 * 删除分销商银行卡
 * @param cardId
 */
export const delBank = (cardId: string | number | Array<string | number>) => {
  return request({
    url: '/hmis/bank/' + cardId,
    method: 'delete'
  });
};
