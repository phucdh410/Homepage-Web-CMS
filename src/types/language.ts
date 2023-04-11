import { Dayjs } from 'dayjs';

import { IBasePaginateParams } from './params';

export interface IGetLanguagesParams extends IBasePaginateParams {}

export interface IGetLanguagesResponse {
  id: string;
  title: string;
  created_at: Date | Dayjs | string | null;
  updated_at: Date | Dayjs | string | null;
  published: boolean;
}

export interface ICreateLanguageParams {
  title: string;
  published: boolean;
}

export interface IUpdateLanguageParams extends ICreateLanguageParams {}
