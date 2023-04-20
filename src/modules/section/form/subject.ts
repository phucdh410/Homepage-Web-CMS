import { Resolver } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { boolean, object, string } from 'yup';

import { ICreateSubjectParams, IUpdateSubjectParams } from '@/types/subjects';

export const defaultValuesSubject: ICreateSubjectParams = {
  name: '',
  active: true,
};

export const orgStructureResolver: Resolver<
  ICreateSubjectParams | IUpdateSubjectParams
> = yupResolver(
  object({
    name: string().required('Vui lòng nhập tên bộ môn!'),
    active: boolean(),
  }),
);
