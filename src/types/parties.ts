import { Dayjs } from 'dayjs';

import { IBasePaginateParams } from './params';

export interface ICreatePartyParams {
  name: string;
  link: string;
  file_id: string;
  active: boolean;
}

export interface IGetPartiesResponse {
  id: string;
  name: string;
  created_date: Date | Dayjs | string | null;
  updated_date: Date | Dayjs | string | null;
  active: boolean;
}

export interface IGetPartiesParams extends IBasePaginateParams {}

export interface IGetDetailPartyResponse {
  id: string;
  name: string;
  link: string;
  file_id: string;
  active: boolean;
}

export interface IUpdatePartyParams extends ICreatePartyParams {}
