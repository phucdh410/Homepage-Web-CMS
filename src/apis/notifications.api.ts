import { get, post, put, remove } from '@axios/request';

import { NOTIFICATIONS } from './url';

export const createNotification = async (body) => {
  return await post(NOTIFICATIONS.CREATE_NOTIFICATION, body);
};

export const getNotifications = async (body) => {
  return await post(NOTIFICATIONS.GET_NOTIFICATIONS, body);
};

export const getNotificationById = async (id, language_id) => {
  return await get(`${NOTIFICATIONS.GET_NOTIFICATION_BY_ID}/${id}`, {
    params: { language_id },
  });
};

export const updateNotification = async (id, body) => {
  return await put(`${NOTIFICATIONS.UPDATE_NOTIFICATION}/${id}`, body);
};

export const deleteNotification = async (id) => {
  return await remove(`${NOTIFICATIONS.DELETE_NOTIFICATION}/${id}`);
};
