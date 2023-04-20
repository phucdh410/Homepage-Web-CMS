import { post, put, remove } from '@/axios/request';
import {
  ICreateSubjectParams,
  IUpdateEmployeesParams,
  IUpdateSubjectParams,
} from '@/types/subjects';

import { SUBJECTS } from './url';

export const createSubject = (body: ICreateSubjectParams) => {
  return post(SUBJECTS.CREATE, body);
};

export const updateSubject = (id: string, body: IUpdateSubjectParams) => {
  return put(`${SUBJECTS.UPDATE}/${id}`, body);
};

export const deleteSubject = (id: string) => {
  return remove(`${SUBJECTS.DELETE}/${id}`);
};

export const updateOrgEmployee = (id: string, body: IUpdateEmployeesParams) => {
  return put(`${SUBJECTS.UPDATE_EMPLOYEES}/${id}/employees`, body);
};
