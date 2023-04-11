import { Dayjs } from 'dayjs';

import { IFileUpload } from './file';
import { IBasePaginateParams } from './params';

export interface IGetPersonnelsResponse {
  id: string;
  name: string;
  degree: string;
  updated_at: Date | Dayjs | string | null;
  published: boolean;
}

export interface IGetPersonnelsParams extends IBasePaginateParams {}

export interface ICreatePersonnelParams {
  name: string;
  degree: string;
  published: boolean;
  file_id: string;
}

export interface IGetDetailPersonnelResponse {
  id: string;
  name: string;
  degree: string;
  published: boolean;
  file: IFileUpload | null;
}

export interface IPersonnelForm
  extends Omit<IGetDetailPersonnelResponse, 'id'> {}

export interface IUpdatePersonnelParams extends ICreatePersonnelParams {}
