import { Dayjs } from 'dayjs';

import { IFileUpload } from './file';
import { IBasePaginateParams } from './params';

export interface ICreateBanner {
  title: string;
  file_id: string;
  start_date: string | Date | Dayjs | Dayjs;
  end_date: string | Date | Dayjs;
  language_id: number;
}

export interface IGetBannersParams extends IBasePaginateParams {}

export interface IGetBannersResponse {
  id: string;
  title: string;
  slug: string;
  published: boolean;
  start_date: string | Date | Dayjs;
  end_date: string | Date | Dayjs;
  created_at: string | Date | Dayjs | null;
  updated_at: string | Date | Dayjs | null;
}

export interface IGetBannerDetailResponse {
  id: string;
  banner_language_id: number;
  title: string;
  slug: string;
  start_date: string | Date | Dayjs;
  end_date: string | Date | Dayjs;
  published: boolean;
  file: IFileUpload;
}

export interface IUpdateBannerParams {
  start_date: string | Date | Dayjs;
  end_date: string | Date | Dayjs;
  language_id: number;
  title: string;
  file_id: string;
}

export interface IBannerForm {
  title: string;
  file: IFileUpload | null;
  start_date: string | Date | Dayjs;
  end_date: string | Date | Dayjs;
  language_id: number;
}
