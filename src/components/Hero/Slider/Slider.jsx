import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import Indicator from '../../Slider/Indicator.jsx';
import ButtonCTA from '../../ButtonCTA.jsx';
import ArrowDawn from './ArrowDawn.jsx';
import { heroSliderActions } from '../../../store/heroSliderSlice.jsx';

const SliderContainer = styled.div`
  margin-top: 26.5rem;
  margin-bottom: 5.4rem;
`;

const IndicatorWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 25.9rem;
  margin-top: 11.8rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  display: inline-flex;
  margin-left: 7rem;
  margin-top: 5.2rem;

  &:hover ${ButtonCTA} {
    background: #509498;
  }
`;

const SlidesWindow = styled.div`
  width: 56.3rem;
  height: 25.1rem;
  overflow: hidden;

  position: relative;
`;

const Slides = styled.div`
  display: flex;

  position: absolute;
  transition: transform 0.5s ease;
  transform: ${({ $currentSlide }) =>
    `translateX(calc(${$currentSlide - 1} * -56.3rem))`};
`;

const Slide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.5rem;
`;

const Title = styled.h2`
  width: 56.3rem;

  color: #000;
  font-size: 5.5rem;
  font-weight: 500;
  line-height: 110%; /* 60.5px */
  letter-spacing: 1.1px;
`;

const Description = styled.p`
  width: 38.5rem;

  text-align: right;
  font-size: 2rem;
  font-weight: 400;
  line-height: 140%; /* 28px */
  letter-spacing: 0.4px;
  color: #000;
`;

const Slider = () => {
  const dispatch = useDispatch();
  const curSlide = useSelector((state) => state.heroSlider.currentSlide);
  const slidesCount = useSelector((state) => state.heroSlider.slidesCount);

  return (
    <SliderContainer>
      <SlidesWindow>
        <Slides $currentSlide={curSlide}>
          <Slide>
            <Title>Новые поступления в этом сезоне</Title>
            <Description>
              Утонченные сочетания и бархатные оттенки - вот то, что вы искали в
              этом сезоне. Время исследовать.
            </Description>
          </Slide>
          <Slide>
            <Title>Что-то новенькое. Мы заждались тебя.</Title>
            <Description>
              Надоело искать себя в сером городе? Настало время новых идей,
              свежих красок и вдохновения с Womazing!
            </Description>
          </Slide>
          <Slide>
            <Title>Включай новый сезон с WOMAZING</Title>
            <Description>
              Мы обновили ассортимент - легендарные коллекции и новинки от
              отечественных дизайнеров
            </Description>
          </Slide>
        </Slides>
      </SlidesWindow>
      <StyledLink to={'/shop'}>
        <ArrowDawn />
        <ButtonCTA $isOutline={false}>Открыть магазин</ButtonCTA>
      </StyledLink>
      <IndicatorWrapper>
        <Indicator
          curRectangle={curSlide}
          onChangeSlide={(slide) =>
            dispatch(heroSliderActions.setCurrentSlide(slide))
          }
          slidesCount={slidesCount}
          mainColor="#d1d1d1"
          activeColor="#000"
        />
      </IndicatorWrapper>
    </SliderContainer>
  );
};

export default Slider;
