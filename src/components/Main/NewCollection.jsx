import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import useHTTP from '../../hooks/useHTTP.jsx';
import { clothesURL } from '../../db/constants.js';

import ButtonCTA from '../ButtonCTA.jsx';
import Product from '../Products/Product.jsx';

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
  const { getJSON } = useHTTP();
  const [clothes, setClothes] = useState(null);

  useEffect(() => {
    const showClothes = (data) => setClothes(data);
    const url = `${clothesURL}?_start=0&_end=3`;
    getJSON(url, 'Couldn\'t get clothes', showClothes);
  }, []);

  const navigate = useNavigate();

  const btnClickHandler = () => {
    navigate('/store');
  };

  return (
    <NewCollectionContainer>
      <Goods>
        {clothes &&
          clothes.map((item) => (
            <Product
              key={item.id}
              name={item.name}
              cost={String(item.cost)}
              discount={String(item.discount)}
              url={item.url}
            />
          ))}
      </Goods>
      <ButtonCTAContainer>
        <ButtonCTA $isOutline={true} onClick={btnClickHandler}>
          Открыть магазин
        </ButtonCTA>
      </ButtonCTAContainer>
    </NewCollectionContainer>
  );
};

export default NewCollection;
