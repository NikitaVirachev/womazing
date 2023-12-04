import { configureStore } from '@reduxjs/toolkit';

import heroSliderReducer from './heroSliderSlice.jsx';

const store = configureStore({ reducer: { heroSlider: heroSliderReducer } });

export default store;
