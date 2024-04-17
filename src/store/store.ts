import { configureStore } from '@reduxjs/toolkit';

import heroSliderReducer from './heroSliderSlice.jsx';
import modalWindowsReducer from './modalWindowsSlice.jsx';

export const store = configureStore({
  reducer: { heroSlider: heroSliderReducer, modalWindows: modalWindowsReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
