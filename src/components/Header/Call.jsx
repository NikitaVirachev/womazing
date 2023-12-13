import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import TelephoneIcon from './TelephoneIcon.jsx';
import { modalWindowsActions } from '../../store/modalWindowsSlice.jsx';

const CallContainer = styled.div`
  color: #000;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2.1rem;
  letter-spacing: 0.3px;

  display: flex;
  gap: 0.9rem;
  align-items: center;
`;

const Call = () => {
  const dispatch = useDispatch();

  const openCallModalWindow = () =>
    dispatch(modalWindowsActions.setCallModalWindow(true));

  return (
    <CallContainer>
      <TelephoneIcon onClick={openCallModalWindow} />
      <span>+7 (495) 823-54-12</span>
    </CallContainer>
  );
};

export default Call;
