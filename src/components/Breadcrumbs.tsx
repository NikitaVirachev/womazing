import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { PlainTextStyles } from './Typography/PlainText.jsx';

const StyledLink = styled(Link)`
  color: ${(props) => (props.$isCurrent ? '#909090' : '#000')};
  text-decoration: none;
`;

const BreadcrumbsContainer = styled.div`
  ${PlainTextStyles}

  display: flex;
  gap: 1.3rem;
`;

const Breadcrumbs = ({ breadcrumbsList }) => {
  return (
    <BreadcrumbsContainer>
      {breadcrumbsList.map((breadcrumb, index, array) => {
        if (index !== array.length - 1) {
          return (
            <React.Fragment key={breadcrumb.id}>
              <StyledLink $isCurrent={false} to={breadcrumb.path}>
                {breadcrumb.name}
              </StyledLink>
              <span>—</span>
            </React.Fragment>
          );
        } else {
          return (
            <StyledLink
              key={breadcrumb.id}
              $isCurrent={true}
              to={breadcrumb.path}
            >
              {breadcrumb.name}
            </StyledLink>
          );
        }
      })}
    </BreadcrumbsContainer>
  );
};

Breadcrumbs.propTypes = {
  breadcrumbsList: PropTypes.array,
};

export default Breadcrumbs;
