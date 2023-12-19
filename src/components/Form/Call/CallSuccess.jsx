import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import ButtonCTA from '../../ButtonCTA.jsx';

const CallSuccessContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CallSuccess = (props) => {
  return (
    <CallSuccessContainer>
      <ButtonCTA $isOutline={true} onClick={props.onClose}>
        Закрыть
      </ButtonCTA>
    </CallSuccessContainer>
  );
};

CallSuccess.propTypes = {
  onClose: PropTypes.func,
};

export default CallSuccess;
