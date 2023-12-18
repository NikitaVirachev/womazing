import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Title = styled.h3`
  color: #000;
  font-size: 2.5rem;
  font-weight: 500;
  line-height: 140%; /* 35px */
  letter-spacing: 0.5px;
`;

const ModalOverlayContainer = styled.div`
  display: inline-flex;
  padding: 7rem;
  flex-direction: column;
  gap: 3.5rem;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1);
  z-index: 1001;

  background: #fff;

  animation: modalAnimation 0.5s ease;

  @keyframes modalAnimation {
    from {
      transform: translate(-50%, -50%) scale(0.25);
    }
    to {
      transform: translate(-50%, -50%) scale(1);
    }
  }
`;

const ModalOverlay = (props) => {
  return (
    <ModalOverlayContainer>
      <Title>{props.title}</Title>
      {props.children}
    </ModalOverlayContainer>
  );
};

ModalOverlay.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default ModalOverlay;
