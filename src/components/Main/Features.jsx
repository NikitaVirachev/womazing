import React from 'react';
import styled from 'styled-components';

import qualityIconURL from '../../assets/img/icons/quality.svg';
import mdiIconURL from '../../assets/img/icons/mdi.svg';
import handIconURL from '../../assets/img/icons/hand.svg';

const FeaturesContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const FeatureContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.7rem;
  width: 35rem;
`;

const IconWindow = styled.div`
  width: 6.1rem;
  height: 6.1rem;
  ${'' /* overflow: hidden; */}
  position: relative;
`;

const Icon = styled.div`
  background: url(${(props) => (props.$url ? props.$url : '')});
  width: ${(props) => (props.$width ? props.$width : '')};
  height: ${(props) => (props.$height ? props.$height : '')};
  position: absolute;
  top: ${(props) => (props.$top ? props.$top : '')};
  right: ${(props) => (props.$right ? props.$right : '')};
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

const Title = styled.h3`
  color: #000;
  font-size: 2.5rem;
  font-weight: 500;
  line-height: 140%; /* 35px */
  letter-spacing: 0.5px;
`;

const Description = styled.p`
  color: #000;
  font-size: 1.7rem;
  font-weight: 500;
  line-height: 140%; /* 23.8px */
  letter-spacing: 0.34px;
  width: 30.5rem;
  height: 11.5rem;
`;

const Features = () => {
  return (
    <FeaturesContainer>
      <FeatureContainer>
        <IconWindow>
          <Icon $url={qualityIconURL} $width="6.1rem" $height="6.1rem" />
        </IconWindow>
        <Text>
          <Title>Качество</Title>
          <Description>
            Наши профессионалы работают на лучшем оборудовании для пошива одежды
            беспрецедентного качества
          </Description>
        </Text>
      </FeatureContainer>
      <FeatureContainer>
        <IconWindow>
          <Icon
            $url={mdiIconURL}
            $width="7.8rem"
            $height="7.8rem"
            $top="-1rem"
            $right="-0.8rem"
          />
        </IconWindow>
        <Text>
          <Title>Скорость</Title>
          <Description>
            Благодаря отлаженной системе в Womazing мы можем отшивать до 20-ти
            единиц продукции в наших собственных цехах
          </Description>
        </Text>
      </FeatureContainer>
      <FeatureContainer>
        <IconWindow>
          <Icon
            $url={handIconURL}
            $width="6.3rem"
            $height="6.3rem"
            $top="-0.2rem"
            $right="-0.2rem"
          />
        </IconWindow>
        <Text>
          <Title>Ответственность</Title>
          <Description>
            Мы заботимся о людях и планете. Безотходное производство и
            комфортные условия труда - все это Womazing
          </Description>
        </Text>
      </FeatureContainer>
    </FeaturesContainer>
  );
};

export default Features;
