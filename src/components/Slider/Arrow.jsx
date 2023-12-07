import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledArrow = styled.button`
  width: 2.9rem;
  height: 1.6rem;
  cursor: ${(props) => (props.disabled ? 'auto' : 'pointer')};
  border: none;
  background: none;

  path {
    stroke: ${(props) => (props.disabled ? '#ddd' : '#858585')};
    transition: stroke 0.5s ease;
  }

  &:hover path {
    stroke: ${(props) => (props.disabled ? '#ddd' : '#000')};
  }
`;

const ArrowSvg = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="29"
    height="16"
    viewBox="0 0 29 16"
    fill="none"
  >
    <path
      d="M29 8L0.999999 8M0.999999 8L8.18919 0.999999M0.999999 8L8.18919 15"
      stroke="#858585"
    />
  </svg>
);

const Arrow = (props) => {
  return (
    <StyledArrow onClick={props.onChangeSlider} disabled={props.isDisabled}>
      <ArrowSvg />
    </StyledArrow>
  );
};

Arrow.propTypes = {
  onChangeSlider: PropTypes.func,
  isDisabled: PropTypes.bool,
};

export default Arrow;
