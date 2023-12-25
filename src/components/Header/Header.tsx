import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Logo from './Logo.js';
import Navbar from './Navbar.js';
import Call from './Call.jsx';
import Cart from './Cart.jsx';

const HeaderContainer = styled.div`
  width: 111rem;
  height: 2.8rem;
  display: grid;
  grid-template-columns: auto 14.6rem auto 17rem auto 6.7rem auto;
  align-items: center;
`;

const LocatedNavbar = styled.div`
  grid-column: ${(props) => (props.$column ? props.$column : '')};
`;

const Header = (props) => {
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

Header.propTypes = {
  id: PropTypes.string,
};

export default Header;
