import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  slidesCount: 3,
  currentSlide: 1,
};

const heroSliderSlice = createSlice({
  name: 'heroSlider',
  initialState,
  reducers: {
    setCurrentSlide(state, action) {
      state.currentSlide = action.payload;
    },
  },
});

export const heroSliderActions = heroSliderSlice.actions;

export default heroSliderSlice.reducer;
