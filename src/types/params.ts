export interface IBasePaginateParams {
  page: number;
  pages: number;
  input?: {
    search?: string;
  } | null;
}
