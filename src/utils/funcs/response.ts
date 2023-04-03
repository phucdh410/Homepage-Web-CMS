import { IApiResponse } from '@/types/response';

export function isSuccess(response: IApiResponse) {
  return response?.status?.toString()[0] === '2';
}
