import styled, { css } from 'styled-components';

export const PlainTextStyles = css`
  color: #000;
  font-size: 1.7rem;
  font-weight: 500;
  line-height: 140%; /* 23.8px */
  letter-spacing: 0.34px;
`;

const PlainText = styled.p`
  ${PlainTextStyles}
`;

export default PlainText;
