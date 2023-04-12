import { Resolver } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { boolean, object, string } from 'yup';

import { ICreateLanguageParams, IUpdateLanguageParams } from '@/types/language';

export const defaultValuesLanguage = {
  title: '',
  active: true,
};

export const languageResolver: Resolver<
  ICreateLanguageParams | IUpdateLanguageParams
> = yupResolver(
  object({
    title: string().trim().required('Vui lòng nhập tên ngôn ngữ!'),
    active: boolean(),
  }),
);
