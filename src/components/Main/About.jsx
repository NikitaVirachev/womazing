import React from 'react';
import styled from 'styled-components';

import Slider from './Slider.jsx';
import AboutDescription from './AboutDescription.jsx';

const AboutContainer = styled.div`
  display: flex;
  gap: 12.4rem;
  align-items: center;
`;

const About = () => {
  return (
    <AboutContainer>
      <Slider />
      <AboutDescription />
    </AboutContainer>
  );
};

export default About;
