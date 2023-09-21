import { Dayjs } from 'dayjs';

import { DISPLAY_ENUMS, MENU_TYPE_ENUMS } from '@/constants/enums';

import { IBasePaginateParams } from './params';

export interface ICreateFolderParams {
  title: {
    vi: string;
    en: string;
  };
  description: {
    vi: string;
    en: string;
  };
  // page_id: string;
  parent_id: string;
  type: MENU_TYPE_ENUMS;
  is_pin: boolean;
  // active: boolean;
  link: string;
  slug: string;
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
