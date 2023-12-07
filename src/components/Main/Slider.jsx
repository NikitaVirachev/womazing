import React, { useState } from 'react';
import styled, { css } from 'styled-components';

import Indicator from '../Slider/Indicator.jsx';
import slideURL1 from '../../assets/img/pictures/slider-1.jpg';
import slideURL2 from '../../assets/img/pictures/slider-2.jpg';
import slideURL3 from '../../assets/img/pictures/slider-3.jpg';
import Arrow from '../Slider/Arrow.jsx';

const WIDTH = '72.9rem';
const HEIGHT = '48.7rem';

const SliderContainer = styled.div`
  position: relative;
`;

const SliderWindow = styled.div`
  width: ${WIDTH};
  height: ${HEIGHT};
  overflow: hidden;

  position: relative;
`;

const Slides = styled.div`
  display: flex;

  position: absolute;
  transition: transform 0.5s ease;
  transform: ${({ $currentSlide }) =>
    `translateX(calc(${$currentSlide - 1} * -${WIDTH}))`};
`;

const Slide = styled.div`
  width: ${WIDTH};
  height: ${HEIGHT};

  background: url(${(props) => (props.$url ? props.$url : '')}) center/cover
    no-repeat;
`;

const IndicatorContainer = styled.div`
  position: absolute;
  z-index: 50;
  bottom: 6.1rem;
  left: 30.8rem;
`;

const StyledArrow = css`
  position: absolute;
  z-index: 50;
  bottom: 24.8rem;
`;

const LeftArrow = styled.div`
  ${StyledArrow};
  left: -6.1rem;
`;

const RightArrow = styled.div`
  ${StyledArrow};
  transform: rotate(180deg);
  right: -5.9rem;
`;

const slidesCount = 3;

const Slider = () => {
  const [curSlide, setCurSlide] = useState(1);

  return (
    <SliderContainer>
      <LeftArrow>
        <Arrow
          onChangeSlider={() => setCurSlide((prevState) => prevState - 1)}
          isDisabled={curSlide === 1}
        />
      </LeftArrow>
      <SliderWindow>
        <Slides $currentSlide={curSlide}>
          <Slide $url={slideURL1} />
          <Slide $url={slideURL2} />
          <Slide $url={slideURL3} />
        </Slides>
      </SliderWindow>
      <RightArrow>
        <Arrow
          onChangeSlider={() => setCurSlide((prevState) => prevState + 1)}
          isDisabled={curSlide === slidesCount}
        />
      </RightArrow>

      <IndicatorContainer>
        <Indicator
          curRectangle={curSlide}
          onChangeSlide={(slide) => setCurSlide(slide)}
          slidesCount={slidesCount}
          mainColor="rgba(255, 255, 255, 0.36)"
          activeColor="#fff"
        />
      </IndicatorContainer>
    </SliderContainer>
  );
};

export default Slider;
