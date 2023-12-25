import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledRectangle = styled.div`
  width: 3rem;
  height: 0.4rem;
  background: ${(props) =>
    props.$isActive ? props.$activeColor : props.$mainColor};
  transition: all 0.5s ease;
`;

const RectangleContainer = styled.button`
  padding: 0.6rem;
  cursor: pointer;
  border: none;
  background: none;

  &:hover ${StyledRectangle} {
    background: ${(props) =>
    props.$activeColor ? props.$activeColor : '#000'};
  }
`;

const Rectangle = (props) => {
  const onClickHandler = () => {
    props.onClick(props.number);
  };

  return (
    <RectangleContainer
      onClick={onClickHandler}
      $activeColor={props.activeColor}
    >
      <StyledRectangle
        $isActive={props.isCurrent}
        $mainColor={props.mainColor}
        $activeColor={props.activeColor}
      />
    </RectangleContainer>
  );
};

Rectangle.propTypes = {
  isCurrent: PropTypes.bool,
  onClick: PropTypes.func,
  number: PropTypes.number,
  mainColor: PropTypes.string,
  activeColor: PropTypes.string,
};

export default Rectangle;
