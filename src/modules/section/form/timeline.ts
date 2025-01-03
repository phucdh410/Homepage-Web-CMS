import { Resolver } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { boolean, number, object, string } from 'yup';

import {
  ICreateTimelineParams,
  IUpdateTimelineParams,
} from '@/types/timelines';

export const defaultValuesTimeline: ICreateTimelineParams = {
  from: new Date().getFullYear(),
  to: null,
  title: '',
  active: true,
};

export const timelineResolver: Resolver<
  ICreateTimelineParams | IUpdateTimelineParams
> = yupResolver(
  object({
    from: number()
      .typeError('Vui lòng nhập mốc thời gian!')
      .required('Vui lòng nhập mốc thời gian!'),
    to: number()
      .nullable()
      .transform((value) => {
        if (value === '' || value === undefined || isNaN(value)) return null;
        else return value;
      }),
    title: string().required('Vui lòng nhập tiêu đề!'),
    active: boolean(),
  }),
);
