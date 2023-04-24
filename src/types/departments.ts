import { Dayjs } from 'dayjs';

import { IBasePaginateParams } from './params';

export interface ICreateDepartmentParams {
  name: string;
  display: number;
  timeline_ids?: string[] | null;
  mission?: string | null;
  org_structure_ids?: string[] | null;
  activity_ids?: string[] | null;
  school_master_ids?: string[] | null;
  contact?: string | null;
  link?: string | null;
  file_id: string;
  active: boolean;
}

export interface IGetDepartmentsResponse {
  id: string;
  name: string;
  display: number;
  updated_date: Date | Dayjs | string | null;
  active: boolean;
}

export interface IGetDepartmentsParams extends IBasePaginateParams {}

export interface IGetDetailDepartmentResponse {
  id: string;
  name: string;
  display: number;
  timeline_ids: string[] | null;
  mission: string | null;
  org_structure_ids: string[] | null;
  activity_ids: string[] | null;
  school_master_ids: string[] | null;
  contact: string | null;
  link: string | null;
  file_id: string;
  active: boolean;
}

export interface IUpdateDepartmentParams extends ICreateDepartmentParams {}
