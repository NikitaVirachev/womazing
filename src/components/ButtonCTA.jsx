import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const outlineStyles = css`
  border: 1px solid var(--CTA-color);
  background: inherit;
  color: var(--CTA-color);

  &:hover {
    color: #fff;
    background: var(--CTA-color);
  }
`;

const ButtonCTA = styled.button`
  display: inline-flex;
  justify-content: center;
  padding: 2.2rem 5rem;
  background: var(--CTA-color);
  border: none;
  cursor: pointer;

  color: #fff;
  font-size: 1.7rem;
  font-weight: 400;
  line-height: 138.9%; /* 23.613px */
  letter-spacing: 0.34px;

  transition: all 0.5s ease;

  &:hover {
    background: #509498;
  }

  ${(props) => props.$isOutline && outlineStyles};
`;

ButtonCTA.propTypes = {
  children: PropTypes.node,
  $isOutline: PropTypes.bool,
};

export default ButtonCTA;
