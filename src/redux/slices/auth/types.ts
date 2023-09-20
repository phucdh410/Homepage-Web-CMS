import { IPermissionsPayload } from '@/types/permissions';

interface IProfile {
  permissions: IPermissionsPayload[];
}

export interface IAuthState {
  isLogined: boolean;
  access_token: string | null | undefined;
  refresh_token: string | null | undefined;
  profile: IProfile | null;
}
