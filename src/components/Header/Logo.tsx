import React from 'react';
import styled from 'styled-components';
import DressURL from '../../assets/img/icons/dress.svg';

type DressIconProps = {
  $url: string;
};

const DressIcon = styled.div<DressIconProps>`
  background: url(${(props) => (props.$url ? props.$url : '')});
  width: 2.5rem;
  height: 2.5rem;
`;

const Title = styled.h1`
  color: #000;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 1.6px;
  text-transform: uppercase;
  margin: 0;
`;

const LogoContainer = styled.div`
  display: flex;
  gap: 1.1rem;
  align-items: center;
`;

const Logo = () => {
  return (
    <LogoContainer>
      <DressIcon $url={DressURL} />
      <Title>Womazing</Title>
    </LogoContainer>
  );
};

export default Logo;
