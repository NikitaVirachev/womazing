import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Rectangle from './Rectangle.jsx';

const IndicatorContainer = styled.div`
  display: inline-flex;
`;

const Indicator = (props) => {
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

Indicator.propTypes = {
  curRectangle: PropTypes.number,
  onChangeSlide: PropTypes.func,
  slidesCount: PropTypes.number,
  mainColor: PropTypes.string,
  activeColor: PropTypes.string,
};

export default Indicator;
