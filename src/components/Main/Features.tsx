import React from 'react';
import styled from 'styled-components';

import qualityIconURL from '../../assets/img/icons/quality.svg';
import mdiIconURL from '../../assets/img/icons/mdi.svg';
import handIconURL from '../../assets/img/icons/hand.svg';
import PlainText from '../Typography/PlainText.js';
import TertiaryHeader from '../Typography/TertiaryHeader.js';

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

type IconComponent = {
  $url: string;
  $width: string;
  $height: string;
  $top?: string;
  $right?: string;
};

const Icon = styled.div<IconComponent>`
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

const Description = styled.div`
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
          <TertiaryHeader>Качество</TertiaryHeader>
          <Description>
            <PlainText>
              Наши профессионалы работают на лучшем оборудовании для пошива
              одежды беспрецедентного качества
            </PlainText>
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
          <TertiaryHeader>Скорость</TertiaryHeader>
          <Description>
            <PlainText>
              Благодаря отлаженной системе в Womazing мы можем отшивать до 20-ти
              единиц продукции в наших собственных цехах
            </PlainText>
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
          <TertiaryHeader>Ответственность</TertiaryHeader>
          <Description>
            <PlainText>
              Мы заботимся о людях и планете. Безотходное производство и
              комфортные условия труда - все это Womazing
            </PlainText>
          </Description>
        </Text>
      </FeatureContainer>
    </FeaturesContainer>
  );
};

export default Features;
