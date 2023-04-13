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
  return await post(MENUS.CREATE_MENU, body);
};

export const getMenus = async (
  body: IGetMenusParams,
): Promise<IApiResponse<IPaginateData<IGetMenusResponse[]>, any>> => {
  return await post(MENUS.GET_MENUS, body);
};

export const getDetailMenu = async (
  id: string,
  language_id: number,
): Promise<IApiResponse<IGetDetailMenuResponse, any>> => {
  return await get(`${MENUS.GET_MENU_BY_ID}/${id}`, {
    params: { language_id },
  });
};

export const updateMenu = async (id: string, body: IUpdateMenuParams) => {
  return await put(`${MENUS.UPDATE_MENU}/${id}`, body);
};

export const deleteMenu = async (id: string) => {
  return await remove(`${MENUS.DELETE_MENU}/${id}`);
};
