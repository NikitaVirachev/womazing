import React from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../../hooks/hooks';

import MainPhotos1URL from '../../assets/img/pictures/main-photos-1.jpg';
import MainPhotos2URL from '../../assets/img/pictures/main-photos-2.jpg';
import MainPhotos3URL from '../../assets/img/pictures/main-photos-3.jpg';
import SecondaryPhotosURL from '../../assets/img/pictures/secondary-photos.jpg';
import TertiaryPhotosURL from '../../assets/img/pictures/tertiary-photos.jpg';

const PhotosContainer = styled.div`
  margin-top: 12rem;
  margin-left: 5rem;
  position: relative;
`;

const MainPhotosWindow = styled.div`
  width: 41rem;
  height: 64.6rem;
  overflow: hidden;
  position: relative;
`;

type SlidesProps = {
  $currentSlide: number;
};

const Slides = styled.div<SlidesProps>`
  display: flex;

  position: absolute;
  transition: transform 0.5s ease;
  transform: ${({ $currentSlide }) =>
    `translateX(calc(${$currentSlide - 1} * -43.4rem))`};
`;

type PhotosProps = {
  $url: string;
};

const MainPhotos = styled.div<PhotosProps>`
  width: 43.4rem;
  height: 65.2rem;
  background: url(${(props) => (props.$url ? props.$url : '')}) center/cover
    no-repeat;
`;

const SecondaryPhotosContainer = styled.div`
  width: 19.7rem;
  height: 19.7rem;
  overflow: hidden;

  position: absolute;
  top: 12.3rem;
  left: 31.8rem;
`;

const SecondaryPhotos = styled.div<PhotosProps>`
  width: 19.7rem;
  height: 29.6rem;
  background: url(${(props) => (props.$url ? props.$url : '')}) center/cover
    no-repeat;

  position: absolute;
  top: -1.3rem;
`;

const TertiaryPhotosContainer = styled.div`
  width: 19rem;
  height: 31.8rem;
  overflow: hidden;

  position: absolute;
  top: 38.8rem;
  right: 34.4rem;
`;

const TertiaryPhotos = styled.div<PhotosProps>`
  width: 38rem;
  height: 57rem;
  background: url(${(props) => (props.$url ? props.$url : '')}) center/cover
    no-repeat;

  position: absolute;
  top: -12.6rem;
  left: -2.1rem;
`;

const Photos = () => {
  const curSlide = useAppSelector((state) => state.heroSlider.currentSlide);

  return (
    <PhotosContainer>
      <MainPhotosWindow>
        <Slides $currentSlide={curSlide}>
          <MainPhotos $url={MainPhotos1URL} />
          <MainPhotos $url={MainPhotos2URL} />
          <MainPhotos $url={MainPhotos3URL} />
        </Slides>
      </MainPhotosWindow>
      <SecondaryPhotosContainer>
        <SecondaryPhotos $url={SecondaryPhotosURL} />
      </SecondaryPhotosContainer>
      <TertiaryPhotosContainer>
        <TertiaryPhotos $url={TertiaryPhotosURL} />
      </TertiaryPhotosContainer>
    </PhotosContainer>
  );
};

export default Photos;
