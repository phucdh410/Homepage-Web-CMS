import { Resolver } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { boolean, object, string } from 'yup';

import { IPersonnelForm } from '@/types/personnel';

export const defaultValuesPersonnel = {
  name: '',
  degree: '',
  file: null,
  published: true,
};

export const personnelResolver: Resolver<IPersonnelForm> = yupResolver(
  object({
    name: string().trim().required('Vui lòng nhập họ và tên nhân sự!'),
    degree: string().trim().required('Vui lòng nhập học vị!'),
    published: boolean(),
    file: object().required('Vui lòng chọn hình ảnh!'),
  }),
);
