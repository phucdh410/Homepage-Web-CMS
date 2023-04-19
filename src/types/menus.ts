import { Dayjs } from 'dayjs';

import { POSITION_DISPLAY_ENUMS } from '@/constants/enums';

import { IBasePaginateParams } from './params';

export interface IMenu {
  source_id: string;
  parent_id: string;
  level: number;
  type: number;
}

export interface ICreateMenuParams {
  title: string;
  active: boolean;
  display: number;
  menus: IMenu[];
}

export interface IGetMenusResponse {
  id: string;
  title: string;
  display: POSITION_DISPLAY_ENUMS;
  updated_date: Date | Dayjs | string | null;
  active: boolean;
}

export interface IGetMenusParams extends IBasePaginateParams {}

export interface IGetDetailMenuResponse {
  id: string;
  title: string;
  display: POSITION_DISPLAY_ENUMS;
  active: boolean;
  menus: IMenu[];
}

export interface IUpdateMenuParams extends ICreateMenuParams {}
