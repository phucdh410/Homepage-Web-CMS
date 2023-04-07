import { IBasePaginateParams } from './params';

export interface ICreateNotificationParams {
  title: string;
  published: boolean;
  language_id?: number;
}

export interface IUpdateNotificationParams extends ICreateNotificationParams {}

export interface IGetNotificationsParams extends IBasePaginateParams {}

export interface IGetNotificationsResponse {
  id: string;
  title: string;
  created_at: string | Date | Dayjs | null;
  updated_at: string | Date | Dayjs | null;
  published: boolean;
}
