import { IUserPermissionsResponse } from './permissions';

export interface ILoginParams {
  username: string;
  password: string;
}

export interface ILoginResponse {
  username: string;
  access_token: string;
  refresh_token: string;
}

export interface IProfileResponse {
  username: string;
  permissions: IUserPermissionsResponse[];
}
