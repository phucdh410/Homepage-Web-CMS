import { Resolver } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import dayjs from 'dayjs';
import { date, object, string } from 'yup';

import {
  ICreateScheduleParams,
  IUpdateScheduleParams,
} from '@/types/schedules';

export const defaultValuesSchedule: ICreateScheduleParams = {
  title: '',
  content: '',
  date: dayjs(),
  location: '',
  attendee: '',
  active: true,
};

export const scheduleResolver: Resolver<
  ICreateScheduleParams | IUpdateScheduleParams
> = yupResolver(
  object({
    title: string().required('Vui lòng nhập tiêu đề!'),
    content: string(),
    date: date().required('Vui lòng chọn thời gian diễn ra!'),
    location: string(),
    attendee: string(),
  }),
);
