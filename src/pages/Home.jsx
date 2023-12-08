import React from 'react';
import styled from 'styled-components';

import Hero from '../components/Hero/Hero.jsx';
import Column from '../layouts/Column.jsx';
import NewCollection from '../components/Main/NewCollection.jsx';
import Features from '../components/Main/Features.jsx';
import About from '../components/Main/About.jsx';

const Background = styled.div`
  background: linear-gradient(to right, white 55%, #f1eadc 45%);
  position: absolute;
  width: 100%;
  height: 82.6rem;
  z-index: -1;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 9.2rem;
`;

const Title = styled.h2`
  color: #000;
  font-size: 4rem;
  font-weight: 500;
  line-height: 110%; /* 44px */
  letter-spacing: 0.8px;
`;

const Main = styled.main`
  padding-bottom: 13rem;
`;

const Home = () => {
  return (
    <Main>
      <Background />
      <Column>
        <Hero />
        <Section>
          <Title>Новая коллекция</Title>
          <NewCollection />
        </Section>
        <Section>
          <Title>Что для нас важно</Title>
          <Features />
        </Section>
        <Section>
          <Title>Команда мечты Womazing</Title>
          <About />
        </Section>
      </Column>
    </Main>
  );
};

export default Home;
