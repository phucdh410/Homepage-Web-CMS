import { Dayjs } from 'dayjs';

export interface ICreateActivityParams {
  name: string;
  description: string;
  active: boolean;
}

export interface IGetActivitiesResponse {
  id: string;
  name: string;
  description: string;
  updated_date: Date | Dayjs | string | null;
  active: boolean;
}

export interface IUpdateActivityParams extends ICreateActivityParams {}
