import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import Header from '../components/Header/Header.tsx';
import Footer from '../components/Footer/Footer.tsx';
import ModalWindow from '../components/ModalWindow/ModalWindow.tsx';
import { modalWindowsActions } from '../store/modalWindowsSlice.tsx';
import { RootState } from '../store/store.ts';
import CallForm from '../components/Form/Call/CallForm.tsx';
import CallSuccess from '../components/Form/Call/CallSuccess.tsx';

const RootContainer = styled.div`
  position: relative;
  min-height: 100vh;
  display: grid;
  grid-template-rows: 1fr auto;
  justify-items: stretch;
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

interface HeaderWrapperProps {
  $isFixed: boolean;
}

const HeaderWrapper = styled.div<HeaderWrapperProps>`
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
  const isModalWindowOpen = useSelector(
    (state: RootState) => state.modalWindows.callModalWindow,
  );
  const [isCallFormSubmitted, setIsCallFormSubmitted] = useState(false);
  const dispatch = useDispatch();

  const handleScroll = () => {
    const rootEl = document.getElementById('root-content');
    const header = document.getElementById('header');
    const headerHeight = header?.getBoundingClientRect().height ?? 0;
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

  const closeModalWindowHandler = () => {
    dispatch(modalWindowsActions.setCallModalWindow(false));
  };

  const closeCallSuccessHandler = () => {
    closeModalWindowHandler();
    setIsCallFormSubmitted(false);
  };

  const modalWindowTitle = isCallFormSubmitted
    ? 'Отлично! Мы скоро вам перезвоним.'
    : 'Заказать обратный звонок';

  return (
    <RootContainer id="root-content">
      {isModalWindowOpen && (
        <ModalWindow title={modalWindowTitle} onClose={closeModalWindowHandler}>
          {isCallFormSubmitted ? (
            <CallSuccess onClose={closeCallSuccessHandler} />
          ) : (
            <CallForm onShowMessage={() => setIsCallFormSubmitted(true)} />
          )}
        </ModalWindow>
      )}
      <HeaderWrapper $isFixed={isFixed}>
        <Header id="header" />
      </HeaderWrapper>
      <Outlet />
      <Footer id="footer" />
    </RootContainer>
  );
};

export default Root;
