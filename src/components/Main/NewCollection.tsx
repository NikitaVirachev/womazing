import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import useHTTP from '../../hooks/useHTTP.tsx';
import { clothesURL } from '../../db/constants.ts';
import ButtonCTA from '../ButtonCTA.tsx';
import Product from '../Products/Product.tsx';

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

export interface Clothes {
  id?: number;
  name: string;
  cost: number;
  discount: number | null;
  type?: string;
  url: string;
}

const NewCollection = () => {
  const { getJSON } = useHTTP();
  const [clothes, setClothes] = useState<null | Clothes[]>(null);

  useEffect(() => {
    const showClothes = (data: Clothes[]) => setClothes(data);
    const requestConfig = { url: `${clothesURL}?_start=0&_end=3` };
    getJSON(requestConfig, "Couldn't get clothes", showClothes);
  }, []);

  const navigate = useNavigate();

  const btnClickHandler = () => {
    navigate('/shop');
  };

  return (
    <NewCollectionContainer>
      <Goods>
        {clothes &&
          clothes.map((item: Clothes) => (
            <Product
              key={item.id}
              name={item.name}
              cost={item.cost}
              discount={item.discount}
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
