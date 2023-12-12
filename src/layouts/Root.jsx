import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import styled, { css } from 'styled-components';

import Header from '../components/Header/Header.jsx';
import Footer from '../components/Footer/Footer.jsx';

const RootContainer = styled.div`
  position: relative;
`;

const Absolute = css`
  position: absolute;
  top: 1.7rem;
`;

const Fixed = css`
  position: fixed;
  background: #fff;
  box-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 0.05);
`;

const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  left: 50%;
  transform: translateX(-50%);
  padding-top: 3.4rem;
  padding-bottom: 3.3rem;
  ${(props) => (props.$isFixed ? Fixed : Absolute)};
`;

const Root = () => {
  const [isFixed, setIsFixed] = useState(false);

  const handleScroll = () => {
    const rootEl = document.getElementById('root');
    const header = document.getElementById('header');
    const headerHeight = header.getBoundingClientRect().height;
    if (rootEl && window.scrollY >= rootEl.offsetTop + headerHeight) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <RootContainer id="root">
      <HeaderWrapper $isFixed={isFixed}>
        <Header id="header" />
      </HeaderWrapper>
      <Outlet />
      <Footer />
    </RootContainer>
  );
};

export default Root;
