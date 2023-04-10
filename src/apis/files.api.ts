import { post } from '@/axios/request';
import { formatFileName } from '@/funcs/';

import { FILES } from './url';

export const uploadFile = (file: File) => {
  const { name, type } = file;

  const newFile = new File([file], formatFileName(name), { type });

  const payload = new FormData();

  payload.append('file', newFile);

  return post(FILES.UPLOAD, payload);
};
