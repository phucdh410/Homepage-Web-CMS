interface IProfile {}

export interface IAuthState {
  isLogined: boolean;
  access_token: string | null | undefined;
  refresh_token: string | null | undefined;
  profile: IProfile | null;
}
