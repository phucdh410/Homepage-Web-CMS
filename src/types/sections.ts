import { Dayjs } from 'dayjs';

import { DISPLAY_ENUMS } from '@/constants/enums';

import { IBasePaginateParams } from './params';

export interface ICreateSectionParams {
  name: string;
  section_group_id: string;
  slogan: string;
  display: DISPLAY_ENUMS; // 1: POST, 4: LINK
  timeline_ids?: string[] | null;
  education_quality?: string | null;
  master_quality?: string | null;
  education_aim?: string | null;
  major_ids?: string[] | null;
  org_structure_ids?: string[] | null;
  subject_ids?: string[] | null;
  activity_ids?: string[] | null;
  school_master_ids?: string[] | null;
  contact?: string | null;
  link?: string | null;
  file_id: string;
  active: boolean;
}

export interface IGetSectionsResponse {
  id: string;
  name: string;
  section_group: {
    id: string;
    name: string;
  };
  display: DISPLAY_ENUMS; // 1: POST, 4: LINK
  updated_date: Date | Dayjs | string | null;
  active: boolean;
}

export interface IGetSectionsParams extends IBasePaginateParams {}

export interface IGetDetailSection {
  id: string;
  name: string;
  section_group_id: string;
  slogan: string;
  display: DISPLAY_ENUMS; // 1: POST, 4: LINK
  timeline_ids: string[] | null;
  education_quality: string | null;
  master_quality: string | null;
  education_aim: string | null;
  major_ids: string[] | null;
  org_structure_ids: string[] | null;
  subject_ids: string[] | null;
  activity_ids: string[] | null;
  school_master_ids: string[] | null;
  contact: string | null;
  link: string | null;
  file_id: string;
  active: boolean;
}

export interface IUpdateSectionParams extends ICreateSectionParams {}
