import React, { useState } from 'react';
import styled from 'styled-components';

import CartURL from '../../assets/img/icons/shopping-bags.svg';

type CartIconProps = {
  $url: string;
};

const CartIcon = styled.div<CartIconProps>`
  background: url(${(props) => (props.$url ? props.$url : '')});
  width: 2.4rem;
  height: 2.4rem;
`;

const CartContainer = styled.div`
  position: relative;
  cursor: pointer;
`;

const GoodsCounter = styled.div`
  position: absolute;
  right: -1rem;
  top: -1rem;

  display: flex;
  width: 1.5rem;
  padding: 1px 5px 5px 5px;
  justify-content: center;
  align-items: center;

  border-radius: 5rem;
  background: var(--Additional-accent);

  color: #fff;

  text-align: center;
  font-size: 0.9rem;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 9px */
  letter-spacing: 0.18px;
`;

const Cart = () => {
  const [isEmpty] = useState(false);

  return (
    <CartContainer>
      <CartIcon $url={CartURL} />
      {!isEmpty && <GoodsCounter>3</GoodsCounter>}
    </CartContainer>
  );
};

export default Cart;
