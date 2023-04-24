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
