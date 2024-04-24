import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ModalWindowState {
  callModalWindow: boolean;
}

const initialState: ModalWindowState = {
  callModalWindow: false,
};

const modalWindowsSlice = createSlice({
  name: 'Modal Window',
  initialState,
  reducers: {
    setCallModalWindow(state, action: PayloadAction<boolean>) {
      state.callModalWindow = action.payload;
    },
  },
});

export const modalWindowsActions = modalWindowsSlice.actions;

export default modalWindowsSlice.reducer;
