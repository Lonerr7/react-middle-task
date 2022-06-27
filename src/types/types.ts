export type AuthState = {
  isAuth: boolean;
  user: IUser;
  isFetching: boolean;
  errorMsg: string;
};

export type IUser = {
  username: string;
  password: string;
};
