import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
  color: var(--CTA-color);
  font-size: 1.7rem;
  font-weight: 500;
  line-height: 140%; /* 23.8px */
  letter-spacing: 0.34px;
  text-decoration: none;

  position: relative;

  &::after {
    content: '';
    width: 100%;
    height: 1px;
    background: #cededf;
    position: absolute;
    bottom: -0.5rem;
    left: 0;
    opacity: 0;
    transition: opacity 0.5s ease;
  }

  &:hover::after {
    opacity: 1;
  }
`;

export default StyledLink;
