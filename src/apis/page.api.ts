import { get, post, put, remove } from '@/axios/request';
import {
  ICreatePageParams,
  IGetDetailPageResponse,
  IGetPagesParams,
  IGetPagesResponse,
  IUpdatePageParams,
} from '@/types/page';
import { IApiResponse, IPaginateData } from '@/types/response';

import { PAGES } from './url';

export const createPage = async (body: ICreatePageParams) => {
  return await post(PAGES.CREATE_PAGE, body);
};

export const getPages = async (
  body: IGetPagesParams,
): Promise<IApiResponse<IPaginateData<IGetPagesResponse[]>, any>> => {
  return await post(PAGES.GET_PAGES, body);
};

export const getDetailPage = async (
  id: string,
): Promise<IApiResponse<IGetDetailPageResponse, any>> => {
  return await get(`${PAGES.GET_PAGE_BY_ID}/${id}`);
};

export const updatePage = async (id: string, body: IUpdatePageParams) => {
  return await put(`${PAGES.UPDATE_PAGE}/${id}`, body);
};

export const deletePage = async (id: string) => {
  return await remove(`${PAGES.DELETE_PAGE}/${id}`);
};
