import { PERMISSIONS_ENUM } from '@/constants/enums';
import { store } from '@/redux/';
import { IAllowedPermissions } from '@/slices/permission';

export const checkPermission = (permission_code: PERMISSIONS_ENUM) => {
  const permissions = store.getState().permission
    .permissions as IAllowedPermissions;

  if (!permissions) return false;

  return permissions[permission_code];
};
