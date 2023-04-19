import { get, post, put, remove } from '@/axios/request';
import {
  ICreatePageParams,
  IGetDetailPageResponse,
  IGetPagesParams,
  IGetPagesResponse,
  IUpdatePageParams,
} from '@/types/pages';
import { IApiResponse, IPaginateData } from '@/types/response';

import { PAGES } from './url';

export const createPage = async (body: ICreatePageParams) => {
  return await post(PAGES.CREATE, body);
};

export const getPages = async (
  body: IGetPagesParams,
): Promise<IApiResponse<IPaginateData<IGetPagesResponse[]>, any>> => {
  return await post(PAGES.GET_LIST, body);
};

export const getDetailPage = async (
  id: string,
): Promise<IApiResponse<IGetDetailPageResponse, any>> => {
  return await get(`${PAGES.GET_DETAIL}/${id}`);
};

export const updatePage = async (id: string, body: IUpdatePageParams) => {
  return await put(`${PAGES.UPDATE}/${id}`, body);
};

export const deletePage = async (id: string) => {
  return await remove(`${PAGES.DELETE}/${id}`);
};
