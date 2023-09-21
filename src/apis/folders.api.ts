import { get, post, put, remove } from '@/axios/request';
import {
  IGetDetailFolderResponse,
  IGetFoldersResponse,
  IUpdateFolderParams,
} from '@/types/folders';
import { IApiResponse, IPaginateData } from '@/types/response';

import { FOLDERS } from './url';

export const createFolder = async (body: FormData) => {
  return await post(FOLDERS.CREATE, body);
};

export const getFolders = async (
  locale: string,
): Promise<IApiResponse<IPaginateData<IGetFoldersResponse[]>, any>> => {
  return await get(FOLDERS.GET_LIST, { params: { locale } });
};

export const getDetailFolder = async (
  id: string,
): Promise<IApiResponse<IGetDetailFolderResponse, any>> => {
  return await get(`${FOLDERS.GET_DETAIL}/${id}`);
};

export const updateFolder = async (id: string, body: IUpdateFolderParams) => {
  return await put(`${FOLDERS.UPDATE}/${id}`, body);
};

export const deleteFolder = async (id: string) => {
  return await remove(`${FOLDERS.DELETE}/${id}`);
};
