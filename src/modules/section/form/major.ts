import { Resolver } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { array, boolean, object, string } from 'yup';

import { ICreateMajorParams, IUpdateMajorParams } from '@/types/majors';

export const defaultValuesMajor: ICreateMajorParams = {
  title: '',
  majors: [],
  active: true,
};

export const majorResolver: Resolver<ICreateMajorParams | IUpdateMajorParams> =
  yupResolver(
    object({
      title: string().required('Vui lòng nhập tiêu đề!'),
      active: boolean(),
      majors: array()
        .min(1, 'Có tối thiểu 1 ngành đào tạo!')
        .required('Vui lòng thêm ngành đào tạo!'),
    }),
  );
