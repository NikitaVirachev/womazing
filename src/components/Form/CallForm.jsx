import React from 'react';
import styled from 'styled-components';

import Input from './Input.jsx';
import ButtonCTA from '../ButtonCTA.jsx';

const CallFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
`;

const CallForm = () => {
  return (
    <CallFormContainer>
      <Input placeholder={'Имя'} type="text" />
      <Input placeholder={'E-mail'} type="email" />
      <Input placeholder={'Телефон'} type="tel" />
      <ButtonCTA $isOutline={false}>Заказать звонок</ButtonCTA>
    </CallFormContainer>
  );
};

export default CallForm;
