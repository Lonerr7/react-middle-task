import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { authAPI } from '../api/api';
import { AuthState, IUser } from '../types/types';

const initialState: AuthState = {
  isAuth: false,
  user: {} as IUser,
  isFetching: false,
  errorMsg: '',
};

export const logUserIn = createAsyncThunk(
  'auth/logUserIn',
  async ({ username, password }: IUser, { rejectWithValue }) => {
    try {
      const response = await authAPI.logIn();
      const user = response.data.find(
        (user) => user.username === username && user.password === password
      );

      if (!user) throw new Error('Wrong email or password');

      return user;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logUserOut(state) {
      state.isAuth = false;
      state.user = {} as IUser;
    },
  },
  extraReducers: {
    [logUserIn.pending.type]: (state) => {
      state.isFetching = true;
    },
    [logUserIn.fulfilled.type]: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
      state.isAuth = true;
      state.isFetching = false;
      state.errorMsg = '';
    },
    [logUserIn.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isFetching = false;
      state.errorMsg = action.payload;
    },
  },
});

export default authSlice.reducer;
export const { logUserOut } = authSlice.actions;
