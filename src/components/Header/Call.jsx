import React from 'react';
import styled from 'styled-components';

import TelephoneIcon from './TelephoneIcon.jsx';

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
  return (
    <CallContainer>
      <TelephoneIcon />
      <span>+7 (495) 823-54-12</span>
    </CallContainer>
  );
};

export default Call;
