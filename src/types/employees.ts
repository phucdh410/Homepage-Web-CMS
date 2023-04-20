import { Dayjs } from 'dayjs';

import { IBasePaginateParams } from './params';

export interface IGetEmployeesResponse {
  id: string;
  fullname: string;
  academic_degree: string;
  updated_date: Date | Dayjs | string | null;
  active: boolean;
}

export interface IGetEmployeesParams extends IBasePaginateParams {}

export interface ICreateEmployeeParams {
  fullname: string;
  academic_degree: string;
  active: boolean;
  file_id: string;
}

export interface IGetDetailEmployeeResponse {
  id: string;
  fullname: string;
  academic_degree: string;
  active: boolean;
  file_id: string;
}

export interface IEmployeeForm extends Omit<IGetDetailEmployeeResponse, 'id'> {}

export interface IUpdateEmployeeParams extends ICreateEmployeeParams {}

export interface IEmployeeDataAttach {
  id?: string | null;
  position_id: string;
  employee_id: string;
  sort_order: number;
  deleted?: boolean;
}
