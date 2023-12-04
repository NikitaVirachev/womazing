import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import ButtonCTA from '../ButtonCTA.jsx';

const NewCollectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6.5rem;
`;

const Goods = styled.div`
  display: flex;
  gap: 3rem;
`;

const ButtonCTAContainer = styled.div`
  text-align: center;
`;

const NewCollection = () => {
  const navigate = useNavigate();

  const btnClickHandler = () => {
    navigate('/store');
  };

  return (
    <NewCollectionContainer>
      <Goods></Goods>
      <ButtonCTAContainer>
        <ButtonCTA $isOutline={true} onClick={btnClickHandler}>
          Открыть магазин
        </ButtonCTA>
      </ButtonCTAContainer>
    </NewCollectionContainer>
  );
};

export default NewCollection;
