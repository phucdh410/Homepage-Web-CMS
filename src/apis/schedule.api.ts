import { get, post, put, remove } from '@/axios/request';
import { IApiResponse, IPaginateData } from '@/types/response';
import {
  ICreateScheduleParams,
  IGetDetailSchedulesResponse,
  IGetSchedulesParams,
  IGetSchedulesResponse,
  IUpdateScheduleParams,
} from '@/types/schedule';

import { SCHEDULE } from './url';

export const getSchedules = (
  body: IGetSchedulesParams,
): Promise<IApiResponse<IPaginateData<IGetSchedulesResponse[]>, any>> => {
  return post(SCHEDULE.GET_SCHEDULES, body);
};

export const createSchedule = (body: ICreateScheduleParams) => {
  return post(SCHEDULE.CREATE_SCHEDULE, body);
};

export const getDetailSchedule = (
  id: string,
): Promise<IApiResponse<IGetDetailSchedulesResponse, any>> => {
  return get(`${SCHEDULE.UPDATE_SCHEDULE}/${id}`);
};

export const updateSchedule = (id: string, body: IUpdateScheduleParams) => {
  return put(`${SCHEDULE.UPDATE_SCHEDULE}/${id}`, body);
};

export const deleteSchedule = (id: string) => {
  return remove(`${SCHEDULE.DELETE_SCHEDULE}/${id}`);
};
