import { Resolver } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import dayjs from 'dayjs';
import { boolean, date, number, object, string } from 'yup';

import { IBannerForm } from '@/types/banner';
import { ICreateEventParams } from '@/types/event';
import { ICreateNotificationParams } from '@/types/notification';

//#region Banner
export const defaultValuesBanner: IBannerForm = {
  title: '',
  file: null,
  start_date: new Date(),
  end_date: dayjs().add(1, 'day'),
  language_id: 1,
};

export const bannerResolver: Resolver<IBannerForm> = yupResolver(
  object({
    title: string()
      .required('Vui lòng nhập tiêu đề!')
      .trim('Tiêu đề chứa khoảng trắng không hợp lệ!')
      .strict()
      .max(500, 'Tiêu đề tối đa 500 kí tự!'),
    file: object()
      .typeError('Vui lòng chọn hình ảnh!')
      .required('Vui lòng chọn hình ảnh!'),
    start_date: date()
      .typeError('Định dạng ngày không hợp lệ!')
      .required('Vui lòng chọn ngày!')
      .test(
        'invalid',
        'Ngày bắt đầu không được sau ngày kết thúc!',
        (value, context) => {
          const { parent } = context;

          if (dayjs(value).isAfter(parent?.end_date)) return false;

          return true;
        },
      ),
    end_date: date()
      .typeError('Định dạng ngày không hợp lệ!')
      .required('Vui lòng chọn ngày!')
      .test(
        'invalid',
        'Ngày kết thúc không được trước ngày bắt đầu!',
        (value, context) => {
          const { parent } = context;

          if (dayjs(value).isBefore(parent?.start_date)) return false;

          return true;
        },
      ),
    language_id: number().required(),
  }),
);
//#endregion

//#region Notification
export const defaultValuesNotification = {
  title: '',
  published: true,
  language_id: 1,
};

export const notificationResolver: Resolver<ICreateNotificationParams> =
  yupResolver(
    object({
      title: string()
        .required('Vui lòng nhập tiêu đề!')
        .trim('Tiêu đề chứa khoảng trắng không hợp lệ!')
        .strict()
        .max(500, 'Tiêu đề tối đa 500 kí tự!'),
      published: boolean(),
      language_id: number(),
    }),
  );
//#endregion

//#region Event
export const defaultValuesEvent = {
  title: '',
  file_id: '',
  start_date: new Date(),
  end_date: dayjs().add(1, 'day'),
  language_id: 1,
};

export const eventResolver: Resolver<ICreateEventParams> = yupResolver(
  object({
    title: string()
      .required('Vui lòng nhập tiêu đề!')
      .trim('Tiêu đề chứa khoảng trắng không hợp lệ!')
      .strict()
      .max(500, 'Tiêu đề tối đa 500 kí tự!'),
    file_id: string().required('Vui lòng chọn hình ảnh!'),
    start_date: date()
      .typeError('Định dạng ngày không hợp lệ!')
      .required('Vui lòng chọn ngày!')
      .test(
        'invalid',
        'Ngày bắt đầu không được sau ngày kết thúc!',
        (value, context) => {
          const { parent } = context;

          if (dayjs(value).isAfter(parent?.end_date)) return false;

          return true;
        },
      ),
    end_date: date()
      .typeError('Định dạng ngày không hợp lệ!')
      .required('Vui lòng chọn ngày!')
      .test(
        'invalid',
        'Ngày kết thúc không được trước ngày bắt đầu!',
        (value, context) => {
          const { parent } = context;

          if (dayjs(value).isBefore(parent?.start_date)) return false;

          return true;
        },
      ),
    language_id: number().required(),
  }),
);
//#endregion
