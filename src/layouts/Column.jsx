import React from 'react';
import PropTypes from 'prop-types';
import { stylesheet } from 'astroturf';

const styles = stylesheet`
  .column {
  }
`;

const Column = ({ children }) => {
  return <div className={styles.column}>{children}</div>;
};

Column.propTypes = {
  children: PropTypes.node,
};

export default Column;
