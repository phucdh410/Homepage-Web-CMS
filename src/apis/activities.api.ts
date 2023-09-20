import { post, put, remove } from '@/axios/request';
import {
  ICreateActivityParams,
  IUpdateActivityParams,
} from '@/types/activities';

import { ACTIVITIES } from './url';

export const createActivity = (body: ICreateActivityParams) => {
  return post(ACTIVITIES.CREATE, body);
};

export const updateActivity = (id: string, body: IUpdateActivityParams) => {
  return put(`${ACTIVITIES.UPDATE}/${id}`, body);
};

export const deleteActivity = (id: string) => {
  return remove(`${ACTIVITIES.DELETE}/${id}`);
};
