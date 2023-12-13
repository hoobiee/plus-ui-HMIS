import request from '@/utils/request';
import { AxiosPromise } from 'axios';
import { AgentVO, AgentForm, AgentQuery } from '@/api/hmis/agent/types';

/**
 * 查询分销商管理列表
 * @param query
 * @returns {*}
 */

export const listAgent = (query?: AgentQuery): AxiosPromise<AgentVO[]> => {
  return request({
    url: '/hmis/agent/list',
    method: 'get',
    params: query
  });
};

/**
 * 查询分销商管理详细
 * @param agentId
 */
export const getAgent = (agentId: string | number): AxiosPromise<AgentVO> => {
  return request({
    url: '/hmis/agent/' + agentId,
    method: 'get'
  });
};

/**
 * 新增分销商管理
 * @param data
 */
export const addAgent = (data: AgentForm) => {
  return request({
    url: '/hmis/agent',
    method: 'post',
    data: data
  });
};

/**
 * 修改分销商管理
 * @param data
 */
export const updateAgent = (data: AgentForm) => {
  return request({
    url: '/hmis/agent',
    method: 'put',
    data: data
  });
};

/**
 * 删除分销商管理
 * @param agentId
 */
export const delAgent = (agentId: string | number | Array<string | number>) => {
  return request({
    url: '/hmis/agent/' + agentId,
    method: 'delete'
  });
};
