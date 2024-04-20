import React from 'react';
import styled from 'styled-components';

import Rectangle from './Rectangle.jsx';

const IndicatorContainer = styled.div`
  display: inline-flex;
`;

type IndicatorProps = {
  curRectangle: number;
  onChangeSlide: (slide: number) => void;
  slidesCount: number;
  mainColor: string;
  activeColor: string;
};

const Indicator = (props: IndicatorProps) => {
  return (
    <IndicatorContainer>
      {Array.from({ length: props.slidesCount }, (_, index) => (
        <Rectangle
          key={index}
          isCurrent={props.curRectangle === index + 1}
          onClick={props.onChangeSlide}
          number={index + 1}
          mainColor={props.mainColor}
          activeColor={props.activeColor}
        />
      ))}
    </IndicatorContainer>
  );
};

export default Indicator;
