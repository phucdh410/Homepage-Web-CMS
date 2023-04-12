import { Dayjs } from 'dayjs';

import { IBasePaginateParams } from './params';

export interface IGetLanguagesParams extends IBasePaginateParams {}

export interface IGetLanguagesResponse {
  id: string;
  name: string;
  created_date: Date | Dayjs | string | null;
  updated_date: Date | Dayjs | string | null;
  active: boolean;
}

export interface ICreateLanguageParams {
  name: string;
  active: boolean;
}

export interface IUpdateLanguageParams extends ICreateLanguageParams {}
