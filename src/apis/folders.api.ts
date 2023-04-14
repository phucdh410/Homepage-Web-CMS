import { get, post, put, remove } from '@/axios/request';
import {
  ICreateFolderParams,
  IGetDetailFolderResponse,
  IGetFoldersParams,
  IGetFoldersResponse,
  IUpdateFolderParams,
} from '@/types/folder';
import { IApiResponse, IPaginateData } from '@/types/response';

import { FOLDERS } from './url';

export const createFolder = async (body: ICreateFolderParams) => {
  return await post(FOLDERS.CREATE_FOLDER, body);
};

export const getFolders = async (
  body: IGetFoldersParams,
): Promise<IApiResponse<IPaginateData<IGetFoldersResponse[]>, any>> => {
  return await post(FOLDERS.GET_FOLDERS, body);
};

export const getDetailFolder = async (
  id: string,
): Promise<IApiResponse<IGetDetailFolderResponse, any>> => {
  return await get(`${FOLDERS.GET_FOLDER_BY_ID}/${id}`);
};

export const updateFolder = async (id: string, body: IUpdateFolderParams) => {
  return await put(`${FOLDERS.UPDATE_FOLDER}/${id}`, body);
};

export const deleteFolder = async (id: string) => {
  return await remove(`${FOLDERS.DELETE_FOLDER}/${id}`);
};
