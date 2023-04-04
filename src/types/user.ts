export interface IUserFormParams {
  username: string;
  password?: string;
  permissions: any[];
  active: boolean;
  isCreate: boolean;
}

export interface IUsersDataTable {
  id: string;
  username: string;
  created_at: string;
  updated_at: string | null;
  active: boolean;
}
