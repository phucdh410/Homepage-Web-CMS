import { post, put, remove } from '@/axios/request';
import {
  ICreateOrgStructureParams,
  IUpdateEmployeesParams,
  IUpdateOrgStructureParams,
} from '@/types/org-structures';

import { ORGANIZATION_STRUCTURES } from './url';

export const createOrgStructure = (body: ICreateOrgStructureParams) => {
  return post(ORGANIZATION_STRUCTURES.CREATE, body);
};

export const updateOrgStructure = (
  id: string,
  body: IUpdateOrgStructureParams,
) => {
  return put(`${ORGANIZATION_STRUCTURES.UPDATE}/${id}`, body);
};

export const deleteOrgStructure = (id: string) => {
  return remove(`${ORGANIZATION_STRUCTURES.DELETE}/${id}`);
};

export const updateOrgEmployee = (id: string, body: IUpdateEmployeesParams) => {
  return put(
    `${ORGANIZATION_STRUCTURES.UPDATE_EMPLOYEES}/${id}/employees`,
    body,
  );
};
