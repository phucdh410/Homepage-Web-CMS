import { get, post, put, remove } from '@/axios/request';
import { IApiResponse, IPaginateData } from '@/types/response';
import {
  IGetUsersParams,
  IUpdateUserParams,
  IUserDetail,
  IUserFormParams,
  IUsersDataTable,
} from '@/types/user';

import { USERS } from './url';

export const createUser = async (body: IUserFormParams) => {
  return await post(USERS.CREATE, body);
};

export const getUsers = async (
  body: IGetUsersParams,
): Promise<IApiResponse<IPaginateData<IUsersDataTable[]>, any>> => {
  return await post(USERS.GET_LIST, body);
};

export const getDetailUser = async (
  id: string,
): Promise<IApiResponse<IUserDetail, any>> => {
  return await get(`${USERS.GET_DETAIL}/${id}`);
};

export const updateUser = async (id: string, body: IUpdateUserParams) => {
  return await put(`${USERS.UPDATE}/${id}`, body);
};

export const deleteUser = async (id: string) => {
  return await remove(`${USERS.DELETE}/${id}`);
};
