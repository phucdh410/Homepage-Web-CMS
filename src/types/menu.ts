import { IBasePaginateParams } from './params';

export interface ICreateMenuParams {
  title: string;
  level: number;
  type: number;
  active: boolean;
  display: number;
}

export interface IGetMenusResponse {
  id: string;
  title: string;
  display: number;
  active: boolean;
}

export interface IGetMenusParams extends IBasePaginateParams {}

export interface IGetDetailMenuResponse {
  id: string;
  title: string;
  display: number;
  active: boolean;
}

export interface IUpdateMenuParams extends ICreateMenuParams {}
