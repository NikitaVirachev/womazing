import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 110rem;

  display: flex;
  flex-direction: column;
  gap: 13rem;
`;

interface ColumnProps {
  children?: React.ReactNode;
}

const Column = ({ children }: ColumnProps) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Column;
