export interface IBasePaginateParams {
  page: number;
  pages: number;
  inputs?: {
    search?: string;
  } | null;
}
