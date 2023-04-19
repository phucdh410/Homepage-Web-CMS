import { Dayjs } from 'dayjs';

import { IBasePaginateParams } from './params';

export interface ICreateScheduleParams {
  title: string;
  content: string;
  date: Date | Dayjs | string | null;
  location: string;
  attendee: string;
  active: boolean;
}

export interface IGetSchedulesResponse {
  id: string;
  title: string;
  date: Date | Dayjs | string | null;
  active: boolean;
}

export interface IGetSchedulesParams extends IBasePaginateParams {}

export interface IGetDetailSchedulesResponse {
  id: string;
  title: string;
  content: string;
  date: Date | Dayjs | string | null;
  location: string;
  attendee: string;
  active: boolean;
}

export interface IUpdateScheduleParams extends ICreateScheduleParams {}
