import { get, post, put, remove } from '@/axios/request';
import { IApiResponse, IPaginateData } from '@/types/response';
import {
  ICreateScheduleParams,
  IGetDetailSchedulesResponse,
  IGetSchedulesParams,
  IGetSchedulesResponse,
  IUpdateScheduleParams,
} from '@/types/schedule';

import { SCHEDULES } from './url';

export const getSchedules = (
  body: IGetSchedulesParams,
): Promise<IApiResponse<IPaginateData<IGetSchedulesResponse[]>, any>> => {
  return post(SCHEDULES.GET_SCHEDULES, body);
};

export const createSchedule = (body: ICreateScheduleParams) => {
  return post(SCHEDULES.CREATE_SCHEDULE, body);
};

export const getDetailSchedule = (
  id: string,
): Promise<IApiResponse<IGetDetailSchedulesResponse, any>> => {
  return get(`${SCHEDULES.UPDATE_SCHEDULE}/${id}`);
};

export const updateSchedule = (id: string, body: IUpdateScheduleParams) => {
  return put(`${SCHEDULES.UPDATE_SCHEDULE}/${id}`, body);
};

export const deleteSchedule = (id: string) => {
  return remove(`${SCHEDULES.DELETE_SCHEDULE}/${id}`);
};