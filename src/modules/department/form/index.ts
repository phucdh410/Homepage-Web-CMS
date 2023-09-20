import { Resolver } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { boolean, object, string } from 'yup';

import {
  ICreateDepartmentParams,
  IUpdateDepartmentParams,
} from '@/types/departments';

export const defaultValuesDepartment: ICreateDepartmentParams = {
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

export const departmentResolver: Resolver<
  ICreateDepartmentParams | IUpdateDepartmentParams
> = yupResolver(
  object({
    name: string().required('Vui lòng nhập tên phòng ban!'),
    file_id: string().required('Vui lòng chọn ảnh bìa!'),
    active: boolean(),
  }),
);
