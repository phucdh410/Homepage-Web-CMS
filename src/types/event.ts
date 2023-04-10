import { Dayjs } from 'dayjs';

import { IFileUpload } from './file';
import { IBasePaginateParams } from './params';

export interface ICreateEventParams {
  title: string;
  file_id: string;
  start_date: string | Date | Dayjs;
  end_date: string | Date | Dayjs;
  language_id: number;
}

export interface IGetEventsParams extends IBasePaginateParams {}

export interface IGetEventsResponse {
  id: string;
  title: string;
  slug: string;
  published: boolean;
  start_date: string | Date | Dayjs;
  end_date: string | Date | Dayjs;
  created_at: string | Date | Dayjs | null;
  updated_at: string | Date | Dayjs | null;
}

export interface IGetEventDetailResponse {
  id: string;
  event_language_id: number;
  title: string;
  slug: string;
  start_date: string | Date | Dayjs;
  end_date: string | Date | Dayjs;
  file: IFileUpload;
}

export interface IUpdateEventParams {
  start_date: string | Date | Dayjs;
  end_date: string | Date | Dayjs;
  language_id: number;
  title: string;
  file_id: string;
}

export interface IEventForm {
  title: string;
  file: IFileUpload | null;
  start_date: string | Date | Dayjs;
  end_date: string | Date | Dayjs;
  language_id: number;
}
