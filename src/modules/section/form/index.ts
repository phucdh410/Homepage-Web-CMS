import { Resolver } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { object, string } from 'yup';

import { ICreateSectionParams, IUpdateSectionParams } from '@/types/sections';

export const defaultValuesSection: ICreateSectionParams = {
  name: '',
  section_group_id: '',
  slogan: '',
  file_id: '',
  display: 1,
  active: true,
  education_quality: '',
  master_quality: '',
  education_aim: '',
};

export const sectionResolver: Resolver<
  ICreateSectionParams | IUpdateSectionParams
> = yupResolver(
  object({
    name: string().required('Vui lòng nhập tên khoa!'),
    section_group_id: string().required('Vui lòng chọn nhóm khoa!'),
    slogan: string().required('Vui lòng nhập slogan!'),
    file_id: string().required('Vui lòng chọn ảnh bìa!'),
  }),
);
