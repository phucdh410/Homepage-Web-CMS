import { PERMISSIONS_ENUM } from '@/constants/enums';

export type IAllowedPermissions = {
  [key in PERMISSIONS_ENUM]: boolean;
};

export interface IPermissionState {
  permissions: IAllowedPermissions | null;
}
