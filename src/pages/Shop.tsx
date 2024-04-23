import React from 'react';
import styled from 'styled-components';

import Column from '../layouts/Column.tsx';
import PrimaryHeader from '../components/Typography/PrimaryHeader.tsx';
import Breadcrumbs, {Breadcrumb} from '../components/Breadcrumbs.tsx';

const Main = styled.main`
  padding-top: 26.9rem;
  padding-bottom: 13rem;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.6rem;
`;

const Shop = () => {
  const BreadcrumbsArray: Breadcrumb[] = [
    { id: 'Breadcrumbs1', name: 'Главная', path: '/' },
    { id: 'Breadcrumbs2', name: 'Магазин', path: '' },
  ];

  return (
    <Main>
      <Column>
        <Title>
          <PrimaryHeader>Магазин</PrimaryHeader>
          <Breadcrumbs breadcrumbsList={BreadcrumbsArray} />
        </Title>
      </Column>
    </Main>
  );
};

export default Shop;
