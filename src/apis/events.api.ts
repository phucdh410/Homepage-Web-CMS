import { get, post, put, remove } from '@axios/request';

import { EVENTS } from './url';

export const createEvent = async (body) => {
  return await post(EVENTS.CREATE_EVENT, body);
};

export const getEvents = async (body) => {
  return await post(EVENTS.GET_EVENTS, body);
};

export const getEventById = async (id, language_id) => {
  return await get(`${EVENTS.GET_EVENT_BY_ID}/${id}`, {
    params: { language_id },
  });
};

export const updateEvent = async (id, body) => {
  return await put(`${EVENTS.UPDATE_EVENT}/${id}`, body);
};

export const deleteEvent = async (id) => {
  return await remove(`${EVENTS.DELETE_EVENT}/${id}`);
};
