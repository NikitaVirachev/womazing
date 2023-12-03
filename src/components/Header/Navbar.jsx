import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const NavContainer = styled.nav`
  justify-self: center;
  display: flex;
  gap: 4.5rem;
`;

const StyledNavLink = styled(NavLink)`
  color: #000;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 21px */
  letter-spacing: 0.3px;
  text-decoration: none;

  &.active {
    color: var(--CTA-color);
  }
`;

const Navbar = () => {
  return (
    <NavContainer>
      <StyledNavLink to={'/'}>Главная</StyledNavLink>
      <StyledNavLink to={'/store'}>Магазин</StyledNavLink>
      <StyledNavLink to={'/about'}>О бренде</StyledNavLink>
      <StyledNavLink to={'/contacts'}>Контакты</StyledNavLink>
    </NavContainer>
  );
};

export default Navbar;
