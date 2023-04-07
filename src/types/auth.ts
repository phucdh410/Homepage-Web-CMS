import { IPermission } from './permission';

export interface ILoginParams {
  username: string;
  password: string;
}

export interface ILoginResponse {
  access_token: string;
  refresh_token: string;
}

export interface IProfileResponse {
  user_id: string;
  username: string;
  permissions: IPermission[];
}
