import { Resolver } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { boolean, number, object, string } from 'yup';

import { ICreateTimelineParams, IUpdateTimelineParams } from '@/types/timeline';

export const defaultValuesTimeline: ICreateTimelineParams = {
  from: new Date().getFullYear(),
  to: new Date().getFullYear() + 1,
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
      .typeError('Vui lòng nhập mốc thời gian!')
      .required('Vui lòng nhập mốc thời gian!'),
    title: string().required('Vui lòng nhập tiêu đề!'),
    active: boolean(),
  }),
);
