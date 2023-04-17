import { Dayjs } from 'dayjs';

import { DISPLAY_ENUMS } from '@/constants/enums';

import { IBasePaginateParams } from './params';

export interface ICreateFolderParams {
  title: string;
  page_id: string;
  parent_id: string;
  display: DISPLAY_ENUMS;
  show_homepage: boolean;
  active: boolean;
}

export interface IGetFoldersResponse {
  id: string;
  title: string;
  display: DISPLAY_ENUMS;
  updated_date: Date | Dayjs | string | null;
  active: boolean;
}

export interface IGetFoldersParams extends IBasePaginateParams {}

export interface IGetDetailFolderResponse {
  id: string;
  title: string;
  page_id: string;
  parent_id: string;
  display: DISPLAY_ENUMS;
  show_homepage: boolean;
  active: boolean;
}

export interface IUpdateFolderParams extends ICreateFolderParams {}
