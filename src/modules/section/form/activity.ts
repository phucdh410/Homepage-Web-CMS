import { Resolver } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { boolean, object, string } from 'yup';

import {
  ICreateActivityParams,
  IUpdateActivityParams,
} from '@/types/activities';

export const defaultValuesActivity: ICreateActivityParams = {
  title: '',
  description: '',
  active: true,
};

export const activityResolver: Resolver<
  ICreateActivityParams | IUpdateActivityParams
> = yupResolver(
  object({
    title: string().required('Vui lòng nhập tiêu đề hoạt động!'),
    description: string().required('Vui lòng nhập nội dung!'),
    active: boolean(),
  }),
);
