import { Control } from 'react-hook-form';

import {
  ICreateBlogParams,
  ICreateOrgParams,
  ICreateRefParams,
  IUpdateBlogParams,
  IUpdateOrgParams,
  IUpdateRefParams,
} from '@/types/posts';

export interface IMPostFormProps {
  control: Control<
    | ICreateBlogParams
    | ICreateOrgParams
    | ICreateRefParams
    | IUpdateBlogParams
    | IUpdateOrgParams
    | IUpdateRefParams,
    any
  >;
}
