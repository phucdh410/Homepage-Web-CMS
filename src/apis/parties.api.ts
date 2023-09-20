import { get, post, put, remove } from '@/axios/request';
import {
  ICreatePartyParams,
  IGetDetailPartyResponse,
  IGetPartiesParams,
  IGetPartiesResponse,
  IUpdatePartyParams,
} from '@/types/parties';
import { IApiResponse, IPaginateData } from '@/types/response';

import { PARTIES } from './url';

export const createParty = async (body: ICreatePartyParams) => {
  return await post(PARTIES.CREATE, body);
};

export const getParties = async (
  body: IGetPartiesParams,
): Promise<IApiResponse<IPaginateData<IGetPartiesResponse[]>, any>> => {
  return await post(PARTIES.GET_LIST, body);
};

export const getDetailParty = async (
  id: string,
): Promise<IApiResponse<IGetDetailPartyResponse, any>> => {
  return await get(`${PARTIES.GET_DETAIL}/${id}`);
};

export const updateParty = async (id: string, body: IUpdatePartyParams) => {
  return await put(`${PARTIES.UPDATE}/${id}`, body);
};

export const deleteParty = async (
  id: string,
): Promise<IApiResponse<any, any>> => {
  return await remove(`${PARTIES.DELETE}/${id}`);
};
