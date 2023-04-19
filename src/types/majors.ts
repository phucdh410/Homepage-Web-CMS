import { Dayjs } from 'dayjs';

export interface ICreateMajorParams {
  title: string;
  name: string;
  active: boolean;
}

export interface IGetMajorsResponse {
  id: string;
  title: string;
  name: string;
  updated_date: Date | Dayjs | string | null;
  active: boolean;
}

export interface IUpdateMajorParams extends ICreateMajorParams {}
