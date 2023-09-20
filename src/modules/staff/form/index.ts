import { Resolver } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { boolean, object, string } from 'yup';

import {
  ICreateEmployeeParams,
  IUpdateEmployeeParams,
} from '@/types/employees';
import {
  ICreatePositionParams,
  IUpdatePositionParams,
} from '@/types/positions';

export const defaultValuesEmployee = {
  name: '',
  academic_degree: '',
  file_id: '',
  active: true,
};

export const employeeResolver: Resolver<
  ICreateEmployeeParams | IUpdateEmployeeParams
> = yupResolver(
  object({
    name: string().trim().required('Vui lòng nhập họ và tên nhân sự!'),
    academic_degree: string(),
    active: boolean(),
    file_id: string(),
  }),
);

export const defaultValuesPosition = {
  name: '',
  active: true,
};

export const positionResolver: Resolver<
  ICreatePositionParams | IUpdatePositionParams
> = yupResolver(
  object({
    name: string().trim().required('Vui lòng nhập tên chức vụ!'),
    active: boolean(),
  }),
);
