export interface IPermissionsPayload {
  id?: string;
  code?: string;
  allowed: boolean;
  name?: string;
}

export interface IUserPermissionsResponse {
  permission_code: string;
  permission_name: string;
  allowed: boolean;
}
