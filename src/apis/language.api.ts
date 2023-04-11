import { post, put, remove } from '@/axios/request';
import {
  ICreateLanguageParams,
  IGetLanguagesParams,
  IGetLanguagesResponse,
  IUpdateLanguageParams,
} from '@/types/language';
import { IApiResponse, IPaginateData } from '@/types/response';

import { LANGUAGES } from './url';

export const getLanguages = (
  body: IGetLanguagesParams,
): Promise<IApiResponse<IPaginateData<IGetLanguagesResponse[]>, any>> => {
  return post(LANGUAGES.GET_LANGUAGES, body);
};

export const createLanguage = (body: ICreateLanguageParams) => {
  return post(LANGUAGES.CREATE_LANGUAGE, body);
};

export const updateLanguage = (id: string, body: IUpdateLanguageParams) => {
  return put(`${LANGUAGES.UPDATE_LANGUAGE}/${id}`, body);
};

export const deleteLanguage = (id: string) => {
  return remove(`${LANGUAGES.DELETE_LANGUAGE}/${id}`);
};
