import { createSlice } from '@reduxjs/toolkit';

export const UserEmptyState = {
  name: '',
  email: ''
};

export const userSlice = createSlice({
  name: 'user',
  initialState: UserEmptyState,
  reducers: {
    createUser: (state, action) => {
      return action.payload;
    },
    modifyUser: (state, action) => {
      return { ...state, ...action.payload };
    },
    resetUser: () => {
      return UserEmptyState;
    }
  }
});

export const { createUser, modifyUser, resetUser } = userSlice.actions;
