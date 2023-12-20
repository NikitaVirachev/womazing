import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

import Column from '../layouts/Column.jsx';
import SecondaryHeader from '../components/Typography/SecondaryHeader.jsx';
import PlainText from '../components/Typography/PlainText.jsx';

const ErrorPageContainer = styled.div`
  padding-top: 20rem;
`;

const ErrorPageContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
`;

const ErrorPage = () => {
  const location = useLocation();
  const error = location.state?.error; // Это строка, а не объект
  const errorMessage = error?.message ? error.message : 'Неизвестная ошибка';

  return (
    <ErrorPageContainer>
      <Column>
        <ErrorPageContent>
          <SecondaryHeader>Произошла ошибка</SecondaryHeader>
          <PlainText>Сообщение об ошибке: {errorMessage}</PlainText>
        </ErrorPageContent>
      </Column>
    </ErrorPageContainer>
  );
};

export default ErrorPage;
