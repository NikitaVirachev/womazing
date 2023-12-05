import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { useNavigate } from 'react-router';

import overlaArrowURL from '../../assets/img/icons/overlay-arrow.svg';

const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(110, 156, 159, 0.77)
    url(${(props) => (props.$url ? props.$url : '')}) center no-repeat;
  opacity: 0;
  transition: opacity 0.5s ease;
`;

const ImageContainer = styled.div`
  position: relative;
  cursor: pointer;

  &:hover ${Overlay} {
    opacity: 1;
  }
`;

const Img = styled.img`
  width: 35rem;
  height: 47.8rem;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.7rem;
`;

const Title = styled.h4`
  color: #000;
  font-size: 2rem;
  font-weight: 500;
  line-height: 140%; /* 28px */
  letter-spacing: 0.4px;
  text-transform: capitalize;
`;

const Costs = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Cost = css`
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 140%; /* 21px */
  letter-spacing: 0.3px;
`;

const OldCost = styled.span`
  color: #9c9c9c;
  text-decoration-line: line-through;
  ${Cost};
`;

const NewCost = styled.span`
  color: #998e78;
  ${Cost};
`;

const Product = (props) => {
  const navigate = useNavigate();

  const imageClickHandler = () => {
    navigate('/item');
  };

  return (
    <ProductContainer>
      <ImageContainer onClick={imageClickHandler}>
        <Img src={props.url} alt={props.name} />
        <Overlay $url={overlaArrowURL} />
      </ImageContainer>
      <Description>
        <Title>{props.name}</Title>
        <Costs>
          {props.discount && <OldCost>{`$${props.cost}`}</OldCost>}
          {props.discount ? (
            <NewCost>{`$${props.cost - props.discount}`}</NewCost>
          ) : (
            <NewCost>{`$${props.cost}`}</NewCost>
          )}
        </Costs>
      </Description>
    </ProductContainer>
  );
};

Product.propTypes = {
  name: PropTypes.string,
  cost: PropTypes.string,
  discount: PropTypes.string,
  url: PropTypes.string,
};

export default Product;
