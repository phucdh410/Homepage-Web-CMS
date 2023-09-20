import { PERMISSIONS_ENUM } from '@/constants/enums';

import { IUserPermissionsResponse } from './types/permissions';

export const PERMISSIONS_MOCK: IUserPermissionsResponse[] = [
  {
    allowed: true,
    permission_code: PERMISSIONS_ENUM.USERS,
    permission_name: 'Quản lý người dùng',
  },
  {
    allowed: true,
    permission_code: PERMISSIONS_ENUM.HOMEPAGE,
    permission_name: 'Quản lý trang chủ',
  },
  {
    allowed: true,
    permission_code: PERMISSIONS_ENUM.INFORMATION,
    permission_name: 'Quản lý thông tin',
  },
  {
    allowed: true,
    permission_code: PERMISSIONS_ENUM.MENU,
    permission_name: 'Quản lý Menu',
  },
  {
    allowed: true,
    permission_code: PERMISSIONS_ENUM.POSTS,
    permission_name: 'Quản lý nội dung',
  },
  {
    allowed: true,
    permission_code: PERMISSIONS_ENUM.SCHEDULES,
    permission_name: 'Lịch công tác',
  },
  {
    allowed: true,
    permission_code: PERMISSIONS_ENUM.APPROVE,
    permission_name: 'Duyệt tin',
  },
  {
    allowed: true,
    permission_code: PERMISSIONS_ENUM.STAFF,
    permission_name: 'Quản lý nhân sự',
  },
  {
    allowed: true,
    permission_code: PERMISSIONS_ENUM.FOOTER,
    permission_name: 'Footer',
  },
  {
    allowed: true,
    permission_code: PERMISSIONS_ENUM.LANGUAGE,
    permission_name: 'Ngôn ngữ',
  },
];
