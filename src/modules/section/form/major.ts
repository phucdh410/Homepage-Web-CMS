import { Resolver } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { boolean, object, string } from 'yup';

import { ICreateMajorParams, IUpdateMajorParams } from '@/types/majors';

export const defaultValuesMajor: ICreateMajorParams = {
  title: '',
  name: '',
  active: true,
};

export const majorResolver: Resolver<ICreateMajorParams | IUpdateMajorParams> =
  yupResolver(
    object({
      title: string().required('Vui lòng nhập tiêu đề!'),
      name: string().required('Vui lòng nhập ngành đào tạo!'),
      active: boolean(),
    }),
  );
