import { Resolver } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { boolean, object, string } from 'yup';

import { IEmployeeForm } from '@/types/employees';
import {
  ICreatePositionParams,
  IUpdatePositionParams,
} from '@/types/positions';

export const defaultValuesEmployee = {
  name: '',
  academic_degree: '',
  file: null,
  active: true,
};

export const employeeResolver: Resolver<IEmployeeForm> = yupResolver(
  object({
    name: string().trim().required('Vui lòng nhập họ và tên nhân sự!'),
    academic_degree: string().trim(),
    active: boolean(),
    file: object().required('Vui lòng chọn hình ảnh!'),
  }),
);

export const defaultValuesPosition = {
  title: '',
  active: true,
};

export const positionResolver: Resolver<
  ICreatePositionParams | IUpdatePositionParams
> = yupResolver(
  object({
    title: string().trim().required('Vui lòng nhập tên chức vụ!'),
    active: boolean(),
  }),
);
