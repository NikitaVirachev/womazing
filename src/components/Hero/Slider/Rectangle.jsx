import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledRectangle = styled.div`
  width: 3rem;
  height: 0.4rem;
  background: ${(props) => (props.$isActive ? '#000' : '#d1d1d1')};
  transition: all 0.5s ease;
`;

const RectangleContainer = styled.button`
  padding: 0.6rem;
  cursor: pointer;
  border: none;
  background: none;

  &:hover ${StyledRectangle} {
    background: #000;
  }
`;

const Rectangle = (props) => {
  const onClickHandler = () => {
    props.onClick(props.number);
  };

  return (
    <RectangleContainer onClick={onClickHandler}>
      <StyledRectangle $isActive={props.isCurrent} />
    </RectangleContainer>
  );
};

Rectangle.propTypes = {
  isCurrent: PropTypes.bool,
  onClick: PropTypes.func,
  number: PropTypes.number,
};

export default Rectangle;
