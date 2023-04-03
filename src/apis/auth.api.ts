import { get, post } from '@/axios/request';
import { ILoginParams } from '@/types/auth';

import { AUTH } from './url';

export const profile = () => {
  return get(AUTH.GET_PROFILE);
};

export const login = (body: ILoginParams) => {
  return post(AUTH.LOGIN, body);
};

export const logout = () => {
  return get(AUTH.LOGOUT);
};
