import { get, post, put, remove } from '@/axios/request';
import {
  ICreateMenuParams,
  IGetDetailMenuResponse,
  IGetMenusParams,
  IGetMenusResponse,
  IUpdateMenuParams,
} from '@/types/menu';
import { IApiResponse, IPaginateData } from '@/types/response';

import { MENUS } from './url';

export const createMenu = async (body: ICreateMenuParams) => {
  return await post(MENUS.CREATE, body);
};

export const getMenus = async (
  body: IGetMenusParams,
): Promise<IApiResponse<IPaginateData<IGetMenusResponse[]>, any>> => {
  return await post(MENUS.GET_LIST, body);
};

export const getDetailMenu = async (
  id: string,
): Promise<IApiResponse<IGetDetailMenuResponse, any>> => {
  return await get(`${MENUS.GET_DETAIL}/${id}`);
};

export const updateMenu = async (id: string, body: IUpdateMenuParams) => {
  return await put(`${MENUS.UPDATE}/${id}`, body);
};

export const deleteMenu = async (id: string) => {
  return await remove(`${MENUS.DELETE}/${id}`);
};
