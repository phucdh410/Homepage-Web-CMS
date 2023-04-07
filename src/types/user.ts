import { IBasePaginateParams } from './params';
import { IPermission } from './permission';

export interface IUserFormParams {
  username: string;
  password?: string;
  permissions: any[];
  active: boolean;
  isCreate: boolean;
}

export interface IUsersDataTable {
  id: string;
  username: string;
  created_at: string;
  updated_at: string | null;
  active: boolean;
}

export interface IUserDetail {
  id: string;
  username: string;
  active: boolean;
  permissions: IPermission[];
}

export interface IUpdateUserParams {
  username: string;
  active: boolean;
  permissions: IPermission[];
}

export interface IGetUsersParams extends IBasePaginateParams {}
