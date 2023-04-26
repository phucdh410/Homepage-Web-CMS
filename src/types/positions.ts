import { Dayjs } from 'dayjs';

import { IBasePaginateParams } from './params';

export interface IGetPositionsResponse {
  id: string;
  title: string;
  created_date: Date | Dayjs | string | null;
  updated_date: Date | Dayjs | string | null;
  active: boolean;
}

export interface IGetPositionsParams extends IBasePaginateParams {}

export interface ICreatePositionParams {
  title: string;
  active: boolean;
}

export interface IUpdatePositionParams extends ICreatePositionParams {}
