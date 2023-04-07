import { get, post, put, remove } from '@/axios/request';
import {
  ICreateNotificationParams,
  IGetNotificationsParams,
  IGetNotificationsResponse,
  IUpdateNotificationParams,
} from '@/types/notification';
import { IApiResponse, IPaginateData } from '@/types/response';

import { NOTIFICATIONS } from './url';

export const createNotification = async (body: ICreateNotificationParams) => {
  return await post(NOTIFICATIONS.CREATE_NOTIFICATION, body);
};

export const getNotifications = async (
  body: IGetNotificationsParams,
): Promise<IApiResponse<IPaginateData<IGetNotificationsResponse[]>, any>> => {
  return await post(NOTIFICATIONS.GET_NOTIFICATIONS, body);
};

export const getNotificationById = async (id: string, language_id: number) => {
  return await get(`${NOTIFICATIONS.GET_NOTIFICATION_BY_ID}/${id}`, {
    params: { language_id },
  });
};

export const updateNotification = async (
  id: string,
  body: IUpdateNotificationParams,
) => {
  return await put(`${NOTIFICATIONS.UPDATE_NOTIFICATION}/${id}`, body);
};

export const updateStatusNotification = async (id: string) => {
  return await put(`${NOTIFICATIONS.UPDATE_NOTIFICATION}/${id}`);
};

export const deleteNotification = async (id: string) => {
  return await remove(`${NOTIFICATIONS.DELETE_NOTIFICATION}/${id}`);
};
