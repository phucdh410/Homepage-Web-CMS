export interface IPermission {
  name: string;
  id: string;
  code: string;
}

export interface IPermissionsPayload {
  permission_code: string;
  allowed: boolean;
}
