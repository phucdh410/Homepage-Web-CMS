import { Resolver } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { boolean, object, string } from 'yup';

import {
  ICreateInstituteParams,
  IUpdateInstituteParams,
} from '@/types/institutes';

export const defaultValuesInstitute: ICreateInstituteParams = {
  name: '',
  display: 1,
  timeline_ids: [],
  mission: '',
  org_structure_ids: [],
  activity_ids: [],
  school_master_ids: [],
  contact: '',
  link: '',
  file_id: '',
  active: true,
};

export const instituteResolver: Resolver<
  ICreateInstituteParams | IUpdateInstituteParams
> = yupResolver(
  object({
    name: string().required('Vui lòng nhập tên trung tâm!'),
    file_id: string().required('Vui lòng chọn ảnh bìa!'),
    active: boolean(),
  }),
);
