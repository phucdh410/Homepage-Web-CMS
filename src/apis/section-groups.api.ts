import { post, put, remove } from '@/axios/request';
import { IApiResponse, IPaginateData } from '@/types/response';
import {
  ICreateSectionGroupParams,
  IGetSectionGroupsParams,
  IGetSectionGroupsResponse,
  IUpdateSectionGroupParams,
} from '@/types/section-groups';

import { SECTION_GROUPS } from './url';

export const createSectionGroup = (body: ICreateSectionGroupParams) => {
  return post(SECTION_GROUPS.CREATE, body);
};

export const getSectionGroups = (
  body: IGetSectionGroupsParams,
): Promise<IApiResponse<IPaginateData<IGetSectionGroupsResponse[]>, any>> => {
  return post(SECTION_GROUPS.GET_LIST, body);
};

export const updateSectionGroup = (
  id: string,
  body: IUpdateSectionGroupParams,
) => {
  return put(`${SECTION_GROUPS.UPDATE}/${id}`, body);
};

export const deleteSectionGroup = (id: string) => {
  return remove(`${SECTION_GROUPS.DELETE}/${id}`);
};
