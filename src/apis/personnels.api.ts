import { get, post, put, remove } from '@/axios/request';
import {
  ICreatePersonnelParams,
  IGetDetailPersonnelResponse,
  IGetPersonnelsParams,
  IGetPersonnelsResponse,
  IUpdatePersonnelParams,
} from '@/types/personnel';
import { IApiResponse, IPaginateData } from '@/types/response';

import { PERSONNELS } from './url';

export const getPersonnels = (
  body: IGetPersonnelsParams,
): Promise<IApiResponse<IPaginateData<IGetPersonnelsResponse[]>, any>> => {
  return post(PERSONNELS.GET_PERSONNELS, body);
};

export const createPersonnel = (body: ICreatePersonnelParams) => {
  return post(PERSONNELS.CREATE_PERSONNEL, body);
};

export const getDetailPersonnel = (
  id: string,
): Promise<IApiResponse<IGetDetailPersonnelResponse, any>> => {
  return get(`${PERSONNELS.GET_PERSONNEL_BY_ID}/${id}`);
};

export const updatePersonnel = (id: string, body: IUpdatePersonnelParams) => {
  return put(`${PERSONNELS.UPDATE_PERSONNEL}/${id}`, body);
};

export const deletePersonnel = (id: string) => {
  return remove(`${PERSONNELS.DELETE_PERSONNEL}/${id}`);
};
