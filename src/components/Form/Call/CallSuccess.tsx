import React from 'react';
import styled from 'styled-components';

import ButtonCTA from '../../ButtonCTA.js';

const CallSuccessContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

type CallSuccessProps = {
  onClose: () => void;
};

const CallSuccess = (props: CallSuccessProps) => {
  return (
    <CallSuccessContainer>
      <ButtonCTA $isOutline={true} onClick={props.onClose}>
        Закрыть
      </ButtonCTA>
    </CallSuccessContainer>
  );
};

export default CallSuccess;
