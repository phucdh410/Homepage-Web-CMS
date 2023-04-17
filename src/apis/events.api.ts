import { get, post, put, remove } from '@/axios/request';
import {
  ICreateEventParams,
  IGetEventDetailResponse,
  IGetEventsParams,
  IGetEventsResponse,
  IUpdateEventParams,
} from '@/types/event';
import { IApiResponse, IPaginateData } from '@/types/response';

import { EVENTS } from './url';

export const createEvent = async (body: ICreateEventParams) => {
  return await post(EVENTS.CREATE, body);
};

export const getEvents = async (
  body: IGetEventsParams,
): Promise<IApiResponse<IPaginateData<IGetEventsResponse[]>, any>> => {
  return await post(EVENTS.GET_LIST, body);
};

export const getEventById = async (
  id: string,
  language_id: number,
): Promise<IApiResponse<IGetEventDetailResponse, any>> => {
  return await get(`${EVENTS.GET_DETAIL}/${id}`, {
    params: { language_id },
  });
};

export const updateEvent = async (id: string, body: IUpdateEventParams) => {
  return await put(`${EVENTS.UPDATE}/${id}`, body);
};

export const deleteEvent = async (id: string) => {
  return await remove(`${EVENTS.DELETE}/${id}`);
};
