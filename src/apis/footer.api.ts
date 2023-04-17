import { get, post, put } from '@/axios/request';
import {
  ICreateFooterParams,
  IGetFooterResponse,
  IUpdateFooterParams,
} from '@/types/footer';
import { IApiResponse } from '@/types/response';

import { FOOTER } from './url';

export const getFooter = (): Promise<IApiResponse<IGetFooterResponse, any>> => {
  return get(FOOTER.GET_FOOTER);
};

export const createFooter = (body: ICreateFooterParams) => {
  return post(FOOTER.CREATE, body);
};

export const updateFooter = (body: IUpdateFooterParams) => {
  return put(FOOTER.UPDATE, body);
};
