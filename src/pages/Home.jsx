import React from 'react';
import styled from 'styled-components';

import Hero from '../components/Hero/Hero.jsx';
import Column from '../layouts/Column.jsx';
import NewCollection from '../components/Main/NewCollection.jsx';
import Features from '../components/Main/Features.jsx';
import About from '../components/Main/About.jsx';
import SecondaryHeader from '../components/Typography/SecondaryHeader.jsx';

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
          <SecondaryHeader>Новая коллекция</SecondaryHeader>
          <NewCollection />
        </Section>
        <Section>
          <SecondaryHeader>Что для нас важно</SecondaryHeader>
          <Features />
        </Section>
        <Section>
          <SecondaryHeader>Команда мечты Womazing</SecondaryHeader>
          <About />
        </Section>
      </Column>
    </Main>
  );
};

export default Home;
