import { Dayjs } from 'dayjs';

import { DISPLAY_TYPES } from '@/constants/enums';

import { IBasePaginateParams } from './params';

export interface ICreatePageParams {
  title: string;
  display: DISPLAY_TYPES;
  show_homepage: boolean;
  active: boolean;
}

export interface IGetPagesResponse {
  id: string;
  title: string;
  display: DISPLAY_TYPES;
  updated_date: Date | Dayjs | string | null;
  active: boolean;
}

export interface IGetPagesParams extends IBasePaginateParams {}

export interface IGetDetailPageResponse {
  id: string;
  title: string;
  display: DISPLAY_TYPES;
  show_homepage: boolean;
  active: boolean;
}

export interface IUpdatePageParams extends ICreatePageParams {}
