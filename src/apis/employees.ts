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
  return post(EMPLOYEES.GET_EMPLOYEES, body);
};

export const createEmployee = (body: ICreateEmployeeParams) => {
  return post(EMPLOYEES.CREATE_EMPLOYEE, body);
};

export const getDetailEmployee = (
  id: string,
): Promise<IApiResponse<IGetDetailEmployeeResponse, any>> => {
  return get(`${EMPLOYEES.GET_EMPLOYEE_BY_ID}/${id}`);
};

export const updateEmployee = (id: string, body: IUpdateEmployeeParams) => {
  return put(`${EMPLOYEES.UPDATE_EMPLOYEE}/${id}`, body);
};

export const deleteEmployee = (id: string) => {
  return remove(`${EMPLOYEES.DELETE_EMPLOYEE}/${id}`);
};
