import { configureStore } from '@reduxjs/toolkit';

import heroSliderReducer from './heroSliderSlice.jsx';
import modalWindowsReducer from './modalWindowsSlice.jsx';

const store = configureStore({
  reducer: { heroSlider: heroSliderReducer, modalWindows: modalWindowsReducer },
});

export default store;
