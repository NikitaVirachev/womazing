import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  callModalWindow: false,
};

const modalWindowsSlice = createSlice({
  name: 'Modal Window',
  initialState,
  reducers: {
    setCallModalWindow(state, action) {
      state.callModalWindow = action.payload;
    },
  },
});

export const modalWindowsActions = modalWindowsSlice.actions;

export default modalWindowsSlice.reducer;
