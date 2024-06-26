import React from 'react';
import styled from 'styled-components';

import Logo from './Logo.tsx';
import Navbar from './Navbar.tsx';
import Call from './Call.tsx';
import Cart from './Cart.tsx';

const HeaderContainer = styled.div<HeaderProps>`
  width: 111rem;
  height: 2.8rem;
  display: grid;
  grid-template-columns: auto 14.6rem auto 17rem auto 6.7rem auto;
  align-items: center;
`;

type LocatedNavbarProps = {
  $column: number;
};

const LocatedNavbar = styled.div<LocatedNavbarProps>`
  grid-column: ${(props) => (props.$column ? props.$column : '')};
`;

type HeaderProps = {
  id: string;
};

const Header = (props: HeaderProps) => {
  return (
    <HeaderContainer id={props.id}>
      <Logo />
      <LocatedNavbar $column={3}>
        <Navbar />
      </LocatedNavbar>
      <LocatedNavbar $column={5}>
        <Call />
      </LocatedNavbar>
      <LocatedNavbar $column={7}>
        <Cart />
      </LocatedNavbar>
    </HeaderContainer>
  );
};

export default Header;
