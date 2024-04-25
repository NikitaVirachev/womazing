import React from 'react';
import styled from 'styled-components';

import Hero from '../components/Hero/Hero.tsx';
import Column from '../layouts/Column.tsx';
import Section from '../layouts/Section.tsx';
import Main from '../layouts/Main.tsx';
import NewCollection from '../components/Main/NewCollection.tsx';
import Features from '../components/Main/Features.tsx';
import About from '../components/Main/About.tsx';
import SecondaryHeader from '../components/Typography/SecondaryHeader.tsx';

const Background = styled.div`
  background: linear-gradient(to right, white 55%, #f1eadc 45%);
  position: absolute;
  width: 100%;
  height: 82.6rem;
  z-index: -1;
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
