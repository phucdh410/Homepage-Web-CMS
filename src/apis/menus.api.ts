import { get, post, put, remove } from '@/axios/request';
import {
  IGetDetailMenuResponse,
  IGetMenusParams,
  IGetMenusResponse,
  IUpdateMenuParams,
} from '@/types/menus';
import { IApiResponse, IPaginateData } from '@/types/response';

import { MENUS } from './url';

export const createMenu = async (body: FormData) => {
  return await post(MENUS.CREATE, body);
};

export const getMenus = async (
  body: IGetMenusParams,
): Promise<IApiResponse<IPaginateData<IGetMenusResponse[]>, any>> => {
  return await post(MENUS.GET_LIST, body);
};

export const getAllMenus = async (
  locale: string,
): Promise<IApiResponse<IPaginateData<IGetMenusResponse[]>, any>> => {
  return await get(MENUS.GET_LIST, { params: { locale } });
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
