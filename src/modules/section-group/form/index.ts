import { Resolver } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { boolean, object, string } from 'yup';

import {
  ICreateSectionGroupParams,
  IUpdateSectionGroupParams,
} from '@/types/section-group';

export const defaultValues: ICreateSectionGroupParams = {
  name: '',
  active: true,
};

export const sectionGroupResolver: Resolver<
  ICreateSectionGroupParams | IUpdateSectionGroupParams
> = yupResolver(
  object({
    name: string().required('Vui lòng nhập tên nhóm khoa!'),
    active: boolean(),
  }),
);
