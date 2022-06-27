import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthState } from '../types/types';

const initialState: AuthState = {
  isAuth: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setIsAuth(state, action: PayloadAction<boolean>) {
      state.isAuth = action.payload;
    },
  },
});

export default authSlice.reducer;
export const { setIsAuth } = authSlice.actions;
