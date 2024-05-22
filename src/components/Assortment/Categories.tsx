import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const CategoriesTab = styled(NavLink)`
  border: 1px solid #000;
  padding: 1.9rem 6.5rem;

  color: #000;
  font-size: 1.7rem;
  line-height: 2.38rem;
  font-weight: 500;
  text-decoration: none;

  cursor: pointer;

  transition: all 0.5s ease;

  &:hover,
  &.active {
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
      <CategoriesTab to="/shop" end>
        Все
      </CategoriesTab>
      <CategoriesTab to="/shop/coats">Пальто</CategoriesTab>
      <CategoriesTab to="/shop/sweatshirts">Свитшоты</CategoriesTab>
      <CategoriesTab to="/shop/cardigans">Кардиганы</CategoriesTab>
      <CategoriesTab to="/shop/hoodies">Толстовки</CategoriesTab>
    </CategoriesTabs>
  );
};

export default Categories;
