import React from 'react';
import styled from 'styled-components';

type StyledRectangleProps = {
  $isActive?: boolean;
  $activeColor: string;
  $mainColor?: string;
};

const StyledRectangle = styled.div<StyledRectangleProps>`
  width: 3rem;
  height: 0.4rem;
  background: ${(props) =>
    props.$isActive ? props.$activeColor : props.$mainColor};
  transition: all 0.5s ease;
`;

const RectangleContainer = styled.button<StyledRectangleProps>`
  padding: 0.6rem;
  cursor: pointer;
  border: none;
  background: none;

  &:hover ${StyledRectangle} {
    background: ${(props) =>
      props.$activeColor ? props.$activeColor : '#000'};
  }
`;

export interface RectangleProps {
  isCurrent: boolean;
  onClick: (slide: number) => void;
  number: number;
  mainColor: string;
  activeColor: string;
}

const Rectangle = (props: RectangleProps) => {
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

export default Rectangle;
