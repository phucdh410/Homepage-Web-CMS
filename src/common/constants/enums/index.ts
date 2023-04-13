import { IOption } from '@/types/options';

//#region Display (Dạng hiển thị)
export enum DISPLAY_TYPES {
  POST = 1,
  DIAGRAM,
  LIST,
  LINK,
  NO_PAGE,
}

export const DISPLAY_LABELS = {
  [DISPLAY_TYPES.POST]: 'Bài viết',
  [DISPLAY_TYPES.DIAGRAM]: 'Sơ đồ',
  [DISPLAY_TYPES.LIST]: 'Danh sách',
  [DISPLAY_TYPES.LINK]: 'Liên kết',
  [DISPLAY_TYPES.NO_PAGE]: 'Trang trống',
};

export const DISPLAY_OPTIONS: IOption[] = [
  { id: 1, label: DISPLAY_LABELS[1], value: DISPLAY_TYPES.POST },
  { id: 2, label: DISPLAY_LABELS[2], value: DISPLAY_TYPES.DIAGRAM },
  { id: 3, label: DISPLAY_LABELS[3], value: DISPLAY_TYPES.LIST },
  { id: 4, label: DISPLAY_LABELS[4], value: DISPLAY_TYPES.LINK },
  { id: 5, label: DISPLAY_LABELS[5], value: DISPLAY_TYPES.NO_PAGE },
];
//#endregion

//#region Position Display (Vị trí hiển thị)
export enum POSITION_DISPLAY_TYPES {
  TOP_MENU = 1,
  FOOTER,
}

export const POSITION_DISPLAY_LABELS = {
  [POSITION_DISPLAY_TYPES.TOP_MENU]: 'Top menu',
  [POSITION_DISPLAY_TYPES.FOOTER]: 'Footer',
};

export const POSITION_DISPLAY_OPTIONS: IOption[] = [
  {
    id: 1,
    label: POSITION_DISPLAY_LABELS[1],
    value: POSITION_DISPLAY_TYPES.TOP_MENU,
  },
  {
    id: 2,
    label: POSITION_DISPLAY_LABELS[2],
    value: POSITION_DISPLAY_TYPES.FOOTER,
  },
];
//#endregion

//#region Menu Types (Dạng menu)
export enum MENU_TYPES {
  PAGE = 1,
  FOLDER,
}
//#endregion
