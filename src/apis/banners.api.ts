import { get, post, put, remove } from '@/axios/request';
import {
  ICreateBanner,
  IGetBannerDetailResponse,
  IGetBannersParams,
  IGetBannersResponse,
  IUpdateBannerParams,
} from '@/types/banner';
import { IApiResponse, IPaginateData } from '@/types/response';

import { BANNERS } from './url';

export const createBanner = async (body: ICreateBanner) => {
  return await post(BANNERS.CREATE_BANNER, body);
};

export const getBanners = async (
  body: IGetBannersParams,
): Promise<IApiResponse<IPaginateData<IGetBannersResponse[]>, any>> => {
  return await post(BANNERS.GET_BANNERS, body);
};

export const getBannerById = async (
  id: string,
  language_id: number,
): Promise<IApiResponse<IGetBannerDetailResponse, any>> => {
  return await get(`${BANNERS.GET_BANNER_BY_ID}/${id}`, {
    params: { language_id },
  });
};

export const updateBanner = async (id: string, body: IUpdateBannerParams) => {
  return await put(`${BANNERS.UPDATE_BANNER}/${id}`, body);
};

export const deleteBanner = async (
  id: string,
): Promise<IApiResponse<any, any>> => {
  return await remove(`${BANNERS.DELETE_BANNER}/${id}`);
};
