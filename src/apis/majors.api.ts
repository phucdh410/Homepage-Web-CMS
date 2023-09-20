import { post, put, remove } from '@/axios/request';
import { ICreateMajorParams, IUpdateMajorParams } from '@/types/majors';

import { MAJORS } from './url';

export const createMajor = (body: ICreateMajorParams) => {
  return post(MAJORS.CREATE, body);
};

export const updateMajor = (id: string, body: IUpdateMajorParams) => {
  return put(`${MAJORS.UPDATE}/${id}`, body);
};

export const deleteMajor = (id: string) => {
  return remove(`${MAJORS.DELETE}/${id}`);
};
