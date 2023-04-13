import { Resolver } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import dayjs from 'dayjs';
import { boolean, date, number, object, string } from 'yup';

import { IBannerForm } from '@/types/banner';
import { IEventForm } from '@/types/event';
import { ILinks } from '@/types/homepage-link';
import { ICreateNotificationParams } from '@/types/notification';

//#region Banner
export const defaultValuesBanner: IBannerForm = {
  title: '',
  file_id: '',
  start_date: dayjs(),
  end_date: dayjs().endOf('year'),
};

export const bannerResolver: Resolver<IBannerForm> = yupResolver(
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

          if (dayjs(value).isAfter(parent?.end_date, 'date')) return false;

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

          if (dayjs(value).isBefore(parent?.start_date, 'date')) return false;

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
  active: true,
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
      active: boolean(),
      language_id: number(),
    }),
  );
//#endregion

//#region Event
export const defaultValuesEvent = {
  title: '',
  file_id: '',
  start_date: dayjs(),
  end_date: dayjs().endOf('year'),
};

export const eventResolver: Resolver<IEventForm> = yupResolver(
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

          if (dayjs(value).isAfter(parent?.end_date, 'date')) return false;

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

          if (dayjs(value).isBefore(parent?.start_date, 'date')) return false;

          return true;
        },
      ),
    language_id: number().required(),
  }),
);
//#endregion

//#region Link
export const defaultValuesLink: ILinks = {
  youth: '',
  online: '',
  certificate: '',
  help: '',
  facebook: '',
};

export const linkResolver: Resolver<ILinks> = yupResolver(
  object({
    youth: string()
      .url('Đường dẫn/Liên kết không hợp lệ!')
      .required('Vui lòng nhập đường dẫn/liên kết!'),
    online: string()
      .url('Đường dẫn/Liên kết không hợp lệ!')
      .required('Vui lòng nhập đường dẫn/liên kết!'),
    certificate: string()
      .url('Đường dẫn/Liên kết không hợp lệ!')
      .required('Vui lòng nhập đường dẫn/liên kết!'),
    help: string()
      .url('Đường dẫn/Liên kết không hợp lệ!')
      .required('Vui lòng nhập đường dẫn/liên kết!'),
    facebook: string()
      .url('Đường dẫn/Liên kết không hợp lệ!')
      .required('Vui lòng nhập đường dẫn/liên kết!'),
  }),
);
//#endregion
