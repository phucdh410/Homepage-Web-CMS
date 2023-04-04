import { get, post } from '@/axios/request';
import { ILoginParams, ILoginResponse } from '@/types/auth';
import { IApiResponse } from '@/types/response';

import { AUTH } from './url';

export const login = (
  body: ILoginParams,
): Promise<IApiResponse<ILoginResponse, any>> => {
  return post(AUTH.LOGIN, body);
};

export const profile = () => {
  return get(AUTH.GET_PROFILE);
};

export const logout = () => {
  return get(AUTH.LOGOUT);
};
