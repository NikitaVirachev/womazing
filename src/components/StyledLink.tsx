import styled, { CSSProp } from 'styled-components';
import { Link } from 'react-router-dom';

interface StyledLinkProps {
  $color: string;
  $textStyles: CSSProp;
}

const StyledLink = styled(Link)<StyledLinkProps>`
  text-decoration: none;
  position: relative;

  &::after {
    content: '';
    width: 100%;
    height: 1px;
    background: ${(props) => (props.$color ? props.$color : '#000')};
    position: absolute;
    bottom: -0.5rem;
    left: 0;
    opacity: 0;
    transition: opacity 0.5s ease;
  }

  &:hover::after {
    opacity: 1;
  }

  ${(props) => props.$textStyles}
`;

export default StyledLink;
