import React from 'react';
import styled, { css } from 'styled-components';

import Column from '../../layouts/Column.tsx';
import Navbar from '../Header/Navbar.tsx';
import Logo from '../Header/Logo.tsx';
import InstagramURL from '../../assets/img/icons/instagram.svg';
import FacebookURL from '../../assets/img/icons/facebook.svg';
import TwitterURL from '../../assets/img/icons/twitter.svg';
import VisaMastercardURL from '../../assets/img/icons/visa-mastercard.png';
import StyledLink from '../StyledLink.tsx';

const Text = css`
  color: #000;
  font-size: 1.3rem;
  font-weight: 400;
  line-height: 140%; /* 18.2px */
  letter-spacing: 0.26px;
`;

const FooterContainer = styled.div.attrs((props) => ({
  id: props.id, // это пробрасывает id в элемент div
}))`
  background: #f1eadc;
  height: 36.3rem;
  padding-top: 10.4rem;

  ${Text}
`;

const FooterHeader = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: start;
`;

const Contacts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 0.9rem;

  color: #000;
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 140%; /* 21px */
  letter-spacing: 0.3px;
`;

const CenterContainer = styled.div`
  padding-top: 0.3rem;
  padding-left: 8.1rem;

  display: flex;
  flex-direction: column;
  gap: 3.9rem;
  align-items: start;
`;

const SocialNetworks = styled.div`
  display: flex;
  gap: 1.2rem;
  align-items: center;
`;

interface IconProps {
  $url: string;
}

const InstagramIcon = styled.a<IconProps>`
  background: url(${(props) => props.$url}) center/cover no-repeat;
  width: 2.2rem;
  height: 2.2rem;
`;

const FacebookIcon = styled.a<IconProps>`
  background: url(${(props) => props.$url}) center/cover no-repeat;
  width: 2.1rem;
  height: 2.1rem;
`;

const TwitterIcon = styled.a<IconProps>`
  background: url(${(props) => props.$url}) center/cover no-repeat;
  width: 2.3rem;
  height: 2.3rem;
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  align-items: end;
`;

const VisaMastercard = styled.img`
  width: 6.8rem;
  height: 2.2rem;
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7rem;
`;

const Copyright = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  align-items: start;
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 1rem;

  padding-left: 10.7rem;
`;

type FooterProps = {
  id: string;
};

const Footer = ({ id }: FooterProps) => {
  return (
    <FooterContainer id={id}>
      <Column>
        <FooterHeader>
          <LeftContainer>
            <Logo />
            <Copyright>
              <p>© Все права защищены</p>
              <StyledLink to="" $textStyles={Text} $color="">
                Политика конфиденциальности
              </StyledLink>
              <StyledLink to="" $textStyles={Text} $color="">
                Публичная оферта
              </StyledLink>
            </Copyright>
          </LeftContainer>
          <CenterContainer>
            <Navbar />
            <Links>
              <StyledLink to="" $textStyles={Text} $color="">
                Пальто
              </StyledLink>
              <StyledLink to="" $textStyles={Text} $color="">
                Свитшоты
              </StyledLink>
              <StyledLink to="" $textStyles={Text} $color="">
                Кардиганы
              </StyledLink>
              <StyledLink to="" $textStyles={Text} $color="">
                Толстовки
              </StyledLink>
            </Links>
          </CenterContainer>
          <RightContainer>
            <Contacts>
              <p>+7 (495) 823-54-12</p>
              <p>hello@womazing.com</p>
            </Contacts>
            <SocialNetworks>
              <InstagramIcon
                href="https://www.instagram.com/"
                target="_blank"
                $url={InstagramURL}
              />
              <FacebookIcon
                href="https://www.facebook.com/"
                target="_blank"
                $url={FacebookURL}
              />
              <TwitterIcon
                href="https://twitter.com/"
                target="_blank"
                $url={TwitterURL}
              />
            </SocialNetworks>
            <VisaMastercard src={VisaMastercardURL} />
          </RightContainer>
        </FooterHeader>
      </Column>
    </FooterContainer>
  );
};

export default Footer;
