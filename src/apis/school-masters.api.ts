import { post, put, remove } from '@/axios/request';
import {
  ICreateSchoolMasterParams,
  IUpdateEmployeesParams,
  IUpdateSchoolMasterParams,
} from '@/types/school-masters';

import { SCHOOL_MASTERS } from './url';

export const createSchoolMaster = (body: ICreateSchoolMasterParams) => {
  return post(SCHOOL_MASTERS.CREATE, body);
};

export const updateSchoolMaster = (
  id: string,
  body: IUpdateSchoolMasterParams,
) => {
  return put(`${SCHOOL_MASTERS.UPDATE}/${id}`, body);
};

export const deleteSchoolMaster = (id: string) => {
  return remove(`${SCHOOL_MASTERS.DELETE}/${id}`);
};

export const updateSchoolMasterEmployee = (
  id: string,
  body: IUpdateEmployeesParams,
) => {
  return put(`${SCHOOL_MASTERS.UPDATE_EMPLOYEES}/${id}/employees`, body);
};
