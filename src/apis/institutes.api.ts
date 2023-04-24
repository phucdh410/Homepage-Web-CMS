import { get, post, put, remove } from '@/axios/request';
import {
  ICreateInstituteParams,
  IGetDetailInstituteResponse,
  IGetInstitutesParams,
  IGetInstitutesResponse,
  IUpdateInstituteParams,
} from '@/types/institutes';
import { IApiResponse, IPaginateData } from '@/types/response';

import { INSTITUTES } from './url';

export const createInstitute = (body: ICreateInstituteParams) => {
  return post(INSTITUTES.CREATE, body);
};

export const getInstitutes = (
  body: IGetInstitutesParams,
): Promise<IApiResponse<IPaginateData<IGetInstitutesResponse[]>, any>> => {
  return post(INSTITUTES.GET_LIST, body);
};

export const getDetailInstitute = (
  id: string,
): Promise<IApiResponse<IGetDetailInstituteResponse, any>> => {
  return get(`${INSTITUTES.GET_DETAIL}/${id}`);
};

export const updateInstitute = (id: string, body: IUpdateInstituteParams) => {
  return put(`${INSTITUTES.UPDATE}/${id}`, body);
};

export const deleteInstitute = (id: string) => {
  return remove(`${INSTITUTES.DELETE}/${id}`);
};
