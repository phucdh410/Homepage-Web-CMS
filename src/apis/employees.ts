import { get, post, put, remove } from '@/axios/request';
import {
  ICreateEmployeeParams,
  IGetDetailEmployeeResponse,
  IGetEmployeesParams,
  IGetEmployeesResponse,
  IUpdateEmployeeParams,
} from '@/types/employee';
import { IApiResponse, IPaginateData } from '@/types/response';

import { EMPLOYEES } from './url';

export const getEmployees = (
  body: IGetEmployeesParams,
): Promise<IApiResponse<IPaginateData<IGetEmployeesResponse[]>, any>> => {
  return post(EMPLOYEES.GET_LIST, body);
};

export const createEmployee = (body: ICreateEmployeeParams) => {
  return post(EMPLOYEES.CREATE, body);
};

export const getDetailEmployee = (
  id: string,
): Promise<IApiResponse<IGetDetailEmployeeResponse, any>> => {
  return get(`${EMPLOYEES.GET_DETAIL}/${id}`);
};

export const updateEmployee = (id: string, body: IUpdateEmployeeParams) => {
  return put(`${EMPLOYEES.UPDATE}/${id}`, body);
};

export const deleteEmployee = (id: string) => {
  return remove(`${EMPLOYEES.DELETE}/${id}`);
};
