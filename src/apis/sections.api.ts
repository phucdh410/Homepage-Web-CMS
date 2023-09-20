import { get, post, put, remove } from '@/axios/request';
import { IApiResponse, IPaginateData } from '@/types/response';
import {
  ICreateSectionParams,
  IGetDetailSection,
  IGetSectionsParams,
  IGetSectionsResponse,
  IUpdateSectionParams,
} from '@/types/sections';

import { SECTIONS } from './url';

export const createSection = (body: ICreateSectionParams) => {
  return post(SECTIONS.CREATE, body);
};

export const getSections = (
  body: IGetSectionsParams,
): Promise<IApiResponse<IPaginateData<IGetSectionsResponse[]>, any>> => {
  return post(SECTIONS.GET_LIST, body);
};

export const getDetailSection = (
  id: string,
): Promise<IApiResponse<IGetDetailSection, any>> => {
  return get(`${SECTIONS.GET_DETAIL}/${id}`);
};

export const updateSection = (id: string, body: IUpdateSectionParams) => {
  return put(`${SECTIONS.UPDATE}/${id}`, body);
};

export const deleteSection = (id: string) => {
  return remove(`${SECTIONS.DELETE}/${id}`);
};
