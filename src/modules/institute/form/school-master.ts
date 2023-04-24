import { Resolver } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { boolean, number, object, string } from 'yup';

import {
  ICreateSchoolMasterParams,
  IUpdateEmployeesParams,
  IUpdateSchoolMasterParams,
} from '@/types/school-masters';

export const defaultValuesSchoolMaster: ICreateSchoolMasterParams = {
  from: new Date().getFullYear(),
  to: null,
  file_id: '',
  active: true,
};

export const defaultValuesSMEmployee: IUpdateEmployeesParams = {
  rank_1st: {
    position_id: '',
    employee_id: '',
  },
  rank_2nd: [
    {
      sort_order: 1,
      position_id: '',
      employee_id: '',
    },
  ],
};

export const schoolMasterResolver: Resolver<
  ICreateSchoolMasterParams | IUpdateSchoolMasterParams
> = yupResolver(
  object({
    from: number().required('Vui lòng chọn thời gian!'),
    to: number()
      .nullable()
      .transform((value) => {
        if (value === '' || value === undefined || isNaN(value)) return null;
        else return value;
      }),
    file_id: string().required('Vui lòng chọn hình ảnh!'),
    active: boolean(),
  }),
);
