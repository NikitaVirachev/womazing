import React, { useEffect } from 'react';
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
  useEffect(() => {
    const getJSON = async () => {
      try {
        const request = await fetch(
          'https://clothing-store-b6dd6-default-rtdb.europe-west1.firebasedatabase.app/clothes.json'
        );
        const data = await request.json();
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };
    getJSON();
  }, []);

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
