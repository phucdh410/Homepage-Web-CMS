import { Resolver } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { boolean, number, object, string } from 'yup';

import { DISPLAY_ENUMS, MENU_TYPE_ENUMS } from '@/constants/enums';
import { ICreateFolderParams, IUpdateFolderParams } from '@/types/folders';
import { ICreateMenuParams, IUpdateMenuParams } from '@/types/menus';
import { ICreatePageParams, IUpdatePageParams } from '@/types/pages';

//#region Page
export const defaultValuesPage: ICreatePageParams = {
  title: '',
  active: true,
  show_homepage: true,
  display: DISPLAY_ENUMS.POST,
};

export const pageResolver: Resolver<ICreatePageParams | IUpdatePageParams> =
  yupResolver(
    object({
      title: string().required('Vui lòng nhập tên trang!'),
      active: boolean(),
      show_homepage: boolean(),
      display: number().required(),
    }),
  );
//#endregion

//#region Folder
export const defaultValuesFolder: ICreateFolderParams = {
  title: {
    vi: '',
    en: '',
  },
  description: {
    vi: '',
    en: '',
  },
  // page_id: '',
  parent_id: '',
  // active: true,
  is_pin: false,
  type: MENU_TYPE_ENUMS.CATEGORY,
  link: '',
  slug: '',
};

export const folderResolver: Resolver<
  ICreateFolderParams | IUpdateFolderParams
> = yupResolver(
  object({
    title: object({
      vi: string().required('Vui lòng nhập tên danh mục!'),
      en: string().required('Vui lòng nhập tên danh mục!'),
    }),
    // page_id: string().required('Vui lòng chọn trang!'),
    parent_id: string().required('Vui lòng chọn danh mục cha!'),
    slug: string().required('Vui lòng nhập slug!'),
    is_pin: boolean(),
    // show_homepage: boolean(),
    type: number().required(),
  }),
);
//#endregion

//#region Menu
export const defaultValuesMenu: ICreateMenuParams = {
  title: {
    vi: '',
    en: '',
  },
  type: MENU_TYPE_ENUMS.CATEGORY,
  // active: true,
  description: {
    vi: '',
    en: '',
  },
  slug: '',
  link: '',
  // menus: [],
  is_menu: true,
  is_pin: true,
};

export const menuResolver: Resolver<ICreateMenuParams | IUpdateMenuParams> =
  yupResolver(object({}));
//#endregion
