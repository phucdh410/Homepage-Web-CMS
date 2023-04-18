import { Resolver } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { object, string } from 'yup';

import {
  ICreateBlogParams,
  ICreateOrgParams,
  ICreateRefParams,
  IUpdateBlogParams,
  IUpdateOrgParams,
  IUpdateRefParams,
} from '@/types/posts';

export const defaultValuesPost:
  | ICreateBlogParams
  | ICreateOrgParams
  | ICreateRefParams = {
  page_id: '',
  folder_id: '',
  active: true,
  link: '',
  show_homepage: true,
  featured: true,
};

export const postResolver: Resolver<
  | ICreateBlogParams
  | ICreateOrgParams
  | ICreateRefParams
  | IUpdateBlogParams
  | IUpdateOrgParams
  | IUpdateRefParams
> = yupResolver(
  object({
    page_id: string().required('Vui lòng chọn trang!'),
  }),
);
