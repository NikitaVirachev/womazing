import React from 'react';
import styled from 'styled-components';

import Slider from './Slider/Slider.jsx';
import Photos from './Photos.js';

const HeroContainer = styled.section`
  display: grid;
  grid-template-columns: 58.7% 41.3%;
`;

const Hero = () => {
  return (
    <HeroContainer>
      <Slider />
      <Photos />
    </HeroContainer>
  );
};

export default Hero;
