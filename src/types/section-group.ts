import { Dayjs } from 'dayjs';

import { IBasePaginateParams } from './params';

export interface ICreateSectionGroupParams {
  name: string;
  active: boolean;
}

export interface IGetSectionGroupsResponse {
  id: string;
  name: string;
  created_date: Date | Dayjs | string | null;
  updated_date: Date | Dayjs | string | null;
  active: boolean;
}

export interface IGetSectionGroupsParams extends IBasePaginateParams {}

export interface IUpdateSectionGroupParams extends ICreateSectionGroupParams {}
