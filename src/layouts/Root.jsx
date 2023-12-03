import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import Header from '../components/Header/Header.jsx';
import Footer from '../components/Footer/Footer.jsx';

const RootContainer = styled.div`
  position: relative;
`;

const Root = () => {
  return (
    <RootContainer>
      <Header />
      <Outlet />
      <Footer />
    </RootContainer>
  );
};

export default Root;
