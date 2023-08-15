import { IOption } from '@/types/options';

//#region Display (Dạng hiển thị)
export enum DISPLAY_ENUMS {
  POST = 1,
  DIAGRAM,
  LIST,
  LINK,
  NO_PAGE,
}

export type DISPLAY_TYPES = 1 | 2 | 3 | 4 | 5;

export const DISPLAY_LABELS = {
  [DISPLAY_ENUMS.POST]: 'Bài viết',
  [DISPLAY_ENUMS.DIAGRAM]: 'Sơ đồ',
  [DISPLAY_ENUMS.LIST]: 'Danh sách',
  [DISPLAY_ENUMS.LINK]: 'Liên kết',
  [DISPLAY_ENUMS.NO_PAGE]: 'Trang trống',
};

export const DISPLAY_LABELS2 = {
  [DISPLAY_ENUMS.POST]: 'Thông tin',
  [DISPLAY_ENUMS.DIAGRAM]: 'Sơ đồ',
  [DISPLAY_ENUMS.LIST]: 'Danh sách',
  [DISPLAY_ENUMS.LINK]: 'Liên kết',
  [DISPLAY_ENUMS.NO_PAGE]: 'Trang trống',
};

export const DISPLAY_OPTIONS: IOption[] = [
  { id: 1, label: DISPLAY_LABELS[1], value: DISPLAY_ENUMS.POST },
  { id: 2, label: DISPLAY_LABELS[2], value: DISPLAY_ENUMS.DIAGRAM },
  { id: 3, label: DISPLAY_LABELS[3], value: DISPLAY_ENUMS.LIST },
  { id: 4, label: DISPLAY_LABELS[4], value: DISPLAY_ENUMS.LINK },
  { id: 5, label: DISPLAY_LABELS[5], value: DISPLAY_ENUMS.NO_PAGE },
];
//#endregion

//#region Position Display (Vị trí hiển thị)
export enum POSITION_DISPLAY_ENUMS {
  TOP_MENU = 1,
  FOOTER,
}

export type POSITION_DISPLAY_TYPES = 1 | 2;

export const POSITION_DISPLAY_LABELS = {
  [POSITION_DISPLAY_ENUMS.TOP_MENU]: 'Top menu',
  [POSITION_DISPLAY_ENUMS.FOOTER]: 'Footer',
};

export const POSITION_DISPLAY_OPTIONS: IOption[] = [
  {
    id: 1,
    label: POSITION_DISPLAY_LABELS[1],
    value: POSITION_DISPLAY_ENUMS.TOP_MENU,
  },
  {
    id: 2,
    label: POSITION_DISPLAY_LABELS[2],
    value: POSITION_DISPLAY_ENUMS.FOOTER,
  },
];
//#endregion

//#region Menu Types (Dạng menu)
export enum MENU_TYPES {
  PAGE = 1,
  FOLDER,
}
//#endregion

//#region Permissions
export enum PERMISSIONS_ENUM {
  USERS = '1',
  HOMEPAGE = '2',
  INFORMATION = '3',
  MENU = '4',
  POSTS = '5',
  SCHEDULES = '6',
  APPROVE = '7',
  STAFF = '8',
  FOOTER = '9',
  LANGUAGE = '10',
}

export const PERMISSIONS_CODES = [
  {
    id: PERMISSIONS_ENUM.USERS,
    value: PERMISSIONS_ENUM.USERS,
    name: 'Quản lí người dùng',
  },
  {
    id: PERMISSIONS_ENUM.HOMEPAGE,
    value: PERMISSIONS_ENUM.HOMEPAGE,
    name: 'Quản lí trang chủ',
  },
  {
    id: PERMISSIONS_ENUM.INFORMATION,
    value: PERMISSIONS_ENUM.INFORMATION,
    name: 'Quản lí thông tin',
  },
  {
    id: PERMISSIONS_ENUM.MENU,
    value: PERMISSIONS_ENUM.MENU,
    name: 'Quản lí Menu',
  },
  {
    id: PERMISSIONS_ENUM.POSTS,
    value: PERMISSIONS_ENUM.POSTS,
    name: 'Quản lí nội dung',
  },
  {
    id: PERMISSIONS_ENUM.SCHEDULES,
    value: PERMISSIONS_ENUM.SCHEDULES,
    name: 'Lịch công tác',
  },
  {
    id: PERMISSIONS_ENUM.APPROVE,
    value: PERMISSIONS_ENUM.APPROVE,
    name: 'Duyệt tin',
  },
  {
    id: PERMISSIONS_ENUM.STAFF,
    value: PERMISSIONS_ENUM.STAFF,
    name: 'Quản lí nhân sự',
  },
  {
    id: PERMISSIONS_ENUM.FOOTER,
    value: PERMISSIONS_ENUM.FOOTER,
    name: 'Footer',
  },
  {
    id: PERMISSIONS_ENUM.LANGUAGE,
    value: PERMISSIONS_ENUM.LANGUAGE,
    name: 'Ngôn ngữ',
  },
];
//#endregion
