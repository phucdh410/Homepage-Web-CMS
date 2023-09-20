export interface IGetFooterResponse {
  id: string;
  content: string;
}

export interface ICreateFooterParams {
  content: string;
}

export interface IUpdateFooterParams extends ICreateFooterParams {}
