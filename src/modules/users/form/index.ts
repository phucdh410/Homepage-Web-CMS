import { Resolver } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { array, boolean, object, string } from 'yup';

import { IUserFormParams } from '@/types/user';

export const defaultValues: IUserFormParams = {
  username: '',
  password: '',
  active: true,
  permission: [],
  isEdit: false,
};

export const userResolver: Resolver<IUserFormParams> = yupResolver(
  object({
    username: string()
      .required('Vui lòng nhập username!')
      .trim('Username chứa khoảng trắng không hợp lệ!')
      .strict()
      .max(255, 'Username tối đa 255 kí tự!'),
    password: string().when('isCreate', {
      is: true,
      then: () =>
        string()
          .trim('Password chứa khoảng trắng không hợp lệ!')
          .strict()
          .max(255, 'Password tối đa 255 kí tự!')
          .required('Vui lòng nhập password!'),
    }),
    permissions: array().min(
      1,
      'Chọn phân quyền ít nhất 1 chức năng cho người dùng!',
    ),
    active: boolean(),
  }),
);
