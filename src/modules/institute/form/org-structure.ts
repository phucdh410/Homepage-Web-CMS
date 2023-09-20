import { Resolver } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { boolean, number, object, string } from 'yup';

import {
  ICreateOrgStructureParams,
  IUpdateOrgStructureParams,
} from '@/types/org-structures';

export const defaultValuesOrgStructure: ICreateOrgStructureParams = {
  name: '',
  display: 2,
  active: true,
};

export const orgStructureResolver: Resolver<
  ICreateOrgStructureParams | IUpdateOrgStructureParams
> = yupResolver(
  object({
    name: string().required('Vui lòng nhập tên!'),
    display: number(),
    active: boolean(),
  }),
);
