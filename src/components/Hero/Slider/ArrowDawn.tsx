import React from 'react';
import styled from 'styled-components';

import ArrowDawnURL from '../../../assets/img/icons/arrowDawn.svg';

type AroowDawnIcon = {
  $url: string;
};

const AroowDawnIcon = styled.div<AroowDawnIcon>`
  background: url(${(props) => (props.$url ? props.$url : '')});
  width: 6.7rem;
  height: 6.7rem;
`;

const ArrowDawn = () => {
  return <AroowDawnIcon $url={ArrowDawnURL} />;
};

export default ArrowDawn;
