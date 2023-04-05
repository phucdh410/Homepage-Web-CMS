import { get } from '@/axios/request';
import { IPermission } from '@/types/permission';
import { IApiResponse } from '@/types/response';

import { PERMISSIONS } from './url';

export const getPermissions = async (): Promise<
  IApiResponse<IPermission[], any>
> => {
  return await get(PERMISSIONS.GET_PERMISSIONS);
};
