import React from 'react';
import styled, { css } from 'styled-components';

import StyledLink from '../StyledLink.js';

const StyledTextLink = css`
  color: var(--CTA-color);
  font-size: 1.7rem;
  font-weight: 500;
  line-height: 140%; /* 23.8px */
  letter-spacing: 0.34px;
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 2.8rem;
`;

const Title = styled.h3`
  color: #000;
  font-size: 2.5rem;
  font-weight: 500;
  line-height: 140%; /* 35px */
  letter-spacing: 0.5px;
`;

const Text = styled.p`
  color: #000;
  font-size: 1.7rem;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 23.8px */
  letter-spacing: 0.34px;
`;

const AboutDescription = () => {
  return (
    <DescriptionContainer>
      <Title>Для каждой</Title>
      <Text>
        Каждая девушка уникальна. Однако, мы схожи в миллионе мелочей. <br />
        <br />
        Womazing ищет эти мелочи и создает прекрасные вещи, которые выгодно
        подчеркивают достоинства каждой девушки.
      </Text>
      <StyledLink to={'/about'} $textStyles={StyledTextLink} $color={'#cededf'}>
        Подробнее о бренде
      </StyledLink>
    </DescriptionContainer>
  );
};

export default AboutDescription;
