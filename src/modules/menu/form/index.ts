import { Resolver } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { boolean, number, object, string } from 'yup';

import { DISPLAY_TYPES } from '@/constants/enums';
import { ICreateFolderParams, IUpdateFolderParams } from '@/types/folder';
import { ICreateMenuParams } from '@/types/menu';
import { ICreatePageParams, IUpdatePageParams } from '@/types/page';

//#region Page
export const defaultValuesPage: ICreatePageParams = {
  title: '',
  active: true,
  show_homepage: true,
  display: DISPLAY_TYPES.POST,
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
  show_homepage: true,
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
//#endregion
