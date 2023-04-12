import { Dayjs } from 'dayjs';

import { IFileUpload } from './file';
import { IBasePaginateParams } from './params';

export interface IGetEventsResponse {
  id: string;
  title: string;
  active: boolean;
  start_date: string | Date | Dayjs;
  end_date: string | Date | Dayjs;
  updated_date: string | Date | Dayjs | null;
  file_id: string;
}

export interface IGetEventsParams extends IBasePaginateParams {}

export interface ICreateEventParams {
  title: string;
  file_id: string;
  start_date: string | Date | Dayjs;
  end_date: string | Date | Dayjs;
}

export interface IGetEventDetailResponse {
  id: string;
  title: string;
  start_date: string | Date | Dayjs;
  end_date: string | Date | Dayjs;
  file_id: string;
}

export interface IUpdateEventParams extends ICreateEventParams {}

export interface IEventForm {
  title: string;
  file: IFileUpload | null;
  start_date: string | Date | Dayjs;
  end_date: string | Date | Dayjs;
}
