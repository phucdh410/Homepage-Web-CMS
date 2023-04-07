import { get, post, put, remove } from '@/axios/request';
import { IApiResponse, IPaginateData } from '@/types/response';
import {
  IGetUsersParams,
  IUpdateUserParams,
  IUserDetail,
  IUserFormParams,
  IUsersDataTable,
} from '@/types/user';

import { AUTH, USERS } from './url';

export const createUser = async (body: IUserFormParams) => {
  return await post(AUTH.REGISTER, body);
};

export const getUsers = async (
  body: IGetUsersParams,
): Promise<IApiResponse<IPaginateData<IUsersDataTable[]>, any>> => {
  return await post(USERS.GET_USERS, body);
};

export const getUserById = async (
  id: string,
): Promise<IApiResponse<IUserDetail, any>> => {
  return await get(`${USERS.GET_USER_BY_ID}/${id}`);
};

export const updateUser = async (id: string, body: IUpdateUserParams) => {
  return await put(`${USERS.UPDATE_USER}/${id}`, body);
};

export const updateUserStatus = async (id: string) => {
  return await put(`${USERS.UPDATE_USER_STATUS}/${id}`);
};

export const deleteUser = async (id: string) => {
  return await remove(`${USERS.DELETE_USER}/${id}`);
};
