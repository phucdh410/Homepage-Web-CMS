import { Dayjs } from 'dayjs';

import { IBasePaginateParams } from './params';

export interface IGetPositionsResponse {
  id: string;
  name: string;
  updated_at: Date | Dayjs | string | null;
  published: boolean;
}

export interface IGetPositionsParams extends IBasePaginateParams {}

export interface ICreatePositionParams {
  name: string;
  published: boolean;
}

export interface IUpdatePositionParams extends ICreatePositionParams {}
