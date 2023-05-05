import { Dayjs } from 'dayjs';

export interface ICreateActivityParams {
  title: string;
  description: string;
  active: boolean;
}

export interface IGetActivitiesResponse {
  id: string;
  title: string;
  description: string;
  updated_date: Date | Dayjs | string | null;
  active: boolean;
}

export interface IUpdateActivityParams extends ICreateActivityParams {}
