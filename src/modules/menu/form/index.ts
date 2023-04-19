import { Resolver } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { boolean, number, object, string } from 'yup';

import { DISPLAY_ENUMS } from '@/constants/enums';
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
  title: '',
  page_id: '',
  parent_id: '',
  active: true,
  show_homepage: false,
  display: 1,
};

export const folderResolver: Resolver<
  ICreateFolderParams | IUpdateFolderParams
> = yupResolver(
  object({
    title: string().required('Vui lòng nhập tên danh mục!'),
    page_id: string().required('Vui lòng chọn trang!'),
    parent_id: string(),
    active: boolean(),
    show_homepage: boolean(),
    display: number().required(),
  }),
);
//#endregion

//#region Menu
export const defaultValuesMenu: ICreateMenuParams = {
  title: '',
  display: 1,
  active: true,
  menus: [],
};

export const menuResolver: Resolver<ICreateMenuParams | IUpdateMenuParams> =
  yupResolver(object({}));
//#endregion
