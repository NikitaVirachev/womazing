import React from 'react';
import styled from 'styled-components';

import Column from '../../layouts/Column.jsx';
import Slider from './Slider/Slider.jsx';
import Photos from './Photos.jsx';

const HeroWrapper = styled.div`
  background: linear-gradient(to right, white 55%, #f1eadc 45%);
`;

const HeroContainer = styled.section`
  display: grid;
  grid-template-columns: 58.7% 41.3%;
`;

const Hero = () => {
  return (
    <HeroWrapper>
      <Column>
        <HeroContainer>
          <Slider />
          <Photos />
        </HeroContainer>
      </Column>
    </HeroWrapper>
  );
};

export default Hero;
