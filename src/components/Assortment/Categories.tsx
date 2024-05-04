import React from 'react';
import styled from 'styled-components';

const CategoriesTab = styled.div`
  border: 1px solid #000;
  padding: 1.9rem 6.5rem;

  color: #000;
  font-size: 1.7rem;
  line-height: 2.38rem;
  font-weight: 500;

  cursor: pointer;

  transition: all 0.5s ease;

  &:hover {
    background: #000;
    color: #fff;
  }
`;

const CategoriesTabs = styled.div`
  display: flex;
  gap: 10px;
`;

const Categories = () => {
  return (
    <CategoriesTabs>
      <CategoriesTab>Все</CategoriesTab>
      <CategoriesTab>Пальто</CategoriesTab>
      <CategoriesTab>Свитшоты</CategoriesTab>
      <CategoriesTab>Кардиганы</CategoriesTab>
      <CategoriesTab>Толстовки</CategoriesTab>
    </CategoriesTabs>
  );
};

export default Categories;
