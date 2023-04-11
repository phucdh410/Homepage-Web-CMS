import { post, put, remove } from '@/axios/request';
import {
  ICreatePositionParams,
  IGetPositionsParams,
  IGetPositionsResponse,
  IUpdatePositionParams,
} from '@/types/position';
import { IApiResponse, IPaginateData } from '@/types/response';

import { POSITIONS } from './url';

export const getPositions = (
  body: IGetPositionsParams,
): Promise<IApiResponse<IPaginateData<IGetPositionsResponse[]>, any>> => {
  return post(POSITIONS.GET_POSITIONS, body);
};

export const createPosition = (body: ICreatePositionParams) => {
  return post(POSITIONS.CREATE_POSITION, body);
};

export const updatePosition = (id: string, body: IUpdatePositionParams) => {
  return put(`${POSITIONS.UPDATE_POSITION}/${id}`, body);
};

export const deletePosition = (id: string) => {
  return remove(`${POSITIONS.DELETE_POSITION}/${id}`);
};
