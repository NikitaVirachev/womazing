import React, { useEffect } from 'react';
import styled from 'styled-components';

import Logo from './Logo.jsx';
import Navbar from './Navbar.jsx';
import Call from './Call.jsx';
import Cart from './Cart.jsx';

const HeaderContainer = styled.div`
  width: 111rem;
  height: 2.8rem;

  display: grid;
  grid-template-columns: auto 146px auto 170px auto 67px auto;
  align-items: center;

  position: absolute;
  z-index: 100;
  top: 5.1rem;
  left: 50%;
  transform: translateX(-50%);
`;

const LocatedNavbar = styled.div`
  grid-column: ${(props) => (props.$column ? props.$column : '')};
`;

const Header = () => {
  useEffect(() => {
    // const headerObserver = new IntersectionObserver(callback);
  }, []);

  return (
    <HeaderContainer>
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
