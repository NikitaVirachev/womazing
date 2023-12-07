import React from 'react';
import styled from 'styled-components';

import Slider from './Slider.jsx';

const AboutContainer = styled.div`
  display: flex;
  gap: 12.4rem;
`;

const About = () => {
  return (
    <AboutContainer>
      <Slider />
      <div>About</div>
    </AboutContainer>
  );
};

export default About;
