import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface HeroSliderState {
  slidesCount: number;
  currentSlide: number;
}

const initialState: HeroSliderState = {
  slidesCount: 3,
  currentSlide: 1,
};

const heroSliderSlice = createSlice({
  name: 'heroSlider',
  initialState,
  reducers: {
    setCurrentSlide(state, action: PayloadAction<number>) {
      state.currentSlide = action.payload;
    },
  },
});

export const heroSliderActions = heroSliderSlice.actions;

export default heroSliderSlice.reducer;
