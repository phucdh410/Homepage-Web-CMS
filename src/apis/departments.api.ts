import { get, post, put, remove } from '@/axios/request';
import {
  ICreateDepartmentParams,
  IGetDepartmentsParams,
  IGetDepartmentsResponse,
  IGetDetailDepartmentResponse,
  IUpdateDepartmentParams,
} from '@/types/departments';
import { IApiResponse, IPaginateData } from '@/types/response';

import { DEPARTMENTS } from './url';

export const createDepartment = (body: ICreateDepartmentParams) => {
  return post(DEPARTMENTS.CREATE, body);
};

export const getDepartments = (
  body: IGetDepartmentsParams,
): Promise<IApiResponse<IPaginateData<IGetDepartmentsResponse[]>, any>> => {
  return post(DEPARTMENTS.GET_LIST, body);
};

export const getDetailDepartment = (
  id: string,
): Promise<IApiResponse<IGetDetailDepartmentResponse, any>> => {
  return get(`${DEPARTMENTS.GET_DETAIL}/${id}`);
};

export const updateDepartment = (id: string, body: IUpdateDepartmentParams) => {
  return put(`${DEPARTMENTS.UPDATE}/${id}`, body);
};

export const deleteDepartment = (id: string) => {
  return remove(`${DEPARTMENTS.DELETE}/${id}`);
};
