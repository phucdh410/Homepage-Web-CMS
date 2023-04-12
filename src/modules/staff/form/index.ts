import { Resolver } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { boolean, object, string } from 'yup';

import { IEmployeeForm } from '@/types/employee';
import { ICreatePositionParams, IUpdatePositionParams } from '@/types/position';

export const defaultValuesEmployee = {
  name: '',
  academic_degree: '',
  file: null,
  active: true,
};

export const employeeResolver: Resolver<IEmployeeForm> = yupResolver(
  object({
    name: string().trim().required('Vui lòng nhập họ và tên nhân sự!'),
    academic_degree: string().trim().required('Vui lòng nhập học vị!'),
    active: boolean(),
    file: object().required('Vui lòng chọn hình ảnh!'),
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
