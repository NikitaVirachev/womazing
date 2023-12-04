import React from 'react';
import styled from 'styled-components';
import MainPhotosURL from '../../assets/img/pictures/main-photos.jpg';
import SecondaryPhotosURL from '../../assets/img/pictures/secondary-photos.jpg';
import TertiaryPhotosURL from '../../assets/img/pictures/tertiary-photos.jpg';

const PhotosContainer = styled.div`
  margin-top: 12rem;
  margin-left: 5rem;
  position: relative;
`;

const MainPhotosContainer = styled.div`
  width: 41rem;
  height: 64.6rem;
  overflow: hidden;
`;

const MainPhotos = styled.div`
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

const SecondaryPhotos = styled.div`
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

const TertiaryPhotos = styled.div`
  width: 38rem;
  height: 57rem;
  background: url(${(props) => (props.$url ? props.$url : '')}) center/cover
    no-repeat;

  position: absolute;
  top: -12.6rem;
  left: -2.1rem;
`;

const Photos = () => {
  return (
    <PhotosContainer>
      <MainPhotosContainer>
        <MainPhotos $url={MainPhotosURL} />
      </MainPhotosContainer>
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
