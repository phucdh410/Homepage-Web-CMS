import { Dayjs } from 'dayjs';

import { IFileUpload } from './file';
import { IBasePaginateParams } from './params';

export interface IGetBannersResponse {
  id: string;
  title: string;
  active: boolean;
  start_date: string | Date | Dayjs;
  end_date: string | Date | Dayjs;
  updated_date: string | Date | Dayjs | null;
  file_id: string;
}

export interface IGetBannersParams extends IBasePaginateParams {}
export interface ICreateBanner {
  title: string;
  file_id: string;
  start_date: string | Date | Dayjs;
  end_date: string | Date | Dayjs;
}

export interface IGetBannerDetailResponse {
  id: string;
  title: string;
  start_date: string | Date | Dayjs;
  end_date: string | Date | Dayjs;
  file_id: string;
}

export interface IUpdateBannerParams extends ICreateBanner {}

export interface IBannerForm {
  title: string;
  file: IFileUpload | null;
  start_date: string | Date | Dayjs;
  end_date: string | Date | Dayjs;
}
