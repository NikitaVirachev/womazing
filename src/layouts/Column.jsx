import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 110rem;
`;

const Column = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

Column.propTypes = {
  children: PropTypes.node,
};

export default Column;
