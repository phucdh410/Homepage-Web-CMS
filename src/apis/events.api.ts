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
  return await post(EVENTS.CREATE_EVENT, body);
};

export const getEvents = async (
  body: IGetEventsParams,
): Promise<IApiResponse<IPaginateData<IGetEventsResponse[]>, any>> => {
  return await post(EVENTS.GET_EVENTS, body);
};

export const getEventById = async (
  id: string,
  language_id: number,
): Promise<IApiResponse<IGetEventDetailResponse, any>> => {
  return await get(`${EVENTS.GET_EVENT_BY_ID}/${id}`, {
    params: { language_id },
  });
};

export const updateEvent = async (id: string, body: IUpdateEventParams) => {
  return await put(`${EVENTS.UPDATE_EVENT}/${id}`, body);
};

export const deleteEvent = async (id: string) => {
  return await remove(`${EVENTS.DELETE_EVENT}/${id}`);
};
